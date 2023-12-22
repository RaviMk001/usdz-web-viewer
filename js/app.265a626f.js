(function(e){function t(t){for(var n,i,s=t[0],d=t[1],l=t[2],h=0,u=[];h<s.length;h++)i=s[h],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);c&&c(t);while(u.length)u.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,s=1;s<o.length;s++){var d=o[s];0!==r[d]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={app:0},a=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/usdz-web-viewer/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=d;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("cd49")},"188d":function(e,t,o){},cd49:function(e,t,o){"use strict";o.r(t);var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-main",[o("Home")],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("button",{on:{click:function(t){return e.loadModel("fbx")}}},[e._v("Load FBX Model")]),o("button",{on:{click:function(t){return e.loadModel("gltf")}}},[e._v("Load GLTF Model")]),o("button",{on:{click:function(t){return e.loadModel("glb")}}},[e._v("Load GLB Model")]),o("button",{on:{click:function(t){return e.loadModel("usdz")}}},[e._v("Load USDZ Model")]),o("button",{on:{click:function(t){return e.loadModel("ply")}}},[e._v("Load PLY Model")]),o("div",{ref:"three-container",staticClass:"three-container"},[o("div",{staticClass:"three-overlay"},[null!=e.error?o("div",{staticClass:"mb-3",staticStyle:{color:"red"}},[e._v(" An error occured when loading the USDZ file. Maybe this file is not supported or the loader is not supported on this device. ")]):e._e(),o("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"file",staticClass:"w-px h-px opacity-0 overflow-hidden absolute",attrs:{type:"file",multiple:"",name:"fields[assetsFieldHandle][]",accept:".usdz"}})]),o("v-dialog",{attrs:{width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[o("v-card",[o("v-card-title",{staticClass:"text-h5"},[e._v(" Information about the player ")]),o("v-card-text",{staticClass:"mt-2"},[e._v(" This player is based on the "),o("a",{attrs:{href:"https://www.npmjs.com/package/three-usdz-loader"}},[e._v("three-usdz-loader")]),e._v(" package"),o("br"),e._v(" Contact: contact@usdz-viewer.net ")]),o("v-divider"),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" OK ")])],1)],1)],1)],1)])},s=[],d=o("9ab4"),l=o("1b40"),c=o("5a89"),h=o("4721"),u=o("2132"),p=o("8769"),m=(o("d9e2"),o("8710"));function w(e){return new Promise((t,o)=>{console.log(e);const n=new m["a"];n.load(e,e=>{e instanceof c["w"]?t(e):o(new Error("Loaded object is not an instance of THREE.Group."))},void 0,e=>{o(e)})})}var f=o("34ad"),b=o("0ca5");function v(e){return new Promise((t,o)=>{const n=new b["a"];n.setDecoderPath("/examples/jsm/libs/draco/");const r=new f["a"];r.setDRACOLoader(n),r.load(e,(function(e){console.log("GLTF loaded successfully:",e),t(e.scene)}),(function(e){e.lengthComputable&&console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.error("An error happened",e),o(e)}))})}var g=o("21cb");function y(e){return new Promise((t,o)=>{const n=new g["a"];n.load(e,(function(e){e.computeVertexNormals();const o=new c["Z"]({color:40191,flatShading:!0}),n=new c["U"](e,o),r=new c["w"];r.add(n),t(r)}))})}var x=o("3191"),M=o.n(x);let _=class extends l["c"]{constructor(){super(...arguments),this.modelIsVisible=!1,this.modelIsLoading=!1,this.dialog=!1,this.loadedModels=[],this.error=null,this.loaderReady=null,this.modelUrl=null}loadModel(e){let t="";switch(e){case"fbx":t="https://ravimk001.github.io/usdz-web-viewer/models/fbx/eve_j_gonzales.fbx";break;case"gltf":t="https://ravimk001.github.io/usdz-web-viewer/models/gltf/eve_j_gonzales.gltf";break;case"glb":t="https://ravimk001.github.io/usdz-web-viewer/models/gltf/eve_j_gonzales_glb.glb";break;case"usdz":t="https://ravimk001.github.io/usdz-web-viewer/models/usdz/AirForce.usdz";break;case"ply":t="https://ravimk001.github.io/usdz-web-viewer/models/ply/eve_j_gonzales.ply";break}this.loadModelByUrl(t)}loadModelByUrl(e){const t=this.getFileExtension(e);if(t)switch(this.disposee(),this.removeLoader(),t){case"usdz":this.usdz_loaders(e);break;default:this.default_loaders(e);break}}removeLoader(){this.loadedModels.forEach(e=>{e.clear()}),this.loadedModels=[]}disposee(){this.controls&&this.controls.dispose(),this.renderer&&this.renderer.dispose(),this.scene.traverse(e=>{e instanceof c["U"]&&(e.material&&e.material.dispose(),e.geometry&&e.geometry.dispose())});while(this.scene.children.length>0){const e=this.scene.children[0];this.scene.remove(e)}}async mounted(){this.modelUrl="https://ravimk001.github.io/usdz-web-viewer/models/usdz/AirForce.usdz";const e=this.getFileExtension(this.modelUrl);if(e)switch(e){case"usdz":this.usdz_loaders(this.modelUrl);break;default:this.default_loaders(this.modelUrl);break}else console.error("Invalid URL")}usdz_loaders(e){this.camera=new c["ib"](45,window.innerWidth/window.innerHeight,1,2e3),this.camera.position.set(0,50,350),this.scene=new c["rb"],this.scene.background=new c["i"](16777215);const t=new c["a"](1118481);t.intensity=1,this.scene.add(t);const o=new c["U"](new c["jb"](2e3,2e3),new c["V"]({color:16777215,depthWrite:!1}));o.rotation.x=Math.PI/2,o.receiveShadow=!0,this.scene.add(o);const n=new c["v"](2e3,20,0,0);n.material.opacity=.2,n.material.transparent=!0,this.scene.add(n),this.renderer=new c["Jb"]({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=c["g"],this.renderer.toneMappingExposure=2,this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=c["Eb"],new Promise(e=>{const t=new c["hb"](this.renderer);t.compileCubemapShader(),(new u["a"]).load("studio_country_hall_1k.hdr",o=>{const n=t.fromEquirectangular(o);o.mapping=c["o"],o.needsUpdate=!0,window.envMap=n.texture,e(!0)})}),this.threeContainer.appendChild(this.renderer.domElement),this.controls=new h["a"](this.camera,this.renderer.domElement),this.controls.update(),this.stats=new M.a,document.body.appendChild(this.stats.dom),this.ConvertUSDZFileFromURL(e),window.addEventListener("resize",this.onWindowResize),this.animate()}default_loaders(e){const t=document.createElement("div");document.body.appendChild(t),this.camera=new c["ib"](45,window.innerWidth/window.innerHeight,1,2e3),this.camera.position.set(0,50,350),this.scene=new c["rb"],this.scene.background=new c["i"](16777215);const o=new c["y"](16777215,4473924,5);o.position.set(0,200,0),this.scene.add(o);const n=new c["m"](16777215,5);n.position.set(0,200,100),n.castShadow=!0,n.shadow.camera.top=180,n.shadow.camera.bottom=-100,n.shadow.camera.left=-120,n.shadow.camera.right=120,this.scene.add(n);const r=new c["U"](new c["jb"](2e3,2e3),new c["V"]({color:16777215,depthWrite:!1}));r.rotation.x=Math.PI/2,r.receiveShadow=!0,this.scene.add(r);const a=new c["v"](2e3,20,0,0);a.material.opacity=.2,a.material.transparent=!0,this.scene.add(a),this.renderer=new c["Jb"]({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=c["g"],this.renderer.toneMappingExposure=2,this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=c["Eb"],new Promise(e=>{const t=new c["hb"](this.renderer);t.compileCubemapShader(),(new u["a"]).load("studio_country_hall_1k.hdr",o=>{const n=t.fromEquirectangular(o);o.mapping=c["o"],o.needsUpdate=!0,window.envMap=n.texture,e(!0)})}),this.threeContainer.appendChild(this.renderer.domElement),this.stats=new M.a,document.body.appendChild(this.stats.dom);const i=this.getFileExtension(e);if(i)switch(i){case"fbx":w(e).then(e=>{this.adjustCameraForDefaultLoadedModels(e),console.log(i+" model added to the scene.")}).catch(e=>{console.error("Error loading "+i+" model : ",e)});break;case"gltf":case"glb":v(e).then(e=>{this.adjustCameraForDefaultLoadedModels(e),console.log(i+" model added to the scene.")}).catch(e=>{console.error("Error loading "+i+" model : ",e)});break;case"ply":y(e).then(e=>{this.adjustCameraForDefaultLoadedModels(e),console.log(i+" model added to the scene.")}).catch(e=>{console.error("Error loading "+i+" model : ",e)});break;default:console.error("Unsupported file extension");break}else console.error("Invalid URL");window.addEventListener("resize",this.onWindowResize),this.animate()}getFileExtension(e){const t=e.match(/\.([a-zA-Z0-9]+)$/);return t?t[1].toLowerCase():null}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}async animate(){this.stats.begin();const e=(new Date).getTime()/1e3;await new Promise(e=>setTimeout(e,10));for(const t of this.loadedModels)t.update(e);this.renderer.render(this.scene,this.camera),this.stats.end(),requestAnimationFrame(this.animate)}ConvertUSDZFileFromURL(e){fetch(e).then(e=>e.blob()).then(e=>{const t=new File([e],"AirfForce.usdz",{type:e.type}),o=new DataTransfer;o.items.add(t),this.fileInput&&(this.fileInput.files=o.files,this.loadUSDZFilesIntoScene(this.fileInput.files[0]))}).catch(e=>{console.error("Error loading default file:",e)})}async loadUSDZFilesIntoScene(e){if(this.modelIsLoading)return;this.modelIsLoading=!0,this.error=null;for(const r of this.loadedModels)r.clear();this.loadedModels=[];const t=new c["w"];this.scene.add(t);try{this.loader_usdz=new p["USDZLoader"]("/wasm");const o=await this.loader_usdz.loadFile(e,t);this.loadedModels.push(o)}catch(n){return this.error=n,console.error("An error occured when trying to load the model"+n),void(this.modelIsLoading=!1)}const o=this.loadedModels.map(e=>e.getGroup());this.adjustCameraForUSDZLoadedModels(this.camera,this.controls,o),this.modelIsLoading=!1,this.modelIsVisible=!0}adjustCameraForUSDZLoadedModels(e,t,o,n=1.5){const r=e,a=new c["Gb"],i=new c["Gb"],s=new c["d"];s.makeEmpty();for(const c of o)s.expandByObject(c);s.getSize(a),s.getCenter(i);const d=Math.max(a.x,a.y,a.z),l=d/(2*Math.atan(Math.PI*r.fov/360)),h=l/r.aspect,u=n*Math.max(l,h),p=t.target.clone().sub(r.position).normalize().multiplyScalar(u);t.maxDistance=10*u,t.target.copy(i),r.near=u/100,r.far=100*u,r.updateProjectionMatrix(),e.position.copy(t.target).sub(p),t.update()}adjustCameraForDefaultLoadedModels(e){const t=(new c["d"]).setFromObject(e),o=t.max.x-t.min.x,n=t.max.y-t.min.y,r=t.max.z-t.min.z,a=Math.max(o,n,r),i=a/Math.tan(Math.PI/180*22.5),s=1,d=5e3;this.camera=new c["ib"](45,window.innerWidth/window.innerHeight,s,d);const l=new c["Gb"];t.getCenter(l),this.camera.position.copy(l),this.camera.position.z+=i,this.camera.lookAt(l),this.controls=new h["a"](this.camera,this.renderer.domElement),this.controls.target.copy(l),this.controls.minDistance=100,this.controls.maxDistance=800,this.controls.update(),this.scene.add(e)}};Object(d["a"])([Object(l["b"])("three-container")],_.prototype,"threeContainer",void 0),Object(d["a"])([Object(l["b"])("file")],_.prototype,"fileInput",void 0),_=Object(d["a"])([l["a"]],_);var z=_,k=z,j=(o("cddc"),o("2877")),C=o("6544"),L=o.n(C),S=o("8336"),E=o("b0af"),F=o("99d9"),U=o("169a"),P=o("ce7e"),D=o("2fa4"),O=Object(j["a"])(k,i,s,!1,null,null,null),I=O.exports;L()(O,{VBtn:S["a"],VCard:E["a"],VCardActions:F["a"],VCardText:F["b"],VCardTitle:F["c"],VDialog:U["a"],VDivider:P["a"],VSpacer:D["a"]});var V=n["a"].extend({name:"App",components:{Home:I}}),R=V,A=o("7496"),T=o("f6c4"),W=Object(j["a"])(R,r,a,!1,null,null,null),H=W.exports;L()(W,{VApp:A["a"],VMain:T["a"]});var Z=o("f309");n["a"].use(Z["a"]);var G=new Z["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:G,render:e=>e(H)}).$mount("#app")},cddc:function(e,t,o){"use strict";o("188d")}});
//# sourceMappingURL=app.265a626f.js.map