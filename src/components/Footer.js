import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/12.svg";
import navIcon2 from "../assets/img/123.webp";
import navIcon3 from "../assets/img/1234.webp";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/swastik-kulkarni-45b071247"><img src={navIcon2} alt="Icon" /></a>
              <a href="swastikkulkarni737@gmail.com"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
