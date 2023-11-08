import { Container, Row, Col } from "react-bootstrap";
import Card from "../Components/Card";
import { DetailContext } from "../App";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {db} from "../firebase";
import { onValue, ref } from "firebase/database";





function Home() {
        
        const store = useContext(DetailContext);
        const [cardList, setCardList] = useState([]);
        

        useEffect(()=> {
            
            const starCountRef = ref(db, '/');
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                const mockData = Object.keys(data.slice(0, 6)).map(key => ({
                    id:key,
                    ...data[key],
                }));
                console.log("mockData", mockData);
                setCardList(mockData);
                store.mockData=mockData;
              
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