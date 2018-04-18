"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.core.selection.ScrollArea": {
        "require": true
      },
      "qx.ui.tree.core.AbstractTreeItem": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.ui.tree.selection.SelectionManager", {
    extend: qx.ui.core.selection.ScrollArea,

    members: {
      // overridden
      _getSelectableLocationY: function _getSelectableLocationY(item) {
        var computed = item.getBounds();
        if (computed) {
          var top = this._getWidget().getItemTop(item);
          return {
            top: top,
            bottom: top + computed.height
          };
        }
      },

      // overridden
      _isSelectable: function _isSelectable(item) {
        return this._isItemSelectable(item) && item instanceof qx.ui.tree.core.AbstractTreeItem;
      },

      // overridden
      _getSelectableFromPointerEvent: function _getSelectableFromPointerEvent(event) {
        return this._getWidget().getTreeItem(event.getTarget());
      },

      // overridden
      getSelectables: function getSelectables(all) {
        // if only the user selectables should be returned
        var oldUserInteraction = false;
        if (!all) {
          oldUserInteraction = this._userInteraction;
          this._userInteraction = true;
        }

        var widget = this._getWidget();
        var result = [];

        if (widget.getRoot() != null) {
          var items = widget.getRoot().getItems(true, !!all, widget.getHideRoot());

          for (var i = 0; i < items.length; i++) {
            if (this._isSelectable(items[i])) {
              result.push(items[i]);
            }
          }
        }

        // reset to the former user interaction state
        this._userInteraction = oldUserInteraction;

        return result;
      },

      // overridden
      _getSelectableRange: function _getSelectableRange(item1, item2) {
        // Fast path for identical items
        if (item1 === item2) {
          return [item1];
        }

        var selectables = this.getSelectables();

        var item1Index = selectables.indexOf(item1);
        var item2Index = selectables.indexOf(item2);

        if (item1Index < 0 || item2Index < 0) {
          return [];
        }

        if (item1Index < item2Index) {
          return selectables.slice(item1Index, item2Index + 1);
        } else {
          return selectables.slice(item2Index, item1Index + 1);
        }
      },

      // overridden
      _getFirstSelectable: function _getFirstSelectable() {
        return this.getSelectables()[0] || null;
      },

      // overridden
      _getLastSelectable: function _getLastSelectable() {
        var selectables = this.getSelectables();
        if (selectables.length > 0) {
          return selectables[selectables.length - 1];
        } else {
          return null;
        }
      },

      // overridden
      _getRelatedSelectable: function _getRelatedSelectable(item, relation) {
        var widget = this._getWidget();
        var related = null;

        switch (relation) {
          case "above":
            related = widget.getPreviousNodeOf(item, false);
            break;

          case "under":
            related = widget.getNextNodeOf(item, false);
            break;

          case "left":
          case "right":
            break;
        }

        if (!related) {
          return null;
        }

        if (this._isSelectable(related)) {
          return related;
        } else {
          return this._getRelatedSelectable(related, relation);
        }
      }
    }
  });
  qx.ui.tree.selection.SelectionManager.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=SelectionManager.js.map