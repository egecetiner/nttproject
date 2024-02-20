import Product from "./Product";
import arrowRight from "./images/arrow-right.svg";
import favorite from "./images/favorite-black.svg";
import { useState } from "react";
function Products(props) {
    const [showMore, setShowMore] = useState(false);
    const [favs, setFavs] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    const visibleProducts = showMore
        ? props.products
        : props.products.slice(0, 4);
    const handleLoadMore = () => {
        setShowMore((prevState) => !prevState);
    };
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
        <div className="products">
            <div className="products-upper-container">
                <div className="content-title">Content title goes here</div>
                <div className="favorites-container">
                    <img src={favorite} />
                    <div className="favorite-number">{favs.length} Ürün</div>
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
            <div className="product-container">
                {props.products.length > 0 ? (
                    (isClicked ? favs : visibleProducts).map(
                        (product, index) => {
                            return (
                                <Product
                                    favs={favs}
                                    product={product}
                                    index={index}
                                    toggleFav={toggleFav}
                                />
                            );
                        }
                    )
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            {isClicked ? null : (
                <div className="more-button-container" onClick={handleLoadMore}>
                    <div className="more-button">
                        <div className="moreText">
                            {showMore ? "Daha Az" : "Daha Fazla"}
                        </div>
                        <img src={arrowRight} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Products;
