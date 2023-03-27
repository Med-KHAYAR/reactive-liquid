import * as monaco from 'reactive-liquid-monaco-editor';
import { setupCssWithProviders , toDiagnostics } from 'reactive-liquid-monaco-editor/esm/vs/language/css/cssMode'
import { setupTypeScriptWithProviders } from 'reactive-liquid-monaco-editor/esm/vs/language/typescript/tsMode'

let workersAndProviders;

export async function initWorkersAndProviders(
    typescriptDefaults=monaco.languages.typescript.typescriptDefaults,
    cssDefaults=monaco.languages.css.cssDefaults
    )
    {
    const ts  = await getTypescriptWorkerAndProviders(typescriptDefaults);
    const css = await getCssWorkerAndProviders(cssDefaults);

    ts.worker=await ts.worker();
    css.worker=await css.worker();
    console.log("TS",ts)

    if(!workersAndProviders){
        workersAndProviders={
            typescript  : { 
                worker          : ts.worker,
                providers       : ts.providers,
                getDiagnostics  : async (model) => {
                    const promises:any[] = [];
                    promises.push(ts.worker.getSyntacticDiagnostics(model.uri.toString()));
                  
                    promises.push(ts.worker.getSemanticDiagnostics(model.uri.toString()));
                 
                    promises.push(ts.worker.getSuggestionDiagnostics(model.uri.toString()));
              
                  const allDiagnostics = await Promise.all(promises);
                  if (!allDiagnostics || model.isDisposed()) {
                    return;
                  }
                  let diagnostics=allDiagnostics.reduce((p, c) => c.concat(p), [])
    
                  return diagnostics.map( d => ts.providers.DiagnosticsAdapter.convertDiagnostics(model,d) );
                },
    
            },
    
            css : { 
                worker          : css.worker,
                providers       : css.providers,
                getDiagnostics  : async (model) => {
                    const diagnostics = await css.worker.doValidation(model.uri.toString())
                    return diagnostics.map( d => toDiagnostics(model,d) );
                }
            },
        }
    }
    return workersAndProviders;
}

export function getCssWorkerAndProviders(defaults){
    return setupCssWithProviders(defaults);
}

export function getTypescriptWorkerAndProviders(defaults){
    return setupTypeScriptWithProviders(defaults)
}

