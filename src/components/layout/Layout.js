import Header from "../header/Header";
import Main from "../../main/Main";
import Footer from "../footer/Footer";
import "./Layout.css"

function Layout() {
    return(
        <div className="layout">
            <Header />
            <Main className="main"></Main>
            <Footer />
        </div>
    )
};

export default Layout;