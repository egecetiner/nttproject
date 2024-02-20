import "./App.css";
import * as React from "react";
import SwipeableTextMobileStepper from "./Swiper";
import Products from "./Products";
import Footer from "./Footer";
import { SearchContainer } from "./SearchContainer";
import { useState } from "react";
import menuPic from "./menu.png";

function App() {
    const [menu, setMenu] = useState(0);
    return (
        <div>
            <SearchContainer />
            <div className="categories-container">
                <div className="categories">
                    <div
                        style={{
                            color: menu == 1 ? "#32363A" : "#6A6D70",
                            borderBottom:
                                menu == 1 ? "2px solid #0059BC" : "none",
                        }}
                        className="categoryItem"
                        onClick={() => {
                            if (menu === 1) {
                                setMenu(0);
                            } else {
                                setMenu(1);
                            }
                        }}
                    >
                        Menu Item
                    </div>
                    <div
                        style={{
                            color: menu == 2 ? "#32363A" : "#6A6D70",
                            borderBottom:
                                menu == 2 ? "2px solid #0059BC" : "none",
                        }}
                        className="categoryItem"
                        onClick={() => {
                            if (menu === 2) {
                                setMenu(0);
                            } else {
                                setMenu(2);
                            }
                        }}
                    >
                        Menu Item
                    </div>
                    <div
                        style={{
                            color: menu == 3 ? "#32363A" : "#6A6D70",
                            borderBottom:
                                menu == 3 ? "2px solid #0059BC" : "none",
                        }}
                        className="categoryItem"
                        onClick={() => {
                            if (menu === 3) {
                                setMenu(0);
                            } else {
                                setMenu(3);
                            }
                        }}
                    >
                        Menu Item
                    </div>
                    <div
                        style={{
                            color: menu == 4 ? "#32363A" : "#6A6D70",
                            borderBottom:
                                menu == 4 ? "2px solid #0059BC" : "none",
                        }}
                        className="categoryItem"
                        onClick={() => {
                            if (menu === 4) {
                                setMenu(0);
                            } else {
                                setMenu(4);
                            }
                        }}
                    >
                        Menu Item
                    </div>
                    <div
                        style={{
                            color: menu == 5 ? "#32363A" : "#6A6D70",
                            borderBottom:
                                menu == 5 ? "2px solid #0059BC" : "none",
                        }}
                        className="categoryItem"
                        onClick={() => {
                            if (menu === 5) {
                                setMenu(0);
                            } else {
                                setMenu(5);
                            }
                        }}
                    >
                        Menu Item
                    </div>
                    <div
                        style={{
                            color: menu == 6 ? "#32363A" : "#6A6D70",
                            borderBottom:
                                menu == 6 ? "2px solid #0059BC" : "none",
                        }}
                        className="categoryItem"
                        onClick={() => {
                            if (menu === 6) {
                                setMenu(0);
                            } else {
                                setMenu(6);
                            }
                        }}
                    >
                        Menu Item
                    </div>
                    <div
                        style={{
                            color: menu == 7 ? "#32363A" : "#6A6D70",
                            borderBottom:
                                menu == 7 ? "2px solid #0059BC" : "none",
                        }}
                        className="categoryItem"
                        onClick={() => {
                            if (menu === 7) {
                                setMenu(0);
                            } else {
                                setMenu(7);
                            }
                        }}
                    >
                        Menu Item
                    </div>
                    <div
                        style={{
                            color: menu == 8 ? "#32363A" : "#6A6D70",
                            borderBottom:
                                menu == 8 ? "2px solid #0059BC" : "none",
                        }}
                        className="categoryItem"
                        onClick={() => {
                            if (menu === 8) {
                                setMenu(0);
                            } else {
                                setMenu(8);
                            }
                        }}
                    >
                        Menu Item
                    </div>
                    <div
                        style={{
                            color: menu == 9 ? "#32363A" : "#6A6D70",
                            borderBottom:
                                menu == 9 ? "2px solid #0059BC" : "none",
                        }}
                        className="categoryItem"
                        onClick={() => {
                            if (menu === 9) {
                                setMenu(0);
                            } else {
                                setMenu(9);
                            }
                        }}
                    >
                        Menu Item
                    </div>
                    <div
                        style={{
                            color: menu == 10 ? "#32363A" : "#6A6D70",
                            borderBottom:
                                menu == 10 ? "2px solid #0059BC" : "none",
                        }}
                        className="categoryItem"
                        onClick={() => {
                            if (menu === 10) {
                                setMenu(0);
                            } else {
                                setMenu(10);
                            }
                        }}
                    >
                        Menu Item
                    </div>
                    <div
                        style={{
                            color: menu == 11 ? "#32363A" : "#6A6D70",
                            borderBottom:
                                menu == 11 ? "2px solid #0059BC" : "none",
                        }}
                        className="categoryItem"
                        onClick={() => {
                            if (menu === 11) {
                                setMenu(0);
                            } else {
                                setMenu(11);
                            }
                        }}
                    >
                        Menu Item
                    </div>
                    <div
                        style={{
                            color: menu == 12 ? "#32363A" : "#6A6D70",
                            borderBottom:
                                menu == 12 ? "2px solid #0059BC" : "none",
                        }}
                        className="categoryItem"
                        onClick={() => {
                            if (menu === 12) {
                                setMenu(0);
                            } else {
                                setMenu(12);
                            }
                        }}
                    >
                        Menu Item
                    </div>
                </div>
                {menu !== 0 ? (
                    <div className="menu-item-open">
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
                                <div className="menu-subheader">Subheader</div>
                                <div className="menu-subheader">Subheader</div>
                                <div className="menu-subheader">Subheader</div>
                                <div className="menu-subheader">Subheader</div>
                                <div className="menu-subheader">Subheader</div>
                                <div className="menu-subheader">Subheader</div>
                                <div className="menu-subheader">Subheader</div>
                                <div className="menu-subheader">Subheader</div>
                            </div>
                        </div>
                        <img src={menuPic} />
                    </div>
                ) : null}
            </div>

            <SwipeableTextMobileStepper />
            <Products />
            <Footer />
        </div>
    );
}

export default App;
