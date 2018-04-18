"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "osparc.theme.osparcdark.Color": {
        "require": true
      },
      "osparc.theme.osparcdark.Decoration": {
        "require": true
      },
      "osparc.theme.osparcdark.Font": {
        "require": true
      },
      "osparc.theme.osparcdark.Appearance": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Theme.define("osparc.theme.OSparcDark", {
    title: "OSparc Dark Theme",
    meta: {
      color: osparc.theme.osparcdark.Color,
      decoration: osparc.theme.osparcdark.Decoration,
      font: osparc.theme.osparcdark.Font,
      appearance: osparc.theme.osparcdark.Appearance,
      icon: qx.theme.icon.Tango
    }
  });
  osparc.theme.OSparcDark.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=OSparcDark.js.map