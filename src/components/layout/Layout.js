import Header from "../header/Header";
import Nav from "../nav/Nav";
import Main from "../main/Main";
import Footer from "../footer/Footer";

function Layout() {
    return(
        <div className="layout">
            <Header />
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}

export default Layout;