Array.prototype.del=function(g){g.sort();for(var q=this.concat([]),c=g.length-1;0<=c;c--)q=q.slice(0,g[c]).concat(q.slice(g[c]+1));return q};try{HTMLImageElement.prototype.loadOnce=function(g){var q=0;this.onload=function(){q||g.call(this,null);q++}}}catch(e$$10){window={}}
(function(g){function q(){this.readyState&&(this.readyState=0,this.dorsyWorker.startWorker())}var c={lib:[],definedPs:{},init:function(){this.require("config")},module:function(a,b){function e(a){d++;var l=h[d];d==h.length-1?a[l]=b.call(null,c):a[l]?e(a[l]):e(a[l]={})}var h=[a];/\./g.test(a)&&(h=a.split("."));var d=-1,c=this;e(this.lib)},require:function(a){var b=this,e=document.createElement("script");document.body.appendChild(e);e.src="./js/module/"+a+".js";e.onload=e.onerror=function(a){b.handlerror(a)}},
handlerror:function(){},destroySelf:function(a){delete window[g];throw Error(a);},reflect:function(a,b,e){var h=this.lib.config.getModuleName(a),a=h.spaceName,h=h.actName;switch(a){case "Filter":case "Alteration":return this.lib[a][h].process(b,e);case "ComEffect":return this.lib[h].process(b,e);default:this.destroySelf("AI_ERROR: ")}},reflectEasy:function(a){var b=this.lib.config.getEasyFun(a).actName;return this.definedPs[a]||this.lib.easy.getFun(b)},add:function(a,b,e,h,d,c,i,l){return this.lib.addLayer.add(a,
b,e,h,d,c,i,l)},worker:function(){},applyMatrix:function(){},tools:function(a,b){var e=Array.prototype.shift.call(b);if(this.lib.Tools[e])return this.lib.Tools[e].process(a,b);throw Error("AI_ERROR: \u4e0d\u5b58\u5728\u7684\u5de5\u5177\u65b9\u6cd5_"+e);},definePs:function(a,b){this.definedPs[a]=b}};window[g]=function(a,b,e){var h=this;if(this instanceof window[g]){this.startTime=+new Date;var d=document.createElement("canvas"),f=d.getContext("2d");isNaN(a)?"string"==typeof a?(b=new Image,b.onload=
function(){d.width=parseInt(this.width);d.height=parseInt(this.height);f.drawImage(this,0,0,this.width,this.height)},b.src=a):(d.width=parseInt(a.width),d.height=parseInt(a.height),b=getComputedStyle(a),imgWidth=parseInt(b.getPropertyValue("width")),imgHeight=parseInt(b.getPropertyValue("height")),isNaN(imgWidth)?f.drawImage(a,0,0):f.drawImage(a,0,0,imgWidth,imgHeight)):(d.width=a,d.height=b,f.fillStyle=e||"#fff",f.fillRect(0,0,a,b));this.canvas=d;this.context=f;this.imgData=f.getImageData(0,0,d.width,
d.height);this.name=g+"_"+Math.random();this.canvas.id=this.name;this.layers=[];a=document.createElement("canvas");a.width=d.width;a.height=d.height;this.ctxCanvas=a;this.ctxContext=d.getContext("2d");this.width=this.canvas.width;this.height=this.canvas.height;this.useWorker=c.useWorker;this.readyState=1;this.useWorker&&(this.dorsyWorker=c.lib.dorsyWorker(this));if(c.lib.Tools)for(var i in c.lib.Tools)this.Tools[i]=function(a){return function(b){return h.Tools(a,b)}}(i)}else return new window[g](a,
b,e)};window[g].module=function(a,b){c.module(a,b)};window[g].dorsyMath=function(){return c.lib.dorsyMath};window[g].setName=function(a){c.name=a||"alloyimage.js"};window[g].getConfig=function(){return c.lib.config.getConfig()};window[g].define=function(a,b){c.definePs(a,b)};window[g].useWorker=function(a){if(window.Worker){a=a||"";/[\/\\]$/.test(a)&&(a+=c.name);""==a&&(a="alloyimage.js");c.useWorker=1;c.path=a;var b=new XMLHttpRequest;b.onreadystatechange=function(){4==b.readyState&&"404"==b.status&&
c.destroySelf("AI_ERROR\uff1a\u4f7f\u7528worker\u65f6\uff0cai\u6587\u4ef6\u8def\u5f84\u6307\u5b9a\u9519\u8bef\nAI_ERROR: error occured while using web worker since indicate the wrong path of file ai")};b.open("GET",a,!1);b.send()}else this.useWorker=0,console.log("AI_WARNING: \u6d4f\u89c8\u5668\u4e0d\u652f\u6301web worker, \u81ea\u52a8\u5207\u6362\u4e3a\u5355\u7ebf\u7a0b\nAI_WARNING: the brower doesn't support Web Worker")};onmessage=function(a){var a=a.data,b;"act"==a[0]?b=c.reflect(a[1],a[2],a[3]):
"add"==a[0]&&(b=c.add.apply(c,a[1]));postMessage(b)};window[g].prototype={act:function(a,b){var e=[],e=Array.prototype.slice.call(arguments,1);this.useWorker?(this.dorsyWorker.queue.push(["act",a,e]),q.call(this)):c.reflect(a,this.imgData,e);return this},view:function(a,b,e,c,d){var f=this.clone();f.type=1;this.addLayer(f,"\u6b63\u5e38",0,0);f.act(a,b,e,c,d);return this},excute:function(){var a=this.layers,b=a.length;a[b-1]&&1==a[b-1][0].type&&(this.imgData=a[b-1][0].imgData,delete a[b-1])},cancel:function(){var a=
this.layers,b=a.length;a[b-1]&&1==a[b-1][0].type&&delete a[b-1]},show:function(a,b,e){if(!e&&this.useWorker)return this.dorsyWorker.queue.push(["show",a,b]),this;if(0==this.layers.length)this.tempPsLib={imgData:this.imgData};else{e=new window[g](this.canvas.width,this.canvas.height);e.add(this,"\u6b63\u5e38",0,0,b);this.tempPsLib=e;for(var c=0;c<this.layers.length;c++){var d=this.layers[c],f=d[0].layers,i=d[0];f[f.length-1]&&1==f[f.length-1][0].type&&(i=f[f.length-1][0]);e.add(i,d[1],d[2],d[3],b)}this.context.clearRect(0,
0,this.canvas.width,this.canvas.height)}this.context.putImageData(this.tempPsLib.imgData,0,0);a?"string"==typeof a?document.querySelector(a).appendChild(this.canvas):a.appendChild(this.canvas):document.body.appendChild(this.canvas);return this},replaceChild:function(a){a="string"==typeof a?document.querySelector(a):a;a.innerHTML="";return this.show(a)},replace:function(a,b){if(!b&&this.useWorker)return this.dorsyWorker.queue.push(["replace",a]),q.call(this),this;a&&(a.onload=function(){},a.src=this.save(0,
b));return this},add:function(){var a=[],b,e,h,d,f,i;for(h=0;h<arguments.length;h++)if(h)switch(typeof arguments[h]){case "string":/\d+%/.test(arguments[h])?e=arguments[h].replace("%",""):/[RGB]+/.test(arguments[h])?i=arguments[h]:b=arguments[h];break;case "number":a.push(arguments[h]);break;case "boolean":f=arguments[h]}h=a[0]||0;d=a[1]||0;b=b||"\u6b63\u5e38";e=e/100||1;f=f||!1;i=i||"RGB";a=arguments[0];this.useWorker?(this.dorsyWorker.queue.push(["add",a,b,e,h,d,f,i]),q.call(this)):c.add(this.imgData,
a.imgData,b,e,h,d,f,i);return this},addLayer:function(a,b,e,c){this.layers.push([a,b,e,c]);return this},clone:function(){var a=new window[g](this.canvas.width,this.canvas.height);a.context.putImageData(this.imgData,0,0);a.imgData=a.context.getImageData(0,0,this.canvas.width,this.canvas.height);return a},swap:function(a,b){var e=this.layers[a];this.layers[a]=this.layers[b];this.layers[b]=e;return this},deleteLayers:function(a){this.layers=this.layers.del(a)},save:function(a,b){a=(a||"png").toLowerCase();
"jpg"==a&&(a="jpeg");var e="image/"+a;if(!b&&this.useWorker)return this.dorsyWorker.queue.push(["save"]),q.call(this),this;if(!this.layers.length)return this.context.putImageData(this.imgData,0,0),this.canvas.toDataURL(e);e=new window[g](this.canvas.width,this.canvas.height);e.add(this,"\u6b63\u5e38",0,0,isFast);this.tempPsLib=e;for(var c=0;c<this.layers.length;c++){var d=this.layers[c],f=d[0].layers,i=d[0];f[f.length-1]&&1==f[f.length-1][0].type&&(i=f[f.length-1][0]);e.add(i,d[1],d[2],d[3],isFast)}this.context.clearRect(0,
0,this.canvas.width,this.canvas.height);this.context.putImageData(e.imgData,0,0);return this.canvas.toDataURL()},saveFile:function(){var a=this.save(),a=a.replace(/^data:image\/(?:(?:jpeg)|(?:png))/,"data:image/octet-stream");window.location.href=a},drawRect:function(){var a;if(!(a=document.getElementById("imgRect")))a=document.createElement("canvas"),a.id="imgRect",document.body.appendChild(a),a.width=parseInt(this.canvas.width),a.height=parseInt(this.canvas.height);var b=a.getContext("2d");b.clearRect(0,
0,a.width,a.height);for(var e=[],c=this.tempPsLib.imgData.data,d=0,f=c.length;d<f;d++)e[c[d]]?e[c[d]]++:e[c[d]]=1;b.beginPath();b.moveTo(0,a.height);for(d=c=0;255>d;d++)e[d]>c&&(c=e[d]);for(d=0;255>d;d++)f=e[d]||0,f=a.height-0.8*(f/c)*a.height,b.lineTo(d/256*a.width,f,1,1);b.lineTo(a.width+10,a.height);b.fill()},ps:function(a){return c.reflectEasy(a).call(this,this.canvas)},logTime:function(){},ctx:function(a){var b=this.ctxContext;b.putImageData(this.imgData,0,0);a.call(b);this.imgData=b.getImageData(0,
0,this.canvas.width,this.canvas.height);return this},notify:function(a){"readyStateOK"==a&&(this.readyState=1)},complete:function(a){this.useWorker?this.dorsyWorker.queue.push(["complete",a]):a()},transform:function(a){var b=window[g].dorsyMath(),e=this.ctxContext;e.putImageData(this.imgData,0,0);for(var c=document.createElement("canvas").getContext("2d"),d=[new b.Matrix([0,0],"1*2"),new b.Matrix([0,this.canvas.height],"1*2"),new b.Matrix([this.canvas.width,0],"1 * 2"),new b.Matrix([this.canvas.width,
this.canvas.height],"1*2")],f=[],b=new b.Matrix(a,"2*2"),i=0;i<d.length;i++)f.push(d[i].mutiply(b));i=Math.max(f[0].data[0][0],f[1].data[0][0],f[2].data[0][0],f[3].data[0][0]);d=Math.min(f[0].data[0][0],f[1].data[0][0],f[2].data[0][0],f[3].data[0][0]);b=Math.max(f[0].data[0][1],f[1].data[0][1],f[2].data[0][1],f[3].data[0][1]);f=Math.min(f[0].data[0][1],f[1].data[0][1],f[2].data[0][1],f[3].data[0][1]);i=~~(i-d);b=~~(b-f);c.canvas.width=i;c.canvas.height=b;c.translate(-d,-f);c.transform.apply(c,a);
c.drawImage(e.canvas,0,0);this.canvas.width=i;this.canvas.height=b;this.width=i;this.height=b;this.imgData=c.getImageData(0,0,i,b);return this},scale:function(a,b){return this.transform([a,0,0,b||a,0,0])},scaleTo:function(a,b){var e=this.width,c=this.height;b||(b=a*c/e);a||(a=b*(e/c));if(a&b)return this.scale(a/e,b/c)},rotate:function(a){a=a/180*Math.PI;a=[Math.cos(a),Math.sin(a),-Math.sin(a),Math.cos(a),0,0];return this.transform(a)},moveTo:function(a,b){return this.transform([1,0,0,1,a||0,b||0])},
clip:function(a,b,e,c){this.ctxContext.putImageData(this.imgData,0,0);this.imgData=this.ctxContext.getImageData(a,b,e,c);this.context.canvas.width=e;this.context.canvas.height=c;return this},Tools:function(a){return c.tools(this.imgData,arguments)}}})("psLib");window.AlloyImage=window.$AI=window.psLib;
(function(g){window[g].module("addLayer",function(){return{add:function(q,c,a,b,e,h,d,f){var d=q.data,i=c.data,e=e||0,h=h||0,b=b||1,f=f||"RGB";/[RGB]+/.test(f)||(f="RGB");var l=f.replace("R","0").replace("G","1").replace("B","2"),j,f=q.width,g=q.height,n=c.width,r=c.height,c=[-1<l.indexOf("0"),-1<l.indexOf("1"),-1<l.indexOf("2")],m,l=e,u=e+n,t=h,r=h+r;if(!(l>f)&&(0>l&&(l=0),!(0>u)&&(u>f&&(u=f),!(t>g)&&(0>t&&(t=0),!(0>r))))){r>g&&(r=g);for(var w;t<r;t++){g=t*f;m=t-h;w=m*n;for(var v=l;v<u;v++){var p=
4*(g+v);m=4*(w+(v-e));for(var k=0;3>k&&0!=i[m+3];k++)switch(d[p+3]=i[m+3],a){case "\u989c\u8272\u51cf\u6de1":c[k]&&(j=d[p+k]+d[p+k]*i[m+k]/(255-i[m+k]),d[p+k]=(1-b)*d[p+k]+b*j);break;case "\u53d8\u6697":c[k]&&(j=d[p+k]<i[m+k]?d[p+k]:i[m+k],d[p+k]=(1-b)*d[p+k]+b*j);break;case "\u53d8\u4eae":c[k]&&(j=d[p+k]>i[m+k]?d[p+k]:i[m+k],d[p+k]=(1-b)*d[p+k]+b*j);break;case "\u6b63\u7247\u53e0\u5e95":c[k]&&(j=~~(d[p+k]*i[m+k]/255),d[p+k]=(1-b)*d[p+k]+b*j);break;case "\u6ee4\u8272":c[k]&&(j=~~(255-(255-d[p+k])*
(255-i[m+k])/255),d[p+k]=(1-b)*d[p+k]+b*j);break;case "\u53e0\u52a0":c[k]&&(j=127.5>=d[p+k]?d[p+k]*i[m+k]/127.5:255-(255-d[p+k])*(255-i[m+k])/127.5,d[p+k]=(1-b)*d[p+k]+b*j);break;case "\u5f3a\u5149":c[k]&&(j=127.5>=i[m+k]?d[p+k]*i[m+k]/127.5:d[p+k]+(255-d[p+k])*(i[m+k]-127.5)/127.5,d[p+k]=(1-b)*d[p+k]+b*j);break;case "\u5dee\u503c":c[k]&&(j=d[p+k]>i[m+k]?d[p+k]-i[m+k]:i[m+k]-d[p+k],d[p+k]=(1-b)*d[p+k]+b*j);break;case "\u6392\u9664":c[k]&&(j=d[p+k]+i[m+k]-d[p+k]*i[m+k]/127.5,d[p+k]=(1-b)*d[p+k]+b*
j);break;case "\u70b9\u5149":c[k]&&(j=d[p+k]<2*i[m+k]-255?2*i[m+k]-255:d[p+k]<2*i[m+k]?d[p+k]:2*i[m+k],d[p+k]=(1-b)*d[p+k]+b*j);break;case "\u989c\u8272\u52a0\u6df1":c[k]&&(j=255-255*(255-d[p+k])/i[m+k],d[p+k]=(1-b)*d[p+k]+b*j);break;case "\u7ebf\u6027\u52a0\u6df1":c[k]&&(j=d[p+k]+i[m+k],j=255<j?j-255:0,d[p+k]=(1-b)*d[p+k]+b*j);break;case "\u7ebf\u6027\u51cf\u6de1":c[k]&&(j=d[p+k]+i[m+k],j=255<j?255:j,d[p+k]=(1-b)*d[p+k]+b*j);break;case "\u67d4\u5149":c[k]&&(j=127.5>i[m+k]?((2*i[m+k]-255)*(255-d[p+
k])/65025+1)*d[p+k]:(2*i[m+k]-255)*(Math.sqrt(d[p+k]/255)-d[p+k]/255)+d[p+k],d[p+k]=(1-b)*d[p+k]+b*j);break;case "\u4eae\u5149":c[k]&&(j=127.5>i[m+k]?255*(1-(255-d[p+k])/(2*i[m+k])):d[p+k]/(2*(1-i[m+k]/255)),d[p+k]=(1-b)*d[p+k]+b*j);break;case "\u7ebf\u6027\u5149":c[k]&&(j=d[p+k]+2*i[m+k]-255,j=255<j?255:j,d[p+k]=(1-b)*d[p+k]+b*j);break;case "\u5b9e\u8272\u6df7\u5408":c[k]&&(j=i[m+k]<255-d[p+k]?0:255,d[p+k]=(1-b)*d[p+k]+b*j);break;default:c[k]&&(j=i[m+k],d[p+k]=(1-b)*d[p+k]+b*j)}}}return q}}}})})("psLib");
(function(g){window[g].module("applyMatrix",function(q){return{process:function(c){for(var a=c.data,b=c.width,e=new q.lib.dorsyMath.Matrix([-2,-4,-4,-4,-2,-4,0,8,0,-4,-4,8,24,8,-4,-4,0,8,0,-4,-2,-4,-4,-4,-2],25,1),h=[],d=0,f=a.length;d<f;d+=4){var i=d/4,l=parseInt(i/b),j=i%b;if(!(0==l||0==j)){for(var g=[[],[],[]],n=-2;3>n;n++)for(var r=l+n,m=-2;3>m;m++)for(var u=4*(r*b+(j+m)),i=0;3>i;i++)g[i].push(a[u+i]);l=(new q.lib.dorsyMath.Matrix(g,3,matrixSize)).mutiply(e);for(i=0;3>i;i++)h[d+i]=l.data[i];h[d+
4]=a[d+4]}}d=0;for(f=a.length;d<f;d++)a[d]=h[d]||a[d];return c}}})})("psLib");
(function(g){window[g].module("config",function(q){var c={Alteration:{"\u4eae\u5ea6":"brightness","\u8272\u76f8/\u9971\u548c\u5ea6\u8c03\u8282":"setHSI","\u66f2\u7ebf":"curve","gamma\u8c03\u8282":"gamma","\u53ef\u9009\u989c\u8272":"selectiveColor"},Filter:{"\u7070\u5ea6\u5904\u7406":"toGray","\u53cd\u8272":"toReverse","\u7070\u5ea6\u9608\u503c":"toThresh","\u9ad8\u65af\u6a21\u7cca":"gaussBlur","\u6d6e\u96d5\u6548\u679c":"embossment","\u67e5\u627e\u8fb9\u7f18":"borderline","\u9a6c\u8d5b\u514b":"mosaic",
"\u6cb9\u753b":"oilPainting","\u8150\u8680":"corrode","\u9510\u5316":"sharp","\u6dfb\u52a0\u6742\u8272":"noise","\u6697\u89d2":"darkCorner","\u55b7\u70b9":"dotted","\u964d\u566a":"denoise","\u68d5\u8910\u8272":"sepia","\u8272\u8c03\u5206\u79bb":"posterize"},ComEffect:{"\u7f8e\u80a4":"softenFace","\u7d20\u63cf":"sketch","\u81ea\u7136\u589e\u5f3a":"softEnhancement","\u7d2b\u8c03":"purpleStyle","\u67d4\u7126":"soften","\u590d\u53e4":"vintage","\u9ed1\u767d":"gray","\u4efflomo":"lomo","\u4eae\u767d\u589e\u5f3a":"strongEnhancement",
"\u7070\u767d":"strongGray","\u7070\u8272":"lightGray","\u6696\u79cb":"warmAutumn","\u6728\u96d5":"carveStyle","\u7c97\u7cd9":"rough"}},a={},b;for(b in c)if("ComEffect"!=b)for(var e in c[b])a[e]=b,a[c[b][e]]=b;return{getModuleName:function(b){var d;if(d=a[b])return{spaceName:d,actName:c[d][b]||b};q.destroySelf("AI_ERROR:\u8c03\u7528AI\u4e0d\u5b58\u5728\u7684\u65b9\u6cd5"+b)},getEasyFun:function(a){return{spaceName:"ComEffect",actName:c.ComEffect[a]||a}},getConfig:function(){return c}}})})("psLib");
(function(g){window[g].module("dorsyMath",function(q){var c={FFT1:function(a){function b(){h++;for(var f=e/Math.pow(2,h),l=e/f,j=0;j<f;j++)for(var q=j*l,g=(j+1)*l-1,r=h,m=Math.pow(2,r-1),u=0;q<=g-m;q++){var t=q+m,w=u*e/Math.pow(2,r),v=w+e/4;a[q]instanceof c.C||(a[q]=new c.C(a[q]));a[t]instanceof c.C||(a[t]=new c.C(a[t]));w=a[q].plus(a[t].mutiply(d[w]));v=a[q].plus(a[t].mutiply(d[v]));a[q]=w;a[t]=v;u++}1<f&&b()}for(var e=a.length,h=0,d=[],f=0;f<e;f++)d[f]=this.exp(-2*Math.PI*f/e);b();return a},DFT:function(){},
Matrix:function(a,b,e){var c=[];if(b){if(isNaN(b))var d=/(\d+)\s*\*/.exec(b)[1],b=/\*\s*(\d+)/.exec(b)[1];else d=b,b=e;if(a[0]&&a[0][0])for(e=0;e<d;e++){c[e]=[];for(var f=0;f<b;f++)c[e][f]=a[e][f]||0}else for(e=0;e<d;e++){c[e]=[];for(f=0;f<b;f++)c[e][f]=a[e*b+f]||0}this.m=d;this.n=b}else this.m=a.length,this.n=a[0].length;this.data=c},C:function(a,b){this.r=a||0;this.i=b||0},exp:function(a,b){var a=a||0,b=b||1,e=new c.C;e.r=b*Math.cos(a);e.i=b*Math.sin(a);return e},lagrange:function(a,b){var c=a.length;
return function(h){for(var d=0,f=0;f<c;f++){for(var i=1,l=1,j=0;j<c;j++)j!=f&&(i*=a[f]-a[j],l*=h-a[j]);d+=b[f]*(l/i)}return d}},applyMatrix:function(a,b,e){for(var e=e||0,h=a.data,d=a.width,f=b.length,b=new c.Matrix(b,f,1),i=[],l=-(Math.sqrt(f)-1)/2,j=0,g=h.length;j<g;j+=4){var n=j/4,r=parseInt(n/d),m=n%d;if(!(0==r||0==m)){for(var u=[[],[],[]],t=l;t<=-l;t++)for(var w=r+t,v=l;v<=-l;v++)for(var p=4*(w*d+(m+v)),n=0;3>n;n++)u[n].push(h[p+n]);r=(new q.lib.dorsyMath.Matrix(u,3,f)).mutiply(b);for(n=0;3>
n;n++)i[j+n]=r.data[n];i[j+4]=h[j+4]}}j=0;for(g=h.length;j<g;j++)i[j]&&(h[j]=i[j]<e?i[j]:h[j]);return a},RGBToHSI:function(a,b,c){var h=(a-b+a-c)/2/Math.sqrt((a-b)*(a-b)+(a-c)*(b-c))||0,h=Math.acos(h),h=c>b?2*Math.PI-h:h,d=0<a+b+c?1-3*Math.min(a,b,c)/(a+b+c):0;h>2*Math.PI&&(h=2*Math.PI);0>h&&(h=0);return{H:h,S:d,I:(a+b+c)/3}},HSIToRGB:function(a,b,c){0>a?(a%=2*Math.PI,a+=2*Math.PI):a%=2*Math.PI;if(a<=2*Math.PI/3)var h=c*(1-b),d=c*(1+b*Math.cos(a)/Math.cos(Math.PI/3-a)),f=3*c-(d+h);else a<=4*Math.PI/
3?(a-=2*Math.PI/3,d=c*(1-b),f=c*(1+b*Math.cos(a)/Math.cos(Math.PI/3-a)),h=3*c-(f+d)):(a-=4*Math.PI/3,f=c*(1-b),h=c*(1+b*Math.cos(a)/Math.cos(Math.PI/3-a)),d=3*c-(f+h));return{R:d,G:f,B:h}},applyInHSI:function(a,b){for(var c="RYGCBM".split(""),h=a.data,d=Math.PI/6,f=Math.PI/3,i=0,l=h.length;i<l;i+=4){var j=this.RGBToHSI(h[i],h[i+1],h[i+2]);b(j,c[~~((j.H+d)/f)%6],h[i+3]);1<j.S&&(j.S=1);0>j.S&&(j.S=0);j=this.HSIToRGB(j.H,j.S,j.I);h[i]=j.R;h[i+1]=j.G;h[i+2]=j.B}},applyInCoordinate:function(){},distance:function(a,
b){b=b||[0,0];a=new c.C(a[0],a[1]);b=new c.C(b[0],b[1]);return a.minus(b).distance()},xyToIFun:function(a){return function(b,c,h){return 4*(c*a+b)+(h||0)}},xyCal:function(a,b,c,h,d){b=this.xyToIFun(a.width)(b,c,0);a=a.data;if(h=h(a[b],a[b+1],a[b+2]))a[b]=h[0],a[b+1]=h[1],a[b+2]=h[2];d&&(a[b+3]=d(a[b+3]))}};c.Matrix.prototype={plus:function(a){if(this.m!=a.m||this.n!=a.n)throw Error("\u77e9\u9635\u52a0\u6cd5\u884c\u5217\u4e0d\u5339\u914d");for(var b=new c.Matrix([],this.m,this.n),e=0;e<this.m;e++)for(var h=
0;h<this.n;h++)b.data[e][h]=this.data[e][h]+a.data[e][h];return b},minus:function(a){if(this.m!=a.m||this.n!=a.n)throw Error("\u77e9\u9635\u51cf\u6cd5\u6cd5\u884c\u5217\u4e0d\u5339\u914d");for(var b=new c.Matrix([],this.m,this.n),e=0;e<this.m;e++)for(var h=0;h<this.n;h++)b.data[e][h]=this.data[e][h]-a.data[e][h];return b},mutiply:function(a){if(this.n!=a.m)throw Error("\u77e9\u9635\u4e58\u6cd5\u884c\u5217\u4e0d\u5339\u914d");for(var b=new c.Matrix([],this.m,a.n),e=0;e<this.m;e++)for(var h=0;h<a.n;h++){for(var d=
0,f=0;f<this.n;f++)d+=this.data[e][f]*a.data[f][h];b.data[e][h]=d}return b}};c.C.prototype={plus:function(a){var b=new c.C;b.r=this.r+a.r;b.i=this.i+a.i;return b},minus:function(a){var b=new c.C;b.r=this.r-a.r;b.i=this.i-a.i;return b},mutiply:function(a){var b=new c.C;b.r=this.r*a.r-this.i*a.i;b.i=this.r*a.i+this.i*a.r;return b},divide:function(a){var b=new c.C,e=a.mutiply(a.conjugated()),a=this.mutiply(a.conjugated());b.r=a.r/e.r;b.i=a.i/e.r;return b},conjugated:function(){return new c.C(this.r,
-this.i)},distance:function(){return Math.sqrt(this.r*this.r+this.i*this.i)}};return c})})("psLib");
(function(g){window[g].module("dorsyWorker",function(q){return function(c){var a=new Worker(q.path);if(!a)throw Error("\u4f7f\u7528worker\u65f6\uff0calloyimage\u6587\u4ef6\u76ee\u5f55\u6307\u5b9a\u51fa\u9519");var b={queue:[],startWorker:function(){this.shiftAction()},shiftAction:function(){var b=this.queue.shift(),h=this;if(b){var d=b[0];if("act"==d)a.postMessage(["act",b[1],c.imgData,b[2]]);else if("add"==d){var f=function(){if(b[1].readyState){var d=[c.imgData,b[1].imgData].concat(b.slice(2));
a.postMessage(["add",d])}else setTimeout(function(){f()},200)};f()}else"show"==d?(c.show(b[1],b[2],1),this.shiftAction()):"complete"==d?(b[1]&&b[1](),this.shiftAction()):"clone"==d?(c.clone(1),this.shiftAction()):"save"==d?(c.save(0,1),this.shiftAction()):"replace"==d&&(c.replace(b[1],1),this.shiftAction())}else setTimeout(function(){(b=h.queue.shift())||c.notify("readyStateOK")},200)},callback:function(a){c.imgData=a;this.shiftAction()}};a.onmessage=function(a){b.callback(a.data)};return b}})})("psLib");
(function(g){window[g].module("easy",function(){return{getFun:function(q){return{softenFace:function(){return this.clone().add(this.act("\u9ad8\u65af\u6a21\u7cca",10),"\u6ee4\u8272").act("\u4eae\u5ea6",-10,5)},sketch:function(){var c=this.clone();return this.add(c.act("\u53cd\u8272").act("\u9ad8\u65af\u6a21\u7cca",8),"\u989c\u8272\u51cf\u6de1").act("toGray").act("\u9510\u5316",1)},softEnhancement:function(){return this.act("\u66f2\u7ebf",[0,190,255],[0,229,255])},purpleStyle:function(){var c=this.clone();
return this.add(c.act("\u9ad8\u65af\u6a21\u7cca",3),"\u6b63\u7247\u53e0\u5e95","RG")},soften:function(){var c=this.clone();return this.add(c.act("\u9ad8\u65af\u6a21\u7cca",6),"\u53d8\u6697")},vintage:function(){this.clone();return this.act("\u7070\u5ea6\u5904\u7406").add(window[g](this.canvas.width,this.canvas.height,"#808080").act("\u6dfb\u52a0\u6742\u8272").act("\u9ad8\u65af\u6a21\u7cca",4).act("\u8272\u76f8/\u9971\u548c\u5ea6\u8c03\u8282",32,19,0,!0),"\u53e0\u52a0")},gray:function(){return this.act("\u7070\u5ea6\u5904\u7406")},
lomo:function(){return this.clone().add(this.clone(),"\u6ee4\u8272").add(this.clone(),"\u67d4\u5149").add(this.clone().act("\u53cd\u8272"),"\u6b63\u5e38","20%","B").act("\u6697\u89d2",6,200)},strongEnhancement:function(){return this.clone().add(this.clone().act("\u66f2\u7ebf",[0,50,255],[0,234,255]),"\u67d4\u5149")},strongGray:function(){return this.act("\u7070\u5ea6\u5904\u7406").act("\u66f2\u7ebf",[0,61,69,212,255],[0,111,176,237,255])},lightGray:function(){return this.act("\u7070\u5ea6\u5904\u7406").act("\u66f2\u7ebf",
[0,60,142,194,255],[0,194,240,247,255])},warmAutumn:function(){var c=this.clone().act("\u8272\u76f8/\u9971\u548c\u5ea6\u8c03\u8282",36,47,8,!0).act("\u6697\u89d2",6,150);return this.add(c,"\u53e0\u52a0")},carveStyle:function(){var c=this.clone().act("\u9a6c\u8d5b\u514b").act("\u67e5\u627e\u8fb9\u7f18").act("\u6d6e\u96d5\u6548\u679c");return this.add(c,"\u7ebf\u6027\u5149")},rough:function(){return this.add(window[g](this.canvas.width,this.canvas.height,"#000").act("\u55b7\u70b9").act("\u53cd\u8272").act("\u6d6e\u96d5\u6548\u679c"),
"\u53e0\u52a0")}}[q]}}})})("psLib");
(function(g){window[g].module("Tools",function(q){return{getColor:{process:function(c){var a=q.lib.dorsyMath;a.xyToIFun(c.width);var b=2*Math.PI/50,e,h=[];a.applyInHSI(c,function(a,c,d){128<d&&(e=parseInt(a.H/b),h[e]||(h[e]=[]),h[e].push([a.S,a.I]))});for(var d=0,f=0,c=0;50>c;c++)h[c]&&h[c].length>d&&(d=h[c].length,f=c);for(var i=d=0,c=0;c<h[f].length;c++)d+=h[f][c][0],i+=h[f][c][1];a=a.HSIToRGB(f*b,d/h[f].length,i/h[f].length);return"rgb("+parseInt(a.R)+","+parseInt(a.G)+","+parseInt(a.B)+")"}},
toText:{process:function(c,a){var b=c.data,e=c.width,h=c.height,d,f=a[0]||".:;!#@",i="";console.log(f);for(var l=q.lib.dorsyMath.xyToIFun(c.width),j=255/f.length,g=0;g<e;g+=1){for(var n=0;n<h;n+=1)d=l(g,n,0),d=(b[d]+b[d+1]+b[d+2])/3,d=parseInt(d/j),i+=f[d];i+="<br />"}return i}}}})})("psLib");
(function(g){window[g].module("Alteration.brightness",function(){return{process:function(q,c){for(var a=q.data,b=c[0]/50,e=Math.tan((45+44*((c[1]||0)/50))*Math.PI/180),h=0,d=a.length;h<d;h+=4)for(var f=0;3>f;f++)a[h+f]=(a[h+f]-127.5*(1-b))*e+127.5*(1+b);return q}}})})("psLib");
(function(g){window[g].module("Alteration.curve",function(q){return{process:function(c,a){var b=q.lib.dorsyMath.lagrange(a[0],a[1]),e=c.data,h=c.width,d=c.height,f=a[2];/[RGB]+/.test(f)||(f="RGB");for(var f=f.replace("R","0").replace("G","1").replace("B","2"),f=[-1<f.indexOf("0"),-1<f.indexOf("1"),-1<f.indexOf("2")],i=0;i<h;i++)for(var l=0;l<d;l++)for(var j=l*h+i,g=0;3>g;g++)f[g]&&(e[4*j+g]=b(e[4*j+g]));return c}}})})("psLib");
(function(g){window[g].module("Alteration.gamma",function(q){return{process:function(c,a){for(var b=q.lib.dorsyMath,e=c.width,h=c.height,d=2*(((void 0==a[0]?10:a[0])+100)/200),f=0;f<e;f++)for(var i=0;i<h;i++)b.xyCal(c,f,i,function(a,b,c){return[Math.pow(a,d),Math.pow(b,d),Math.pow(c,d)]});return c}}})})("psLib");
(function(g){window[g].module("Alteration.selectiveColor",function(q){return{process:function(c,a){for(var b=a[0],e=a[4],h=a[5]||0,d={red:"R",green:"G",blue:"B","\u7ea2\u8272":"R","\u7eff\u8272":"G","\u84dd\u8272":"B"},f={cyan:"R",magenta:"G",yellow:"B","\u9752\u8272":"R","\u6d0b\u7ea2":"G","\u9ec4\u8272":"B"},i=function(a){if(d[b])return Math.max(a.R,a.G,a.B)==a[d[b]];if(f[b])return Math.min(a.R,a.G,a.B)==a[f[b]];if("black"==b||"\u9ed1\u8272"==b)return 128>Math.min(a.R,a.G,a.B);if("white"==b||"\u767d\u8272"==
b)return 128<Math.max(a.R,a.G,a.B);if("\u4e2d\u6027\u8272"==b)return!(1>Math.max(a.R,a.G,a.B)||224<Math.min(a.R,a.G,a.B))},l=0,j=[a[1],a[2],a[3],e],g=0,n=c.width;g<n;g++)for(var r=0,m=c.height;r<m;r++)q.lib.dorsyMath.xyCal(c,g,r,function(a,c,g){var q={R:a,G:c,B:g},p=[a,c,g],k=[];if(i(q)){if(d[b]){var n=d[b],a=a+c+g-Math.max(a,c,g)-Math.min(a,c,g);l=q[n]-a}else if(f[b])n=f[b],a=a+c+g-Math.max(a,c,g)-Math.min(a,c,g),l=a-q[n];else if("black"==b||"\u9ed1\u8272"==b)l=2*parseInt(127.5-Math.max(a,c,g));
else if("white"==b||"\u767d\u8272"==b)l=2*parseInt(Math.min(a,c,g)-127.5);else if("\u4e2d\u6027\u8272"==b)l=255-(Math.abs(Math.max(a,c,g)-127.5)+Math.abs(Math.min(a,c,g)-127.5));else return;for(q=0;3>q;q++){var a=parseInt(l*(p[q]/255)),c=p[q]-a,g=parseInt(l*(1-p[q]/255)),n=p[q]+g,m=j[q]+e+j[q]*e;h?(128<p[q]&&(a=g),m=0<e?p[q]-e*a:p[q]-e*g,m>n&&(m=n),m<c&&(m=c),g=n-m,a=m-c,0>e&&(a=g),m=0<j[q]?m-j[q]*a:m-j[q]*g):m=l*-m+p[q];m>n&&(m=n);m<c&&(m=c);k[q]=m}return k}});return c}}})})("psLib");
(function(g){window[g].module("Alteration.setHSI",function(q){return{process:function(c,a){a[0]=a[0]/180*Math.PI;a[1]=a[1]/100||0;a[2]=255*(a[2]/100)||0;a[3]=a[3]||!1;var b=a[4];/[RGBCMY]+/.test(b)||(b="RGBCMY");for(var b=b.split(""),e={},h=0;h<b.length;h++)e[b[h]]=1;q.lib.dorsyMath.applyInHSI(c,function(b,c){e[c]&&(a[3]?(b.H=a[0],b.S=a[1]):(b.H+=a[0],b.S+=a[1]),b.I+=a[2])});return c}}})})("psLib");
(function(g){window[g].module("Filter.corrode",function(){return{process:function(q,c){for(var a=parseInt(c[0])||3,b=q.data,e=q.width,h=q.height,d=0;d<e;d++)for(var f=0;f<h;f++)for(var i=parseInt(2*Math.random()*a)-a,g=parseInt(2*Math.random()*a)-a,j=f*e+d,i=(f+i)*e+d+g,g=0;3>g;g++)b[4*j+g]=b[4*i+g];return q}}})})("psLib");
(function(g){window[g].module("Filter.darkCorner",function(g){return{process:function(c,a){for(var b=parseInt(a[0])||3,e=a[1]||30,h=c.data,d=c.width,f=c.height,i=2*d/3,l=1*f/2,j=g.lib.dorsyMath.distance([i,l]),b=j*(1-b/10),s=0;s<d;s++)for(var n=0;n<f;n++)for(var r=n*d+s,m=0;3>m;m++){var u;u=h[4*r+m];var t=(g.lib.dorsyMath.distance([s,n],[i,l])-b)/(j-b);0>t&&(t=0);u=(0*Math.pow(1-t,3)+0.06*t*Math.pow(1-t,2)+3*0.3*t*t*(1-t)+1*Math.pow(t,3))*u*e/255;h[4*r+m]-=u}return c}}})})("psLib");
(function(g){window[g].module("Filter.dotted",function(g){return{process:function(c,a){for(var b=parseInt(a[0])||1,e=parseInt(a[1])||1,h=c.data,d=c.width,f=c.height,i=2*b+1,l=[],j=e*e,e=-b;e<b;e++)for(var s=-b;s<b;s++)e*e+s*s>j&&l.push([e,s]);b=g.lib.dorsyMath.xyToIFun(d);e=0;for(d=parseInt(d/i);e<d;e++){s=0;for(j=parseInt(f/i);s<j;s++)for(var n=parseInt((e+0.5)*i),r=parseInt((s+0.5)*i),m=0;m<l.length;m++){var u=n+l[m][0],t=r+l[m][1];h[b(u,t,3)]=225;h[b(u,t,2)]=225;h[b(u,t,0)]=225;h[b(u,t,1)]=225}}return c}}})})("psLib");
(function(g){window[g].module("Filter.embossment",function(){return{process:function(g){for(var c=g.data,a=g.width,b=[],e=0,h=c.length;e<h;e+=4){var d=e/4,f=parseInt(d/a),i=d%a,d=4*((f-1)*a+(i-1)),l=4*(f+1)*a+4*(i+1);if(!(0==f||0==i)){for(f=0;3>f;f++)b[e+f]=c[d+f]-c[l+f]+127.5;b[e+4]=c[e+4]}}e=0;for(h=c.length;e<h;e++)c[e]=b[e]||c[e];return g}}})})("psLib");
(function(g){window[g].module("Filter.gaussBlur",function(){return{process:function(g,c,a){var b=g.data,e=g.width,h=g.height,d=[],f=0,i,l,j,s,n,r,c=Math.floor(c)||3,a=a||c/3;i=1/(Math.sqrt(2*Math.PI)*a);s=-1/(2*a*a);n=0;for(a=-c;a<=c;a++,n++)j=i*Math.exp(s*a*a),d[n]=j,f+=j;n=0;for(a=d.length;n<a;n++)d[n]/=f;for(i=0;i<h;i++)for(a=0;a<e;a++){f=l=j=s=0;for(r=-c;r<=c;r++)n=a+r,0<=n&&n<e&&(n=4*(i*e+n),l+=b[n]*d[r+c],j+=b[n+1]*d[r+c],s+=b[n+2]*d[r+c],f+=d[r+c]);n=4*(i*e+a);b[n]=l/f;b[n+1]=j/f;b[n+2]=s/
f}for(a=0;a<e;a++)for(i=0;i<h;i++){f=l=j=s=0;for(r=-c;r<=c;r++)n=i+r,0<=n&&n<h&&(n=4*(n*e+a),l+=b[n]*d[r+c],j+=b[n+1]*d[r+c],s+=b[n+2]*d[r+c],f+=d[r+c]);n=4*(i*e+a);b[n]=l/f;b[n+1]=j/f;b[n+2]=s/f}g.data=b;return g}}})})("psLib");(function(g){window[g].module("Filter.ImageEnhance",function(){return{process:function(g){for(var c=g.data,a=0,b=c.length;a<b;a+=4);g.data=c;return g}}})})("psLib");
(function(g){window[g].module("Filter.borderline",function(g){return{process:function(c){return g.lib.dorsyMath.applyMatrix(c,[0,1,0,1,-4,1,0,1,0],250)}}})})("psLib");
(function(g){window[g].module("Filter.mosaic",function(){return{process:function(g,c){for(var a=parseInt(c[0])||3,b=g.data,e=g.width,h=g.height,a=2*a+1,d=0,f=parseInt(e/a);d<f;d++)for(var i=0,l=parseInt(h/a);i<l;i++){for(var j=[],s=[0,0,0],n=0;n<a;n++)for(var r=0;r<a;r++){var m=(i*a+n)*e+d*a+r;s[0]+=b[4*m];s[1]+=b[4*m+1];s[2]+=b[4*m+2]}j[0]=s[0]/(a*a);j[1]=s[1]/(a*a);j[2]=s[2]/(a*a);for(n=0;n<a;n++)for(r=0;r<a;r++)m=(i*a+n)*e+d*a+r,b[4*m]=j[0],b[4*m+1]=j[1],b[4*m+2]=j[2]}return g}}})})("psLib");
(function(g){window[g].module("Filter.noise",function(){return{process:function(g,c){for(var a=parseInt(c[0])||100,b=g.data,e=g.width,h=g.height,d=0;d<e;d++)for(var f=0;f<h;f++)for(var i=f*e+d,l=0;3>l;l++){var j=parseInt(2*Math.random()*a)-a;b[4*i+l]+=j}return g}}})})("psLib");
(function(g){window[g].module("Filter.oilPainting",function(){return{process:function(g,c){for(var a=parseInt(c[0])||16,b=g.data,e=g.width,h=g.height,d=0;d<e;d++)for(var f=0;f<h;f++){for(var i=f*e+d,l=0,j=0;3>j;j++)l+=b[4*i+j];l/=3;l=parseInt(l/a)*a;for(j=0;3>j;j++)b[4*i+j]=l}return g}}})})("psLib");
(function(g){window[g].module("Filter.posterize",function(g){return{process:function(c,a){for(var b=g.lib.dorsyMath,e=c.width,h=c.height,d=a[0]||20,f=Math.floor(255/(1>d?1:255<d?255:d)),d=0;d<e;d++)for(var i=0;i<h;i++)b.xyCal(c,d,i,function(a,b,c){return[Math.floor(a/f)*f,Math.floor(b/f)*f,Math.floor(c/f)*f]});return c}}})})("psLib");
(function(g){window[g].module("Filter.sepia",function(g){return{process:function(c){for(var a=g.lib.dorsyMath,b=c.width,e=c.height,h=0;h<b;h++)for(var d=0;d<e;d++)a.xyCal(c,h,d,function(a,b,c){return[0.393*a+0.769*b+0.189*c,0.349*a+0.686*b+0.168*c,0.272*a+0.534*b+0.131*c]});return c}}})})("psLib");
(function(g){window[g].module("Filter.sharp",function(){return{process:function(g,c){for(var a=c[0]||0.6,b=g.data,e=g.width,h=0,d=b.length;h<d;h+=4){var f=h/4,i=parseInt(f/e),l=f%e;if(!(0==i||0==l))for(var j=4*((i-1)*e+(l-1)),i=4*((i-1)*e+l),f=4*(f-1),l=0;3>l;l++)b[h+l]+=(b[h+l]-(b[i+l]+b[f+l]+b[j+l])/3)*a}return g}}})})("psLib");
(function(g){window[g].module("Filter.toGray",function(){return{process:function(g){for(var c=g.data,a=0,b=c.length;a<b;a+=4){var e=parseInt(0.299*c[a]+0.578*c[a+1]+0.114*c[a+2]);c[a+2]=c[a+1]=c[a]=e}g.data=c;return g}}})})("psLib");(function(g){window[g].module("Filter.toReverse",function(){return{process:function(g){for(var c=g.data,a=0,b=c.length;a<b;a+=4)c[a]=255-c[a],c[a+1]=255-c[a+1],c[a+2]=255-c[a+2];g.data=c;return g}}})})("psLib");
(function(g){window[g].module("Filter.toThresh",function(g){return{process:function(c,a){for(var c=g.reflect("toGray",c),b=c.data,a=a[0]||128,e=0,h=b.length;e<h;e++)(e+1)%4&&(b[e]=b[e]>a?255:0);c.data=b;return c}}})})("psLib");
