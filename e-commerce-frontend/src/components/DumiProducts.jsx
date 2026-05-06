import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function DumiProducts() {
    let products = [{
        imageSrc: "https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?semt=ais_hybrid&w=740&q=80",
        title: "Cloths"
    },
    {
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEaFGS7YR1enfvRK4_RAlj0Qtz8q-IvU-GrA&s" ,
        title: "Laptops"
    },
    {
        imageSrc: "https://www.bigcmobiles.com/media/catalog/product/cache/e19e56cdd4cf1b4ec073d4305f5db95a/a/p/apple_iphone_16_black__1_1.jpg",
        title: "Mobile"
    },
    {
        imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTncfqvKXB6L9pgL24DGHEvgXNPN7NzMuQg&s",
        title:"Shoes"
    },
    ];
    return (
        <Row xs={1} md={4} className="g-4">
            {products.map((item,idx) => (
                <Col key={idx}>
                    <Card>
                        <Card.Img variant="top" src={item.imageSrc} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            <button className='btn btn-warning'>Add to Cart</button>
                            <button className='btn btn-success'>Buy</button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default DumiProducts;