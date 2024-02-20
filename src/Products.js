import Product from "./Product";
import arrowRight from "./arrow-right.svg";
import favorite from "./favorite-black.svg";
function Products() {
    return (
        <div className="products">
            <div className="products-upper-container">
                <div className="content-title">Content title goes here</div>
                <div className="favorites-container">
                    <img src={favorite} />
                    <div className="favorite-number">0 Ürün</div>
                    <div className="favorites-button">Beğeniler</div>
                </div>
            </div>
            <div className="product-container">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <div className="more-button-container">
                <div className="more-button">
                    <div className="moreText">Daha fazla</div>
                    <img src={arrowRight} />
                </div>
            </div>
        </div>
    );
}

export default Products;
