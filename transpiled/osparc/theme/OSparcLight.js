(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "osparc.theme.osparclight.Color": {
        "require": true
      },
      "osparc.theme.common.Decoration": {
        "require": true
      },
      "osparc.theme.common.Font": {
        "require": true
      },
      "osparc.theme.common.Appearance": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
    OSparc Light Theme for Qooxdoo
  
    Copyright:
       2020 IT'IS Foundation
  
    License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
    Authors:
      * Odei Maiz (odeimaiz)
  
    Origin:
      This theme is based in large parts on the the Simple
      theme included with Qooxdoo.
  ************************************************************************ */

  /**
   * Simple Theme
   */
  qx.Theme.define("osparc.theme.OSparcLight", {
    title: "OSparc Light Theme",
    meta: {
      color: osparc.theme.osparclight.Color,
      decoration: osparc.theme.common.Decoration,
      font: osparc.theme.common.Font,
      appearance: osparc.theme.common.Appearance,
      icon: qx.theme.icon.Tango
    }
  });
  osparc.theme.OSparcLight.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=OSparcLight.js.map?dt=1599827681901