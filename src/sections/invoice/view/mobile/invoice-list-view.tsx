import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Badge } from "src/components/ui/badge";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "src/components/ui/input-group";
import { cn } from "src/lib/utils";
import { paths } from "src/routes/paths";
import { fCurrency } from "src/utils/format-number";

// ------------------------------------------------------------

export const invoices = [
  {
    id: 1,
    name: "Boby Agy Wijaya",
    invoiceCode: "INV2511110956",
    price: 250000,
    status: "aktif",
  },
  {
    id: 2,
    name: "Rahmat Alfarizqy",
    invoiceCode: "INV2511111057",
    price: 250000,
    status: "tertunda",
  },
  {
    id: 3,
    name: "Boby Agy Wijaya",
    invoiceCode: "INV2511110956",
    price: 250000,
    status: "kedaluarsa",
  },
];

const statuses = ["semua", "aktif", "tertunda", "kedaluarsa"];

// ------------------------------------------------------------

export function MobileInvoiceListView() {
  const router = useRouter();

  const [selectedStatus, setSelectedStatus] = useState("semua");
  const [filteredInvoices, setFilteredInvoices] = useState(invoices);
  const [searchInvoice, setSearchInvoice] = useState("");

  // Filter Invoice
  useEffect(() => {
    let list = invoices;

    if (selectedStatus !== "semua") {
      list = list.filter((invoice) => invoice.status === selectedStatus);
    }

    if (searchInvoice.trim() !== "") {
      const q = searchInvoice.toLowerCase();
      list = list.filter(
        (inv) =>
          inv.name.toLowerCase().includes(q) ||
          inv.invoiceCode.toLowerCase().includes(q)
      );
    }

    setFilteredInvoices(list);
  }, [selectedStatus, searchInvoice]);

  const counts = invoices.reduce(
    (acc, inv) => {
      acc.totalSemua++;

      if (inv.status === "aktif") acc.totalAktif++;
      if (inv.status === "tertunda") acc.totalTertunda++;
      if (inv.status === "kedaluarsa") acc.totalKedaluarsa++;

      return acc;
    },
    {
      totalSemua: 0,
      totalAktif: 0,
      totalTertunda: 0,
      totalKedaluarsa: 0,
    }
  );

  return (
    <div className="flex flex-col">
      <div className="z-10 fixed top-0 left-0 h-[60px] w-full flex items-center justify-between px-5">
        <Button
          variant="ghost"
          onClick={() => {
            router.back();
          }}
          className="text-base font-semibold has-[>svg]:px-0"
        >
          <Icon icon="solar:arrow-left-outline" className="size-5" />
          Invoice
        </Button>
        <Link href={paths.dashboard.invoice.create} className="font-semibold">
          Buat
        </Link>
      </div>
      <div className="flex flex-col pt-17">
        <div className="mb-4">
          <InputGroup className="h-[50px] rounded-full shadow-none">
            <InputGroupInput
              placeholder="Cari nama / kode invoice..."
              className="placeholder:text-sm"
              onChange={(e) => setSearchInvoice(e.target.value)}
            />
            <InputGroupAddon className="pl-4">
              <Icon icon="solar:magnifer-outline" />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex items-center gap-2 mb-4 overflow-auto no-scrollbar">
          {statuses.map((status) => (
            <Button
              key={status}
              size="sm"
              variant={selectedStatus === status ? "default" : "outline"}
              className="text-xs font-semibold rounded-full shadow-none"
              onClick={() => setSelectedStatus(status)}
            >
              {status === "semua" && `Semua | ${counts.totalSemua}`}
              {status === "aktif" && `Aktif | ${counts.totalAktif}`}
              {status === "tertunda" && `Tertunda | ${counts.totalTertunda}`}
              {status === "kedaluarsa" &&
                `Kadaluarsa | ${counts.totalKedaluarsa}`}
            </Button>
          ))}
        </div>
        <div className="space-y-3">
          {filteredInvoices.map((invoice) => (
            <Card key={invoice.id} className="py-4 shadow-none relative">
              <CardContent>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-1 text-sm">
                    <p className="font-medium">{invoice.name}</p>
                    <p className="text-neutral-500">{invoice.invoiceCode}</p>
                    <p className="font-semibold">{fCurrency(invoice.price)}</p>
                  </div>
                  <Badge
                    variant="secondary"
                    className={cn(
                      "absolute top-2 right-2 text-white",
                      invoice.status === "aktif" && "bg-green-500",
                      invoice.status === "tertunda" && "bg-yellow-500",
                      invoice.status === "kedaluarsa" && "bg-red-500"
                    )}
                  >
                    {invoice.status.charAt(0).toUpperCase() +
                      invoice.status.slice(1)}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
