!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1);var o=wp.i18n.__,r=wp.editPost.PluginPostStatusInfo,u=wp.plugins.registerPlugin,l=wp.data,i=l.withSelect,s=l.withDispatch,a=wp.compose.compose,c=wp.components.SelectControl,d=window.EditFlowCustomStatuses.map(function(t){return{label:t.name,value:t.slug}});u("edit-flow-custom-status",{icon:"edit-flow",render:a(i(function(t){return{status:t("core/editor").getEditedPostAttribute("status")}}),s(function(t){return{onUpdate:function(e){var n;t("core/editor").editPost({status:e}),function(t){document.querySelector(".editor-post-save-draft")&&(document.querySelector(".editor-post-save-draft").innerText="".concat(o("Save")," ").concat(t))}((n=e,d.find(function(t){return t.value===n}).label))}}}))(function(t){var e=t.onUpdate,n=t.status;return wp.element.createElement(r,{className:"edit-flow-extended-post-status edit-flow-extended-post-status-".concat(n)},wp.element.createElement("h4",null,o("publish"!==n?"Extended Post Status":"Extended Post Status Disabled.","edit-flow")),"publish"!==n?wp.element.createElement(c,{label:"",value:n,options:d,onChange:e}):null,wp.element.createElement("small",{className:"edit-flow-extended-post-status-note"},"publish"!==n?o("Note: this will override all status settings above.","edit-flow"):o("Please switch to draft first.")))})})},function(t,e){}]);