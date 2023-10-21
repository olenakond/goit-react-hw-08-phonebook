"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[267],{9267:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,i,o,a,c=t(2791),l=t(9434),s=t(9439),d=t(5984),u=t(3634),x=function(n){return n.contacts.items},f=function(n){return n.contacts.isLoading},m=function(n){return n.contacts.error},p=t(4925),h=t(6439),j=t(4294),v=t(184),Z=function(){var n=(0,c.useState)(""),e=(0,s.Z)(n,2),t=e[0],r=e[1],i=(0,c.useState)(""),o=(0,s.Z)(i,2),a=o[0],f=o[1],m=(0,l.I0)(),Z=(0,l.v9)(x),b=(0,d.x0)(),g=(0,d.x0)(),y=function(n){var e=n.target,t=e.value;"name"===e.name?r(t):f(t)};return(0,v.jsxs)("form",{onSubmit:function(n){n.preventDefault(),function(n){if(Z.find((function(e){return e.name===n.name})))return alert("".concat(n.name," is already in contacts."));m((0,u.uK)(n))}({name:t,number:a}),r(""),f("")},children:[(0,v.jsx)(p.Z,{htmlFor:b,children:"Name"}),(0,v.jsx)(h.Z,{variant:"outlined",fullWidth:!0,onChange:y,value:t,id:b,type:"text",name:"name",pattern:"[A-Za-z]{1,32}",placeholder:"Name",title:"Name may contain only letters. For example Adrian, Jacob.",required:!0}),(0,v.jsx)(p.Z,{sx:{mt:2},htmlFor:g,children:"Number"}),(0,v.jsx)(h.Z,{variant:"outlined",fullWidth:!0,onChange:y,value:a,id:g,type:"tel",name:"number",pattern:"[0-9]{1,32}",placeholder:"123456789",title:"Phone number must be digits",required:!0}),(0,v.jsx)(j.Z,{variant:"outlined",sx:{mt:2},type:"submit",children:"Add contact"})]})},b=(0,t(6916).P1)([function(n){return n.contacts.items},function(n){return n.filter}],(function(n,e){var t=function(){if(e)return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}();return null!==t&&void 0!==t?t:n})),g=t(4852),y=t(3400),k=t(653),C=t(3044),w=t(6259),F=t(7247),A=t(3771),z=function(n){var e=n.contact,t=(0,l.I0)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(g.ZP,{secondaryAction:(0,v.jsx)(y.Z,{edge:"end","aria-label":"delete",type:"button",onClick:function(){t((0,u.GK)(e.id))},children:(0,v.jsx)(F.Z,{})}),children:[(0,v.jsx)(k.Z,{children:(0,v.jsx)(C.Z,{sx:{bgcolor:A.Z[500]},children:e.name.at(0).toUpperCase()})}),(0,v.jsx)(w.Z,{primary:e.name,secondary:e.number})]})})},P=t(168),I=t(6487),N=(0,I.zo)("ul")(r||(r=(0,P.Z)(["\n  padding: 8px 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  background-color: #f7fcfc;\n  border-radius: 4px;\n  border: solid 1px #c5c7c7;\n"]))),S=t(1123),_=function(){var n=(0,l.v9)(b);return(0,v.jsxs)(v.Fragment,{children:[n.length>0&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(S.Z,{variant:"body1",component:"h2",sx:{mt:2,color:A.Z[800]},children:"Contacts"}),(0,v.jsx)(N,{children:n.map((function(n){return(0,v.jsx)(z,{contact:n},n.id)}))})]}),0===n.length&&(0,v.jsx)(S.Z,{variant:"body1",component:"h2",sx:{mt:2,color:A.Z[800]},children:"Create your contacts..."})]})},L=t(1273),W=function(){var n=(0,d.x0)(),e=(0,l.I0)();return(0,v.jsxs)("div",{children:[(0,v.jsx)(p.Z,{htmlFor:n,children:"Find contacts by name"}),(0,v.jsx)(h.Z,{variant:"outlined",fullWidth:!0,onChange:function(n){var t=n.target.value;e((0,L.T)(t))},id:n,type:"text"})]})},q=(0,I.zo)("div")(i||(i=(0,P.Z)(["\n  margin: 40px auto;\n  padding: 20px 20px;\n  display: flex;\n  gap: 30px;\n  justify-content: center;\n  border-radius: 10px;\n"]))),K=(0,I.zo)("div")(o||(o=(0,P.Z)(["\n  padding: 8px 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  width: 450px;\n  height: 250px;\n  background-color: #f7fcfc;\n  border-radius: 10px;\n  border: solid 1px #c5c7c7;\n"]))),D=(0,I.zo)("div")(a||(a=(0,P.Z)(["\n  padding: 8px 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  width: 450px;\n  background-color: #f7fcfc;\n  border-radius: 10px;\n  border: solid 1px #c5c7c7;\n"]))),E=t(7482),G=function(){var n=(0,l.I0)(),e=(0,l.v9)(f),t=(0,l.v9)(m);return(0,c.useEffect)((function(){n((0,u.yF)())}),[n]),(0,v.jsxs)("main",{children:[e&&(0,v.jsx)(E.Z,{}),(0,v.jsx)(S.Z,{variant:"h3",component:"h1",sx:{textAlign:"center",mt:3,color:A.Z[900]},children:"Phone book"}),(0,v.jsxs)(q,{children:[(0,v.jsxs)(K,{children:[(0,v.jsx)(Z,{}),t&&(0,v.jsx)(S.Z,{variant:"body2",component:"p",sx:{textAlign:"center",mt:5,color:A.Z[900]},children:"Something went wrong. Please, try again."})]}),(0,v.jsxs)(D,{children:[(0,v.jsx)(W,{}),(0,v.jsx)(_,{})]})]})]})}}}]);
//# sourceMappingURL=267.332f8119.chunk.js.map