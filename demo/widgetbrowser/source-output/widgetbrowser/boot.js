(function(){

if (!window.qx) 
  window.qx = {};

qx.$$start = new Date();

if (!qx.$$environment) 
  qx.$$environment = {};
var envinfo = {
  "qx.application": "widgetbrowser.Application",
  "qx.revision": "",
  "qx.theme": "osparc.theme.OSparcDark",
  "qx.version": "6.0.0-alpha",
  "true": true,
  "qx.allowUrlSettings": false,
  "qx.allowUrlVariants": false,
  "qx.debug.property.level": 0,
  "qx.debug": true,
  "qx.debug.ui.queue": true,
  "qx.debug.touchpad.detection": false,
  "qx.aspects": false,
  "qx.dynlocale": true,
  "qx.dyntheme": true,
  "qx.blankpage": "qx/static/blank.html",
  "qx.debug.databinding": false,
  "qx.debug.dispose": false,
  "qx.optimization.basecalls": false,
  "qx.optimization.comments": false,
  "qx.optimization.privates": false,
  "qx.optimization.strings": false,
  "qx.optimization.variables": false,
  "qx.optimization.variants": false,
  "module.databinding": true,
  "module.logger": true,
  "module.property": true,
  "module.events": true,
  "qx.nativeScrollBars": false,
  "qx.automaticMemoryManagement": true,
  "qx.promise": true,
  "qx.promise.warnings": true,
  "qx.promise.longStackTraces": true,
  "qx.compilerVersion": "0.2.10",
  "qx.icontheme": "Tango",
  "widgetbrowser.themes": "qx.theme.Classic qx.theme.Indigo qx.theme.Modern qx.theme.Simple osparc.theme.OSparcDark"
};
for (var k in envinfo) 
  qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) 
  qx.$$libraries = {};
var libinfo = {
  "__out__": {
    "sourceUri": "."
  },
  "qx": {
    "sourceUri": "../transpiled",
    "resourceUri": "../resource"
  },
  "qx-osparc-theme": {
    "sourceUri": "../transpiled",
    "resourceUri": "../resource"
  },
  "qxc.application.formdemo": {
    "sourceUri": "../transpiled",
    "resourceUri": "../resource"
  },
  "widgetbrowser": {
    "sourceUri": "../transpiled",
    "resourceUri": "../resource"
  },
  "qxc.ui.versionlabel": {
    "sourceUri": "../transpiled",
    "resourceUri": "../resource"
  }
};
for (var k in libinfo) 
  qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {
  "C": null,
  "en": null
};
qx.$$locales = {
  "C": null,
  "en": null
};
qx.$$packageData = {};
qx.$$g = {};
qx.$$createdAt = function(obj, filename, lineNumber, column) {
  if (obj !== undefined && obj !== null && typeof Object.$$createdAt === undefined) {
    Object.defineProperty(obj, "$$createdAt", {
      value: {
        filename: filename,
        lineNumber: lineNumber,
        column: column
      },
      enumerable: false,
      configurable: false,
      writable: false
    });
  }
  return obj;
};

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

qx.$$loader = {
  parts : {
  "boot": [
    0
  ],
  "tree": [
    1
  ],
  "list": [
    2
  ],
  "table": [
    3
  ],
  "form": [
    4
  ],
  "toolbar": [
    5
  ],
  "window": [
    6
  ],
  "tab": [
    7
  ],
  "control": [
    8
  ],
  "embed": [
    9
  ],
  "embedframe": [
    10
  ],
  "basic": [
    11
  ],
  "misc": [
    12
  ],
  "modern": [
    13
  ],
  "simple": [
    14
  ],
  "indigo": [
    15
  ],
  "classic": [
    16
  ]
},
  packages : {
  "0": {
    "uris": [
      "__out__:resources.js",
      "__out__:polyfill.js",
      "qx:qx/Bootstrap.js",
      "qx:qx/core/Environment.js",
      "qx:qx/core/ObjectRegistry.js",
      "qx:qx/lang/normalize/Array.js",
      "qx:qx/Interface.js",
      "qx:qx/Mixin.js",
      "qx:qx/bom/client/EcmaScript.js",
      "qx:qx/lang/normalize/Date.js",
      "qx:qx/lang/normalize/Error.js",
      "qx:qx/lang/normalize/Function.js",
      "qx:qx/lang/normalize/String.js",
      "qx:qx/lang/normalize/Object.js",
      "qx:qx/lang/normalize/Number.js",
      "qx:qx/core/Property.js",
      "qx:qx/util/OOUtil.js",
      "qx:qx/Class.js",
      "qx:qx/data/MBinding.js",
      "qx:qx/dev/StackTrace.js",
      "qx:qx/util/RingBuffer.js",
      "qx:qx/log/appender/RingBuffer.js",
      "qx:qx/log/Logger.js",
      "qx:qx/core/MLogging.js",
      "qx:qx/bom/Event.js",
      "qx:qx/core/IDisposable.js",
      "qx:qx/event/Manager.js",
      "qx:qx/dom/Node.js",
      "qx:qx/lang/Array.js",
      "qx:qx/lang/Function.js",
      "qx:qx/event/Registration.js",
      "qx:qx/core/MEvent.js",
      "qx:qx/core/MProperty.js",
      "qx:qx/lang/Type.js",
      "qx:qx/core/Assert.js",
      "qx:qx/core/MAssert.js",
      "qx:qx/core/Object.js",
      "qx:qx/data/IListData.js",
      "qx:qx/event/type/Event.js",
      "qx:qx/event/type/Data.js",
      "qx:qx/event/IEventDispatcher.js",
      "qx:qx/event/dispatch/Direct.js",
      "qx:qx/Promise.js",
      "qx:qx/lang/String.js",
      "qx:qx/data/SingleValueBinding.js",
      "qx:qx/event/IEventHandler.js",
      "qx:qx/event/handler/Object.js",
      "qx:qx/bom/client/Engine.js",
      "qx:qx/bom/client/Browser.js",
      "qx:qx/bom/client/CssTransition.js",
      "qx:qx/bom/Style.js",
      "qx:qx/event/GlobalError.js",
      "qx:qx/util/DeferredCallManager.js",
      "qx:qx/util/DeferredCall.js",
      "qx:qx/util/ObjectPool.js",
      "qx:qx/event/Pool.js",
      "qx:qx/util/DisposeUtil.js",
      "qx:qx/data/marshal/MEventBubbling.js",
      "qx:qx/data/Array.js",
      "qx:qx/type/BaseError.js",
      "qx:qx/core/AssertionError.js",
      "qx:qx/lang/Json.js",
      "qx:qx/lang/Number.js",
      "qx:qx/core/ValidationError.js",
      "qx:qx/bom/client/OperatingSystem.js",
      "qx:qx/core/WindowError.js",
      "qx:qx/core/GlobalError.js",
      "qx:qx/lang/Object.js",
      "qx:qx/event/handler/Application.js",
      "qx:qx/event/type/Native.js",
      "qx:qx/event/handler/Window.js",
      "qx:qx/core/BaseInit.js",
      "qx:qx/core/Init.js",
      "qx:qx/application/IApplication.js",
      "qx:qx/locale/MTranslation.js",
      "qx:qx/application/AbstractGui.js",
      "qx:qx/application/Standalone.js",
      "widgetbrowser:widgetbrowser/Application.js",
      "qx:qx/theme/manager/Meta.js",
      "qx:qx/ui/tooltip/Manager.js",
      "qx:qx/ui/style/Stylesheet.js",
      "qx:qx/event/handler/UserAction.js",
      "qx:qx/bom/client/Event.js",
      "qx:qx/ui/core/queue/Manager.js",
      "qx:qx/module/Css.js",
      "qx:qx/type/BaseArray.js",
      "qx:qxWeb.js",
      "qx:qx/bom/Selector.js",
      "qx:qx/module/Polyfill.js",
      "qx:qx/bom/client/Device.js",
      "qx:qx/module/Environment.js",
      "qx:qx/module/Event.js",
      "qx:qx/module/Animation.js",
      "qx:qx/html/Element.js",
      "qx:qx/ui/core/LayoutItem.js",
      "qx:qx/ui/core/Widget.js",
      "qx:qx/ui/core/MChildrenHandling.js",
      "qx:qx/ui/core/MBlocker.js",
      "qx:qx/ui/window/MDesktop.js",
      "qx:qx/ui/root/Abstract.js",
      "qx:qx/ui/core/FocusHandler.js",
      "qx:qx/ui/core/queue/Visibility.js",
      "qx:qx/ui/root/Application.js",
      "qx:qx/log/appender/Util.js",
      "qx:qx/bom/client/Html.js",
      "qx:qx/log/appender/Native.js",
      "qx:qx/event/handler/Keyboard.js",
      "qx:qx/event/dispatch/AbstractBubbling.js",
      "qx:qx/event/dispatch/DomBubbling.js",
      "qx:qx/event/type/dom/Custom.js",
      "qx:qx/event/type/dom/Pointer.js",
      "qx:qx/event/handler/PointerCore.js",
      "qx:qx/event/handler/Pointer.js",
      "qx:qx/event/handler/GestureCore.js",
      "qx:qx/event/type/Dom.js",
      "qx:qx/event/type/Mouse.js",
      "qx:qx/event/type/Pointer.js",
      "qx:qx/event/type/Tap.js",
      "qx:qx/event/type/Swipe.js",
      "qx:qx/event/type/Rotate.js",
      "qx:qx/event/type/Pinch.js",
      "qx:qx/event/type/Track.js",
      "qx:qx/event/type/Roll.js",
      "qx:qx/event/handler/Gesture.js",
      "qx:qx/log/appender/Console.js",
      "qx:qx/ui/layout/Abstract.js",
      "qx:qx/ui/layout/Dock.js",
      "qx:qx/ui/core/MLayoutHandling.js",
      "qx:qx/ui/container/Composite.js",
      "widgetbrowser:widgetbrowser/view/Header.js",
      "qx:qx/ui/core/scroll/MScrollBarFactory.js",
      "qx:qx/ui/core/scroll/MRoll.js",
      "qx:qx/ui/core/MDragDropScrolling.js",
      "qx:qx/ui/core/DragDropScrolling.js",
      "qx:qx/ui/core/scroll/AbstractScrollArea.js",
      "qx:qx/ui/core/MContentPadding.js",
      "qx:qx/bom/client/Scroll.js",
      "qx:qx/ui/layout/Canvas.js",
      "qx:qx/ui/layout/Grid.js",
      "qx:qx/ui/container/Scroll.js",
      "qx:qx/ui/core/ISingleSelection.js",
      "qx:qx/ui/tabview/TabView.js",
      "widgetbrowser:widgetbrowser/view/TabView.js",
      "qx:qx/util/ValueManager.js",
      "qx:qx/theme/manager/Color.js",
      "qx:qx/theme/manager/Decoration.js",
      "qx:qx/theme/manager/Font.js",
      "qx:qx/theme/manager/Icon.js",
      "qx:qx/theme/manager/Appearance.js",
      "qx:qx/Theme.js",
      "qx:qx/event/Timer.js",
      "qx:qx/ui/core/MPlacement.js",
      "qx:qx/ui/popup/Popup.js",
      "qx:qx/ui/tooltip/ToolTip.js",
      "qx:qx/ui/form/IForm.js",
      "qx:qx/bom/client/Stylesheet.js",
      "qx:qx/bom/Stylesheet.js",
      "qx:qx/event/Emitter.js",
      "qx:qx/bom/AnimationFrame.js",
      "qx:qx/ui/core/queue/Widget.js",
      "qx:qx/ui/core/queue/Appearance.js",
      "qx:qx/ui/core/queue/Layout.js",
      "qx:qx/ui/core/queue/Dispose.js",
      "qx:qx/bom/element/Dimension.js",
      "qx:qx/bom/Document.js",
      "qx:qx/bom/Viewport.js",
      "qx:qx/bom/element/Location.js",
      "qx:qx/bom/client/Css.js",
      "qx:qx/bom/element/Clip.js",
      "qx:qx/bom/element/Cursor.js",
      "qx:qx/bom/element/Opacity.js",
      "qx:qx/bom/element/BoxSizing.js",
      "qx:qx/bom/element/Style.js",
      "qx:qx/bom/element/Class.js",
      "qx:qx/module/event/PointerHandler.js",
      "qx:qx/bom/element/Animation.js",
      "qx:qx/event/handler/Mouse.js",
      "qx:qx/event/handler/Element.js",
      "qx:qx/event/handler/Appear.js",
      "qx:qx/event/handler/Orientation.js",
      "qx:qx/event/handler/TouchCore.js",
      "qx:qx/event/handler/Touch.js",
      "qx:qx/event/handler/Offline.js",
      "qx:qx/event/handler/Input.js",
      "qx:qx/bom/Element.js",
      "qx:qx/dom/Hierarchy.js",
      "qx:qx/bom/element/Scroll.js",
      "qx:qx/bom/Selection.js",
      "qx:qx/event/handler/Focus.js",
      "qx:qx/event/dispatch/MouseCapture.js",
      "qx:qx/dom/Element.js",
      "qx:qx/bom/element/Attribute.js",
      "qx:qx/ui/core/EventHandler.js",
      "qx:qx/event/handler/Capture.js",
      "qx:qx/event/handler/DragDrop.js",
      "qx:qx/util/PropertyUtil.js",
      "qx:qx/type/BaseString.js",
      "qx:qx/locale/LocalizedString.js",
      "qx:qx/bom/client/Locale.js",
      "qx:qx/locale/Manager.js",
      "qx:qx/ui/basic/Image.js",
      "qx:qx/ui/core/DragDropCursor.js",
      "qx:qx/ui/core/Blocker.js",
      "qx:qx/html/Root.js",
      "qx:qx/event/type/KeyInput.js",
      "qx:qx/event/type/KeySequence.js",
      "qx:qx/event/util/Keyboard.js",
      "qx:qx/util/Wheel.js",
      "qx:qx/ui/layout/Util.js",
      "qx:qx/ui/layout/HBox.js",
      "qx:qx/ui/form/IField.js",
      "qx:qx/ui/form/IStringForm.js",
      "qx:qx/ui/basic/Label.js",
      "qxc.ui.versionlabel:qxc/ui/versionlabel/VersionLabel.js",
      "qx:qx/ui/core/MRemoteChildrenHandling.js",
      "qx:qx/ui/form/MForm.js",
      "qx:qx/ui/form/AbstractSelectBox.js",
      "qx:qx/ui/form/IModelSelection.js",
      "qx:qx/ui/core/MSingleSelectionHandling.js",
      "qx:qx/ui/form/MModelSelection.js",
      "qx:qx/ui/form/SelectBox.js",
      "qx:qx/ui/basic/Atom.js",
      "qx:qx/ui/form/IModel.js",
      "qx:qx/ui/form/MModelProperty.js",
      "qx:qx/ui/layout/Atom.js",
      "qx:qx/ui/form/ListItem.js",
      "qx:qx/io/PartLoader.js",
      "qx:qx/ui/core/Spacer.js",
      "qx:qx/ui/core/scroll/IScrollBar.js",
      "qx:qx/ui/core/scroll/ScrollBar.js",
      "qx:qx/ui/core/scroll/ScrollPane.js",
      "qx:qx/ui/tabview/Page.js",
      "qx:qx/ui/core/MRemoteLayoutHandling.js",
      "qx:qx/ui/container/SlideBar.js",
      "qx:qx/ui/container/Stack.js",
      "qx:qx/ui/form/RadioGroup.js",
      "qx:qx/ui/layout/VBox.js",
      "widgetbrowser:widgetbrowser/MControls.js",
      "widgetbrowser:widgetbrowser/view/TabPage.js",
      "qx:qx/bom/Cookie.js",
      "qx:qx/type/Array.js",
      "qx:qx/util/ColorUtil.js",
      "qx:qx/ui/decoration/IDecorator.js",
      "qx:qx/ui/decoration/Abstract.js",
      "qx:qx/ui/decoration/MBackgroundColor.js",
      "qx:qx/ui/decoration/MBorderRadius.js",
      "qx:qx/ui/decoration/MBoxShadow.js",
      "qx:qx/ui/decoration/MSingleBorder.js",
      "qx:qx/ui/decoration/MBackgroundImage.js",
      "qx:qx/ui/decoration/MDoubleBorder.js",
      "qx:qx/ui/decoration/MLinearBackgroundGradient.js",
      "qx:qx/ui/decoration/MBorderImage.js",
      "qx:qx/ui/decoration/MTransition.js",
      "qx:qx/ui/decoration/Decorator.js",
      "qx:qx/util/AliasManager.js",
      "qx:qx/bom/Font.js",
      "qx:qx/bom/webfonts/WebFont.js",
      "qx:qx/event/Idle.js",
      "qx:qx/util/placement/Placement.js",
      "qx:qx/ui/popup/Manager.js",
      "qx:qx/util/Uri.js",
      "qx:qx/bom/client/CssAnimation.js",
      "qx:qx/bom/element/AnimationCss.js",
      "qx:qx/bom/element/AnimationJs.js",
      "qx:qx/event/type/MouseWheel.js",
      "qx:qx/event/type/Orientation.js",
      "qx:qx/event/type/Touch.js",
      "qx:qx/bom/client/Plugin.js",
      "qx:qx/xml/Document.js",
      "qx:qx/bom/Range.js",
      "qx:qx/util/StringSplit.js",
      "qx:qx/event/type/Focus.js",
      "qx:qx/event/type/Drag.js",
      "qx:qx/io/ImageLoader.js",
      "qx:qx/html/Image.js",
      "qx:qx/html/Label.js",
      "qx:qx/bom/client/Transport.js",
      "qx:qx/util/ResourceManager.js",
      "qx:qx/util/LibraryManager.js",
      "qx:qx/bom/element/Decoration.js",
      "qx:qx/html/Blocker.js",
      "qx:qx/bom/Label.js",
      "qx:qx/ui/core/IMultiSelection.js",
      "qx:qx/ui/core/MMultiSelectionHandling.js",
      "qx:qx/ui/core/selection/Abstract.js",
      "qx:qx/ui/core/selection/Widget.js",
      "qx:qx/ui/core/selection/ScrollArea.js",
      "qx:qx/ui/form/List.js",
      "qx:qx/bom/String.js",
      "qx:qx/ui/core/SingleSelectionManager.js",
      "qx:qx/Part.js",
      "qx:qx/ui/form/INumberForm.js",
      "qx:qx/ui/form/IRange.js",
      "qx:qx/ui/form/Slider.js",
      "qx:qx/ui/core/scroll/ScrollSlider.js",
      "qx:qx/ui/core/MExecutable.js",
      "qx:qx/ui/form/IExecutable.js",
      "qx:qx/ui/form/Button.js",
      "qx:qx/ui/form/RepeatButton.js",
      "qx:qx/ui/layout/Grow.js",
      "qx:qx/ui/form/IRadioItem.js",
      "qx:qx/ui/form/IBooleanForm.js",
      "qx:qx/ui/form/RadioButton.js",
      "qx:qx/ui/tabview/TabButton.js",
      "widgetbrowser:widgetbrowser/pages/AbstractPage.js",
      "qx:qx/ui/form/ToggleButton.js",
      "qx:qx/ui/form/RadioButtonGroup.js",
      "qx:qx/bom/webfonts/Manager.js",
      "qx:qx/util/placement/AbstractAxis.js",
      "qx:qx/util/placement/DirectAxis.js",
      "qx:qx/util/placement/KeepAlignAxis.js",
      "qx:qx/util/placement/BestFitAxis.js",
      "qx:qx/bom/element/AnimationHandle.js",
      "qx:qx/bom/client/CssTransform.js",
      "qx:qx/bom/element/Transform.js",
      "qx:qx/bom/client/Xml.js",
      "qx:qx/bom/element/Background.js",
      "qx:qx/util/StringEscape.js",
      "qx:qx/ui/core/ISingleSelectionProvider.js",
      "qx:qx/io/part/Package.js",
      "qx:qx/io/part/Part.js",
      "qx:qx/io/part/ClosurePart.js",
      "qx:qx/event/AcceleratingTimer.js",
      "qx:qx/ui/tree/selection/SelectionManager.js",
      "qx:qx/ui/tree/Tree.js",
      "qx:qx/ui/tree/core/AbstractItem.js",
      "qx:qx/ui/tree/core/AbstractTreeItem.js",
      "qx:qx/ui/tree/TreeFolder.js",
      "qx:qx/ui/tree/TreeFile.js",
      "qx:qx/ui/virtual/core/Scroller.js",
      "qx:qx/ui/tree/core/IVirtualTree.js",
      "qx:qx/data/controller/ISelection.js",
      "qx:qx/ui/virtual/selection/MModel.js",
      "qx:qx/ui/virtual/core/Pane.js",
      "qx:qx/ui/virtual/core/Axis.js",
      "qx:qx/ui/tree/VirtualTree.js",
      "qx:qx/data/store/Json.js",
      "qx:qx/ui/table/Table.js",
      "qx:qx/ui/table/selection/Model.js",
      "qx:qx/ui/table/IRowRenderer.js",
      "qx:qx/ui/table/rowrenderer/Default.js",
      "qx:qx/ui/treevirtual/TreeVirtual.js",
      "qx:qx/io/request/AbstractRequest.js",
      "qx:qx/io/request/Xhr.js",
      "qx:qx/ui/list/List.js",
      "qx:qx/ui/table/ITableModel.js",
      "qx:qx/ui/table/model/Abstract.js",
      "qx:qx/ui/table/model/Simple.js",
      "qx:qx/ui/table/ICellRenderer.js",
      "qx:qx/ui/table/cellrenderer/Abstract.js",
      "qx:qx/ui/table/cellrenderer/AbstractImage.js",
      "qx:qx/ui/table/cellrenderer/Boolean.js",
      "qx:qx/ui/table/IHeaderRenderer.js",
      "qx:qx/ui/table/headerrenderer/Default.js",
      "qx:qx/ui/table/headerrenderer/Icon.js",
      "qxc.application.formdemo:qxc/application/formdemo/FormItems.js",
      "qx:qx/ui/toolbar/ToolBar.js",
      "qx:qx/ui/toolbar/Part.js",
      "qx:qx/ui/form/SplitButton.js",
      "qx:qx/ui/toolbar/SplitButton.js",
      "qx:qx/ui/toolbar/Button.js",
      "qx:qx/ui/toolbar/CheckBox.js",
      "qx:qx/ui/toolbar/RadioButton.js",
      "qx:qx/ui/form/MenuButton.js",
      "qx:qx/ui/menubar/Button.js",
      "qx:qx/ui/toolbar/MenuButton.js",
      "qx:qx/ui/menu/Menu.js",
      "qx:qx/ui/menu/AbstractButton.js",
      "qx:qx/ui/menu/ButtonLayout.js",
      "qx:qx/ui/menu/Button.js",
      "qx:qx/ui/menu/CheckBox.js",
      "qx:qx/ui/menu/RadioButton.js",
      "qx:qx/ui/menubar/MenuBar.js",
      "qx:qx/ui/window/IDesktop.js",
      "qx:qx/ui/window/Desktop.js",
      "qx:qx/ui/core/MResizable.js",
      "qx:qx/ui/core/MMovable.js",
      "qx:qx/ui/window/IWindowManager.js",
      "qx:qx/ui/window/Manager.js",
      "qx:qx/ui/window/Window.js",
      "qx:qx/ui/groupbox/GroupBox.js",
      "qx:qx/ui/form/CheckBox.js",
      "qx:qx/ui/form/IColorForm.js",
      "qx:qx/ui/control/ColorSelector.js",
      "qx:qx/ui/control/ColorPopup.js",
      "qx:qx/ui/form/IDateForm.js",
      "qx:qx/ui/control/DateChooser.js",
      "qx:qx/ui/embed/Flash.js",
      "qx:qx/ui/embed/Canvas.js",
      "qx:qx/ui/core/MNativeOverflow.js",
      "qx:qx/ui/embed/Html.js",
      "qx:qx/ui/splitpane/Pane.js",
      "qx:qx/ui/embed/AbstractIframe.js",
      "qx:qx/ui/embed/Iframe.js",
      "qx:qx/ui/embed/ThemedIframe.js",
      "qx:qx/ui/indicator/ProgressBar.js",
      "qx:qx/ui/container/Resizer.js",
      "qx:qx/bom/webfonts/Validator.js",
      "qx:qx/bom/request/Script.js",
      "qx:qx/ui/tree/core/FolderOpenButton.js",
      "qx:qx/ui/virtual/selection/Abstract.js",
      "qx:qx/ui/virtual/selection/Row.js",
      "qx:qx/ui/tree/core/OpenCloseController.js",
      "qx:qx/ui/virtual/core/IWidgetCellProvider.js",
      "qx:qx/ui/tree/provider/IVirtualTreeProvider.js",
      "qx:qx/ui/tree/core/MWidgetController.js",
      "qx:qx/ui/tree/provider/WidgetProvider.js",
      "qx:qx/ui/tree/core/Util.js",
      "qx:qx/util/Delegate.js",
      "qx:qx/ui/virtual/core/ILayer.js",
      "qx:qx/ui/virtual/core/CellEvent.js",
      "qx:qx/data/marshal/IMarshaler.js",
      "qx:qx/data/marshal/Json.js",
      "qx:qx/ui/table/IColumnMenuButton.js",
      "qx:qx/ui/table/columnmenu/Button.js",
      "qx:qx/ui/table/selection/Manager.js",
      "qx:qx/ui/table/cellrenderer/Default.js",
      "qx:qx/ui/table/ICellEditorFactory.js",
      "qx:qx/ui/table/celleditor/AbstractField.js",
      "qx:qx/ui/table/celleditor/TextField.js",
      "qx:qx/ui/table/columnmodel/Basic.js",
      "qx:qx/ui/table/pane/Pane.js",
      "qx:qx/ui/table/pane/Header.js",
      "qx:qx/ui/table/pane/Scroller.js",
      "qx:qx/ui/table/pane/Model.js",
      "qx:qx/ui/table/pane/FocusIndicator.js",
      "qx:qx/ui/table/IColumnMenuItem.js",
      "qx:qx/ui/treevirtual/MTreePrimitive.js",
      "qx:qx/ui/treevirtual/SimpleTreeDataModel.js",
      "qx:qx/ui/treevirtual/SimpleTreeDataCellRenderer.js",
      "qx:qx/ui/treevirtual/DefaultDataCellRenderer.js",
      "qx:qx/ui/treevirtual/SimpleTreeDataRowRenderer.js",
      "qx:qx/ui/treevirtual/SelectionManager.js",
      "qx:qx/ui/table/columnmodel/Resize.js",
      "qx:qx/util/Request.js",
      "qx:qx/util/Serializer.js",
      "qx:qx/bom/request/Xhr.js",
      "qx:qx/util/ResponseParser.js",
      "qx:qx/ui/virtual/layer/Abstract.js",
      "qx:qx/ui/virtual/layer/AbstractBackground.js",
      "qx:qx/ui/virtual/layer/Row.js",
      "qx:qx/ui/list/provider/IListProvider.js",
      "qx:qx/ui/list/core/MWidgetController.js",
      "qx:qx/ui/list/provider/WidgetProvider.js",
      "qx:qx/ui/table/headerrenderer/HeaderCell.js",
      "qx:qx/ui/form/Form.js",
      "qx:qx/ui/form/AbstractField.js",
      "qx:qx/ui/form/TextField.js",
      "qx:qx/ui/form/PasswordField.js",
      "qx:qx/ui/form/TextArea.js",
      "qx:qx/ui/form/ComboBox.js",
      "qx:qx/ui/form/core/AbstractVirtualBox.js",
      "qx:qx/ui/form/VirtualComboBox.js",
      "qx:qx/ui/form/DateField.js",
      "qx:qx/ui/form/renderer/IFormRenderer.js",
      "qx:qx/ui/form/renderer/AbstractRenderer.js",
      "qx:qx/ui/form/renderer/Single.js",
      "qx:qx/ui/form/VirtualSelectBox.js",
      "qx:qx/ui/form/Spinner.js",
      "qx:qx/ui/toolbar/Separator.js",
      "qx:qx/ui/toolbar/PartContainer.js",
      "qx:qx/ui/menu/Manager.js",
      "qx:qx/ui/menu/Layout.js",
      "qx:qx/ui/menu/Separator.js",
      "qx:qx/ui/menu/MenuSlideBar.js",
      "qx:qx/ui/layout/Basic.js",
      "qx:qx/locale/Date.js",
      "qx:qx/util/format/IFormat.js",
      "qx:qx/util/format/DateFormat.js",
      "qx:qx/html/Flash.js",
      "qx:qx/util/TimerManager.js",
      "qx:qx/html/Canvas.js",
      "qx:qx/ui/splitpane/Slider.js",
      "qx:qx/ui/splitpane/Splitter.js",
      "qx:qx/ui/splitpane/Blocker.js",
      "qx:qx/ui/splitpane/VLayout.js",
      "qx:qx/ui/splitpane/HLayout.js",
      "qx:qx/html/Iframe.js",
      "qx:qx/event/handler/Iframe.js",
      "qx:qx/bom/Iframe.js",
      "qx:qx/ui/virtual/layer/WidgetCell.js",
      "qx:qx/ui/tree/VirtualTreeItem.js",
      "qx:qx/ui/virtual/cell/IWidgetCell.js",
      "qx:qx/ui/virtual/cell/AbstractWidget.js",
      "qx:qx/ui/virtual/cell/WidgetCell.js",
      "qx:qx/ui/table/columnmenu/MenuItem.js",
      "qx:qx/util/format/NumberFormat.js",
      "qx:qx/ui/table/pane/Clipper.js",
      "qx:qx/ui/table/pane/CellEvent.js",
      "qx:qx/ui/core/ColumnData.js",
      "qx:qx/ui/table/columnmodel/resizebehavior/Abstract.js",
      "qx:qx/ui/table/columnmodel/resizebehavior/Default.js",
      "qx:qx/ui/form/validation/Manager.js",
      "qx:qx/ui/form/Resetter.js",
      "qx:qx/html/Input.js",
      "qx:qx/ui/form/core/VirtualDropDownList.js",
      "qx:qx/locale/Number.js",
      "qx:qx/ui/form/HoverButton.js",
      "qx:qx/bom/Flash.js",
      "qx:qx/ui/form/validation/AsyncValidator.js",
      "qx:qx/bom/Input.js",
      "qx-osparc-theme:osparc/theme/osparcdark/Color.js",
      "qx-osparc-theme:osparc/theme/osparcdark/Decoration.js",
      "qx-osparc-theme:osparc/theme/osparcdark/Font.js",
      "qx-osparc-theme:osparc/theme/osparcdark/Appearance.js",
      "qx:qx/theme/icon/Tango.js",
      "qx-osparc-theme:osparc/theme/OSparcDark.js",
      "qx-osparc-theme:osparc/theme/osparcdark/Image.js"
    ]
  },
  "1": {
    "uris": [
      "widgetbrowser:widgetbrowser/pages/Tree.js"
    ]
  },
  "2": {
    "uris": [
      "widgetbrowser:widgetbrowser/pages/List.js"
    ]
  },
  "3": {
    "uris": [
      "widgetbrowser:widgetbrowser/pages/Table.js"
    ]
  },
  "4": {
    "uris": [
      "widgetbrowser:widgetbrowser/pages/Form.js"
    ]
  },
  "5": {
    "uris": [
      "widgetbrowser:widgetbrowser/pages/ToolBar.js"
    ]
  },
  "6": {
    "uris": [
      "widgetbrowser:widgetbrowser/pages/Window.js"
    ]
  },
  "7": {
    "uris": [
      "widgetbrowser:widgetbrowser/pages/Tab.js"
    ]
  },
  "8": {
    "uris": [
      "widgetbrowser:widgetbrowser/pages/Control.js"
    ]
  },
  "9": {
    "uris": [
      "widgetbrowser:widgetbrowser/pages/Embed.js"
    ]
  },
  "10": {
    "uris": [
      "widgetbrowser:widgetbrowser/pages/EmbedFrame.js"
    ]
  },
  "11": {
    "uris": [
      "widgetbrowser:widgetbrowser/pages/Basic.js"
    ]
  },
  "12": {
    "uris": [
      "widgetbrowser:widgetbrowser/pages/Misc.js"
    ]
  },
  "13": {
    "uris": []
  },
  "14": {
    "uris": []
  },
  "15": {
    "uris": []
  },
  "16": {
    "uris": []
  }
},
  urisBefore : [],
  cssBefore : [],
  boot : "boot",
  closureParts : {},
  bootIsInline : false,
  addNoCacheParam : false,
  isLoadParallel: !isFirefox && 'async' in document.createElement('script'),
  delayDefer: true,
  splashscreen: window.QOOXDOO_SPLASH_SCREEN || null,
  isLoadChunked: false,
  loadChunkSize: null,

  decodeUris : function(compressedUris, pathName) {
    if (!pathName)
      pathName = "sourceUri";
    var libs = qx.$$libraries;
    var uris = [];
    for (var i = 0; i < compressedUris.length; i++) {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length == 2 && uri[0] in libs) {
        var prefix = libs[uri[0]][pathName];
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      if (qx.$$loader.addNoCacheParam) {
        euri += "?nocache=" + Math.random();
      }
      
      uris.push(euri);
    }
    return uris;
  }
};

/*
 * Collect URL parameters
 */
var URL_PARAMETERS = {}
if (document.location.search) {
  var args = document.location.search.substring(1).split('&');
  args.forEach(function(arg) {
    var match = arg.match(/^qooxdoo\:([^=]+)(=(.*))?/);
    if (match) {
      var key = match[1];
      var value = match[3];
      if (value === undefined || value === "true" || value === "1")
        value = true;
      URL_PARAMETERS[key] = value;
    }
  });
}

/*
 * Get settings from Splash Screen
 */
if (URL_PARAMETERS["splashscreen-disable"] === true)
  qx.$$loader.splashscreen = null;
if (qx.$$loader.splashscreen) {
  // If there's a Splash Screen, default to chunked
  qx.$$loader.isLoadChunked = true;
  var settings = qx.$$loader.splashscreen.getSettings()||{};
  if (typeof settings.isLoadChunked == "boolean")
    qx.$$loader.isLoadChunked = settings.isLoadChunked;
  if (typeof settings.loadChunkSize == "number" && settings.loadChunkSize > 1)
    qx.$$loader.loadChunkSize = settings.loadChunkSize; 
}

/*
 * Override with URL parameters
 */
for (var key in URL_PARAMETERS) {
  var value = URL_PARAMETERS[key];
  switch(key) {
  case "add-no-cache":
    qx.$$loader.addNoCacheParam = value === true;
    break;
    
  case "load-parallel":
    qx.$$loader.isLoadParallel = value === true;
    break;
    
  case "load-chunked":
    qx.$$loader.isLoadChunked = value === true;
    break;
  }
}

/*
 * IE
 */
var readyStateValue = {"complete" : true};
if (document.documentMode && document.documentMode < 10 ||
    (typeof window.ActiveXObject !== "undefined" && !document.documentMode)) {
  readyStateValue["loaded"] = true;
}

/*
 * Load Javascript
 */
function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function() {
    if (!this.readyState || readyStateValue[this.readyState]) {
      elem.onreadystatechange = elem.onload = null;
      if (typeof callback === "function") {
        callback();
      }
    }
  };
  elem.onerror = function() {
    if (console && typeof console.error == "function")
      console.error("Cannot load script " + uri);
    callback && callback("Cannot load script " + uri);
  }

  if (qx.$$loader.isLoadParallel) {
    elem.async = null;
  }

  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

/*
 * Load CSS
 */
function loadCss(uri) {
  var elem = document.createElement("link");
  elem.rel = "stylesheet";
  elem.type= "text/css";
  elem.href= uri;
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

/*
 * Used during initialisation and by `qx.io.part.Package` to load data for parts
 */
qx.$$loader.importPackageData = function (dataMap, callback) {
  if (dataMap["resources"]) {
    var resMap = dataMap["resources"];
    for (var k in resMap) 
      qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]) {
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap) {
      if (!qxlocs[lang]) 
        qxlocs[lang] = locMap[lang];
      else
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]) {
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap) {
      if (!qxtrans[lang]) 
        qxtrans[lang] = trMap[lang];
      else
        for (var k in trMap[lang]) 
          qxtrans[lang][k] = trMap[lang][k];
    }
  }
  if (callback){
    callback(dataMap);
  }
}

