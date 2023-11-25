"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { navItems as items } from "@/config/nav.config";
import "./Navigation.scss";
import { MoowLogo } from "@/assets/logos/MoowLogo";

const Navigation = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="navigation">
      <Link href="/" className="navigation-logo">
        <div
          style={{ borderRadius: "100rem", overflow: "hidden" }}
          className="center"
        >
          <MoowLogo size={64} />
        </div>
        <span className="navigation-site-name"></span>
      </Link>
      {items?.length ? (
        <nav className="navigation-menu">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={`navigation-item ${
                item.href.startsWith(`/${segment}`) ? "active" : ""
              } ${item.disabled ? "disabled" : ""}`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
};

export default Navigation;
