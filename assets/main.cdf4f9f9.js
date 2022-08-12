var ou=Object.defineProperty,ru=Object.defineProperties;var su=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var au=Object.prototype.hasOwnProperty,iu=Object.prototype.propertyIsEnumerable;var O=(e,u,n)=>u in e?ou(e,u,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[u]=n,Q=(e,u)=>{for(var n in u||(u={}))au.call(u,n)&&O(e,n,u[n]);if(j)for(var n of j(u))iu.call(u,n)&&O(e,n,u[n]);return e},_=(e,u)=>ru(e,su(u));class S{constructor(u){this.properties=u!=null?u:[]}get(u){const n=this.properties.filter(t=>t.name===u).map(t=>t.value);if(n.length>1)throw new Error('Expected only one property to be named "'+u+'"');if(n.length!==0)return n[0]}getString(u){return this.getByType(u,"string")}getNumber(u){return this.getByType(u,"number")}getBoolean(u){return this.getByType(u,"boolean")}getByType(u,n){const t=this.get(u);if(t!==void 0){if(typeof t!==n)throw new Error('Expected property "'+u+'" to have type "'+n+'"');return t}}mustGetString(u){return this.mustGetByType(u,"string")}mustGetNumber(u){return this.mustGetByType(u,"number")}mustGetBoolean(u){return this.mustGetByType(u,"boolean")}mustGetByType(u,n){const t=this.get(u);if(t===void 0)throw new Error('Property "'+u+'" is missing');if(typeof t!==n)throw new Error('Expected property "'+u+'" to have type "'+n+'"');return t}getType(u){const n=this.properties.filter(t=>t.name===u).map(t=>t.type);if(n.length>1)throw new Error('Expected only one property to be named "'+u+'"');if(n.length!==0)return n[0]}}const k="https://unpkg.com/@workadventure/scripting-api-extra@1.3.2/dist";class pu{constructor(u){this.name=u.name,this.x=u.x,this.y=u.y,this.properties=new S(u.properties)}get isReadable(){const u=this.properties.getString("readableBy");return u?WA.player.tags.includes(u):!0}get isWritable(){const u=this.properties.getString("writableBy");return u?WA.player.tags.includes(u):!0}}function q(e){const u=e?"#"+e.join():"";WA.nav.openCoWebSite(k+"/configuration.html"+u)}async function cu(e,u){const n=await WA.room.getTiledMap(),t=new Map;return Z(n.layers,t,e,u),t}function Z(e,u,n,t){for(const o of e)if(o.type==="objectgroup"){for(const r of o.objects)if(r.type==="variable"){if(!!n&&o.name!==n||!!t&&!t.includes(r.name))continue;u.set(r.name,new pu(r))}}else o.type==="group"&&Z(o.layers,u,n,t)}let R;async function z(){return R===void 0&&(R=lu()),R}async function lu(){return du(await WA.room.getTiledMap())}function du(e){const u=new Map;return X(e.layers,"",u),u}function X(e,u,n){for(const t of e)t.type==="group"?X(t.layers,u+t.name+"/",n):(t.name=u+t.name,n.set(t.name,t))}function fu(e){let u=1/0,n=1/0,t=0,o=0;const r=e.data;if(typeof r=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<e.height;s++)for(let i=0;i<e.width;i++)r[i+s*e.width]!==0&&(u=Math.min(u,i),o=Math.max(o,i),n=Math.min(n,s),t=Math.max(t,s));return{top:n,left:u,right:o+1,bottom:t+1}}function uu(e){let u=1/0,n=1/0,t=0,o=0;for(const r of e){const s=fu(r);s.left<u&&(u=s.left),s.top<n&&(n=s.top),s.right>o&&(o=s.right),s.bottom>t&&(t=s.bottom)}return{top:n,left:u,right:o,bottom:t}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var gu=Object.prototype.toString,F=Array.isArray||function(u){return gu.call(u)==="[object Array]"};function V(e){return typeof e=="function"}function Au(e){return F(e)?"array":typeof e}function G(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function J(e,u){return e!=null&&typeof e=="object"&&u in e}function yu(e,u){return e!=null&&typeof e!="object"&&e.hasOwnProperty&&e.hasOwnProperty(u)}var hu=RegExp.prototype.test;function Eu(e,u){return hu.call(e,u)}var mu=/\S/;function bu(e){return!Eu(mu,e)}var vu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function Wu(e){return String(e).replace(/[&<>"'`=\/]/g,function(n){return vu[n]})}var Cu=/\s*/,Bu=/\s+/,N=/\s*=/,Du=/\s*\}/,wu=/#|\^|\/|>|\{|&|=|!/;function Fu(e,u){if(!e)return[];var n=!1,t=[],o=[],r=[],s=!1,i=!1,a="",l=0;function A(){if(s&&!i)for(;r.length;)delete o[r.pop()];else r=[];s=!1,i=!1}var E,b,f;function B(C){if(typeof C=="string"&&(C=C.split(Bu,2)),!F(C)||C.length!==2)throw new Error("Invalid tags: "+C);E=new RegExp(G(C[0])+"\\s*"),b=new RegExp("\\s*"+G(C[1])),f=new RegExp("\\s*"+G("}"+C[1]))}B(u||v.tags);for(var p=new P(e),d,h,W,L,T,D;!p.eos();){if(d=p.pos,W=p.scanUntil(E),W)for(var x=0,tu=W.length;x<tu;++x)L=W.charAt(x),bu(L)?(r.push(o.length),a+=L):(i=!0,n=!0,a+=" "),o.push(["text",L,d,d+1]),d+=1,L===`
`&&(A(),a="",l=0,n=!1);if(!p.scan(E))break;if(s=!0,h=p.scan(wu)||"name",p.scan(Cu),h==="="?(W=p.scanUntil(N),p.scan(N),p.scanUntil(b)):h==="{"?(W=p.scanUntil(f),p.scan(Du),p.scanUntil(b),h="&"):W=p.scanUntil(b),!p.scan(b))throw new Error("Unclosed tag at "+p.pos);if(h==">"?T=[h,W,d,p.pos,a,l,n]:T=[h,W,d,p.pos],l++,o.push(T),h==="#"||h==="^")t.push(T);else if(h==="/"){if(D=t.pop(),!D)throw new Error('Unopened section "'+W+'" at '+d);if(D[1]!==W)throw new Error('Unclosed section "'+D[1]+'" at '+d)}else h==="name"||h==="{"||h==="&"?i=!0:h==="="&&B(W)}if(A(),D=t.pop(),D)throw new Error('Unclosed section "'+D[1]+'" at '+p.pos);return Su(Lu(o))}function Lu(e){for(var u=[],n,t,o=0,r=e.length;o<r;++o)n=e[o],n&&(n[0]==="text"&&t&&t[0]==="text"?(t[1]+=n[1],t[3]=n[3]):(u.push(n),t=n));return u}function Su(e){for(var u=[],n=u,t=[],o,r,s=0,i=e.length;s<i;++s)switch(o=e[s],o[0]){case"#":case"^":n.push(o),t.push(o),n=o[4]=[];break;case"/":r=t.pop(),r[5]=o[2],n=t.length>0?t[t.length-1][4]:u;break;default:n.push(o)}return u}function P(e){this.string=e,this.tail=e,this.pos=0}P.prototype.eos=function(){return this.tail===""};P.prototype.scan=function(u){var n=this.tail.match(u);if(!n||n.index!==0)return"";var t=n[0];return this.tail=this.tail.substring(t.length),this.pos+=t.length,t};P.prototype.scanUntil=function(u){var n=this.tail.search(u),t;switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t};function w(e,u){this.view=e,this.cache={".":this.view},this.parent=u}w.prototype.push=function(u){return new w(u,this)};w.prototype.lookup=function(u){var n=this.cache,t;if(n.hasOwnProperty(u))t=n[u];else{for(var o=this,r,s,i,a=!1;o;){if(u.indexOf(".")>0)for(r=o.view,s=u.split("."),i=0;r!=null&&i<s.length;)i===s.length-1&&(a=J(r,s[i])||yu(r,s[i])),r=r[s[i++]];else r=o.view[u],a=J(o.view,u);if(a){t=r;break}o=o.parent}n[u]=t}return V(t)&&(t=t.call(this.view)),t};function m(){this.templateCache={_cache:{},set:function(u,n){this._cache[u]=n},get:function(u){return this._cache[u]},clear:function(){this._cache={}}}}m.prototype.clearCache=function(){typeof this.templateCache!="undefined"&&this.templateCache.clear()};m.prototype.parse=function(u,n){var t=this.templateCache,o=u+":"+(n||v.tags).join(":"),r=typeof t!="undefined",s=r?t.get(o):void 0;return s==null&&(s=Fu(u,n),r&&t.set(o,s)),s};m.prototype.render=function(u,n,t,o){var r=this.getConfigTags(o),s=this.parse(u,r),i=n instanceof w?n:new w(n,void 0);return this.renderTokens(s,i,t,u,o)};m.prototype.renderTokens=function(u,n,t,o,r){for(var s="",i,a,l,A=0,E=u.length;A<E;++A)l=void 0,i=u[A],a=i[0],a==="#"?l=this.renderSection(i,n,t,o,r):a==="^"?l=this.renderInverted(i,n,t,o,r):a===">"?l=this.renderPartial(i,n,t,r):a==="&"?l=this.unescapedValue(i,n):a==="name"?l=this.escapedValue(i,n,r):a==="text"&&(l=this.rawValue(i)),l!==void 0&&(s+=l);return s};m.prototype.renderSection=function(u,n,t,o,r){var s=this,i="",a=n.lookup(u[1]);function l(b){return s.render(b,n,t,r)}if(!!a){if(F(a))for(var A=0,E=a.length;A<E;++A)i+=this.renderTokens(u[4],n.push(a[A]),t,o,r);else if(typeof a=="object"||typeof a=="string"||typeof a=="number")i+=this.renderTokens(u[4],n.push(a),t,o,r);else if(V(a)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");a=a.call(n.view,o.slice(u[3],u[5]),l),a!=null&&(i+=a)}else i+=this.renderTokens(u[4],n,t,o,r);return i}};m.prototype.renderInverted=function(u,n,t,o,r){var s=n.lookup(u[1]);if(!s||F(s)&&s.length===0)return this.renderTokens(u[4],n,t,o,r)};m.prototype.indentPartial=function(u,n,t){for(var o=n.replace(/[^ \t]/g,""),r=u.split(`
`),s=0;s<r.length;s++)r[s].length&&(s>0||!t)&&(r[s]=o+r[s]);return r.join(`
`)};m.prototype.renderPartial=function(u,n,t,o){if(!!t){var r=this.getConfigTags(o),s=V(t)?t(u[1]):t[u[1]];if(s!=null){var i=u[6],a=u[5],l=u[4],A=s;a==0&&l&&(A=this.indentPartial(s,l,i));var E=this.parse(A,r);return this.renderTokens(E,n,t,A,o)}}};m.prototype.unescapedValue=function(u,n){var t=n.lookup(u[1]);if(t!=null)return t};m.prototype.escapedValue=function(u,n,t){var o=this.getConfigEscape(t)||v.escape,r=n.lookup(u[1]);if(r!=null)return typeof r=="number"&&o===v.escape?String(r):o(r)};m.prototype.rawValue=function(u){return u[1]};m.prototype.getConfigTags=function(u){return F(u)?u:u&&typeof u=="object"?u.tags:void 0};m.prototype.getConfigEscape=function(u){if(u&&typeof u=="object"&&!F(u))return u.escape};var v={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){M.templateCache=e},get templateCache(){return M.templateCache}},M=new m;v.clearCache=function(){return M.clearCache()};v.parse=function(u,n){return M.parse(u,n)};v.render=function(u,n,t,o){if(typeof u!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+Au(u)+'" was given as the first argument for mustache#render(template, view, partials)');return M.render(u,n,t,o)};v.escape=Wu;v.Scanner=P;v.Context=w;v.Writer=m;class Mu{constructor(u,n){this.template=u,this.state=n,this.ast=v.parse(u)}getValue(){return this.value===void 0&&(this.value=v.render(this.template,this.state)),this.value}onChange(u){const n=[];for(const t of this.getUsedVariables().values())n.push(this.state.onVariableChange(t).subscribe(()=>{const o=v.render(this.template,this.state);o!==this.value&&(this.value=o,u(this.value))}));return{unsubscribe:()=>{for(const t of n)t.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const u=new Set;return this.recursiveGetUsedVariables(this.ast,u),u}recursiveGetUsedVariables(u,n){for(const t of u){const o=t[0],r=t[1],s=t[4];["name","&","#","^"].includes(o)&&n.add(r),s!==void 0&&typeof s!="string"&&this.recursiveGetUsedVariables(s,n)}}}async function Pu(){var e;const u=await z();for(const[n,t]of u.entries()){const o=(e=t.properties)!==null&&e!==void 0?e:[];for(const r of o){if(r.type==="int"||r.type==="bool"||r.type==="object"||typeof r.value!="string")continue;const s=new Mu(r.value,WA.state);if(s.isPureString())continue;const i=s.getValue();K(n,r.name,i),s.onChange(a=>{K(n,r.name,a)})}}}function K(e,u,n){WA.room.setProperty(e,u,n),u==="visible"&&(n?WA.room.showLayer(e):WA.room.hideLayer(e))}let I,Y=0,U=0;function $(e){if(WA.state[e.name]){let u=e.properties.mustGetString("openLayer");for(const n of u.split(`
`))WA.room.showLayer(n);u=e.properties.mustGetString("closeLayer");for(const n of u.split(`
`))WA.room.hideLayer(n)}else{let u=e.properties.mustGetString("openLayer");for(const n of u.split(`
`))WA.room.hideLayer(n);u=e.properties.mustGetString("closeLayer");for(const n of u.split(`
`))WA.room.showLayer(n)}}function Tu(e){const u=e.properties.getString("openSound"),n=e.properties.getNumber("soundRadius");let t=1;if(n){const o=nu(e.properties.mustGetString("openLayer").split(`
`));if(o>n)return;t=1-o/n}u&&WA.sound.loadSound(u).play({volume:t})}function ku(e){const u=e.properties.getString("closeSound"),n=e.properties.getNumber("soundRadius");let t=1;if(n){const o=nu(e.properties.mustGetString("closeLayer").split(`
`));if(o>n)return;t=1-o/n}u&&WA.sound.loadSound(u).play({volume:t})}function eu(e){return e.map(u=>I.get(u)).filter(u=>(u==null?void 0:u.type)==="tilelayer")}function nu(e){const u=eu(e),n=uu(u),t=((n.right-n.left)/2+n.left)*32,o=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(Y-t,2)+Math.pow(U-o,2))}function zu(e){WA.state.onVariableChange(e.name).subscribe(()=>{WA.state[e.name]?Tu(e):ku(e),$(e)}),$(e)}function xu(e,u,n,t){const o=e.name;let r,s,i=!1;const a=n.getString("tag");let l=!0;a&&!WA.player.tags.includes(a)&&(l=!1);const A=!!a;function E(){var p;r&&r.remove(),r=WA.ui.displayActionMessage({message:(p=n.getString("closeTriggerMessage"))!==null&&p!==void 0?p:"Press SPACE to close the door",callback:()=>{WA.state[u.name]=!1,b()}})}function b(){var p;r&&r.remove(),r=WA.ui.displayActionMessage({message:(p=n.getString("openTriggerMessage"))!==null&&p!==void 0?p:"Press SPACE to open the door",callback:()=>{WA.state[u.name]=!0,E()}})}function f(p){const d=uu(eu(u.properties.mustGetString("closeLayer").split(`
`)));s=WA.room.website.create({name:"doorKeypad"+p,url:t+"/keypad.html#"+encodeURIComponent(p),position:{x:d.right*32,y:d.top*32,width:32*3,height:32*4},allowApi:!0})}function B(){s&&(WA.room.website.delete(s.name),s=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(i=!0,n.getBoolean("autoOpen")&&l){WA.state[u.name]=!0;return}if(!WA.state[u.name]&&(A&&!l||!A)&&(n.getString("code")||n.getString("codeVariable"))){f(o);return}!l||(WA.state[u.name]?E():b())}),WA.room.onLeaveLayer(o).subscribe(()=>{i=!1,n.getBoolean("autoClose")&&(WA.state[u.name]=!1),r&&r.remove(),B()}),WA.state.onVariableChange(u.name).subscribe(()=>{i&&(!n.getBoolean("autoClose")&&WA.state[u.name]===!0&&E(),s&&WA.state[u.name]===!0&&B(),!n.getBoolean("autoOpen")&&WA.state[u.name]===!1&&b())})}function Ru(e){const u=e.properties.mustGetString("bellSound"),n=e.properties.getNumber("soundRadius");let t=1;if(n){const o=Math.sqrt(Math.pow(e.x-Y,2)+Math.pow(e.y-U,2));if(o>n)return;t=1-o/n}WA.sound.loadSound(u).play({volume:t})}function Gu(e){WA.state[e.name]===void 0&&(WA.state[e.name]=0),WA.state.onVariableChange(e.name).subscribe(()=>{WA.state[e.name]&&Ru(e)})}function Iu(e,u,n){let t;const o=u.getString("bellPopup");WA.room.onEnterLayer(n).subscribe(()=>{var r;o?t=WA.ui.openPopup(o,"",[{label:(r=u.getString("bellButtonText"))!==null&&r!==void 0?r:"Ring",callback:()=>{WA.state[e]=WA.state[e]+1}}]):WA.state[e]=WA.state[e]+1}),WA.room.onLeaveLayer(n).subscribe(()=>{t&&(t.close(),t=void 0)})}async function Vu(e){e=e!=null?e:k;const u=await cu();I=await z();for(const n of u.values())n.properties.get("door")&&zu(n),n.properties.get("bell")&&Gu(n);for(const n of I.values()){const t=new S(n.properties),o=t.getString("doorVariable");if(o&&n.type==="tilelayer"){const s=u.get(o);if(s===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+n.name+'"');xu(n,s,t,e)}const r=t.getString("bellVariable");r&&Iu(r,t,n.name)}WA.player.onPlayerMove(n=>{Y=n.x,U=n.y})}function Yu(e,u){const n=e.getString("bindVariable");if(n){const t=e.get("enterValue"),o=e.get("leaveValue"),r=e.getString("triggerMessage"),s=e.getString("tag");Uu(n,u,t,o,r,s)}}function Uu(e,u,n,t,o,r){r&&!WA.player.tags.includes(r)||(n!==void 0&&WA.room.onEnterLayer(u).subscribe(()=>{o||(WA.state[e]=n)}),t!==void 0&&WA.room.onLeaveLayer(u).subscribe(()=>{WA.state[e]=t}))}async function ju(){const e=await z();for(const u of e.values()){const n=new S(u.properties);Yu(n,u.name)}}let H;async function Ou(e){const u=await WA.room.getTiledMap();e=e!=null?e:k,H=await z();const n=u.layers.find(t=>t.name==="configuration");if(n){const o=new S(n.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(e+"/configuration.html",!0)});for(const r of H.values()){const s=new S(r.properties),i=s.getString("openConfig");i&&r.type==="tilelayer"&&Qu(i.split(","),r.name,s)}}}function Qu(e,u,n){let t;const o=n.getString("openConfigAdminTag");let r=!0;o&&!WA.player.tags.includes(o)&&(r=!1);function s(){var a;t&&t.remove(),t=WA.ui.displayActionMessage({message:(a=n.getString("openConfigTriggerMessage"))!==null&&a!==void 0?a:"Press SPACE or touch here to configure",callback:()=>q(e)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(u).subscribe(()=>{const a=n.getString("openConfigTrigger");r&&(a&&a==="onaction"?s():q(e))}),WA.room.onLeaveLayer(u).subscribe(()=>{t&&t.remove(),i()})}const _u=[{lowerBound:0,uppperBound:.5,config:{width:250,height:390,scale:1}},{lowerBound:.5,uppperBound:.8,config:{width:224,height:350,scale:.9}},{lowerBound:.8,uppperBound:1.25,config:{width:132,height:211,scale:.53}},{lowerBound:1.25,uppperBound:2.28,config:{width:64,height:99,scale:.25}},{lowerBound:1.25,config:{width:39,height:63,scale:.16}}],qu=[{lowerBound:0,uppperBound:1,config:{width:427,height:270,scale:1}},{lowerBound:1,uppperBound:1.9,config:{width:300,height:188,scale:.7}},{lowerBound:1.9,uppperBound:3.5,config:{width:150,height:94,scale:.35}},{lowerBound:3.5,uppperBound:5,config:{width:93,height:58,scale:.21}},{lowerBound:4,config:{width:75,height:46,scale:.17}}];async function Ju(){var e;const u=WA.player.state.tutorialDone,n=/Mobi|Android/i.test(navigator.userAgent),o=await((e=(await WA.room.getTiledMap()).properties)===null||e===void 0?void 0:e.find(s=>s.name==="tutorial")),r=o&&o.value;if(!u&&r){Nu(n);let s=await WA.player.getPosition(),i;const a=await WA.room.website.get("tutorial"),l=()=>{const B=s.x+a.x+a.width>i.x+i.width,p=s.x+a.x<i.x,d=s.y+a.y+a.height>i.y+i.height,h=s.y+a.y<i.y;B?a.x=-a.width-1.5*16:p&&(a.x=1.5*16),d?a.y=-a.height:h&&(a.y=16)},A=f=>{a.width=f.width,a.height=f.height,a.scale=f.scale},E=f=>{const p=(n?_u:qu).filter(d=>{if(d.lowerBound&&d.uppperBound)return d.lowerBound<f&&f<=d.uppperBound;if(d.lowerBound&&!d.uppperBound)return d.lowerBound<f;if(!d.lowerBound&&d.uppperBound)return f<=d.uppperBound;throw new Error(`Zoom level of: ${f} could not fit in any of the desktopConfig's ranges.`)});A(p[0].config)},b=()=>{if(i===void 0)return;const f=i.zoom;E(f),l()};WA.player.onPlayerMove(f=>{s=f,b()}),WA.camera.onCameraUpdate().subscribe(f=>{i=f,b()}),WA.player.state.tutorialDone=!0}}function Nu(e){let u={allow:"",name:"tutorial",url:k+"/tutorial.html",position:{height:224,width:407,x:16,y:-112},visible:!0,allowApi:!0,origin:"player",scale:.9};e&&(u=_(Q({},u),{position:{x:32,y:-225,height:390,width:250},scale:1})),WA.room.website.create(u)}function Ku(){return WA.onInit().then(()=>{Vu().catch(e=>console.error(e)),ju().catch(e=>console.error(e)),Ou().catch(e=>console.error(e)),Pu().catch(e=>console.error(e)),Ju().catch(e=>console.error(e))}).catch(e=>console.error(e))}console.log("Script started successfully");let g;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.onEnterLayer("infobordd/infozone1").subscribe(()=>{var e=WA.sound.loadSound("door/paper.mp3");e.play(c);const u=new Date,n=u.getHours()+":"+u.getMinutes();g=WA.ui.openPopup("infopop1","\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C "+WA.player.name+`
\u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F: `+n+`

\u0420\u0430\u0441\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435:

18:30 - \u041D\u0430\u0447\u0430\u043B\u043E \u0438 \u041A\u0432\u0435\u0441\u0442 \u042F\u0440\u0438\u043A\u0430..
19:00 - \u0412\u044B\u043F\u0443\u0441\u043A\u043D\u0430\u044F \u0440\u0435\u0447\u044C \u0413\u043B\u0435\u0431\u0430..
19:10 - \u042D\u043A\u0437\u0430\u043C\u0435\u043D \u0443 \u0427\u0443\u0431\u0430\u0441\u0438......
19:30 - \u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442 \u0442\u0435\u0442\u0443\u0448\u043A\u0438 \u0424\u0430\u0438..
20:00 - \u0414\u0435\u0440\u0437\u043A\u0438\u0439 \u043F\u043E\u0431\u0435\u0433 \u0416\u043E\u0440\u044B....
20:10 - \u0421\u0435\u043A\u0440\u0435\u0442\u043D\u044B\u0439 \u043A\u0432\u0435\u0441\u0442.......
20:40 - \u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0430\u044F \u0432\u0438\u043A\u0442\u043E\u0440\u0438\u043D\u0430..
20:50 - \u0411\u0440\u0435\u0439\u043D \u0420\u0438\u043D\u0433............
21:20 - \u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0430\u0443\u0437\u0430.....
16:30 - \u041A\u0432\u0438\u0437 \u043F\u043E \u0424\u0430\u043D \u0432\u0438\u0434\u0435\u043E.....
21:35 - \u041A\u043E\u0440\u043E\u043B\u044C&\u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0430 \u0432\u0435\u0447\u0435\u0440\u0430
`,[])}),WA.room.onLeaveLayer("infobordd/infozone1").subscribe(y),WA.room.onEnterLayer("npc/npc1zone").subscribe(()=>{g=WA.ui.openPopup("npc1pop","\u041E\u0439, \u0432\u044B \u043D\u0435 \u0434\u044F\u0434\u044F \u0413\u043B\u0435\u0431. \u041D\u043E \u043C\u043E\u0436\u0435\u0442 \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u043C \u043F\u043E\u043C\u043E\u0447\u044C? \u041C\u044B \u0445\u043E\u0442\u0438\u043C \u043A\u0438\u043D\u0434\u0435\u0440, \u043D\u043E \u043A\u043E\u0437\u0430 \u0441\u044A\u0435\u043B\u0430 \u043A\u043E\u0434 \u043E\u0442 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u0430.",[]);var e=WA.sound.loadSound("npc/yarik.mp3");e.play(c)}),WA.room.onLeaveLayer("npc/npc1zone").subscribe(y),WA.room.onEnterLayer("npc/npc3zone").subscribe(()=>{g=WA.ui.openPopup("npc3pop","\u041F\u0440\u0438\u0432\u0435\u0442. \u0414\u0430\u0432\u0430\u0439 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u043C \u043D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0442\u044B \u0443\u0441\u0432\u043E\u0438\u043B \u0437\u043D\u0430\u043D\u0438\u044F. \u041F\u0440\u043E\u0445\u043E\u0434\u0438 \u043A \u0441\u0442\u043E\u043B\u0443 \u0438 \u0442\u044F\u043D\u0438 \u0431\u0438\u043B\u0435\u0442.",[]);var e=WA.sound.loadSound("npc/pug.mp3");e.play(c)}),WA.room.onLeaveLayer("npc/npc3zone").subscribe(y),WA.room.onEnterLayer("npc/npc4zone").subscribe(()=>{g=WA.ui.openPopup("npc4pop","\u0416\u041E\u0420\u0410: \u042D\u0439, \u043F\u043E\u0434\u043E\u0436\u0434\u0438! \u041F\u043E\u043C\u043E\u0433\u0438 \u043C\u043D\u0435 \u0441\u0431\u0435\u0436\u0430\u0442\u044C! \u042D\u0442\u043E \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043C\u0435\u0441\u0442\u043E \u0433\u0434\u0435 \u043D\u0435\u0442 \u043A\u0430\u043C\u0435\u0440, \u043D\u043E \u044F \u0432\u044B\u0440\u043E\u043D\u0438\u043B \u0437\u0430\u043F\u0438\u0441\u043A\u0438 \u0441 \u043A\u043E\u0434\u043E\u043C \u0438 \u0438\u0445 \u0443\u043D\u0435\u0441\u043B\u043E \u0432\u0435\u0442\u0440\u043E\u043C. \u041F\u043E\u043C\u043E\u0433\u0438 \u043C\u043D\u0435 \u0438\u0445 \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u043B\u0438\u0442\u043A\u0443. \u0415\u0441\u043B\u0438 \u0441\u043F\u0440\u0430\u0432\u0438\u0448\u044C\u0441\u044F, \u0441\u043C\u043E\u0436\u0435\u0448\u044C \u0432\u0437\u044F\u0442\u044C \u043D\u0430\u0433\u0440\u0430\u0434\u0443 \u0438\u0437 \u0441\u0443\u043D\u0434\u0443\u043A\u0430. \u042F \u0432\u0438\u0434\u0435\u043B \u0447\u0442\u043E \u0437\u0430\u043F\u0438\u0441\u043A\u0438 \u0443\u043D\u0435\u0441\u043B\u043E \u0432 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u043B\u0435\u0441\u0430.",[]);var e=WA.sound.loadSound("npc/jora.mp3");e.play(c)}),WA.room.onLeaveLayer("npc/npc4zone").subscribe(y),WA.room.onEnterLayer("npc/npc2zone").subscribe(()=>{g=WA.ui.openPopup("npc2pop","\u041D\u0430\u0439\u0434\u0438 5 \u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u0432\u0435\u0449\u0435\u0439 \u0432 \u043C\u0435\u0442\u0430\u0432\u0441\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u0427\u0423\u0411\u0410\u0425\u0410\u0423\u0417 \u0438 \u0441\u043E\u0431\u0435\u0440\u0438 \u0437\u0430\u043F\u0438\u0441\u043A\u0438 \u0441 \u043A\u043E\u0434\u043E\u043C.",[]);var e=WA.sound.loadSound("npc/koza.mp3");e.play(c)}),WA.room.onLeaveLayer("npc/npc2zone").subscribe(y),WA.room.onEnterLayer("YQuest/Y1").subscribe(()=>{var e=WA.sound.loadSound("door/bonus.mp3");e.play(c);var u=WA.ui.displayActionMessage({message:"\u043D\u0430\u0436\u043C\u0438 \u041F\u0420\u041E\u0411\u0415\u041B \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0437\u0434\u0432\u0438\u043D\u0443\u0442\u044C \u0432\u0435\u0442\u0432\u0438",callback:()=>{WA.chat.sendChatMessage("\u0421\u0440\u0435\u0434\u0438 \u0432\u0435\u0442\u0432\u0435\u0439 \u0432\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0435 \u0437\u0430\u043F\u0438\u0441\u043A\u0443 \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0443\u043A\u0430\u0437\u0430\u043D\u0430 \u0447\u0430\u0441\u0442\u044C \u043A\u043E\u0434\u0430 \u043E\u0442 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u0430 3****","\u041A\u0412\u0415\u0421\u0422 \u042F\u0420\u0418\u041A\u0410")}});setTimeout(()=>{u.remove()},4e3)}),WA.room.onEnterLayer("YQuest/Y2").subscribe(()=>{var e=WA.sound.loadSound("door/bonus.mp3");e.play(c);var u=WA.ui.displayActionMessage({message:"\u043D\u0430\u0436\u043C\u0438 \u041F\u0420\u041E\u0411\u0415\u041B \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0439\u043C\u0430\u0442\u044C \u0430\u043A\u0443\u043B\u0443",callback:()=>{WA.chat.sendChatMessage("\u041A \u0445\u0432\u043E\u0441\u0442\u0443 \u0430\u043A\u0443\u043B\u0443 \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D\u0430 \u0441\u0430\u043F\u0438\u0441\u043A\u0430 \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0443\u043A\u0430\u0437\u0430\u043D\u0430 \u0447\u0430\u0441\u0442\u044C \u043A\u043E\u0434\u0430 \u043E\u0442 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u0430 *6***","\u041A\u0412\u0415\u0421\u0422 \u042F\u0420\u0418\u041A\u0410")}});setTimeout(()=>{u.remove()},4e3)}),WA.room.onEnterLayer("YQuest/Y3").subscribe(()=>{var e=WA.sound.loadSound("door/bonus.mp3");e.play(c);var u=WA.ui.displayActionMessage({message:"\u043D\u0430\u0436\u043C\u0438 \u041F\u0420\u041E\u0411\u0415\u041B \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0440\u0432\u0430\u0442\u044C \u043F\u0435\u0440\u0441\u0438\u043A",callback:()=>{WA.chat.sendChatMessage("\u041A \u043F\u0435\u0440\u0441\u0438\u043A\u0443 \u043F\u0440\u0438\u043C\u043E\u0442\u0430\u043D\u0430 \u0437\u0430\u043F\u0438\u0441\u043A\u0430 \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0443\u043A\u0430\u0437\u0430\u043D\u0430 \u0447\u0430\u0441\u0442\u044C \u043A\u043E\u0434\u0430 \u043E\u0442 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u0430 **7**","\u041A\u0412\u0415\u0421\u0422 \u042F\u0420\u0418\u041A\u0410")}});setTimeout(()=>{u.remove()},4e3)}),WA.room.onEnterLayer("YQuest/Y4").subscribe(()=>{var e=WA.sound.loadSound("door/bonus.mp3");e.play(c);var u=WA.ui.displayActionMessage({message:"\u043D\u0430\u0436\u043C\u0438 \u041F\u0420\u041E\u0411\u0415\u041B \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0434\u043D\u044F\u0442\u044C \u043F\u043B\u0438\u0442\u043A\u0443",callback:()=>{WA.chat.sendChatMessage("\u041F\u043E\u0434 \u043F\u043B\u0438\u0442\u043A\u043E\u0439 \u0441\u043F\u0440\u044F\u0442\u0430\u043D\u0430 \u0437\u0430\u043F\u0438\u0441\u043A\u0430 \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0443\u043A\u0430\u0437\u0430\u043D\u0430 \u0447\u0430\u0441\u0442\u044C \u043A\u043E\u0434\u0430 \u043E\u0442 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u0430 ***3*","\u041A\u0412\u0415\u0421\u0422 \u042F\u0420\u0418\u041A\u0410")}});setTimeout(()=>{u.remove()},4e3)}),WA.room.onEnterLayer("YQuest/Y5").subscribe(()=>{var e=WA.sound.loadSound("door/bonus.mp3");e.play(c);var u=WA.ui.displayActionMessage({message:"\u043D\u0430\u0436\u043C\u0438 \u041F\u0420\u041E\u0411\u0415\u041B \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0440\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u043A\u0443",callback:()=>{WA.chat.sendChatMessage("\u041A \u043A\u043E\u0440\u043C\u0435 \u043F\u0440\u0438\u0431\u0438\u0442\u0430 \u0437\u0430\u043F\u0438\u0441\u043A\u0430 \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0443\u043A\u0430\u0437\u0430\u043D\u0430 \u0447\u0430\u0441\u0442\u044C \u043A\u043E\u0434\u0430 \u043E\u0442 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u0430 ****1","\u041A\u0412\u0415\u0421\u0422 \u042F\u0420\u0418\u041A\u0410")}});setTimeout(()=>{u.remove()},4e3)}),WA.room.onEnterLayer("YQuest/J0").subscribe(()=>{var e=WA.ui.displayActionMessage({message:"\u043D\u0430\u0436\u043C\u0438 \u041F\u0420\u041E\u0411\u0415\u041B \u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C\u0441\u044F",callback:()=>{WA.chat.sendChatMessage("\u0412\u044B \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0435","\u041A\u0412\u0415\u0421\u0422 \u0416\u041E\u0420\u042B");var u=WA.sound.loadSound("door/list.mp3");u.play(c)}});setTimeout(()=>{e.remove()},2e3)}),WA.room.onEnterLayer("YQuest/J1").subscribe(()=>{var e=WA.ui.displayActionMessage({message:"\u043D\u0430\u0436\u043C\u0438 \u041F\u0420\u041E\u0411\u0415\u041B \u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C\u0441\u044F",callback:()=>{WA.chat.sendChatMessage("\u0412 \u043B\u0438\u0441\u0442\u0432\u0435 \u0432\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0435 \u0437\u0430\u043F\u0438\u0441\u043A\u0443 \u0441 \u0447\u0430\u0441\u0442\u044C\u044E \u043A\u043E\u0434\u0430 3***","\u041A\u0412\u0415\u0421\u0422 \u0416\u041E\u0420\u042B");var u=WA.sound.loadSound("door/list.mp3");u.play(c)}});setTimeout(()=>{e.remove()},4e3)}),WA.room.onEnterLayer("YQuest/J2").subscribe(()=>{var e=WA.ui.displayActionMessage({message:"\u043D\u0430\u0436\u043C\u0438 \u041F\u0420\u041E\u0411\u0415\u041B \u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u0441\u044F",callback:()=>{WA.chat.sendChatMessage("\u0412 \u043B\u0438\u0441\u0442\u0432\u0435 \u0432\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0435 \u0437\u0430\u043F\u0438\u0441\u043A\u0443 \u0441 \u0447\u0430\u0441\u0442\u044C\u044E \u043A\u043E\u0434\u0430 *2**","\u041A\u0412\u0415\u0421\u0422 \u0416\u041E\u0420\u042B");var u=WA.sound.loadSound("door/list.mp3");u.play(c)}});setTimeout(()=>{e.remove()},4e3)}),WA.room.onEnterLayer("YQuest/J3").subscribe(()=>{var e=WA.ui.displayActionMessage({message:"\u043D\u0430\u0436\u043C\u0438 \u041F\u0420\u041E\u0411\u0415\u041B \u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C\u0441\u044F",callback:()=>{WA.chat.sendChatMessage("\u0412 \u043B\u0438\u0441\u0442\u0432\u0435 \u0432\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0435 \u0437\u0430\u043F\u0438\u0441\u043A\u0443 \u0441 \u0447\u0430\u0441\u0442\u044C\u044E \u043A\u043E\u0434\u0430 **7*","\u041A\u0412\u0415\u0421\u0422 \u0416\u041E\u0420\u042B");var u=WA.sound.loadSound("door/list.mp3");u.play(c)}});setTimeout(()=>{e.remove()},4e3)}),WA.room.onEnterLayer("YQuest/J4").subscribe(()=>{var e=WA.ui.displayActionMessage({message:"\u043D\u0430\u0436\u043C\u0438 \u041F\u0420\u041E\u0411\u0415\u041B \u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C\u0441\u044F",callback:()=>{WA.chat.sendChatMessage("\u0412 \u043B\u0438\u0441\u0442\u0432\u0435 \u0432\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0435 \u0437\u0430\u043F\u0438\u0441\u043A\u0443 \u0441 \u0447\u0430\u0441\u0442\u044C\u044E \u043A\u043E\u0434\u0430 ***5","\u041A\u0412\u0415\u0421\u0422 \u0416\u041E\u0420\u042B");var u=WA.sound.loadSound("door/list.mp3");u.play(c)}});setTimeout(()=>{e.remove()},4e3)}),WA.room.onEnterLayer("npc/npc5zone").subscribe(()=>{g=WA.ui.openPopup("npc5pop","\u0424\u0410\u042F: \u041F\u0440\u0438\u0432\u0435\u0442, \u043C\u0438\u043B\u043E\u043A! \u0420\u0430\u0437\u0431\u043E\u0439\u043D\u0438\u043A\u0438? \u0410 \u044F \u0442\u043E \u0433\u0430\u0434\u0430\u043B\u0430 \u043A\u0442\u043E \u043C\u043D\u0435 \u0433\u0440\u044F\u0434\u043A\u0438 \u0438\u0441\u0442\u043E\u043F\u0442\u0430\u043B. \u041D\u0435\u0442, \u043D\u0435 \u0432\u0438\u0434\u0435\u043B\u0430, \u043D\u043E \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0441\u043B\u044B\u0448\u0430\u043B\u0430 \u043D\u043E\u0447\u044C\u044E \u0448\u043E\u0440\u043E\u0445 \u0432 \u043E\u0433\u043E\u0440\u043E\u0434\u0435. \u041C\u043E\u0436\u0435\u0442 \u0423\u0413\u041E\u041B\u0401\u041A \u0447\u0442\u043E-\u0442\u043E \u0432\u0438\u0434\u0435\u043B...",[]);var e=WA.sound.loadSound("npc/faya.mp3");e.play(c)}),WA.room.onLeaveLayer("npc/npc5zone").subscribe(y),WA.room.onEnterLayer("npc/npc6zone").subscribe(()=>{g=WA.ui.openPopup("npc6pop","\u0423\u0413\u041E\u041B\u0401\u041A: \u041C\u044F\u0432, \u043F\u043E\u0441\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0439 \u0432 \u043B\u0430\u0431\u0438\u0440\u0438\u043D\u0442\u0435, \u043A\u0442\u043E\u043D\u0438\u0431\u0443\u0442\u044C \u0438\u0437 \u0437\u0432\u0435\u0440\u0435\u0439 \u0434\u043E\u043B\u0436\u0435\u043D \u0437\u043D\u0430\u0442\u044C \u043A\u043E\u0434.",[]);var e=WA.sound.loadSound("npc/myu.mp3");e.play(c)}),WA.room.onLeaveLayer("npc/npc6zone").subscribe(y),WA.room.onEnterLayer("npc/npc7zone").subscribe(()=>{g=WA.ui.openPopup("npc7pop","\u0416\u0415\u041B\u0422\u041E\u041F\u0423\u0417\u0418\u041A: \u0411\u0435\u0437 \u043F\u0430\u0440\u043E\u043B\u044F \u043D\u0435 \u043F\u0443\u0449\u0443",[]);var e=WA.sound.loadSound("npc/shhh.mp3");e.play(c)}),WA.room.onLeaveLayer("npc/npc7zone").subscribe(y),WA.room.onEnterLayer("npc/npc8zone").subscribe(()=>{g=WA.ui.openPopup("npc8pop","\u0422\u0420\u0415\u0422\u042C\u042F \u0426\u0418\u0424\u0420\u0410 \u041E\u0414\u0418\u041D",[]);var e=WA.sound.loadSound("npc/kwa.mp3");e.play(c)}),WA.room.onLeaveLayer("npc/npc8zone").subscribe(y),WA.room.onEnterLayer("npc/npc9zone").subscribe(()=>{g=WA.ui.openPopup("npc9pop","\u041F\u0415\u0420\u0412\u0410\u042F  \u0426\u0418\u0424\u0420\u0410 \u0411\u041E\u041B\u042C\u0428\u0415 \u0412\u0422\u041E\u0420\u041E\u0419 \u041D\u0410 \u0414\u0412\u0410",[]);var e=WA.sound.loadSound("door/magic.mp3");e.play(c)}),WA.room.onLeaveLayer("npc/npc9zone").subscribe(y),WA.room.onEnterLayer("npc/npc10zone").subscribe(()=>{g=WA.ui.openPopup("npc10pop","\u0412\u0422\u041E\u0420\u0410\u042F  \u0426\u0418\u0424\u0420\u0410 \u0420\u0410\u0412\u041D\u0410 \u0427\u0415\u0422\u0412\u0415\u0420\u0422\u041E\u0419",[]);var e=WA.sound.loadSound("npc/golub.mp3");e.play(c)}),WA.room.onLeaveLayer("npc/npc10zone").subscribe(y),WA.room.onEnterLayer("npc/npc11zone").subscribe(()=>{g=WA.ui.openPopup("npc11pop","\u0427\u0415\u0422\u0412\u0415\u0420\u0422\u0410\u042F  \u0426\u0418\u0424\u0420\u0410 \u0428\u0415\u0421\u0422\u042C.",[]);var e=WA.sound.loadSound("npc/spider.mp3");e.play(c)}),WA.room.onLeaveLayer("npc/npc11zone").subscribe(y),WA.room.onEnterLayer("npc/npc12zone").subscribe(()=>{g=WA.ui.openPopup("npc12pop","\u041F\u0440\u0438\u0432\u0435\u0442. \u042D\u0442\u043E \u0431\u0443\u0434\u0435\u0442 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u043E\u043D\u043A\u0443\u0440\u0441. \u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u0412\u0443\u0434\u043E\u043D\u0430. \u0411\u0435\u0440\u0438\u0442\u0435 \u043A\u0438\u0441\u0442\u043E\u0447\u043A\u0438 \u0438 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442\u0435 \u043A \u0434\u043E\u0441\u043A\u0430\u043C \u0443 \u0432\u0430\u0441 5 \u043C\u0438\u043D\u0443\u0442.",[]);var e=WA.sound.loadSound("npc/sasha.mp3");e.play(c)}),WA.room.onLeaveLayer("npc/npc12zone").subscribe(y),WA.room.onEnterLayer("npc/npc13zone").subscribe(()=>{g=WA.ui.openPopup("npc13pop","\u0413\u0430\u0432. \u041D\u043E\u0447\u044C\u044E \u0440\u0430\u0437\u0431\u043E\u0439\u043D\u0438\u043A\u0438 \u0441\u043F\u0440\u044F\u0442\u0430\u043B\u0438 \u043A\u043B\u0430\u0434 \u043D\u0430 \u0443\u0447\u0430\u0441\u0442\u043A\u0435 \u0442\u0435\u0442\u0443\u0448\u043A\u0438 \u0424\u0430\u0438, \u043D\u043E \u0441\u043F\u0435\u0440\u0432\u0430 \u0442\u0435\u0431\u0435 \u043D\u0443\u0436\u043D\u043E \u043F\u0440\u043E\u0439\u0434\u0442\u0438 \u044D\u0442\u043E\u0442 \u043B\u0430\u0431\u0438\u0440\u0438\u043D\u0442.",[]);var e=WA.sound.loadSound("npc/gav.mp3");e.play(c)}),WA.room.onLeaveLayer("npc/npc13zone").subscribe(y),WA.room.onEnterLayer("npc/h1zone").subscribe(()=>{g=WA.ui.openPopup("h1pop","\u0424\u0430\u044F \u0424\u0430\u044E\u0448\u043A\u0430 \u043C\u043E\u044F - \u0434\u0430 \u043F\u0440\u043E\u0441\u0442\u0438 \u0442\u044B \u0434\u0443\u0440\u0430\u043A\u0430! \u042F \u0432 \u0444\u044C\u044E\u0447\u0430\u0445 \u0441\u043E\u0432\u0441\u0435\u043C \u043D\u0435 \u0441\u043F\u043B\u044E, \u043F\u043E \u0431\u0443\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u0443 \u0436\u0438\u0432\u0443! \u041D\u043E \u043F\u043E\u043C\u043E\u0447\u044C \u043A \u0442\u0435\u0431\u0435 \u043F\u0440\u0438\u0434\u0443,  \u0418 \u043A\u043E\u0440\u0442\u043E\u0448\u043A\u0443 \u041F\u041E\u0421\u041E\u0414\u042E!",[]);var e=WA.sound.loadSound("door/magic.mp3");e.play(c)}),WA.room.onLeaveLayer("npc/h1zone").subscribe(y),WA.room.onEnterLayer("npc/h2zone").subscribe(()=>{g=WA.ui.openPopup("h2pop","\u0411\u0430\u043A\u043B\u0430\u0436\u0430\u043D\u044B\u0447\u044C \u043E\u043D \u0442\u0430\u043A\u043E\u0439! \u0418 \u0430\u0440\u0431\u0443\u0437\u0438\u043A, \u043F\u043E\u043C\u0438\u0434\u043E\u0440 \u0412\u0441\u0435 \u041F\u041E\u0421\u041E\u0414\u0418\u0422, \u0432\u0441\u0435 \u043F\u043E\u043B\u044C\u0435\u0442! \u0422\u043E\u043B\u044C\u043A\u043E \u0432\u043E\u0442 \u0435\u0433\u043E \u0431\u0435\u0434\u0430 \u041D\u0435 \u0443\u0432\u0438\u0434\u0438\u0442 \u043D\u0438\u0444\u0438\u0433\u0430! \u0422\u0430\u043C \u0437\u0430 \u0433\u0440\u044F\u0434\u043A\u0430\u043C\u0438 \u0443\u0436\u0435 \u0441\u0442\u043E\u0438\u0442 \u0421\u0430\u0448\u0430 \u0442\u0430\u043A \u043F\u043E\u0447\u0442\u0438 \u0434\u0432\u0430 \u0434\u043D\u044F!",[]);var e=WA.sound.loadSound("door/magic.mp3");e.play(c)}),WA.room.onLeaveLayer("npc/h2zone").subscribe(y),WA.room.onEnterLayer("npc/h3zone").subscribe(()=>{g=WA.ui.openPopup("h3pop","\u0421\u0430\u0448\u0438 \u043A\u0430\u043A \u0432\u0438\u0434\u0438\u0448\u044C \u0442\u0443\u0442 \u043D\u0435\u0442 - \u043D\u043E \u0447\u0442\u043E \u0442\u043E \u043C\u043D\u0435 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0447\u0442\u043E \u0441\u0442\u043E\u0438\u0442 \u0433\u043B\u044F\u043D\u0443\u0442\u044C \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u043C\u0438\u0440\u0435! \u041F\u0440\u0438\u0445\u043E\u0434\u0438 \u043D\u0430 \u0441\u0446\u0435\u043D\u0443 - \u0438 \u0432\u043A\u043B\u044E\u0447\u0430\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0441 \u043A\u0430\u043C\u0435\u0440\u043E\u0439 - \u0433\u043B\u044F\u043D\u0435\u043C \u043A\u0430\u043A \u043D\u0430\u0439\u0434\u0435\u0448\u044C \u0421\u0430\u0448\u0443!",[]);var e=WA.sound.loadSound("door/magic.mp3");e.play(c)}),WA.room.onLeaveLayer("npc/h3zone").subscribe(y),Ku().then(()=>{console.log("Scripting API Extra ready")}).catch(e=>console.error(e))}).catch(e=>console.error(e));function y(){g!==void 0&&(g.close(),g=void 0)}var c={volume:.2,loop:!1,rate:1,detune:1,delay:0,seek:0,mute:!1};
