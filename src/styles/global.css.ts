
import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("*, *::before, *::after", {
    boxSizing: "border-box",
});

globalStyle("html", {
    minHeight: "100%",
    margin: 0,
    padding: 0,
});

globalStyle("body", {
    minHeight: "100vh",
    margin: 0,
    padding: 0,
    fontFamily: vars.typography.fontFamily,
    background: vars.color.navy,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
});

globalStyle("#root", {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
});

globalStyle('a', {
    color: 'inherit',
})
