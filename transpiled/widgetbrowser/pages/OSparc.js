(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "widgetbrowser.pages.AbstractPage": {
        "construct": true,
        "require": true
      },
      "qx.ui.groupbox.GroupBox": {},
      "qx.ui.layout.VBox": {},
      "osparc.theme.common.Font": {},
      "qx.ui.basic.Label": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

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
    construct: function construct() {
      widgetbrowser.pages.AbstractPage.constructor.call(this);
      this.initWidgets();
    },
    members: {
      __hbox: null,
      initWidgets: function initWidgets() {
        var fonts = this.__initFonts();

        this.add(fonts, {
          left: 0,
          top: 0
        });
      },
      __initFonts: function __initFonts() {
        var fontsGroupBox = new qx.ui.groupbox.GroupBox("Fonts");
        fontsGroupBox.setLayout(new qx.ui.layout.VBox(10));
        var commonFontsGroupBox = new qx.ui.groupbox.GroupBox("Common Fonts").set({
          layout: new qx.ui.layout.VBox(5)
        });
        var commonFonts = osparc.theme.common.Font.fonts;
        var commonFontsKeys = Object.keys(Object.getPrototypeOf(commonFonts));
        commonFontsKeys.forEach(function (commonFont) {
          var lbl = new qx.ui.basic.Label(commonFont).set({
            font: commonFont
          });
          commonFontsGroupBox.add(lbl);
        });
        fontsGroupBox.add(commonFontsGroupBox);
        var osparcFontsGroupBox = new qx.ui.groupbox.GroupBox("oSparc Fonts").set({
          layout: new qx.ui.layout.VBox(5)
        });
        var osparcFonts = osparc.theme.common.Font.fonts;
        var osparcFontsKeys = Object.keys(Object.getPrototypeOf(osparcFonts));
        osparcFontsKeys.forEach(function (osparcFont) {
          var lbl = new qx.ui.basic.Label(osparcFont).set({
            font: osparcFont
          });
          osparcFontsGroupBox.add(lbl);
        });
        fontsGroupBox.add(osparcFontsGroupBox);
        return fontsGroupBox;
      }
    }
  });
  widgetbrowser.pages.OSparc.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=OSparc.js.map?dt=1599827692954