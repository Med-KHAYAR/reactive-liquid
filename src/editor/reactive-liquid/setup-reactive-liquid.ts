import * as monaco from 'reactive-liquid-monaco-editor'
import { isInsideStyleRegion } from './reactive-liquid-file';
import { initWorkersAndProviders } from './utils';

export async function setupReactiveLiquid(){
    const workersAndProviders = await initWorkersAndProviders() 
    
    monaco.languages.register({ id: "reactive-liquid" });

    const config : monaco.languages.LanguageConfiguration = {
      indentationRules: {
        increaseIndentPattern: /^((?!\/\/).)*(\{[^}"'`]*|\([^)"'`]*|\[[^\]"'`]*)$/gm,
        decreaseIndentPattern: /^((?!.*?\/\\*).*\\*\/)?\\s*[\\)\\}\\]].*$/gm
      },
        surroundingPairs: [
          { open: '{', close: '}' },
          { open: '[', close: ']' },
          { open: '(', close: ')' },
          { open: '<%', close: '%>' },
          { open: '<', close: '>' },
          { open: "'", close: "'" },
          { open: '"', close: '"' },
        ],
        autoClosingPairs: [
          { open: '{', close: '}' },
          { open: '[', close: ']' },
          { open: '(', close: ')' },
          { open: '<%', close: '%>' },
          { open: "'", close: "'", notIn: ['string', 'comment'] },
          { open: '"', close: '"', notIn: ['string', 'comment'] },
        ],
    };
    
    monaco.languages.setLanguageConfiguration('reactive-liquid', config);

    monaco.languages.registerCompletionItemProvider('reactive-liquid',{
      provideCompletionItems:async (model,position)=>{
        let file = model['ReactiveFile'];
        if(isInsideStyleRegion(model.getValue(),model.getOffsetAt(position))){
            return workersAndProviders.css.providers.CompletionAdapter.provideCompletionItems(file.css,position)
        }else{
            return workersAndProviders.typescript.providers.SuggestAdapter.provideCompletionItems(file.typescript,position)
        }
        return null;
        }
      })



      monaco.languages.registerSignatureHelpProvider('reactive-liquid',{
        signatureHelpTriggerCharacters:['('],
        provideSignatureHelp(model, position, token, context) {
          let file = model['ReactiveFile'];
          return workersAndProviders.typescript.providers.SignatureHelpAdapter.provideSignatureHelp(file.typescript,position, token, context)
        }
      })
      
  monaco.languages.registerDefinitionProvider('reactive-liquid',{
    provideDefinition(model, position, token) {
      let file = model['ReactiveFile']; 
      if(isInsideStyleRegion(model.getValue(),model.getOffsetAt(position))){
        return workersAndProviders.css.providers.DefinitionAdapter.provideDefinition(file.css,position,token)
    }else{
        return workersAndProviders.typescript.providers.DefinitionAdapter.provideDefinition(file.typescript,position,token)
    }
    },
  })

  monaco.languages.registerColorProvider('reactive-liquid',{
    provideColorPresentations(model, colorInfo, token) {
      let file = model['ReactiveFile'];
      return workersAndProviders.css.providers.DocumentColorAdapter.provideColorPresentations(file.css,colorInfo,token)
    },
    provideDocumentColors(model, token) {
      let file = model['ReactiveFile'];
      return workersAndProviders.css.providers.DocumentColorAdapter.provideDocumentColors(file.css, token)
    }
  })

 
}