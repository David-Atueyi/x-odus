import Link from "next/link";

export const HomeScreenIndex = () => {
  return (
    <section className="py-16 text-center animate-fadeInUp">
      <h1 className="text-4xl md:text-5xl font-extrabold">
        Welcome to <span className="text-[#184b8c]">X-odus</span>
      </h1>
      <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">
        Fast, flexible, and reliable data plans — choose from Daily, Weekly, or
        Monthly options. Sign in to your account to access secure purchasing and
        manage your data plans.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/plans"
          className="px-6 py-3 rounded-xl bg-[#184b8c] text-white hover:scale-105 active:scale-95 transition-transform"
        >
          View Plans
        </Link>
        <Link
          href="/signin"
          className="px-6 py-3 rounded-xl border border-[#184b8c]/30 hover:scale-105 active:scale-95 transition-transform"
        >
          Sign In
        </Link>
      </div>
    </section>
  );
};
