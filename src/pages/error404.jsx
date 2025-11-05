import { Header, Footer } from "../components";
import '../styles/index.css'

export function ErrorPage() {

    return (
        <div className="screan">
            <Header />
            <div className="failLoading">
                <div className="content_One">
                    <p className="error404">404</p>
                </div>
                <div className="content_Two">
                    <p className="pageDoesnt_exist">Oups! La page que vous demandez n'existe pas.</p>
                </div>
                <div className="content_Three">
                    <a href="#" className="goTo_Welcome">Retourner sur la page d’accueil</a>
                </div>
            </div>
            <Footer />
        </div>
    )

}