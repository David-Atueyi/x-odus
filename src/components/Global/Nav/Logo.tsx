import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-bold text-[#184b8c] hover:scale-105 transition-transform flex items-center gap-2"
    >
      <span className="bg-[#184b8c] text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-extrabold">
        <Image src="/xodus.png" alt="X-odus" width={32} height={32} />
      </span>
      X-odus
    </Link>
  );
};
