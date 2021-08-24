import books from "../data/horror.json"
import { Container, Row, Col } from "react-bootstrap"

const LatestRelease = () => {
  return (
    <Container>
      <Row className="row-cols-4">
        {books.map((book) => (
          <Col key={book.asin}>
            <div className="card mt-3">
              <img src={book.img} className="card-img-top" alt="Book image" />
              <div className="card-body">
                <h5 className="book-title">{book.title}</h5>
                <div className="book-price">
                  <h4>{book.price}€</h4>
                </div>
              </div>{" "}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default LatestRelease
