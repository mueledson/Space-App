import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstiloGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import bannerBackground from "./assets/banner.png"
import Banner from "./componentes/Banner/banner"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <MainContainer>
          <Cabecalho />
          <BarraLateral />
          <Banner
            texto="A Galeria mais completa do espaço"
            backgroundImage={bannerBackground}
          />
        </MainContainer>
      </AppContainer>
    </ FundoGradiente>
  )
}

export default App