(self.webpackChunkjsconfjp_2021=self.webpackChunkjsconfjp_2021||[]).push([[758],{9986:function(e,t,n){"use strict";n.d(t,{a:function(){return c}});var r=n(7294),a=n(9),i=n(5019),o=n(5444),l=a.ZP.div.withConfig({displayName:"Breadcrumb__Box",componentId:"sc-1ortt5-0"})(["display:flex;"]),u=a.ZP.span.withConfig({displayName:"Breadcrumb__Text",componentId:"sc-1ortt5-1"})(["margin-right:0.5em;font-size:1.4rem;font-weight:bold;text-transform:uppercase;font-family:",";text-transform:uppercase;"],(function(e){return e.theme.fonts.header}));function c(e){var t=e.path,n=(0,i.$)().t;return r.createElement(l,null,r.createElement(o.Link,{to:"/"},r.createElement(u,null,n("top"))),t.filter(Boolean).map((function(e){var t="string"==typeof e?{label:e,to:null}:e;return r.createElement(r.Fragment,{key:t.label},r.createElement(u,null,">"),t.to?r.createElement(o.Link,{to:t.to},r.createElement(u,null,t.label)):r.createElement(u,null,t.label))})))}},3205:function(e,t,n){"use strict";n.d(t,{$:function(){return i}});var r=n(7294),a=n(9).ZP.div.withConfig({displayName:"ResponsiveBox__Box",componentId:"sc-da0ckf-0"})(["width:100%;max-width:",";padding:2em 1em 5em;margin:0 auto;box-sizing:border-box;"],(function(e){return e.theme.innerWidth}));function i(e){var t=e.children;return r.createElement(a,null,t)}},1741:function(e,t,n){"use strict";n.d(t,{d:function(){return g}});var r=n(7294),a=n(9),i=n(5444),o=n(5019),l=n(6802),u=n(8496),c=(0,a.ZP)(i.Link).withConfig({displayName:"Speaker__LinkContainer",componentId:"sc-kwj6jm-0"})(["text-decoration:none;color:",";"],(function(e){return e.theme.colors.text})),m=(0,a.ZP)(l.G).withConfig({displayName:"Speaker__Avatar",componentId:"sc-kwj6jm-1"})(["width:100%;max-width:273px;"]),s=a.ZP.h2.withConfig({displayName:"Speaker__Title",componentId:"sc-kwj6jm-2"})(["margin:0;padding:10px;border-bottom:1px solid ",";text-align:center;font-family:",";font-size:2rem;overflow-wrap:break-word;"],(function(e){return e.theme.colors.border}),(function(e){return e.theme.fonts.text})),p=a.ZP.p.withConfig({displayName:"Speaker__Name",componentId:"sc-kwj6jm-3"})(["margin-bottom:0;text-align:center;font-family:",";font-size:1.6rem;"],(function(e){return e.theme.fonts.text}));function d(e){var t=(0,o.$)().i18n,n=e.talk,a=e.speaker,i=e.avatar,l=n.uuid,d=n.title,f=n.titleJa,g=a.name;return l&&"TBA"!==d?r.createElement(c,{to:"talk/"+l},r.createElement(m,{image:i,alt:g,loading:"lazy"}),r.createElement(s,null,(0,u.F)(t)(d,f)),r.createElement(p,null,g)):r.createElement("div",null,r.createElement(m,{image:i,alt:g,loading:"lazy"}),r.createElement(s,{lang:"en"},(0,u.F)(t)(d,f)),r.createElement(p,null,g))}var f=a.ZP.div.withConfig({displayName:"SpeakerList__Container",componentId:"sc-kzwua0-0"})(["display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:60px;grid-row-gap:60px;","{grid-template-columns:repeat(2,1fr);grid-column-gap:20px;grid-row-gap:20px;}"],(function(e){return e.theme.breakpoints.mobile}));function g(e){var t=e.speakers,n=e.avatars,a=e.talks.reduce((function(e,t){return e[String(t.uuid)]=t,e}),{}),i=n.reduce((function(e,t){var n;return Object.assign({},e,((n={})[t.uuid]=t,n))}),{});return r.createElement(f,null,t.filter((function(e){return e.presentations.length>0})).map((function(e){return r.createElement(d,{key:e.name,speaker:e,talk:a[e.presentations[0]],avatar:i[e.uuid]})})))}},1797:function(e,t,n){"use strict";n.d(t,{D:function(){return i}});var r=n(7294),a=n(9).ZP.h1.withConfig({displayName:"Title__Box",componentId:"sc-1o12tf7-0"})(["text-align:center;margin:40px 0 60px;font-size:4rem;text-transform:none;font-family:",";"],(function(e){return e.theme.fonts.header}));function i(e){var t=e.children;return r.createElement(a,null,t)}},4502:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(7294),a=n(5444),i=n(5019),o=n(7400),l=n(5167),u=n(1797),c=n(1741),m=n(3205),s=n(9986);function p(){var e=(0,a.useStaticQuery)("3320513770"),t=e.allSpeakersYaml,n=e.allTalksYaml,p=e.allFile,d=(0,i.$)().t,f=t.edges.map((function(e){return e.node})),g=p.nodes.filter((function(e){return e.childImageSharp})).map((function(e){return Object.assign({uuid:e.name},e.childImageSharp.gatsbyImageData)})),h=n.edges.map((function(e){return e.node}));return r.createElement(o.A,null,r.createElement(l.H,{title:d("guestSpeakers"),description:d("speakers.description")}),r.createElement(m.$,null,r.createElement(s.a,{path:[d("speakers")]}),r.createElement(u.D,null,d("speakers")),r.createElement(c.d,{speakers:f,avatars:g,talks:h})))}},8496:function(e,t,n){"use strict";function r(e){return function(t,n){return r=e.language,/ja(-\w)*/.test(r)&&n?n:t||n;var r}}n.d(t,{F:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-speakers-tsx-17b1e14fcac8da29db1a.js.map