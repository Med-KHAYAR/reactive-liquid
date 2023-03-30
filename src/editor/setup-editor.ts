import * as monaco from 'reactive-liquid-monaco-editor'
import { loadWASM } from 'onigasm' // peer dependency of 'monaco-textmate'
import { Registry } from 'monaco-textmate' // peer dependency
import { wireTmGrammars } from './tm-support'
import { convertTheme } from "./theme/theme-converter";
import theme from "./theme/vs-theme";

import axios from 'axios';
import { ReactiveLiquidFile } from './reactive-liquid/reactive-liquid-file';
import { setupReactiveLiquid } from './reactive-liquid/setup-reactive-liquid';


export async function initialEditorSetup(){

    await loadWASM('../node_modules/onigasm/lib/onigasm.wasm') // See https://www.npmjs.com/package/onigasm#light-it-up


    const loadTypes = (name) =>  axios.get(`./static/@types/${name}/index.d.ts`).then(res => res.data);
    let packages:any[]=[];
    packages.push(
        { packageName: 'csstype', loadTypes },
        { packageName: 'prop-types', loadTypes },
        { packageName: 'react', loadTypes },
        { packageName: 'react-dom',loadTypes },
        { packageName: 'shopify',loadTypes }
    );
    
    // load Types Definitions ()
    await _loadTypes(packages)

    monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);
    
    // redefine getWorker function for use in custom language
    self.MonacoEnvironment = {
        getWorker: function (workerId, label) {
            const getWorkerModule = (moduleUrl, label) => {
                return new Worker(moduleUrl, {
                    name: label,
                    type: 'module'
                });
            };
            switch (label) {
                case 'json':
                    return getWorkerModule('../node_modules/reactive-liquid-monaco-editor/esm/vs/language/json/json.worker.js', label);
                case 'css':
                case 'scss':
                case 'less':
                    return getWorkerModule('../node_modules/reactive-liquid-monaco-editor/esm/vs/language/css/css.worker.js', label);
                case 'html':
                case 'handlebars':
                case 'razor':
                    return getWorkerModule('../node_modules/reactive-liquid-monaco-editor/esm/vs/language/html/html.worker.js', label);
                case 'typescript':
                case 'javascript':
                    return getWorkerModule('../node_modules/reactive-liquid-monaco-editor/esm/vs/language/typescript/ts.worker.js', label);
                default:
                    return getWorkerModule('../node_modules/reactive-liquid-monaco-editor/esm/vs/editor/editor.worker.js', label);
            }
        }
    };
    
    await setupReactiveLiquid();

}

export async function setupEditor(domElement:HTMLElement,initialFile:ReactiveLiquidFile) {

    const registry = new Registry({
        getGrammarDefinition: async (scopeName) => {
            var scope= scopeName.split('.').pop();
            return {
                format: 'json',
                content: await (await fetch(`./static/grammars/${scope}.tmGrammar.json`)).text()
            }
        }
    })

    
    // convert and use vs-code theme
    const convertedTheme=convertTheme(theme);
    monaco.editor.defineTheme('vs-code-theme-converted', convertedTheme);

    var editor= monaco.editor.create(domElement, {
        model           :   initialFile.reactiveLiquid,
        language        :   'reactive-liquid',
        minimap         :   { enabled : false },
        theme           :   'vs-code-theme-converted',
        wordWrap        :   'on',
        automaticLayout :   true
        
    })
    
    await wireTmGrammars(monaco, registry, editor)

    return editor;
}

async function _loadTypes(packages){
      
    const typesPrefix = './node_modules/@types';
    let pathMappings={};
      for (const pkg of packages) {
        const { packageName, loadTypes } = pkg;
        // Get the pretend @types package name
        // (for a scoped package like @fluentui/utilities, this will be fluentui__utilities)
        const scopedMatch = packageName.match(/^@([^/]+)\/(.*)/);
        const typesPackageName = scopedMatch ? `${scopedMatch[1]}__${scopedMatch[2]}` : packageName;
        
      
          await Promise.resolve(loadTypes(packageName)).then(contents => {
            const indexPath = `${typesPrefix}/${typesPackageName}/index`;
            // This makes TS automatically find typings for package-level imports
            monaco.languages.typescript.typescriptDefaults.addExtraLib(contents);//, `${indexPath}.d.ts`);
            // But for deeper path imports, we likely need to map them back to the root index file
            // (do still include '*' as a default in case the types include module paths--
            // api-extractor rollups don't do this, but other packages' typings might)
            // https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping
            pathMappings[packageName + '/lib/*'] = ['*', indexPath];
          })
        
        }
    
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
          ...monaco.languages.typescript.typescriptDefaults.getCompilerOptions(),
          baseUrl:'.',
          jsx:monaco.languages.typescript.JsxEmit.ReactJSX,
          allowNonTsExtensions: true
        });
}
