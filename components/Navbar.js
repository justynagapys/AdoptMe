import { AiFillHome } from "react-icons/ai";
import { FaDog, FaCat,FaHorse } from 'react-icons/fa';
import { GiRabbit, GiHummingbird, GiPig } from "react-icons/gi";
import Image from "next/image"
import NavbarItem from "./NavbarItem"
import Link from 'next/link'

function Navbar() {
    return (
        <nav className="flex flex-col sm:flex-row m-3 justify-between items-center">
            <div className="max-w-xl flex flex-grow justify-evenly">
                <Link href="/">
                    <a><NavbarItem Icon={AiFillHome} title="HOME"  /></a>
                </Link>
                <Link href="/animals/">
                    <a><NavbarItem Icon={FaDog} title="DOGS" /></a>
                </Link>
                <Link href="/cats">
                    <a><NavbarItem Icon={FaCat} title="CATS" /></a>
                </Link>
                <Link href="/rabbits">
                    <a><NavbarItem Icon={GiRabbit} title="RABBITS" /></a>
                </Link>
                <Link href="/birds">
                    <a><NavbarItem Icon={GiHummingbird} title="BIRDS" /></a>
                </Link>
                <Link href="/horses">
                    <a><NavbarItem Icon={FaHorse} title="HORSES" /></a>
                </Link>
                <Link href="/pigs">
                    <a><NavbarItem Icon={GiPig} title="PIGS" /></a>
                </Link>
            </div>
            <div className="flex mr-5">
                <Image className="object-contain" src={"/adoption.png"} width={40} height={40} />
                <h1 className="text-adopt-pink text-4xl italic ml-3">AdoptMe</h1>
            </div>
        </nav>
    )
}

export default Navbar
