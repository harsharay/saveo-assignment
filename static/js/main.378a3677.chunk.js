(this["webpackJsonpsaveo-assignment"]=this["webpackJsonpsaveo-assignment"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(5),s=n.n(o),l=(n(18),n(19),n(13)),i=n(11),j=n(7),r=n(4),d=n(8),b=[{name:"----",position:{lat:"----",lng:"----"}},{name:"----",position:{lat:"----",lng:"----"}},{name:"----",position:{lat:"----",lng:"----"}},{name:"----",position:{lat:"----",lng:"----"}},{name:"----",position:{lat:"----",lng:"----"}}],p=(n(20),n(0)),u=Object(d.GoogleApiWrapper)({apiKey:"AIzaSyCicw2MoonjgBscZpmaYwPiVhfs287UQ84"})((function(e){var t=Object(c.useState)(b),n=Object(r.a)(t,2),a=n[0],o=n[1],s=Object(c.useState)([]),u=Object(r.a)(s,2),O=u[0],g=u[1],h=Object(c.useState)(!1),m=Object(r.a)(h,2),x=m[0],v=m[1],f=Object(c.useState)(0),N=Object(r.a)(f,2),k=N[0],y=N[1],C=Object(c.useState)({locationName:"",lat:"",lng:""}),_=Object(r.a)(C,2),S=_[0],L=_[1],A=Object(c.useState)({lat:"",long:""}),M=Object(r.a)(A,2),w=(M[0],M[1],function(e){var t=e.target.name,n=e.target.value;L((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(i.a)({},t,n))}))});return Object(p.jsx)("div",{className:"home-root",children:Object(p.jsxs)("div",{className:"content-group",children:[Object(p.jsxs)("div",{className:"top-block",children:[Object(p.jsxs)("div",{className:"top-block-content",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"Location Name"}),Object(p.jsx)("input",{type:"text",name:"locationName",value:S.locationName,onChange:w})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"Enter Latitude"}),Object(p.jsx)("input",{type:"text",name:"lat",value:S.lat,onChange:w})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"Enter Longitude"}),Object(p.jsx)("input",{type:"text",name:"lng",value:S.lng,onChange:w})]})]}),Object(p.jsx)("div",{className:"top-block-button-block",children:Object(p.jsx)("button",{className:"top-block-button",onClick:function(){if(console.log(40),k<5){var e=S.locationName,t=S.lat,n=S.lng,c=a;console.log(65,k),c[k]={name:e,position:{lat:t,lng:n}},o(c),y(k+1),g((function(e){return[].concat(Object(l.a)(e),[{lat:t,lng:n}])}))}else alert("Limit is 5")},children:"Add"})})]}),Object(p.jsxs)("div",{className:"bottom-group",children:[Object(p.jsxs)("div",{className:"display-coordinates",children:[Object(p.jsx)("p",{children:"All Coordinates"}),Object(p.jsxs)("div",{className:"display-coordinates-content",children:[Object(p.jsxs)("div",{className:"header-group",children:[Object(p.jsx)("p",{children:"My coordinates"}),Object(p.jsx)("p",{children:"Default"}),Object(p.jsx)("p",{children:"Default"})]}),Object(p.jsx)("div",{className:"locations-data",children:a.map((function(e,t){return Object(p.jsxs)("div",{className:"header-group",children:[Object(p.jsxs)("p",{children:[t+1,". ",e.name]}),Object(p.jsx)("p",{children:e.position.lat}),Object(p.jsx)("p",{children:e.position.lng})]},t)}))}),Object(p.jsx)("button",{onClick:function(){v(!0)},children:"Show Route"})]})]}),Object(p.jsx)("div",{className:"map1",children:Object(p.jsxs)(d.Map,{google:e.google,initialCenter:{lat:17.380275415679968,lng:78.48421990628647},className:"actualMap",zoom:5,onClick:function(e,t,n){var c=n.latLng,a=c.lat(),o=c.lng();fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=__LATLONG__&sensor=true&key=AIzaSyDt739iU582nmJlv5eK5HdQgGH7QQ4dEg8".replace("__LATLONG__",String(c.lat())+","+String(c.lng()))).then((function(e){return e.json()})).then((function(e){if(console.log(e.plus_code.compound_code),e.plus_code.compound_code){var t=e.plus_code.compound_code.split(",")[0];t=t.substr(t.indexOf(" ")+1),L((function(e){return Object(j.a)(Object(j.a)({},e),{},{locationName:t,lat:a,lng:o})}))}else alert("select another place")}))},children:[a.map((function(e,t){return Object(p.jsx)(d.Marker,{position:e.position},t)})),x&&O.length>0&&Object(p.jsx)(d.Polyline,{path:O,strokeColor:"#000000",strokeOpacity:1,strokeWeight:5,fillColor:"#000000",fillOpacity:.35})]})})]})]})})}));var O=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(u,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root")),g()}},[[40,1,2]]]);
//# sourceMappingURL=main.378a3677.chunk.js.map