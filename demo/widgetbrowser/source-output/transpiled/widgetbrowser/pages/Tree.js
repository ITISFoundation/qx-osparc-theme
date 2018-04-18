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
      "qx.ui.basic.Label": {},
      "qx.ui.tooltip.ToolTip": {},
      "qx.ui.tree.Tree": {},
      "qx.ui.tree.TreeFolder": {},
      "qx.ui.tree.TreeFile": {},
      "qx.ui.tree.VirtualTree": {},
      "qx.data.store.Json": {},
      "qx.ui.treevirtual.TreeVirtual": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("widgetbrowser.pages.Tree", {
    extend: widgetbrowser.pages.AbstractPage,

    construct: function construct() {
      widgetbrowser.pages.AbstractPage.constructor.call(this);

      this.__grid = new qx.ui.container.Composite(new qx.ui.layout.Grid(10));
      this.add(this.__grid);

      this.initWidgets();
    },

    members: {

      __grid: null,

      initWidgets: function initWidgets() {
        var label;
        var widgets = this._widgets;

        // Tree
        label = new qx.ui.basic.Label("Tree");
        this.__grid.add(label, { row: 0,
          column: 0 });
        var tree = this.__getTree();
        this.__grid.add(tree, { row: 1,
          column: 0 });
        widgets.push(tree);

        // VirtualTree
        label = new qx.ui.basic.Label("VirtualTree");
        label.setToolTip(new qx.ui.tooltip.ToolTip("Virtual implementation of Tree. Shares appearance."));
        this.__grid.add(label, { row: 0,
          column: 1 });
        var virtualTree = this.__getVirtualTree();
        this.__grid.add(virtualTree, { row: 1,
          column: 1 });
        widgets.push(virtualTree);

        // TreeVirtual
        label = new qx.ui.basic.Label("TreeVirtual (Legacy)");
        label.setToolTip(new qx.ui.tooltip.ToolTip("Inherits from qx.ui.table.Table. Suited for multi-column trees."));
        this.__grid.add(label, { row: 0,
          column: 2 });
        var treeVirtual = this.__getTreeVirtual();
        this.__grid.add(treeVirtual, { row: 1,
          column: 2 });
        widgets.push(treeVirtual);
      },

      __getTree: function __getTree() {
        var tree = new qx.ui.tree.Tree().set({
          width: 200,
          height: 400
        });

        var root = new qx.ui.tree.TreeFolder("root");
        root.setOpen(true);
        tree.setRoot(root);

        var te1 = new qx.ui.tree.TreeFolder("Desktop");
        te1.setOpen(true);
        root.add(te1);

        var te1_1 = new qx.ui.tree.TreeFolder("Files");
        var te1_2 = new qx.ui.tree.TreeFolder("Workspace");
        var te1_3 = new qx.ui.tree.TreeFolder("Network");
        var te1_4 = new qx.ui.tree.TreeFolder("Trash");
        te1.add(te1_1, te1_2, te1_3, te1_4);

        var te1_2_1 = new qx.ui.tree.TreeFile("Windows (C:)");
        var te1_2_2 = new qx.ui.tree.TreeFile("Documents (D:)");
        te1_2.add(te1_2_1, te1_2_2);

        var te2 = new qx.ui.tree.TreeFolder("Inbox");

        var te2_1 = new qx.ui.tree.TreeFolder("Presets");
        var te2_2 = new qx.ui.tree.TreeFolder("Sent");
        var te2_3 = new qx.ui.tree.TreeFolder("Trash");

        for (var i = 0; i < 30; i++) {
          te2_3.add(new qx.ui.tree.TreeFile("Junk #" + i));
        }

        var te2_4 = new qx.ui.tree.TreeFolder("Data");
        var te2_5 = new qx.ui.tree.TreeFolder("Edit");

        te2.add(te2_1, te2_2, te2_3, te2_4, te2_5);

        root.add(te2);

        return tree;
      },

      __getVirtualTree: function __getVirtualTree() {
        var tree = new qx.ui.tree.VirtualTree(null, "name", "children").set({
          width: 200,
          height: 400
        });

        var url = "widgetbrowser/tree.json";
        var store = new qx.data.store.Json(url);

        store.bind("model", tree, "model");

        store.addListener("loaded", function () {
          tree.openNode(tree.getModel().getChildren().getItem(0));
        }, this);

        return tree;
      },

      __getTreeVirtual: function __getTreeVirtual() {
        var tree = new qx.ui.treevirtual.TreeVirtual("TreeVirtual");
        tree.setWidth(200);
        var dataModel = tree.getDataModel();

        var te2 = dataModel.addBranch(null, "Inbox", true, false);

        var te = dataModel.addBranch(te2, "Spam", false);

        for (var i = 1; i < 3000; i++) {
          dataModel.addLeaf(te, "Spam Message #" + i);
        }

        dataModel.addBranch(te2, "Sent", true);
        dataModel.addBranch(te2, "Trash", true);
        dataModel.addBranch(te2, "Data", true);
        dataModel.addBranch(te2, "Edit", true);

        dataModel.setData();

        return tree;
      }
    }
  });
  widgetbrowser.pages.Tree.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Tree.js.map