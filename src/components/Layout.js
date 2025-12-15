import Header from "./Header";
import Nav from "./Nav";
import Main from "./main/Main";
import Footer from "./Footer";

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