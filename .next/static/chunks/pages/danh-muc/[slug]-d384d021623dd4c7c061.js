_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{OBZK:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return m}));var r=n("nKUr"),c=n("MX0m"),a=n.n(c),s=n("g4pe"),o=n.n(s),i=n("YFqc"),l=n.n(i),u=n("DHdS"),f=n("D2A5"),d=n("6x+I"),p=n.n(d),v=(n("UWo5"),function(e){var t=e.item,n=t.content?t.content.replace(/\/uploads\//g,u.b+"/uploads/"):"",c=t.image?u.b+t.image.formats.thumbnail.url:"/images/picture.png";return Object(r.jsxs)("div",{className:"post-card rounded-md bg-gray-50 p-4 flex shadown-md transform transition duration-300 hover:-translate-y-1 mb-4",children:[Object(r.jsx)("div",{className:"w-1/5 spect-w-16 spect-h-9 flex flex-col items-center",children:Object(r.jsx)("img",{className:"h-20",src:c,alt:t.title})}),Object(r.jsxs)("div",{className:" w-4/5 flex items-center flex-col px-3 ",children:[Object(r.jsx)("div",{className:"font-bold text-gray-900 w-full ",children:t.title}),Object(r.jsx)("div",{className:"text-gray-500 line-clamp-4 w-full mt-1 ",children:Object(r.jsx)(p.a,{linkTarget:"_blank",children:n})}),Object(r.jsxs)("div",{className:"text-gray-900 w-full mt-1 flex items-center",children:[Object(f.a)(t.createdAt),Object(r.jsx)(l.a,{href:"/bai-viet/"+t.slug,children:Object(r.jsx)("div",{className:"text-center ml-3 pointer text-blue-500 hover:text-blue-900 font-bold ",children:"Xem chi ti\u1ebft"})})]})]})]})}),m=!0;t.default=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"jsx-3412090669",children:[Object(r.jsxs)(o.a,{children:[Object(r.jsx)("title",{className:"jsx-3412090669",children:" Danh s\xe1ch b\xe0i vi\u1ebft "}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-3412090669"})]}),Object(r.jsxs)("div",{className:"jsx-3412090669 pb-10 pr-10",children:[0===t.length&&Object(r.jsx)("img",{src:"/images/notfound.jpg",className:"jsx-3412090669"}),t.map((function(e){return Object(r.jsx)(v,{item:e},e._id)}))]}),Object(r.jsx)(a.a,{id:"3412090669",children:[".content.jsx-3412090669 p.jsx-3412090669{margin:5px 0px;}"]})]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var a=c(n("q1tI")),s=n("elyg"),o=n("nOHt"),i=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),c=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,s.resolveHref)(c,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,s.resolveHref)(c,e.as):o||a}}),[c,e.href,e.as]),d=f.href,p=f.as,v=e.children,m=e.replace,h=e.shallow,b=e.scroll,j=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var x=a.Children.only(v),g=x&&"object"===typeof x&&x.ref,O=(0,i.useIntersection)({rootMargin:"200px"}),w=r(O,2),y=w[0],N=w[1],_=a.default.useCallback((function(e){y(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,y]);(0,a.useEffect)((function(){var e=N&&t&&(0,s.isLocalURL)(d),r="undefined"!==typeof j?j:n&&n.locale,c=l[d+"%"+p+(r?"%"+r:"")];e&&!c&&u(n,d,p,{locale:r})}),[p,d,N,j,t,n]);var E={ref:_,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:a,locale:i,scroll:o}))}(e,n,d,p,m,h,b,j)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var L="undefined"!==typeof j?j:n&&n.locale,M=n&&n.isLocaleDomain&&(0,s.getDomainLocale)(p,L,n&&n.locales,n&&n.domainLocales);E.href=M||(0,s.addBasePath)((0,s.addLocale)(p,L,n&&n.defaultLocale))}return a.default.cloneElement(x,E)};t.default=f},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,i=(0,c.useRef)(),l=(0,c.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,c.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||f||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,a=r.observer,s=r.elements;return s.set(e,t),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),o.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){if(!s&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var c=n("q1tI"),a=n("0G5g"),s="undefined"!==typeof IntersectionObserver;var o=new Map},zpEZ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/danh-muc/[slug]",function(){return n("OBZK")}])}},[["zpEZ",0,1,2,3,4,5]]]);