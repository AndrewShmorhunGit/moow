This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Download

- Download app folder from the repository

1. In the empty folder dir, run the command:

```bash
git clone git@github.com:AndrewShmorhunGit/moow.gi
cd moon

```

## Install the dependencies

- In the app root folder

```bash
npm i
```

## ENV example

- To start add your GOOGLE_MAPS_API_KEY in to .env.example

- [Clerk](https://clerk.com/)
- [Google Maps API](https://console.cloud.google.com/apis)

```bash
// Clerk example keys is valid!
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY=CLERK_SECRET_KEY
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/register
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/main
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/auth
// Add only a GOOGLE_MAPS_API_KEY
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=GOOGLE_MAPS_API_KEY


```

Then RENAME it as ".env"

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
