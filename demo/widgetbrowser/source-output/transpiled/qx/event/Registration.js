"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.event.Manager": {
        "require": true
      },
      "qx.dom.Node": {
        "require": true
      },
      "qx.lang.Function": {
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.log.Logger": {},
      "qx.core.ObjectRegistry": {},
      "qx.event.type.Event": {},
      "qx.event.Pool": {},
      "qx.core.Assert": {},
      "qx.Promise": {},
      "qx.event.IEventHandler": {},
      "qx.event.IEventDispatcher": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.event.Registration", {
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /**
       * Static list of all instantiated event managers. The key is the qooxdoo
       * hash value of the corresponding window
       */
      __managers: {},

      /**
       * Get an instance of the event manager, which can handle events for the
       * given target.
       *
       * @param target {Object} Any valid event target
       * @return {qx.event.Manager} The event manger for the target.
       */
      getManager: function getManager(target) {
        if (target == null) {
          {
            qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");
            qx.log.Logger.trace(this);
          }

          target = window;
        } else if (target.nodeType) {
          target = qx.dom.Node.getWindow(target);
        } else if (!qx.dom.Node.isWindow(target)) {
          target = window;
        }

        var hash = target.$$hash || qx.core.ObjectRegistry.toHashCode(target);
        var manager = this.__managers[hash];

        if (!manager) {
          manager = new qx.event.Manager(target, this);
          this.__managers[hash] = manager;
        }

        return manager;
      },

      /**
       * Removes a manager for a specific window from the list.
       *
       * Normally only used when the manager gets disposed through
       * an unload event of the attached window.
       *
       * @param mgr {qx.event.Manager} The manager to remove
       */
      removeManager: function removeManager(mgr) {
        var id = mgr.getWindowId();
        delete this.__managers[id];
      },

      /**
       * Add an event listener to a DOM target. The event listener is passed an
       * instance of {@link qx.event.type.Event} containing all relevant information
       * about the event as parameter.
       *
       * @param target {Object} Any valid event target
       * @param type {String} Name of the event e.g. "click", "keydown", ...
       * @param listener {Function} Event listener function
       * @param self {Object ? null} Reference to the 'this' variable inside
       *         the event listener. When not given, the corresponding dispatcher
       *         usually falls back to a default, which is the target
       *         by convention. Note this is not a strict requirement, i.e.
       *         custom dispatchers can follow a different strategy.
       * @param capture {Boolean} Whether to attach the event to the
       *         capturing phase or the bubbling phase of the event. The default is
       *         to attach the event handler to the bubbling phase.
       * @return {var} An opaque id, which can be used to remove the event listener
       *         using the {@link #removeListenerById} method.
       */
      addListener: function addListener(target, type, listener, self, capture) {
        return this.getManager(target).addListener(target, type, listener, self, capture);
      },

      /**
       * Remove an event listener from an event target.
       *
       * Note: All registered event listeners will automatically at page unload
       *   so it is not necessary to detach events in the destructor.
       *
       * @param target {Object} The event target
       * @param type {String} Name of the event
       * @param listener {Function} The pointer to the event listener
       * @param self {Object ? null} Reference to the 'this' variable inside
       *         the event listener.
       * @param capture {Boolean} Whether to remove the event listener of
       *    the bubbling or of the capturing phase.
       * @return {Boolean} Whether the event was removed. Return <code>false</code> if
       *    the event was already removed before.
       */
      removeListener: function removeListener(target, type, listener, self, capture) {
        return this.getManager(target).removeListener(target, type, listener, self, capture);
      },

      /**
       * Removes an event listener from an event target by an id returned by
       * {@link #addListener}
       *
       * @param target {Object} The event target
       * @param id {var} The id returned by {@link #addListener}
       * @return {Boolean} Whether the event was removed. Return <code>false</code> if
       *    the event was already removed before.
       */
      removeListenerById: function removeListenerById(target, id) {
        return this.getManager(target).removeListenerById(target, id);
      },

      /**
       * Remove all event listeners, which are attached to the given event target.
       *
       * @param target {Object} The event target to remove all event listeners from.
       * @return {Boolean} Whether the events were existant and were removed successfully.
       */
      removeAllListeners: function removeAllListeners(target) {
        return this.getManager(target).removeAllListeners(target);
      },

      /**
       * Internal helper for deleting the listeners map used during shutdown.
       *
       * @param target {Object} The event target to delete the internal map for
       *    all event listeners.
       *
       * @internal
       */
      deleteAllListeners: function deleteAllListeners(target) {
        var targetKey = target.$$hash;
        if (targetKey) {
          this.getManager(target).deleteAllListeners(targetKey);
        }
      },

      /**
       * Check whether there are one or more listeners for an event type
       * registered at the target.
       *
       * @param target {Object} Any valid event target
       * @param type {String} The event type
       * @param capture {Boolean ? false} Whether to check for listeners of
       *         the bubbling or of the capturing phase.
       * @return {Boolean} Whether the target has event listeners of the given type.
       */
      hasListener: function hasListener(target, type, capture) {
        return this.getManager(target).hasListener(target, type, capture);
      },

      /**
       * Returns a serialized array of all events attached on the given target.
       *
       * @param target {Object} Any valid event target
       * @return {Map[]} Array of maps where everyone contains the keys:
       *   <code>handler</code>, <code>self</code>, <code>type</code> and <code>capture</code>.
       */
      serializeListeners: function serializeListeners(target) {
        return this.getManager(target).serializeListeners(target);
      },

      /**
       * Get an event instance of the given class, which can be dispatched using
       * an event manager. The created events must be initialized using
       * {@link qx.event.type.Event#init}.
       *
       * @param type {String} The type of the event to create
       * @param clazz {Object?qx.event.type.Event} The event class to use
       * @param args {Array?null} Array which will be passed to
       *       the event's init method.
       * @return {qx.event.type.Event} An instance of the given class.
       */
      createEvent: function createEvent(type, clazz, args) {
        {
          if (arguments.length > 1 && clazz === undefined) {
            throw new Error("Create event of type " + type + " with undefined class. Please use null to explicit fallback to default event type!");
          }
        }

        // Fallback to default
        if (clazz == null) {
          clazz = qx.event.type.Event;
        }

        var obj = qx.event.Pool.getInstance().getObject(clazz);

        // Initialize with given arguments
        args ? obj.init.apply(obj, args) : obj.init();

        // Setup the type
        // Note: Native event may setup this later or using init() above
        // using the native information.
        if (type) {
          obj.setType(type);
        }

        return obj;
      },

      /**
       * Dispatch an event object on the given target.
       *
       * It is normally better to use {@link #fireEvent} because it uses
       * the event pooling and is quite handy otherwise as well. After dispatching
       * the event object will be pooled for later reuse or disposed.
       *
       * @param target {Object} Any valid event target
       * @param event {qx.event.type.Event} The event object to dispatch. The event
       *       object must be obtained using {@link #createEvent} and initialized
       *       using {@link qx.event.type.Event#init}.
       * @return {Boolean} whether the event default was prevented or not.
       *     Returns true, when the event was NOT prevented.
       */
      dispatchEvent: function dispatchEvent(target, event) {
        return this.getManager(target).dispatchEvent(target, event);
      },

      /**
       * Create an event object and dispatch it on the given target.
       *
       * @param target {Object} Any valid event target
       * @param type {String} Event type to fire
       * @param clazz {Class?qx.event.type.Event} The event class
       * @param args {Array?null} Arguments, which will be passed to
       *       the event's init method.
       * @return {Event} the event
       * @see #createEvent
       */
      __fireEvent: function __fireEvent(target, type, clazz, args) {
        {
          if (arguments.length > 2 && clazz === undefined && args !== undefined) {
            throw new Error("Create event of type " + type + " with undefined class. Please use null to explicit fallback to default event type!");
          }

          var msg = "Could not fire event '" + type + "' on target '" + (target ? target.classname : "undefined") + "': ";

          qx.core.Assert.assertNotUndefined(target, msg + "Invalid event target.");
          qx.core.Assert.assertNotNull(target, msg + "Invalid event target.");
        }

        var evt = this.createEvent(type, clazz || null, args);
        this.getManager(target).dispatchEvent(target, evt);
        return evt;
      },

      /**
       * Create an event object and dispatch it on the given target.
       *
       * @param target {Object} Any valid event target
       * @param type {String} Event type to fire
       * @param clazz {Class?qx.event.type.Event} The event class
       * @param args {Array?null} Arguments, which will be passed to
       *       the event's init method.
       * @return {Boolean} whether the event default was prevented or not.
       *     Returns true, when the event was NOT prevented.
       * @see #createEvent
       */
      fireEvent: function fireEvent(target, type, clazz, args) {
        var evt = this.__fireEvent.apply(this, arguments);
        return !evt.getDefaultPrevented();
      },

      /**
       * Create an event object and dispatch it on the given target.
       *
       * @param target {Object} Any valid event target
       * @param type {String} Event type to fire
       * @param clazz {Class?qx.event.type.Event} The event class
       * @param args {Array?null} Arguments, which will be passed to
       *       the event's init method.
       * @return {qx.Promise} a promise aggregated from the event handlers;
       * 	if the default was prevented, the promise is rejected
       * @see #createEvent
       */
      fireEventAsync: function fireEventAsync(target, type, clazz, args) {
        var evt = this.__fireEvent.apply(this, arguments);
        return evt.promise();
      },

      /**
       * Create an event object and dispatch it on the given target.
       * The event dispatched with this method does never bubble! Use only if you
       * are sure that bubbling is not required.
       *
       * @param target {Object} Any valid event target
       * @param type {String} Event type to fire
       * @param clazz {Class?qx.event.type.Event} The event class
       * @param args {Array?null} Arguments, which will be passed to
       *       the event's init method.
       * @return {Event} the event
       * @see #createEvent
       */
      __fireNonBubblingEvent: function __fireNonBubblingEvent(target, type, clazz, args) {
        {
          if (arguments.length > 2 && clazz === undefined && args !== undefined) {
            throw new Error("Create event of type " + type + " with undefined class. Please use null to explicit fallback to default event type!");
          }
        }

        var mgr = this.getManager(target);
        if (!mgr.hasListener(target, type, false)) {
          return null;
        }

        var evt = this.createEvent(type, clazz || null, args);
        mgr.dispatchEvent(target, evt);
        return evt;
      },

      /**
       * Create an event object and dispatch it on the given target.
       * The event dispatched with this method does never bubble! Use only if you
       * are sure that bubbling is not required.
       *
       * @param target {Object} Any valid event target
       * @param type {String} Event type to fire
       * @param clazz {Class?qx.event.type.Event} The event class
       * @param args {Array?null} Arguments, which will be passed to
       *       the event's init method.
       * @return {Boolean} whether the event default was prevented or not.
       *     Returns true, when the event was NOT prevented.
       * @see #createEvent
       */
      fireNonBubblingEvent: function fireNonBubblingEvent(target, type, clazz, args) {
        var evt = this.__fireNonBubblingEvent.apply(this, arguments);
        if (evt === null) {
          return true;
        }
        return !evt.getDefaultPrevented();
      },

      /**
       * Create an event object and dispatch it on the given target.
       * The event dispatched with this method does never bubble! Use only if you
       * are sure that bubbling is not required.
       *
       * @param target {Object} Any valid event target
       * @param type {String} Event type to fire
       * @param clazz {Class?qx.event.type.Event} The event class
       * @param args {Array?null} Arguments, which will be passed to
       *       the event's init method.
       * @return {qx.Promise} a promise aggregated from the event handlers;
       * 	if the default was prevented, the promise is rejected
       * @see #createEvent
       */
      fireNonBubblingEventAsync: function fireNonBubblingEventAsync(target, type, clazz, args) {
        var evt = this.__fireNonBubblingEvent.apply(this, arguments);
        if (evt === null) {
          return qx.Promise.resolve(true);
        }
        return evt.promise();
      },

      /*
      ---------------------------------------------------------------------------
        EVENT HANDLER/DISPATCHER PRIORITY
      ---------------------------------------------------------------------------
      */

      /** @type {Integer} Highest priority. Used by handlers and dispatchers. */
      PRIORITY_FIRST: -32000,

      /** @type {Integer} Default priority. Used by handlers and dispatchers. */
      PRIORITY_NORMAL: 0,

      /** @type {Integer} Lowest priority. Used by handlers and dispatchers. */
      PRIORITY_LAST: 32000,

      /*
      ---------------------------------------------------------------------------
        EVENT HANDLER REGISTRATION
      ---------------------------------------------------------------------------
      */

      /** @type {Array} Contains all known event handlers */
      __handlers: [],

      /**
       * Register an event handler.
       *
       * @param handler {qx.event.IEventHandler} Event handler to add
       * @throws {Error} if the handler does not have the IEventHandler interface.
       */
      addHandler: function addHandler(handler) {
        {
          qx.core.Assert.assertInterface(handler, qx.event.IEventHandler, "Invalid event handler.");
        }

        // Append to list
        this.__handlers.push(handler);

        // Re-sort list
        this.__handlers.sort(function (a, b) {
          return a.PRIORITY - b.PRIORITY;
        });
      },

      /**
       * Get a list of registered event handlers.
       *
       * @return {qx.event.IEventHandler[]} registered event handlers
       */
      getHandlers: function getHandlers() {
        return this.__handlers;
      },

      /*
      ---------------------------------------------------------------------------
        EVENT DISPATCHER REGISTRATION
      ---------------------------------------------------------------------------
      */

      /** @type {Array} Contains all known event dispatchers */
      __dispatchers: [],

      /**
       * Register an event dispatcher.
       *
       * @param dispatcher {qx.event.IEventDispatcher} Event dispatcher to add
       * @param priority {Integer} One of
       * {@link qx.event.Registration#PRIORITY_FIRST},
       * {@link qx.event.Registration#PRIORITY_NORMAL}
       *       or {@link qx.event.Registration#PRIORITY_LAST}.
       * @throws {Error} if the dispatcher does not have the IEventHandler interface.
       */
      addDispatcher: function addDispatcher(dispatcher, priority) {
        {
          qx.core.Assert.assertInterface(dispatcher, qx.event.IEventDispatcher, "Invalid event dispatcher!");
        }

        // Append to list
        this.__dispatchers.push(dispatcher);

        // Re-sort list
        this.__dispatchers.sort(function (a, b) {
          return a.PRIORITY - b.PRIORITY;
        });
      },

      /**
       * Get a list of registered event dispatchers.
       *
       * @return {qx.event.IEventDispatcher[]} all registered event dispatcher
       */
      getDispatchers: function getDispatchers() {
        return this.__dispatchers;
      }
    }
  });
  qx.event.Registration.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Registration.js.map