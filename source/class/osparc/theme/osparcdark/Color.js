/* ************************************************************************

  OSparc Dark Theme for Qooxdoo

  Copyright:
     2018 IT'IS Foundation

  License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

  Authors:
    * Tobias Oetiker (oetiker)

  Origin:
    This theme is based in large parts on the the Simple
    theme included with Qooxdoo.
************************************************************************ */
/**
 * Simple color theme
 */
qx.Theme.define("osparc.theme.osparcdark.Color", {
  colors: {
    // main
    "background":       "#202020",
    "dark-blue":        "#333333",
    "light-background": "#444",

    // material-button
    "material-button-background":         "#303030",
    "material-button-background-hovered": "#383838",
    "material-button-background-pressed": "#404040",

    // material-textfield
    "material-textfield":          "#808080",
    "material-textfield-focussed": "#e0e0e0",
    "material-textfield-invalid":  "#a04040",

    // backgrounds
    "background-selected":          "#555",
    "background-selected-disabled": "#333",
    "background-selected-dark":     "#444",
    "background-disabled":          "#333",
    "background-disabled-checked":  "#333",
    "background-pane":              "#222",

    // tabview
    "tabview-unselected":            "#1866B5",
    "tabview-button-border":         "#134983",
    "tabview-label-active-disabled": "#D9D9D9",

    // text colors
    "link": "#aaa",

    // scrollbar
    "scrollbar-bright": "#444",
    "scrollbar-dark":   "#111",

    // form
    "button":                    "#555",
    "button-border":             "#666",
    "button-border-hovered":     "#888",
    "invalid":                   "#FF0000",
    "button-box-bright":         "#444",
    "button-box-dark":           "#333",
    "button-box-bright-pressed": "#555",
    "button-box-dark-pressed":   "#444",
    "border-lead":               "#888888",

    // window
    "window-border":       "#444",
    "window-border-inner": "#222",

    // group box
    "white-box-border": "#404040",

    // shadows
    "shadow": qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.4)" : "#666666",

    // borders
    // 'border-main' is an alias of 'background-selected' (compatibility reasons)
    "border-main":         "#484848",
    "border-light":        "#B7B7B7",
    "border-light-shadow": "#686868",

    // separator
    "border-separator": "#808080",

    // text
    "text":             "#bfbfbf",
    "text-disabled":    "#808080",
    "text-selected":    "#e0e0e0",
    "text-placeholder": "#404040",

    // tooltip
    "tooltip":      "#808080",
    "tooltip-text": "#f0f0f0",

    // table
    "table-header":          "#333",
    "table-focus-indicator": "#252525",

    // used in table code
    "table-header-cell":                     "#202020",
    "table-row-background-focused-selected": "#232323",
    "table-row-background-focused":          "#353535",
    "table-row-background-selected":         "#262626",
    "table-row-background-even":             "#202020",
    "table-row-background-odd":              "#303030",
    "table-row-selected":                    "#000000",
    "table-row":                             "#ddd",
    "table-row-line":                        "#222",
    "table-column-line":                     "#222",

    // used in progressive code
    "progressive-table-header":                   "#AAAAAA",
    "progressive-table-row-background-even":      "#202020",
    "progressive-table-row-background-odd":       "#303030",
    "progressive-progressbar-background":         "#000",
    "progressive-progressbar-indicator-done":     "#222",
    "progressive-progressbar-indicator-undone":   "#333",
    "progressive-progressbar-percent-background": "#000",
    "progressive-progressbar-percent-text":       "#333"
  }
});
