import React from "react";
import "./FeaturesSection.scss";
import { featuresConfig as features } from "@/config/features.config";

export function FeaturesSection() {
  return (
    <section id="features" className="features-container">
      <div className="features-header">
        <h2 className="features-title">Features</h2>
        {/* <p className="features-description">
          This project is an experiment to see how a modern app, with features
          like auth, subscriptions, API routes, and static pages would work in
          Next.js 13 app dir.
        </p> */}
      </div>
      <div className="features-grid">
        {/* Repeat this block for each feature */}
        {features.map((feature) => {
          return (
            <div key={feature.name} className="feature-item">
              <div className="feature-icon">
                <feature.icon size={64} />
              </div>
              <div className="feature-content">
                <h3 className="feature-heading">
                  {feature.name} {feature.version}
                </h3>
                <p className="feature-text">{feature.description}</p>
              </div>
            </div>
          );
        })}
        {/* ... other feature items ... */}
      </div>
      <div className="additional-info">
        <p className="info-text">
          Here I am using Next.js but under the hood implemented standard
          React.js fetching and state management approach.
        </p>
      </div>
    </section>
  );
}
