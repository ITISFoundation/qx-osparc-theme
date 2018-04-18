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
      "qx.type.Array": {},
      "qx.ui.table.model.Simple": {},
      "qx.ui.table.Table": {},
      "qx.ui.table.selection.Model": {},
      "qx.ui.table.cellrenderer.Boolean": {},
      "qx.ui.table.headerrenderer.Icon": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("widgetbrowser.pages.Table", {
    extend: widgetbrowser.pages.AbstractPage,

    construct: function construct() {
      widgetbrowser.pages.AbstractPage.constructor.call(this);

      this.initWidgets();
    },

    members: {

      __nextId: 0,

      initWidgets: function initWidgets() {
        var widgets = this._widgets = new qx.type.Array();

        var table = this.__createTable();
        table.setFocusedCell(2, 5);
        widgets.push(table);
        this.add(table);
      },

      __createTable: function __createTable() {
        var rowData = this.__createRandomRows(500);

        var tableModel = new qx.ui.table.model.Simple();
        tableModel.setColumns(["ID", "A number", "A date", "Boolean"]);
        tableModel.setData(rowData);
        tableModel.setColumnEditable(1, true);
        tableModel.setColumnEditable(2, true);
        tableModel.setColumnSortable(3, false);

        var table = new qx.ui.table.Table(tableModel);

        table.set({
          width: 600,
          height: 400,
          decorator: null
        });

        table.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);

        var tcm = table.getTableColumnModel();

        tcm.setDataCellRenderer(3, new qx.ui.table.cellrenderer.Boolean());
        tcm.setHeaderCellRenderer(2, new qx.ui.table.headerrenderer.Icon("icon/16/apps/office-calendar.png", "A date"));

        return table;
      },

      __createRandomRows: function __createRandomRows(rowCount) {
        var rowData = [];
        var now = new Date().getTime();
        var dateRange = 34560000000; // 400 days
        for (var row = 0; row < rowCount; row++) {
          var date = new Date(now + Math.random() * dateRange - dateRange / 2);
          rowData.push([this.__nextId++, Math.random() * 10000, date, Math.random() > 0.5]);
        }
        return rowData;
      }
    }
  });
  widgetbrowser.pages.Table.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Table.js.map