import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../public/logo.svg";
import { LiaGamepadSolid } from "react-icons/lia";

export const Header = () => {
  return (
    <header className={"w-full h-28 bg-slate-100 px-4"}>
      <div className={"max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between"}>
        <nav className={"flex justify-center items-center gap-4"}>
          <Link href={"/"}>
            <Image
              src={logoImg}
              alt={"Logo do site dalygames"}
              quality={100}
              priority={true}
              className={"w-full"}
            />
          </Link>
          <Link href={"/"} className={"hover:opacity-50 duration-300"}>Games</Link>
          <Link href={"/profile"} className={"hover:opacity-50 duration-300"}>Perfil</Link>
        </nav>
        <div className={"hidden sm:flex justify-center items-center"}>
          <Link className={"hover:opacity-50 duration-300"} href={"/"}>
            <LiaGamepadSolid size={34} color={"#475569"} />
          </Link>
        </div>
      </div>
    </header>
  );
};
