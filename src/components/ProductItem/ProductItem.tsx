import Image from 'react-bootstrap/Image';
import { IProduct } from '../../models/IProduct';
import { Link } from 'react-router-dom';
import no_image from "../../image/product/no_image.png"
import React from "react";
import {ISubcategory} from "../../models/ISubcategory";
import { API_URL } from '../../const/const';

type PropsProductItem = {
    product: IProduct
    key: number
}

type PropsSubcategoryItem = {
    subcategory: ISubcategory
    key: number
}

export const ProductItem: React.FC<PropsProductItem> = ({product, key}) => {
    return (
        <div key={key} className="item_container">
            <Image src={(!product.card_img) ? no_image : API_URL + product.card_img} thumbnail />
          <div>
            <h2><Link to={"/products/" + product.id}>{product.name}</Link></h2>
          </div>
        </div>
    )
}

export const SubcategoryItem: React.FC<PropsSubcategoryItem> = ({subcategory, key}) => {
    return (
        <div key={key} className="item_container">
            <Image src={(!subcategory.card_img) ? no_image : subcategory.card_img} thumbnail />
            <div>
                <h2><Link to={"/products/subcategory/" + subcategory.path}>{subcategory.name}</Link></h2>
            </div>
        </div>
    )
}