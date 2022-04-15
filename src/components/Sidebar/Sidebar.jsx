import styled from "styled-components";
import logo from "../../images/logo.svg";
import logoText from "../../images/logoText.svg";
import { Form } from "./Form";

const Container = styled.aside`
  display: flex;
  width: 519px;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.93);
  backdrop-filter: blur(48px);
  z-index: 100;
  margin: 0;

  @media screen and (max-width: 1200px) {
      width: 100%;
      height: 100vh;
  }
  
`;

const Logo = styled.img`
  width: 125px;
  height: 125px;
  margin-top: 88px;

  @media screen and (max-width: 1200px){
      margin: 0;
      width: 80px;
      height: 80px;
  }

`;

const LogoText = styled.img`
  width: 97px;
  height: 33px;
  margin-bottom: 30px;


`;

const SignUpText = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  margin-bottom: 32px;

  color: #666666;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;


`;

const FormButton = styled.button`
  background: #70edb9;
  box-shadow: 0px 14px 31px -23px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  width: 335px;
  padding: 1rem;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 21px;
  border: none;
  margin-bottom: 24px;

  &:hover {
      cursor: pointer;
  }

  @media screen and (max-width: 375px) {
      width: 100%;

  }
`;

const PolicyText = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  margin: 0 6.875rem;
  text-align: center;
  color: #808080;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 375px) {
      margin: 0 0 1rem 0;

  }
`;

const TextAccount = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 15px;
  display: flex;
  gap: 3px;
  text-align: center;
  color: #808080;

  @media screen and (max-width: 375px) {
      flex-direction: column;

  }
`;

const SignInText = styled(TextAccount)`
    color: #FF8D8D;
    text-decoration: none;
`;

const Sidebar = () => {
  return (
    <Container>
      <Logo src={logo} alt="Eli Codes logo" />
      <LogoText src={logoText} alt="Eli Codes" />
      <SignUpText>Sign up</SignUpText>
      <FormContainer>
        <Form type="name" dotColor="#70EDB9" text="Username" />
        <Form type="email" dotColor="#FFA689" text="Email" />
        <Form type="password" dotColor="#FE2F75" text="Password" />
        <Form type="password" dotColor="#FFA689" text="Confirm Password" />
        <FormButton>Sign Up</FormButton>
      </FormContainer>
      <PolicyText>
        By signing up, I agree to the Privacy Policy and Terms of Service
      </PolicyText>
      <TextAccount>Already have an account? <SignInText as="a" href="#">Sign In</SignInText> </TextAccount>
    </Container>
  );
};

export default Sidebar;
