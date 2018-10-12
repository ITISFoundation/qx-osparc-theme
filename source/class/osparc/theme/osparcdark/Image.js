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

/* ************************************************************************


************************************************************************* */
/**
 * Mapping class for all images used in the simple theme.
 *
 * @asset(qx/decoration/Simple/*)
 * @asset(qx/static/blank.png)
 */
qx.Class.define("osparc.theme.osparcdark.Image",
  {
    extend : qx.core.Object,

    statics :
  {
    /**
     * Holds a map containing all the URL to the images.
     * @internal
     */
    URLS :
    {
      "blank" : "qx/static/blank.png",

      // checkbox
      "checkbox-checked" : "@MaterialIcons/check_box/15",
      "checkbox-blank" : "@MaterialIcons/check_box_outline_blank/15",
      "checkbox-undetermined" : "@MaterialIcons/indeterminate_check_box/15",

      // window
      "window-minimize" : "@MaterialIcons/keyboard_arrow_down",
      "window-maximize" : "@MaterialIcons/fullscreen",
      "window-restore" : "@MaterialIcons/fullscreen_exit",
      "window-close" : "@MaterialIcons/close",

      // cursor
      "cursor-copy" : "decoration/cursors/copy.gif",
      "cursor-move" : "decoration/cursors/move.gif",
      "cursor-alias" : "decoration/cursors/alias.gif",
      "cursor-nodrop" : "decoration/cursors/nodrop.gif",


      // arrows
      "arrow-right" : "@MaterialIcons/keyboard_arrow_right/18",
      "arrow-left" : "@MaterialIcons/keyboard_arrow_left/18",
      "arrow-up" : "@MaterialIcons/keyboard_arrow_up/18",
      "arrow-down" : "@MaterialIcons/keyboard_arrow_down/18",
      "arrow-forward" : "decoration/arrows/forward.gif",
      "arrow-rewind" : "decoration/arrows/rewind.gif",
      "arrow-down-small" : "decoration/arrows/down-small.gif",
      "arrow-up-small" : "decoration/arrows/up-small.gif",
      "arrow-up-invert" : "decoration/arrows/up-invert.gif",
      "arrow-down-invert" : "decoration/arrows/down-invert.gif",
      "arrow-right-invert" : "decoration/arrows/right-invert.gif",

      // split pane
      "knob-horizontal" : "decoration/splitpane/knob-horizontal.png",
      "knob-vertical" : "decoration/splitpane/knob-vertical.png",

      // tree
      "tree-minus" : "@MaterialIcons/arrow_drop_down/16",
      "tree-plus" : "@MaterialIcons/arrow_right/16",

      // table
      "select-column-order" : "decoration/table/select-column-order.png",
      "table-ascending" : "decoration/table/ascending.png",
      "table-descending" : "decoration/table/descending.png",

      // tree virtual
      "treevirtual-line" : "decoration/treevirtual/line.gif",
      "treevirtual-minus-only" : "decoration/treevirtual/only_minus.gif",
      "treevirtual-plus-only" : "decoration/treevirtual/only_plus.gif",
      "treevirtual-minus-start" : "decoration/treevirtual/start_minus.gif",
      "treevirtual-plus-start" : "decoration/treevirtual/start_plus.gif",
      "treevirtual-minus-end" : "decoration/treevirtual/end_minus.gif",
      "treevirtual-plus-end" : "decoration/treevirtual/end_plus.gif",
      "treevirtual-minus-cross" : "decoration/treevirtual/cross_minus.gif",
      "treevirtual-plus-cross" : "decoration/treevirtual/cross_plus.gif",
      "treevirtual-end" : "decoration/treevirtual/end.gif",
      "treevirtual-cross" : "decoration/treevirtual/cross.gif",
      "folder-open": "@MaterialIcons/folder_open/15",
      "folder": "@MaterialIcons/folder/15",
      "file": "@MaterialIcons/insert_drive_file/15",

      // menu
      "menu-checkbox" : "decoration/menu/checkbox.gif",
      "menu-checkbox-invert" : "decoration/menu/checkbox-invert.gif",
      "menu-radiobutton-invert" : "decoration/menu/radiobutton-invert.gif",
      "menu-radiobutton" : "decoration/menu/radiobutton.gif",

      // tabview
      "tabview-close" : "decoration/tabview/close.gif"
    }
  }
  });
