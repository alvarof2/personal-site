(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(0),l=n(1),i=n(16),a=n(3),r=n(12),s=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),o=s.NODE_ENV,j=s.REACT_APP_GA_TRACKING_ID;"production"===o&&r.a.initialize(j);var b=function(){var e=Object(a.f)().pathname;return Object(l.useEffect)((function(){"production"===o&&(r.a.set({page:e}),r.a.pageview(e))}),[e]),null},d=n(5),h=n(24),u=[{index:!0,label:"\xc1lvaro Fern\xe1ndez",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Contact",path:"/contact"}],O=Object(l.lazy)((function(){return n.e(4).then(n.t.bind(null,165,7))})),m=function(){var e=Object(l.useState)(!1),t=Object(h.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(l.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:u.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:e.path,onClick:function(){return i(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:u.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(d.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:u.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},f=n(25),p=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(d.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"\xc1lvaro Fern\xe1ndez"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:fernandez.f.alvaro@gmail.com",children:"fernandez.f.alvaro@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm \xc1lvaro. I like all things related to the DevOps culture. I'm an independent contractor working as Platform (DevOps) Engineer. I currently work mainly for ",Object(c.jsx)("a",{href:"https://clabs.co/",children:"cLabs"}),". Before, I've also worked for ",Object(c.jsx)("a",{href:"https://keyko.io/",children:"Keiko"}),", ",Object(c.jsx)("a",{href:"https://empathy.co",children:"Empathy"}),", and ",Object(c.jsx)("a",{href:"https://www.stratio.com/home",children:"StratioBD"}),". I hold a Ph.D. in Telematics from ",Object(c.jsx)("a",{href:"https://www.ntnu.edu/",children:"NTNU"})," and a Telecommunications Engineer M.Sc from ",Object(c.jsx)("a",{href:"https://universityofvalladolid.uva.es/",children:"UVa"}),"."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(d.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(d.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(f.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 \xc1lvaro Fern\xe1ndez ",Object(c.jsx)(d.b,{to:"/",children:"fernandezfalvaro.com"}),"."]})]})]})},v=function(){var e=Object(a.f)().pathname;return Object(l.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},N=function(e){return Object(c.jsxs)(i.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(v,{}),Object(c.jsxs)(i.a,{titleTemplate:"%s | \xc1lvaro Fern\xe1ndez",defaultTitle:"\xc1lvaro Fern\xe1ndez",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(p,{})]})]})};N.defaultProps={children:null,fullPage:!1,title:null,description:"\xc1lvaro Fern\xe1ndez's personal website."};t.a=N},25:function(e,t,n){"use strict";var c=n(0),l=(n(1),n(29)),i=n(30),a=n(31),r=n(32),s=n(33),o=[{link:"https://github.com/alvarof2",label:"Github",icon:i.faGithub},{link:"https://www.linkedin.com/in/fernandezfalvaro",label:"LinkedIn",icon:a.faLinkedinIn},{link:"https://twitter.com/alvaroferfer",label:"Twitter",icon:r.faTwitter},{link:"mailto:fernandez.f.alvaro@gmail.com",label:"Email",icon:s.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:o.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(l.a,{icon:e.icon})})},e.label)}))})}},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),l=n(1),i=n.n(l),a=n(15),r=n(5),s=n(3),o=n(21),j=(n(46),Object(l.lazy)((function(){return Promise.all([n.e(2),n.e(6)]).then(n.bind(null,162))}))),b=Object(l.lazy)((function(){return n.e(7).then(n.bind(null,167))})),d=Object(l.lazy)((function(){return n.e(8).then(n.bind(null,163))})),h=Object(l.lazy)((function(){return n.e(9).then(n.bind(null,164))})),u=Object(l.lazy)((function(){return n.e(5).then(n.bind(null,166))})),O=function(){return Object(c.jsx)(r.a,{basename:"",children:Object(c.jsx)(l.Suspense,{fallback:Object(c.jsx)(o.a,{}),children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",component:d}),Object(c.jsx)(s.a,{path:"/about",component:j}),Object(c.jsx)(s.a,{path:"/contact",component:b}),Object(c.jsx)(s.a,{path:"/resume",component:u}),Object(c.jsx)(s.a,{component:h,status:404})]})})})},m=function(){return Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(O,{})})},x=document.getElementById("root");x.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(m,{}),x):Object(a.render)(Object(c.jsx)(m,{}),x)}},[[47,1,3]]]);
//# sourceMappingURL=main.6b600412.chunk.js.map