import { styled } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InitialPage } from "./pages/InitialPage";
import { CadastroPage } from "./pages/CadastroPage";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { RankingPage } from "./pages/RankingPage";
import { Header } from "./components/outPages/Header";

function App() {

  return (
    <CsApp>
      <BrowserRouter>

        <Header/>

        <Routes>

          <Route path="/" element={<InitialPage/>}/>
          <Route path="/home" element={<CadastroPage/>}/>
          <Route path="/cadastro" element={<LoginPage/>}/>
          <Route path="/login" element={<HomePage/>}/>
          <Route path="/ranking" element={<RankingPage/>}/>

        </Routes>
      </BrowserRouter>       
    </CsApp>
  );

  
}



const CsApp = styled.div`
  //border: 4px solid red;
  width: 100%;
  padding-top: 10vh;
`;
export default App;