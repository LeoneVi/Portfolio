import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const maps = style({
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
});

export const center = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
});

export const backArrow = style({
    fontSize: "2rem",
    textDecoration: "none",
});

export const square = style({
    display: "inline-block",
    height: "12px",
    width: "12px",
    border: `2px solid ${vars.color.ivory}`,
    marginRight: vars.spacing.xs,
    verticalAlign: "middle",
});

export const mapColors = {
    livedIn: "#2e3141",
    visited: "#525d73",
    drivenThrough: "#a3b2c7",
};