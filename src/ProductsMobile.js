import Product from "./Product";
import favorite from "./images/favorite-black.svg";
import SwipeableViews from "react-swipeable-views";
import { useState } from "react";

function ProductsMobile() {
    const [index, setIndex] = useState(0);
    return (
        <div className="products-mobile">
            <div className="products-upper-container-mobile">
                <div className="content-title-mobile">
                    Content title goes here
                </div>
                <div className="favorites-container">
                    <img src={favorite} />
                    <div className="favorite-number-mobile">0 Ürün</div>
                    <div className="favorites-button">Beğeniler</div>
                </div>
            </div>
            <SwipeableViews index={index} onChangeIndex={setIndex}>
                <Product />
                <Product />
                <Product />
                <Product />
            </SwipeableViews>

            <div className="dots-container">
                <div
                    style={{
                        backgroundColor: index === 0 ? "#0059BC" : "#D1D1D1",
                        marginRight: 5,
                    }}
                    className="dot"
                ></div>
                <div
                    style={{
                        backgroundColor: index === 1 ? "#0059BC" : "#D1D1D1",
                        marginRight: 5,
                    }}
                    className="dot"
                ></div>
                <div
                    style={{
                        backgroundColor: index === 2 ? "#0059BC" : "#D1D1D1",
                        marginRight: 5,
                    }}
                    className="dot"
                ></div>
                <div
                    style={{
                        backgroundColor: index === 3 ? "#0059BC" : "#D1D1D1",
                    }}
                    className="dot"
                ></div>
            </div>
        </div>
    );
}

export default ProductsMobile;
