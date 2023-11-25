import { prisma } from "@/utils/prisma/prisma";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Auth() {
  const user = await currentUser();

  if (user) {
    const match = await prisma.user.findUnique({
      where: {
        clerkId: user.id as string,
      },
    });

    if (!match) {
      await prisma.user.create({
        data: {
          clerkId: user.id,
          email: user.emailAddresses[0].emailAddress,
        },
      });
    }
    redirect("/delivery");
  }

  redirect("/");
}
