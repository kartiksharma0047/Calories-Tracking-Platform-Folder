import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingHomePage from "../Pages/LandingPage/landingHomePage";
import { ROUTES } from "./routePath";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.HOME} element={ <LandingHomePage/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}