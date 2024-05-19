import { SignIn } from "@clerk/nextjs";

export default function LogInUser() {
  return <SignIn path="/signin" />;
}