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
        <p className="feature-text" style={{ textAlign: "center" }}>
          This application represents a cutting-edge blend of Google Maps API
          integration and experimental AI technology to create an intuitive and
          dynamic mapping experience. The core functionality revolves around the
          Google Maps component, which is adeptly managed within Next framework,
          React library using TypeScript. This providing users with real-time
          geolocation services and route mapping.
        </p>
      </div>
      {/* <div className="additional-info">
        <p className="info-text">
          This application represents a cutting-edge blend of Google Maps API
          integration and experimental AI technology to create an intuitive and
          dynamic mapping experience. The core functionality revolves around the
          Google Maps component, which is adeptly managed within Next framework,
          React library using TypeScript. This providing users with real-time
          geolocation services and route mapping.
        </p>
      </div> */}
    </section>
  );
}
