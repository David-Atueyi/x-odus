import { ActiveUser } from "./SignUpSections/ActiveUser";
import { SignUpFooter } from "./SignUpSections/SignUpFooter";
import { SignUpForm } from "./SignUpSections/SignUpForm";
import { SignUpHeader } from "./SignUpSections/SignUpHeader";

export const SignUpScreenIndex = () => {
  const userEmail = "hellojohn@Gmail.com";

  if (userEmail) {
    return <ActiveUser userEmail={userEmail} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="max-w-md w-full p-8 animate-fadeInUp">
        {/* Header */}
        <SignUpHeader />

        {/* Form */}
        <SignUpForm />

        {/* Footer */}
        <SignUpFooter />
      </div>
    </div>
  );
};
