import * as React from "react";
import carousel1 from "./carousel1.png";
import carousel2 from "./carousel2.png";
import carousel3 from "./carousel3.png";
import carousel4 from "./carousel4.png";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        imgPath: carousel1,
    },
    {
        imgPath: carousel2,
    },
    {
        imgPath: carousel3,
    },
    {
        imgPath: carousel4,
    },
];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div style={{ height: "450px" }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 450,
                                    display: "block",
                                    width: 1440,
                                    overflow: "hidden",
                                    width: "100%",
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>

            <MobileStepper
                sx={{
                    position: "relative",
                    top: -74,
                    height: 58,
                    background: "rgba(0, 0, 0, 0.4)",
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "flex-end",
                    paddingRight: "120px",

                    "& .MuiMobileStepper-dot": {
                        backgroundColor: "white",
                        width: "10px",
                        height: "10px",
                    },
                    "& .MuiMobileStepper-dotActive": {
                        border: "1px solid white",
                        width: "8px",
                        height: "8px",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                    },
                }}
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
            />
        </div>
    );
}

export default SwipeableTextMobileStepper;
