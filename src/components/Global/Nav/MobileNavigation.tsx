import { useIsMobileMenuOpenStore } from "@/base/store/zustand/useIsMobileMenuOpenStore";
import Link from "next/link";

export const MobileNavigation = ({
  navLinks,
  userEmail,
  logout,
}: {
  navLinks: { href: string; label: string }[];
  userEmail: string | null;
  logout: () => void;
}) => {
  const { setIsMobileMenuOpen } = useIsMobileMenuOpenStore();
  return (
    <div className="md:hidden mt-4 pb-4 border-t border-[#184b8c]/10">
      <div className="flex flex-col gap-3 pt-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[#184b8c] font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}

        {userEmail && (
          <div className="pt-2 border-t border-[#184b8c]/10">
            <div className="text-sm text-[#184b8c]/70 mb-2">
              Signed in as: {userEmail}
            </div>
            <button
              onClick={() => {
                logout();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg bg-red-500 text-white text-sm font-medium"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
