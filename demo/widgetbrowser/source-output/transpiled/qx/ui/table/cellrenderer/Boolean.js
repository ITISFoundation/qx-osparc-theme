"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.table.cellrenderer.AbstractImage": {
        "construct": true,
        "require": true
      },
      "qx.util.AliasManager": {
        "construct": true
      },
      "qx.theme.manager.Meta": {
        "construct": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.ui.table.cellrenderer.Boolean", {
    extend: qx.ui.table.cellrenderer.AbstractImage,

    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

    construct: function construct() {
      qx.ui.table.cellrenderer.AbstractImage.constructor.call(this);

      this.__aliasManager = qx.util.AliasManager.getInstance();

      this.initIconTrue();
      this.initIconFalse();

      // dynamic theme switch
      {
        qx.theme.manager.Meta.getInstance().addListener("changeTheme", this._onChangeTheme, this);
      }
    },

    /*
     *****************************************************************************
       PROPERTIES
     *****************************************************************************
     */

    properties: {
      /**
       * The icon used to indicate the true state
       */
      iconTrue: {
        check: "String",
        init: "decoration/table/boolean-true.png",
        apply: "_applyIconTrue"
      },

      /**
      * The icon used to indicate the false state
      */
      iconFalse: {
        check: "String",
        init: "decoration/table/boolean-false.png",
        apply: "_applyIconFalse"
      }
    },

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __iconUrlTrue: null,
      __iconUrlFalse: false,
      __aliasManager: null,

      /**
       * Handler for theme changes.
       * @signature function()
       */
      _onChangeTheme: function _onChangeTheme() {
        this._applyIconTrue(this.getIconTrue());
        this._applyIconFalse(this.getIconFalse());
      },

      // property apply
      _applyIconTrue: function _applyIconTrue(value) {
        this.__iconUrlTrue = this.__aliasManager.resolve(value);
      },

      // property apply
      _applyIconFalse: function _applyIconFalse(value) {
        this.__iconUrlFalse = this.__aliasManager.resolve(value);
      },

      // overridden
      _insetY: 5,

      // overridden
      _getCellStyle: function _getCellStyle(cellInfo) {
        return qx.ui.table.cellrenderer.Boolean.prototype._getCellStyle.base.call(this, cellInfo) + ";padding-top:4px;";
      },

      // overridden
      _identifyImage: function _identifyImage(cellInfo) {
        var imageHints = {
          imageWidth: 11,
          imageHeight: 11
        };

        switch (cellInfo.value) {
          case true:
            imageHints.url = this.__iconUrlTrue;
            break;

          case false:
            imageHints.url = this.__iconUrlFalse;
            break;

          default:
            imageHints.url = null;
            break;
        }

        return imageHints;
      }
    },

    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */

    destruct: function destruct() {
      this.__aliasManager = null;
      // remove dynamic theme listener
      {
        qx.theme.manager.Meta.getInstance().removeListener("changeTheme", this._onChangeTheme, this);
      }
    }
  });
  qx.ui.table.cellrenderer.Boolean.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Boolean.js.map