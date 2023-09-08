const breakpoints = Object.freeze({
  xs: "320px",
  xsm: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
});

export const devices = {
  xs: `(max-width: ${breakpoints.xs})`,
  xsm: `(max-width: ${breakpoints.xsm})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  "2xl": `(max-width: ${breakpoints["2xl"]})`,
};
