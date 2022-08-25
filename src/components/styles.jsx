import styled from "styled-components";
export const ConnectionInfo = styled.div`
  display: inline;
  text-align: center;
  margin: 0.5rem 2rem;
  padding: 0.5rem 2rem;
  background-color: rgb(50, 40, 59);
  border: 2px solid transparent;
  border-radius: 7px;
  @media only screen and (max-width: 400px) {
    margin: 0.25rem auto;
    padding: 0.25rem auto;
  }
`;
export const WalletStatus = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
export const Button = styled.button`
  padding: 0.25rem 0.8rem;

  border-radius: 7px;
  border: 2px solid transparent;
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-color: #d97a1a82;
  margin: 1rem auto;
  align-items: center;
`;
export const Image = styled.span`
  display: inline-block;
  background-color: transparent;
`;
export const Wrapper = styled.div`
  text-align: center;
  margin: auto;
  width: 30%;
  @media only screen and (max-width: 606px) {
    width: 50%;
  }
  @media only screen and (max-width: 500px) {
    width: 70%;
  }
  @media only screen and (max-width: 375px) {
    width: 80%;
  }
`;
export const Disconnect = styled.button`
  padding: 0.25rem 0.8rem;

  margin: 1rem auto;
  border-radius: 7px;
  border: 2px solid transparent;
  font-size: 1.3rem;

  background-color: #1ad94d82;
`;
