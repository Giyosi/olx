import React from 'react'
import { useParams } from 'react-router-dom';
import Container from "../../containers/Container";
import ProductsWrapper from './ProductsWrapper';
import datas from '../../data';



const Products = (props) => {
    const { category, id } = useParams();
    const data = datas[category];
    const detail = data.filter(v => v.id == id)[0].details;
    console.log(detail);


    return (
        <Container >
            <ProductsWrapper className="container py-5">
                {detail ?
                    <>
                        <h1 className="mb-5">Category: {category}, productId:{id}</h1>
                        <div className="row">
                            <div className="col-md-8">
                                <img src={detail.img} alt="" />
                            </div>
                            <div className="col-md-4">
                                <h3>{detail.owner}</h3>
                            </div>
                            <p className="mt-3">{detail.desc}</p>
                        </div>
                    </> :
                    <h1>Product undefained</h1>}
            </ProductsWrapper>
        </Container>
    )
}

export default Products;
