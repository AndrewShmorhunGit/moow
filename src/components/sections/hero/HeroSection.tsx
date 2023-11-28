import React from "react";
import Link from "next/link";
import "./HeroSection.scss";
import { auth } from "@clerk/nextjs";

export const HeroSection = ({ userId }: { userId: string | null }) => {
  const href = userId ? "/main" : "/auth";
  return (
    <section className="hero-section">
      <div className="hero-container">
        <Link
          className="hero-twitter-link"
          href={"siteConfig.links.twitter"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository code
        </Link>
        <h1 className="hero-title">
          Map-Integrated Website with Custom Design.
        </h1>
        <p className="hero-description">
          Developing a responsive website with an integrated map with custom
          design and dynamic pricing functionality depends on dynamically
          generated routes.
        </p>
        <div className="hero-buttons">
          <Link href={href} className="hero-button">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};
