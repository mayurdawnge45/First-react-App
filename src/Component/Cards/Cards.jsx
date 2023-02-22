import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import storeImg1 from "../../Assets/Img/store_img1.png";
import storeImg2 from "../../Assets/Img/store_img2.png";
import storeImg3 from "../../Assets/Img/store_img3.png";
import "./Card.scss";

const Cards = (props) => {
  const cardItem = [
    {
      CardImg: storeImg1,
      CardTitle: "Black Wine",
      CardText:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages",
      CardBtn: "Read More",
    },
    {
      CardImg: storeImg2,
      CardTitle: "Black Wine",
      CardText:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages",
      CardBtn: "Read More",
    },
    {
      CardImg: storeImg3,
      CardTitle: "Black Wine",
      CardText:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages",
      CardBtn: "Read More",
    },
  ];
  return (
    <div>
      <Container>
        <Row className="justify-content-center product_card_box">
          {cardItem.map((cardItems, i) => (
            <Col lg={4} key={i}>
              <Card>
                <Card.Img variant="top" src={cardItems.CardImg} />
                <Card.Body>
                  <Card.Title>{cardItems.CardTitle}</Card.Title>
                  <Card.Text>{cardItems.CardText}</Card.Text>
                  <Button variant="primary">{cardItems.CardBtn}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}

          {/* <Col lg={4}>
            <Card>
              <Card.Img variant="top" src={storeImg2} />
              <Card.Body>
                <Card.Title>Black Wine</Card.Title>
                <Card.Text>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages
                </Card.Text>
                <Button variant="primary">Read more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Img variant="top" src={storeImg3} />
              <Card.Body>
                <Card.Title>Black Wine</Card.Title>
                <Card.Text>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages
                </Card.Text>
                <Button variant="primary">Read more</Button>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
