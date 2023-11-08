import { Container } from "react-bootstrap";
import { DetailContext } from "../App";
import {  useContext } from "react";
import {useParams} from 'react-router-dom';


function DetailedView() {

    const param = useParams();
    const store = useContext(DetailContext);
    const card = store.mockData[param.id];
    


    return(
            <Container className="DetailedView" >
                <h1>{card.title}</h1>
                <img src={card.imageUrl} alt="woopsie" />
                <p>{card.description}</p>
                <p className="Comments">
                <b>Experts Comment</b>
                <br />
                <br />
                {card.expertComment}
                </p>
                
                
                
            </Container>
    )
}

export default DetailedView;