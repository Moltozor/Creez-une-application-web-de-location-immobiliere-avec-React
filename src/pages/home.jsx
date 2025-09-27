import { Header, Footer, Banner } from '../components'
import { useState, useEffect } from 'react';
import bodyImg from '../assets/bodyPicture.svg'
import '../styles/index.css'
import { Link } from 'react-router';

export function Home() {

    const [data, setData] = useState([]);
    //console.log(data.length)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./data.json')
                const data = await response.json()

                setData(data)
            } catch (error) {
                console.log('Error from ', error)
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            <Header />
            <div className='body'>

                <Banner title={'Chez vous, partout et ailleurs'} imageUrl={bodyImg} />
                <div className='rental'>
                    {data.map((item, index) => (
                        <Link className='rental_container' key={index} style={{ backgroundImage: `url(${item.cover})` }}>
                            <div className='rental_container_title'>
                                <h3> {item.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
            <Footer />
        </div>
    )
}