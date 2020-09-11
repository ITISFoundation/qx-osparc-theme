!function(){var e={dependsOn:{"qx.Class":{usage:"dynamic",require:!0},"widgetbrowser.pages.AbstractPage":{construct:!0,require:!0},"qx.ui.container.Composite":{construct:!0},"qx.ui.layout.Grid":{construct:!0},"qx.ui.basic.Label":{},"qx.ui.tooltip.ToolTip":{},"qx.ui.tree.Tree":{},"qx.ui.tree.TreeFolder":{},"qx.ui.tree.TreeFile":{},"qx.ui.tree.VirtualTree":{},"qx.data.store.Json":{},"qx.ui.treevirtual.TreeVirtual":{}}};qx.Bootstrap.executePendingDefers(e);qx.Class.define("widgetbrowser.pages.Tree",{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.constructor.call(this);this.__grid=new qx.ui.container.Composite(new qx.ui.layout.Grid(10));this.add(this.__grid);this.initWidgets()},members:{__grid:null,initWidgets:function(){var e,r=this._widgets;e=new qx.ui.basic.Label("Tree");this.__grid.add(e,{row:0,column:0});var t=this.__getTree();this.__grid.add(t,{row:1,column:0});r.push(t);(e=new qx.ui.basic.Label("VirtualTree")).setToolTip(new qx.ui.tooltip.ToolTip("Virtual implementation of Tree. Shares appearance."));this.__grid.add(e,{row:0,column:1});var i=this.__getVirtualTree();this.__grid.add(i,{row:1,column:1});r.push(i);(e=new qx.ui.basic.Label("TreeVirtual (Legacy)")).setToolTip(new qx.ui.tooltip.ToolTip("Inherits from qx.ui.table.Table. Suited for multi-column trees."));this.__grid.add(e,{row:0,column:2});var a=this.__getTreeVirtual();this.__grid.add(a,{row:1,column:2});r.push(a)},__getTree:function(){var e=(new qx.ui.tree.Tree).set({width:200,height:400}),r=new qx.ui.tree.TreeFolder("root");r.setOpen(!0);e.setRoot(r);var t=new qx.ui.tree.TreeFolder("Desktop");t.setOpen(!0);r.add(t);var i=new qx.ui.tree.TreeFolder("Files"),a=new qx.ui.tree.TreeFolder("Workspace"),o=new qx.ui.tree.TreeFolder("Network"),n=new qx.ui.tree.TreeFolder("Trash");t.add(i,a,o,n);var d=new qx.ui.tree.TreeFile("Windows (C:)"),s=new qx.ui.tree.TreeFile("Documents (D:)");a.add(d,s);for(var u=new qx.ui.tree.TreeFolder("Inbox"),l=new qx.ui.tree.TreeFolder("Presets"),c=new qx.ui.tree.TreeFolder("Sent"),T=new qx.ui.tree.TreeFolder("Trash"),w=0;w<30;w++)T.add(new qx.ui.tree.TreeFile("Junk #"+w));var x=new qx.ui.tree.TreeFolder("Data"),g=new qx.ui.tree.TreeFolder("Edit");u.add(l,c,T,x,g);r.add(u);return e},__getVirtualTree:function(){var e=new qx.ui.tree.VirtualTree(null,"name","children").set({width:200,height:400}),r=new qx.data.store.Json("widgetbrowser/tree.json");r.bind("model",e,"model");r.addListener("loaded",function(){e.openNode(e.getModel().getChildren().getItem(0))},this);return e},__getTreeVirtual:function(){var e=new qx.ui.treevirtual.TreeVirtual("TreeVirtual");e.setWidth(200);for(var r=e.getDataModel(),t=r.addBranch(null,"Inbox",!0,!1),i=r.addBranch(t,"Spam",!1),a=1;a<3e3;a++)r.addLeaf(i,"Spam Message #"+a);r.addBranch(t,"Sent",!0);r.addBranch(t,"Trash",!0);r.addBranch(t,"Data",!0);r.addBranch(t,"Edit",!0);r.setData();return e}}});widgetbrowser.pages.Tree.$$dbClassInfo=e}();qx.$$packageData[1]={locales:{},resources:{},translations:{}};
//# sourceMappingURL=package-1.js.map