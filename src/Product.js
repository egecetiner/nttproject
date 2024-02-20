import productPic from "./images/product-pic.png";
import favorite from "./images/favorite.svg";
function Product() {
    return (
        <div className="product">
            <div className="like-button">
                <img src={favorite} />
            </div>

            <img src={productPic} />
            <div className="product-name">Product Name</div>
            <div className="price">1.299,00 TL</div>
            <div className="description-title">Description</div>

            <div className="description">
                Lorem ipsum dolor sit amet consectetur. Turpis dolor vulputate
                velit id sit leo aliquet id at. Vel tellus tempus lacus
                tristique nulla pretium erat duis.
            </div>

            <div className="shipping-text">Ücretsiz - Aynı gün kargo</div>
        </div>
    );
}

export default Product;
