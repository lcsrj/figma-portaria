const collection=figma.variables.createVariableCollection('Acompanhamento · demonstração 15/11');
const strings=['title','state','stage','actSituation','owner','department','reason','last','action','progress','history','next'];const variables={};
for(const key of strings){const v=figma.variables.createVariable('processo/'+key,collection,'STRING');v.scopes=['TEXT_CONTENT'];v.setVariableCodeSyntax('WEB','var(--demo-processo-'+key+')');v.setValueForMode(collection.defaultModeId,DEFAULT[key]);variables[key]=v.id;}
for(const [key,width]of [['progressD',1080],['progressM',318]]){const v=figma.variables.createVariable('processo/'+key,collection,'FLOAT');v.scopes=['WIDTH_HEIGHT'];v.setVariableCodeSyntax('WEB','var(--demo-processo-'+key+')');v.setValueForMode(collection.defaultModeId,width*DEFAULT.progressNumber/100);variables[key]=v.id;}
return {collectionId:collection.id,variables};
