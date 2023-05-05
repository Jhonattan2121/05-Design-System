import { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space } from "@ignite-ui/tokens/src";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    themeMap: {
        ...defaultThemeMap,
        height: "space",
        width: "space",
    },
    theme: {
        colors: colors,
        fontsSizes: fontSizes,
        fontWeights: fontWeights,
        fonts: fonts,
        lineHeights: lineHeights,
        radii: radii,
        space: space,
    },
})