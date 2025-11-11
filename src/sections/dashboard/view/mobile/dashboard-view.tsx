import { Icon } from "@iconify/react";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";

// ------------------------------------------------------------

export function MobileDashboardView() {
  return (
    <div className="flex flex-col pt-8">
      <div className="flex items-center justify-between mb-7">
        <div className="flex items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/assets/images/avatar/foto-profil.png" />
            <AvatarFallback>RD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-xs">Selamat Datang,</p>
            <p className="font-semibold">Reinaldi Djamil</p>
          </div>
        </div>
        <Button size="icon" variant="ghost">
          <Icon icon="solar:bell-bing-outline" className="size-6" />
        </Button>
      </div>
      <Card className="bg-linear-to-r from-blue-700 to-blue-800 text-white shadow-none">
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
    </div>
  );
}
