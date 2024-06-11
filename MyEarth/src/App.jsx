import { Header, Main, MapWrapper, Wrapper, Filter } from "./components"
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Header />
      
      <Main>

        <Outlet />

        <MapWrapper />
      
      </Main>
      
    </>  
  )
}