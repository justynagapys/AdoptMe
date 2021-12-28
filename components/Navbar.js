import Image from "next/image"
import NavbarItem from "./NavbarItem"

function Navbar() {
    return (
        <nav className="">
            <div>
                <NavbarItem />
            </div>
            {/* this is next.js image tag with lazy loading */}
            <Image
            className="object-contain"
            src={"/adoption.png"}
            width={80} height={80}
            />
            <h1>Adopt Me</h1>
        </nav>
    )
}

export default Navbar
