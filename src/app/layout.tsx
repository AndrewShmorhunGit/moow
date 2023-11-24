import { AppContainer } from "@/components/app/AppContainer";
import { AppProviders } from "@/components/app/AppProviders";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application Title",
  description: "Authentication with clerk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProviders>
      <AppContainer>{children}</AppContainer>
    </AppProviders>
  );
}
