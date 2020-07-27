/* ************************************************************************

  OSparc Light Theme for Qooxdoo

  Copyright:
     2020 IT'IS Foundation

  License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

  Authors:
    * Odei Maiz (odeimaiz)

  Origin:
    This theme is based in large parts on the the Simple
    theme included with Qooxdoo.
************************************************************************ */
/**
 * Based on osparcdark inverted colors
 */
qx.Theme.define("osparc.theme.osparclight.Color", {
  colors: {
    // main
    "background-main": "#FFFFFF",
    "background-main-lighter": "#CFCFCF",
    "background-main-lighter+": "#C8C8C8",
    "light-background": "#BBBBBB",
    "light-background+": "#AAAAAA",

    // window
    "window-caption-background": "background-main",
    "window-caption-background-active": "light-background",
    "window-caption-text": "text",
    "window-caption-text-active": "text-selected",

    // material-button
    "material-button-background": "#BFBFBF",
    "material-button-background-disabled": "#CFCFCF",
    "material-button-background-hovered": "#AFAFAF",
    "material-button-background-pressed": "#AFAFAF",
    "material-button-text-disabled": "text-disabled",
    "material-button-text": "text",

    // material-textfield
    "material-textfield": "#7F7F7F",
    "material-textfield-focused": "#1F1F1F",
    "material-textfield-disabled": "#AAAAAA",
    "material-textfield-invalid": "#5FBFBF",
    "invalid": "material-textfield-invalid",

    // backgrounds
    "background-selected": "#AAAAAA",
    "background-selected-disabled": "#CCCCCC",
    "background-selected-dark": "#BBBBBB",
    "background-disabled": "background-main",
    "background-disabled-checked": "#CCCCCC",
    "background-pane": "#DDDDDD",

    // tabview
    "tabview-unselected": "#000000",
    "tabview-button-border": "#000000",
    "tabview-label-active-disabled": "#262626",
    "tabview-pane-background": "background-main",
    "tabview-button-background": "transparent",
    // text colors
    "link": "#555555",

    // scrollbar
    "scrollbar-passive": "#CCCCCC",
    "scrollbar-active": "#BBBBBB",

    // form
    "button": "#AAAAAA",
    "button-border": "#999999",
    "button-border-hovered": "#777777",
    "button-box": "#BBBBBB",
    "button-box-pressed": "#AAAAAA",
    "border-lead": "#777777",

    // window
    "window-border": "#BBBBBB",
    "window-border-inner": "#DDDDDD",

    // group box
    "white-box-border": "#BFBFBF",

    // shadows
    "shadow": qx.core.Environment.get("css.rgba") ? "rgba(1.0, 1.0, 1.0, 0.4)" : "#999999",

    // borders
    // 'border-main' is an alias of 'background-selected' (compatibility reasons)
    "border": "#B7B7B7",
    "border-focused": "#484848",
    "border-invalid": "material-textfield-invalid",
    "border-disabled": "#DDDDDD",

    // separator
    "border-separator": "#7F7F7F",

    // text
    "text": "#404040",
    "text-disabled": "#7F7F7F",
    "text-selected": "#0F0F0F",
    "text-placeholder": "text-disabled",
    "text-darker": "text-disabled",
    // "contrasted-text-dark": "#DDDDDD",
    // "contrasted-text-light": "#111111",

    // tooltip
    "tooltip": "#7F7F7F",
    "tooltip-text": "#0F0F0F",

    // table
    "table-header": "background-main",
    "table-header-foreground": "text",
    "table-header-border": "#777777",
    "table-focus-indicator": "#8A8A8A",

    // used in table code
    "table-header-cell": "#DFDFDF",
    "table-row-background-focused-selected": "#A9A9A9",
    "table-row-background-focused": "#BABABA",
    "table-row-background-selected": "#A9A9A9",
    "table-row-background-even": "#DFDFDF",
    "table-row-background-odd": "#CFCFCF",
    // foreground
    "table-row-selected": "#0F0F0F",
    "table-row": "#404040",
    // table grid color
    "table-row-line": "#DDDDDD",
    "table-column-line": "#DDDDDD",

    // used in progressive code
    "progressive-table-header": "#555555",
    "progressive-table-row-background-even": "#DFDFDF",
    "progressive-table-row-background-odd": "#CFCFCF",
    "progressive-progressbar-background": "#FFFFFF",
    "progressive-progressbar-indicator-done": "#DDDDDD",
    "progressive-progressbar-indicator-undone": "#CCCCCC",
    "progressive-progressbar-percent-background": "#FFFFFF",
    "progressive-progressbar-percent-text": "#CCCCCC",


    /*
    ---------------------------------------------------------------------------
      OSPARC RELATED
    ---------------------------------------------------------------------------
    */
    // "workbench-edge-comp-active": "#888888",
    // "workbench-edge-api-active": "#444444",
    // "workbench-edge-selected": "#FFFF00",
    // "workbench-start-hint": "#AFAFAF",

    // "node-selected-background": "#999999",
    // "node-title-text": "#232323",
    // "node-port-text": "#454545",

    // "logger-debug-message": "#000000",
    // "logger-info-message": "#000000",
    // "logger-warning-message": "#FFFF00",
    // "logger-error-message": "#FF0000",

    // "service-window-hint": "#7F7F7F",

    // "activitytree-background-cpu": "#D38331",
    // "activitytree-background-memory": "#CA7B8A",

    // "ready-green": "#33925A",
    // "failed-red": "#FF2D2D",

    // "progressbar": "#9F6F61",

    // "loading-page-background-color": "background-main",
    // "loading-page-text": "#000000",
    // "loading-page-spinner": "#222222"
  }
});