/*
 * Script queue
 */
var allScripts = [];
var nextScriptIndex = 0;

var flushScriptQueue = 
  qx.$$loader.isLoadParallel && qx.$$loader.isLoadChunked ?
    function(callback) {
      if (nextScriptIndex >= allScripts.length)
        return callback();
      var options = {
          numScripts: allScripts.length,
          numScriptsLoaded: 0,
          numScriptsLoading: 0
      };
      var chunkSize = qx.$$loader.loadChunkSize;
      if (chunkSize === null)
        chunkSize = Math.round(options.numScripts / 20);
      if (chunkSize < 1)
        chunkSize = 1;
      function checkForEnd() {
        if (options.numScriptsLoaded == options.numScripts)
          callback && callback();
        else if (options.numScriptsLoading == 0)
          loadNextChunk();
      }
      function onLoad() {
        options.numScriptsLoaded++;
        options.numScriptsLoading--;
        if (qx.$$loader.splashscreen)
          qx.$$loader.splashscreen.scriptLoaded(options, checkForEnd);
        else
          checkForEnd();
      }
      function loadNextChunk() {
        //console.log("Loading next chunk; chunkSize=" + chunkSize + ", numScripts=" + options.numScripts + ", numScriptsLoaded=" + options.numScriptsLoaded + ", numScriptsLoading=" + options.numScriptsLoading)
        while (nextScriptIndex < allScripts.length && options.numScriptsLoading < chunkSize) {
          var uri = allScripts[nextScriptIndex++];
          options.numScriptsLoading++;
          loadScript(uri, onLoad);
        }
      }
      loadNextChunk();
    }

  : qx.$$loader.isLoadParallel ?
    function(callback) {
      if (nextScriptIndex >= allScripts.length)
        return callback();
      var options = {
          numScripts: allScripts.length,
          numScriptsLoaded: 0,
          numScriptsLoading: 0
      };
      function checkForEnd() {
        if (options.numScriptsLoaded == options.numScripts)
          callback && callback();
      }
      function onLoad() {
        options.numScriptsLoaded++;
        options.numScriptsLoading--;
        if (qx.$$loader.splashscreen)
          qx.$$loader.splashscreen.scriptLoaded(options, checkForEnd);
        else
          checkForEnd();
      }
      while (nextScriptIndex < allScripts.length) {
        var uri = allScripts[nextScriptIndex++];
        options.numScriptsLoading++;
        loadScript(uri, onLoad);
      }
    }
    
  :
    function(callback) {
      var options = {
          numScripts: allScripts.length,
          numScriptsLoaded: 0,
          numScriptsLoading: 1
      };
      function queueLoadNext() {
        if (isWebkit) {
          // force async, else Safari fails with a "maximum recursion depth exceeded"
          window.setTimeout(loadNext, 0);
        } else {
          loadNext();
        }
      }
      function loadNext() {
        if (nextScriptIndex >= allScripts.length)
          return callback();
        var uri = allScripts[nextScriptIndex++];
        //console.log("Loading next chunk; chunkSize=" + chunkSize + ", numScripts=" + options.numScripts + ", numScriptsLoaded=" + options.numScriptsLoaded + ", numScriptsLoading=" + options.numScriptsLoading)
        loadScript(uri, function() {
          options.numScriptsLoaded++;
          if (qx.$$loader.splashscreen)
            qx.$$loader.splashscreen.scriptLoaded(options, queueLoadNext);
          else
            queueLoadNext();
        });
      }
      loadNext();
    };

