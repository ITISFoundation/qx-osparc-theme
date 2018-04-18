"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.container.Composite": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.Canvas": {
        "construct": true
      },
      "qx.type.Array": {
        "construct": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("widgetbrowser.pages.AbstractPage", {
    type: "abstract",

    extend: qx.ui.container.Composite,

    construct: function construct() {
      qx.ui.container.Composite.constructor.call(this);
      this.setLayout(new qx.ui.layout.Canvas());

      this._widgets = new qx.type.Array();
    },

    members: {
      _widgets: null,

      getWidgets: function getWidgets() {
        return this._widgets;
      }
    }
  });
  widgetbrowser.pages.AbstractPage.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=AbstractPage.js.map