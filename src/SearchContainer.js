import logo from "./logo.svg";
import arrowDown from "./arrow-down.svg";
import searchIcon from "./search-icon.svg";
import "./App.css";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const SearchContainer = () => {
    const [category, setCategory] = useState("");
    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    const Placeholder = ({ children }) => {
        return <div style={{ color: "#32363A" }}>{children}</div>;
    };

    return (
        <div className="searchContainer">
            <img src={logo} />
            <input className="searchInput" placeholder="Search..." />
            <FormControl
                sx={{ minWidth: "fit-content", backgroundColor: "#F4F5F6" }}
            >
                <Select
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                        width: 133,
                        height: 40,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": {
                            borderLeft: 0,
                            borderColor: "#89919A",
                        },
                        ".css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
                            color: "#000000",
                        },
                        ".css-bpeome-MuiSvgIcon-root-MuiSelect-icon": {
                            color: "#000000",
                        },
                    }}
                    displayEmpty
                    value={category}
                    onChange={handleChange}
                    renderValue={
                        category !== ""
                            ? undefined
                            : () => <Placeholder>Categories</Placeholder>
                    }
                >
                    <MenuItem value={10}>Data</MenuItem>
                    <MenuItem value={20}>Category Name</MenuItem>
                    <MenuItem value={30}>Category Name</MenuItem>
                    <MenuItem value={40}>Category Name</MenuItem>
                    <MenuItem value={50}>Category Name</MenuItem>
                </Select>
            </FormControl>
            <div className="searchButton">
                <img src={searchIcon} />
            </div>
        </div>
    );
};
