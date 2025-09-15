import Link from "next/link";

export const DesktopNavigation = ({
  navLinks,
  userEmail,
  logout,
}: {
  navLinks: { href: string; label: string }[];
  userEmail: string|null;
  logout: () => void;
}) => {
  return (
    <div className="hidden md:flex items-center gap-6">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-[#184b8c] font-medium"
        >
          {link.label}
        </Link>
      ))}

      {userEmail && (
        <div className="flex items-center gap-3">
          <span className="text-sm text-[#184b8c]/70">{userEmail}</span>
          <button
            onClick={logout}
            className="px-3 py-1 rounded-lg bg-red-500 text-white text-sm font-medium"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
