
import type { Metadata } from "next";
import { AppProviders } from "@/components/app/AppProviders";
import { AppContainer } from "@/components/app/AppContainer";

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
  