qx.Theme.define("qxxtangible.theme.Decoration", {
    extend: qx.theme.indigo.Decoration,

    decorations: {
        "tabview-page-button-top-checked": {
            style: {
                width: [5, 1, 0, 1],
                colorLeft: "border-main",
                colorRight: "border-main",
                colorTop: "tabview-page-button-checked-top",
                backgroundColor: "tabview-page-button-background-checked",
                radius: [2, 2, 0, 0]
            }
        },

        "tabview-page-button-top": {
            style: {
                width: [1, 1, 1, 1],
                backgroundColor: "tabview-page-button-background",
                color: "border-main",
                radius: [2, 2, 0, 0]
            }
        },
        "flat": {
            style: {
                width: 1,
                color: "transparent"
            }
        },
        "button-box": {
            style: {
                radius: 1,
                width: 1,
                color: "button-border",
                backgroundColor: "button-box-bright"
            }
        },

        "button-box-pressed": {
            include: "button-box",

            style: {
                backgroundColor: "button-box-bright-pressed"
            }
        },
        "material-shadow-1": {
            style: {
                shadowBlurRadius: [3,2],
                shadowVerticalLength: 1,
                shadowColor: ['rgba(0,0,0,0.12)','rgba(0,0,0,0.24)']
            }
        },
        "material-shadow-2": {
            style: {
                shadowBlurRadius: 6,
                shadowVerticalLength: 3,
                shadowColor: ['rgba(0,0,0,0.16)','rgba(0,0,0,0.23)']
            }
        },
        "material-shadow-3": {
            style: {
                shadowBlurRadius: [10,6],
                shadowVerticalLength: [20,6],
                shadowColor: ['rgba(0,0,0,0.19)','rgba(0,0,0,0.23)']
            }
        },
        "material-textfield": {
            style: {
                styleBottom: 'solid',
                widthBottom: 1,
                colorBottom: "material-textfield"
            }
        },
        "material-textfield-focussed": {
            style: {
                styleBottom: 'solid',
                widthBottom: 2,
                colorBottom: "material-textfield-focussed"
            }
        },
        "material-textfield-invalid": {
            style: {
                styleBottom: 'solid',
                widthBottom: 2,
                colorBottom: "material-textfield-invalid"
            }
        },
        "material-button": {
            style: {
                radius: 2,
                shadowBlurRadius: 0,
                shadowVerticalLength: 0,
                shadowColor: 'rgba(0,0,0,0)',
                transitionProperty: 'box-shadow',
                transitionDuration: '0.2s'
            }
        },
        "material-button-pressed": {
            include: "material-button"
        },
        "material-button-disabled": {
            include: "material-button"

        },
        "material-button-hovered": {
            include: "material-button",
            style: {
                shadowBlurRadius: 2,
                shadowVerticalLength: [0,2],
                shadowColor: ['rgba(0,0,0,.12)','rgba(0,0,0,.2)']
            }
        },
        "material-card": {
            include: "material-shadow-1",
            style: {
                transitionProperty: 'top',
                transitionDuration: '0.5s'
            }
        }

    }
});
