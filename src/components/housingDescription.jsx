import '../styles/index.css'
import { StarRate } from './starRate'
import { DropDown } from './dropDown'


export function Description({ data }) {




    const style = {
        width: '100%',
    }


    return (
        <div className="description" >
            <div className="one" style={style}>
                <h1>{data.title}</h1>
                <p>{data.location}</p>
                </div>

            <div className="two" style={style}>
                <p>{data.host.name}</p>
                <img src={data.host.picture} alt={`Photo de ${data.host.name}`} />
            </div>

            <div className="three" style={style}> {data.tags.map((elem, id) => { return <div key={id}>{elem}</div> })} </div>

            <div className="four" style={style}> <StarRate dataRate={data.rating} /> </div>

            <div className="five" style={style}>
                <DropDown title={"Description"} content={data.description} />
                <DropDown title={'Équipements'} content={data.equipments} />
            </div>
        </div >
    )
}
