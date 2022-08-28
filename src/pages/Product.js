import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Product = () => {
    let [query, setQuery] = useSearchParams();
    console.log("Query갑::", query.get("q"));
    console.log("Query갑::", query.get("num"));
    return (
        <div>
            <h1>Show All Products!</h1>
        </div>
    );
}

export default Product;
