"use strict";(self.webpackChunkkreek_webapp=self.webpackChunkkreek_webapp||[]).push([[6508],{2526:function(e){function t(e){!function(e){e.languages.http={"request-line":{pattern:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] \d+.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )\d+.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var t,a=e.languages,n={"application/javascript":a.javascript,"application/json":a.json||a.javascript,"application/xml":a.xml,"text/xml":a.xml,"text/html":a.html,"text/css":a.css},p={"application/json":!0,"application/xml":!0};function s(e){var t=e.replace(/^[a-z]+\//,"");return"(?:"+e+"|"+("\\w+/(?:[\\w.-]+\\+)+"+t+"(?![+\\w.-])")+")"}for(var i in n)if(n[i]){t=t||{};var r=p[i]?s(i):i;t[i]={pattern:RegExp("(content-type:\\s*"+r+"[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:{rest:n[i]}}}t&&e.languages.insertBefore("http","header-name",t)}(e)}e.exports=t,t.displayName="http",t.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_http.b8cd7f9a.chunk.js.map