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
      "qx.util.ResourceManager": {
        "construct": true
      },
      "qx.ui.basic.Label": {},
      "qx.ui.form.List": {},
      "qx.io.request.Xhr": {},
      "qx.ui.form.ListItem": {},
      "qx.ui.list.List": {},
      "qx.data.store.Json": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("widgetbrowser.pages.List", {
    extend: widgetbrowser.pages.AbstractPage,

    construct: function construct() {
      widgetbrowser.pages.AbstractPage.constructor.call(this);

      this.__grid = new qx.ui.container.Composite(new qx.ui.layout.Grid(10));
      this.__listUrl = qx.util.ResourceManager.getInstance().toUri("widgetbrowser/people.json");
      this.add(this.__grid);

      this.initWidgets();
    },

    members: {

      __grid: null,
      __listUrl: null,

      initWidgets: function initWidgets() {
        var widgets = this._widgets;

        var label = new qx.ui.basic.Label("List");
        this.__grid.add(label, { row: 0,
          column: 0 });
        var list = this.__getList();
        this.__grid.add(list, { row: 1,
          column: 0 });
        widgets.push(list);

        label = new qx.ui.basic.Label("List (virtual)");
        this.__grid.add(label, { row: 0,
          column: 1 });
        var virtualList = this.__getVirtualList();
        this.__grid.add(virtualList, { row: 1,
          column: 1 });
        widgets.push(virtualList);

        label = new qx.ui.basic.Label("List (virtual, grouped)");
        this.__grid.add(label, { row: 0,
          column: 2 });
        var groupedVirtualList = this.__getGroupedVirtualList();
        this.__grid.add(groupedVirtualList, { row: 1,
          column: 2 });
        widgets.push(groupedVirtualList);
      },

      __getList: function __getList() {
        var list = new qx.ui.form.List();
        list.setWidth(150);

        var req = new qx.io.request.Xhr(this.__listUrl);
        req.setParser("json");
        req.addListener("success", function () {
          var people = req.getResponse().people;
          people.forEach(function (person) {
            var item = new qx.ui.form.ListItem(String(person.lastname) + ", " + person.firstname);
            item.setHeight(25);
            list.add(item);
          });
        });
        req.send();

        return list;
      },

      __getVirtualList: function __getVirtualList() {
        var list = new qx.ui.list.List().set({
          height: 280,
          width: 150,
          labelPath: "firstname",
          labelOptions: {
            converter: function converter(data, model) {
              return model ? model.getLastname() + ", " + data : "no model...";
            }
          }
        });

        this.__attachStore(list);

        return list;
      },

      __getGroupedVirtualList: function __getGroupedVirtualList() {
        var list = this.__getVirtualList();

        // Creates the delegate for sorting and grouping
        var delegate = {

          // Sorts the model data by last name
          sorter: function sorter(a, b) {
            a = a.getLastname();
            b = b.getLastname();

            return a > b ? 1 : a < b ? -1 : 0;
          },

          // Assign the group name for each item (fist char form last name)
          group: function group(model) {
            return model.getLastname().charAt(0).toUpperCase();
          }
        };
        list.setDelegate(delegate);

        return list;
      },

      __attachStore: function __attachStore(widget) {
        var store = new qx.data.store.Json(this.__listUrl);
        store.bind("model.people", widget, "model");
      }
    }
  });
  widgetbrowser.pages.List.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=List.js.map