import * as monaco from 'reactive-liquid-monaco-editor';
export interface IVSCodeTheme {
    "$schema": "vscode://schemas/color-theme";
    "type": 'dark' | 'light';
    colors: {
        [name: string]: string;
    };
    tokenColors: {
        name?: string;
        "scope": string[] | string;
        "settings": {
            foreground?: string;
            background?: string;
            fontStyle?: string;
        };
    }[];
}
export declare type IMonacoThemeRule = monaco.editor.ITokenThemeRule[];


export function convertTheme(theme) :monaco.editor.IStandaloneThemeData{
    var monacoThemeRule :any[]= [];
    var returnTheme :monaco.editor.IStandaloneThemeData= {
        inherit: false,
        base: 'vs-dark',
        colors: theme.colors,
        rules: monacoThemeRule,
        encodedTokensColors:[]
    };
    theme.tokenColors.map(function (color) {
        if (typeof color.scope == 'string') {
            var split = color.scope.split(',');
            if (split.length > 1) {
                color.scope = split;
                evalAsArray();
                return;
            }
            monacoThemeRule.push(Object.assign({}, color.settings, {
                // token: color.scope.replace(/\s/g, '')
                token: color.scope
            }));
            return;
        }
        evalAsArray();
        function evalAsArray() {
            if (color.scope) {
                color.scope.map(function (scope) {
                    monacoThemeRule.push(Object.assign({}, color.settings, {
                        token: scope
                    }));
                });
            }
        }
    });
    return returnTheme;
}

