import { useEffect, useState } from "react";
import { Header, Footer, SliderPictures } from "../components";
import { useParams } from 'react-router-dom';
import '../styles/index.css'

export function Housing() {

    const [data, setData] = useState([]);
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

    const style = {
        width: '100%',
        height: '25px',
        backgroundColor: 'red',
    }


    return (
        <div>
            <Header />
            {data ? <SliderPictures pictures={data.pictures} /> : null}
            <div className="description">
                <div className="one" style={style}></div>
                <div className="two" style={style}></div>
                <div className="three" style={style}></div>
                <div className="four" style={style}></div>
                <div className="five" style={style}></div>
            </div>
            <Footer />
        </div>
    )

}