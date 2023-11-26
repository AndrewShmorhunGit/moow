import React from "react";
import Link from "next/link";
import "./HeroSection.scss";
import { auth } from "@clerk/nextjs";

export const HeroSection = async () => {
  const { userId } = await auth();
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
          Follow along on Linked In
        </Link>
        <h1 className="hero-title">
          Map-Integrated Website with Custom Design.
        </h1>
        <p className="hero-description">
          Development of a Responsive, Map-Integrated Website with Custom Design
          Compliance and Dynamic Price Calculation Functionality.
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
