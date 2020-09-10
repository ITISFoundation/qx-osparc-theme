/* ************************************************************************

  Light Blue based theme for Qooxdoo

  Copyright:
     2020 IT'IS Foundation

  License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

  Authors:
    * Odei Maiz (odeimaiz)

************************************************************************ */
/**
 * Simple color theme
 */

qx.Theme.define("osparc.theme.lightblue.Color", {
  colors: {
    // main
    "background-main": "#202020",
    "background-main-lighter": "#303030",
    "background-main-lighter+": "#373737",
    "light-background": "#444",
    "light-background+": "#555555",

    // window
    "window-caption-background": "background-main",
    "window-caption-background-active": "light-background",
    "window-caption-text": "text",
    "window-caption-text-active": "text-selected",

    // material-button
    "material-button-background": "#404040",
    "material-button-background-disabled": "#303030",
    "material-button-background-hovered": "#505050",
    "material-button-background-pressed": "#505050",
    "material-button-text-disabled": "text-disabled",
    "material-button-text": "text",

    // material-textfield
    "material-textfield": "#808080",
    "material-textfield-focused": "#e0e0e0",
    "material-textfield-disabled": "#555",
    "material-textfield-invalid": "#a04040",
    "invalid": "material-textfield-invalid",

    // backgrounds
    "background-selected": "#555",
    "background-selected-disabled": "#333",
    "background-selected-dark": "#444",
    "background-disabled": "background-main",
    "background-disabled-checked": "#333",
    "background-pane": "#222",

    // tabview
    "tabview-unselected": "#ffffff",
    "tabview-button-border": "#ffffff",
    "tabview-label-active-disabled": "#d9d9d9",
    "tabview-pane-background": "background-main",
    "tabview-button-background": "transparent",
    // text colors
    "link": "#aaa",

    // scrollbar
    "scrollbar-passive": "#333",
    "scrollbar-active": "#444",

    // form
    "button": "#555",
    "button-border": "#666",
    "button-border-hovered": "#888",
    "button-box": "#444",
    "button-box-pressed": "#555",
    "border-lead": "#888888",

    // window
    "window-border": "#444",
    "window-border-inner": "#222",

    // group box
    "white-box-border": "#404040",

    // shadows
    "shadow": qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.4)" : "#666666",

    // borders
    // 'border-main' is an alias of 'background-selected' (compatibility reasons)
    "border": "#484848",
    "border-focused": "#B7B7B7",
    "border-invalid": "material-textfield-invalid",
    "border-disabled": "#222",

    // separator
    "border-separator": "#808080",

    // text
    "text": "#bfbfbf",
    "text-disabled": "#808080",
    "text-selected": "#f0f0f0",
    "text-placeholder": "text-disabled",
    "text-darker": "text-disabled",
    "contrasted-text-dark": "#222222",
    "contrasted-text-light": "#EEEEEE",

    // tooltip
    "tooltip": "#808080",
    "tooltip-text": "#f0f0f0",

    // table
    "table-header": "background-main",
    "table-header-foreground": "text",
    "table-header-border": "#888",
    "table-focus-indicator": "#757575",

    // used in table code
    "table-header-cell": "#202020",
    "table-row-background-focused-selected": "#565656",
    "table-row-background-focused": "#454545",
    "table-row-background-selected": "#565656",
    "table-row-background-even": "#202020",
    "table-row-background-odd": "#303030",
    // foreground
    "table-row-selected": "#f0f0f0",
    "table-row": "#bfbfbf",
    // table grid color
    "table-row-line": "#222",
    "table-column-line": "#222",

    // used in progressive code
    "progressive-table-header": "#AAAAAA",
    "progressive-table-row-background-even": "#202020",
    "progressive-table-row-background-odd": "#303030",
    "progressive-progressbar-background": "#000",
    "progressive-progressbar-indicator-done": "#222",
    "progressive-progressbar-indicator-undone": "#333",
    "progressive-progressbar-percent-background": "#000",
    "progressive-progressbar-percent-text": "#333",


    /*
    ---------------------------------------------------------------------------
      OSPARC RELATED
    ---------------------------------------------------------------------------
    */
    "workbench-edge-comp-active": "#777777",
    "workbench-edge-api-active": "#BBBBBB",
    "workbench-edge-selected": "#0000FF",
    "workbench-start-hint": "#505050",

    "node-selected-background": "#666666",
    "node-title-text": "#DCDCDC",
    "node-port-text": "#BABABA",

    "logger-debug-message": "#FFFFFF",
    "logger-info-message": "#FFFFFF",
    "logger-warning-message": "#FFFF00",
    "logger-error-message": "#FF0000",

    "service-window-hint": "#808080",

    "activitytree-background-cpu": "#2C7CCE",
    "activitytree-background-memory": "#358475",

    "ready-green": "#33925A",
    "failed-red": "#FF2D2D",

    "progressbar": "#60909e",

    "loading-page-background-color": "#202020",
    "loading-page-text": "#FFFFFF",
    "loading-page-spinner": "#DDDDDD"
  }
});