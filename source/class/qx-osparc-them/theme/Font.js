/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define("qxtangible.theme.Font", {
    extend: qx.theme.indigo.Font,

    fonts: {
        "title": {
            size: 16,
            family: ["Lucida Grande", "DejaVu Sans", "Verdana", "sans-serif"],
            bold: false,
            color: "font",
            lineHeight: 1.8
        },
        "cardText": {
            size: 13,
            family: ["Lucida Grande", "DejaVu Sans", "Verdana", "sans-serif"],
            bold: false,
            color: "font",
            lineHeight: 1.8
        },
        "cardLabel": {
            size: 10,
            family: ["Lucida Grande", "DejaVu Sans", "Verdana", "sans-serif"],
            bold: false,
            color: "material-label",
            lineHeight: 1.2
        },
        "FontAwesome": {
            size: 32,
            lineHeight: 1,
            comparisonString: "\uf1e3\uf1f7\uf11b\uf19d",
            family: ["FontAwesome"],
            sources: [{
                family: "FontAwesome",
                source: ['ttf','woff','woff2','eot'].map(function(ext){return "hin_cred_mgr/fontawesome-webfont."+ext})
            }]
        },
        "FontAwesome16": {
            size: 16,
            lineHeight: 1,
            comparisonString: "\uf1e3\uf1f7\uf11b\uf19d",
            family: ["FontAwesome"]
        },
        "FontAwesome32": {
            size: 32,
            lineHeight: 1,
            comparisonString: "\uf1e3\uf1f7\uf11b\uf19d",
            family: ["FontAwesome"]
        }
    }
});
