/*pub-1|2013-07-24 15:54:31*/KSLITE.declare("tkapi-plugin",["tkapi-util","tkapi-config","tkapi-replacebox"],function(c,h){var g=KSLITE;var l=c("tkapi-config");var k=c("tkapi-util");var e=c("tkapi-replacebox");var a;var b={};b.tklink=function(r,q,p){if(!g.iPO(q)){return null}var o,n=document.createElement("a");q.tc=this.getPluginName();n.href=q.href;n.appendChild(document.createTextNode(r));for(o in q){if(q.hasOwnProperty(o)&&o!="href"){n.setAttribute("data-"+o,q[o])}}if(p){if(!a){a=document.createElement("div")}a.innerHTML="";a.appendChild(n);return a.innerHTML}else{return n}};b.showReplaceBox=e.show;var m;b.getElementsFor=function(p){var o={};var r=[];m=m||document.getElementsByTagName("*");var n;for(var q=0;q<m.length;q++){n=m[q].getAttribute("data-plugin");if(n){if(n.indexOf(",")){n=n.split(",")[0]}if(!o[n]){o[n]=[]}o[n].push(m[q])}}return o[p]||[]};b.util=k;var j={};var d=function(o){if(j[o]){return j[o]}var n=function(){};n.prototype=b;var p=new n();p.getPluginName=function(){return o};j[o]=p;return p};var f=h.taskQueue={num:0,queue:[],waiting:0,onLoad:function(){var n=f;var o=0;var p=n.queue[n.waiting];if(p){n.queue[n.waiting]=0;if(p===-1||!p.Def){n.waiting++;return setTimeout(n.onLoad)}o=setTimeout(function(){n.waiting++;o=0;setTimeout(n.onLoad)},2000);p.Def(function(q){if(o===0){return}n.waiting++;clearTimeout(o);setTimeout(n.onLoad)})}},addTask:function(p,n){var r=this.num++;var o=this;var q=0;var s=function(t){clearTimeout(q);o.queue[r]=(t===undefined)?-1:t;o.onLoad()};q=setTimeout(s,10000);n(s,p)}};var i=h.requireFor=function(n){return function(o){if(o=="tkapi-plugin-api"){return d(n)}else{return g.require(o)}}};h.Def=function(n){if(!n){return}if(!g.iA(n)||!n.length){return}var p,q;for(var o=0;o<n.length;o++){p=n[o];f.addTask(p.name,function(s,r){var t="tkapi-plugin-"+r;g._lM({name:t},function(){var v=i(r);var w=g.Env.mods[t];var u=g.require(w.name);w.fn({require:v},u,g._ns(w.name));w.status=4;s(u)})})}}});