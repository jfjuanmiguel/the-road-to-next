import Link from "next/link";
import { CardCompact } from "@/components/card-compact";
import { SignUpForm } from "@/features/auth/components/sign-up-form";
import { signInPath } from "@/paths";

const SignUpPage = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title="Sign Up"
        description="Create an account to get started"
        content={<SignUpForm />}
        className="w-full max-w-[420px] animate-fade-from-top"
        footer={
          <Link href={signInPath()} className="text-sm text-muted-foreground">
            Have an account? Sign In now.
          </Link>
        }
      />
    </div>
  );
};

export default SignUpPage;
