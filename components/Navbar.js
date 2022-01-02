import { AiFillHome } from "react-icons/ai";
import { FaDog, FaCat,FaHorse } from 'react-icons/fa';
import { GiRabbit, GiHummingbird } from "react-icons/gi";
import Image from "next/image"
import NavbarItem from "./NavbarItem"

function Navbar() {
    return (
        <nav className="flex flex-col sm:flex-row m-3 justify-between items-center">
            <div className="max-w-xl flex flex-grow justify-evenly">
                <NavbarItem Icon={AiFillHome} title="HOME" />
                <NavbarItem Icon={FaDog} title="DOGS" />
                <NavbarItem Icon={FaCat} title="CATS" />
                <NavbarItem Icon={GiRabbit} title="RABBITS" />
                <NavbarItem Icon={GiHummingbird} title="BIRDS" />
                <NavbarItem Icon={FaHorse} title="HORSES" />
            </div>
            <div className="flex mr-5">
                <Image className="object-contain" src={"/adoption.png"} width={40} height={40} />
                <h1 className="text-adopt-pink text-4xl italic ml-3">AdoptMe</h1>
            </div>
        </nav>
    )
}

export default Navbar
