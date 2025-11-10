import { useEffect, useState } from "react";
import { Header, Footer, Carrousel, Description } from "../components";
import { useParams } from 'react-router-dom';
import '../styles/index.css'
import { ErrorPage } from "./ErrorPage";

export function Housing() {

    const [data, setData] = useState(null);
    const { id } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json')
                const dataItem = await response.json()
                setData(dataItem.find((item) => item.id === id))
            } catch (error) {
                console.log('Error from ', error)
            }
        }
        fetchData();

    }, [id])


    if (!data) {
        return <ErrorPage />
    }

    return (
        <div className="screan">
            <Header />
            <Carrousel pictures={data.pictures} />
            <Description data={data} />
            <Footer />
        </div>
    )

}