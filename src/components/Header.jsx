import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import logo from "../assets/king-tennis-logo_21010-10.png";
const Header = () => {
  return (
    <Container>
      <Image src={logo} width="300px" />
      <h1>THE WORLD'S BEST 15 TENNIS PLAYERS EVER</h1>
      <div className="my-4"></div>
    </Container>
  );
};
export default Header;
