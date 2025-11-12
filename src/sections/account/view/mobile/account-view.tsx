import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import { paths } from "src/routes/paths";

// ------------------------------------------------------------

const menuItems = [
  {
    icon: "solar:user-id-outline",
    label: "Detail akun",
    disabled: false,
  },
  {
    icon: "solar:share-circle-outline",
    label: "Afiliasi (coming soon)",
    disabled: true,
  },
  {
    icon: "solar:info-circle-outline",
    label: "Tertang Invvit",
    disabled: false,
  },
];

// ------------------------------------------------------------

export function MobileAccountView() {
  const router = useRouter();

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
          Akun
        </Button>
      </div>
      <div className="flex flex-col pt-17">
        <div className="flex flex-col items-center mb-5">
          <Avatar className="h-25 w-25 mb-4">
            <AvatarImage src="/assets/images/avatar/foto-profil.png" />
            <AvatarFallback>RD</AvatarFallback>
          </Avatar>
          <p className="font-bold">Reinaldi Djamil</p>
          <p className="text-sm">kianred20@gmail.com</p>
        </div>
        <Card className="py-3 shadow-none mb-5">
          <CardContent className="px-3">
            <div className="flex flex-col gap-y-4 text-center">
              <p className="text-sm">
                Upgrade ke Premium untuk menikmati berbagai fitur menarik
              </p>
              <Button className="font-semibold rounded-full">
                Upgrade ke Premium
              </Button>
            </div>
          </CardContent>
        </Card>
        <h3 className="text-sm font-semibold text-neutral-600">Menu lainnya</h3>
        <div className="space-y-3 mt-2">
          {menuItems.map((item, i) => (
            <Button
              key={i}
              variant="outline"
              className="h-12 w-full justify-between shadow-none"
              disabled={item.disabled}
            >
              <div className="flex items-center gap-3">
                <Icon icon={item.icon} className="size-5" />
                {item.label}
              </div>
              <Icon icon="solar:alt-arrow-right-outline" />
            </Button>
          ))}

          <Button
            variant="outline"
            className="h-12 w-full justify-start gap-3 shadow-none"
            onClick={() => router.push(paths.auth.login)}
          >
            <Icon icon="solar:logout-2-outline" className="size-5" />
            Keluar
          </Button>
        </div>
      </div>
    </div>
  );
}