/*
 * DOM loading
 */
var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

/*
 * Startup handler, hooks into Qooxdoo proper
 */
qx.$$loader.signalStartup = function () {
  qx.Bootstrap.executePendingDefers();
  qx.$$loader.delayDefer = false;
  qx.$$loader.scriptLoaded = true;
  function done() {
    if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
      qx.event.handler.Application.onScriptLoaded();
      qx.$$loader.applicationHandlerReady = true;
    } else {
      qx.$$loader.applicationHandlerReady = false;
    }
  }
  if (qx.$$loader.splashscreen)
    qx.$$loader.splashscreen.loadComplete(done);
  else
    done();
}

/*
 * Starts the whole loading process
 */
qx.$$loader.init = function(){
  var l = qx.$$loader;
  l.decodeUris(l.cssBefore, "resourceUri").forEach(function(uri) {
    loadCss(uri);
  });
  allScripts = l.decodeUris(l.urisBefore, "resourceUri");
  if (!l.bootIsInline) {
    var add = l.decodeUris(l.packages[l.parts[l.boot][0]].uris);
    Array.prototype.push.apply(allScripts, add);
  }
  
  function begin() {
    flushScriptQueue(function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        var bootPackageHash = l.parts[l.boot][0];
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
  
  if (qx.$$loader.splashscreen)
    qx.$$loader.splashscreen.loadBegin(begin);
  else
    begin();
}
})();




qx.$$loader.init();

