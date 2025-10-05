const Navbar = () => {
    return (
        <>
            <div>
                <nav className="navbar">
                    <div className="navbar-brand">MySite</div>
                    <button className="navbar-toggle" id="toggle-button">&#9776;</button>
                    <ul className="navbar-menu" id="navbar-menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Impact Factor</a></li>
                    </ul>
                </nav>


            </div>
        </>
    )
}

export default Navbar;