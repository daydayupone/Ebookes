/*pub-1|2013-08-20 10:19:31*/KSLITE.declare("tanxssp-main",["tanxssp-utils","tanxssp-config","tanxssp-params","tanxssp-request"],function(d,c){var b=d("tanxssp-utils");var g=d("tanxssp-params").Def;var e=d("tanxssp-params").pvid;var f=d("tanxssp-request").Def;var a=d("tanxssp-config");c.run=function(h){a.ready(function(){var i={};b.mix(i,g());b.mix(i,{pvid:e});b.mix(i,h);f(i)})}});KSLITE.declare("tanxssp-config",function(d,b){var c={},f={},a={};var e=false;c.mapAdType={"1":"txt","2":"pic","3":"flash","4":"video","5":"txtlink","6":"tuwen","7":"js","8":"html","9":"flashb","98":"iframehtml","99":"multiframe"};c.mapDisType={"1":"static","2":"couplet","3":"rightfloat","4":"floatwin","5":"popwin","6":"common","7":"backdisplay","8":"channel","9":"search","10":"topic","11":"video"};c.ali=["taobao.com","alimama.com","alibaba.com","alipay.com","alisoft.com","linezing.com","tanx.com","mmstat.com","etao.com","tmall.com"];c.sc="sc1";c.mc="mc1";c.kws=["wd","p","q","keyword","kw","w","key","word","query","name"];f.cache=undefined;f.win=window;f.d=document;f.maxwin=null;f._maxwin=function(h){if(h){f.maxwin=h;return}h=f.win;try{if(top!=h){if(top.location&&top.location.href){h=top}}}catch(g){}f.maxwin=h};f.ali=(function(){var h,j=f.d.domain.split("."),k=c.ali,g;if(j.length>1){g="@"+j[j.length-2]+"."+j[j.length-1];if(("@"+k.join("@")).indexOf(g)>-1){return true}}return false})();f.frm=(function(){return(top!=window)})();f.data={};f.dx=function(){return f.data[c.sc]};f.units=[];f.addUnit=function(i){var h=(new Date()).getTime();var g={};g.w=window;g.pid=i.pid;g.t=h;f.units.push(g)};f.plusUnitCount=function(j){var g=0;for(var h=0;h<f.units.length;h++){if(f.units[h].pid==j.pid){g+=1}if(g>1){return}}var k=c.sc;if(!f.data[k]){f.data[k]=1}else{f.data[k]++}};f.ref_url=null;f.getRef_url=function(){if(f.ref_url){return f.ref_url}var g=location.href;if(f.frm){if(f.win==f.maxwin){g=f.d.referrer}else{g=top.location.href}if(g===""){g=location.href}}f.ref_url=g;return g};f.r=(function(){var h="";try{h=top.document.referrer}catch(g){}if(h===null){h=""}return h})();b.c=c;b.r=f;b.ready=function(g){if(e){return g()}var h=setTimeout(function(){f._maxwin(window);e=true;g()},50);f._maxwin();clearTimeout(h);e=true;g()};b.ready(function(){})});KSLITE.declare("tanxssp-utils",["tanxssp-config"],function(c,b){var d=c("tanxssp-config").r;var a={};a.mix=KSLITE.mix;a.getScript=KSLITE.getScript;a.syncScript=function(e,f){document.write('<script charset="'+(f||"gbk")+'" src="'+e+'"><\/script>')};a.encode=function(e){return encodeURIComponent(e+"")};a.decode=function(e){return decodeURIComponent(e+"")};a.getAttr=function(f,e){return a.trim(f.getAttribute(e.toLowerCase(),2)||"")||""};a.setAttr=function(g,e,f){g.setAttribute(e.toLowerCase(),a.trim(f+""))};a.$=function(e){return document.getElementById(e)};a.tanxId=function(e){return a.$("tanx-a-"+e)};a.getCookie=function(g){var h=(" "+document.cookie).split(";"),e="";g=g?g:config.cookieKey;for(var f=0;f<h.length;f++){if(h[f].indexOf(" "+g+"=")===0){e=a.decode(h[f].split("=")[1]);break}}return e};a.css=function(f,e,g){if(g){f.style[e]=g;return g}if(window.getComputedStyle){return window.getComputedStyle(f,null).getPropertyValue(e)}else{if(f.currentStyle){return f.currentStyle[e]}}};a.each=function(j,h){if(j.length&&j.slice){for(var g=0,e=j.length;g<e;g++){h(j[g],g)}}else{for(var f in j){if(j.hasOwnProperty(f)){h(j[f],f)}}}};a.setCookie=function(e,f){e=arguments.length==1?config.cookieKey:e;document.cookie=e+"="+a.encode(f)+"; path=/"};a.trim=function(g){var e=" \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";for(var f=0;f<g.length;f++){if(e.indexOf(g.charAt(f))===-1){g=g.substring(f);break}}for(f=g.length-1;f>=0;f--){if(e.indexOf(g.charAt(f))===-1){g=g.substring(0,f+1);break}}return e.indexOf(g.charAt(0))===-1?g:""};a.show=function(e){var f=a.getAttr(e,"_tanx_old_display")||"";a.css(e,"display",f)};a.hide=function(e){if(!e){return}a.setAttr(e,"_tanx_old_display",a.css(e,"display"));a.css(e,"display","none")};if(navigator.userAgent&&navigator.userAgent.indexOf("firefox")>-1){if(typeof(HTMLElement)!="undefined"&&!HTMLElement.prototype.insertAdjacentElement){HTMLElement.prototype.insertAdjacentElement=function(f,e){switch(f.toLowerCase()){case"beforebegin":this.parentNode.insertBefore(e,this);break;case"afterbegin":this.insertBefore(e,this.firstChild);break;case"beforeend":this.appendChild(e);break;case"afterend":if(this.nextSibling){this.parentNode.insertBefore(e,this.nextSibling)}else{this.parentNode.appendChild(e)}break}};HTMLElement.prototype.insertAdjacentHTML=function(e,g){var h=this.ownerDocument.createRange();h.setStartBefore(this);var f=h.createContextualFragment(g);this.insertAdjacentElement(e,f)}}}a.showAd=function(h,e,f,g){if(e){window.setTimeout((function(){try{e.insertAdjacentHTML("beforebegin",h);if(typeof g=="function"){g()}}catch(i){e=e.parentNode;e.insertAdjacentHTML("beforebegin",h);if(typeof g=="function"){g()}}}),0)}else{if(f){window.setTimeout((function(){try{f.insertAdjacentHTML("afterbegin",h);if(typeof g=="function"){g()}}catch(i){f=f.parentNode;f.insertAdjacentHTML("afterbegin",h);if(typeof g=="function"){g()}}}),0)}else{document.write(h);if(typeof g=="function"){g()}}}};a.fixedEl=(function(){var g=navigator.userAgent.toLowerCase();var h=(g.indexOf("msie")>-1);var e=navigator.userAgent.match(/MSIE\s([^;]*)/);var k=0;var j;if(e&&e[1]){k=parseFloat(e[1])}if(h){if(k<7){j=false}else{if("BackCompat"==document.compatMode){j=false}else{j=true}}}else{j=true}var i=[];var f=[];return function(m,p){if(j){m.style.position="fixed";a.each(p,function(r,q){m.style[q]=(r||0)})}else{var o=null;var l=null;i.push(m);f.push(p);var n=function(){var x=document;var u=(x.documentElement.clientHeight||x.body.clientHeight);var r=(x.documentElement.clientHeight||x.body.clientHeight);var s;var q;var y;var w;for(var t=0,v=i.length;t<v;t++){s=i[t];w=f[t];s.style.position="absolute";q=s.offsetWidth;y=s.offsetHeight;if(w.top!==undefined){s.style.top=(parseInt(w.top,10)||0)+(x.body.scrollTop||x.documentElement.scrollTop)+"px"}if(w.left!==undefined){s.style.left=(parseInt(w.left,10)||0)+(x.body.scrollLeft||x.documentElement.scrollLeft)+"px"}if(w.right!==undefined){s.style.right=(parseInt(w.right,10)||0)-(x.body.scrollLeft||x.documentElement.scrollLeft)+"px"}if(w.bottom!==undefined){s.style.top=u-(parseInt(w.bottom,10)||0)-y+(x.body.scrollTop||x.documentElement.scrollTop)+"px"}}};a.addEvent(window,"scroll",function(){if(o){clearTimeout(o)}o=setTimeout(function(){n()},10)});a.addEvent(window,"resize",function(){if(l){clearTimeout(l)}l=setTimeout(function(){n()},10)});n()}}})();(function(n,p){if(p.addEventListener){a.addEvent=function(s,r,t){s.addEventListener(r,t,false)};a.removeEvent=function(s,r,t){s.removeEventListener(r,t,false)}}else{if(p.attachEvent){a.addEvent=function(u,t,v){var s,r;u["e"+t+v]=v;u[t+v]=function(){u["e"+t+v](window.event)};u.attachEvent("on"+t,u[t+v])};a.removeEvent=function(s,r,t){s.detachEvent("on"+r,s[r+t]);s[r+t]=null}}else{a.addEvent=function(s,r,t){s["on"+r]=t.call(s,n.event)};a.removeEvent=function(s,r,t){s["on"+r]=null}}}var i=p&&p.documentElement,j=i&&i.doScroll,f=j?"readystatechange":"DOMContentLoaded",o=false,e=[],h=!d.frm,m="complete",q=40,g=function(){o=true;var r=e.shift();while(r){try{r()}catch(s){KSLITE.log(s)}r=e.shift()}};function k(){try{j("left");g()}catch(r){KSLITE.log(r);setTimeout(k,q)}}function l(){if(/complete/.test(p.readyState)){g()}else{setTimeout(l,q)}}if(j&&h){k()}else{l()}a.domReady=function(r){if(o){r()}else{e.push(r)}}})(window,document);a.tagName=function(e){return e&&e.tagName?e.tagName.toLowerCase():null};a.findMatchEl=function(h){var f=a;try{if(h&&f.tagName(h)!="a"){for(var g=5;g>0;g--){if(h){h=h.parentNode;if(f.tagName(h)=="a"){break}}}if(f.tagName(h)!="a"){h=0}}return h}catch(j){KSLITE.log(j);return null}};a.each(a,function(f,e){b[e]=f})});KSLITE.declare("tanxssp-request",["tanxssp-utils","tanxssp-config","tanxssp-show"],function(b,d){var c=b("tanxssp-config").r;var g=b("tanxssp-utils");var h=b("tanxssp-show").show;var a;var e;if(window.null_data){e=window.null_data}window.null_data=function(){if(e){e()}};function f(n){var k="jsonp_callback_"+parseInt(Math.random()*100000,10);window[k]=function(s){h(s);var q={elConId:"tanxssp-outer-con"+s.pid,clickUrl:s.clickurl,data:s.data,height:s.height,pid:s.pid,width:s.width};var p=window;if(p.tanx_ssp_load_ad&&p.tanx_ssp_load_ad.length){for(var r=0,o=p.tanx_ssp_load_ad.length;r<o;r++){if(p.tanx_ssp_load_ad[r][s.pid]){try{p.tanx_ssp_load_ad[r][s.pid](q)}catch(t){}}}}try{delete window[k]}catch(t){}};n.cb=k;var j=n.cas;var m=["i","cb","callback","ep","userid","o","f","n","re","r","cah","caw","ccd","ctz","chl","cja","cpl","cmm","cf","cg","pvid","ac",j,"cas","cbh","cbw","dx","u","pf","k","tt"];var l=[];g.each(m,function(p,o){if(n[p]!==a){l.push(p+"="+g.encode(n[p]))}});return l.join("&")}function i(m){var k=false;for(var l=0,j=c.units.length;l<j;l++){if(m.i==c.units[l].i){k=true;break}}if(!k){c.units.push({i:m.i,sync:m.sync})}return k}d.Def=function(l){if(i(l)){return false}var k=f(l);var j="http://"+l.sd+"/ex?"+k;if(l.sync){g.syncScript(j)}else{g.getScript(j)}}});KSLITE.declare("tanxssp-params",["tanxssp-config","tanxssp-utils"],function(e,v){var j=e("tanxssp-config").r;var t=e("tanxssp-config").c;var q=e("tanxssp-utils");var d=Math;var u=j.maxwin.document;function i(){return{ctz:(-((new Date()).getTimezoneOffset()/60))}}function o(){return{chl:history.length}}function p(){var w=navigator;return{cja:(w.javaEnabled()?"1":"0"),cpl:(w.plugins?w.plugins.length:0),cmm:(w.mimeTypes?w.mimeTypes.length:0)}}function s(){var w="-1",B=navigator,y,x;if(B.plugins&&B.plugins.length){for(y=0;y<B.plugins.length;y++){if(B.plugins[y].name.indexOf("Shockwave Flash")!=-1){w=B.plugins[y].description.split("Shockwave Flash ")[1];break}}}else{if(window.ActiveXObject){for(x=10;x>=2;x--){try{var z=new Function("return new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+x+"');");if(z){w=x+".0";break}}catch(A){}}}}if(w!="-1"){w=w.substring(0,w.indexOf(".")+2)}return{cf:w}}function g(){var x,w=1,y=-1;if(u){x=u.body;w=x.clientHeight;y=x.clientWidth}return{cbh:w,cbw:y}}function a(){var y=window.screen,w=0,C=0,x=0,A=0,B=0;try{w=y.width;C=y.height;x=y.availHeight;A=y.availWidth;B=y.colorDepth}catch(z){}return{re:w+"x"+C,cah:x,caw:A,ccd:B}}function h(){var w="";try{w=u.title}catch(x){}return{tt:w}}function f(){var x="",w="",z,A,D,E,C=location,y="";function B(H,J){var I="",F=1,G;F=Math.floor(H.length/J);if(F==1){I=H.substr(0,J)}else{for(G=0;G<J;G++){I+=H.substr(G*F,1)}}return I}if(j.ali){z=(" "+document.cookie).split(";");for(A=0;A<z.length;A++){if(z[A].indexOf(" cna=")===0){w=z[A].substr(5,24);break}}}if(w===""){cu=(C.search.length>9)?C.search:((C.pathname.length>9)?C.pathname:C.href).substr(1);z=document.cookie.split(";");for(A=0;A<z.length;A++){if(z[A].split("=").length>1){y+=z[A].split("=")[1]}}if(y.length<16){y+="0123456789abcdef"}w=B(cu,8)+B(y,16)}for(A=1;A<=32;A++){D=d.floor(d.random()*16);if(w&&A<=w.length){E=w.charCodeAt(A-1);D=(D+E)%16}x+=D.toString(16);if(A===1&&x<"a"){x="a"}}return{cg:x}}function m(){var w=d.floor(d.random()*10000)+10001;try{if(j.sid){w=j.sid}else{w=w-10001;j.sid=w}}catch(x){}return{ac:w}}function b(){var B=0,E=16,C=0,y,x,z,F,A,D=t[0]||4973;for(z=1;z<=E;z++){y=d.random();x=d.random();if((d.pow(y,2)+d.pow(x,2))<=1){B++}if(z<=12){C=C+y}}F="pr"+String.fromCharCode(97+B);A=(d.round(C*D)|((u.body?u.body.clientWidth:0)<<16));var w={};w[F]=A;w.cas=F;return w}function l(){var w=j.data[t.sc]||1;return{dx:(w?w:"")}}function k(){return{u:j.getRef_url()}}function n(){return{r:j.r}}function r(x){var z=t.kws,y,A,w;if(x){for(y=0;y<z.length;y++){A=new RegExp("[^1-9a-zA-Z]"+z[y]+"=([^&]*)");w=x.match(A);if(w){A=new RegExp("^[0-9]*$");if(w[1].match(A)===null){return w[1]}}}}return""}function c(){var w=r(j.u);if(w===""&&j.r){w=r(j.r)}return{k:w}}v.pvid=f().cg;v.Def=function(){var w={};q.each([i(),o(),p(),s(),g(),a(),h(),f(),m(),b(),l(),k(),n(),c()],function(y,x){q.mix(w,y)});return w}});KSLITE.declare("tanxssp-acookie",function(c,a){var b=false;function d(){var e=navigator.userAgent.toLowerCase();var f=(e.indexOf("msie")>-1);var j;var i=document;var h=location.pathname.split("/");h[h.length-1]="";var g=encodeURIComponent(h.join("/"));if(f){j=i.getElementById("_tanxssp_userdata");if(!j){j=i.createElement("input");j.type="hidden";i.body.insertBefore(j,i.body.firstChild);j.addBehavior("#default#userData")}return{setkey:function(m,l){try{j.load(g);j.setAttribute(m,l);j.save(g)}catch(n){return false}return true},getkey:function(l){try{j.load(g)}catch(m){return}return j.getAttribute(l)}}}else{if(window.localStorage){j=window.localStorage;return{setkey:function(m,l){try{j.setItem(m,l)}catch(n){return false}return true},getkey:function(l){try{return j.getItem(l)}catch(m){return}}}}else{return{setkey:function(){},getkey:function(){}}}}}a.Def=function(g){if(!b){b=true;if(location.host.indexOf("www.taobao.com")<0){var i=d();var f="tanxssp_acookie_expires";var h=i.getkey(f);if(h&&(h>(new Date().getTime()))){return false}i.setkey(f,new Date().getTime()+60*60*1000);var j=document;var e=j.createElement("iframe");e.style.cssText="width:0;height:0;display:none";e.src="http://cdn.tanx.com/t/acookie/acbeacon2.html";j.body.insertBefore(e,j.body.firstChild)}}}});KSLITE.declare("tanxssp-cookiemap",["tanxssp-config"],function(b,a){var c=b("tanxssp-config").r;a.Def=function(d){if(!c.units[0]||c.units[0].i!==d){return 0}var e=Math.floor(Math.random()*100+1);if(e==15||e==80){(new Image()).src="http://cm.g.doubleclick.net/pixel?google_cm&google_nid=taobao"}}});KSLITE.declare("tanxssp-show",["tanxssp-display","tanxssp-acookie","tanxssp-feedback"],function(d,b){var e=d("tanxssp-display").Def;var c=d("tanxssp-acookie").Def;var a=d("tanxssp-feedback").Def;b.show=function(f){c(f);if(f.stdwidth&&f.stdheight&&(f.stdwidth!=f.width||f.stdheight!=f.height)){f.adSpaceWidth=f.width;f.adSpaceHeight=f.height;if(f.stdheight<f.height){f.height=f.stdheight}if(f.stdwidth<f.width){f.width=f.stdwidth}f.paddingLeft=(f.adSpaceWidth-f.width)/2;f.paddingTop=(f.adSpaceHeight-f.height)/2;f.adSpaceWidth-=(f.paddingLeft+2);f.adSpaceHeight-=(f.paddingTop+2)}e(f);a(f)}});KSLITE.declare("tanxssp-feedback",function(b,a){a.Def=function(f){if(f.feedback!==undefined&&f.feedback!==""){var e=window["tanxssp-feedback-cache"]||(window["tanxssp-feedback-cache"]={});var d=new Image();e[f.pid]=d;d.onload=d.onerror=function(){d.onload=d.onerror=null;d=null;delete e[f.pid]};var c="?";if(f.feedback.indexOf("?")>-1){c="&"}d.src=f.feedback+c+"tanxssp_t="+parseInt(Math.random()*100000,10)}}});KSLITE.declare("tanxssp-icon",["tanxssp-utils"],function(c,b){var a=c("tanxssp-utils");b.show=function(g){var k=function(l){return l+g.pid};var f=a.$(k("icon"));var i=a.$(k("icon_small"));var e=a.$(k("icon_big"));if(!f||!i||!e){return false}var h=null;var j="s";function d(){i.style.display="block";e.style.display="none";f.style.width="26px";j="s"}f.onmouseover=function(){if(h){window.clearTimeout(h)}if("s"===j){i.style.display="none";e.style.display="block";f.style.width="110px";j="b"}};f.onmouseout=function(){if("b"===j){h=window.setTimeout(d,200)}}};b.tmpl=function(g,d){if(g.icon!=="1"){return d}var h=function(f){return f+g.pid};var e='<a id="'+h("icon")+'" title="&#25105;&#20063;&#35201;&#30003;&#35831;&#27249;&#31383;&#25512;&#24191;" target="_blank" href="http://c.alimama.com" style="width:26px;height:17px;right:0px;bottom:0px;display:block;position:absolute;cursor:pointer;z-index:250;">   <span id="'+h("icon_small")+"\" style=\"float:none;width:26px;display:block;height:17px;background-repeat:no-repeat;background-image: url('http://img02.taobaocdn.com/tps/i2/T1oY3VXmNbXXXb8qDc-26-18.png');*background-image:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://img02.taobaocdn.com/tps/i2/T1oY3VXmNbXXXb8qDc-26-18.png');\"></span>   <span id=\""+h("icon_big")+"\" style=\"float:none;width:110px;height:17px;display: none;background-repeat:no-repeat;background-image: url('http://img03.taobaocdn.com/tps/i3/T1dt7VXiRaXXbd25o5-110-18.png');*background-image:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://img03.taobaocdn.com/tps/i3/T1dt7VXiRaXXbd25o5-110-18.png');\"></span></a>";return'<div id="tanxssp_con_'+g.pid+'" style="display:inline-block;position:relative;width:'+g.width+"px;height:"+g.height+'px;*display:inline;*zoom:1">'+d+e+"</div>"}});KSLITE.declare("tanxssp-otherwin",["tanxssp-utils"],function(d,b){var a=d("tanxssp-utils");var f="http://cdn.tanx.com/t/tanxssp.js";var e="http://cdn.tanx.com/t/tanxssp/main.js?_t=20130820.js";var c="1";b.insertScript=function(i){var g=i.document.getElementsByTagName("HEAD")[0];var h=i.document.createElement("script");h.type="text/javascript";h.charset="gbk";h.src=f;function j(){var k=i.document.createElement("script");k.type="text/javascript";k.charset="gbk";k.src=e;g.insertBefore(k,g.lastChild)}h.onload=j;h.onreadystatechange=function(){if(h.readyState&&(h.readyState=="loaded"||h.readyState=="complete")){j()}};g.insertBefore(h,g.lastChild)};b.writeData=function(j){var g=[];for(var h in j){if(j.hasOwnProperty(h)){if(h=="distype"){g.push('"'+h+'":"'+c+'"')}else{if(h=="data"){g.push('"'+h+'":"'+j[h].replace(/"/g,'\\"')+'"')}else{g.push('"'+h+'":"'+j[h]+'"')}}}}g="{"+g.join(",")+"}";var i="";i+="<html>";i+="<head>";i+='<style type="text/css">*{margin:0;padding:0}</style>';i+='<script type="text/javascript">';i+="   window.tanx_ssp_temp_show_obj = "+g+";";i+="<\/script>";i+="</head>";i+="<body>";i+='<a style="none" id="tanx-a-'+j.pid+'" style="display:none"></a>';i+="</body>";i+="</html>";return i}});KSLITE.declare("tanxssp-display",["tanxssp-template","tanxssp-utils","tanxssp-config","tanxssp-icon","tanxssp-otherwin","tanxssp-cookiemap"],function(a,c){var m=a("tanxssp-template").Def;var j=a("tanxssp-utils");var l=a("tanxssp-config").c.mapAdType;var b=a("tanxssp-config").r;var g=a("tanxssp-config").c.mapDisType;var i=a("tanxssp-icon");var o=a("tanxssp-otherwin");var f=a("tanxssp-cookiemap").Def;var e={};function d(r,q){if(q.insertAdjacentHTML){q.insertAdjacentHTML("beforebegin",r)}else{var p=document.createElement("div");p.innerHTML=r;q.parentNode.insertBefore(p.getElementsByTagName("iframe")[0],q)}}function n(t,p,w,s){var v=j.tanxId(t);var u="tanx_frameanchor_"+t;var q=0;var r='<!doctype html><html><head><meta charset=gbk /></head><body style="margin:0px;padding:0px">'+s+"</body></html>";if(j.$(u)){(function x(D){if(D>20){return false}var A="tanxssp-outer-iframe"+t;var B='<iframe id="'+A+'" width="'+p+'" height="'+w+'" style="display:none"';var z=" src=\"javascript:void((function(){try{var d=document;d.open();d.domain='"+document.domain+"';d.write('');d.close();}catch(e){}})())\"";var y=' border="0" frameborder="0" scrolling="no" marginwidth="0" allowTransparency="true" marginheight="0"  style="border: 0pt none;"></iframe>';var E=B;if(navigator.userAgent.toLowerCase().indexOf("msie")>-1&&document.domain!=location.hostname){E+=z}E+=y;var C=j.$(u);d(E,C);setTimeout(function(){try{var H=document.getElementById(A);var G=H.contentWindow.document;G.open("text/html","replace");G.write(r);setTimeout(function(){G.close()},250);H.style.display="";if(H.style.display=="none"){setTimeout(function(){H.style.display=""},200)}}catch(F){H.parentNode.removeChild(H);E=B+z+y;d(E,C);if(!D){D=1}else{D++}x(D)}},20)})()}}function k(r,q,p){this.frameCount=q;this.clickurl=p;this.pid=r;this.cur=0;this.previous=0;this.init()}j.mix(k.prototype,{interval:2000,timer:null,isAuto:true,init:function(){this.show(0);this.start();this.bindEvents()},stopBubble:function(p){p=p?p:window.event;if(p.stopPropagation){p.stopPropagation()}else{p.cancelBubble=true}},bindEvents:function(){var q=j.$("tanx-sw-wrap-"+this.pid);var r=this;q.onmouseover=function(s){r.isAuto=false;j.$("tanx-sw-nav-"+r.pid).style.display="block";r.stopBubble(s)};q.onmouseout=function(s){r.isAuto=true;j.$("tanx-sw-nav-"+r.pid).style.display="none";r.stopBubble(s)};for(var p=0;p<this.frameCount;p++){(function(t){var s=j.$("tanx-sw-nav-"+r.pid+t);var u=j.$("tanx-sw-block-"+r.pid+t);s.onmouseover=function(v){r.isAuto=false;r.show(t)};s.onmouseout=function(v){r.isAuto=true};u.onclick=function(A){A=window.event||A;var z=A.srcElement||A.target;try{if(z.tagName.toUpperCase()!="A"){for(var x=5;x>0;x--){z=z.parentNode;if(z.tagName.toUpperCase()=="A"){break}}if(z.tagName.toUpperCase()!="A"){z=0}}if(typeof z.href=="undefined"){z=0}if(z){if(z.tagName.toUpperCase()=="A"&&z.getAttribute("href",2).replace(/(^\s*)/g,"").indexOf("http")!==0){z=0}var y=(z.getAttribute("href",2).replace(/(^\s*)/g,"").match(/http:\/\/([^\/]+)/i)||["",""])[1];new Image().src=decodeURIComponent(r.clickurl)+"&d_r="+y+"_"+(new Date()).getTime().toString().substr(9)}r.stopBubble(A)}catch(v){}}})(p)}},stop:function(){this.isAuto=false},start:function(){var p=this;this.timer=setInterval(function(){if(!p.isAuto){return false}var q=p.cur+1;if(q>=p.frameCount){q=0}p.show(q)},this.interval)},show:function(p){try{this.cur=p;this.hide(this.previous);j.$("tanx-sw-block-"+this.pid+p).style.display="block";j.$("tanx-sw-nav-"+this.pid+p).className="tanx-sw-nav-cur";this.previous=this.cur}catch(q){}},hide:function(p){try{j.$("tanx-sw-block-"+this.pid+p).style.display="none";j.$("tanx-sw-nav-"+this.pid+p).className=""}catch(q){}}});e.flash=function(s,p){var t=j.tanxId(s.pid);var q="<a style='display:none !important;' id='tanx_frameanchor_"+s.pid+"'></a>";var r=m(s);j.showAd(q,t,null,function(){n(s.pid,s.width,s.height,r);if(p){p()}})};e.iframehtml=function(q,p){var r=j.tanxId(q.pid);j.showAd(m(q),r,null,function(){n(q.pid,q.width,q.height,q.data);if(p){p()}})};e.multiframe=function(s,r){var w=s;var q="#tanx-sw-nav-"+w.pid+" span";var z="text-decoration:underline;color:#F60;cursor:pointer;margin-left:3px;width:18px;height:18px;background:white;float:left;font-size:13px;line-height:18px;overflow:visible;text-align:center;opacity:.6;filter:alpha(opacity=60);border:1px solid #D8D8D8;margin-left:-1px;font-family:tahoma,arial;";var u="#tanx-sw-nav-"+w.pid+" span.tanx-sw-nav-cur";var t="background:#F60;color:white;font-weight:bold;opacity:1;filter:alpha(opacity=100);z-index:2;position:relative;";var y=document;if(y.createStyleSheet){var v=y.createStyleSheet();v.addRule(q,z);v.addRule(u,t)}else{var p=y.createElement("style");p.innerHTML=q+"{"+z+"}"+u+"{"+t+"}";p.setAttribute("type","text/css");var x=y.getElementsByTagName("head")[0];x.insertBefore(p,x.firstChild)}var A=j.tanxId(w.pid);j.showAd(m(s),A,null,function(){new k(s.pid,s.data.split("|+|").length||0,s.clickurl);if(r){r()}})};var h={};h.popwin=(function(){var p=false;return function(u){if(p){return false}var x=document;var w=x.createElement("div");var s=j.$("tanxssp-outer-con"+u.pid);if(!s){s=j.$("tanxssp-outer-iframe"+u.pid)}if(!s){return false}w.style.cssText="position:absolute;display:block;z-index:999999;height:0px;overflow:hidden;right:0";var r=x.createElement("div");r.style.cssText="height:16px;font-size:14px;float:right;width:44px;cursor:pointer;position:absolute;top:-16px;right:0";r.appendChild((function(){var z=document.createElement("img");z.alt="Close";z.src="http://img.alimama.cn/p/close1.gif";z.onmouseout='this.src="http://img.alimama.cn/p/close1.gif"';z.onmouseover='this.src="http://img.alimama.cn/p/close2.gif"';return z})());r.onclick=function(){j.hide(w)};w.appendChild(r);w.appendChild(s);var v=document.body;v.insertBefore(w,v.firstChild);p=true;var q=0;var t;var y=parseInt(u.height,10);t=setInterval(function(){var z=(x.documentElement.clientHeight||x.body.clientHeight);var A=(x.documentElement.scrollTop||x.body.scrollTop);q+=30;if(q>=y){q=y;clearInterval(t);w.style.overflow="visible";setTimeout(function(){j.fixedEl(w,{top:"auto",right:"0px",bottom:"0px"})},150)}w.style.top=(z+A-q)+"px";w.style.height=q+"px"},150)}})();h.backdisplay=function(s,z,y){var p=s.data;if(s.width<254){s.width=254}if(s.width===""){s.width=760}if(s.height===""){s.height=480}var q="width="+s.width+",height="+s.height+",toolbar=no,location=no,directories=no,status=yes,resizable=no,scrollbars=no";var w=o.writeData(s);var x=function(){var C;if(!!(window.attachEvent&&!window.opera)){try{var D=document.getElementById("tanx_popup_try")||document.createElement("iframe");D.id="tanx_popup_try";D.style.display="none";document.body.insertBefore(D,document.body.childNodes[0]);document.getElementById("tanx_popup_try").contentWindow.document.write(".");document.body.removeChild(document.getElementById("tanx_popup_try"));C=window.open("about:blank","_blank",q);D=null}catch(B){C=window.open('javascript:void((function(){var d=document;d.open();d.domain="'+document.domain+'";d.write("");d.close();})())',"_blank",q)}}else{C=window.open("about:blank","_blank",q)}if(navigator.userAgent.toLowerCase().indexOf("firefox")>-1){C.HTMLElement.prototype.insertAdjacentElement=function(E,F){switch(E.toLowerCase()){case"beforebegin":this.parentNode.insertBefore(F,this);break;case"afterbegin":this.insertBefore(F,this.firstChild);break;case"beforeend":this.appendChild(F);break;case"afterend":if(this.nextSibling){this.parentNode.insertBefore(F,this.nextSibling)}else{this.parentNode.appendChild(F)}break}};C.HTMLElement.prototype.insertAdjacentHTML=function(F,H){var G=this.ownerDocument.createRange();G.setStartBefore(this);var E=G.createContextualFragment(H);this.insertAdjacentElement(F,E)}}C.blur();try{C.opener.focus()}catch(A){}if(z){C.location=z}else{var u=C.document;u.open("text/html","replace");u.write(w);u.close();o.insertScript(C)}};var t=function(){j.removeEvent(document,"click",t);try{x()}catch(u){j.domReady(v)}};var v=function(){j.addEvent(document,"click",t)};try{v()}catch(r){setTimeout(function(){v()},2000)}};h.couplet=(function(){return function(H,u){var I=document;var s=Math.min(I.documentElement.clientHeight,I.body.clientHeight);var F=Math.min(I.documentElement.clientWidth,I.body.clientWidth);var D=o.writeData(H);var G={},E;if(H.webwidth){E=((F-parseInt(H.webwidth,10))/2-H.width)}E=(E<0||E===undefined)?5:E;G.pos={top:(s<301?"80":"30")+"px"};var t=I.createElement("div");var r=I.createElement("div");t.style.cssText="position:absolute;display:block;z-index:999999;left:"+E+"px";r.style.cssText="position:absolute;display:block;z-index:999999;right:"+E+"px";var z="tanx_displayframe_"+H.pid+"_l";var p="tanx_displayframe_"+H.pid+"_r";var A=H.height;var C=H.width;function B(N){var L='<iframe id="'+N+'" width="'+C+'" height="'+A+'"';var K=" src=\"javascript:void((function(){var d=document;d.open();d.domain='"+document.domain+"';d.write('');d.close();})())\"";var J=' border="0" frameborder="0" scrolling="no" marginwidth="0" allowTransparency="true" marginheight="0"  style="border: 0pt none;"></iframe>';var M=L;if(navigator.userAgent.toLowerCase().indexOf("msie")>-1&&document.domain!=location.hostname){M+=K}M+=J;return M}t.innerHTML=B(z);r.innerHTML=B(p);var v=I.createElement("div");v.style.cssText="height:16px;font-size:14px;float:right;width:44px;cursor:pointer;position:absolute;top:-16px;right:0";v.appendChild((function(){var J=document.createElement("img");J.alt="Close";J.src="http://img.alimama.cn/p/close1.gif";J.onmouseout='this.src="http://img.alimama.cn/p/close1.gif"';J.onmouseover='this.src="http://img.alimama.cn/p/close2.gif"';return J})());var w=I.createElement("div");w.style.cssText="height:16px;font-size:14px;froat:right;width:44px;cursor:pointer;position:absolute;top:-16px;right:0";w.appendChild((function(){var J=document.createElement("img");J.alt="close";J.src="http://img.alimama.cn/p/close1.gif";J.onmouseout='this.src="http://img.alimama.cn/p/close1.gif"';J.onmouseover='this.src="http://img.alimama.cn/p/close2.gif"';return J})());v.onclick=w.onclick=function(){j.hide(t);j.hide(r)};t.appendChild(v);r.appendChild(w);var x=document.body;x.insertBefore(t,x.firstChild);x.insertBefore(r,x.firstChild);j.fixedEl(t,G.pos);j.fixedEl(r,G.pos);var y=0;(function q(){if(y>10){return false}y++;var L;var O;try{L=document.getElementById(z);var M=L.contentWindow;var J=M.document;J.open("text/html","replace");J.write(D);J.close();O=document.getElementById(p);var K=O.contentWindow;var Q=K.document;Q.open("text/html","replace");Q.write(D);Q.close();o.insertScript(M);o.insertScript(K)}catch(P){L=document.getElementById(z);O=document.getElementById(p);var N="javascript:void((function(){var d=document;d.open();d.domain='"+document.domain+"';d.write('');d.close();})())";L.src=N;O.src=N;q()}})()}})();c.Def=function(u){var w=j.tanxId(u.pid);var q=l[u.adboardtype];var s=g[u.distype];f(u.pid);var r=false;if(q=="html"&&s=="static"){for(var t=0,p=b.units.length;t<p;t++){if(b.units[t].i===u.pid){r=b.units[t].sync;break}}if(r){document.write(m(u));try{setTimeout(function(){i.show(u)},0)}catch(v){}}else{j.showAd(m(u),w,null,function(){setTimeout(function(){i.show(u)},0)})}return false}if(s==="backdisplay"){h[s](u);return false}if(s==="couplet"){h[s](u);return false}if(!e[q]){j.showAd(m(u),w,null,function(){setTimeout(function(){i.show(u)},0)})}else{e[q](u,function(){setTimeout(function(){i.show(u)},0)})}if(h[s]){setTimeout(function(){h[s](u)},0)}}});KSLITE.declare("tanxssp-template",["tanxssp-utils","tanxssp-config","tanxssp-icon"],function(a,c){var h=a("tanxssp-utils");var i=a("tanxssp-config").c.mapAdType;var e=a("tanxssp-config").c.mapDisType;var g=a("tanxssp-icon").tmpl;var d={};d.txt={tmpl:function(k){return'<a href="'+k.clickurl+'" target="_blank">'+k.data+"</a>"}};d.txtlink=d.txt;d.pic={tmpl:function(k){return'<a href="'+k.clickurl+'" target="_blank"><img border=0 src="'+k.data+'" width="'+k.width+'px" height="'+k.height+'px"/></a>'}};d.tuwen={tmpl:function(l){var k="pid="+l.pid;if(l.data.indexOf("?")==-1){k="?"+k}else{k="&"+k}return'<iframe src="'+l.data+k+'" width="'+l.width+'px" height="'+l.height+'px" border="0" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowTransparency="true"></iframe>'}};d.flash={tmpl:function(m){var k='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="'+m.width+'px" height="'+m.height+'px" align="middle">   <param name="allowScriptAccess" value="'+(m.bannermaker=="1"?"always":"never")+'" />'+(m.fvs!==""?'<param name="flashvars" value="'+m.fvs+'" />':"")+'   <param name="movie" value="'+m.data+'" />   <param name="wmode" value="transparent" />   <param name="quality" value="high" />   <param name="bgcolor" value="#ffffff" />   <embed src="'+m.data+'" quality="high" bgcolor="#ffffff" width="'+m.width+'" height="'+m.height+'" '+(m.fvs!==""?'flashvars="'+m.fvs+'" ':"")+'      align="middle" allowScriptAccess="'+(m.bannermaker==="1"?"always":"never")+'" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>';var l='<!doctype html><html><head></head>  <body style="margin:0px;padding:0px">       <div style="float:left;z-index:100;position:absolute;width:'+m.width+"px;height:"+m.height+'px;">'+k+'       </div>       <div style="float:left;overflow:hidden;z-index:1000;position:absolute;left:0;top:0;width:'+m.width+"px;height:"+m.height+'px;">       <a style="position:absolute;height:100%;width:100%;overflow:hidden;font-size:900px;" target="_blank" href="'+m.clickurl+'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></div> </body></html>';return l}};d.flashb={tmpl:function(l){if(l.fvs){l.fvs=l.fvs+"&clickTAG="+h.encode(l.clickurl)}else{l.fvs="clickTAG="+h.encode(l.clickurl)}var k='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="'+l.width+'px" height="'+l.height+'px" align="middle">    <param name="allowScriptAccess" value="'+(l.bannermaker==="1"?"always":"never")+'" />    <param name="flashvars" value="'+l.fvs+'" />    <param name="movie" value="'+l.data+'" />    <param name="wmode" value="transparent" />    <param name="quality" value="high" />    <param name="bgcolor" value="#ffffff" />    <embed src="'+l.data+'" quality="high" bgcolor="#ffffff" width="'+l.width+'" height="'+l.height+'" flashvars="'+l.fvs+'" align="middle" allowScriptAccess="'+(l.bannermaker==="1"?"always":"never")+'" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>';return k}};d.iframehtml={tmpl:function(k){return"<a style='display:none !important;' id='tanx_frameanchor_"+k.pid+"'></a>"}};d.multiframe={tmpl:function(t){var q=t.data.split("|+|");var k=q.length;var n="";var m="";var p='<div id="tanx-sw-nav-'+t.pid+'" style="display:none;position:absolute;bottom:20px;right:10px;">{nav}</div>';var r='<div><div id="tanx-sw-wrap-'+t.pid+'" style="display:block;position:relative;width:'+t.width+"px;height:"+t.height+'px; border:0;margin:0;">{block}</div></div>';for(var l=0;l<k;l++){n+='<div id="tanx-sw-block-'+t.pid+l+'" style="display:'+(l===0?"block":"none")+';position:absolute;top:0;left:0;">'+q[l]+"</div>";m+='<span id="tanx-sw-nav-'+t.pid+l+'" style="display:block;text-decoration:none">'+(l+1)+"</span>"}p=p.replace(/{nav}/gi,m);r=r.replace(/{block}/gi,[n,p].join(""));return r}};d.html={tmpl:function(k){return k.data}};function f(p,n){var l=i[p.adboardtype];var m=e[p.distype];if(l=="html"&&m=="static"){return n}if(p.adSpaceWidth&&p.adSpaceHeight){return'<ins style="display:inline-block;padding:0;margin:0;border:1px solid #e5e5e5;width:'+p.adSpaceWidth+"px;height:"+p.adSpaceHeight+"px;*zoom:1;*display:inline;background:#F3F3F3;padding-left:"+p.paddingLeft+"px;padding-top:"+p.paddingTop+'px" id="tanxssp-outer-con'+p.pid+'">'+n+"</ins>"}var o;var k;if(parseInt(p.width,10)<=1){o="auto"}else{o=p.width+"px"}if(parseInt(p.height,10)<=1){k="auto"}else{k=p.height+"px"}return'<ins style="display:inline-block;padding:0;margin:0;width:'+o+";height:"+k+';*zoom:1;*display:inline" id="tanxssp-outer-con'+p.pid+'">'+n+"</ins>"}var j="http://img.alimama.cn/defboards/domainbind/2/";var b={};h.each(["760x90","468x60","250x60","728x90","950x90","658x60","120x600","336x280","300x250","290x200","120x60","100x100","120x240","160x600","180x250","250x300","360x190","250x250","200x200"],function(k,l){b[k]=j+k+".jpg"});c.Def=function(l){if(l.unregist==="1"){l.clickurl="http://a.alimama.cn";if(b[l.width+"x"+l.height]){l.data=b[l.width+"x"+l.height]}else{l.data="http://img.alimama.cn/defboards/domainbind/2/200x200.jpg"}l.distype="1";l.adboardtype="2"}var k=i[l.adboardtype];if(l.width==="0"){l.width="auto"}if(l.height==="0"){l.height="auto"}return f(l,g(l,d[k].tmpl(l)))}});(function(){if(window.tanx_ssp_temp_adobj){var a=window.tanx_ssp_temp_adobj;try{window.tanx_ssp_temp_adobj=null;delete window.tanx_ssp_temp_adobj}catch(c){}KSLITE.provide(["tanxssp-main"],function(d){d("tanxssp-main").run(a)})}if(window.tanx_ssp_temp_show_obj){var b=window.tanx_ssp_temp_show_obj;try{window.tanx_ssp_temp_show_obj=null;delete window.tanx_ssp_temp_show_obj}catch(c){}try{KSLITE.provide(["tanxssp-display"],function(d){d("tanxssp-display").Def(b)})}catch(c){}}})();