import productPic from "./images/product-pic.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function Product(props) {
    return (
        <div className="product-mobile-container">
            <div className="product">
                <div
                    onClick={(event) => {
                        props.toggleFav(event, props.product.id);
                    }}
                    className="like-button"
                    style={{
                        transform:
                            window.screen.width < 768
                                ? `translateX(${
                                      window.screen.width - 109
                                  }px) translateY(11px)`
                                : `translateX(224px) translateY(11px)`,
                    }}
                >
                    <FavoriteBorderIcon
                        fontSize="8px"
                        sx={{
                            color: props.favs.includes(props.product)
                                ? "red"
                                : "#D1D1D1",
                        }}
                    />
                </div>

                <img
                    onClick={() =>
                        (window.location.href = "http://stackoverflow.com")
                    }
                    className="product-pic"
                    src={productPic}
                />
                <div
                    onClick={() =>
                        (window.location.href = "http://stackoverflow.com")
                    }
                    className="product-name"
                >
                    Product Name
                </div>
                <div
                    onClick={() =>
                        (window.location.href = "http://stackoverflow.com")
                    }
                    className="price"
                >
                    1.299,00 TL
                </div>
                <div
                    onClick={() =>
                        (window.location.href = "http://stackoverflow.com")
                    }
                    className="description-title"
                >
                    Description
                </div>

                <div
                    onClick={() =>
                        (window.location.href = "http://stackoverflow.com")
                    }
                    className="description"
                >
                    Lorem ipsum dolor sit amet consectetur. Turpis dolor
                    vulputate velit id sit leo aliquet id at. Vel tellus tempus
                    lacus tristique nulla pretium erat duis.
                </div>

                <div
                    onClick={() =>
                        (window.location.href = "http://stackoverflow.com")
                    }
                    className="shipping-text"
                >
                    Ücretsiz - Aynı gün kargo
                </div>
            </div>
        </div>
    );
}

export default Product;
