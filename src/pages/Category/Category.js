// import "./Category.css";
import React from 'react'
import { useParams } from "react-router-dom";
import Container from "../../containers/Container";
import datas from "../../data";
import CategoryWrapper from './CategoryWrapper';



const Category = (props) => {
    const { category } = useParams();

    const data = datas[category];

    // const data = data.filter(v => v.code == category)[0].data


    return (
        <Container >
            <CategoryWrapper className="container py-5">
                <h1 className="mb-5">Category:{category}</h1>
                <div className="row category__box">
                    {data.map(v =>
                        <div className="col-10 col-sm-6 col-md-4 col-lg-3 mb-3">
                            <div className="shadow rounded p-2 h-100">
                                <img src={v.img} className="w-100 product-img mb-3" alt="" />
                                <p className="fw-bold">{v.title}</p>
                                <span>{v.price}</span><br />
                                <span>{v.location}</span>
                            </div>
                        </div>
                    )}
                </div>
            </CategoryWrapper>
        </Container>
    )
}

export default Category
