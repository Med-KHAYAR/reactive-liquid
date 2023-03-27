import { getEditor } from './editor';
import { createFile } from './editor/reactive-liquid/reactive-liquid-file'
import { initialEditorSetup } from './editor/setup-editor';
import './style.css'


await initialEditorSetup()

let file=await createFile('src','file');

getEditor(document.getElementById('app')!,file)