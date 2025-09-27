import '../styles/index.css'

export function Banner({ title, imageUrl }) {

    return (
        <div className='body_img' style={{backgroundImage: `url(${imageUrl})`}}>
            <h2 className='body_img_title'>{title}</h2>
        </div>
    )
}