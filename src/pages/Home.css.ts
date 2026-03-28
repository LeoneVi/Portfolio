import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css.ts"

export const layout = style({
  display: "flex",
});

export const links = style({
  alignItems: "center",
  gap: vars.spacing.xs,
  fontSize: vars.typography.fontSize.base,
});

export const buttons = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.spacing.sm,
  paddingTop: vars.spacing.md
});

export const imageDisplay = style({
  float: "right",
  marginRight: vars.spacing.lg,
  marginLeft: vars.spacing.lg,
  maxWidth: "100%",
  height: "auto",
})

export const content = style({
  flexDirection: "column",
  minWidth: "280px",
})

export const image = style({
  width: vars.image.xl,
  border: "2px solid #6b7280",
});