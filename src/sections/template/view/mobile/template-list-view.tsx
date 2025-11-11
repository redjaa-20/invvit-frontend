import { Icon } from "@iconify/react";
import Image from "next/image";
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

// ------------------------------------------------------------

export const templates = [
  {
    id: 1,
    name: "Minimalist 1",
    thumbnail: "minimalist.webp",
    category: "minimalist",
    type: "premium",
  },
  {
    id: 2,
    name: "Minimalist 2",
    thumbnail: "minimalist.webp",
    category: "minimalist",
    type: "regular",
  },
  {
    id: 3,
    name: "Elegant 1",
    thumbnail: "minimalist.webp",
    category: "elegant",
    type: "regular",
  },
  {
    id: 4,
    name: "Luxury 1",
    thumbnail: "minimalist.webp",
    category: "luxury",
    type: "premium",
  },
];

const templateCategory = ["minimalist", "elegant", "luxury"];

const templateType = ["regular", "premium"];

// ------------------------------------------------------------

export function MobileTemplateListView() {
  const router = useRouter();

  const [filteredTemplate, setFilteredTemplate] = useState(templates);
  const [searchTemplate, setSearchTemplate] = useState("");

  useEffect(() => {
    let list = templates;

    //   if (selectedStatus !== "semua") {
    //     list = list.filter((invoice) => invoice.status === selectedStatus);
    //   }

    if (searchTemplate.trim() !== "") {
      const q = searchTemplate.toLowerCase();
      list = list.filter((template) => template.name.toLowerCase().includes(q));
    }

    setFilteredTemplate(list);
  }, [
    // selectedStatus,
    searchTemplate,
  ]);

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
          Template
        </Button>
      </div>
      <div className="flex flex-col pt-17">
        <div className="mb-4">
          <InputGroup className="h-[50px] rounded-full shadow-none">
            <InputGroupInput
              placeholder="Cari template..."
              className="placeholder:text-sm"
              onChange={(e) => setSearchTemplate(e.target.value)}
            />
            <InputGroupAddon className="pl-4">
              <Icon icon="solar:magnifer-outline" />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-4">
          {filteredTemplate.map((template) => (
            <Card key={template.id} className="pt-1 pb-2 shadow-none">
              <CardContent className="px-1">
                <div className="flex flex-col">
                  <div className="relative h-25 overflow-hidden rounded-lg mb-2">
                    <Image
                      src={`/assets/images/template-thumbnail/${template.thumbnail}`}
                      alt={template.name}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                    <Badge
                      variant="secondary"
                      className={cn(
                        "absolute top-1 right-1 text-white",
                        template.type === "regular" && "bg-green-500",
                        template.type === "premium" && "bg-blue-500"
                      )}
                    >
                      {template.type.charAt(0).toUpperCase() +
                        template.type.slice(1)}
                    </Badge>
                  </div>
                  <div className="flex flex-col gap-y-2 px-1.5">
                    <p className="text-sm font-medium truncate">
                      {template.name}
                    </p>
                    <div className="flex items-center gap-1">
                      <Icon icon="solar:heart-outline" />
                      <p className="text-xs">1.1K</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
