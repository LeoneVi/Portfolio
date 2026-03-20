import { style } from "@vanilla-extract/css";

export const layout = style({
  display: "flex",
  gap: "1.5rem",
  alignItems: "flex-start",
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
});

export const image = style({
  width: "8rem",
  border: "2px solid #6b7280",
});