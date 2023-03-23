import React, { useEffect } from 'react';
import {Container, Row,} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import { fetchProducts } from '../rtk/slices/product-slice';
import "./products.css"
import ProductCard from './ProductCard';
function Products() {
    const products=useSelector((state)=>state.products);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts());

    },[]);
    return (
        <Container>
            <Row >
                    {
                        products.map((product)=>(
                           <ProductCard key={product.id} product={product}/>
                        ))
                    }
                   
            </Row>

        </Container>


    )
}
export default Products;