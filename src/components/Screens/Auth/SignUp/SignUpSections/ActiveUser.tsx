import Link from "next/link";

export const ActiveUser = ({ userEmail }: { userEmail: string }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 animate-fadeInUp">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✓</span>
          </div>
          <h1 className="text-2xl font-bold text-[#184b8c] mb-2">
            Already Signed In
          </h1>
          <p className="text-[#184b8c]/70 mb-6">
            You&apos;re signed in as{" "}
            <span className="font-semibold">{userEmail}</span>
          </p>
          <Link
            href="/plans"
            className="inline-block px-6 py-3 bg-[#184b8c] text-white rounded-xl font-semibold hover:scale-105 active:scale-95 transition-transform"
          >
            View Plans
          </Link>
        </div>
      </div>
    </div>
  );
};
