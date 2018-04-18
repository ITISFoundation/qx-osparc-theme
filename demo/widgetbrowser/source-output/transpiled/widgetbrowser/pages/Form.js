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
      "qxc.application.formdemo.FormItems": {
        "construct": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("widgetbrowser.pages.Form", {
    extend: widgetbrowser.pages.AbstractPage,

    statics: {
      ITEM_SIZE: 3
    },

    construct: function construct() {
      widgetbrowser.pages.AbstractPage.constructor.call(this);

      var formItems = new qxc.application.formdemo.FormItems();
      this._widgets = formItems.getWidgets();
      this.add(formItems);
    }
  });
  widgetbrowser.pages.Form.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Form.js.map