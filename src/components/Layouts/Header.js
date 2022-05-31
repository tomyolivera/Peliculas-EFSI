import { Container, Navbar, NavbarBrand, NavLink } from "reactstrap";

const Header = () => {
    return (
        <Navbar style={{ backgroundColor: '#182952' }}  dark>
            <NavbarBrand href="/">
                <img src="/idf.png" width="25%" className="mx-5" />
            </NavbarBrand>
        </Navbar>
    )
}

export default Header;