import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Looking for an embedded, IoT or full-stack developer?</p>
        <p>I am open to new opportunities. Feel free to contact me.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:moutiasaad481@gmail.com "><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:moutiasaad481@gmail.com">moutiasaad481@gmail.com</a>
        </div>
        <div>
        <a href="tel:+21627541269"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+21627541269">(+216) 27541269</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}