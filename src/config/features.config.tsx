import {
  ScssIcon,
  AuthIcon,
  NextIcon,
  ReactIcon,
  ReduxIcon,
  GoogleIcon,
  SqliteIcon,
  TypescriptIcon,
} from "@/assets/icons/features";
import { FC } from "react";

type IconProps = {
  size?: number;
  fill?: string;
};

type Feature = {
  name: string;
  description: string;
  version?: number;
  icon: FC<IconProps>;
};

export const featuresConfig: Feature[] = [
  {
    name: "Next.js",
    description: "App dir, Routing, Layouts, Loading UI and API routes.",
    version: 14,
    icon: NextIcon,
  },
  {
    name: "React",
    description: "Server and Client Components. Use hook.",
    version: 18,
    icon: ReactIcon,
  },
  {
    name: "Redux",
    description: "Store state and middleware. Async actions.",
    icon: ReduxIcon,
  },
  {
    name: "Clerk",
    description: "Authentication using ClerkAuth and middlewares.",
    icon: AuthIcon,
  },
  {
    name: "Scss",
    description:
      "Standard CSS with features like variables, nesting, mixins, and functions.",
    icon: ScssIcon,
  },
  {
    name: "Google Maps",
    description:
      "A web mapping service offering satellite imagery, street maps, and route planning for traveling by foot, car, bicycle, or public transportation.",
    icon: GoogleIcon,
  },
  {
    name: "Sqlite",
    description:
      "A lightweight, disk-based database that doesn't require a separate server process.",
    icon: SqliteIcon,
  },
  {
    name: "Type Script",
    description:
      "TypeScript is a strongly typed programming language that giving you better tooling at any scale.",
    icon: TypescriptIcon,
  },
];
