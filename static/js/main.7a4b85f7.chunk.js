(this["webpackJsonpsaveo-assignment"]=this["webpackJsonpsaveo-assignment"]||[]).push([[0],{151:function(e,t,n){},152:function(e,t,n){},353:function(e,t,n){},370:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(23),o=n.n(i),s=(n(151),n(152),n(146)),l=n(60),j=n(38),r=n(63),d=n(62),b=(n(153),n(353),n(1)),u=Object(d.GoogleApiWrapper)({apiKey:"AIzaSyCicw2MoonjgBscZpmaYwPiVhfs287UQ84"})((function(e){var t=Object(c.useState)([]),n=Object(r.a)(t,2),a=n[0],i=n[1],o=Object(c.useState)({locationName:"",lat:"",lng:""}),u=Object(r.a)(o,2),p=u[0],O=u[1],h=Object(c.useState)({lat:"",long:""}),m=Object(r.a)(h,2),g=(m[0],m[1],function(e){var t=e.target.name,n=e.target.value;O((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(l.a)({},t,n))}))});return Object(b.jsx)("div",{className:"home-root",children:Object(b.jsxs)("div",{className:"content-group",children:[Object(b.jsxs)("div",{className:"top-block",children:[Object(b.jsxs)("div",{className:"top-block-content",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Location Name"}),Object(b.jsx)("input",{type:"text",name:"locationName",value:p.locationName,onChange:g})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Enter Latitude"}),Object(b.jsx)("input",{type:"text",name:"lat",value:p.lat,onChange:g})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Enter Longitude"}),Object(b.jsx)("input",{type:"text",name:"lng",value:p.lng,onChange:g})]})]}),Object(b.jsx)("div",{className:"top-block-button-block",children:Object(b.jsx)("button",{className:"top-block-button",onClick:function(){if(console.log(40),a.length<5){p.locationName;var e=p.lat,t=p.lng;i((function(n){return[].concat(Object(s.a)(n),[{name:"locationName",position:{lat:e,lng:t}}])}))}},children:"Add"})})]}),Object(b.jsxs)("div",{className:"bottom-group",children:[Object(b.jsxs)("div",{className:"display-coordinates",children:[Object(b.jsx)("p",{children:"All Coordinates"}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"header-group",children:[Object(b.jsx)("p",{children:"My coordinates"}),Object(b.jsx)("p",{children:"Default"}),Object(b.jsx)("p",{children:"Default"})]}),Object(b.jsx)("div",{className:"locations-data",children:a.map((function(e,t){return Object(b.jsxs)("div",{className:"header-group",children:[Object(b.jsxs)("p",{children:[t+1,". ",e.name]}),Object(b.jsx)("p",{children:e.position.lat}),Object(b.jsx)("p",{children:e.position.lng})]},t)}))}),Object(b.jsx)("button",{children:"Show Route"})]})]}),Object(b.jsx)("div",{className:"map1",children:Object(b.jsx)(d.Map,{google:e.google,style:{width:"25% !important",margin:"auto",height:"41% !important"},initialCenter:{lat:17.380275415679968,lng:78.48421990628647},className:"actualMap",zoom:6,onClick:function(e,t,n){console.log("click"),console.log(21,n);var c=n.latLng,a=c.lat(),i=c.lng();O((function(e){return Object(j.a)(Object(j.a)({},e),{},{locationName:"empty",lat:a,lng:i})}))},children:a.map((function(e,t){return Object(b.jsx)(d.Marker,{position:e.position},t)}))})})]})]})})}));var p=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(u,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,371)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),O()}},[[370,1,2]]]);
//# sourceMappingURL=main.7a4b85f7.chunk.js.map