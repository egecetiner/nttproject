import Product from "./Product";
import favorite from "./images/favorite-black.svg";
import SwipeableViews from "react-swipeable-views";
import { useState } from "react";

function ProductsMobile(props) {
    const [index, setIndex] = useState(0);
    const [favs, setFavs] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const handleButton = () => {
        setIsClicked((prevState) => !prevState);
    };
    const toggleFav = (event, id) => {
        console.log(event);
        console.log(id);
        // Linke yönlendirmeyi engelle
        event.preventDefault();
        const index = favs.findIndex((fav) => fav.id === id);

        if (index !== -1) {
            // ID bulundu, elemanı diziden kaldır
            const updatedFavs = [...favs];
            updatedFavs.splice(index, 1);
            setFavs(updatedFavs);
        } else {
            // ID bulunamadı, elemanı diziye ekle
            const newFav = props.products.find((product) => product.id === id);
            if (newFav) {
                setFavs([...favs, newFav]);
            }
        }
    };

    return (
        <div className="products-mobile">
            <div className="products-upper-container-mobile">
                <div className="content-title-mobile">
                    Content title goes here
                </div>
                <div className="favorites-container">
                    <img src={favorite} />
                    <div className="favorite-number-mobile">
                        {favs.length} Ürün
                    </div>
                    <div
                        className="favorites-button"
                        style={{
                            backgroundColor: isClicked ? "#FFFFFF" : "#0059BC",
                            border: isClicked ? "1px solid #0059BC" : null,
                            color: isClicked ? "#0059BC" : "#FFFFFF",
                        }}
                        onClick={handleButton}
                    >
                        {isClicked ? "Tüm Ürünler" : "Beğeniler"}
                    </div>
                </div>
            </div>
            {props.products.length > 0 ? (
                <div>
                    {isClicked ? (
                        <SwipeableViews index={index} onChangeIndex={setIndex}>
                            {favs.map((product, index) => {
                                return (
                                    <Product
                                        favs={favs}
                                        product={product}
                                        index={index}
                                        toggleFav={toggleFav}
                                    />
                                );
                            })}
                        </SwipeableViews>
                    ) : (
                        <SwipeableViews index={index} onChangeIndex={setIndex}>
                            {props.products.map((product, index) => {
                                return (
                                    <Product
                                        favs={favs}
                                        product={product}
                                        index={index}
                                        toggleFav={toggleFav}
                                    />
                                );
                            })}
                        </SwipeableViews>
                    )}
                </div>
            ) : (
                <div>Loading...</div>
            )}

            <div className="dots-container">
                {(isClicked ? favs : props.products).map((product, i) => {
                    return (
                        <div
                            style={{
                                backgroundColor:
                                    index === i ? "#0059BC" : "#D1D1D1",
                            }}
                            className="dot"
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default ProductsMobile;
