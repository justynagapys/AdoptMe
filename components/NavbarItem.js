function NavbarItem({Icon, title}) {
    return (
        <div className="group flex flex-col items-center cursor-pointer w-15 hover:text-icon-color">
            <Icon className=" mb-1 mt-9 group-hover:animate-bounce" size="2em"/>
            <p className="opacity-0 group-hover:opacity-100">{title}</p>
        </div>
    )
}

export default NavbarItem;