(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67fd676f"],{"185a":function(t,e,a){var n=a("d4cb"),r=a("e129"),s=a("9618"),i=a("378c"),o=a("083f"),l=a("f1a7"),c=a("7c3f"),u=Object.getOwnPropertyDescriptor;e.f=n?u:function(t,e){if(t=i(t),e=o(e,!0),c)try{return u(t,e)}catch(a){}if(l(t,e))return s(!r.f.call(t,e),t[e])}},"1f5e":function(t,e,a){var n=a("378c"),r=a("b495"),s=a("9a0f"),i=function(t){return function(e,a,i){var o,l=n(e),c=r(l.length),u=s(i,c);if(t&&a!=a){while(c>u)if(o=l[u++],o!=o)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===a)return t||u||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},2402:function(t,e){e.f=Object.getOwnPropertySymbols},"2aa5":function(t,e,a){"use strict";var n=a("6b1d"),r=a("42c5");n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},"2bfd":function(t,e,a){},"32f5":function(t,e,a){"use strict";var n=a("95b2"),r=a("157c"),s=a("37d1"),i=a("b495"),o=a("8bb2"),l=a("730c"),c=a("e3f6"),u=a("df8c"),h=Math.max,d=Math.min,f=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,a){return[function(a,n){var r=l(this),s=void 0==a?void 0:a[t];return void 0!==s?s.call(a,r,n):e.call(String(r),a,n)},function(t,s){var l=a(e,t,this,s);if(l.done)return l.value;var f=r(t),p=String(this),v="function"===typeof s;v||(s=String(s));var x=f.global;if(x){var g=f.unicode;f.lastIndex=0}var b=[];while(1){var I=u(f,p);if(null===I)break;if(b.push(I),!x)break;var y=String(I[0]);""===y&&(f.lastIndex=c(p,i(f.lastIndex),g))}for(var S="",C=0,w=0;w<b.length;w++){I=b[w];for(var D=String(I[0]),_=h(d(o(I.index),p.length),0),j=[],M=1;M<I.length;M++)j.push(m(I[M]));var O=I.groups;if(v){var V=[D].concat(j,_,p);void 0!==O&&V.push(O);var F=String(s.apply(void 0,V))}else F=n(D,p,_,j,O,s);_>=C&&(S+=p.slice(C,_)+F,C=_+D.length)}return S+p.slice(C)}];function n(t,a,n,r,i,o){var l=n+t.length,c=r.length,u=v;return void 0!==i&&(i=s(i),u=p),e.call(o,u,(function(e,s){var o;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,n);case"'":return a.slice(l);case"<":o=i[s.slice(1,-1)];break;default:var u=+s;if(0===u)return e;if(u>c){var h=f(u/10);return 0===h?e:h<=c?void 0===r[h-1]?s.charAt(1):r[h-1]+s.charAt(1):e}o=r[u-1]}return void 0===o?"":o}))}}))},"378c":function(t,e,a){var n=a("83a6"),r=a("730c");t.exports=function(t){return n(r(t))}},"37d1":function(t,e,a){var n=a("730c");t.exports=function(t){return Object(n(t))}},"3e36":function(t,e,a){t.exports=a("f498")},"42c5":function(t,e,a){"use strict";var n=a("abfd1"),r=RegExp.prototype.exec,s=String.prototype.replace,i=r,o=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=void 0!==/()??/.exec("")[1],c=o||l;c&&(i=function(t){var e,a,i,c,u=this;return l&&(a=new RegExp("^"+u.source+"$(?!\\s)",n.call(u))),o&&(e=u.lastIndex),i=r.call(u,t),o&&i&&(u.lastIndex=u.global?i.index+i[0].length:e),l&&i&&i.length>1&&s.call(i[0],a,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=i},5428:function(t,e,a){var n=a("3e36"),r=a("f498"),s=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?s(n[t])||s(r[t]):n[t]&&n[t][e]||r[t]&&r[t][e]}},"65d0":function(t,e,a){var n=a("c91c"),r=a("b17e"),s=r.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,s)}},"6b1d":function(t,e,a){var n=a("f498"),r=a("185a").f,s=a("5b12"),i=a("b8ba"),o=a("3e34"),l=a("b634"),c=a("ebac");t.exports=function(t,e){var a,u,h,d,f,p,v=t.target,m=t.global,x=t.stat;if(u=m?n:x?n[v]||o(v,{}):(n[v]||{}).prototype,u)for(h in e){if(f=e[h],t.noTargetGet?(p=r(u,h),d=p&&p.value):d=u[h],a=c(m?h:v+(x?".":"#")+h,t.forced),!a&&void 0!==d){if(typeof f===typeof d)continue;l(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),i(u,h,f,t)}}},"730c":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"83a6":function(t,e,a){var n=a("72df"),r=a("6a61"),s="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==r(t)?s.call(t,""):Object(t)}:Object},"8bb2":function(t,e){var a=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:a)(t)}},"95b2":function(t,e,a){"use strict";var n=a("5b12"),r=a("b8ba"),s=a("72df"),i=a("7d53"),o=a("42c5"),l=i("species"),c=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=!s((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,h){var d=i(t),f=!s((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),p=f&&!s((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[l]=function(){return a},a.flags="",a[d]=/./[d]),a.exec=function(){return e=!0,null},a[d](""),!e}));if(!f||!p||"replace"===t&&!c||"split"===t&&!u){var v=/./[d],m=a(d,""[t],(function(t,e,a,n,r){return e.exec===o?f&&!r?{done:!0,value:v.call(e,a,n)}:{done:!0,value:t.call(a,e,n)}:{done:!1}})),x=m[0],g=m[1];r(String.prototype,t,x),r(RegExp.prototype,d,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)}),h&&n(RegExp.prototype[d],"sham",!0)}}},"9a0f":function(t,e,a){var n=a("8bb2"),r=Math.max,s=Math.min;t.exports=function(t,e){var a=n(t);return a<0?r(a+e,0):s(a,e)}},a03e:function(t,e,a){var n=a("5428"),r=a("65d0"),s=a("2402"),i=a("157c");t.exports=n("Reflect","ownKeys")||function(t){var e=r.f(i(t)),a=s.f;return a?e.concat(a(t)):e}},a380:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"pt-10":""}},[a("v-layout",{attrs:{"pa-2":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",md6:"",xl3:"","pa-2":""}},[a("div",{staticClass:"px-10",staticStyle:{display:"none"}},[a("p",{staticClass:"text-center grey--text headline"},[t._v("¡Genial!")]),a("v-row",[a("p",{staticClass:"grey--text headline"},[t._v("En hora buena, deseas continuar el proceso")]),a("v-autocomplete",{attrs:{items:t.items,color:"primary"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),a("v-expand-transition",["si"==t.value?a("p",{staticClass:"grey--text headline"},[t._v(t._s(t.message[0]))]):t._e(),"no"==t.value?a("p",{staticClass:"grey--text headline"},[t._v(t._s(t.message[1]))]):t._e()]),a("v-row",{staticClass:"justify-center py-6"},[a("v-btn",{attrs:{rounded:"",color:"teal",dark:""},on:{click:function(e){return t.nextAction()}}},[t._v(t._s("si"==t.value?"Empecemos":"Salir"))])],1)],1),a("div",{staticClass:"px-1 pt-12",attrs:{id:"step2"}},[a("v-form",{ref:"form"},[a("p",{staticClass:"text-center title mb-0"},[t._v("¿Cuántas personas viven contigo?")]),a("v-row",[a("v-col",{staticClass:"justify-center",attrs:{cols:"6",sm:"6"}},[a("v-text-field",{staticClass:"pt-2 text-center",attrs:{maxlength:"2",color:"teal",placeholder:"2",required:"",max:"20"},on:{keypress:function(e){return t.isNumber(e)}},model:{value:t.fam_postulante,callback:function(e){t.fam_postulante=t._n(e)},expression:"fam_postulante"}})],1),a("v-col",{staticClass:"align-self-center",attrs:{cols:"6",sm:"6"}},[a("v-btn",{staticClass:"white--text body-2 text-capitalize",attrs:{small:"",color:"teal"},on:{click:function(e){return t.createObjFamilia()}}},[t._v("Registrar")])],1)],1),t._l(t.fam_postulante,(function(e,n){return a("v-flex",{key:e.id},[a("v-card",{staticClass:"mx-auto mb-4",attrs:{outlined:"","max-width":"344"}},[a("v-card-title",{staticClass:"color: teal lighten-2 white--text subtitle-1 py-3 justify-center"},[t._v("Familiar - "+t._s(n+1))]),a("v-divider"),a("v-card-text",[a("v-row",{staticClass:"mr-6"},[a("v-col",{staticClass:"align-self-center pa-0",attrs:{cols:"6",md:"6"}},[a("label",{staticClass:"pt-0",attrs:{for:""}},[t._v("Parentesco :")])]),a("v-col",{staticClass:"pa-0",attrs:{cols:"6",md:"6"}},[a("v-select",{staticClass:"mt-0 pa-0 pt-2",attrs:{items:t.parentesco,color:"teal",rules:[function(t){return!!t||"Selecciona el parentesco"}],required:""},model:{value:t.parentescoModel,callback:function(e){t.parentescoModel=e},expression:"parentescoModel"}})],1)],1),a("v-row",{staticClass:"mr-6"},[a("v-col",{staticClass:"align-self-center pa-0",attrs:{cols:"6",md:"6"}},[a("label",{attrs:{for:""}},[t._v("Edad :")])]),a("v-col",{staticClass:"pa-0",attrs:{cols:"6",md:"6"}},[a("v-text-field",{staticClass:"pa-0",attrs:{color:"teal",placeholder:"2",rules:[function(t){return!!t||"Ingresa la edad"}],required:""},model:{value:t.edad,callback:function(e){t.edad=e},expression:"edad"}})],1)],1),a("v-row",{staticClass:"mr-6"},[a("v-col",{staticClass:"align-self-center pa-0",attrs:{cols:"6",md:"6"}},[a("label",{attrs:{for:""}},[t._v("Trabaja :")])]),a("v-col",{staticClass:"pa-0",attrs:{cols:"6",md:"6"}},[a("v-select",{staticClass:"pa-0",attrs:{items:t.trabaja,color:"teal",label:"Seleccionar",rules:[function(t){return!!t||"Selecciona una opción"}],required:""},model:{value:t.trabajaModel,callback:function(e){t.trabajaModel=e},expression:"trabajaModel"}})],1)],1)],1)],1)],1)}))],2)],1)])],1)],1)},r=[],s=(a("2aa5"),a("32f5"),{data:function(){return{descriptionLimit:5,message:["¡Estupendo!, no esperemos más, a comenzar.","Descuida, puedes volver cuando sea posible :)"],items:["si","no"],values:["si","no"],value:null,fam_postulante:null,arrFamilia:[],familiares:[],parentescoModel:"",parentesco:["Padre","Madre","Hermano(a)","Hijo(a)","Pareja","Tio(a)","Sobrino(a)","Abuelo(a)","Suegro(a)","Otros"],trabaja:["Si","No"],edad:null,trabajaModel:""}},mounted:function(){this.createObjFamilia(),this.returnTrue(),console.log(this.createObjFamilia())},methods:{isNumber:function(t){t=t||window.event;var e=t.which?t.which:t.keyCode;if(!(e>31&&(e<48||e>57)&&46!==e))return!0;t.preventDefault()},returnTrue:function(){return!0},createObjFamilia:function(){var t=this.fam_postulante;if(t>0)for(var e=0;e<t;e++)return this.arrFamilia.push({parentesco:"ds",edad:2,trabaja:"ds"}),console.log(this.arrFamilia),this.arrFamilia},nextAction:function(){"si"==this.value?this.$router.replace({name:"selection"}):this.$router.replace({name:"home"})}}}),i=s,o=a("2877"),l=a("6544"),c=a.n(l),u=(a("2bfd"),a("b974")),h=a("8654"),d=a("80d2");const f={...u["b"],offsetY:!0,offsetOverflow:!0,transition:!1};var p=u["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,a)=>a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:u["a"].options.props.menuProps.type,default:()=>f},noFilter:Boolean,searchInput:{type:String,default:void 0}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...u["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>this.filter(t,String(this.internalSearch),String(this.getText(t))))},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=u["a"].options.computed.$_menuProps.call(this);return t.contentClass=`v-autocomplete__content ${t.contentClass||""}`.trim(),{...f,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue)))},listData(){const t=u["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},methods:{onFilteredItemsChanged(t,e){t!==e&&(this.setMenuIndex(-1),this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))}))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===d["r"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d["r"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d["r"].backspace&&t!==d["r"].delete||this.deleteCurrentItem())},deleteCurrentItem(){if(this.readonly)return;const t=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==t)return void(this.selectedIndex=t);const e=this.selectedItems[this.selectedIndex];if(this.getDisabled(e))return;const a=this.selectedIndex===t?this.selectedIndex-1:this.selectedItems[this.selectedIndex+1]?this.selectedIndex:-1;-1===a?this.setValue(this.multiple?[]:void 0):this.selectItem(e),this.selectedIndex=a},clearableCallback(){this.internalSearch=void 0,u["a"].options.methods.clearableCallback.call(this)},genInput(){const t=h["a"].options.methods.genInput.call(this);return t.data=t.data||{},t.data.attrs=t.data.attrs||{},t.data.attrs.autocomplete=t.data.attrs.autocomplete||"off",t.data.domProps=t.data.domProps||{},t.data.domProps.value=this.internalSearch,t},genInputSlot(){const t=u["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?u["a"].options.methods.genSelections.call(this):[]},onClick(){this.isDisabled||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,a=e.value;e.value&&this.activateMenu(),this.internalSearch=a,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;u["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){u["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(){this.activateMenu()},selectItem(t){u["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){u["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){if(-1===this.selectedIndex)return;const e=this.selectedItems[this.selectedIndex],a=this.getText(e);t.clipboardData.setData("text/plain",a),t.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",a),t.preventDefault()}}}),v=a("8336"),m=a("b0af"),x=a("99d9"),g=a("62ad"),b=a("a523"),I=a("ce7e"),y=a("0789"),S=a("0e8f"),C=a("4bd4"),w=a("a722"),D=a("0fd9b"),_=Object(o["a"])(i,n,r,!1,null,null,null);e["default"]=_.exports;c()(_,{VAutocomplete:p,VBtn:v["a"],VCard:m["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:g["a"],VContainer:b["a"],VDivider:I["a"],VExpandTransition:y["a"],VFlex:S["a"],VForm:C["a"],VLayout:w["a"],VRow:D["a"],VSelect:u["a"],VTextField:h["a"]})},abfd1:function(t,e,a){"use strict";var n=a("157c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b17e:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},b495:function(t,e,a){var n=a("8bb2"),r=Math.min;t.exports=function(t){return t>0?r(n(t),9007199254740991):0}},b634:function(t,e,a){var n=a("f1a7"),r=a("a03e"),s=a("185a"),i=a("abdf");t.exports=function(t,e){for(var a=r(e),o=i.f,l=s.f,c=0;c<a.length;c++){var u=a[c];n(t,u)||o(t,u,l(e,u))}}},b7fb:function(t,e,a){var n=a("8bb2"),r=a("730c"),s=function(t){return function(e,a){var s,i,o=String(r(e)),l=n(a),c=o.length;return l<0||l>=c?t?"":void 0:(s=o.charCodeAt(l),s<55296||s>56319||l+1===c||(i=o.charCodeAt(l+1))<56320||i>57343?t?o.charAt(l):s:t?o.slice(l,l+2):i-56320+(s-55296<<10)+65536)}};t.exports={codeAt:s(!1),charAt:s(!0)}},c91c:function(t,e,a){var n=a("f1a7"),r=a("378c"),s=a("1f5e").indexOf,i=a("d687");t.exports=function(t,e){var a,o=r(t),l=0,c=[];for(a in o)!n(i,a)&&n(o,a)&&c.push(a);while(e.length>l)n(o,a=e[l++])&&(~s(c,a)||c.push(a));return c}},df8c:function(t,e,a){var n=a("6a61"),r=a("42c5");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var s=a.call(t,e);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},e129:function(t,e,a){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,s=r&&!n.call({1:2},1);e.f=s?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},e3f6:function(t,e,a){"use strict";var n=a("b7fb").charAt;t.exports=function(t,e,a){return e+(a?n(t,e).length:1)}},ebac:function(t,e,a){var n=a("72df"),r=/#|\.prototype\./,s=function(t,e){var a=o[i(t)];return a==c||a!=l&&("function"==typeof e?n(e):!!e)},i=s.normalize=function(t){return String(t).replace(r,".").toLowerCase()},o=s.data={},l=s.NATIVE="N",c=s.POLYFILL="P";t.exports=s}}]);
//# sourceMappingURL=chunk-67fd676f.09e240a3.js.map