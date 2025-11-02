import { useEffect, useState } from "react";
import { Header, Footer, Carrousel, Description } from "../components";
import { useParams } from 'react-router-dom';
import '../styles/index.css'
import { StarRate } from "../components/starRate";
import { ErrorPage } from "./error404";

export function Housing() {

    const [data, setData] = useState(null);
    const { id } = useParams();

    //console.log('data=', data)

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


    if(!data) {
        return <ErrorPage />
    }
    console.log(data)

    return (
        <div className="screan">
                <Header />
                {data ? <Carrousel pictures={data.pictures} /> : null}
                {data ? <Description data={data} /> : null}
                <Footer />
            </div>
    )
    /*
        if (data.find((item) => item.id === id ? 1 : 0)) {
            return (
                <div className="screan">
                    <Header />
                    {data ? <Carrousel pictures={data.pictures} /> : null}
                    {data ? <Description data={data} /> : null}
                    <Footer />
                </div>
            )
        }
        
        return <ErrorPage />
    */

}