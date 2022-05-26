import { Navbar, NavbarBrand, NavLink } from "reactstrap";

const Header = () => {
    return (
        <div>
<<<<<<< HEAD
            <Navbar color="dark" dark>
=======
            <Navbar style={{ backgroundColor: '#182952' }}  dark>
>>>>>>> 2f36034 (diseño)
                <NavbarBrand href="/">
                    Reactstrap
                </NavbarBrand>

<<<<<<< HEAD
                <NavLink href="/peliculas">Peliculas</NavLink>
=======
                <NavLink style={{color:"white"}} href="/">Peliculas</NavLink>
>>>>>>> 2f36034 (diseño)
            </Navbar>
        </div>
    )
}

export default Header;