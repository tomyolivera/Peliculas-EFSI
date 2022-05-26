import { Navbar, NavbarBrand, NavLink } from "reactstrap";

const Header = () => {
    return (
        <div>
            <Navbar style={{ backgroundColor: '#182952' }}  dark>
                <NavbarBrand href="/">
                    Reactstrap
                </NavbarBrand>

                <NavLink style={{color:"white"}} href="/">Peliculas</NavLink>
            </Navbar>
        </div>
    )
}

export default Header;