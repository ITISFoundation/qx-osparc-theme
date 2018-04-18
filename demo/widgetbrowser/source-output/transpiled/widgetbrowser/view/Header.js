"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "construct": true,
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.container.Composite": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.HBox": {
        "construct": true
      },
      "qx.ui.basic.Label": {
        "construct": true
      },
      "qxc.ui.versionlabel.VersionLabel": {
        "construct": true
      },
      "qx.ui.form.SelectBox": {
        "construct": true
      },
      "qx.core.Init": {
        "construct": true
      },
      "qx.ui.form.ListItem": {
        "construct": true
      },
      "qx.Theme": {
        "construct": true
      },
      "qx.theme.manager.Meta": {
        "construct": true
      },
      "qx.io.PartLoader": {
        "construct": true
      },
      "qx.ui.core.Spacer": {
        "construct": true
      }
    },
    "environment": {
      "provided": [],
      "required": {
        "qx.theme": {
          "construct": true
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("widgetbrowser.view.Header", {
    extend: qx.ui.container.Composite,

    /*
    *****************************************************************************
     CONSTRUCTOR
    *****************************************************************************
    */

    /**
    * @ignore(qxc)
    */
    construct: function construct() {
      qx.ui.container.Composite.constructor.call(this);

      this.setLayout(new qx.ui.layout.HBox());
      this.setAppearance("app-header");
      this.getLayout().setAlignY("middle");

      var title = new qx.ui.basic.Label("Widget Browser");
      var version = new qxc.ui.versionlabel.VersionLabel();
      version.setFont("default");
      version.setAppearance("app-header-label");

      // Build select-box
      var select = new qx.ui.form.SelectBox("Theme");
      var themes = qx.core.Init.getApplication().getThemes();
      var currentThemeItem;
      for (var name in themes) {
        var item = new qx.ui.form.ListItem(name + " Theme");
        item.setUserData("value", themes[name]);
        select.add(item);

        var value = themes[name];
        if (value == qx.core.Environment.get("qx.theme")) {
          currentThemeItem = item;
        }
      }

      select.setFont("default");

      // Find current theme from URL search param
      var currThemeItem = select.getSelectables().filter(function (item) {
        if (window.location.search) {
          return window.location.search.match(item.getUserData("value"));
        }
      })[0];
      if (currThemeItem) {
        currentThemeItem = currThemeItem;
      }

      select.setTextColor("black");

      select.addListener("changeSelection", function (evt) {
        var selected = evt.getData()[0].getUserData("value");

        var theme = qx.Theme.getByName(selected);
        if (theme) {
          qx.theme.manager.Meta.getInstance().setTheme(theme);
        } else {
          var part = selected.substr(selected.lastIndexOf(".") + 1, selected.length);
          part = part.toLowerCase();

          // change the text of the selected list item to 'Loading...'
          select.setEnabled(false);
          var listItem = evt.getData()[0];
          var oldText = listItem.getLabel();
          listItem.setLabel("Loading ...");
          qx.io.PartLoader.require([part], function () {
            qx.theme.manager.Meta.getInstance().setTheme(qx.Theme.getByName(selected));
            select.setEnabled(true);
            listItem.setLabel(oldText);
          }, this);
        }
      });

      // Set current theme
      select.setSelection([currentThemeItem]);

      // Finally assemble header
      this.add(title);
      this.add(new qx.ui.core.Spacer(), { flex: 1 });
      this.add(select);
      this.add(new qx.ui.core.Spacer(), { width: "2%" });
      this.add(version);
    }
  });
  widgetbrowser.view.Header.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Header.js.map