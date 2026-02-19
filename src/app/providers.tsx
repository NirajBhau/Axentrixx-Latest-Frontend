"use client";

import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import { ModalProvider } from "@/context/ModalContext";
import GetQuoteModal from "@/components/GetQuote/GetQuoteModal";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      defaultTheme="light"
    >
      <ModalProvider>
        <Toaster />
        {children}
        <GetQuoteModal />
      </ModalProvider>
    </ThemeProvider>
  );
}
