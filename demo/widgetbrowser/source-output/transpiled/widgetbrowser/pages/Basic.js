"use strict";

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
      "qx.ui.container.Composite": {
        "construct": true
      },
      "qx.ui.layout.HBox": {
        "construct": true
      },
      "qx.ui.basic.Label": {},
      "qx.ui.basic.Atom": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("widgetbrowser.pages.Basic", {
    extend: widgetbrowser.pages.AbstractPage,

    construct: function construct() {
      widgetbrowser.pages.AbstractPage.constructor.call(this);

      var hbox = this.__hbox = new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
      this.add(hbox, { top: 0 });

      this.initWidgets();
    },

    members: {

      __hbox: null,

      initWidgets: function initWidgets() {
        var widgets = this._widgets;

        // Label
        var label = new qx.ui.basic.Label("Label").set({ alignY: "middle" });
        widgets.push(label);
        this.__hbox.add(label);

        // Image
        var image = new qx.ui.basic.Atom("Image", "icon/32/status/dialog-information.png");
        widgets.push(image);
        this.__hbox.add(image);

        // Atom
        var atom = new qx.ui.basic.Atom("Atom", "icon/32/status/dialog-information.png");
        widgets.push(atom);
        this.__hbox.add(atom);
      }
    }
  });
  widgetbrowser.pages.Basic.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Basic.js.map