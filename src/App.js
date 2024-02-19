import logo from "./logo.svg";
import arrowDown from "./arrow-down.svg";
import searchIcon from "./search-icon.svg";
import "./App.css";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import SwipeableTextMobileStepper from "./Swiper";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { SearchContainer } from "./SearchContainer";

function App() {
    return (
        <div>
            <SearchContainer />
            <div className="categories">
                <div className="categoryItem">Menu Item</div>
                <div className="categoryItem">Menu Item</div>
                <div className="categoryItem">Menu Item</div>
                <div className="categoryItem">Menu Item</div>
                <div className="categoryItem">Menu Item</div>
                <div className="categoryItem">Menu Item</div>
                <div className="categoryItem">Menu Item</div>
                <div className="categoryItem">Menu Item</div>
                <div className="categoryItem">Menu Item</div>
                <div className="categoryItem">Menu Item</div>
                <div className="categoryItem">Menu Item</div>
                <div className="categoryItem">Menu Item</div>
            </div>
            <div>
                <SwipeableTextMobileStepper />
                <div>aasd</div>
            </div>
        </div>
    );
}

export default App;
