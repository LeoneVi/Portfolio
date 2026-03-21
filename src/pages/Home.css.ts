import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css.ts"

export const layout = style({
  display: "flex",
  gap: "2rem",
  alignItems: "flex-start",
  padding: "2rem",
  fontFamily: "monospace",
  minHeight: "100vh",
  color: vars.color.ivory,
});

export const mainContent = style({
  flex: 1,
});

export const contactLinks = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "1.125rem",
});

export const buttons = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  paddingTop: vars.spacing.xs
});

export const image = style({
  width: vars.image.lg,
  border: "2px solid #6b7280",
});