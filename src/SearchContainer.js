import logo from "./logo.svg";
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
        return <div className="categories-placeholder">{children}</div>;
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
                    MenuProps={{
                        sx: {
                            "&& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper":
                                {
                                    paddingTop: "4px",
                                    paddingBottom: "4px",
                                    paddingLeft: "12px",
                                    paddingRight: "12px",
                                    width: "131px",
                                    height: "186px",
                                    backgroundColor: "#00254F",
                                },
                            "&& .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-selected":
                                {
                                    backgroundColor: "#0059BC",
                                },
                            ".css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
                                height: "34px",
                                color: "#FFFFFF",
                                fontFamily: "Roboto",
                                fontSize: "14px",
                                fontWeight: 400,
                                textAlign: "left",
                            },
                            ".css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root:hover":
                                {
                                    backgroundColor: "#0059BC",
                                },
                        },
                    }}
                    sx={{
                        width: 132,
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
                        fontFamily: "Roboto",
                        fontSize: 14,
                        fontWeight: 400,
                        color: "#32363A",
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
                    <MenuItem className="menu-item" value={10}>
                        Data
                    </MenuItem>
                    <MenuItem className="menu-item" value={20}>
                        Category Name
                    </MenuItem>
                    <MenuItem className="menu-item" value={30}>
                        Category Name
                    </MenuItem>
                    <MenuItem className="menu-item" value={40}>
                        Category Name
                    </MenuItem>
                    <MenuItem className="menu-item" value={50}>
                        Category Name
                    </MenuItem>
                </Select>
            </FormControl>
            <div className="searchButton">
                <img src={searchIcon} />
            </div>
        </div>
    );
};
