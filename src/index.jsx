import React from "react"
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"
import SideNav from "./components/SideNav/sidenav"
import Opinions from "./pages/opinions"
import GlobalStyle from "./utils/style/GlobalStyle"
import MobileNavBar from "./components/MobileNavBar"
import MobileHeader from "./components/MobileHeader"
import Header from "./components/Header"
import Home from "./pages/Home"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <GlobalStyle />
        {/* <div className="d-lg-none">
            <MobileHeader />
        </div>
        <div className="container-fluid bg-light p-0 m-0 row">
            <div className="d-none d-lg-block col-lg-2">
                <SideNav className="position-fixed" />
            </div>
            <div className="col-12 col-lg-10 pt-2 m-0 p-0 pt-lg-3">
                <Opinions />
            </div>
        </div>
        <div className="d-lg-none">
            <MobileNavBar />
        </div> */}
        <Header />
        <Home />
    </React.StrictMode>
)
