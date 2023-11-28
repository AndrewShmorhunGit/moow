import InitialPage from "@/components/pages/InitialPage";
import { auth } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = await auth();
  return <InitialPage userId={userId} />;
}
