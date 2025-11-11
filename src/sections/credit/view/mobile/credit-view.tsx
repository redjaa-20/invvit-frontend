import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Badge } from "src/components/ui/badge";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "src/components/ui/drawer";
import { cn } from "src/lib/utils";
import { paths } from "src/routes/paths";

// ------------------------------------------------------------

export const creditHistory = [
  { id: 1, amount: 5, description: "Bonus credit Invvit", type: "topup" },
  {
    id: 2,
    amount: 1,
    description: "Buat invoice #INV2511110956",
    type: "use",
  },
  { id: 3, amount: 5, description: "Bonus credit Invvit", type: "topup" },
  {
    id: 4,
    amount: 1,
    description: "Buat invoice #INV2511111057",
    type: "use",
  },
  { id: 5, amount: 5, description: "Bonus credit Invvit", type: "topup" },
  {
    id: 6,
    amount: 1,
    description: "Buat invoice #INV2511110956",
    type: "use",
  },
];

// ------------------------------------------------------------

export function MobileCreditView() {
  const router = useRouter();

  const [openCreditTopupDrawer, setOpenCreditTopupDrawer] = useState(false);

  const creditTopupDrawer = () => (
    <Drawer
      open={openCreditTopupDrawer}
      onOpenChange={setOpenCreditTopupDrawer}
    >
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Masukkan nominal credit</DrawerTitle>
        </DrawerHeader>
        <DrawerFooter className="flex-row justify-between">
          <DrawerClose asChild>
            <Button variant="ghost" className="flex-1 h-10 rounded-xl">
              Batal
            </Button>
          </DrawerClose>
          <Button className="flex-1 h-10 rounded-xl">Lanjut</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );

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
          Credit
        </Button>
      </div>
      <div className="flex flex-col pt-17">
        <Card className="bg-linear-to-r from-blue-700 to-blue-800 text-white rounded-[20px] shadow-none py-4 mb-5">
          <CardContent className="pr-4">
            <div className="flex justify-between">
              <div className="flex flex-col gap-y-7">
                <p className="font-semibold">Sisa credit</p>
                <p className="text-4xl font-semibold">
                  30 <span className="text-base font-normal">credit</span>
                </p>
              </div>
              <Button
                size="sm"
                variant="secondary"
                className="h-7 text-xs rounded-full"
                onClick={() => setOpenCreditTopupDrawer(true)}
              >
                Topup
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="flex items-center justify-between text-sm font-medium mb-3">
          <p>Riwayat credit</p>
          <Link href={paths.dashboard.credit.history}>Lainnya</Link>
        </div>
        <div className="space-y-3">
          {creditHistory.map((item) => (
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
      {creditTopupDrawer()}
    </div>
  );
}
