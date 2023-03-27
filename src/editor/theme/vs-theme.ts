import { IVSCodeTheme } from "./theme-converter";

const theme : IVSCodeTheme ={
    "$schema": "vscode://schemas/color-theme",
    "type": "light",
    "colors": {
        "editor.background": "#FFFFFF",
        "editor.foreground": "#000000",
        "editor.inactiveSelectionBackground": "#e5ebf1",
        "editor.selectionHighlightBackground": "#add6ff80",
        "editorGroupHeader.noTabsBackground": "#5d6b99",
        "editorGroupHeader.tabsBackground": "#5d6b99",
        "editorIndentGuide.activeBackground": "#939393",
        "editorIndentGuide.background": "#d3d3d3",
        "editorLineNumber.activeForeground": "#086658",
        "editorLineNumber.foreground": "#086658",
        "editorSuggestWidget.background": "#eeeeee",
        "input.placeholderForeground": "#767676",
        "list.activeSelectionBackground": "#c4d5ff",
        "list.activeSelectionForeground": "#000000",
        "list.hoverBackground": "#e8e8e8",
        "settings.numberInputBorder": "#cecece",
        "settings.textInputBorder": "#cecece",
        "sideBar.background": "#f7f9fe",
        "sideBar.foreground": "#000000",
        "sideBarSectionHeader.background": "#7f8fc4",
        "sideBarSectionHeader.foreground": "#ffffff",
        "sideBarTitle.foreground": "#000000",
        "statusBar.background": "#40508d",
        "tab.activeBackground": "#f5cc84",
        "tab.activeForeground": "#000000",
        "tab.inactiveBackground": "#40568d",
        "tab.inactiveForeground": "#ffffff",
        "titleBar.activeBackground": "#ccd5f0",
        "titleBar.activeForeground": "#000000",
        "editor.lineHighlightBorder":"#ffffff"
    },
    "tokenColors": [
        {
            "scope": [
                "meta.embedded",
                "source.groovy.embedded"
            ],
            "settings": {
                "foreground": "#000000"
            }
        },
        {
            "scope": "emphasis",
            "settings": {
                "fontStyle": "italic"
            }
        },
        {
            "scope": "strong",
            "settings": {
                "fontStyle": "bold"
            }
        },
        {
            "scope": "meta.diff.header",
            "settings": {
                "foreground": "#000080"
            }
        },
        {
            "scope": "comment",
            "settings": {
                "foreground": "#008000"
            }
        },
        {
            "scope": "constant.language",
            "settings": {
                "foreground": "#0000FF"
            }
        },
        //keyword.control.untitled
        {
            "scope": "numeric.untitled",
            "settings": {
                "foreground": "#FF0000",
                "background":"#000000"
            }
        },{
            "scope": "keyword.control.untitled",
            "settings": {
                "foreground": "#FF0000",
                "background":"#000000"
            }
        },
        // end - 
        {
            "scope": [
                "constant.numeric"
            ],
            "settings": {
                "foreground": "#000000"
            }
        },
        {
            "scope": ["constant.regexp","meta.selector.css"],
            "settings": {
                "foreground": "#811F3F"
            }
        },
        {
            "scope": "entity.name.tag",
            "settings": {
                "foreground": "#800000"
            }
        },
        {
            "scope": "entity.name.selector",
            "settings": {
                "foreground": "#800000"
            }
        },
        {
            "scope": "entity.other.attribute-name",
            "settings": {
                "foreground": "#FF0000"
            }
        },
        {
            "scope": [
                "entity.other.attribute-name.class.css",
                "entity.other.attribute-name.class.mixin.css",
                "entity.other.attribute-name.id.css",
                "entity.other.attribute-name.parent-selector.css",
                "entity.other.attribute-name.pseudo-class.css",
                "entity.other.attribute-name.pseudo-element.css",
                "source.css.less entity.other.attribute-name.id",
                "entity.other.attribute-name.attribute.scss",
                "entity.other.attribute-name.scss"
            ],
            "settings": {
                "foreground": "#800000"
            }
        },
        {
            "scope": "invalid",
            "settings": {
                "foreground": "#CD3131"
            }
        },
        {
            "scope": "markup.underline",
            "settings": {
                "fontStyle": "underline"
            }
        },
        {
            "scope": "markup.bold",
            "settings": {
                "foreground": "#000080",
                "fontStyle": "bold"
            }
        },
        {
            "scope": "markup.heading",
            "settings": {
                "foreground": "#800000",
                "fontStyle": "bold"
            }
        },
        {
            "scope": "markup.italic",
            "settings": {
                "fontStyle": "italic"
            }
        },
        {
            "scope": "markup.inserted",
            "settings": {
                "foreground": "#09885A"
            }
        },
        {
            "scope": "markup.deleted",
            "settings": {
                "foreground": "#A31515"
            }
        },
        {
            "scope": "markup.changed",
            "settings": {
                "foreground": "#0451A5"
            }
        },
        {
            "scope": [
                "punctuation.definition.quote.begin.markdown",
                "punctuation.definition.list.begin.markdown"
            ],
            "settings": {
                "foreground": "#0451A5"
            }
        },
        {
            "scope": "markup.inline.raw",
            "settings": {
                "foreground": "#800000"
            }
        },
        {
            "scope": "punctuation.definition.tag",
            "settings": {
                "foreground": "#800000"
            }
        },
        {
            "scope": "meta.preprocessor",
            "settings": {
                "foreground": "#0000FF"
            }
        },
        {
            "scope": "meta.preprocessor.string",
            "settings": {
                "foreground": "#A31515"
            }
        },
        {
            "scope": "meta.preprocessor.numeric",
            "settings": {
                "foreground": "#000000"
            }
        },
        {
            "scope": "meta.structure.dictionary.key.python",
            "settings": {
                "foreground": "#0451A5"
            }
        },
        {
            "scope": "storage",
            "settings": {
                "foreground": "#0000FF"
            }
        },
        {
            "scope": "storage.type",
            "settings": {
                "foreground": "#0000FF"
            }
        },
        {
            "scope": "storage.modifier",
            "settings": {
                "foreground": "#0000FF"
            }
        },
        {
            "scope": "string",
            "settings": {
                "foreground": "#A31515"
            }
        },
        {
            "scope": [
                "string.comment.buffered.block.pug",
                "string.quoted.pug",
                "string.interpolated.pug",
                "string.unquoted.plain.in.yaml",
                "string.unquoted.plain.out.yaml",
                "string.unquoted.block.yaml",
                "string.quoted.single.yaml",
                "string.quoted.double.xml",
                "string.quoted.single.xml",
                "string.unquoted.cdata.xml",
                "string.quoted.double.html",
                "string.quoted.single.html",
                "string.unquoted.html",
                "string.quoted.single.handlebars",
                "string.quoted.double.handlebars"
            ],
            "settings": {
                "foreground": "#0000FF"
            }
        },
        {
            "scope": "string.regexp",
            "settings": {
                "foreground": "#811F3F"
            }
        },
        {
            "scope": [
                "punctuation.definition.template-expression.begin",
                "punctuation.definition.template-expression.end",
                "punctuation.section.embedded"
            ],
            "settings": {
                "foreground": "#0000FF"
            }
        },
        {
            "scope": [
                "meta.template.expression"
            ],
            "settings": {
                "foreground": "#000000"
            }
        },
        {
            "scope": [
                "support.constant.property-value",
                "support.constant.font-name",
                "support.constant.media-type",
                "support.constant.media",
                "constant.other.color.rgb-value",
                "constant.other.rgb-value",
                "support.constant.color"
            ],
            "settings": {
                "foreground": "#0451A5"
            }
        },
        {
            "scope": [
                "support.type.vendored.property-name",
                "support.type.property-name",
                "variable.css",
                "variable.scss",
                "variable.other.less",
                "source.coffee.embedded"
            ],
            "settings": {
                "foreground": "#FF0000"
            }
        },
        {
            "scope": [
                "support.type.property-name.json"
            ],
            "settings": {
                "foreground": "#0451A5"
            }
        },
        {
            "scope": "keyword",
            "settings": {
                "foreground": "#0000FF"
            }
        },
        {
            "scope": "keyword.control",
            "settings": {
                "foreground": "#0000FF"
            }
        },
        {
            "scope": "keyword.operator",
            "settings": {
                "foreground": "#000000"
            }
        },
        {
            "scope": [
                "keyword.operator.new",
                "keyword.operator.expression",
                "keyword.operator.cast",
                "keyword.operator.sizeof",
                "keyword.operator.instanceof",
                "keyword.operator.logical.python"
            ],
            "settings": {
                "foreground": "#0000FF"
            }
        },
        {
            "scope": "keyword.other.unit",
            "settings": {
                "foreground": "#09885A"
            }
        },
        {
            "scope": [
                "punctuation.section.embedded.begin.php",
                "punctuation.section.embedded.end.php"
            ],
            "settings": {
                "foreground": "#800000"
            }
        },
        {
            "scope": "support.function.git-rebase",
            "settings": {
                "foreground": "#0451A5"
            }
        },
        {
            "scope": "constant.sha.git-rebase",
            "settings": {
                "foreground": "#09885A"
            }
        },
        {
            "scope": [
                "storage.modifier.import.java",
                "variable.language.wildcard.java",
                "storage.modifier.package.java"
            ],
            "settings": {
                "foreground": "#000000"
            }
        },
        {
            "scope": "variable.language",
            "settings": {
                "foreground": "#0000FF"
            }
        },
        {
            "scope": [
                "entity.name.function",
                "support.function",
                "support.constant.handlebars"
            ],
            "settings": {
                "foreground": "#795E26"
            }
        },
        {
            "scope": [
                "meta.return-type",
                "support.class",
                "support.type",
                "entity.name.type",
                "entity.name.class",
                "storage.type.numeric.go",
                "storage.type.byte.go",
                "storage.type.boolean.go",
                "storage.type.string.go",
                "storage.type.uintptr.go",
                "storage.type.error.go",
                "storage.type.rune.go",
                "storage.type.cs",
                "storage.type.generic.cs",
                "storage.type.modifier.cs",
                "storage.type.variable.cs",
                "storage.type.annotation.java",
                "storage.type.generic.java",
                "storage.type.java",
                "storage.type.object.array.java",
                "storage.type.primitive.array.java",
                "storage.type.primitive.java",
                "storage.type.token.java",
                "storage.type.groovy",
                "storage.type.annotation.groovy",
                "storage.type.parameters.groovy",
                "storage.type.generic.groovy",
                "storage.type.object.array.groovy",
                "storage.type.primitive.array.groovy",
                "storage.type.primitive.groovy"
            ],
            "settings": {
                "foreground": "#066555"
            }
        },
        {
            "scope": [
                "meta.type.cast.expr",
                "meta.type.new.expr",
                "support.constant.math",
                "support.constant.dom",
                "support.constant.json",
                "entity.other.inherited-class"
            ],
            "settings": {
                "foreground": "#066555"
            }
        },
        {
            "scope": "keyword.control",
            "settings": {
                "foreground": "#AF00DB"
            }
        },
        {
            "scope": [
                "variable",
                "meta.definition.variable.name",
                "support.variable",
                "entity.name.variable"
            ],
            "settings": {
                "foreground": "#001080"
            }
        },
        {
            "scope": [
                "meta.object-literal.key"
            ],
            "settings": {
                "foreground": "#001080"
            }
        },
        {
            "scope": [
                "support.constant.property-value",
                "support.constant.font-name",
                "support.constant.media-type",
                "support.constant.media",
                "constant.other.color.rgb-value",
                "constant.other.rgb-value",
                "support.constant.color"
            ],
            "settings": {
                "foreground": "#0451A5"
            }
        },
        {
            "scope": [
                "punctuation.definition.group.regexp",
                "punctuation.definition.group.assertion.regexp",
                "punctuation.definition.character-class.regexp",
                "punctuation.character.set.begin.regexp",
                "punctuation.character.set.end.regexp",
                "keyword.operator.negation.regexp",
                "support.other.parenthesis.regexp"
            ],
            "settings": {
                "foreground": "#D16969"
            }
        },
        {
            "scope": [
                "constant.character.character-class.regexp",
                "constant.other.character-class.set.regexp",
                "constant.other.character-class.regexp",
                "constant.character.set.regexp"
            ],
            "settings": {
                "foreground": "#811F3F"
            }
        },
        {
            "scope": "keyword.operator.quantifier.regexp",
            "settings": {
                "foreground": "#000000"
            }
        },
        {
            "scope": [
                "keyword.operator.or.regexp",
                "keyword.control.anchor.regexp"
            ],
            "settings": {
                "foreground": "#FF0000"
            }
        },
        {
            "scope": "constant.character",
            "settings": {
                "foreground": "#0000FF"
            }
        },
        {
            "scope": "constant.character.escape",
            "settings": {
                "foreground": "#FF0000"
            }
        },
        {
            "scope": "token.info-token",
            "settings": {
                "foreground": "#316BCD"
            }
        },
        {
            "scope": "token.warn-token",
            "settings": {
                "foreground": "#CD9731"
            }
        },
        {
            "scope": "token.error-token",
            "settings": {
                "foreground": "#CD3131"
            }
        },
        {
            "scope": "token.debug-token",
            "settings": {
                "foreground": "#800080"
            }
        }
    ]
};

export default theme;