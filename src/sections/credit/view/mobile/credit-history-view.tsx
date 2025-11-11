import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "src/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "src/components/ui/input-group";
import { creditHistory } from "./credit-view";
import { Card, CardContent } from "src/components/ui/card";
import { Badge } from "src/components/ui/badge";
import { cn } from "src/lib/utils";

// ------------------------------------------------------------

const types = ["semua", "topup", "use"];

// ------------------------------------------------------------

export function MobileCreditHistoryView() {
  const router = useRouter();

  const [selectedType, setSelectedType] = useState("semua");
  const [filteredCredit, setFilteredCredit] = useState(creditHistory);
  const [searchCredit, setSearchCredit] = useState("");

  useEffect(() => {
    let list = creditHistory;

    if (selectedType !== "semua") {
      list = list.filter((cre) => cre.type === selectedType);
    }

    if (searchCredit.trim() !== "") {
      const q = searchCredit.toLowerCase();
      list = list.filter((cred) => cred.description.toLowerCase().includes(q));
    }

    setFilteredCredit(list);
  }, [selectedType, searchCredit]);

  const { totalTopupAmount, totalUseAmount } = creditHistory.reduce(
    (acc, cur) => {
      if (cur.type === "topup") acc.totalTopupAmount += cur.amount;
      if (cur.type === "use") acc.totalUseAmount += cur.amount;
      return acc;
    },
    { totalTopupAmount: 0, totalUseAmount: 0 }
  );

  const totalSemuaAmount = totalTopupAmount + totalUseAmount;

  return (
    <div className="flex flex-col">
      <div className="z-10 fixed top-0 left-0 h-[60px] w-full bg-background flex items-center justify-between px-5">
        <Button
          variant="ghost"
          onClick={() => {
            router.back();
          }}
          className="text-base font-semibold has-[>svg]:px-0"
        >
          <Icon icon="solar:arrow-left-outline" className="size-5" />
          Riwayat Credit
        </Button>
      </div>
      <div className="flex flex-col pt-17">
        <div className="mb-4">
          <InputGroup className="h-[50px] rounded-full shadow-none">
            <InputGroupInput
              placeholder="Cari riwayat credit..."
              className="placeholder:text-sm"
              onChange={(e) => setSearchCredit(e.target.value)}
            />
            <InputGroupAddon className="pl-4">
              <Icon icon="solar:magnifer-outline" />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex items-center gap-3 mb-4">
          {types.map((type) => (
            <Button
              key={type}
              size="sm"
              variant={selectedType === type ? "default" : "outline"}
              className="text-xs font-semibold rounded-full shadow-none"
              onClick={() => setSelectedType(type)}
            >
              {type === "semua" && `Semua | ${totalSemuaAmount}`}
              {type === "topup" && `Topup | ${totalTopupAmount}`}
              {type === "use" && `Pakai | ${totalUseAmount}`}
            </Button>
          ))}
        </div>
        <div className="space-y-3">
          {filteredCredit.map((item) => (
            <Card key={item.id} className="shadow-none relative">
              <CardContent>
                <div className="flex flex-col gap-1 text-sm">
                  <p className="font-medium">{item.amount} credit</p>
                  <p className="text-neutral-500 truncate">
                    {item.description}
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className={cn(
                    "absolute top-2 right-2 text-white",
                    item.type === "topup" && "bg-green-500",
                    item.type === "use" && "bg-yellow-500"
                  )}
                >
                  {item.type === "topup" && "Topup"}
                  {item.type === "use" && "Pakai"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
