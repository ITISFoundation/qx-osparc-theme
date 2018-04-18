"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "widgetbrowser.pages.Tree": {},
      "widgetbrowser.pages.List": {},
      "widgetbrowser.pages.Table": {},
      "widgetbrowser.pages.Form": {},
      "widgetbrowser.pages.ToolBar": {},
      "widgetbrowser.pages.Window": {},
      "widgetbrowser.pages.Tab": {},
      "widgetbrowser.pages.Control": {},
      "widgetbrowser.pages.Embed": {},
      "widgetbrowser.pages.EmbedFrame": {},
      "widgetbrowser.pages.Basic": {},
      "widgetbrowser.pages.Misc": {},
      "qx.Class": {
        "usage": "dynamic",
        "construct": true,
        "require": true
      },
      "qx.ui.tabview.Page": {
        "construct": true,
        "require": true
      },
      "widgetbrowser.MControls": {
        "require": true
      },
      "qx.ui.layout.Canvas": {
        "construct": true
      },
      "qx.io.PartLoader": {
        "construct": true
      },
      "qx.ui.basic.Image": {
        "construct": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("widgetbrowser.view.TabPage", {
    extend: qx.ui.tabview.Page,

    include: widgetbrowser.MControls,

    construct: function construct(label, classname, controls) {
      qx.ui.tabview.Page.constructor.call(this);

      this.setLabel(label);
      this.setLayout(new qx.ui.layout.Canvas());

      // Load content of tab on "appear"
      this.addListenerOnce("appear", function () {
        // Require part
        var part = classname.split(".").pop().toLowerCase();

        qx.io.PartLoader.require([part], function () {
          // Finally, instantiate class
          var clazz = qx.Class.getByName(classname);
          var pageContent = new clazz();

          // Add to page
          this.add(pageContent, { top: 40,
            edge: 0 });

          // Init controls for widgets of page
          this.initControls(pageContent.getWidgets(), controls);

          // Exclude loading indicator
          loading.setVisibility("excluded");
        }, this);
      }, this);

      // Show centered loading indicator
      var loading = new qx.ui.basic.Image("widgetbrowser/loading66.gif");
      loading.setMarginTop(-33);
      loading.setMarginLeft(-33);
      this.add(loading, { left: "50%",
        top: "50%" });
    },

    members: {}
  });
  widgetbrowser.view.TabPage.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=TabPage.js.map