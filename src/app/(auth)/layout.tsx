import { MoowLogo } from "@/assets/logos/MoowLogo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        height: "100vh",
        minHeight: "32rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "inherit",
      }}
    >
      <div style={{ position: "fixed", top: "1rem", left: "1rem" }}>
        {/* Main Logo */}
        <MoowLogo size={92} />
      </div>
      <Link
        href={"/"}
        style={{
          fontWeight: "800",
          fontSize: "1.6rem",
          position: "fixed",
          top: "3rem",
          right: "1rem",
          textDecoration: "none",
          textTransform: "uppercase",
          color: "inherit",
        }}
      >
        &larr; back
      </Link>
      {children}
    </div>
  );
}
