import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;


`;
const Input = styled.input`
  margin-right: 15px;
  background: #f5f5f5;
  box-shadow: 0px 14px 31px -23px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  width: 335px;
  padding: 1rem;
  border: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  outline: none;

  color: #343434;



  &::placeholder,
  ::-webkit-input-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;

    color: #9d9d9d;
  }

  @media screen and (max-width: 375px) {
      width: 100vw;
      margin-right: 0;
      margin: 0 auto;
  }

  @media screen and (max-width: 1400px) {
    padding: .5rem;
  }
`;
const ValidCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;

  @media screen and (max-width: 375px) {
    display: none;
  }
`;



export const Form = ({ type, dotColor, text }) => {
  return (
    <Wrapper>
      <Input type={type} placeholder={text} />
      <ValidCircle style={{ backgroundColor: dotColor }} />
    </Wrapper>
  );
};
