import { Button, Container, Image, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { clear, removeFromCard } from '../rtk/slices/card-slice';
function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const totalPrice=cart.reduce((acc,product)=>{
        acc +=product.price*product.quantity;
        return acc;
    },0);
    return (
        <Container>
            <h1>Welcome to cart</h1>
            <Button className='m-4' variant='primary' onClick={()=>{dispatch(clear())}}>Clear Cart</Button>
            <h5>Total Price: {totalPrice.toFixed(2)} $</h5>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>quantity</th>
                        <th>Price</th>
                        <th>Image</th>
                       
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price*product.quantity}</td>
                                <td><Image style={{ width: "100px", height: "100px" }} src={product.image} /></td>
                                <td><Button variant='danger' onClick={() => { dispatch(removeFromCard(product)) }}>Delete</Button></td>
                            </tr>
                        ))
                    }


                </tbody>
            </Table>
            

        </Container>


    )
}
export default Cart;