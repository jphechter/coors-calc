(this["webpackJsonpcoors-calc"]=this["webpackJsonpcoors-calc"]||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(4),r=n.n(s),o=(n(9),n(2)),l=(n(10),n(11),n(12),n(0));var u=function(t){return Object(l.jsxs)("div",{className:"display",onClick:function(){return t.clear()},children:[Object(l.jsx)("span",{children:t.abv}),"% ABV"]})};var j=function(t){var e=Object(c.useState)(""),n=Object(o.a)(e,2),i=n[0],s=n[1],r=Object(c.useState)(!1),j=Object(o.a)(r,2),a=j[0],b=j[1],d=Object(c.useState)(1),x=Object(o.a)(d,2),O=x[0],h=x[1];function v(t){"."===t&&(b(!0),""===i&&(t="0.")),s("".concat(i).concat(t))}function f(){s(""),b(!1)}return Object(l.jsxs)("div",{className:"calculator",children:[Object(l.jsx)(u,{abv:i,clear:function(){return f()},multiplier:function(e){return t.multiplier(e)}}),Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsxs)("div",{className:"button-row",children:[Object(l.jsx)("div",{className:"accessory-button",children:Object(l.jsxs)("select",{className:"multiplier",onChange:function(t){return h(t.target.value)},value:O,children:[Object(l.jsx)("option",{value:1,children:"1x"}),Object(l.jsx)("option",{value:2,children:"2x"}),Object(l.jsx)("option",{value:3,children:"3x"}),Object(l.jsx)("option",{value:4,children:"4x"}),Object(l.jsx)("option",{value:5,children:"5x"}),Object(l.jsx)("option",{value:6,children:"6x"}),Object(l.jsx)("option",{value:7,children:"7x"}),Object(l.jsx)("option",{value:8,children:"8x"}),Object(l.jsx)("option",{value:9,children:"9x"}),Object(l.jsx)("option",{value:10,children:"10x"}),Object(l.jsx)("option",{value:11,children:"11x"}),Object(l.jsx)("option",{value:12,children:"12x"})]})}),Object(l.jsx)("button",{className:"accessory-button inactive"}),Object(l.jsx)("button",{onClick:function(){return f()},className:"accessory-button",children:"CE"})]}),Object(l.jsxs)("div",{className:"button-row",children:[Object(l.jsx)("button",{onClick:function(){return v("7")},children:"7"}),Object(l.jsx)("button",{onClick:function(){return v("8")},children:"8"}),Object(l.jsx)("button",{onClick:function(){return v("9")},children:"9"})]}),Object(l.jsxs)("div",{className:"button-row",children:[Object(l.jsx)("button",{onClick:function(){return v("4")},children:"4"}),Object(l.jsx)("button",{onClick:function(){return v("5")},children:"5"}),Object(l.jsx)("button",{onClick:function(){return v("6")},children:"6"})]}),Object(l.jsxs)("div",{className:"button-row",children:[Object(l.jsx)("button",{onClick:function(){return v("1")},children:"1"}),Object(l.jsx)("button",{onClick:function(){return v("2")},children:"2"}),Object(l.jsx)("button",{onClick:function(){return v("3")},children:"3"})]}),Object(l.jsxs)("div",{className:"button-row",children:[Object(l.jsx)("button",{onClick:function(){return v("0")},children:"0"}),Object(l.jsx)("button",{onClick:function(){return v(".")},disabled:a,children:"."}),Object(l.jsx)("button",{onClick:function(){return t.abv(i),void t.multiplier(O)},className:"equal",children:"="})]})]})]})};n(14);var a=function(t){if(t.abv){for(var e=(parseFloat(t.abv)/4.2*t.multiplier).toFixed(2),n=Math.round(parseFloat(e)+.49),c=e.split(".")[1],i={height:"".concat("00"!==c?c:"100","px")},s=[],r=1;r<=n;r++)s.push(Object(l.jsx)("div",{className:"can",style:r-n===0?i:null},r));return Object(l.jsxs)("div",{className:"conversion",children:[Object(l.jsxs)("p",{children:["That's ",e," Coors Lights!"]}),Object(l.jsx)("div",{className:"rack",children:s})]})}return Object(l.jsx)("div",{className:"conversion"})};var b=function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)(1),r=Object(o.a)(s,2),u=r[0],b=r[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("h1",{children:["THE COORS CALC",Object(l.jsx)("sup",{children:"\xae"})]}),Object(l.jsx)(a,{abv:n,multiplier:u}),Object(l.jsx)(j,{abv:function(t){return i(t)},multiplier:function(t){return b(t)}})]})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),s(t),r(t)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),d()}],[[15,1,2]]]);
//# sourceMappingURL=main.d338fc30.chunk.js.map