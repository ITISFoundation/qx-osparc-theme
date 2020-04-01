/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2010 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Tristan Koch (tristankoch)

************************************************************************ */

/* ************************************************************************


************************************************************************ */

/**
 * Demonstrates oSparc specific widgets
 *
 */

qx.Class.define("widgetbrowser.pages.OSparc", {
  extend: widgetbrowser.pages.AbstractPage,

  construct: function() {
    this.base(arguments);

    this.initWidgets();
  },

  members: {
    __hbox: null,

    initWidgets: function() {
      const fonts = this.__initFonts();
      this.add(fonts, {
        left: 0,
        top: 0
      });
    },

    __initFonts: function() {
      const fontsGroupBox = new qx.ui.groupbox.GroupBox("Fonts");
      fontsGroupBox.setLayout(new qx.ui.layout.VBox(5));

      [
        "nav-bar-label",
        "title-18",
        "text-18",
        "title-16",
        "text-16",
        "title-14",
        "text-14",
        "title-13",
        "text-13",
        "title-12",
        "text-12",
        "link-label",
        "text-12-italic",
        "text-11",
        "text-10",
        "text-9",
        "text-8-italic",
        "workbench-start-hint",
        "workbench-io-label"
      ].forEach(font => {
        const lbl = new qx.ui.basic.Label(font).set({
          font
        });
        fontsGroupBox.add(lbl);
      });

      return fontsGroupBox;
    }
  }
});
