(()=>{"use strict";var e={1020:(e,a,t)=>{var l=t(1609),r=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),n=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,t){var l,c={},i=null,p=null;for(l in void 0!==t&&(i=""+t),void 0!==a.key&&(i=""+a.key),void 0!==a.ref&&(p=a.ref),a)o.call(a,l)&&!s.hasOwnProperty(l)&&(c[l]=a[l]);if(e&&e.defaultProps)for(l in a=e.defaultProps)void 0===c[l]&&(c[l]=a[l]);return{$$typeof:r,type:e,key:i,ref:p,props:c,_owner:n.current}}a.jsx=c,a.jsxs=c},4848:(e,a,t)=>{e.exports=t(1020)},1609:e=>{e.exports=window.React}},a={};function t(l){var r=a[l];if(void 0!==r)return r.exports;var o=a[l]={exports:{}};return e[l](o,o.exports,t),o.exports}t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},t.d=(e,a)=>{for(var l in a)t.o(a,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a);const l=window.wp.blocks;var r,o=t(1609);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)({}).hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},n.apply(null,arguments)}const s=window.wp.i18n,c=window.wp.blockEditor,i=window.wp.components,p=window.wp.serverSideRender;var u=t.n(p);const d=window.wp.apiFetch;var v=t.n(d),m=t(4848);const b=({attributes:e,setAttributes:a,clientId:t})=>{const{template_id:l,limit:r,columns:n,orderby:p,order:u}=e,[d,b]=(0,o.useState)();return(0,o.useEffect)((()=>{v()({path:"/sp-block/loop-templates"}).then((e=>{if(e){const a=Object.entries(e)?.map((e=>({value:e[0],label:e[1]})));b(a)}}))}),[]),(0,m.jsx)(c.InspectorControls,{children:(0,m.jsxs)(i.PanelBody,{title:(0,s.__)("General","shop-press"),initialOpen:!0,children:[(0,m.jsx)(i.SelectControl,{label:(0,s.__)("Template","shop-press"),value:l,options:null!=d?d:[],onChange:e=>a({template_id:e}),__nextHasNoMarginBottom:!0}),(0,m.jsx)(i.__experimentalNumberControl,{onChange:e=>a({limit:e}),value:r,label:(0,s.__)("Limit","shop-press")}),(0,m.jsx)(i.__experimentalNumberControl,{onChange:e=>a({columns:e}),value:n,label:(0,s.__)("Columns","shop-press")}),(0,m.jsx)(i.SelectControl,{label:(0,s.__)("Order By","shop-press"),value:p,options:[{label:"ID",value:"id"},{label:"Title",value:"title"},{label:"Date",value:"date"},{label:"Random",value:"rand"},{label:"Price",value:"price"},{label:"Popularity",value:"popularity"},{label:"Rating",value:"rating"}],onChange:e=>a({orderby:e}),__nextHasNoMarginBottom:!0}),(0,m.jsx)(i.SelectControl,{label:(0,s.__)("Order","shop-press"),value:u,options:[{label:"ASC",value:"ASC"},{label:"DESC",value:"DESC"}],onChange:e=>a({order:e}),__nextHasNoMarginBottom:!0})]})})},_=JSON.parse('{"UU":"shop-press/cross-sell-product"}');(0,l.registerBlockType)(_.UU,{edit:e=>{const{attributes:a,setAttributes:t,clientId:l}=e,r=(0,c.useBlockProps)();return(0,m.jsxs)("div",{...r,children:[(0,m.jsx)(b,{attributes:a,setAttributes:t,clientId:l}),(0,m.jsx)(u(),{block:"shop-press/cross-sell-product",attributes:a})]})},icon:function(e){return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",width:37.957,height:35.969,className:"cross-sell_svg__block-icon"},e),r||(r=o.createElement("g",{"data-name":"Cross sell"},o.createElement("g",{"data-name":"Group 72093"},o.createElement("g",{fill:"#837af5","data-name":"Group 71993"},o.createElement("path",{d:"M12.65 18.212a.89.89 0 0 0-.055 1.257l1.267 1.4c-3.537.272-5.575 1.528-6.867 3.066.122.277.235.55.344.809.156.375.304.743.468 1.097 1.008-1.6 2.632-2.879 5.968-3.177l-1.119 1.251a.891.891 0 1 0 1.324 1.189l2.515-2.805q.017-.022.032-.042a1 1 0 0 0 .048-.066 1 1 0 0 0 .044-.078q.018-.034.034-.069a1 1 0 0 0 .03-.091l.019-.069a1 1 0 0 0 .014-.115.1.1 0 0 1 .005-.044V21.7a1 1 0 0 0-.026-.164.3.3 0 0 0-.018-.066 1 1 0 0 0-.029-.1 1 1 0 0 0-.034-.068c-.012-.022-.027-.055-.042-.081s-.033-.043-.049-.066a1 1 0 0 0-.041-.056l-2.573-2.827a.89.89 0 0 0-1.261-.06Z","data-name":"Path 10112"}),o.createElement("path",{d:"M4.855 28.007c-.879 2.318-1.433 3.529-3.482 3.529a.892.892 0 0 0 0 1.783c2.794 0 3.919-1.7 4.7-3.53a10.3 10.3 0 0 1-1.2-1.833Z","data-name":"Path 10113"}),o.createElement("path",{d:"M.484 21.656a.89.89 0 0 0 .891.889c2.067 0 2.591 1.044 3.487 3.217.14.344.288.7.453 1.063a11 11 0 0 0 1.134 2c1.251 1.722 3.335 3.21 7.4 3.5l-1.265 1.393a1 1 0 0 0-.1.14q-.012.025-.026.051a1 1 0 0 0-.047.1q-.01.033-.019.067a1 1 0 0 0-.023.1.3.3 0 0 1-.006.073 1 1 0 0 0 0 .091.5.5 0 0 0 .009.1.3.3 0 0 0 .011.073 1 1 0 0 0 .033.1q.01.034.023.068a1 1 0 0 0 .058.1l.033.055a1 1 0 0 0 .123.139.89.89 0 0 0 1.26-.053l2.571-2.846q.022-.027.041-.056c.019-.029.034-.042.049-.066a1 1 0 0 0 .042-.081l.034-.068a1 1 0 0 0 .029-.1l.018-.066a1 1 0 0 0 .016-.164v-.018a.1.1 0 0 0 0-.044 1 1 0 0 0-.019-.111.3.3 0 0 0-.019-.069c-.007-.022-.019-.062-.03-.091a1 1 0 0 0-.034-.069 1 1 0 0 0-.044-.078 1 1 0 0 0-.048-.066q-.015-.022-.032-.042l-2.507-2.8a.885.885 0 0 0-1.384.069l-.032.046a1 1 0 0 0-.059.109q-.012.033-.023.066a1 1 0 0 0-.034.1 1 1 0 0 0-.011.073 1 1 0 0 0-.009.1 1 1 0 0 0 0 .091l.006.071a1 1 0 0 0 .022.1 1 1 0 0 0 .018.064 1 1 0 0 0 .047.1l.023.049a1 1 0 0 0 .1.142l1.14 1.268c-3.987-.313-5.529-1.894-6.5-3.741a18 18 0 0 1-.771-1.71l-.133-.32c-.809-1.939-1.825-4-5-4a.893.893 0 0 0-.9.892Z","data-name":"Path 10114"})),o.createElement("path",{fill:"#b3b7c0",fillRule:"evenodd",d:"M17.972 12.981c0 .655.878 1.335 2.3 1.9a20.97 20.97 0 0 0 13.379 0c1.418-.567 2.3-1.247 2.3-1.9s-.878-1.332-2.3-1.9a18.7 18.7 0 0 0-6.69-1.1 20.3 20.3 0 0 0-5.636.735l-.142.042q-.485.15-.914.319c-1.42.569-2.3 1.249-2.3 1.9Zm1.558 3.753a9.4 9.4 0 0 1-1.559-.787v1.025a1 1 0 1 1-1.99 0v-3.991c0-1.55 1.358-2.872 3.554-3.751l.441-.167V7.957a9.6 9.6 0 0 1-1.558.787 22.82 22.82 0 0 1-14.864 0 9.3 9.3 0 0 1-1.559-.787v8.783a1 1 0 1 1-1.99 0V4.995c0-1.55 1.358-2.872 3.551-3.751a22.83 22.83 0 0 1 14.867 0c2.194.878 3.554 2.2 3.554 3.751v3.5a23.7 23.7 0 0 1 4.994-.511 20.7 20.7 0 0 1 7.431 1.244c2.2.878 3.555 2.2 3.555 3.751v17.989c0 1.554-1.36 2.874-3.555 3.751a20.7 20.7 0 0 1-7.431 1.247 25 25 0 0 1-2.995-.172 20 20 0 0 1-2.764-.523 1 1 0 1 1 .506-1.927 18 18 0 0 0 2.491.468 24 24 0 0 0 2.761.159 18.7 18.7 0 0 0 6.69-1.1c1.418-.567 2.3-1.247 2.3-1.9v-3.03a9.3 9.3 0 0 1-1.558.787 20.7 20.7 0 0 1-7.431 1.247c-.725 0-1.435-.033-2.128-.086s-1.378-.147-2.032-.258a1 1 0 1 1 .333-1.968c.585.1 1.21.182 1.864.235.629.052 1.286.08 1.962.08a18.7 18.7 0 0 0 6.69-1.1c1.418-.567 2.3-1.247 2.3-1.9v-3.03a9.4 9.4 0 0 1-1.558.787 20.7 20.7 0 0 1-7.431 1.244 25 25 0 0 1-2.783-.153 21 21 0 0 1-2.593-.449.995.995 0 1 1 .462-1.935 19 19 0 0 0 2.351.4 24 24 0 0 0 2.563.136 18.7 18.7 0 0 0 6.69-1.1c1.418-.568 2.3-1.247 2.3-1.9v-3.03a9.5 9.5 0 0 1-1.558.787 22.82 22.82 0 0 1-14.864 0Zm.441-11.747c0-.654-.878-1.332-2.3-1.9a20.97 20.97 0 0 0-13.379 0c-1.42.567-2.3 1.247-2.3 1.9s.878 1.334 2.3 1.9a20.95 20.95 0 0 0 13.379 0c1.418-.568 2.3-1.247 2.3-1.9","data-name":"Path 10115"}),o.createElement("path",{fill:"#b3b7c0",fillRule:"evenodd",d:"m.64 16.437.263-2.486a8 8 0 0 0 1.203.785 17 17 0 0 0 5.99 1.659 21 21 0 0 0 2.29.114 17 17 0 0 0 2.171-.144.822.822 0 1 0-.21-1.63 16 16 0 0 1-1.963.126 19 19 0 0 1-2.113-.11 15.4 15.4 0 0 1-5.39-1.475c-1.117-.587-1.778-1.22-1.722-1.757l.263-2.486","data-name":"Path 10116"})))))}})})();