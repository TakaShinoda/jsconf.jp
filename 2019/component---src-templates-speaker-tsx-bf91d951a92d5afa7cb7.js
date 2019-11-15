(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});n(16);var a=n(0),r=n.n(a),i=n(214),o=n(95),l=n(229),c=n.n(l),m=n(321),u=n.n(m),s=n(228),p=n(224),f=n(221),d=n(216),g=n(217),h=n(218),b=n(232),x=i.c.div.withConfig({displayName:"speaker__SpeakerBox",componentId:"sc-1ipl0uj-0"})(["display:flex;flex-direction:row;margin-bottom:2em;","{flex-direction:column;}"],function(e){return e.theme.breakpoints.mobile}),w=Object(i.c)(u.a).withConfig({displayName:"speaker__Description",componentId:"sc-1ipl0uj-1"})(["font-family:",";font-size:18px;"],function(e){return e.theme.fonts.text}),y=Object(i.c)(w).withConfig({displayName:"speaker__Biography",componentId:"sc-1ipl0uj-2"})(["flex:1;margin:0;margin-left:60px;","{margin-left:0;margin-top:40px;}"],function(e){return e.theme.breakpoints.mobile}),k=Object(i.c)(c.a).withConfig({displayName:"speaker__Avatar",componentId:"sc-1ipl0uj-3"})(["width:100%;max-width:273px;","{max-width:100%;}"],function(e){return e.theme.breakpoints.mobile}),E=i.c.div.withConfig({displayName:"speaker__TalkBox",componentId:"sc-1ipl0uj-4"})(["font-family:",";background-color:",";padding:40px;","{padding:2em 1em;}"],function(e){return e.theme.fonts.text},function(e){return e.theme.colors.talkBg},function(e){return e.theme.breakpoints.mobile}),_=Object(i.c)(b.a).withConfig({displayName:"speaker__TalkTitle",componentId:"sc-1ipl0uj-5"})(["font-family:",";margin-bottom:0.5em;font-size:24px;text-align:left;"],function(e){return e.theme.fonts.header});function v(e){var t=Object(o.b)(),n=t.t,a=t.i18n,i=e.pageContext,l=i.speakers,c=i.avatars,m=i.talk,u=m.title,b=m.titleJa,v=m.description,I=m.descriptionJa,j=m.spokenLanguage,C=m.slideLanguage,B=m.date,N=m.startsAt,A=m.endsAt,T=m.room,z=Intl.DateTimeFormat(a.language,{year:"numeric",month:"2-digit",day:"2-digit"}),D=l.map(function(e){return e.name}).join(" and "),O=function(e,t){return"en"===a.language?e||t:t||e};return r.a.createElement(p.a,null,r.a.createElement(f.a,{title:O(u,b)+" - "+D,ogImage:c.length?c[0].originalImg:void 0}),r.a.createElement(g.a,null,r.a.createElement(h.a,{path:[{label:"speakers",to:"speakers"},u]}),r.a.createElement(d.a,null,D),l.map(function(e,t){return r.a.createElement(x,{key:e.uuid},r.a.createElement(k,{fluid:c[t],loading:"eager"}),r.a.createElement(y,{source:O(e.biography,e.biographyJa)}))}),r.a.createElement(E,null,r.a.createElement(_,null,O(u,b)),r.a.createElement("p",null,z.format(s.b[B].startsAt),", ",N," - ",A,r.a.createElement("br",null),"Room: ",T,r.a.createElement("br",null),"Spoken language: ",n(j),C?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),"Slide language: ",n(C)):null,r.a.createElement("br",null)),r.a.createElement(w,{source:O(v,I)}))))}},216:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n.n(a),i=n(214).c.h1.withConfig({displayName:"Title__Box",componentId:"ic2qmd-0"})(["text-align:center;margin:40px 0 60px;font-size:40px;text-transform:uppercase;font-family:",";"],function(e){return e.theme.fonts.header});function o(e){var t=e.children;return r.a.createElement(i,null,t)}},217:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n.n(a),i=n(214).c.div.withConfig({displayName:"ResponsiveBox__Box",componentId:"s7imgo-0"})(["width:100%;max-width:",";padding:2em 1em 5em;margin:0 auto;box-sizing:border-box;"],function(e){return e.theme.innerWidth});function o(e){var t=e.children;return r.a.createElement(i,null,t)}},218:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(0),r=n.n(a),i=n(214),o=n(95),l=n(215),c=i.c.div.withConfig({displayName:"Breadcrumb__Box",componentId:"whtkqw-0"})(["display:flex;"]),m=i.c.span.withConfig({displayName:"Breadcrumb__Text",componentId:"whtkqw-1"})(["margin-right:0.5em;font-size:14px;font-weight:bold;text-transform:uppercase;font-family:",";text-transform:uppercase;"],function(e){return e.theme.fonts.header});function u(e){var t=e.path,n=Object(o.b)().t;return r.a.createElement(c,null,r.a.createElement(l.a,{to:"/"},r.a.createElement(m,null,n("top"))),t.filter(Boolean).map(function(e){var t="string"==typeof e?{label:e,to:null}:e;return r.a.createElement(r.a.Fragment,{key:t.label},r.a.createElement(m,null,">"),t.to?r.a.createElement(l.a,{to:t.to},r.a.createElement(m,null,t.label)):r.a.createElement(m,null,t.label))}))}},228:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a={day1:{startsAt:new Date(2019,10,30,12,0),endsAt:new Date(2019,10,30,21,0)},day2:{startsAt:new Date(2019,11,1,10,0),endsAt:new Date(2019,11,1,19,30)}},r=["A","B","C"]},232:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=n(214).c.h2.withConfig({displayName:"SubTitle",componentId:"sm3s2-0"})(["text-align:center;text-transform:uppercase;font-family:",";font-size:40px;margin:0 0 1em;"],function(e){return e.theme.fonts.header})}}]);
//# sourceMappingURL=component---src-templates-speaker-tsx-bf91d951a92d5afa7cb7.js.map