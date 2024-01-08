(function(e){function t(t){for(var n,r,i=t[0],d=t[1],l=t[2],h=0,u=[];h<i.length;h++)r=i[h],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&u.push(a[r][0]),a[r]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);c&&c(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,i=1;i<o.length;i++){var d=o[i];0!==a[d]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},a={app:0},s=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/usdz-web-viewer/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=d;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("cd49")},"188d":function(e,t,o){},cd49:function(e,t,o){"use strict";o.r(t);var n=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-main",[o("Home")],1)],1)},s=[],r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("button",{on:{click:function(t){return e.loadModel("fbx")}}},[e._v("Load FBX Model")]),o("button",{on:{click:function(t){return e.loadModel("gltf")}}},[e._v("Load GLTF Model")]),o("button",{on:{click:function(t){return e.loadModel("glb")}}},[e._v("Load GLB Model")]),o("button",{on:{click:function(t){return e.loadModel("usdz")}}},[e._v("Load USDZ Model")]),o("button",{on:{click:function(t){return e.loadModel("ply")}}},[e._v("Load PLY Model")]),o("button",{on:{click:function(t){return e.loadModel("obj")}}},[e._v("Load OBJ Model")]),o("div",{ref:"three-container",staticClass:"three-container"},[o("div",{staticClass:"three-overlay"},[null!=e.error?o("div",{staticClass:"mb-3",staticStyle:{color:"red"}},[e._v(" An error occured when loading the USDZ file. Maybe this file is not supported or the loader is not supported on this device. ")]):e._e(),o("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"file",staticClass:"w-px h-px opacity-0 overflow-hidden absolute",attrs:{type:"file",multiple:"",name:"fields[assetsFieldHandle][]",accept:".usdz"}})]),o("v-dialog",{attrs:{width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[o("v-card",[o("v-card-title",{staticClass:"text-h5"},[e._v(" Information about the player ")]),o("v-card-text",{staticClass:"mt-2"},[e._v(" This player is based on the "),o("a",{attrs:{href:"https://www.npmjs.com/package/three-usdz-loader"}},[e._v("three-usdz-loader")]),e._v(" package"),o("br"),e._v(" Contact: contact@usdz-viewer.net ")]),o("v-divider"),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" OK ")])],1)],1)],1)],1)])},i=[],d=o("9ab4"),l=o("1b40"),c=o("5a89"),h=o("4721"),u=o("2132"),p=o("8769"),m=(o("d9e2"),o("8710"));function f(e){return new Promise((t,o)=>{console.log(e);const n=new m["a"];n.load(e,e=>{e instanceof c["w"]?t(e):o(new Error("Loaded object is not an instance of THREE.Group."))},void 0,e=>{o(e)})})}var w=o("34ad"),b=o("0ca5");function g(e){return new Promise((t,o)=>{const n=new b["a"];n.setDecoderPath("/examples/jsm/libs/draco/");const a=new w["a"];a.setDRACOLoader(n),a.load(e,(function(e){console.log("GLTF loaded successfully:",e),t(e.scene)}),(function(e){e.lengthComputable&&console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.error("An error happened",e),o(e)}))})}var v=o("21cb");function y(e){return new Promise((t,o)=>{const n=new v["a"];n.load(e,(function(e){e.computeVertexNormals();const o=new c["Z"]({color:40191,flatShading:!0}),n=new c["U"](e,o),a=new c["w"];a.add(n),t(a)}))})}var M=o("e642");function x(e,t,o){return new Promise((n,a)=>{const s=new M["a"];s.load(e,e=>{e instanceof c["w"]?(e.traverse(e=>{e instanceof c["U"]&&(e.material.map=t,e.material instanceof c["Z"]&&(e.material.normalMap=o,e.material.normalScale.set(1,1)))}),n(e)):a(new Error("Loaded object is not an instance of THREE.Group."))},void 0,e=>{a(e)})})}var _=o("3191"),j=o.n(_);o("af87");const k=new c["Ab"],z=k.load("https://github.com/RaviMk001/usdz-web-viewer/blob/main/models/obj/test/baked_mesh_tex0.png"),C=k.load("https://github.com/RaviMk001/usdz-web-viewer/blob/main/models/obj/test/baked_mesh_norm0.png");let E=class extends l["c"]{constructor(){super(...arguments),this.modelIsVisible=!1,this.modelIsLoading=!1,this.dialog=!1,this.loadedModels=[],this.error=null,this.loaderReady=null,this.modelUrl=null}loadModel(e){let t="";switch(e){case"fbx":t="models/fbx/eve_j_gonzales.fbx";break;case"gltf":t="models/gltf/eve_j_gonzales.gltf";break;case"glb":t="models/gltf/eve_j_gonzales_glb.glb";break;case"usdz":t="models/usdz/AirForce.usdz";break;case"ply":t="models/ply/eve_j_gonzales.ply";break;case"obj":t="models/obj/test/baked_mesh.obj";break}this.loadModelByUrl(t)}loadModelByUrl(e){const t=this.getFileExtension(e);if(t)switch(this.disposee(),this.removeLoader(),t){case"usdz":this.usdz_loaders(e);break;default:this.default_loaders(e);break}}removeLoader(){this.loadedModels.forEach(e=>{e.clear()}),this.loadedModels=[]}disposee(){this.controls&&this.controls.dispose(),this.renderer&&this.renderer.dispose(),this.scene.traverse(e=>{e instanceof c["U"]&&(e.material&&e.material.dispose(),e.geometry&&e.geometry.dispose())});while(this.scene.children.length>0){const e=this.scene.children[0];this.scene.remove(e)}}async mounted(){this.modelUrl="/usdz-web-viewer/models/obj/test/baked_mesh.obj";const e=this.getFileExtension(this.modelUrl);if(e)switch(e){case"usdz":this.usdz_loaders(this.modelUrl);break;default:this.default_loaders(this.modelUrl);break}else console.error("Invalid URL")}usdz_loaders(e){this.camera=new c["ib"](45,window.innerWidth/window.innerHeight,1,2e3),this.camera.position.set(0,50,350),this.scene=new c["rb"],this.scene.background=new c["i"](16777215);const t=new c["a"](1118481);t.intensity=1,this.scene.add(t);const o=new c["U"](new c["jb"](2e3,2e3),new c["V"]({color:16777215,depthWrite:!1}));o.rotation.x=Math.PI/2,o.receiveShadow=!0,this.scene.add(o);const n=new c["v"](2e3,20,0,0);n.material.opacity=.2,n.material.transparent=!0,this.scene.add(n),this.renderer=new c["Jb"]({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=c["g"],this.renderer.toneMappingExposure=2,this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=c["Eb"],new Promise(e=>{const t=new c["hb"](this.renderer);t.compileCubemapShader(),(new u["a"]).load("studio_country_hall_1k.hdr",o=>{const n=t.fromEquirectangular(o);o.mapping=c["o"],o.needsUpdate=!0,window.envMap=n.texture,e(!0)})}),this.threeContainer.appendChild(this.renderer.domElement),this.controls=new h["a"](this.camera,this.renderer.domElement),this.controls.update(),this.stats=new j.a,document.body.appendChild(this.stats.dom),this.ConvertUSDZFileFromURL(e),window.addEventListener("resize",this.onWindowResize),this.animate()}default_loaders(e){const t=document.createElement("div");document.body.appendChild(t),this.camera=new c["ib"](45,window.innerWidth/window.innerHeight,1,2e3),this.camera.position.set(0,50,350),this.scene=new c["rb"],this.scene.background=new c["i"](16777215);const o=new c["y"](16777215,4473924,5);o.position.set(0,200,0),this.scene.add(o);const n=new c["m"](16777215,5);n.position.set(0,200,100),n.castShadow=!0,n.shadow.camera.top=180,n.shadow.camera.bottom=-100,n.shadow.camera.left=-120,n.shadow.camera.right=120,this.scene.add(n);const a=new c["U"](new c["jb"](2e3,2e3),new c["V"]({color:16777215,depthWrite:!1}));a.rotation.x=Math.PI/2,a.receiveShadow=!0,this.scene.add(a);const s=new c["v"](2e3,20,0,0);s.material.opacity=.2,s.material.transparent=!0,this.scene.add(s),this.renderer=new c["Jb"]({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=c["g"],this.renderer.toneMappingExposure=2,this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=c["Eb"],new Promise(e=>{const t=new c["hb"](this.renderer);t.compileCubemapShader(),(new u["a"]).load("studio_country_hall_1k.hdr",o=>{const n=t.fromEquirectangular(o);o.mapping=c["o"],o.needsUpdate=!0,window.envMap=n.texture,e(!0)})}),this.threeContainer.appendChild(this.renderer.domElement),this.stats=new j.a,document.body.appendChild(this.stats.dom);const r=this.getFileExtension(e);if(r)switch(r){case"fbx":f(e).then(e=>{this.adjustCameraForDefaultLoadedModels(e),console.log(r+" model added to the scene.")}).catch(e=>{console.error("Error loading "+r+" model : ",e)});break;case"gltf":case"glb":g(e).then(e=>{this.adjustCameraForDefaultLoadedModels(e),console.log(r+" model added to the scene.")}).catch(e=>{console.error("Error loading "+r+" model : ",e)});break;case"ply":y(e).then(e=>{this.adjustCameraForDefaultLoadedModels(e),console.log(r+" model added to the scene.")}).catch(e=>{console.error("Error loading "+r+" model : ",e)});break;case"obj":x(e,z,C).then(e=>{this.adjustCameraForDefaultLoadedModels(e),console.log(r+" model added to the scene.")}).catch(e=>{console.error("Error loading "+r+" model : ",e)});break;default:console.error("Unsupported file extension");break}else console.error("Invalid URL");window.addEventListener("resize",this.onWindowResize),this.animate()}getFileExtension(e){const t=e.match(/\.([a-zA-Z0-9]+)$/);return t?t[1].toLowerCase():null}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}onChange(){console.log("Entered3"),null!=this.fileInput.files&&(console.log("Entered4"),this.removeLoader(),this.handleFilesUpload(this.fileInput.files))}onClickDragZone(){console.log("DirName : ",this.fileInput.dirName),this.fileInput.addEventListener("change",()=>{console.log(this.fileInput.files),null!=this.fileInput.files&&this.fileInput.files.length>0&&(console.log("Entered5"),this.handleFilesUpload(this.fileInput.files))}),this.fileInput.click()}dragover(e){e.preventDefault()}handleFilesUpload(e){console.log("Entered2",e[0]),this.loadUSDZFilesIntoScene(e[0])}async loadFile(e){if(console.log("Entered6"),console.log(e,"Check"),this.modelIsLoading)return;console.log("Entered7"),this.modelIsLoading=!0,this.error=null;for(const a of this.loadedModels)a.clear();this.loadedModels=[];const t=new c["w"];this.scene.add(t);try{console.log(e);const o=await this.loader_usdz.loadFile(e,t);console.log(o),this.loadedModels.push(o)}catch(n){return this.error=n,console.error("An error occured when trying to load the model"+n),console.log(n),void(this.modelIsLoading=!1)}const o=this.loadedModels.map(e=>e.getGroup());this.fitCamera(this.camera,this.controls,o),this.modelIsLoading=!1,this.modelIsVisible=!0}fitCamera(e,t,o,n=1.5){const a=e,s=new c["Gb"],r=new c["Gb"],i=new c["d"];i.makeEmpty();for(const c of o)i.expandByObject(c);i.getSize(s),i.getCenter(r);const d=Math.max(s.x,s.y,s.z),l=d/(2*Math.atan(Math.PI*a.fov/360)),h=l/a.aspect,u=n*Math.max(l,h),p=t.target.clone().sub(a.position).normalize().multiplyScalar(u);t.maxDistance=10*u,t.target.copy(r),a.near=u/100,a.far=100*u,a.updateProjectionMatrix(),e.position.copy(t.target).sub(p),t.update()}async animate(){this.stats.begin();const e=(new Date).getTime()/1e3;await new Promise(e=>setTimeout(e,10));for(const t of this.loadedModels)t.update(e);this.renderer.render(this.scene,this.camera),this.stats.end(),requestAnimationFrame(this.animate)}ConvertUSDZFileFromURL(e){fetch(e).then(e=>e.blob()).then(e=>{const t=new File([e],"AirfForce.usdz",{type:e.type}),o=new DataTransfer;if(o.items.add(t),this.fileInput){this.fileInput.files=o.files;for(const e of this.fileInput.files)console.log("FileName: "+e.name);console.log("Dir : ",this.fileInput.dir),console.log("DirName : ",this.fileInput.dirName),this.loadUSDZFilesIntoScene(this.fileInput.files[0])}}).catch(e=>{console.error("Error loading default file:",e)})}async loadUSDZFilesIntoScene(e){if(this.modelIsLoading)return;this.modelIsLoading=!0,this.error=null;for(const a of this.loadedModels)a.clear();this.loadedModels=[];const t=new c["w"];this.scene.add(t);try{this.loader_usdz=new p["USDZLoader"]("/usdz-web-viewer/wasm");const o=await this.loader_usdz.loadFile(e,t);this.loadedModels.push(o)}catch(n){return this.error=n,console.error("An error occured when trying to load the model"+n),console.error("Memory usage:",performance.memory),void(this.modelIsLoading=!1)}const o=this.loadedModels.map(e=>e.getGroup());this.fitCamera(this.camera,this.controls,o),this.modelIsLoading=!1,this.modelIsVisible=!0}adjustCameraForUSDZLoadedModels(e,t,o,n=1.5){const a=e,s=new c["Gb"],r=new c["Gb"],i=new c["d"];i.makeEmpty();for(const c of o)i.expandByObject(c);i.getSize(s),i.getCenter(r);const d=Math.max(s.x,s.y,s.z),l=d/(2*Math.atan(Math.PI*a.fov/360)),h=l/a.aspect,u=n*Math.max(l,h),p=t.target.clone().sub(a.position).normalize().multiplyScalar(u);t.maxDistance=10*u,t.target.copy(r),a.near=u/100,a.far=100*u,a.updateProjectionMatrix(),e.position.copy(t.target).sub(p),t.update()}adjustCameraForDefaultLoadedModels(e){const t=(new c["d"]).setFromObject(e),o=t.max.x-t.min.x,n=t.max.y-t.min.y,a=t.max.z-t.min.z,s=Math.max(o,n,a),r=s/Math.tan(Math.PI/180*22.5),i=1,d=5e3;this.camera=new c["ib"](45,window.innerWidth/window.innerHeight,i,d);const l=new c["Gb"];t.getCenter(l),this.camera.position.copy(l),this.camera.position.z+=r,this.camera.lookAt(l),this.controls=new h["a"](this.camera,this.renderer.domElement),this.controls.target.copy(l),this.controls.minDistance=1,this.controls.maxDistance=800,this.controls.update(),this.scene.add(e)}};Object(d["a"])([Object(l["b"])("three-container")],E.prototype,"threeContainer",void 0),Object(d["a"])([Object(l["b"])("file")],E.prototype,"fileInput",void 0),E=Object(d["a"])([l["a"]],E);var L=E,I=L,F=(o("cddc"),o("2877")),S=o("6544"),U=o.n(S),D=o("8336"),P=o("b0af"),O=o("99d9"),R=o("169a"),V=o("ce7e"),A=o("2fa4"),T=Object(F["a"])(I,r,i,!1,null,null,null),Z=T.exports;U()(T,{VBtn:D["a"],VCard:P["a"],VCardActions:O["a"],VCardText:O["b"],VCardTitle:O["c"],VDialog:R["a"],VDivider:V["a"],VSpacer:A["a"]});var G=n["a"].extend({name:"App",components:{Home:Z}}),H=G,W=o("7496"),B=o("f6c4"),N=Object(F["a"])(H,a,s,!1,null,null,null),J=N.exports;U()(N,{VApp:W["a"],VMain:B["a"]});var $=o("f309");n["a"].use($["a"]);var q=new $["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:q,render:e=>e(J)}).$mount("#app")},cddc:function(e,t,o){"use strict";o("188d")}});
//# sourceMappingURL=app.7a719ab0.js.map