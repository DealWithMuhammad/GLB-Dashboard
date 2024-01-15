import Link from "next/link";
import Image from "next/image";

export default function AppLogo() {
  return (
    <>
      <Link className="flex" href="/">
        <Image
          width={32}
          height={32}
          src={"/images/logo/logo-icon.svg"}
          alt="Logo"
        />
        <h2 className="text-white text-3xl md:text-4xl ml-3 font-bold">
          Glbridge
        </h2>
      </Link>
    </>
  );
}
