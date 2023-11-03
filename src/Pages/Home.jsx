import { Container, Row, Col } from "react-bootstrap";
import Card from "../Components/Card";
import { DetailContext } from "../App";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

function Home() {

    const store = useContext(DetailContext);

    const [cardList, setCardList] = useState([]);

    useEffect(function() {
        fetch("https://remotemode.com/files/intership/front-end/financial-market-news-blog-project.json?limit=6"
         )
            .then((response) => {
                return response?.json();
        })
        .then((data) => {
            setCardList(data.slice(0, 6));
            store.cachedCards=data;
        })
        .catch(function(error) {  
            console.log('Request failed', error)  
          });
    }, [])  

    return (
        <Container style={{padding: "20px 40px"}}>
            
            <Row  sm={2} md={3} className="g-4">
                {cardList.map((card, idx) => (
                    <Col key={idx}>
                        <Link to={"/details/"+ idx} style={{"textDecoration": "none"}}>   
                            <Card 
                                imageUrl={card.imageUrl} 
                                title={card.title}
                                description={card.description}
                            />
                        </Link> 
                    </Col>
                    ))}
            </Row>
        </Container>
    )
}

export default Home;