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
      "qx.ui.basic.Label": {},
      "qx.ui.indicator.ProgressBar": {},
      "qx.ui.container.SlideBar": {},
      "qx.ui.layout.HBox": {},
      "qx.ui.basic.Image": {},
      "qx.ui.popup.Popup": {},
      "qx.ui.layout.Canvas": {},
      "qx.ui.basic.Atom": {},
      "qx.ui.container.Resizer": {},
      "qx.ui.layout.Grow": {},
      "qx.ui.core.Widget": {},
      "qx.ui.form.List": {},
      "qx.ui.form.ListItem": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("widgetbrowser.pages.Misc", {
    extend: widgetbrowser.pages.AbstractPage,

    construct: function construct() {
      widgetbrowser.pages.AbstractPage.constructor.call(this);

      this.__vbox = new qx.ui.container.Composite(new qx.ui.layout.VBox(10));
      this.add(this.__vbox);

      this.initWidgets();
    },

    members: {
      __vbox: null,

      initWidgets: function initWidgets() {
        var widgets = this._widgets;
        var subcontainer;

        // ProgressBar
        var label = new qx.ui.basic.Label("ProgressBar");
        var pb = new qx.ui.indicator.ProgressBar(0, 100).set({ value: 50 });
        widgets.push(pb);
        this.__vbox.add(label);
        this.__vbox.add(pb);

        // SlideBar
        label = new qx.ui.basic.Label("SlideBar");
        var slideBar = new qx.ui.container.SlideBar();
        slideBar.setWidth(300);
        slideBar.setLayout(new qx.ui.layout.HBox(3));
        var icons = ["audio-card.png", "audio-input-microphone.png", "battery.png", "camera-photo.png", "camera-web.png", "computer.png", "display.png", "drive-harddisk.png", "drive-optical.png", "input-keyboard.png", "network-wired.png", "network-wireless.png"];
        icons.forEach(function (icon) {
          slideBar.add(new qx.ui.basic.Image("icon/48/devices/" + icon).set({
            decorator: "main",
            padding: 4
          }));
        });
        widgets.push(slideBar);
        this.__vbox.add(label);
        this.__vbox.add(slideBar);

        // Pop-Up
        label = new qx.ui.basic.Label("Tooltip");
        var popup = new qx.ui.popup.Popup(new qx.ui.layout.Canvas()).set({
          offset: 3,
          offsetBottom: 20,
          appearance: "tooltip"
        });
        popup.set({
          allowStretchX: false,
          autoHide: false
        });
        popup.add(new qx.ui.basic.Atom("Pop-Up", "icon/32/apps/media-photo-album.png"));
        widgets.push(popup);
        this.__vbox.add(label);
        this.__vbox.add(popup);
        popup.show();

        // Resizer
        label = new qx.ui.basic.Label("Resizer");
        subcontainer = new qx.ui.container.Composite(new qx.ui.layout.Canvas());
        var resizer = new qx.ui.container.Resizer().set({
          resizable: false,
          resizableRight: true
        });
        resizer.setLayout(new qx.ui.layout.Grow());
        resizer.add(new qx.ui.core.Widget().set({
          width: 50,
          maxWidth: 200,
          height: 50,
          maxHeight: 200
        }));
        subcontainer.add(resizer);
        widgets.push(resizer);
        this.__vbox.add(label);
        this.__vbox.add(subcontainer);

        // DragDrop
        label = new qx.ui.basic.Label("DragDrop");
        subcontainer = new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
        subcontainer.set({
          allowStretchY: false,
          allowStretchX: false
        });
        this.__vbox.add(label);
        this.__vbox.add(subcontainer);

        var source = new qx.ui.form.List();
        source.setDraggable(true);
        source.setSelectionMode("multi");
        for (var i = 0; i < 10; i++) {
          source.add(new qx.ui.form.ListItem("Item " + i, "icon/16/places/folder.png"));
        }

        source.addListener("dragstart", function (e) {
          e.addType("items");
          e.addAction("copy");
          e.addAction("move");
        });

        source.addListener("droprequest", function (e) {
          var action = e.getCurrentAction();
          var type = e.getCurrentType();
          var result;

          var selection = this.getSelection();
          var dragTarget = e.getDragTarget();
          if (selection.length === 0) {
            selection.push(dragTarget);
          } else if (selection.indexOf(dragTarget) == -1) {
            selection = [dragTarget];
          }

          switch (type) {
            case "items":
              result = selection;

              if (action == "copy") {
                var copy = [];
                for (var i = 0, l = result.length; i < l; i++) {
                  copy[i] = result[i].clone();
                }
                result = copy;
              }
              break;
          }

          if (action == "move") {
            for (var i = 0, l = selection.length; i < l; i++) {
              this.remove(selection[i]);
            }
          }

          e.addData(type, result);
        });

        subcontainer.add(source);
        widgets.push(source);

        var target = new qx.ui.form.List();
        target.setDroppable(true);
        target.setSelectionMode("multi");

        target.addListener("drop", function (e) {
          var items = e.getData("items");
          for (var i = 0, l = items.length; i < l; i++) {
            this.add(items[i]);
          }
        });

        subcontainer.add(target);
        widgets.push(target);
      }
    }
  });
  widgetbrowser.pages.Misc.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Misc.js.map