import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function Product(props) {
    return (
        <div className="product-mobile-container">
            <div className="product">
                <div
                    onClick={(event) => {
                        props.toggleFav(event, props.product?.id);
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
                            color: props.favs?.includes(props.product)
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
                    src={props.product?.imageUrl}
                />
                <div
                    onClick={() =>
                        (window.location.href = "http://stackoverflow.com")
                    }
                    className="product-name"
                >
                    {props.product?.name}
                </div>
                <div
                    onClick={() =>
                        (window.location.href = "http://stackoverflow.com")
                    }
                    className="price"
                >
                    {props.product?.price} TL
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
                    {props.product?.description}
                </div>

                <div
                    onClick={() =>
                        (window.location.href = "http://stackoverflow.com")
                    }
                    className="shipping-text"
                >
                    {props.product?.shippingMethod}
                </div>
            </div>
        </div>
    );
}

export default Product;
