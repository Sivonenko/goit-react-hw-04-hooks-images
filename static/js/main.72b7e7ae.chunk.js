(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{10:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__1LEDw",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__2Xjb0"}},11:function(e,t,a){e.exports={boxButton:"Button_boxButton__3RZPB",button:"Button_button__3QF_k"}},12:function(e,t,a){e.exports={modalBackdrop:"Modal_modalBackdrop__2cpc_",modalContent:"Modal_modalContent__1rYYD"}},14:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__20iVM"}},21:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),o=a(3),s=a.n(o),i=(a(21),a(13)),l=a(2),u=a(6),m=a(9),b=a.n(m),j=(a(22),a(4)),h=a.n(j);function p(e){var t=e.onSearch,a=Object(c.useState)(""),r=Object(l.a)(a,2),o=r[0],s=r[1];return Object(n.jsx)("header",{className:h.a.searchbar,children:Object(n.jsxs)("form",{className:h.a.searchForm,onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),s("")):u.b.warn("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",{position:u.b.POSITION.TOP_LEFT})},children:[Object(n.jsx)("button",{type:"submit",className:h.a.searchFormButton,children:Object(n.jsx)("span",{className:h.a.searchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:h.a.searchFormInput,type:"text",name:"searchValue",value:o,onChange:function(e){var t=e.target;s(t.value)},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}var d=a(14),f=a.n(d),g=a(10),O=a.n(g);function _(e){var t=e.largeImageURL,a=e.webformatURL,c=e.onOpenImage;return Object(n.jsx)("li",{className:O.a.imageGalleryItem,children:Object(n.jsx)("img",{className:O.a.imageGalleryItemImage,url:t,src:a,alt:"",onClick:function(){c(t)}})})}function x(e){var t=e.images,a=e.onOpenImage;return Object(n.jsx)("ul",{className:f.a.imageGallery,children:t.map((function(e){var t=e.id,c=e.webformatURL,r=e.largeImageURL;return Object(n.jsx)(_,{webformatURL:c,largeImageURL:r,onOpenImage:a},t)}))})}var v=a(11),I=a.n(v);function S(e){var t=e.onClick;return Object(n.jsx)("div",{className:I.a.boxButton,children:Object(n.jsx)("button",{type:"button",className:I.a.button,onClick:t,children:"Load more"})})}var y=a(12),F=a.n(y),w=document.querySelector("#modal-root");function B(e){var t=e.onClose,a=e.largeImage;return Object(c.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]),Object(o.createPortal)(Object(n.jsx)("div",{className:F.a.modalBackdrop,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(n.jsx)("div",{className:F.a.modalContent,children:Object(n.jsx)("img",{src:a,alt:""})})}),w)}var C=a(15),L=a.n(C);function N(e){var t=e.loading;return Object(n.jsx)(L.a,{size:80,color:"#df101b",loading:t})}var k={fetchImages:function(e,t){return fetch("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("19490802-1c5184405fc512a55f5ad98ed","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()}))}};function G(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)(""),s=Object(l.a)(o,2),m=s[0],j=s[1],h=Object(c.useState)(1),d=Object(l.a)(h,2),f=d[0],g=d[1],O=Object(c.useState)(!1),_=Object(l.a)(O,2),v=_[0],I=_[1],y=Object(c.useState)([]),F=Object(l.a)(y,2),w=F[0],C=F[1],L=Object(c.useState)(""),G=Object(l.a)(L,2),E=G[0],P=G[1];Object(c.useEffect)((function(){""!==m.trim()&&(I(!0),k.fetchImages(m,f).then((function(e){C((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e.hits))}))})).catch((function(e){return console.error(e)})).finally((function(){I(!1),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})))}),[f,m]);var R=w.length>0&&!v;return Object(n.jsxs)("div",{className:b.a.app,children:[Object(n.jsx)(p,{onSearch:function(e){m!==e&&(j(e),C([]),g(1))}}),Object(n.jsx)(x,{images:w,onOpenImage:function(e){r(!0),P(e)}}),Object(n.jsx)("div",{className:b.a.boxSpinner,children:Object(n.jsx)(N,{loading:v})}),R&&Object(n.jsx)(S,{onClick:function(){g((function(e){return e+1}))}}),a&&Object(n.jsx)(B,{onClose:function(){r(!a)},largeImage:E}),Object(n.jsx)(u.a,{})]})}var E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,30)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(G,{})}),document.getElementById("root")),E()},4:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__jo466",searchForm:"Searchbar_searchForm__23jwf",searchFormButton:"Searchbar_searchFormButton__MrnjN",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__w1n27",searchFormInput:"Searchbar_searchFormInput__tpesZ"}},9:function(e,t,a){e.exports={app:"App_app__1kX79",boxSpinner:"App_boxSpinner__2v9PC"}}},[[29,1,2]]]);
//# sourceMappingURL=main.72b7e7ae.chunk.js.map