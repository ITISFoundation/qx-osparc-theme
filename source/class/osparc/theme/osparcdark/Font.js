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
 * @asset(osparc/font/*.woff)
 * @asset(osparc/font/*.woff2)
 * @asset(osparc/font/*.ttf)
 * @asset(osparc/font/*.eof)
 */
/**
 * The simple qooxdoo font theme.
 */
qx.Theme.define("osparc.theme.osparcdark.Font", {
  fonts: {
    "default": {
      size: 13,
      family: ["Roboto"],
      color: "text",
      sources: [
        {
          family: "Roboto",
          source: [
            "osparc/font/roboto-v18-latin-ext_latin-regular.woff",
            "osparc/font/roboto-v18-latin-ext_latin-regular.woff2"
          ]
        }
      ]
    },

    "bold":
      {
        size: 13,
        family: ["Roboto"],
        bold: true,
        color: "text",
        sources: [
          {
            family: "Roboto",
            source: [
              "osparc/font/roboto-v18-latin-ext_latin-700.woff",
              "osparc/font/roboto-v18-latin-ext_latin-700.woff2"
            ]
          }
        ]
      },

    "headline":
      {
        size: 24,
        family: ["Roboto"],
        color: "text",
        sources: [
          {
            family: "Roboto",
            source: [
              "osparc/font/roboto-v18-latin-ext_latin-regular.woff",
              "osparc/font/roboto-v18-latin-ext_latin-regular.woff2"
            ]
          }
        ]
      },

    "small":
      {
        size: 11,
        family: ["Roboto"],
        color: "text",
        sources: [
          {
            family: "Roboto",
            source: [
              "osparc/font/roboto-v18-latin-ext_latin-regular.woff",
              "osparc/font/roboto-v18-latin-ext_latin-regular.woff2"
            ]
          }
        ]
      },

    "monospace":
      {
        size: 11,
        family: ["Roboto Mono"],
        color: "text",
        sources: [
          {
            family: "Roboto Mono",
            source: [
              "osparc/font/roboto-mono-v5-latin-ext_latin-italic.woff",
              "osparc/font/roboto-mono-v5-latin-ext_latin-italic.woff2"
            ]
          }
        ]
      },
    "FontAwesomeBrands": {
      size: 32,
      lineHeight: 1,
      family: ["Font Awesome 5 Brands"]
    },
    "FontAwesomeRegular": {
      size: 32,
      lineHeight: 1,
      family: ["Font Awesome 5 Free"]
    },
    "FontAwesomeSolid": {
      size: 32,
      lineHeight: 1,
      bold: true,
      family: ["Font Awesome 5 Free"]
    },
    "MaterialIcons": {
      size: 32,
      lineHeight: 1,
      family: ["Material Icons"]
    }
  }
});
