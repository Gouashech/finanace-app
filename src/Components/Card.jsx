import {Card as CardBootstrap} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Card({imageUrl, title, description}) {


    
    return (
        <CardBootstrap className='Card'>
            <CardBootstrap.Img variant="top" src={imageUrl} />
            <CardBootstrap.Body>
            <CardBootstrap.Title >{title}</CardBootstrap.Title>
            </CardBootstrap.Body>
        </CardBootstrap>
    )
}

export default Card;