import { Navbar, NavbarBrand, NavLink } from "reactstrap";

const Header = () => {
    return (
        <div>
            <Navbar color="dark" dark>
                <NavbarBrand href="/">
                    Reactstrap
                </NavbarBrand>

                <NavLink href="/peliculas">Peliculas</NavLink>
            </Navbar>
        </div>
    )
}

export default Header;