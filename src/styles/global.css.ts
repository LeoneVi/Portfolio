import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("html", {
    minHeight: "100%",
    padding: "2rem",
    color: vars.color.ivory,
    fontFamily: vars.typography.fontFamily,
    background: vars.color.navy,
});

globalStyle('a', {
    color: 'inherit',
})
