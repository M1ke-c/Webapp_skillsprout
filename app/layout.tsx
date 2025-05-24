"use client";

import "./globals.css";
import { PrivyProvider } from "@privy-io/react-auth";
import { StarknetProvider } from "@/components/starknet-provider";
import { useEffect, useState } from "react";

const PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

if (!PRIVY_APP_ID) {
  throw new Error("NEXT_PUBLIC_PRIVY_APP_ID is not defined");
}

// Ensure PRIVY_APP_ID is treated as a string after the check
const privyAppId: string = PRIVY_APP_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <html lang="en">
        <body>
          <div className="flex min-h-screen items-center justify-center bg-[#0c0c15] text-white">
            Loading...
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <title>Skillsprout</title>
        <meta name="description" content="Skillsprout - Growing Skills for the Future" />
      </head>
      <body>
        <PrivyProvider
          appId={privyAppId}
          config={{
            loginMethods: ["email", "wallet"],
            appearance: {
              theme: "dark",
              accentColor: "#0D9488",
              showWalletLoginFirst: false,
              logo: "/logo.png",
            },
            embeddedWallets: {
              createOnLogin: "all-users",
            },
          }}
        >
          <StarknetProvider>
            {children}
          </StarknetProvider>
        </PrivyProvider>
      </body>
    </html>
  );
}
