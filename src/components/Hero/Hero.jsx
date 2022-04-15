import styled from "styled-components";
import Rectangle from "../../images/Rectangle.svg";
import Circle from "./Circle";

const LogoText = styled.h1`
  position: relative;
  width: 374px;
  height: 204px;
  left: 228px;
  top: 383px;

  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 4rem;
  line-height: 6rem;
  z-index: 100;

  color: #343434;
`;

const Mesh = styled.img`
  position: fixed;
  top: 394px;
  left: 937px;
`;
const Hero = () => {
  return (
    <>
      <LogoText>Join The Team</LogoText>
      <Mesh src={Rectangle} />
      <Circle width="172px" height="172px" top="83px" left="843px" background="linear-gradient(142.25deg, #FFA689 3.68%, #FFE9E1 84.92%);"/>
      <Circle width="393px" height="393px" top="-146px" left="1191px" background="linear-gradient(180deg, #FE2F75 0%, #FE6F5E 100%);"/>
      <Circle width="456px" height="456px" top="0px" left="226px" background="linear-gradient(180deg, #13D8E5 0%, #ADF4F9 100%);"/>
      <Circle width="468px" height="468px" top="445px" left="426px" background="linear-gradient(180deg, #FE2F75 0%, #FE6F5E 100%);"/>
      <Circle width="314px" height="314px" top="797px" left="1159px" background="linear-gradient(180deg, #13D8E5 0%, #ADF4F9 100%);"/>
      
    </>
  );
};

export default Hero;
