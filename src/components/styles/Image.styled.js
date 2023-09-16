import styled from "styled-components";

export const StyledImage = styled.img`
  width: 375px;
  margin-left: 40px;

  @media(max-width: ${({theme}) => theme.mobile}){
    margin: 40px 0 30px;
}
`