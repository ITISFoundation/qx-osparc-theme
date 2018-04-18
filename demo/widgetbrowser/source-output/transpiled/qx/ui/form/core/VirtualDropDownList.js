"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.popup.Popup": {
        "construct": true,
        "require": true
      },
      "qx.core.Assert": {
        "construct": true
      },
      "qx.ui.form.core.AbstractVirtualBox": {
        "construct": true
      },
      "qx.ui.layout.VBox": {
        "construct": true
      },
      "qx.data.Array": {
        "construct": true
      },
      "qx.ui.list.List": {},
      "qx.bom.Viewport": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.ui.form.core.VirtualDropDownList", {
    extend: qx.ui.popup.Popup,

    /**
     * Creates the drop-down list.
     *
     * @param target {qx.ui.form.core.AbstractVirtualBox} The composite widget.
     */
    construct: function construct(target) {
      qx.core.Assert.assertNotNull(target, "Invalid parameter 'target'!");
      qx.core.Assert.assertNotUndefined(target, "Invalid parameter 'target'!");
      qx.core.Assert.assertInterface(target, qx.ui.form.core.AbstractVirtualBox, "Invalid parameter 'target'!");

      qx.ui.popup.Popup.constructor.call(this, new qx.ui.layout.VBox());

      this._target = target;

      this._createChildControl("list");
      this.addListener("changeVisibility", this.__onChangeVisibility, this);

      this.__defaultSelection = new qx.data.Array();
      this.initSelection(this.__defaultSelection);
    },

    properties: {
      // overridden
      autoHide: {
        refine: true,
        init: false
      },

      // overridden
      keepActive: {
        refine: true,
        init: true
      },

      /** Current selected items. */
      selection: {
        check: "qx.data.Array",
        event: "changeSelection",
        apply: "_applySelection",
        nullable: false,
        deferredInit: true
      }
    },

    events: {
      /**
       * This event is fired as soon as the content of the selection property changes, but
       * this is not equal to the change of the selection of the widget. If the selection
       * of the widget changes, the content of the array stored in the selection property
       * changes. This means you have to listen to the change event of the selection array
       * to get an event as soon as the user changes the selected item.
       * <pre class="javascript">obj.getSelection().addListener("change", listener, this);</pre>
       */
      "changeSelection": "qx.event.type.Data"
    },

    members: {
      /** @type {qx.ui.form.core.AbstractVirtualBox} The composite widget. */
      _target: null,

      /** @type {var} The pre-selected model item. */
      _preselected: null,

      /**
       * @type {Boolean} Indicator to ignore selection changes from the
       * {@link #selection} array.
       */
      __ignoreSelection: false,

      /** @type {Boolean} Indicator to ignore selection changes from the list. */
      __ignoreListSelection: false,

      __defaultSelection: null,

      /*
      ---------------------------------------------------------------------------
        PUBLIC API
      ---------------------------------------------------------------------------
      */

      /**
       * Shows the drop-down.
       */
      open: function open() {
        this.placeToWidget(this._target, true);
        this.show();
      },

      /**
       * Hides the drop-down.
       */
      close: function close() {
        this.hide();
      },

      /**
       * Pre-selects the drop-down item corresponding to the given model object.
       *
       * @param modelItem {Object} Item to be pre-selected.
       */
      setPreselected: function setPreselected(modelItem) {
        this._preselected = modelItem;
        this.__ignoreListSelection = true;
        var listSelection = this.getChildControl("list").getSelection();
        var helper = new qx.data.Array([modelItem]);
        this.__synchronizeSelection(helper, listSelection);
        helper.dispose();
        this.__ignoreListSelection = false;
      },

      /*
      ---------------------------------------------------------------------------
        INTERNAL API
      ---------------------------------------------------------------------------
      */

      // overridden
      _createChildControlImpl: function _createChildControlImpl(id, hash) {
        var control;

        switch (id) {
          case "list":
            control = new qx.ui.list.List().set({
              focusable: false,
              keepFocus: true,
              keepActive: true,
              height: null,
              width: null,
              maxHeight: this._target.getMaxListHeight(),
              selectionMode: "one",
              quickSelection: true
            });

            control.getSelection().addListener("change", this._onListChangeSelection, this);
            control.addListener("tap", this._handlePointer, this);
            control.addListener("changeModel", this._onChangeModel, this);
            control.addListener("changeModelLength", this.__adjustHeight, this);
            control.addListener("changeDelegate", this._onChangeDelegate, this);

            this.add(control, { flex: 1 });
            break;
        }

        return control || qx.ui.form.core.VirtualDropDownList.prototype._createChildControlImpl.base.call(this, id, hash);
      },

      /*
      ---------------------------------------------------------------------------
        EVENT LISTENERS
      ---------------------------------------------------------------------------
      */

      /**
       * Handles the complete keyboard events dispatched on the widget.
       *
       * @param event {qx.event.type.KeySequence} The keyboard event.
       */
      _handleKeyboard: function _handleKeyboard(event) {
        if (this.isVisible() && event.getKeyIdentifier() === "Enter") {
          this.__selectPreselected();
          return;
        }

        var clone = event.clone();
        clone.setTarget(this.getChildControl("list"));
        clone.setBubbles(false);

        this.getChildControl("list").dispatchEvent(clone);
      },

      /**
       * Handles all mouse events dispatched on the widget.
       *
       * @param event {qx.event.type.Mouse} The mouse event.
       */
      _handlePointer: function _handlePointer(event) {
        this.__selectPreselected();
      },

      /**
       * Handler for the local selection change. The method is responsible for
       * the synchronization between the own selection and the selection
       * form the drop-down.
       *
       * @param event {qx.event.type.Data} The data event.
       */
      __onChangeSelection: function __onChangeSelection(event) {
        if (this.__ignoreSelection) {
          return;
        }

        var selection = this.getSelection();
        var listSelection = this.getChildControl("list").getSelection();

        this.__ignoreListSelection = true;
        this.__synchronizeSelection(selection, listSelection);
        this.__ignoreListSelection = false;

        this.__ignoreSelection = true;
        this.__synchronizeSelection(listSelection, selection);
        this.__ignoreSelection = false;
      },

      /**
       * Handler for the selection change on the list. The method is responsible
       * for the synchronization between the list selection and the own selection.
       *
       * @param event {qx.event.type.Data} The data event.
       */
      _onListChangeSelection: function _onListChangeSelection(event) {
        if (this.__ignoreListSelection) {
          return;
        }

        var listSelection = this.getChildControl("list").getSelection();

        if (this.isVisible()) {
          this.setPreselected(listSelection.getItem(0));
        } else {
          this.__ignoreSelection = true;
          this.__synchronizeSelection(listSelection, this.getSelection());
          this.__ignoreSelection = false;
        }
      },

      /**
       * Handler for the own visibility changes. The method is responsible that
       * the list selects the current selected item.
       *
       * @param event {qx.event.type.Data} The event.
       */
      __onChangeVisibility: function __onChangeVisibility(event) {
        if (this.isVisible()) {
          if (this._preselected == null) {
            var selection = this.getSelection();
            var listSelection = this.getChildControl("list").getSelection();
            this.__synchronizeSelection(selection, listSelection);
          }
          this.__adjustSize();
        } else {
          this.setPreselected(null);
        }
      },

      /**
       * Handler for the model change event.
       *
       * @param event {qx.event.type.Data} The change event.
       */
      _onChangeModel: function _onChangeModel(event) {},

      /**
       * Handler for the delegate change event.
       *
       * @param event {qx.event.type.Data} The change event.
       */
      _onChangeDelegate: function _onChangeDelegate(event) {
        this.getSelection().removeAll();
      },

      /*
      ---------------------------------------------------------------------------
        APPLY ROUTINES
      ---------------------------------------------------------------------------
      */

      // property apply
      _applySelection: function _applySelection(value, old) {
        value.addListener("change", this.__onChangeSelection, this);

        if (old != null) {
          old.removeListener("change", this.__onChangeSelection, this);
        }

        this.__synchronizeSelection(value, this.getChildControl("list").getSelection(value));
      },

      /*
      ---------------------------------------------------------------------------
        HELPER METHODS
      ---------------------------------------------------------------------------
      */

      /**
       * Helper method to select the current preselected item, also closes the
       * drop-down.
       */
      __selectPreselected: function __selectPreselected() {
        if (this._preselected != null) {
          var selection = this.getSelection();
          selection.splice(0, 1, this._preselected);
          this._preselected = null;
          this.close();
        }
      },

      /**
       * Helper method to synchronize both selection. The target selection has
       * the same selection like the source selection after the synchronization.
       *
       * @param source {qx.data.Array} The source selection.
       * @param target {qx.data.Array} The target selection.
       */
      __synchronizeSelection: function __synchronizeSelection(source, target) {
        if (source.equals(target)) {
          return;
        }

        if (source.getLength() <= 0) {
          target.removeAll();
        } else {
          // build arguments array for splice(0, target.length, source[0], source[1], ...)
          var spliceArg = [0, target.length];
          spliceArg = spliceArg.concat(source.toArray());

          // use apply since it allow to use an array as the argument array
          // (calling splice directly with an array insert it in the array on which splice is called)
          // don't forget to dispose the array created by splice
          target.splice.apply(target, spliceArg).dispose();
        }
      },

      /**
       * Adjust the drop-down to the available width and height, by calling
       * {@link #__adjustWidth} and {@link #__adjustHeight}.
       */
      __adjustSize: function __adjustSize() {
        if (!this._target.getBounds()) {
          this.addListenerOnce("appear", this.__adjustSize, this);
          return;
        }

        this.__adjustWidth();
        this.__adjustHeight();
      },

      /**
       * Adjust the drop-down to the available width. The width is limited by
       * the current with from the _target.
       */
      __adjustWidth: function __adjustWidth() {
        var width = this._target.getBounds().width;
        this.setWidth(width);
      },

      /**
       * Adjust the drop-down to the available height. Ensure that the list
       * is never bigger that the max list height and the available space
       * in the viewport.
       */
      __adjustHeight: function __adjustHeight() {
        var availableHeight = this.__getAvailableHeight();
        if (availableHeight === null) {
          return;
        }

        var maxHeight = this._target.getMaxListHeight();
        var list = this.getChildControl("list");
        var itemsHeight = list.getPane().getRowConfig().getTotalSize();

        if (maxHeight == null || itemsHeight < maxHeight) {
          maxHeight = itemsHeight;
        }

        if (maxHeight > availableHeight) {
          maxHeight = availableHeight;
        }

        var minHeight = list.getMinHeight();
        if (null !== minHeight && minHeight > maxHeight) {
          maxHeight = minHeight;
        }

        list.setMaxHeight(maxHeight);
      },

      /**
       * Calculates the available height in the viewport.
       *
       * @return {Integer|null} Available height in the viewport.
       */
      __getAvailableHeight: function __getAvailableHeight() {
        var distance = this.getLayoutLocation(this._target);
        if (!distance) {
          return null;
        }

        var viewPortHeight = qx.bom.Viewport.getHeight();

        // distance to the bottom and top borders of the viewport
        var toTop = distance.top;
        var toBottom = viewPortHeight - distance.bottom;

        return toTop > toBottom ? toTop : toBottom;
      }
    },

    destruct: function destruct() {
      if (this.__defaultSelection) {
        this.__defaultSelection.dispose();
      }
    }
  });
  qx.ui.form.core.VirtualDropDownList.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=VirtualDropDownList.js.map