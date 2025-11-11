"use client";

import { Loader2 } from "lucide-react"; // Impor ikon spinner
import Logo from "../logo/logo";

export const LoadingScreen = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background">
      {/* Ganti dengan Logo Anda */}
      {/* <div className="mb-4 text-2xl font-bold">InvvitApp</div> */}
      <Logo className="h-15" />

      {/* Animasikan ikon spinner-nya */}
      {/* <Loader2 className="h-6 w-6 animate-spin text-primary" /> */}
    </div>
  );
};
