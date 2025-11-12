import React from "react";
import Logo from "src/components/logo/logo";

// ------------------------------------------------------------

export default function MobileAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <div className="bg-blue-700 h-50 flex flex-col justify-end gap-2 px-7 pb-10">
        <Logo
          className="h-15 w-15"
          primaryColor="#ffffff"
          secondaryColor="#d4d4d4"
        />
        <h1 className="text-white text-3xl font-semibold tracking-tighter">
          InvvitApp
        </h1>
      </div>
      <div className="bg-background flex-1 py-5 px-7 rounded-t-2xl z-10 -mt-5">
        {children}
      </div>
    </div>
  );
}
