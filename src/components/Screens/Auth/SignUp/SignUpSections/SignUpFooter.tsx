import Link from "next/link";

export const SignUpFooter = () => {
  return (
    <>
      <div className="mt-8 text-center">
        <p className="text-sm text-[#184b8c]/60">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-[#184b8c] font-semibold hover:underline"
          >
            Sign in here
          </Link>
        </p>
      </div>

      <div className="mt-8 p-4 bg-[#184b8c]/5 rounded-xl">
        <h3 className="font-semibold text-[#184b8c] mb-2 text-sm">
          🔒 Account Required
        </h3>
        <ul className="text-xs text-[#184b8c]/70 space-y-1">
          <li>• Secure access to all X-odus features</li>
          <li>• Protected purchase history and data</li>
          <li>• Personalized plan recommendations</li>
          <li>• Account-based billing and support</li>
        </ul>
      </div>
    </>
  );
};
