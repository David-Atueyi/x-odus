import { SignInFooter } from "./SignInSections/SignInFooter";
import { SignInForm } from "./SignInSections/SignInForm";
import { SignInHeader } from "./SignInSections/SignInHeader";

export const SignInScreenIndex = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="max-w-md w-full p-8 animate-fadeInUp">
        <SignInHeader />
        <SignInForm />
        <SignInFooter />
      </div>
    </div>
  );
};
