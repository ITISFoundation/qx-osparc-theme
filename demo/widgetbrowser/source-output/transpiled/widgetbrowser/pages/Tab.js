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
      "qx.ui.layout.Grid": {
        "construct": true
      },
      "qx.ui.tabview.TabView": {},
      "qx.lang.Function": {},
      "qx.ui.tabview.Page": {},
      "qx.ui.layout.VBox": {},
      "qx.ui.basic.Label": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("widgetbrowser.pages.Tab", {
    extend: widgetbrowser.pages.AbstractPage,

    construct: function construct() {
      widgetbrowser.pages.AbstractPage.constructor.call(this);

      this.__grid = new qx.ui.container.Composite(new qx.ui.layout.Grid(10, 20));
      this.add(this.__grid);

      this.initWidgets();
    },

    members: {

      __grid: null,

      initWidgets: function initWidgets() {
        var widgets = this._widgets;

        var tabTop = this.__getTabView();
        tabTop.setBarPosition("top");
        this.__grid.add(tabTop, { row: 0,
          column: 0 });
        widgets.push(tabTop);

        var tabBottom = this.__getTabView();
        tabBottom.setBarPosition("bottom");
        this.__grid.add(tabBottom, { row: 0,
          column: 1 });
        widgets.push(tabBottom);

        var tabLeft = this.__getTabView();
        tabLeft.setBarPosition("left");
        this.__grid.add(tabLeft, { row: 1,
          column: 0 });
        widgets.push(tabLeft);

        var tabRight = this.__getTabView();
        tabRight.setBarPosition("right");
        this.__grid.add(tabRight, { row: 1,
          column: 1 });
        widgets.push(tabRight);
      },

      toggleOverflow: function toggleOverflow(tabView, enable) {
        if (!enable) {
          var children = tabView.getChildren();
          for (var i = children.length - 1; i >= 0; i--) {
            tabView.remove(children[i]);
          }
        } else {
          this.addTabPages(tabView);
        }
        this.addTabPages(tabView);
      },

      __getTabView: function __getTabView() {
        var tabView = new qx.ui.tabview.TabView();
        tabView.toggleOverflow = qx.lang.Function.bind(this.toggleOverflow, this);
        tabView.setWidth(400);
        tabView.setHeight(200);
        this.addTabPages(tabView);

        return tabView;
      },

      addTabPages: function addTabPages(tabView) {
        var page1 = new qx.ui.tabview.Page("Layout", "icon/16/apps/utilities-terminal.png");
        page1.setLayout(new qx.ui.layout.VBox());
        page1.add(new qx.ui.basic.Label("Layout-Settings…"));
        tabView.add(page1);

        var page2 = new qx.ui.tabview.Page("Notes", "icon/16/apps/utilities-notes.png");
        page2.setLayout(new qx.ui.layout.VBox());
        page2.add(new qx.ui.basic.Label("Notes…"));
        tabView.add(page2);

        var page3 = new qx.ui.tabview.Page("Calculator", "icon/16/apps/utilities-calculator.png");
        page3.setLayout(new qx.ui.layout.VBox());
        page3.add(new qx.ui.basic.Label("Calculator…"));
        tabView.add(page3);
      }
    }
  });
  widgetbrowser.pages.Tab.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Tab.js.map