import Link from "next/link";

export const SignInFooter = () => {
  return (
    <>
      <div className="mt-8 text-center">
        <p className="text-sm text-[#184b8c]/60">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-[#184b8c] font-semibold hover:underline"
          >
            Sign up here
          </Link>
        </p>
      </div>

      <div className="mt-8 p-4 bg-[#184b8c]/5 rounded-xl">
        <h3 className="font-semibold text-[#184b8c] mb-2 text-sm">
          🔒 Secure Access Required
        </h3>
        <p className="text-xs text-[#184b8c]/70">
          You need to be logged in to access any features of X-odus. Your
          account keeps your data and purchase history secure.
        </p>
      </div>
    </>
  );
};
