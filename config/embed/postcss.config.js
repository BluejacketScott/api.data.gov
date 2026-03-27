import autoprefixer from "autoprefixer";
import postcssRelativeRem from "postcss-relative-rem";

export default {
  plugins: [
    autoprefixer,
    postcssRelativeRem({
      baseCssVariable: "--api-umbrella-rem-relative-base",
    }),
  ],
};
