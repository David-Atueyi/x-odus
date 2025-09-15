const userEmail = "test@test.com";

export const navLinks = userEmail
  ? [
      { href: "/", label: "Home" },
      { href: "/plans", label: "Plans" },
      { href: "/history", label: "History" },
    ]
  : [
      { href: "/signin", label: "Sign In" },
      { href: "/signup", label: "Sign Up" },
    ];
