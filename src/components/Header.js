import { StyledHeader } from './styles/Header.styled'
import { StyledNavbar } from './styles/Navbar.styled'
import { StyledLogo } from './styles/Logo.styled'
import { StyledButton } from './styles/Button.styled'
import { StyledContainer } from './styles/Container.styled'
import { StyledFlex } from './styles/Flex.styled'
import { StyledImage } from './styles/Image.styled'

export default function Header() {
    return (
        <StyledHeader>
            <StyledContainer>
            <StyledNavbar>
                <StyledLogo src='./images/logo.svg'/>
                <StyledButton>Try It Free</StyledButton>
            </StyledNavbar>

            <StyledFlex>
            <div>
               <h1>Build The Community Your Fans Will Love</h1>
               <p>
               Huddle re-imagines the way we build communities. You
               have a voice,
               but so does your audience. Create connections with your
               users as
               you engage in genuine discussion.
               </p>
            <StyledButton bg='#ff0099' color="#fff">Get Started for Free</StyledButton>
            </div>


            <StyledImage src='./images/illustration-mockups.svg' alt='' />
            </StyledFlex>

            </StyledContainer>
        </StyledHeader>
    )
}