import{_ as Ea,r as Ot,o as re,c as oe,b as rt,w as xt,d as $e,a as R,t as Je,F as mr,f as yr,g as yi,h as Ta,i as Ia,e as Ca,n as Sa}from"./index.8f16f76b.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},ba=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},wr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,h=r>>2,l=(r&3)<<4|a>>4;let g=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(g=64)),s.push(n[h],n[l],n[g],n[m])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(vr(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ba(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const l=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||u==null||l==null)throw Error();const g=r<<2|a>>4;if(s.push(g),u!==64){const m=a<<4&240|u>>2;if(s.push(m),l!==64){const C=u<<6&192|l;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},_a=function(e){const t=vr(e);return wr.encodeByteArray(t,!0)},Ze=function(e){return _a(e).replace(/\./g,"")},Aa=function(e){try{return wr.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function Da(){return typeof indexedDB=="object"}function Na(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}function ka(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=()=>ka().__FIREBASE_DEFAULTS__,xa=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},La=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Aa(e[1]);return t&&JSON.parse(t)},Er=()=>{try{return Ra()||xa()||La()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Oa=e=>{var t,n;return(n=(t=Er())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Ma=e=>{const t=Oa(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Va=()=>{var e;return(e=Er())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Ze(JSON.stringify(n)),Ze(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="FirebaseError";class Qt extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Ua,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tr.prototype.create)}}class Tr{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Ba(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Qt(i,a,s)}}function Ba(e,t){return e.replace($a,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const $a=/\{\$([^}]+)}/g;function Jn(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(vi(r)&&vi(o)){if(!Jn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function vi(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(e){return e&&e._delegate?e._delegate:e}class le{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Pa;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ka(t))try{this.getOrInitializeService({instanceIdentifier:vt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=vt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=vt){return this.instances.has(t)}getOptions(t=vt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ha(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=vt){return this.component?this.component.multipleInstances?t:vt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ha(e){return e===vt?void 0:e}function Ka(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ja(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(A||(A={}));const Ga={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},Qa=A.INFO,Wa={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},Xa=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=Wa[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ir{constructor(t){this.name=t,this._logLevel=Qa,this._logHandler=Xa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in A))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ga[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...t),this._logHandler(this,A.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...t),this._logHandler(this,A.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,A.INFO,...t),this._logHandler(this,A.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,A.WARN,...t),this._logHandler(this,A.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...t),this._logHandler(this,A.ERROR,...t)}}const Ya=(e,t)=>t.some(n=>e instanceof n);let wi,Ei;function Ja(){return wi||(wi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Za(){return Ei||(Ei=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cr=new WeakMap,Zn=new WeakMap,Sr=new WeakMap,Pn=new WeakMap,Ds=new WeakMap;function tc(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(ht(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Cr.set(n,e)}).catch(()=>{}),Ds.set(t,e),t}function ec(e){if(Zn.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});Zn.set(e,t)}let ts={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Zn.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Sr.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ht(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function nc(e){ts=e(ts)}function sc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Fn(this),t,...n);return Sr.set(s,t.sort?t.sort():[t]),ht(s)}:Za().includes(e)?function(...t){return e.apply(Fn(this),t),ht(Cr.get(this))}:function(...t){return ht(e.apply(Fn(this),t))}}function ic(e){return typeof e=="function"?sc(e):(e instanceof IDBTransaction&&ec(e),Ya(e,Ja())?new Proxy(e,ts):e)}function ht(e){if(e instanceof IDBRequest)return tc(e);if(Pn.has(e))return Pn.get(e);const t=ic(e);return t!==e&&(Pn.set(e,t),Ds.set(t,e)),t}const Fn=e=>Ds.get(e);function rc(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=ht(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ht(o.result),c.oldVersion,c.newVersion,ht(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const oc=["get","getKey","getAll","getAllKeys","count"],ac=["put","add","delete","clear"],Un=new Map;function Ti(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Un.get(t))return Un.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=ac.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||oc.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Un.set(t,r),r}nc(e=>({...e,get:(t,n,s)=>Ti(t,n)||e.get(t,n,s),has:(t,n)=>!!Ti(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uc(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function uc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const es="@firebase/app",Ii="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new Ir("@firebase/app"),hc="@firebase/app-compat",lc="@firebase/analytics-compat",dc="@firebase/analytics",fc="@firebase/app-check-compat",gc="@firebase/app-check",pc="@firebase/auth",mc="@firebase/auth-compat",yc="@firebase/database",vc="@firebase/database-compat",wc="@firebase/functions",Ec="@firebase/functions-compat",Tc="@firebase/installations",Ic="@firebase/installations-compat",Cc="@firebase/messaging",Sc="@firebase/messaging-compat",bc="@firebase/performance",_c="@firebase/performance-compat",Ac="@firebase/remote-config",Dc="@firebase/remote-config-compat",Nc="@firebase/storage",kc="@firebase/storage-compat",Rc="@firebase/firestore",xc="@firebase/firestore-compat",Lc="firebase",Oc="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="[DEFAULT]",Mc={[es]:"fire-core",[hc]:"fire-core-compat",[dc]:"fire-analytics",[lc]:"fire-analytics-compat",[gc]:"fire-app-check",[fc]:"fire-app-check-compat",[pc]:"fire-auth",[mc]:"fire-auth-compat",[yc]:"fire-rtdb",[vc]:"fire-rtdb-compat",[wc]:"fire-fn",[Ec]:"fire-fn-compat",[Tc]:"fire-iid",[Ic]:"fire-iid-compat",[Cc]:"fire-fcm",[Sc]:"fire-fcm-compat",[bc]:"fire-perf",[_c]:"fire-perf-compat",[Ac]:"fire-rc",[Dc]:"fire-rc-compat",[Nc]:"fire-gcs",[kc]:"fire-gcs-compat",[Rc]:"fire-fst",[xc]:"fire-fst-compat","fire-js":"fire-js",[Lc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new Map,ss=new Map;function Vc(e,t){try{e.container.addComponent(t)}catch(n){At.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function en(e){const t=e.name;if(ss.has(t))return At.debug(`There were multiple attempts to register component ${t}.`),!1;ss.set(t,e);for(const n of tn.values())Vc(n,e);return!0}function Pc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},lt=new Tr("app","Firebase",Fc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=Oc;function br(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:ns,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw lt.create("bad-app-name",{appName:String(i)});if(n||(n=Va()),!n)throw lt.create("no-options");const r=tn.get(i);if(r){if(Jn(n,r.options)&&Jn(s,r.config))return r;throw lt.create("duplicate-app",{appName:i})}const o=new za(i);for(const c of ss.values())o.addComponent(c);const a=new Uc(n,s,o);return tn.set(i,a),a}function $c(e=ns){const t=tn.get(e);if(!t&&e===ns)return br();if(!t)throw lt.create("no-app",{appName:e});return t}function Pt(e,t,n){var s;let i=(s=Mc[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),At.warn(a.join(" "));return}en(new le(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="firebase-heartbeat-database",jc=1,de="firebase-heartbeat-store";let Bn=null;function _r(){return Bn||(Bn=rc(qc,jc,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(de)}}}).catch(e=>{throw lt.create("idb-open",{originalErrorMessage:e.message})})),Bn}async function Hc(e){var t;try{return(await _r()).transaction(de).objectStore(de).get(Ar(e))}catch(n){if(n instanceof Qt)At.warn(n.message);else{const s=lt.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});At.warn(s.message)}}}async function Ci(e,t){var n;try{const i=(await _r()).transaction(de,"readwrite");return await i.objectStore(de).put(t,Ar(e)),i.done}catch(s){if(s instanceof Qt)At.warn(s.message);else{const i=lt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});At.warn(i.message)}}}function Ar(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=1024,zc=30*24*60*60*1e3;class Gc{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Wc(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Si();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=zc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Si(),{heartbeatsToSend:n,unsentEntries:s}=Qc(this._heartbeatsCache.heartbeats),i=Ze(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Si(){return new Date().toISOString().substring(0,10)}function Qc(e,t=Kc){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),bi(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bi(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Wc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Da()?Na().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Hc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ci(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ci(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function bi(e){return Ze(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(e){en(new le("platform-logger",t=>new cc(t),"PRIVATE")),en(new le("heartbeat",t=>new Gc(t),"PRIVATE")),Pt(es,Ii,e),Pt(es,Ii,"esm2017"),Pt("fire-js","")}Xc("");var Yc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p,Ns=Ns||{},E=Yc||self;function nn(){}function pn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Se(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Jc(e){return Object.prototype.hasOwnProperty.call(e,$n)&&e[$n]||(e[$n]=++Zc)}var $n="closure_uid_"+(1e9*Math.random()>>>0),Zc=0;function tu(e,t,n){return e.call.apply(e.bind,arguments)}function eu(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function G(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?G=tu:G=eu,G.apply(null,arguments)}function qe(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function K(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function pt(){this.s=this.s,this.o=this.o}var nu=0;pt.prototype.s=!1;pt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),nu!=0)&&Jc(this)};pt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Dr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ks(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function _i(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(pn(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function Q(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Q.prototype.h=function(){this.defaultPrevented=!0};var su=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{E.addEventListener("test",nn,t),E.removeEventListener("test",nn,t)}catch{}return e}();function sn(e){return/^[\s\xa0]*$/.test(e)}var Ai=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function qn(e,t){return e<t?-1:e>t?1:0}function mn(){var e=E.navigator;return e&&(e=e.userAgent)?e:""}function nt(e){return mn().indexOf(e)!=-1}function Rs(e){return Rs[" "](e),e}Rs[" "]=nn;function iu(e){var t=au;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var ru=nt("Opera"),qt=nt("Trident")||nt("MSIE"),Nr=nt("Edge"),is=Nr||qt,kr=nt("Gecko")&&!(mn().toLowerCase().indexOf("webkit")!=-1&&!nt("Edge"))&&!(nt("Trident")||nt("MSIE"))&&!nt("Edge"),ou=mn().toLowerCase().indexOf("webkit")!=-1&&!nt("Edge");function Rr(){var e=E.document;return e?e.documentMode:void 0}var rn;t:{var jn="",Hn=function(){var e=mn();if(kr)return/rv:([^\);]+)(\)|;)/.exec(e);if(Nr)return/Edge\/([\d\.]+)/.exec(e);if(qt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(ou)return/WebKit\/(\S+)/.exec(e);if(ru)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Hn&&(jn=Hn?Hn[1]:""),qt){var Kn=Rr();if(Kn!=null&&Kn>parseFloat(jn)){rn=String(Kn);break t}}rn=jn}var au={};function cu(){return iu(function(){let e=0;const t=Ai(String(rn)).split("."),n=Ai("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=qn(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||qn(i[2].length==0,r[2].length==0)||qn(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var rs;if(E.document&&qt){var Di=Rr();rs=Di||parseInt(rn,10)||void 0}else rs=void 0;var uu=rs;function fe(e,t){if(Q.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(kr){t:{try{Rs(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:hu[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&fe.X.h.call(this)}}K(fe,Q);var hu={2:"touch",3:"pen",4:"mouse"};fe.prototype.h=function(){fe.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),lu=0;function du(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++lu,this.ba=this.ea=!1}function yn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function xs(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function xr(e){const t={};for(const n in e)t[n]=e[n];return t}const Ni="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Lr(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<Ni.length;r++)n=Ni[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function vn(e){this.src=e,this.g={},this.h=0}vn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=as(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new du(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function os(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=Dr(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(yn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function as(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var Ls="closure_lm_"+(1e6*Math.random()|0),zn={};function Or(e,t,n,s,i){if(s&&s.once)return Vr(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Or(e,t[r],n,s,i);return null}return n=Vs(n),e&&e[be]?e.N(t,n,Se(s)?!!s.capture:!!s,i):Mr(e,t,n,!1,s,i)}function Mr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Se(i)?!!i.capture:!!i,a=Ms(e);if(a||(e[Ls]=a=new vn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=fu(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)su||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(Fr(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function fu(){function e(n){return t.call(e.src,e.listener,n)}const t=gu;return e}function Vr(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Vr(e,t[r],n,s,i);return null}return n=Vs(n),e&&e[be]?e.O(t,n,Se(s)?!!s.capture:!!s,i):Mr(e,t,n,!0,s,i)}function Pr(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)Pr(e,t[r],n,s,i);else s=Se(s)?!!s.capture:!!s,n=Vs(n),e&&e[be]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=as(r,n,s,i),-1<n&&(yn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ms(e))&&(t=e.g[t.toString()],e=-1,t&&(e=as(t,n,s,i)),(n=-1<e?t[e]:null)&&Os(n))}function Os(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[be])os(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Fr(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ms(t))?(os(n,e),n.h==0&&(n.src=null,t[Ls]=null)):yn(e)}}}function Fr(e){return e in zn?zn[e]:zn[e]="on"+e}function gu(e,t){if(e.ba)e=!0;else{t=new fe(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&Os(e),e=n.call(s,t)}return e}function Ms(e){return e=e[Ls],e instanceof vn?e:null}var Gn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vs(e){return typeof e=="function"?e:(e[Gn]||(e[Gn]=function(t){return e.handleEvent(t)}),e[Gn])}function B(){pt.call(this),this.i=new vn(this),this.P=this,this.I=null}K(B,pt);B.prototype[be]=!0;B.prototype.removeEventListener=function(e,t,n,s){Pr(this,e,t,n,s)};function H(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Q(t,e);else if(t instanceof Q)t.target=t.target||e;else{var i=t;t=new Q(s,e),Lr(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=je(o,s,!0,t)&&i}if(o=t.g=e,i=je(o,s,!0,t)&&i,i=je(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=je(o,s,!1,t)&&i}B.prototype.M=function(){if(B.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)yn(n[s]);delete e.g[t],e.h--}}this.I=null};B.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};B.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function je(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&os(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ps=E.JSON.stringify;function pu(){var e=$r;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class mu{constructor(){this.h=this.g=null}add(t,n){const s=Ur.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ur=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new yu,e=>e.reset());class yu{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function vu(e){E.setTimeout(()=>{throw e},0)}function Br(e,t){cs||wu(),us||(cs(),us=!0),$r.add(e,t)}var cs;function wu(){var e=E.Promise.resolve(void 0);cs=function(){e.then(Eu)}}var us=!1,$r=new mu;function Eu(){for(var e;e=pu();){try{e.h.call(e.g)}catch(n){vu(n)}var t=Ur;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}us=!1}function wn(e,t){B.call(this),this.h=e||1,this.g=t||E,this.j=G(this.lb,this),this.l=Date.now()}K(wn,B);p=wn.prototype;p.ca=!1;p.R=null;p.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),H(this,"tick"),this.ca&&(Fs(this),this.start()))}};p.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Fs(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}p.M=function(){wn.X.M.call(this),Fs(this),delete this.g};function Us(e,t,n){if(typeof e=="function")n&&(e=G(e,n));else if(e&&typeof e.handleEvent=="function")e=G(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:E.setTimeout(e,t||0)}function qr(e){e.g=Us(()=>{e.g=null,e.i&&(e.i=!1,qr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Tu extends pt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:qr(this)}M(){super.M(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ge(e){pt.call(this),this.h=e,this.g={}}K(ge,pt);var ki=[];function jr(e,t,n,s){Array.isArray(n)||(n&&(ki[0]=n.toString()),n=ki);for(var i=0;i<n.length;i++){var r=Or(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Hr(e){xs(e.g,function(t,n){this.g.hasOwnProperty(n)&&Os(t)},e),e.g={}}ge.prototype.M=function(){ge.X.M.call(this),Hr(this)};ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function En(){this.g=!0}En.prototype.Aa=function(){this.g=!1};function Iu(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Cu(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Mt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+bu(e,n)+(s?" "+s:"")})}function Su(e,t){e.info(function(){return"TIMEOUT: "+t})}En.prototype.info=function(){};function bu(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ps(n)}catch{return t}}var kt={},Ri=null;function Tn(){return Ri=Ri||new B}kt.Pa="serverreachability";function Kr(e){Q.call(this,kt.Pa,e)}K(Kr,Q);function pe(e){const t=Tn();H(t,new Kr(t))}kt.STAT_EVENT="statevent";function zr(e,t){Q.call(this,kt.STAT_EVENT,e),this.stat=t}K(zr,Q);function X(e){const t=Tn();H(t,new zr(t,e))}kt.Qa="timingevent";function Gr(e,t){Q.call(this,kt.Qa,e),this.size=t}K(Gr,Q);function _e(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){e()},t)}var In={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Qr={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Bs(){}Bs.prototype.h=null;function xi(e){return e.h||(e.h=e.i())}function Wr(){}var Ae={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function $s(){Q.call(this,"d")}K($s,Q);function qs(){Q.call(this,"c")}K(qs,Q);var hs;function Cn(){}K(Cn,Bs);Cn.prototype.g=function(){return new XMLHttpRequest};Cn.prototype.i=function(){return{}};hs=new Cn;function De(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new ge(this),this.O=_u,e=is?125:void 0,this.T=new wn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Xr}function Xr(){this.i=null,this.g="",this.h=!1}var _u=45e3,ls={},on={};p=De.prototype;p.setTimeout=function(e){this.O=e};function ds(e,t,n){e.K=1,e.v=bn(at(t)),e.s=n,e.P=!0,Yr(e,null)}function Yr(e,t){e.F=Date.now(),Ne(e),e.A=at(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),ro(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Xr,e.g=Ao(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Tu(G(e.La,e,e.g),e.N)),jr(e.S,e.g,"readystatechange",e.ib),t=e.H?xr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),pe(),Iu(e.j,e.u,e.A,e.m,e.U,e.s)}p.ib=function(e){e=e.target;const t=this.L;t&&ot(e)==3?t.l():this.La(e)};p.La=function(e){try{if(e==this.g)t:{const h=ot(this.g);var t=this.g.Ea();const l=this.g.aa();if(!(3>h)&&(h!=3||is||this.g&&(this.h.h||this.g.fa()||Vi(this.g)))){this.I||h!=4||t==7||(t==8||0>=l?pe(3):pe(2)),Sn(this);var n=this.g.aa();this.Y=n;e:if(Jr(this)){var s=Vi(this.g);e="";var i=s.length,r=ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wt(this),ae(this);var o="";break e}this.h.i=new E.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Cu(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sn(a)){var u=a;break e}}u=null}if(n=u)Mt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,fs(this,n);else{this.i=!1,this.o=3,X(12),wt(this),ae(this);break t}}this.P?(Zr(this,h,o),is&&this.i&&h==3&&(jr(this.S,this.T,"tick",this.hb),this.T.start())):(Mt(this.j,this.m,o,null),fs(this,o)),h==4&&wt(this),this.i&&!this.I&&(h==4?Co(this.l,this):(this.i=!1,Ne(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,X(12)):(this.o=0,X(13)),wt(this),ae(this)}}}catch{}finally{}};function Jr(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Zr(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=Au(e,n),i==on){t==4&&(e.o=4,X(14),s=!1),Mt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==ls){e.o=4,X(15),Mt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Mt(e.j,e.m,i,null),fs(e,i);Jr(e)&&i!=on&&i!=ls&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,X(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ws(t),t.K=!0,X(11))):(Mt(e.j,e.m,n,"[Invalid Chunked Response]"),wt(e),ae(e))}p.hb=function(){if(this.g){var e=ot(this.g),t=this.g.fa();this.C<t.length&&(Sn(this),Zr(this,e,t),this.i&&e!=4&&Ne(this))}};function Au(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?on:(n=Number(t.substring(n,s)),isNaN(n)?ls:(s+=1,s+n>t.length?on:(t=t.substr(s,n),e.C=s+n,t)))}p.cancel=function(){this.I=!0,wt(this)};function Ne(e){e.V=Date.now()+e.O,to(e,e.O)}function to(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=_e(G(e.gb,e),t)}function Sn(e){e.B&&(E.clearTimeout(e.B),e.B=null)}p.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Su(this.j,this.A),this.K!=2&&(pe(),X(17)),wt(this),this.o=2,ae(this)):to(this,this.V-e)};function ae(e){e.l.G==0||e.I||Co(e.l,e)}function wt(e){Sn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Fs(e.T),Hr(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function fs(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||gs(n.h,e))){if(!e.J&&gs(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)un(n),Dn(n);else break t;Qs(n),X(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=_e(G(n.cb,n),6e3));if(1>=co(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Et(n,11)}else if((e.J||n.g==e)&&un(n),!sn(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const h=u[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const l=u[4];l!=null&&(n.Ca=l,n.j.info("SVER="+n.Ca));const g=u[5];g!=null&&typeof g=="number"&&0<g&&(s=1.5*g,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const C=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(C){var r=s.h;r.g||C.indexOf("spdy")==-1&&C.indexOf("quic")==-1&&C.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(js(r,r.h),r.h=null))}if(s.D){const k=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;k&&(s.za=k,N(s.F,s.D,k))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=_o(s,s.H?s.ka:null,s.V),o.J){uo(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Sn(a),Ne(a)),s.g=o}else To(s);0<n.i.length&&Nn(n)}else u[0]!="stop"&&u[0]!="close"||Et(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Et(n,7):Gs(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}pe(4)}catch{}}function Du(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(pn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Nu(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(pn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function eo(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(pn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Nu(e),s=Du(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var no=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ku(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function It(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof It){this.h=t!==void 0?t:e.h,an(this,e.j),this.s=e.s,this.g=e.g,cn(this,e.m),this.l=e.l,t=e.i;var n=new me;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Li(this,n),this.o=e.o}else e&&(n=String(e).match(no))?(this.h=!!t,an(this,n[1]||"",!0),this.s=ne(n[2]||""),this.g=ne(n[3]||"",!0),cn(this,n[4]),this.l=ne(n[5]||"",!0),Li(this,n[6]||"",!0),this.o=ne(n[7]||"")):(this.h=!!t,this.i=new me(null,this.h))}It.prototype.toString=function(){var e=[],t=this.j;t&&e.push(se(t,Oi,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(se(t,Oi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(se(n,n.charAt(0)=="/"?Lu:xu,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",se(n,Mu)),e.join("")};function at(e){return new It(e)}function an(e,t,n){e.j=n?ne(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function cn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Li(e,t,n){t instanceof me?(e.i=t,Vu(e.i,e.h)):(n||(t=se(t,Ou)),e.i=new me(t,e.h))}function N(e,t,n){e.i.set(t,n)}function bn(e){return N(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ne(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function se(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Ru),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ru(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Oi=/[#\/\?@]/g,xu=/[#\?:]/g,Lu=/[#\?]/g,Ou=/[#\?@]/g,Mu=/#/g;function me(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function mt(e){e.g||(e.g=new Map,e.h=0,e.i&&ku(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}p=me.prototype;p.add=function(e,t){mt(this),this.i=null,e=Wt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function so(e,t){mt(e),t=Wt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function io(e,t){return mt(e),t=Wt(e,t),e.g.has(t)}p.forEach=function(e,t){mt(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};p.oa=function(){mt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};p.W=function(e){mt(this);let t=[];if(typeof e=="string")io(this,e)&&(t=t.concat(this.g.get(Wt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};p.set=function(e,t){return mt(this),this.i=null,e=Wt(this,e),io(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};p.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function ro(e,t,n){so(e,t),0<n.length&&(e.i=null,e.g.set(Wt(e,t),ks(n)),e.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function Wt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Vu(e,t){t&&!e.j&&(mt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(so(this,s),ro(this,i,n))},e)),e.j=t}var Pu=class{constructor(e,t){this.h=e,this.g=t}};function oo(e){this.l=e||Fu,E.PerformanceNavigationTiming?(e=E.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(E.g&&E.g.Ga&&E.g.Ga()&&E.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Fu=10;function ao(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function co(e){return e.h?1:e.g?e.g.size:0}function gs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function js(e,t){e.g?e.g.add(t):e.h=t}function uo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}oo.prototype.cancel=function(){if(this.i=ho(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function ho(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ks(e.i)}function Hs(){}Hs.prototype.stringify=function(e){return E.JSON.stringify(e,void 0)};Hs.prototype.parse=function(e){return E.JSON.parse(e,void 0)};function Uu(){this.g=new Hs}function Bu(e,t,n){const s=n||"";try{eo(e,function(i,r){let o=i;Se(i)&&(o=Ps(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function $u(e,t){const n=new En;if(E.Image){const s=new Image;s.onload=qe(He,n,s,"TestLoadImage: loaded",!0,t),s.onerror=qe(He,n,s,"TestLoadImage: error",!1,t),s.onabort=qe(He,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=qe(He,n,s,"TestLoadImage: timeout",!1,t),E.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function He(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function ke(e){this.l=e.ac||null,this.j=e.jb||!1}K(ke,Bs);ke.prototype.g=function(){return new _n(this.l,this.j)};ke.prototype.i=function(e){return function(){return e}}({});function _n(e,t){B.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ks,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}K(_n,B);var Ks=0;p=_n.prototype;p.open=function(e,t){if(this.readyState!=Ks)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ye(this)};p.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||E).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Re(this)),this.readyState=Ks};p.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ye(this)),this.g&&(this.readyState=3,ye(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof E.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;lo(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function lo(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}p.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Re(this):ye(this),this.readyState==3&&lo(this)}};p.Va=function(e){this.g&&(this.response=this.responseText=e,Re(this))};p.Ua=function(e){this.g&&(this.response=e,Re(this))};p.ga=function(){this.g&&Re(this)};function Re(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ye(e)}p.setRequestHeader=function(e,t){this.v.append(e,t)};p.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ye(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(_n.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var qu=E.JSON.parse;function L(e){B.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=fo,this.K=this.L=!1}K(L,B);var fo="",ju=/^https?$/i,Hu=["POST","PUT"];p=L.prototype;p.Ka=function(e){this.L=e};p.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():hs.g(),this.C=this.u?xi(this.u):xi(hs),this.g.onreadystatechange=G(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Mi(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=E.FormData&&e instanceof E.FormData,!(0<=Dr(Hu,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{mo(this),0<this.B&&((this.K=Ku(this.g))?(this.g.timeout=this.B,this.g.ontimeout=G(this.qa,this)):this.A=Us(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Mi(this,r)}};function Ku(e){return qt&&cu()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}p.qa=function(){typeof Ns<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,H(this,"timeout"),this.abort(8))};function Mi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,go(e),An(e)}function go(e){e.D||(e.D=!0,H(e,"complete"),H(e,"error"))}p.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,H(this,"complete"),H(this,"abort"),An(this))};p.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),An(this,!0)),L.X.M.call(this)};p.Ha=function(){this.s||(this.F||this.v||this.l?po(this):this.fb())};p.fb=function(){po(this)};function po(e){if(e.h&&typeof Ns<"u"&&(!e.C[1]||ot(e)!=4||e.aa()!=2)){if(e.v&&ot(e)==4)Us(e.Ha,0,e);else if(H(e,"readystatechange"),ot(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(no)[1]||null;if(!i&&E.self&&E.self.location){var r=E.self.location.protocol;i=r.substr(0,r.length-1)}s=!ju.test(i?i.toLowerCase():"")}n=s}if(n)H(e,"complete"),H(e,"success");else{e.m=6;try{var o=2<ot(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",go(e)}}finally{An(e)}}}}function An(e,t){if(e.g){mo(e);const n=e.g,s=e.C[0]?nn:null;e.g=null,e.C=null,t||H(e,"ready");try{n.onreadystatechange=s}catch{}}}function mo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(E.clearTimeout(e.A),e.A=null)}function ot(e){return e.g?e.g.readyState:0}p.aa=function(){try{return 2<ot(this)?this.g.status:-1}catch{return-1}};p.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),qu(t)}};function Vi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case fo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}p.Ea=function(){return this.m};p.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function yo(e){let t="";return xs(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function zs(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=yo(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):N(e,t,n))}function ee(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function vo(e){this.Ca=0,this.i=[],this.j=new En,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ee("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ee("baseRetryDelayMs",5e3,e),this.bb=ee("retryDelaySeedMs",1e4,e),this.$a=ee("forwardChannelMaxRetries",2,e),this.ta=ee("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new oo(e&&e.concurrentRequestLimit),this.Fa=new Uu,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}p=vo.prototype;p.ma=8;p.G=1;function Gs(e){if(wo(e),e.G==3){var t=e.U++,n=at(e.F);N(n,"SID",e.I),N(n,"RID",t),N(n,"TYPE","terminate"),xe(e,n),t=new De(e,e.j,t,void 0),t.K=2,t.v=bn(at(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(t.v.toString(),"")),!n&&E.Image&&(new Image().src=t.v,n=!0),n||(t.g=Ao(t.l,null),t.g.da(t.v)),t.F=Date.now(),Ne(t)}bo(e)}function Dn(e){e.g&&(Ws(e),e.g.cancel(),e.g=null)}function wo(e){Dn(e),e.u&&(E.clearTimeout(e.u),e.u=null),un(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&E.clearTimeout(e.m),e.m=null)}function Nn(e){ao(e.h)||e.m||(e.m=!0,Br(e.Ja,e),e.C=0)}function zu(e,t){return co(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=_e(G(e.Ja,e,t),So(e,e.C)),e.C++,!0)}p.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new De(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=xr(r),Lr(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Eo(this,i,t),n=at(this.F),N(n,"RID",e),N(n,"CVER",22),this.D&&N(n,"X-HTTP-Session-Id",this.D),xe(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(yo(r)))+"&"+t:this.o&&zs(n,this.o,r)),js(this.h,i),this.Ya&&N(n,"TYPE","init"),this.O?(N(n,"$req",t),N(n,"SID","null"),i.Z=!0,ds(i,n,null)):ds(i,n,t),this.G=2}}else this.G==3&&(e?Pi(this,e):this.i.length==0||ao(this.h)||Pi(this))};function Pi(e,t){var n;t?n=t.m:n=e.U++;const s=at(e.F);N(s,"SID",e.I),N(s,"RID",n),N(s,"AID",e.T),xe(e,s),e.o&&e.s&&zs(s,e.o,e.s),n=new De(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Eo(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),js(e.h,n),ds(n,s,t)}function xe(e,t){e.ia&&xs(e.ia,function(n,s){N(t,s,n)}),e.l&&eo({},function(n,s){N(t,s,n)})}function Eo(e,t,n){n=Math.min(e.i.length,n);var s=e.l?G(e.l.Ra,e.l,e):null;t:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const h=i[c].g;if(u-=r,0>u)r=Math.max(0,i[c].h-100),a=!1;else try{Bu(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function To(e){e.g||e.u||(e.Z=1,Br(e.Ia,e),e.A=0)}function Qs(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=_e(G(e.Ia,e),So(e,e.A)),e.A++,!0)}p.Ia=function(){if(this.u=null,Io(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=_e(G(this.eb,this),e)}};p.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,X(10),Dn(this),Io(this))};function Ws(e){e.B!=null&&(E.clearTimeout(e.B),e.B=null)}function Io(e){e.g=new De(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=at(e.sa);N(t,"RID","rpc"),N(t,"SID",e.I),N(t,"CI",e.L?"0":"1"),N(t,"AID",e.T),N(t,"TYPE","xmlhttp"),xe(e,t),e.o&&e.s&&zs(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=bn(at(t)),n.s=null,n.P=!0,Yr(n,e)}p.cb=function(){this.v!=null&&(this.v=null,Dn(this),Qs(this),X(19))};function un(e){e.v!=null&&(E.clearTimeout(e.v),e.v=null)}function Co(e,t){var n=null;if(e.g==t){un(e),Ws(e),e.g=null;var s=2}else if(gs(e.h,t))n=t.D,uo(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=Tn(),H(s,new Gr(s,n)),Nn(e)}else To(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&zu(e,t)||s==2&&Qs(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Et(e,5);break;case 4:Et(e,10);break;case 3:Et(e,6);break;default:Et(e,2)}}}function So(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Et(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=G(e.kb,e);n||(n=new It("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||an(n,"https"),bn(n)),$u(n.toString(),s)}else X(2);e.G=0,e.l&&e.l.va(t),bo(e),wo(e)}p.kb=function(e){e?(this.j.info("Successfully pinged google.com"),X(2)):(this.j.info("Failed to ping google.com"),X(1))};function bo(e){if(e.G=0,e.la=[],e.l){const t=ho(e.h);(t.length!=0||e.i.length!=0)&&(_i(e.la,t),_i(e.la,e.i),e.h.i.length=0,ks(e.i),e.i.length=0),e.l.ua()}}function _o(e,t,n){var s=n instanceof It?at(n):new It(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),cn(s,s.m);else{var i=E.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new It(null,void 0);s&&an(r,s),t&&(r.g=t),i&&cn(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&N(s,n,t),N(s,"VER",e.ma),xe(e,s),s}function Ao(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new L(new ke({jb:!0})):new L(e.ra),t.Ka(e.H),t}function Do(){}p=Do.prototype;p.xa=function(){};p.wa=function(){};p.va=function(){};p.ua=function(){};p.Ra=function(){};function hn(){if(qt&&!(10<=Number(uu)))throw Error("Environmental error: no available transport.")}hn.prototype.g=function(e,t){return new tt(e,t)};function tt(e,t){B.call(this),this.g=new vo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!sn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!sn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Xt(this)}K(tt,B);tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;X(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=_o(e,null,e.V),Nn(e)};tt.prototype.close=function(){Gs(this.g)};tt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ps(e),e=n);t.i.push(new Pu(t.ab++,e)),t.G==3&&Nn(t)};tt.prototype.M=function(){this.g.l=null,delete this.j,Gs(this.g),delete this.g,tt.X.M.call(this)};function No(e){$s.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}K(No,$s);function ko(){qs.call(this),this.status=1}K(ko,qs);function Xt(e){this.g=e}K(Xt,Do);Xt.prototype.xa=function(){H(this.g,"a")};Xt.prototype.wa=function(e){H(this.g,new No(e))};Xt.prototype.va=function(e){H(this.g,new ko)};Xt.prototype.ua=function(){H(this.g,"b")};hn.prototype.createWebChannel=hn.prototype.g;tt.prototype.send=tt.prototype.u;tt.prototype.open=tt.prototype.m;tt.prototype.close=tt.prototype.close;In.NO_ERROR=0;In.TIMEOUT=8;In.HTTP_ERROR=6;Qr.COMPLETE="complete";Wr.EventType=Ae;Ae.OPEN="a";Ae.CLOSE="b";Ae.ERROR="c";Ae.MESSAGE="d";B.prototype.listen=B.prototype.N;L.prototype.listenOnce=L.prototype.O;L.prototype.getLastError=L.prototype.Oa;L.prototype.getLastErrorCode=L.prototype.Ea;L.prototype.getStatus=L.prototype.aa;L.prototype.getResponseJson=L.prototype.Sa;L.prototype.getResponseText=L.prototype.fa;L.prototype.send=L.prototype.da;L.prototype.setWithCredentials=L.prototype.Ka;var Gu=function(){return new hn},Qu=function(){return Tn()},Qn=In,Wu=Qr,Xu=kt,Fi={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Yu=ke,Ke=Wr,Ju=L;const Ui="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}z.UNAUTHENTICATED=new z(null),z.GOOGLE_CREDENTIALS=new z("google-credentials-uid"),z.FIRST_PARTY=new z("first-party-uid"),z.MOCK_USER=new z("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yt="9.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new Ir("@firebase/firestore");function Bi(){return Dt.logLevel}function y(e,...t){if(Dt.logLevel<=A.DEBUG){const n=t.map(Xs);Dt.debug(`Firestore (${Yt}): ${e}`,...n)}}function ct(e,...t){if(Dt.logLevel<=A.ERROR){const n=t.map(Xs);Dt.error(`Firestore (${Yt}): ${e}`,...n)}}function ps(e,...t){if(Dt.logLevel<=A.WARN){const n=t.map(Xs);Dt.warn(`Firestore (${Yt}): ${e}`,...n)}}function Xs(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e="Unexpected state"){const t=`FIRESTORE (${Yt}) INTERNAL ASSERTION FAILED: `+e;throw ct(t),new Error(t)}function P(e,t){e||T()}function _(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends Qt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Zu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(z.UNAUTHENTICATED))}shutdown(){}}class th{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eh{constructor(t){this.t=t,this.currentUser=z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Ct;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ct,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ct)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(P(typeof s.accessToken=="string"),new Ro(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return P(t===null||typeof t=="string"),new z(t)}}class nh{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=z.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(P(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class sh{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new nh(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ih{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rh{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=r=>{r.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(P(typeof n.token=="string"),this.A=n.token,new ih(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=oh(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function D(e,t){return e<t?-1:e>t?1:0}function jt(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Z.fromMillis(Date.now())}static fromDate(t){return Z.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new Z(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.timestamp=t}static fromTimestamp(t){return new I(t)}static min(){return new I(new Z(0,0))}static max(){return new I(new Z(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,n,s){n===void 0?n=0:n>t.length&&T(),s===void 0?s=t.length-n:s>t.length-n&&T(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ve.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ve?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class x extends ve{construct(t,n,s){return new x(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new v(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new x(n)}static emptyPath(){return new x([])}}const ch=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Y extends ve{construct(t,n,s){return new Y(t,n,s)}static isValidIdentifier(t){return ch.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Y.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Y(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new v(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new v(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new v(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Y(n)}static emptyPath(){return new Y([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(x.fromString(t))}static fromName(t){return new w(x.fromString(t).popFirst(5))}static empty(){return new w(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&x.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return x.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new x(t.slice()))}}function uh(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=I.fromTimestamp(s===1e9?new Z(n+1,0):new Z(n,s));return new dt(i,w.empty(),t)}function hh(e){return new dt(e.readTime,e.key,-1)}class dt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new dt(I.min(),w.empty(),-1)}static max(){return new dt(I.max(),w.empty(),-1)}}function lh(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:D(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==dh)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,s)=>{n(t)})}static reject(t){return new d((n,s)=>{s(t)})}static waitFor(t){return new d((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=d.resolve(!1);for(const s of t)n=n.next(i=>i?d.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new d((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(t[u]).next(h=>{o[u]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(t,n){return new d((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function Le(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function kn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function gh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Js.at=-1;class ${constructor(t,n){this.comparator=t,this.root=n||q.EMPTY}insert(t,n){return new $(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,q.BLACK,null,null))}remove(t){return new $(this.comparator,this.root.remove(t,this.comparator).copy(null,null,q.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ze(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ze(this.root,t,this.comparator,!1)}getReverseIterator(){return new ze(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ze(this.root,t,this.comparator,!0)}}class ze{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class q{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:q.RED,this.left=i!=null?i:q.EMPTY,this.right=r!=null?r:q.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new q(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return q.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return q.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,q.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}q.EMPTY=null,q.RED=!0,q.BLACK=!1;q.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(e,t,n,s,i){return this}insert(e,t,n){return new q(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.comparator=t,this.data=new $(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new qi(this.data.getIterator())}getIteratorFrom(t){return new qi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof F)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new F(this.comparator);return n.data=t,n}}class qi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.fields=t,t.sort(Y.comparator)}static empty(){return new St([])}unionWith(t){let n=new F(Y.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new St(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return jt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new W(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new W(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}W.EMPTY_BYTE_STRING=new W("");const ph=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ft(e){if(P(!!e),typeof e=="string"){let t=0;const n=ph.exec(e);if(P(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:V(e.seconds),nanos:V(e.nanos)}}function V(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ht(e){return typeof e=="string"?W.fromBase64String(e):W.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Lo(e){const t=e.mapValue.fields.__previous_value__;return xo(t)?Lo(t):t}function we(e){const t=ft(e.mapValue.fields.__local_write_time__.timestampValue);return new Z(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ee{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ee("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ee&&t.projectId===this.projectId&&t.database===this.database}}function Rn(e){return e==null}function ms(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Nt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?xo(e)?4:yh(e)?9007199254740991:10:T()}function it(e,t){if(e===t)return!0;const n=Nt(e);if(n!==Nt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return we(e).isEqual(we(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=ft(s.timestampValue),o=ft(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Ht(s.bytesValue).isEqual(Ht(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return V(s.geoPointValue.latitude)===V(i.geoPointValue.latitude)&&V(s.geoPointValue.longitude)===V(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return V(s.integerValue)===V(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=V(s.doubleValue),o=V(i.doubleValue);return r===o?ms(r)===ms(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return jt(e.arrayValue.values||[],t.arrayValue.values||[],it);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if($i(r)!==$i(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!it(r[a],o[a])))return!1;return!0}(e,t);default:return T()}}function Te(e,t){return(e.values||[]).find(n=>it(n,t))!==void 0}function Kt(e,t){if(e===t)return 0;const n=Nt(e),s=Nt(t);if(n!==s)return D(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=V(i.integerValue||i.doubleValue),a=V(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return ji(e.timestampValue,t.timestampValue);case 4:return ji(we(e),we(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Ht(i),a=Ht(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=D(o[c],a[c]);if(u!==0)return u}return D(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=D(V(i.latitude),V(r.latitude));return o!==0?o:D(V(i.longitude),V(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Kt(o[c],a[c]);if(u)return u}return D(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===Ge.mapValue&&r===Ge.mapValue)return 0;if(i===Ge.mapValue)return 1;if(r===Ge.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=D(a[h],u[h]);if(l!==0)return l;const g=Kt(o[a[h]],c[u[h]]);if(g!==0)return g}return D(a.length,u.length)}(e.mapValue,t.mapValue);default:throw T()}}function ji(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return D(e,t);const n=ft(e),s=ft(t),i=D(n.seconds,s.seconds);return i!==0?i:D(n.nanos,s.nanos)}function Ft(e){return ys(e)}function ys(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=ft(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ht(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,w.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=ys(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${ys(s.fields[a])}`;return r+"}"}(e.mapValue):T();var t,n}function vs(e){return!!e&&"integerValue"in e}function Zs(e){return!!e&&"arrayValue"in e}function Hi(e){return!!e&&"nullValue"in e}function Ki(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Wn(e){return!!e&&"mapValue"in e}function ce(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return kn(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=ce(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ce(e.arrayValue.values[n]);return t}return Object.assign({},e)}function yh(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.value=t}static empty(){return new st({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Wn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ce(n)}setAll(t){let n=Y.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=ce(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());Wn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return it(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];Wn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){kn(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new st(ce(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new j(t,0,I.min(),I.min(),st.empty(),0)}static newFoundDocument(t,n,s){return new j(t,1,n,I.min(),s,0)}static newNoDocument(t,n){return new j(t,2,n,I.min(),st.empty(),0)}static newUnknownDocument(t,n){return new j(t,3,n,I.min(),st.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=I.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof j&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new j(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function zi(e,t=null,n=[],s=[],i=null,r=null,o=null){return new vh(e,t,n,s,i,r,o)}function ti(e){const t=_(e);if(t.ht===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Ft(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Rn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ft(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ft(s)).join(",")),t.ht=n}return t.ht}function wh(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Ft(s.value)}`;var s}).join(", ")}]`),Rn(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Ft(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Ft(n)).join(",")),`Target(${t})`}function ei(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Ah(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!it(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Qi(e.startAt,t.startAt)&&Qi(e.endAt,t.endAt)}function ws(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class J extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.lt(t,n,s):new Eh(t,n,s):n==="array-contains"?new Ch(t,s):n==="in"?new Sh(t,s):n==="not-in"?new bh(t,s):n==="array-contains-any"?new _h(t,s):new J(t,n,s)}static lt(t,n,s){return n==="in"?new Th(t,s):new Ih(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Kt(n,this.value)):n!==null&&Nt(this.value)===Nt(n)&&this.ft(Kt(n,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Eh extends J{constructor(t,n,s){super(t,n,s),this.key=w.fromName(s.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.ft(n)}}class Th extends J{constructor(t,n){super(t,"in",n),this.keys=Oo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Ih extends J{constructor(t,n){super(t,"not-in",n),this.keys=Oo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Oo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class Ch extends J{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Zs(n)&&Te(n.arrayValue,this.value)}}class Sh extends J{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Te(this.value.arrayValue,n)}}class bh extends J{constructor(t,n){super(t,"not-in",n)}matches(t){if(Te(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Te(this.value.arrayValue,n)}}class _h extends J{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Zs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Te(this.value.arrayValue,s))}}class ln{constructor(t,n){this.position=t,this.inclusive=n}}class Ut{constructor(t,n="asc"){this.field=t,this.dir=n}}function Ah(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Gi(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=Kt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Qi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!it(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function Dh(e,t,n,s,i,r,o,a){return new Oe(e,t,n,s,i,r,o,a)}function Mo(e){return new Oe(e)}function Wi(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Vo(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Po(e){for(const t of e.filters)if(t.dt())return t.field;return null}function Nh(e){return e.collectionGroup!==null}function Ie(e){const t=_(e);if(t._t===null){t._t=[];const n=Po(t),s=Vo(t);if(n!==null&&s===null)n.isKeyField()||t._t.push(new Ut(n)),t._t.push(new Ut(Y.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new Ut(Y.keyField(),r))}}}return t._t}function ut(e){const t=_(e);if(!t.wt)if(t.limitType==="F")t.wt=zi(t.path,t.collectionGroup,Ie(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Ie(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new Ut(r.field,o))}const s=t.endAt?new ln(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new ln(t.startAt.position,t.startAt.inclusive):null;t.wt=zi(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.wt}function Es(e,t,n){return new Oe(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function xn(e,t){return ei(ut(e),ut(t))&&e.limitType===t.limitType}function Fo(e){return`${ti(ut(e))}|lt:${e.limitType}`}function Ts(e){return`Query(target=${wh(ut(e))}; limitType=${e.limitType})`}function ni(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):w.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Gi(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Ie(n),s)||n.endAt&&!function(i,r,o){const a=Gi(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Ie(n),s))}(e,t)}function kh(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Uo(e){return(t,n)=>{let s=!1;for(const i of Ie(e)){const r=Rh(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Rh(e,t,n){const s=e.field.isKeyField()?w.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Kt(a,c):T()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return T()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ms(t)?"-0":t}}function Lh(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this._=void 0}}function Oh(e,t,n){return e instanceof Is?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof dn?Bo(e,t):e instanceof fn?$o(e,t):function(s,i){const r=Vh(s,i),o=Xi(r)+Xi(s.yt);return vs(r)&&vs(s.yt)?Lh(o):xh(s.It,o)}(e,t)}function Mh(e,t,n){return e instanceof dn?Bo(e,t):e instanceof fn?$o(e,t):n}function Vh(e,t){return e instanceof Cs?vs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Is extends Ln{}class dn extends Ln{constructor(t){super(),this.elements=t}}function Bo(e,t){const n=qo(t);for(const s of e.elements)n.some(i=>it(i,s))||n.push(s);return{arrayValue:{values:n}}}class fn extends Ln{constructor(t){super(),this.elements=t}}function $o(e,t){let n=qo(t);for(const s of e.elements)n=n.filter(i=>!it(i,s));return{arrayValue:{values:n}}}class Cs extends Ln{constructor(t,n){super(),this.It=t,this.yt=n}}function Xi(e){return V(e.integerValue||e.doubleValue)}function qo(e){return Zs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Ph(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof dn&&s instanceof dn||n instanceof fn&&s instanceof fn?jt(n.elements,s.elements,it):n instanceof Cs&&s instanceof Cs?it(n.yt,s.yt):n instanceof Is&&s instanceof Is}(e.transform,t.transform)}class bt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new bt}static exists(t){return new bt(void 0,t)}static updateTime(t){return new bt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function We(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class si{}function jo(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Uh(e.key,bt.none()):new ii(e.key,e.data,bt.none());{const n=e.data,s=st.empty();let i=new F(Y.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new On(e.key,s,new St(i.toArray()),bt.none())}}function Fh(e,t,n){e instanceof ii?function(s,i,r){const o=s.value.clone(),a=Ji(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof On?function(s,i,r){if(!We(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Ji(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Ho(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function ue(e,t,n,s){return e instanceof ii?function(i,r,o,a){if(!We(i.precondition,r))return o;const c=i.value.clone(),u=Zi(i.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof On?function(i,r,o,a){if(!We(i.precondition,r))return o;const c=Zi(i.fieldTransforms,a,r),u=r.data;return u.setAll(Ho(i)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(i,r,o){return We(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function Yi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&jt(n,s,(i,r)=>Ph(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ii extends si{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class On extends si{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Ho(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Ji(e,t,n){const s=new Map;P(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Mh(o,a,n[i]))}return s}function Zi(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Oh(r,o,t))}return s}class Uh extends si{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M,S;function Ko(e){if(e===void 0)return ct("GRPC error has no .code"),f.UNKNOWN;switch(e){case M.OK:return f.OK;case M.CANCELLED:return f.CANCELLED;case M.UNKNOWN:return f.UNKNOWN;case M.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case M.INTERNAL:return f.INTERNAL;case M.UNAVAILABLE:return f.UNAVAILABLE;case M.UNAUTHENTICATED:return f.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case M.NOT_FOUND:return f.NOT_FOUND;case M.ALREADY_EXISTS:return f.ALREADY_EXISTS;case M.PERMISSION_DENIED:return f.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case M.ABORTED:return f.ABORTED;case M.OUT_OF_RANGE:return f.OUT_OF_RANGE;case M.UNIMPLEMENTED:return f.UNIMPLEMENTED;case M.DATA_LOSS:return f.DATA_LOSS;default:return T()}}(S=M||(M={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){kn(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return gh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=new $(w.comparator);function gt(){return $h}const zo=new $(w.comparator);function ie(...e){let t=zo;for(const n of e)t=t.insert(n.key,n);return t}function qh(e){let t=zo;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Tt(){return he()}function Go(){return he()}function he(){return new Jt(e=>e.toString(),(e,t)=>e.isEqual(t))}new $(w.comparator);const jh=new F(w.comparator);function b(...e){let t=jh;for(const n of e)t=t.add(n);return t}const Hh=new F(D);function Qo(){return Hh}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const i=new Map;return i.set(t,Me.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Mn(I.min(),i,Qo(),gt(),b())}}class Me{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Me(s,n,b(),b(),b())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t,n,s,i){this.Tt=t,this.removedTargetIds=n,this.key=s,this.Et=i}}class Wo{constructor(t,n){this.targetId=t,this.At=n}}class Xo{constructor(t,n,s=W.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class tr{constructor(){this.Rt=0,this.bt=nr(),this.Pt=W.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=b(),n=b(),s=b();return this.bt.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:T()}}),new Me(this.Pt,this.vt,t,n,s)}Nt(){this.Vt=!1,this.bt=nr()}kt(t,n){this.Vt=!0,this.bt=this.bt.insert(t,n)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Kh{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=gt(),this.qt=er(),this.Kt=new F(D)}Gt(t){for(const n of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(n,t.Et):this.jt(n,t.key,t.Et);for(const n of t.removedTargetIds)this.jt(n,t.key,t.Et)}Wt(t){this.forEachTarget(t,n=>{const s=this.zt(n);switch(t.state){case 0:this.Ht(n)&&s.Ct(t.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(t.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(t.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(t.resumeToken));break;default:T()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(t){const n=t.targetId,s=t.At.count,i=this.Xt(n);if(i){const r=i.target;if(ws(r))if(s===0){const o=new w(r.path);this.jt(n,o,j.newNoDocument(o,I.min()))}else P(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(t){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&ws(a.target)){const c=new w(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,j.newNoDocument(c,t))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=b();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(t));const i=new Mn(t,n,this.Kt,this.Ut,s);return this.Ut=gt(),this.qt=er(),this.Kt=new F(D),i}Qt(t,n){if(!this.Ht(t))return;const s=this.ee(t,n.key)?2:0;this.zt(t).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(t))}jt(t,n,s){if(!this.Ht(t))return;const i=this.zt(t);this.ee(t,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(t)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(t){this.Lt.delete(t)}Zt(t){const n=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let n=this.Lt.get(t);return n||(n=new tr,this.Lt.set(t,n)),n}ne(t){let n=this.qt.get(t);return n||(n=new F(D),this.qt=this.qt.insert(t,n)),n}Ht(t){const n=this.Xt(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}Xt(t){const n=this.Lt.get(t);return n&&n.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new tr),this.Bt.getRemoteKeysForTarget(t).forEach(n=>{this.jt(t,n,null)})}ee(t,n){return this.Bt.getRemoteKeysForTarget(t).has(n)}}function er(){return new $(w.comparator)}function nr(){return new $(w.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Gh=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Qh{constructor(t,n){this.databaseId=t,this.gt=n}}function Wh(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Xh(e,t){return e.gt?t.toBase64():t.toUint8Array()}function Ce(e){return P(!!e),I.fromTimestamp(function(t){const n=ft(t);return new Z(n.seconds,n.nanos)}(e))}function Yh(e,t){return function(n){return new x(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Yo(e){const t=x.fromString(e);return P(ta(t)),t}function Xn(e,t){const n=Yo(t);if(n.get(1)!==e.databaseId.projectId)throw new v(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new v(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(Jo(n))}function Ss(e,t){return Yh(e.databaseId,t)}function Jh(e){const t=Yo(e);return t.length===4?x.emptyPath():Jo(t)}function sr(e){return new x(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Jo(e){return P(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Zh(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(c,u){return c.gt?(P(u===void 0||typeof u=="string"),W.fromBase64String(u||"")):(P(u===void 0||u instanceof Uint8Array),W.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:Ko(c.code);return new v(u,c.message||"")}(o);n=new Xo(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Xn(e,s.document.name),r=Ce(s.document.updateTime),o=new st({mapValue:{fields:s.document.fields}}),a=j.newFoundDocument(i,r,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Xe(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Xn(e,s.document),r=s.readTime?Ce(s.readTime):I.min(),o=j.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Xe([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Xn(e,s.document),r=s.removedTargetIds||[];n=new Xe([],r,i,null)}else{if(!("filter"in t))return T();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new Bh(i),o=s.targetId;n=new Wo(o,r)}}return n}function tl(e,t){return{documents:[Ss(e,t.path)]}}function el(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Ss(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ss(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length===0)return;const u=c.map(h=>function(l){if(l.op==="=="){if(Ki(l.value))return{unaryFilter:{field:Lt(l.field),op:"IS_NAN"}};if(Hi(l.value))return{unaryFilter:{field:Lt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Ki(l.value))return{unaryFilter:{field:Lt(l.field),op:"IS_NOT_NAN"}};if(Hi(l.value))return{unaryFilter:{field:Lt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lt(l.field),op:rl(l.op),value:l.value}}}(h));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Lt(h.field),direction:il(h.dir)}}(u))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,u){return c.gt||Rn(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function nl(e){let t=Jh(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){P(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];n.where&&(r=Zo(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new Ut(Vt(l.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,Rn(l)?null:l}(n.limit));let c=null;n.startAt&&(c=function(h){const l=!!h.before,g=h.values||[];return new ln(g,l)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const l=!h.before,g=h.values||[];return new ln(g,l)}(n.endAt)),Dh(t,i,o,r,a,"F",c,u)}function sl(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Zo(e){return e?e.unaryFilter!==void 0?[al(e)]:e.fieldFilter!==void 0?[ol(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>Zo(t)).reduce((t,n)=>t.concat(n)):T():[]}function il(e){return zh[e]}function rl(e){return Gh[e]}function Lt(e){return{fieldPath:e.canonicalString()}}function Vt(e){return Y.fromServerFormat(e.fieldPath)}function ol(e){return J.create(Vt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(e.fieldFilter.op),e.fieldFilter.value)}function al(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Vt(e.unaryFilter.field);return J.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Vt(e.unaryFilter.field);return J.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Vt(e.unaryFilter.field);return J.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Vt(e.unaryFilter.field);return J.create(i,"!=",{nullValue:"NULL_VALUE"});default:return T()}}function ta(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Fh(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=ue(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=ue(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Go();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=jo(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(I.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),b())}isEqual(t){return this.batchId===t.batchId&&jt(this.mutations,t.mutations,(n,s)=>Yi(n,s))&&jt(this.baseMutations,t.baseMutations,(n,s)=>Yi(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,n,s,i,r=I.min(),o=I.min(),a=W.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new _t(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new _t(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new _t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t){this.re=t}}function ll(e){const t=nl({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Es(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.Ye=new fl}addToCollectionParentIndex(t,n){return this.Ye.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this.Ye.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getIndexType(t,n){return d.resolve(0)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,n){return d.resolve(dt.min())}getMinOffsetFromCollectionGroup(t,n){return d.resolve(dt.min())}updateCollectionGroup(t,n,s){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class fl{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new F(x.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new F(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new zt(0)}static vn(){return new zt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(){this.changes=new Jt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,j.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?d.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.getBaseDocument(t,n,s))).next(i=>(s!==null&&ue(s.mutation,i,St.empty(),Z.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,b()).next(()=>s))}getLocalViewOfDocuments(t,n,s=b()){const i=Tt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=ie();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Tt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,b()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=gt();const o=he(),a=he();return n.forEach((c,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof On)?r=r.insert(u.key,u):h!==void 0&&(o.set(u.key,h.mutation.getFieldMask()),ue(h.mutation,u,h.mutation.getFieldMask(),Z.now()))}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var l;return a.set(u,new pl(h,(l=o.get(u))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=he();let i=new $((o,a)=>o-a),r=b();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||St.empty();h=a.applyToLocalView(u,h),s.set(c,h);const l=(i.get(a.batchId)||b()).add(c);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,l=Go();h.forEach(g=>{if(!r.has(g)){const m=jo(n.get(g),s.get(g));m!==null&&l.set(g,m),r=r.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,l))}return d.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return w.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Nh(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):d.resolve(Tt());let a=-1,c=r;return o.next(u=>d.forEach(u,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),r.get(h)?d.resolve():this.getBaseDocument(t,h,l).next(g=>{c=c.insert(h,g)}))).next(()=>this.populateOverlays(t,u,r)).next(()=>this.computeViews(t,c,u,b())).next(h=>({batchId:a,changes:qh(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(s=>{let i=ie();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=ie();return this.indexManager.getCollectionParents(t,i).next(o=>d.forEach(o,a=>{const c=function(u,h){return new Oe(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((h,l)=>{r=r.insert(h,l)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(r=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,j.newInvalidDocument(u)))});let o=ie();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&ue(u.mutation,c,St.empty(),Z.now()),ni(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(t,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):d.resolve(j.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return d.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ce(s.createTime)}),d.resolve()}getNamedQuery(t,n){return d.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:ll(s.bundledQuery),readTime:Ce(s.readTime)}}(n)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(){this.overlays=new $(w.comparator),this.es=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Tt();return d.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.ue(t,n,r)}),d.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),d.resolve()}getOverlaysForCollection(t,n,s){const i=Tt(),r=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return d.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new $((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=Tt(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Tt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return d.resolve(a)}ue(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ul(n,s));let r=this.es.get(n);r===void 0&&(r=b(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.ns=new F(U.ss),this.rs=new F(U.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new U(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new U(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new w(new x([])),s=new U(n,t),i=new U(n,t+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new w(new x([])),s=new U(n,t),i=new U(n,t+1);let r=b();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new U(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class U{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return w.comparator(t.key,n.key)||D(t._s,n._s)}static os(t,n){return D(t._s,n._s)||w.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new F(U.ss)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new cl(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new U(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return d.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new U(n,0),i=new U(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),d.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new F(D);return n.forEach(i=>{const r=new U(i,0),o=new U(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),d.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;w.isDocumentKey(r)||(r=r.child(""));const o=new U(new w(r),0);let a=new F(D);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c._s)),!0)},o),d.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){P(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return d.forEach(n.mutations,i=>{const r=new U(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new U(n,0),i=this.gs.firstAfterOrEqual(s);return d.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t){this.Es=t,this.docs=new $(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return d.resolve(s?s.document.mutableCopy():j.newInvalidDocument(n))}getEntries(t,n){let s=gt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():j.newInvalidDocument(i))}),d.resolve(s)}getAllFromCollection(t,n,s){let i=gt();const r=new w(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||lh(hh(c),s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return d.resolve(i)}getAllFromCollectionGroup(t,n,s,i){T()}As(t,n){return d.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Tl(this)}getSize(t){return d.resolve(this.size)}}class Tl extends gl{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(s)}),d.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(t){this.persistence=t,this.Rs=new Jt(n=>ti(n),ei),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ri,this.targetCount=0,this.vs=zt.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,i)=>n(i)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),d.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new zt(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.Dn(n),d.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),d.waitFor(r).next(()=>i)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return d.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),d.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),d.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),d.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return d.resolve(s)}containsKey(t,n){return d.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new Js(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Il(this),this.indexManager=new dl,this.remoteDocumentCache=function(s){return new El(s)}(s=>this.referenceDelegate.xs(s)),this.It=new hl(n),this.Ns=new yl(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new vl,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new wl(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const i=new Sl(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(t,n){return d.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class Sl extends fh{constructor(t){super(),this.currentSequenceNumber=t}}class oi{constructor(t){this.persistence=t,this.Fs=new ri,this.$s=null}static Bs(t){return new oi(t)}get Ls(){if(this.$s)return this.$s;throw T()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),d.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),d.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Ls,s=>{const i=w.fromPath(s);return this.Us(t,i).next(r=>{r||n.removeEntry(i,I.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.Us(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}Us(t,n){return d.or([()=>d.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=i}static Ci(t,n){let s=b(),i=b();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ai(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,i){return this.ki(t,n).next(r=>r||this.Oi(t,n,i,s)).next(r=>r||this.Mi(t,n))}ki(t,n){if(Wi(n))return d.resolve(null);let s=ut(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Es(n,null,"F"),s=ut(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=b(...r);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(t,Es(n,null,"F")):this.Bi(t,u,n,c)}))})))}Oi(t,n,s,i){return Wi(n)||i.isEqual(I.min())?this.Mi(t,n):this.Ni.getDocuments(t,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(t,n):(Bi()<=A.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ts(n)),this.Bi(t,o,n,uh(i,-1)))})}Fi(t,n){let s=new F(Uo(t));return n.forEach((i,r)=>{ni(t,r)&&(s=s.add(r))}),s}$i(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(t,n){return Bi()<=A.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Ts(n)),this.Ni.getDocumentsMatchingQuery(t,n,dt.min())}Bi(t,n,s,i){return this.Ni.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t,n,s,i){this.persistence=t,this.Li=n,this.It=i,this.Ui=new $(D),this.qi=new Jt(r=>ti(r),ei),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ml(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ui))}}function Al(e,t,n,s){return new _l(e,t,n,s)}async function ea(e,t){const n=_(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=b();for(const u of i){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function na(e){const t=_(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function Dl(e,t){const n=_(e),s=t.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];t.targetChanges.forEach((h,l)=>{const g=i.get(l);if(!g)return;a.push(n.Cs.removeMatchingKeys(r,h.removedDocuments,l).next(()=>n.Cs.addMatchingKeys(r,h.addedDocuments,l)));let m=g.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(l)?m=m.withResumeToken(W.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),i=i.insert(l,m),function(C,k,O){return C.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(g,m,h)&&a.push(n.Cs.updateTargetData(r,m))});let c=gt(),u=b();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(Nl(r,o,t.documentUpdates).next(h=>{c=h.Wi,u=h.zi})),!s.isEqual(I.min())){const h=n.Cs.getLastRemoteSnapshotVersion(r).next(l=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return d.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.Ui=i,r))}function Nl(e,t,n){let s=b(),i=b();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=gt();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(I.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:i}})}function kl(e,t){const n=_(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,t).next(r=>r?(i=r,d.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new _t(t,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(t,s.targetId)),s})}async function bs(e,t,n){const s=_(e),i=s.Ui.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Le(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ui=s.Ui.remove(t),s.qi.delete(i.target)}function ir(e,t,n){const s=_(e);let i=I.min(),r=b();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=_(a),l=h.qi.get(u);return l!==void 0?d.resolve(h.Ui.get(l)):h.Cs.getTargetData(c,u)}(s,o,ut(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,t,n?i:I.min(),n?r:b())).next(a=>(Rl(s,kh(t),a),{documents:a,Hi:r})))}function Rl(e,t,n){let s=e.Ki.get(t)||I.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Ki.set(t,s)}class rr{constructor(){this.activeTargetIds=Qo()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class xl{constructor(){this.Lr=new rr,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,n,s){this.Ur[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new rr,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{qr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,s,i,r){const o=this.ho(t,n);y("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(t,o,a,s).then(c=>(y("RestConnection","Received: ",c),c),c=>{throw ps("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}_o(t,n,s,i,r,o){return this.ao(t,n,s,i,r)}lo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Yt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}ho(t,n){const s=Ol[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,s,i){return new Promise((r,o)=>{const a=new Ju;a.setWithCredentials(!0),a.listenOnce(Wu.COMPLETE,()=>{var u;try{switch(a.getLastErrorCode()){case Qn.NO_ERROR:const h=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(h)),r(h);break;case Qn.TIMEOUT:y("Connection",'RPC "'+t+'" timed out'),o(new v(f.DEADLINE_EXCEEDED,"Request time out"));break;case Qn.HTTP_ERROR:const l=a.getStatus();if(y("Connection",'RPC "'+t+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let g=a.getResponseJson();Array.isArray(g)&&(g=g[0]);const m=(u=g)===null||u===void 0?void 0:u.error;if(m&&m.status&&m.message){const C=function(k){const O=k.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(O)>=0?O:f.UNKNOWN}(m.status);o(new v(C,m.message))}else o(new v(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new v(f.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{y("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}wo(t,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Gu(),o=Qu(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Yu({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");y("Connection","Creating WebChannel: "+c,a);const u=r.createWebChannel(c,a);let h=!1,l=!1;const g=new Ml({Hr:C=>{l?y("Connection","Not sending because WebChannel is closed:",C):(h||(y("Connection","Opening WebChannel transport."),u.open(),h=!0),y("Connection","WebChannel sending:",C),u.send(C))},Jr:()=>u.close()}),m=(C,k,O)=>{C.listen(k,yt=>{try{O(yt)}catch(et){setTimeout(()=>{throw et},0)}})};return m(u,Ke.EventType.OPEN,()=>{l||y("Connection","WebChannel transport opened.")}),m(u,Ke.EventType.CLOSE,()=>{l||(l=!0,y("Connection","WebChannel transport closed"),g.io())}),m(u,Ke.EventType.ERROR,C=>{l||(l=!0,ps("Connection","WebChannel transport errored:",C),g.io(new v(f.UNAVAILABLE,"The operation could not be completed")))}),m(u,Ke.EventType.MESSAGE,C=>{var k;if(!l){const O=C.data[0];P(!!O);const yt=O,et=yt.error||((k=yt[0])===null||k===void 0?void 0:k.error);if(et){y("Connection","WebChannel received error:",et);const Ue=et.status;let Rt=function(wa){const mi=M[wa];if(mi!==void 0)return Ko(mi)}(Ue),Be=et.message;Rt===void 0&&(Rt=f.INTERNAL,Be="Unknown error status: "+Ue+" with message "+et.message),l=!0,g.io(new v(Rt,Be)),u.close()}else y("Connection","WebChannel received:",O),g.ro(O)}}),m(o,Xu.STAT_EVENT,C=>{C.stat===Fi.PROXY?y("Connection","Detected buffering proxy"):C.stat===Fi.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{g.so()},0),g}}function Yn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(e){return new Qh(e,!0)}class ia{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(t,n,s,i,r,o,a,c){this.Hs=t,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ia(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(ct(n.toString()),ct("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{t(()=>{const i=new v(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fl extends Pl{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}jo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.xo.reset();const n=Zh(this.It,t),s=function(i){if(!("targetChange"in i))return I.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?I.min():r.readTime?Ce(r.readTime):I.min()}(t);return this.listener.Wo(n,s)}zo(t){const n={};n.database=sr(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=ws(a)?{documents:tl(i,a)}:{query:el(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Xh(i,r.resumeToken):r.snapshotVersion.compareTo(I.min())>0&&(o.readTime=Wh(i,r.snapshotVersion.toTimestamp())),o}(this.It,t);const s=sl(this.It,t);s&&(n.labels=s),this.Bo(n)}Ho(t){const n={};n.database=sr(this.It),n.removeTarget=t,this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.It=i,this.nu=!1}su(){if(this.nu)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(f.UNKNOWN,i.toString())})}_o(t,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new v(f.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class Bl{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(ct(n),this.ou=!1):y("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.qr(o=>{s.enqueueAndForget(async()=>{Pe(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=_(a);c._u.add(4),await Ve(c),c.gu.set("Unknown"),c._u.delete(4),await Vn(c)}(this))})}),this.gu=new Bl(s,i)}}async function Vn(e){if(Pe(e))for(const t of e.wu)await t(!0)}async function Ve(e){for(const t of e.wu)await t(!1)}function ra(e,t){const n=_(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),hi(n)?ui(n):Zt(n).ko()&&ci(n,t))}function oa(e,t){const n=_(e),s=Zt(n);n.du.delete(t),s.ko()&&aa(n,t),n.du.size===0&&(s.ko()?s.Fo():Pe(n)&&n.gu.set("Unknown"))}function ci(e,t){e.yu.Mt(t.targetId),Zt(e).zo(t)}function aa(e,t){e.yu.Mt(t),Zt(e).Ho(t)}function ui(e){e.yu=new Kh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),Zt(e).start(),e.gu.uu()}function hi(e){return Pe(e)&&!Zt(e).No()&&e.du.size>0}function Pe(e){return _(e)._u.size===0}function ca(e){e.yu=void 0}async function ql(e){e.du.forEach((t,n)=>{ci(e,t)})}async function jl(e,t){ca(e),hi(e)?(e.gu.hu(t),ui(e)):e.gu.set("Unknown")}async function Hl(e,t,n){if(e.gu.set("Online"),t instanceof Xo&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await ar(e,s)}else if(t instanceof Xe?e.yu.Gt(t):t instanceof Wo?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(I.min()))try{const s=await na(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.te(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(c);u&&i.du.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.du.get(a);if(!c)return;i.du.set(a,c.withResumeToken(W.EMPTY_BYTE_STRING,c.snapshotVersion)),aa(i,a);const u=new _t(c.target,a,1,c.sequenceNumber);ci(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await ar(e,s)}}async function ar(e,t,n){if(!Le(t))throw t;e._u.add(1),await Ve(e),e.gu.set("Offline"),n||(n=()=>na(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Vn(e)})}async function cr(e,t){const n=_(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=Pe(n);n._u.add(3),await Ve(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Vn(n)}async function Kl(e,t){const n=_(e);t?(n._u.delete(2),await Vn(n)):t||(n._u.add(2),await Ve(n),n.gu.set("Unknown"))}function Zt(e){return e.pu||(e.pu=function(t,n,s){const i=_(t);return i.su(),new Fl(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,s)}(e.datastore,e.asyncQueue,{Yr:ql.bind(null,e),Zr:jl.bind(null,e),Wo:Hl.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),hi(e)?ui(e):e.gu.set("Unknown")):(await e.pu.stop(),ca(e))})),e.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new li(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ua(e,t){if(ct("AsyncQueue",`${t}: ${e}`),Le(e))return new v(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||w.comparator(n.key,s.key):(n,s)=>w.comparator(n.key,s.key),this.keyedMap=ie(),this.sortedSet=new $(this.comparator)}static emptySet(t){return new Bt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Bt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Bt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.Tu=new $(w.comparator)}track(t){const n=t.doc.key,s=this.Tu.get(n);s?t.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Tu=this.Tu.remove(n):t.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):T():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Gt{constructor(t,n,s,i,r,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Gt(t,n,Bt.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this.Au=void 0,this.listeners=[]}}class Gl{constructor(){this.queries=new Jt(t=>Fo(t),xn),this.onlineState="Unknown",this.Ru=new Set}}async function Ql(e,t){const n=_(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new zl),i)try{r.Au=await n.onListen(s)}catch(o){const a=ua(o,`Initialization of query '${Ts(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.bu(n.onlineState),r.Au&&t.Pu(r.Au)&&di(n)}async function Wl(e,t){const n=_(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Xl(e,t){const n=_(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&di(n)}function Yl(e,t,n){const s=_(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function di(e){e.Ru.forEach(t=>{t.next()})}class Jl{constructor(t,n,s){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Gt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=Gt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t){this.key=t}}class la{constructor(t){this.key=t}}class Zl{constructor(t,n){this.query=t,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=b(),this.mutatedKeys=b(),this.Gu=Uo(t),this.Qu=new Bt(this.Gu)}get ju(){return this.Uu}Wu(t,n){const s=n?n.zu:new ur,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,l)=>{const g=i.get(h),m=ni(this.query,l)?l:null,C=!!g&&this.mutatedKeys.has(g.key),k=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let O=!1;g&&m?g.data.isEqual(m.data)?C!==k&&(s.track({type:3,doc:m}),O=!0):this.Hu(g,m)||(s.track({type:2,doc:m}),O=!0,(c&&this.Gu(m,c)>0||u&&this.Gu(m,u)<0)&&(a=!0)):!g&&m?(s.track({type:0,doc:m}),O=!0):g&&!m&&(s.track({type:1,doc:g}),O=!0,(c||u)&&(a=!0)),O&&(m?(o=o.add(m),r=k?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const r=t.zu.Eu();r.sort((u,h)=>function(l,g){const m=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return m(l)-m(g)}(u.type,h.type)||this.Gu(u.doc,h.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,r.length!==0||c?{snapshot:new Gt(this.query,t.Qu,i,r,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new ur,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=b(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return t.forEach(s=>{this.Ku.has(s)||n.push(new la(s))}),this.Ku.forEach(s=>{t.has(s)||n.push(new ha(s))}),n}tc(t){this.Uu=t.Hi,this.Ku=b();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ec(){return Gt.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class td{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class ed{constructor(t){this.key=t,this.nc=!1}}class nd{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Jt(a=>Fo(a),xn),this.rc=new Map,this.oc=new Set,this.uc=new $(w.comparator),this.cc=new Map,this.ac=new ri,this.hc={},this.lc=new Map,this.fc=zt.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function sd(e,t){const n=hd(e);let s,i;const r=n.ic.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await kl(n.localStore,ut(t));n.isPrimaryClient&&ra(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await id(n,t,s,a==="current",o.resumeToken)}return i}async function id(e,t,n,s,i){e._c=(l,g,m)=>async function(C,k,O,yt){let et=k.view.Wu(O);et.$i&&(et=await ir(C.localStore,k.query,!1).then(({documents:Be})=>k.view.Wu(Be,et)));const Ue=yt&&yt.targetChanges.get(k.targetId),Rt=k.view.applyChanges(et,C.isPrimaryClient,Ue);return lr(C,k.targetId,Rt.Xu),Rt.snapshot}(e,l,g,m);const r=await ir(e.localStore,t,!0),o=new Zl(t,r.Hi),a=o.Wu(r.documents),c=Me.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,c);lr(e,n,u.Xu);const h=new td(t,n,o);return e.ic.set(t,h),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function rd(e,t){const n=_(e),s=n.ic.get(t),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!xn(r,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await bs(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),oa(n.remoteStore,s.targetId),_s(n,s.targetId)}).catch(Ys)):(_s(n,s.targetId),await bs(n.localStore,s.targetId,!0))}async function da(e,t){const n=_(e);try{const s=await Dl(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(P(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?P(o.nc):i.removedDocuments.size>0&&(P(o.nc),o.nc=!1))}),await ga(n,s,t)}catch(s){await Ys(s)}}function hr(e,t,n){const s=_(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=_(r);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.bu(o)&&(c=!0)}),c&&di(a)}(s.eventManager,t),i.length&&s.sc.Wo(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function od(e,t,n){const s=_(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.cc.get(t),r=i&&i.key;if(r){let o=new $(w.comparator);o=o.insert(r,j.newNoDocument(r,I.min()));const a=b().add(r),c=new Mn(I.min(),new Map,new F(D),o,a);await da(s,c),s.uc=s.uc.remove(r),s.cc.delete(t),fi(s)}else await bs(s.localStore,t,!1).then(()=>_s(s,t,n)).catch(Ys)}function _s(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.rc.get(t))e.ic.delete(s),n&&e.sc.wc(s,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(s=>{e.ac.containsKey(s)||fa(e,s)})}function fa(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);n!==null&&(oa(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),fi(e))}function lr(e,t,n){for(const s of n)s instanceof ha?(e.ac.addReference(s.key,t),ad(e,s)):s instanceof la?(y("SyncEngine","Document no longer in limbo: "+s.key),e.ac.removeReference(s.key,t),e.ac.containsKey(s.key)||fa(e,s.key)):T()}function ad(e,t){const n=t.key,s=n.path.canonicalString();e.uc.get(n)||e.oc.has(s)||(y("SyncEngine","New document in limbo: "+n),e.oc.add(s),fi(e))}function fi(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new w(x.fromString(t)),s=e.fc.next();e.cc.set(s,new ed(n)),e.uc=e.uc.insert(n,s),ra(e.remoteStore,new _t(ut(Mo(n.path)),s,2,Js.at))}}async function ga(e,t,n){const s=_(e),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const h=ai.Ci(c.targetId,u);r.push(h)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,c){const u=_(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>d.forEach(c,l=>d.forEach(l.Si,g=>u.persistence.referenceDelegate.addReference(h,l.targetId,g)).next(()=>d.forEach(l.Di,g=>u.persistence.referenceDelegate.removeReference(h,l.targetId,g)))))}catch(h){if(!Le(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const g=u.Ui.get(l),m=g.snapshotVersion,C=g.withLastLimboFreeSnapshotVersion(m);u.Ui=u.Ui.insert(l,C)}}}(s.localStore,r))}async function cd(e,t){const n=_(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await ea(n.localStore,t);n.currentUser=t,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new v(f.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await ga(n,s.ji)}}function ud(e,t){const n=_(e),s=n.cc.get(t);if(s&&s.nc)return b().add(s.key);{let i=b();const r=n.rc.get(t);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function hd(e){const t=_(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=da.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ud.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=od.bind(null,t),t.sc.Wo=Xl.bind(null,t.eventManager),t.sc.wc=Yl.bind(null,t.eventManager),t}class ld{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=sa(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return Al(this.persistence,new bl,t.initialUser,this.It)}yc(t){return new Cl(oi.Bs,this.It)}gc(t){return new xl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dd{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hr(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=cd.bind(null,this.syncEngine),await Kl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Gl}createDatastore(t){const n=sa(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Vl(i));var i;return function(r,o,a,c){return new Ul(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>hr(this.syncEngine,a,0),o=or.C()?new or:new Ll,new $l(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,u){const h=new nd(s,i,r,o,a,c);return u&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=_(t);y("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Ve(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(e,t,n){if(!n)throw new v(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function gd(e,t,n,s){if(t===!0&&s===!0)throw new v(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function dr(e){if(w.isDocumentKey(e))throw new v(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function pd(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function As(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new v(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pd(e);throw new v(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new Map;class gr{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new v(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,gd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new v(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new v(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gr(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Zu;switch(n.type){case"gapi":const s=n.client;return new sh(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new v(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=fr.get(t);n&&(y("ComponentProvider","Removing Datastore"),fr.delete(t),n.terminate())}(this),Promise.resolve()}}function md(e,t,n,s={}){var i;const r=(e=As(e,gi))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&ps("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=z.MOCK_USER;else{o=Fa(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new v(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new z(c)}e._authCredentials=new th(new Ro(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $t(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new te(this.firestore,t,this._key)}}class Fe{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Fe(this.firestore,t,this._query)}}class $t extends Fe{constructor(t,n,s){super(t,n,Mo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new te(this.firestore,null,new w(t))}withConverter(t){return new $t(this.firestore,t,this._path)}}function yd(e,t,...n){if(e=qa(e),fd("collection","path",t),e instanceof gi){const s=x.fromString(t,...n);return dr(s),new $t(e,null,s)}{if(!(e instanceof te||e instanceof $t))throw new v(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(x.fromString(t,...n));return dr(s),new $t(e.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):ct("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=z.UNAUTHENTICATED,this.clientId=ah.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=ua(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Ed(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await ea(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Td(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Id(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>cr(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>cr(t.remoteStore,r)),e.onlineComponents=t}async function Id(e){return e.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await Ed(e,new ld)),e.offlineComponents}async function Cd(e){return e.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await Td(e,new dd)),e.onlineComponents}async function Sd(e){const t=await Cd(e),n=t.eventManager;return n.onListen=sd.bind(null,t.syncEngine),n.onUnlisten=rd.bind(null,t.syncEngine),n}function bd(e,t,n={}){const s=new Ct;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const u=new vd({next:l=>{r.enqueueAndForget(()=>Wl(i,h)),l.fromCache&&a.source==="server"?c.reject(new v(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new Jl(o,u,{includeMetadataChanges:!0,Nu:!0});return Ql(i,h)}(await Sd(e),e.asyncQueue,t,n,s)),s.promise}class _d{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ia(this,"async_queue_retry"),this.Wc=()=>{const n=Yn();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=Yn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const n=Yn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Ct;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Le(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ct("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=li.createAndSchedule(this,t,n,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&T()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.qc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.qc.indexOf(t);this.qc.splice(n,1)}}class pa extends gi{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new _d,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ma(this),this._firestoreClient.terminate()}}function Ad(e,t){const n=typeof e=="object"?e:$c(),s=typeof e=="string"?e:t||"(default)",i=Pc(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Ma("firestore");r&&md(i,...r)}return i}function Dd(e){return e._firestoreClient||ma(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ma(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new mh(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new wd(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new gn(W.fromBase64String(t))}catch(n){throw new v(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new gn(W.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new v(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Y(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new v(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new v(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}const kd=new RegExp("[~\\*/\\[\\]]");function Rd(e,t,n){if(t.search(kd)>=0)throw pr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ya(...t.split("."))._internalPath}catch{throw pr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function pr(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new v(f.INVALID_ARGUMENT,a+e+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new xd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(pi("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xd extends va{data(){return super.data()}}function pi(e,t){return typeof t=="string"?Rd(e,t):t instanceof ya?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new v(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Od{}function Md(e,...t){for(const n of t)e=n._apply(e);return e}class Vd extends Od{constructor(t,n){super(),this.ma=t,this.pa=n,this.type="orderBy"}_apply(t){const n=function(s,i,r){if(s.startAt!==null)throw new v(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new v(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ut(i,r);return function(a,c){if(Vo(a)===null){const u=Po(a);u!==null&&Fd(a,u,c.field)}}(s,o),o}(t._query,this.ma,this.pa);return new Fe(t.firestore,t.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Oe(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function Pd(e,t="asc"){const n=t,s=pi("orderBy",e);return new Vd(s,n)}function Fd(e,t,n){if(!n.isEqual(t))throw new v(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{convertValue(t,n="none"){switch(Nt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return V(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ht(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw T()}}convertObject(t,n){const s={};return kn(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new Nd(V(t.latitude),V(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Lo(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(we(t));default:return null}}convertTimestamp(t){const n=ft(t);return new Z(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=x.fromString(t);P(ta(s));const i=new Ee(s.get(1),s.get(3)),r=new w(s.popFirst(5));return i.isEqual(n)||ct(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Bd extends va{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ye(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(pi("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ye extends Bd{data(t={}){return super.data(t)}}class $d{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Qe(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Ye(this._firestore,this._userDataWriter,s.key,s,new Qe(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new v(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Ye(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Qe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ye(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Qe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:qd(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qd(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}class jd extends Ud{constructor(t){super(),this.firestore=t}convertBytes(t){return new gn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new te(this.firestore,null,n)}}function Hd(e){e=As(e,Fe);const t=As(e.firestore,pa),n=Dd(t),s=new jd(t);return Ld(e._query),bd(n,e._query).then(i=>new $d(t,s,e,i))}(function(e,t=!0){(function(n){Yt=n})(Bc),en(new le("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new pa(new eh(n.getProvider("auth-internal")),new rh(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new v(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ee(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Pt(Ui,"3.7.3",e),Pt(Ui,"3.7.3","esm2017")})();var Kd="firebase",zd="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(Kd,zd,"app");const Gd={apiKey:"AIzaSyDIrHt2l51RtNi9p2JN8qETH0XvUnfG2Rw",authDomain:"rsol-web.firebaseapp.com",projectId:"rsol-web",storageBucket:"rsol-web.appspot.com",messagingSenderId:"900319442075",appId:"1:900319442075:web:6ace27cb12f7d0455cc23e"},Qd=br(Gd),Wd=Ad(Qd),Xd={data(){return{showCustomContent:!1}},props:{modelo:String,descripcion:String,imagen:String},created(){}},Yd=["src"];function Jd(e,t,n,s,i,r){const o=Ot("va-button"),a=Ot("va-card-title"),c=Ot("va-card-content"),u=Ot("va-card-actions"),h=Ot("va-modal");return re(),oe(mr,null,[rt(o,{onClick:t[0]||(t[0]=l=>i.showCustomContent=!i.showCustomContent)},{default:xt(()=>[$e(" Ver m\xE1s ")]),_:1}),rt(h,{modelValue:i.showCustomContent,"onUpdate:modelValue":t[1]||(t[1]=l=>i.showCustomContent=l),"no-padding":""},{content:xt(({ok:l})=>[R("img",{src:n.imagen,alt:""},null,8,Yd),rt(a,null,{default:xt(()=>[$e(Je(n.modelo),1)]),_:1}),rt(c,null,{default:xt(()=>[$e(Je(n.descripcion),1)]),_:1}),rt(u,null,{default:xt(()=>[rt(o,{onClick:l,color:"warning"},{default:xt(()=>[$e("Cerrar")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["modelValue"])],64)}const Zd=Ea(Xd,[["render",Jd]]),tf=Ca('<form><div class="field is-grouped mb-5"><div class="field is-horizontal"><div class="field-label is-normal"><label class="label">Categor\xEDa</label></div><div class="field-body"><div class="field is-narrow"><div class="control"><div class="select is-fullwidth is-primary"><select><option value="1">Todos</option><option value="2">Radios</option><option value="3">Repetidores</option><option value="4">Paneles solares</option><option value="5">C\xE1maras de seguridad</option></select></div></div></div></div></div></div></form>',1),ef={class:"columns is-mobile is-multiline is-centered"},nf={class:"card box"},sf={class:"card-header"},rf={class:"card-header-title"},of={class:"card-image"},af={class:"image is-128x128"},cf=["src"],uf={class:"card-content"},hf={class:"columns is-mobile is-vcentered"},lf={class:"rows"},df={class:"row"},ff={class:"container"},gf={class:"title is-4"},pf={class:"row box"},mf=R("br",null,null,-1),yf=["href"],vf={class:"button"},wf={class:"icon is-small"},Ef=yr({__name:"Catalogo",setup(e){const t=yd(Wd,"productos"),n=Md(t,Pd("modelo","asc")),s=yi([{id:"",categoria:"",descripcion:"",disponibilidad:"",imagen:"",manual:"",marca:"",modelo:"",precio:0}]);return Ta(async()=>{const i=await Hd(n);let r=[];i.forEach(o=>{const a={id:o.id,categoria:o.data().categoria,descripcion:o.data().descripcion,disponibilidad:o.data().disponibilidad,imagen:o.data().imagen,manual:o.data().manual,marca:o.data().marca,modelo:o.data().modelo,precio:o.data().precio};r.push(a)}),s.value=r}),yi(""),(i,r)=>{const o=Ot("font-awesome-icon");return re(),oe("div",null,[tf,R("div",ef,[(re(!0),oe(mr,null,Ia(s.value,a=>(re(),oe("div",{class:Sa(["column",{"has-background-success-light":a.disponibilidad}])},[R("div",nf,[R("header",sf,[R("p",rf,Je(a.modelo),1)]),R("div",of,[R("figure",af,[R("img",{src:a.imagen,alt:""},null,8,cf)])]),R("div",uf,[R("div",hf,[R("div",lf,[R("div",df,[R("div",ff,[R("p",gf,"$"+Je(a.precio),1)])]),R("div",pf,[rt(Zd,{modelo:a.modelo,descripcion:a.descripcion,imagen:a.imagen},null,8,["modelo","descripcion","imagen"]),mf,R("a",{href:a.manual,target:"_blank"},[R("button",vf,[R("span",wf,[rt(o,{icon:"fa-solid fa-book"})])])],8,yf)])])])])])],2))),256))])])}}});const Tf={class:"hero"},If={class:"hero-body"},Cf={class:"container has-text-centered"},Sf=R("p",{class:"title"}," Cat\xE1logo ",-1),_f=yr({__name:"CatalogoView",setup(e){return(t,n)=>(re(),oe("section",Tf,[R("div",If,[R("div",Cf,[Sf,rt(Ef)])])]))}});export{_f as default};
