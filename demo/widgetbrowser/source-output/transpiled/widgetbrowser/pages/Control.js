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
      "qx.ui.layout.VBox": {
        "construct": true
      },
      "qx.type.Array": {},
      "qx.ui.basic.Label": {},
      "qx.ui.control.ColorSelector": {},
      "qx.ui.control.ColorPopup": {},
      "qx.ui.form.Button": {},
      "qx.ui.control.DateChooser": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("widgetbrowser.pages.Control", {
    extend: widgetbrowser.pages.AbstractPage,

    construct: function construct() {
      widgetbrowser.pages.AbstractPage.constructor.call(this);

      this.__vbox = new qx.ui.container.Composite(new qx.ui.layout.VBox(20));
      this.add(this.__vbox, { top: 0 });

      this.initWidgets();
    },

    members: {
      __vbox: null,

      initWidgets: function initWidgets() {
        var widgets = this._widgets = new qx.type.Array();
        var label;

        // ColorSelector
        label = new qx.ui.basic.Label("ColorSelector");
        var colorSelector = new qx.ui.control.ColorSelector();
        widgets.push(colorSelector);
        this.__vbox.add(label);
        this.__vbox.add(colorSelector);

        // ColorPopup
        label = new qx.ui.basic.Label("ColorPopup");
        var colorPopup = new qx.ui.control.ColorPopup();
        colorPopup.exclude();

        var openColorPopup = new qx.ui.form.Button("Open Color Popup").set({ maxWidth: 150 });
        widgets.push(openColorPopup);
        this.__vbox.add(label);
        this.__vbox.add(openColorPopup);
        openColorPopup.addListener("execute", function () {
          colorPopup.placeToWidget(openColorPopup, true);
          colorPopup.show();
        });

        // DateChooser
        var dateChooser = new qx.ui.control.DateChooser().set({ maxWidth: 240 });
        label = new qx.ui.basic.Label("DateChooser");
        widgets.push(dateChooser);
        this.__vbox.add(label);
        this.__vbox.add(dateChooser);
      }
    }
  });
  widgetbrowser.pages.Control.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Control.js.map