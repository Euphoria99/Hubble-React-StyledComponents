import { ThemeProvider  } from 'styled-components';
import  Header  from './components/Header'
import { StyledContainer } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'

const theme = {
    colors: {
      header: '#ebfbff',
      body: '#fff',
      footer: '#003333'
    }
}


function App() {
  return (
    <ThemeProvider theme={ theme}>
    <>
    <GlobalStyles />
    <Header />
    <StyledContainer>
      <h1>Hello world</h1>
    </StyledContainer>
    </>
    </ThemeProvider>
  );
}

export default App;
