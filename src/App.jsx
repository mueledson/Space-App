import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstiloGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import bannerBackground from "./assets/banner.png"
import Banner from "./componentes/Banner/banner"
import Galeria from "./componentes/Galeria"
import fotos from "./fotos.json"
import { useState } from "react"
import ModalZoom from "./componentes/ModalZoom"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotos)

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
          <Galeria fotos={fotosGaleria}/>
        </MainContainer>
      </AppContainer>
      <ModalZoom />
    </ FundoGradiente>
  )
}

export default App