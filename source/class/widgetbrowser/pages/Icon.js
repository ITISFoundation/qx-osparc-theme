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
 * Demonstrates Icon specific widgets
 *
 */

qx.Class.define("widgetbrowser.pages.Icon", {
  extend: widgetbrowser.pages.AbstractPage,

  construct: function() {
    this.base(arguments);

    this.initWidgets();
  },

  members: {
    __hbox: null,

    initWidgets: function() {
      const icons = this.__initIcons();
      this.add(icons, {
        left: 0,
        top: 0
      });
    },

    __initIcons: function() {
      const hbox = new qx.ui.container.Composite(new qx.ui.layout.HBox(10));

      const fontawesomeGroupBox = new qx.ui.groupbox.GroupBox("FontAwesome").set({
        layout: new qx.ui.layout.VBox(5)
      });
      /*
      const signIn = new qx.ui.basic.Atom("sign-in-alt", "@FontAwesome5Solid/sign-in-alt/32");
      fontawesomeGroupBox.add(signIn);
      */
      hbox.add(fontawesomeGroupBox);
      /*
      const materialomeGroupBox = new qx.ui.groupbox.GroupBox("FontAwesome").set({
        layout: new qx.ui.layout.VBox(5)
      });

      const signIn = new qx.ui.basic.Atom("sign-in-alt", "@MaterialIcons/sign-in-alt/32");
      materialomeGroupBox.add(signIn);
      hbox.add(materialomeGroupBox);
      */

      return hbox;
    }
  }
});
