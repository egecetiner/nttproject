import "./App.css";
import * as React from "react";
import SwipeableTextMobileStepper from "./Swiper";
import Products from "./Products";
import Footer from "./Footer";
import ProductsMobile from "./ProductsMobile";
import FooterMobile from "./FooterMobile";
import { SearchContainer } from "./SearchContainer";
import { useState } from "react";
import menuPic from "./images/menu.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import searchIcon from "./images/search-icon.svg";
function App() {
    const [menu, setMenu] = useState(0);
    let MenuItems;
    if (window.screen.width >= 1440) {
        MenuItems = new Array(12).fill("Menu Item");
    } else if (window.screen.width >= 768) {
        MenuItems = new Array(6).fill("Menu Item");
    }

    const [category, setCategory] = useState("More");
    const handleChange = (event) => {
        setCategory("More");
    };

    const Placeholder = ({ children }) => {
        return <div>{children}</div>;
    };
    return (
        <div>
            <SearchContainer />
            {window.screen.width >= 768 ? (
                <div className="categories-container">
                    <div className="categories">
                        {MenuItems.map((value, i) => {
                            return (
                                <div
                                    style={{
                                        color:
                                            menu == i + 1
                                                ? "#32363A"
                                                : "#6A6D70",
                                        borderBottom:
                                            menu == i + 1
                                                ? "2px solid #0059BC"
                                                : "none",
                                    }}
                                    className="categoryItem"
                                    onClick={() => {
                                        if (menu === i + 1) {
                                            setMenu(0);
                                        } else {
                                            setMenu(i + 1);
                                        }
                                    }}
                                >
                                    {value}
                                </div>
                            );
                        })}
                        {window.screen.width > 768 &&
                        window.screen.width < 1440 ? (
                            <FormControl>
                                <Select
                                    IconComponent={KeyboardArrowDownIcon}
                                    MenuProps={{
                                        backgroundColor: "#F4F5F6",
                                        sx: {
                                            "&& ul": {
                                                width: "92px",
                                                padding: 0,
                                            },
                                            "&& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper":
                                                {
                                                    paddingTop: "2px",
                                                    paddingBottom: "12px",
                                                    width: "92px",
                                                    height: "92px",
                                                    backgroundColor: "#F4F5F6",
                                                    boxSizing: "border-box",
                                                    borderRadius: 0,
                                                },
                                            ".css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root":
                                                {
                                                    marginTop: "10px",
                                                    height: "16px",
                                                    width: "92px",
                                                    color: "#6A6D70",
                                                    fontFamily: "Roboto",
                                                    fontSize: "14px",
                                                    fontWeight: 400,
                                                },
                                            ".css-6hp17o-MuiList-root-MuiMenu-list":
                                                {
                                                    padding: 0,
                                                    width: "92px",
                                                },

                                            cursor: "pointer",
                                        },
                                    }}
                                    sx={{
                                        borderRadius: 0,
                                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                                            {
                                                border: 0,
                                            },
                                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                            {
                                                border: 0,
                                            },
                                        width: "92px",
                                        marginTop: "24px",
                                        height: "16px",
                                        boxShadow: "none",
                                        ".MuiOutlinedInput-notchedOutline": {
                                            border: 0,
                                        },
                                        ".css-hfutr2-MuiSvgIcon-root-MuiSelect-icon":
                                            {
                                                color: "#6A6D70",
                                            },
                                        ".css-bpeome-MuiSvgIcon-root-MuiSelect-icon":
                                            {
                                                color: "#6A6D70",
                                            },
                                        ".css-kzbtqt-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused":
                                            {
                                                border: "none",
                                            },
                                        fieldset: {
                                            border: "none",
                                        },
                                        fontFamily: "Roboto",
                                        fontSize: 14,
                                        fontWeight: 400,
                                        color: "#6A6D70",
                                    }}
                                    renderValue={() => (
                                        <Placeholder>More</Placeholder>
                                    )}
                                    value={category}
                                    onChange={handleChange}
                                >
                                    <MenuItem
                                        style={{ backgroundColor: "#F4F5F6" }}
                                        value={20}
                                        onClick={() => {
                                            if (menu === 7) {
                                                setMenu(0);
                                            } else {
                                                setMenu(7);
                                            }
                                        }}
                                    >
                                        Menu Item
                                    </MenuItem>
                                    <MenuItem
                                        style={{ backgroundColor: "#F4F5F6" }}
                                        value={30}
                                        onClick={() => {
                                            if (menu === 8) {
                                                setMenu(0);
                                            } else {
                                                setMenu(8);
                                            }
                                        }}
                                    >
                                        Menu Item
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            if (menu === 9) {
                                                setMenu(0);
                                            } else {
                                                setMenu(9);
                                            }
                                        }}
                                        style={{ backgroundColor: "#F4F5F6" }}
                                        value={40}
                                    >
                                        Menu Item
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        ) : null}
                    </div>
                    {menu !== 0 && window.screen.width > 768 ? (
                        <div
                            className="menu-item-open"
                            style={{
                                width:
                                    window.screen.width < 1440
                                        ? window.screen.width - 64
                                        : 1200,
                            }}
                        >
                            <div>
                                <div className="menu-header">Header</div>
                                <div className="menu-subheader">Subheader</div>
                                <div className="menu-subheader">Subheader</div>
                                <div className="menu-subheader">Subheader</div>
                                <div className="menu-subheader">Subheader</div>
                                <div className="menu-subheader">Subheader</div>
                                <div className="menu-subheader">Subheader</div>
                                <div className="menu-subheader">Subheader</div>
                                <div className="menu-subheader">Subheader</div>
                            </div>
                            <div>
                                <div>
                                    <div className="menu-header">Header</div>
                                    <div className="menu-subheader">
                                        Subheader
                                    </div>
                                    <div className="menu-subheader">
                                        Subheader
                                    </div>
                                    <div className="menu-subheader">
                                        Subheader
                                    </div>
                                    <div className="menu-subheader">
                                        Subheader
                                    </div>
                                    <div className="menu-subheader">
                                        Subheader
                                    </div>
                                    <div className="menu-subheader">
                                        Subheader
                                    </div>
                                    <div className="menu-subheader">
                                        Subheader
                                    </div>
                                    <div className="menu-subheader">
                                        Subheader
                                    </div>
                                </div>
                            </div>
                            <img
                                style={{
                                    width:
                                        window.screen.width < 1440
                                            ? window.screen.width - 400
                                            : 776,
                                }}
                                src={menuPic}
                            />
                        </div>
                    ) : null}
                </div>
            ) : null}
            {window.screen.width < 768 ? (
                <div className="search-container-mobile">
                    <input
                        className="search-input-mobile"
                        placeholder="Search..."
                    />
                    <div className="search-button-mobile">
                        <img src={searchIcon} />
                    </div>
                </div>
            ) : null}
            <SwipeableTextMobileStepper />
            {window.screen.width < 768 ? <ProductsMobile /> : <Products />}
            {window.screen.width < 768 ? <FooterMobile /> : <Footer />}
        </div>
    );
}

export default App;
