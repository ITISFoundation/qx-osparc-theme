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
      // Label
      const title = new qx.ui.basic.Label("Fonts");
      this.add(title, {
        left: 0,
        top: 0
      });

      const hbox = new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
      [
        "nav-bar-label",
        "title-18",
        "text-18"
      ].forEach(font => {
        const lbl = new qx.ui.basic.Label(font).set({
          font
        });
        hbox.add(lbl);
      });
      this.add(hbox, {
        left: 0,
        top: 40
      });
    }
  }
});
