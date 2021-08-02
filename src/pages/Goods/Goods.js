import "./Goods.css";
import React from 'react'
import { useParams } from "react-router-dom";

const Goods = () => {
    const { Goods } = useParams();
    return (
        <div>
            <h1>Goods</h1>
        </div>
    )
}

export default Goods
