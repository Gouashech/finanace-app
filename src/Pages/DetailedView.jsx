import { Container, Row, Col } from "react-bootstrap";
import Card from "../Components/Card";
import { DetailContext } from "../App";
import { createContext, useContext } from "react";
import {useParams} from 'react-router-dom';


function DetailedView() {

    const param = useParams();
    const store = useContext(DetailContext);
    const card = store.cachedCards[param.id];
    console.log(card);


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