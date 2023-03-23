import { addToCard } from "../rtk/slices/card-slice";
import {useDispatch} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col} from 'react-bootstrap';
function ProductCard(props){
    const dispatch=useDispatch();
    return(
        <>
           <Col >
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={props.product.image} />
                            <Card.Body>
                                <Card.Title>{props.product.title}</Card.Title>
                                <Card.Text>
                                    {props.product.description}
                                </Card.Text>
                                <Card.Text>
                                    {props.product.price} $
                                </Card.Text>
                                <Button variant="primary" onClick={()=>{dispatch(addToCard(props.product))}}>Add To Card</Button>
                            </Card.Body>
                        </Card>
                        </Col>
        </>
    )
}
export default ProductCard;