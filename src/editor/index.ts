import * as monaco from 'reactive-liquid-monaco-editor'
import { ReactiveLiquidFile } from "./reactive-liquid/reactive-liquid-file";
import { setupEditor } from "./setup-editor";

let editor :monaco.editor.IStandaloneCodeEditor;

export async function getEditor(domElement:HTMLElement,initialFile:ReactiveLiquidFile){
  if(!editor){
    editor = await setupEditor(domElement,initialFile);
  }
  return editor;
}