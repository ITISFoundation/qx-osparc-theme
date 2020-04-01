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
      fontsGroupBox.setLayout(new qx.ui.layout.VBox(10));

      const commonFontsGroupBox = new qx.ui.groupbox.GroupBox("Common Fonts").set({
        layout: new qx.ui.layout.VBox(5)
      });
      const commonFonts = osparc.theme.common.Font.fonts;
      const commonFontsKeys = Object.keys(Object.getPrototypeOf(commonFonts));
      commonFontsKeys.forEach(commonFont => {
        const lbl = new qx.ui.basic.Label(commonFont).set({
          font: commonFont
        });
        commonFontsGroupBox.add(lbl);
      });
      fontsGroupBox.add(commonFontsGroupBox);

      const osparcFontsGroupBox = new qx.ui.groupbox.GroupBox("oSparc Fonts").set({
        layout: new qx.ui.layout.VBox(5)
      });
      const osparcFonts = osparc.theme.osparc.Font.fonts;
      const osparcFontsKeys = Object.keys(Object.getPrototypeOf(osparcFonts));
      osparcFontsKeys.forEach(osparcFont => {
        const lbl = new qx.ui.basic.Label(osparcFont).set({
          font: osparcFont
        });
        osparcFontsGroupBox.add(lbl);
      });
      fontsGroupBox.add(osparcFontsGroupBox);

      return fontsGroupBox;
    }
  }
});
