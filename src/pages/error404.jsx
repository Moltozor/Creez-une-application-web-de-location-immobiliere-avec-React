import { useRouteError } from "react-router";
import { Header, Footer } from "../components";
import '../styles/index.css'

export function ErrorPage() {

    //const error = useRouteError();

    //console.log(error)


    return (
        <div>
            <Header />
            <div className="failLoading">
                <p className="error404">404</p>
                <p className="pageDoesnt_exist">Oups! La page que vous demandez n'existe pas.</p>
                <a href="#" className="goTo_Welcome">Retourner sur la page d’accueil</a>
            </div>
            <Footer />
        </div>
    )

}