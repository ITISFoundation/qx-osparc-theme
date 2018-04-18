/* ************************************************************************

  OSparc Dark Theme for Qooxdoo

  Copyright:
     2018 IT'IS Foundation

  License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

  Authors:
    * Tobias Oetiker (oetiker)

  Origin:
    This theme is based in large parts on the the Simple
    theme included with Qooxdoo.
************************************************************************ */

/**
 * The simple qooxdoo font theme.
 */
qx.Theme.define("osparc.theme.osparcdark.Font",
  {
    fonts :
  {
    "default" :
    {
      size : 13,
      family : ["sans-serif"],
      color: "text",
      sources: [
        {
          family: "Roboto",
          source: [
            "osparc/font/roboto-v18-latin-ext_latin-regular.woff2",
            "osparc/font/roboto-v18-latin-ext_latin-regular.woff"
          ]
        }
      ]
    },

    "bold" :
    {
      size : 13,
      family : ["sans-serif"],
      bold : true,
      color: "text",
      sources: [
        {
          family: "Roboto",
          source: [
            "osparc/font/roboto-v18-latin-ext_latin-700.woff2",
            "osparc/font/roboto-v18-latin-ext_latin-700.woff"
          ]
        }
      ]
    },

    "headline" :
    {
      size : 24,
      family : ["sans-serif"],
      color: "text",
      sources: [
        {
          family: "Roboto",
          source: [
            "osparc/font/roboto-v18-latin-ext_latin-regular.woff2",
            "osparc/font/roboto-v18-latin-ext_latin-regular.woff"
          ]
        }
      ]
    },

    "small" :
    {
      size : 11,
      family : ["sans-serif"],
      color: "text",
      sources: [
        {
          family: "Open Sans",
          source: [
            "osparc/font/roboto-v18-latin-ext_latin-regular.woff2",
            "osparc/font/roboto-v18-latin-ext_latin-regular.woff"
          ]
        }
      ]
    },

    "monospace" :
    {
      size : 11,
      family : ["monospace"],
      color: "text",
      sources: [
        {
          family: "Open Sans",
          source: [
            "osparc/font/roboto-mono-v5-latin-ext_latin-italic.woff2",
            "osparc/font/roboto-mono-v5-latin-ext_latin-italic.woff"
          ]
        }
      ]
    }
  }
  });
