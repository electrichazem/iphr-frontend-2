import Image from "next/image";
import styles from "./Home.module.css";

export default function Header() {
    return <header className="sticky top-0 w-full bg-gradient-to-r from-[#030d2af4] to-[#0a1a4df4] py-4 z-20 shadow-lg opacity-[.9]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between w-full px-6">
            <div className="flex items-center">
                <Image
                    className="dark:invert hover:scale-105 transition-transform duration-200"
                    src="/image.png"
                    alt="logo"
                    width={180}
                    height={38}
                    priority
                />
            </div>
            <ul>
                <li className="text-white hover:text-[#528bf2] transition-colors duration-200 cursor-pointer text-lg font-medium px-4 py-2 rounded-md hover:bg-white/10">
                    Login
                </li>
            </ul>
        </div>
    </header>
}