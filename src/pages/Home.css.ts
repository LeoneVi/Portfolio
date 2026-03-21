import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css.ts"

export const layout = style({
  display: "flex",
});

export const mainContent = style({
  flex: 1,
});

export const links = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: vars.typography.fontSize.base,
});

export const buttons = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  paddingTop: vars.spacing.xs
});

export const imageDisplay = style({
  float: "right",
  marginRight: vars.spacing.lg,
  marginLeft: vars.spacing.lg,

})

export const image = style({
  width: vars.image.xl,
  border: "2px solid #6b7280",
});