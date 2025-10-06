import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <div>
                <nav className="navbar">
                    <div className="navbar-brand">MySite</div>
                    <button className="navbar-toggle" id="toggle-button">&#9776;</button>
                    <ul className="navbar-menu" id="navbar-menu">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">About</Link></li>
                        <li><Link href="/">Impact Factor</Link></li>
                    </ul>
                </nav>


            </div>
        </>
    )
}

export default Navbar;