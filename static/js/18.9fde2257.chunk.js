(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{136:function(e,a,l){"use strict";var t=l(31),r=l(9),c=l(4),n=l.n(c),s=l(2),m=l.n(s),o=(l(19),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),i=function(e){var a,l=e.tag,c=e.className,s=e.type,i=Object(r.a)(e,["tag","className","type"]),E=n()(Object(t.a)({},s,!!s),c);return a=l||(!l&&o[s]?o[s]:"p"),m.a.createElement(a,Object.assign({},i,{className:E}))};i.defaultProps={type:"p"},a.a=i},138:function(e,a,l){"use strict";var t=l(9),r=l(2),c=l.n(r),n=(l(19),l(26)),s=l(142),m=l(143),o=l(136),i=n.a.create("page"),E=function(e){var a=e.title,l=e.breadcrumbs,r=e.tag,n=e.className,E=e.children,u=Object(t.a)(e,["title","breadcrumbs","tag","className","children"]),d=i.b("px-3",n);return c.a.createElement(r,Object.assign({className:d},u),c.a.createElement("div",{className:i.e("header")},a&&"string"===typeof a?c.a.createElement(o.a,{type:"h1",className:i.e("title")},a):a,l&&c.a.createElement(s.a,{className:i.e("breadcrumb")},c.a.createElement(m.a,null,"Home"),l.length&&l.map(function(e,a){var l=e.name,t=e.active;return c.a.createElement(m.a,{key:a,active:t},l)}))),E)};E.defaultProps={tag:"div",title:""},a.a=E},142:function(e,a,l){"use strict";var t=l(5),r=l(6),c=l(2),n=l.n(c),s=l(1),m=l.n(s),o=l(4),i=l.n(o),E=l(3),u={tag:E.q,listTag:E.q,className:m.a.string,listClassName:m.a.string,cssModule:m.a.object,children:m.a.node,"aria-label":m.a.string},d=function(e){var a=e.className,l=e.listClassName,c=e.cssModule,s=e.children,m=e.tag,o=e.listTag,u=e["aria-label"],d=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),N=Object(E.m)(i()(a),c),g=Object(E.m)(i()("breadcrumb",l),c);return n.a.createElement(m,Object(t.a)({},d,{className:N,"aria-label":u}),n.a.createElement(o,{className:g},s))};d.propTypes=u,d.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=d},143:function(e,a,l){"use strict";var t=l(5),r=l(6),c=l(2),n=l.n(c),s=l(1),m=l.n(s),o=l(4),i=l.n(o),E=l(3),u={tag:E.q,active:m.a.bool,className:m.a.string,cssModule:m.a.object},d=function(e){var a=e.className,l=e.cssModule,c=e.active,s=e.tag,m=Object(r.a)(e,["className","cssModule","active","tag"]),o=Object(E.m)(i()(a,!!c&&"active","breadcrumb-item"),l);return n.a.createElement(s,Object(t.a)({},m,{className:o,"aria-current":c?"page":void 0}))};d.propTypes=u,d.defaultProps={tag:"li"},a.a=d},456:function(e,a,l){"use strict";l.r(a);var t=l(2),r=l.n(t),c=l(129),n=l(130),s=l(113),m=l(118),o=l(114),i=l(107),E=l(47),u=l(138);a.default=function(){return r.a.createElement(u.a,{title:"Badges",breadcrumbs:[{name:"badges",active:!0}]},r.a.createElement(c.a,null,r.a.createElement(n.a,{md:6},r.a.createElement(s.a,null,r.a.createElement(m.a,null,"Scale to parent"),r.a.createElement(o.a,null,r.a.createElement("h1",null,"Heading ",r.a.createElement(i.a,{color:"secondary"},"New")),r.a.createElement("h2",null,"Heading ",r.a.createElement(i.a,{color:"secondary"},"New")),r.a.createElement("h3",null,"Heading ",r.a.createElement(i.a,{color:"secondary"},"New")),r.a.createElement("h4",null,"Heading ",r.a.createElement(i.a,{color:"secondary"},"New")),r.a.createElement("h5",null,"Heading ",r.a.createElement(i.a,{color:"secondary"},"New")),r.a.createElement("h6",null,"Heading ",r.a.createElement(i.a,{color:"secondary"},"New"))))),r.a.createElement(n.a,{md:6},r.a.createElement(s.a,null,r.a.createElement(m.a,null,"with buttons"),r.a.createElement(o.a,null,r.a.createElement(E.a,{color:"primary",className:"mr-1"},"Notifications ",r.a.createElement(i.a,{color:"secondary"},"4")),r.a.createElement(E.a,{color:"info",className:"mr-1"},"Notifications ",r.a.createElement(i.a,{color:"danger"},"4")),r.a.createElement(E.a,{color:"secondary",className:"mr-1"},"Notifications ",r.a.createElement(i.a,{color:"secondary"},"4"))),r.a.createElement(o.a,null,r.a.createElement(E.a,{color:"primary",outline:!0,className:"mr-1"},"Notifications ",r.a.createElement(i.a,{color:"primary"},"4")),r.a.createElement(E.a,{color:"info",outline:!0,className:"mr-1"},"Notifications ",r.a.createElement(i.a,{color:"info"},"4")),r.a.createElement(E.a,{color:"secondary",outline:!0,className:"mr-1"},"Notifications ",r.a.createElement(i.a,{color:"secondary"},"4")))))),r.a.createElement(c.a,null,r.a.createElement(n.a,{md:4},r.a.createElement(s.a,null,r.a.createElement(m.a,null,"Contextual variations"),r.a.createElement(o.a,null,r.a.createElement(i.a,{color:"primary",className:"mr-1"},"Primary"),r.a.createElement(i.a,{color:"secondary",className:"mr-1"},"Secondary"),r.a.createElement(i.a,{color:"success",className:"mr-1"},"Success"),r.a.createElement(i.a,{color:"danger",className:"mr-1"},"Danger"),r.a.createElement(i.a,{color:"warning",className:"mr-1"},"Warning"),r.a.createElement(i.a,{color:"info",className:"mr-1"},"Info"),r.a.createElement(i.a,{color:"light",className:"mr-1"},"Light"),r.a.createElement(i.a,{color:"dark",className:"mr-1"},"Dark")))),r.a.createElement(n.a,{md:4},r.a.createElement(s.a,null,r.a.createElement(m.a,null,"Pills"),r.a.createElement(o.a,null,r.a.createElement(i.a,{color:"primary",pill:!0,className:"mr-1"},"Primary"),r.a.createElement(i.a,{color:"secondary",pill:!0,className:"mr-1"},"Secondary"),r.a.createElement(i.a,{color:"success",pill:!0,className:"mr-1"},"Success"),r.a.createElement(i.a,{color:"danger",pill:!0,className:"mr-1"},"Danger"),r.a.createElement(i.a,{color:"warning",pill:!0,className:"mr-1"},"Warning"),r.a.createElement(i.a,{color:"info",pill:!0,className:"mr-1"},"Info"),r.a.createElement(i.a,{color:"light",pill:!0,className:"mr-1"},"Light"),r.a.createElement(i.a,{color:"dark",pill:!0,className:"mr-1"},"Dark")))),r.a.createElement(n.a,{md:4},r.a.createElement(s.a,null,r.a.createElement(m.a,null,"Links"),r.a.createElement(o.a,null,r.a.createElement(i.a,{href:"#",color:"primary",className:"mr-1"},"Primary"),r.a.createElement(i.a,{href:"#",color:"secondary",className:"mr-1"},"Secondary"),r.a.createElement(i.a,{href:"#",color:"success",className:"mr-1"},"Success"),r.a.createElement(i.a,{href:"#",color:"danger",className:"mr-1"},"Danger"),r.a.createElement(i.a,{href:"#",color:"warning",className:"mr-1"},"Warning"),r.a.createElement(i.a,{href:"#",color:"info",className:"mr-1"},"Info"),r.a.createElement(i.a,{href:"#",color:"light",className:"mr-1"},"Light"),r.a.createElement(i.a,{href:"#",color:"dark",className:"mr-1"},"Dark"))))))}}}]);
//# sourceMappingURL=18.9fde2257.chunk.js.map