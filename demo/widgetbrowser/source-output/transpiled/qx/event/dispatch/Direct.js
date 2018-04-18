"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "require": true
      },
      "qx.event.IEventDispatcher": {
        "require": true
      },
      "qx.event.Registration": {
        "defer": "runtime",
        "require": true
      },
      "qx.event.type.Event": {},
      "qx.Promise": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.event.dispatch.Direct", {
    extend: qx.core.Object,
    implement: qx.event.IEventDispatcher,

    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

    /**
     * Create a new instance
     *
     * @param manager {qx.event.Manager} Event manager for the window to use
     */
    construct: function construct(manager) {
      this._manager = manager;
    },

    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /** @type {Integer} Priority of this dispatcher */
      PRIORITY: qx.event.Registration.PRIORITY_LAST
    },

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      /*
      ---------------------------------------------------------------------------
        EVENT DISPATCHER INTERFACE
      ---------------------------------------------------------------------------
      */

      // interface implementation
      canDispatchEvent: function canDispatchEvent(target, event, type) {
        return !event.getBubbles();
      },

      // interface implementation
      dispatchEvent: function dispatchEvent(target, event, type) {
        {
          if (target instanceof qx.core.Object) {
            var expectedEventClassName = qx.Class.getEventType(target.constructor, type);
            var expectedEventClass = qx.Class.getByName(expectedEventClassName);
            if (!expectedEventClass) {
              this.error("The event type '" + type + "' declared in the class '" + target.constructor + " is not an available class': " + expectedEventClassName);
            } else if (!(event instanceof expectedEventClass)) {
              this.error("Expected event type to be instanceof '" + expectedEventClassName + "' but found '" + event.classname + "'");
            }
          }
        }

        event.setEventPhase(qx.event.type.Event.AT_TARGET);

        var listeners = this._manager.getListeners(target, type, false);
        if (listeners) {
          for (var i = 0, l = listeners.length; i < l; i++) {
            if (this._manager.isBlacklisted(listeners[i].unique)) {
              continue;
            }
            var context = listeners[i].context || target;

            {
              // warn if the context is disposed
              if (context && context.isDisposed && context.isDisposed() && !context.isDisposing()) {
                this.warn("The context object '" + context + "' for the event '" + type + "' of '" + target + "'is already disposed.");
              }
            }
            var promise = listeners[i].handler.call(context, event);
            {
              if (promise instanceof qx.Promise) {
                event.addPromise(promise);
              }
            }
          }
        }
      }
    },

    /*
    *****************************************************************************
       DEFER
    *****************************************************************************
    */

    defer: function defer(statics) {
      qx.event.Registration.addDispatcher(statics);
    }
  });
  qx.event.dispatch.Direct.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Direct.js.map