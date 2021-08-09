(this["webpackJsonpcovid-information-worldwide"]=this["webpackJsonpcovid-information-worldwide"]||[]).push([[2],{116:function(e,t,a){},117:function(e,t,a){},21:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a(0);var r=a(69),n=a(2),c=function(){return Object(n.jsxs)("div",{className:"skeleton",children:[Object(n.jsx)(r.a,{}),Object(n.jsx)(r.a,{animation:!1}),Object(n.jsx)(r.a,{animation:"wave"})]})}},248:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(18),o=a.n(c),s=(a(116),a(12)),d=(a(117),a(274)),u=a(16),i=a(9),l=a(107),j=a(2),b=function(e){return Object(j.jsxs)("div",{className:"header-component",children:[Object(j.jsx)("div",{className:"header-text",children:Object(j.jsxs)("h2",{children:[Object(j.jsx)(u.a,{icon:i.k,color:"red"})," Corona Reports Worldwide ",Object(j.jsx)(u.a,{icon:i.k,color:"red"})," "]})}),Object(j.jsxs)("div",{className:"header-icons",children:[e.themeState.background===e.theme.light.background?Object(j.jsx)(d.a,{title:"Turn Dark Mode On ",children:Object(j.jsx)("span",{onClick:function(){e.setThemeState(e.theme.dark)},style:{cursor:"pointer",marginRight:".5rem"},children:Object(j.jsx)(u.a,{icon:i.j,size:"2x"})})}):Object(j.jsx)(d.a,{title:"Turn Dark Mode Off",children:Object(j.jsx)("span",{onClick:function(){e.setThemeState(e.theme.light)},style:{cursor:"pointer",marginRight:".5rem"},children:Object(j.jsx)(u.a,{icon:i.f,color:"white",size:"2x"})})}),Object(j.jsx)(d.a,{title:"Source Code",children:Object(j.jsx)("a",{style:{marginRight:".5rem"},href:"https://github.com/SiamAnzir/covid-19-reports-worldwide",children:Object(j.jsx)(u.a,{icon:l.a,size:"2x",color:e.themeState.foreground})})})]})]})},h=a(21),f=a(10),O=a.n(f),p=a(19),m=a(36),x=a(271),g=a(272),v=a(276),k=a(275),S=a(273),y=a(31),C=function(e){if(!e.deaths)return Object(j.jsx)(h.a,{});var t=[],a=[];return Object.keys(e.deaths).forEach((function(r){t.push(r),a.push(e.deaths[r])})),Object(j.jsx)("div",{className:"chart-container",children:Object(j.jsx)(y.a,{data:{labels:t.map((function(e){return new Date(e).toDateString()})),datasets:[{data:a.map((function(e){return e})),label:"Deaths",borderColor:"red",borderWidth:.1,backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!1,tension:.1}]}})})},w=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(1)]).then(a.bind(null,278))})),B=function(e){var t=Object(r.useState)([]),a=Object(s.a)(t,2),n=a[0],c=a[1],o=Object(r.useState)({}),d=Object(s.a)(o,2),l=d[0],b=d[1],f=Object(r.useState)({}),B=Object(s.a)(f,2),D=B[0],N=B[1],T=Object(r.useState)(!1),R=Object(s.a)(T,2),I=R[0],F=R[1],A=Object(r.useState)(!1),E=Object(s.a)(A,2),V=E[0],z=E[1];Object(r.useEffect)((function(){(function(){var e=Object(p.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,Object(m.a)();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(e){return e}))}),[]);var L=function(){var e=Object(p.a)(O.a.mark((function e(t){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(!0),e.next=3,Object(m.c)(t);case 3:return(a=e.sent)&&(b(a),z(!1)),e.next=7,Object(m.b)(t);case 7:(r=e.sent).data?(N(r.data.timeline),F(!1),z(!1)):(F(!0),z(!1));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return V?Object(j.jsx)(h.a,{}):Object(j.jsxs)(x.a,{className:"selectCountry",children:[Object(j.jsx)("br",{}),Object(j.jsxs)(g.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[Object(j.jsx)(u.a,{icon:i.c})," Country Base Reports ",Object(j.jsx)(u.a,{icon:i.g})," "]}),Object(j.jsx)(v.a,{className:"formControl",style:{backgroundColor:e.themeState.cardBackground,color:e.themeState.foreground},children:Object(j.jsxs)(k.a,{defaultValue:"",onChange:function(e){return L(e.target.value)},style:{backgroundColor:e.themeState.cardBackground,color:e.themeState.foreground},children:[Object(j.jsx)("option",{value:"",style:{backgroundColor:e.themeState.cardBackground,color:e.themeState.foreground},children:" Select Country"}),n.map((function(t,a){return Object(j.jsx)("option",{value:t,style:{backgroundColor:e.themeState.cardBackground,color:e.themeState.foreground},children:t},a)}))]})}),l.data?Object(j.jsxs)(x.a,{children:[Object(j.jsxs)("div",{className:"card-container",children:[Object(j.jsxs)(r.Suspense,{fallback:Object(j.jsx)(h.a,{}),children:[Object(j.jsxs)(g.a,{gutterBottom:!0,variant:"h5",component:"h3",children:["Showing Results for ",l.data.country," ",Object(j.jsx)("img",{className:"flagLogo",src:l.data.countryInfo.flag,alt:"countryFlag"})," "]}),Object(j.jsx)("br",{}),Object(j.jsxs)(S.a,{container:!0,spacing:3,justifyContent:"center",children:[Object(j.jsx)(w,{className:"infected",cardTitle:"Last 24 hours Infected",value:l.data.todayCases,cardSubtitle:"Active cases for COVID-19.",lastUpdate:l.data.updated,cardBackground:e.themeState.cardBackground,foreground:e.themeState.foreground,icon:i.l}),Object(j.jsx)(w,{className:"recovered",cardTitle:"Last 24 hours Recovered",value:l.data.todayRecovered,cardSubtitle:"Recoveries from COVID-19.",lastUpdate:l.data.updated,cardBackground:e.themeState.cardBackground,foreground:e.themeState.foreground,icon:i.b}),Object(j.jsx)(w,{className:"deaths",cardTitle:"Last 24 hours Deaths",value:l.data.todayDeaths,cardSubtitle:"Deaths caused by COVID-19.",lastUpdate:l.data.updated,cardBackground:e.themeState.cardBackground,foreground:e.themeState.foreground,icon:i.i})]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)(h.a,{}),children:Object(j.jsxs)(S.a,{container:!0,spacing:3,justifyContent:"center",children:[Object(j.jsx)(w,{className:"infected",cardTitle:"Total Infected",value:l.data.cases,cardSubtitle:"Active cases for COVID-19.",lastUpdate:l.data.updated,cardBackground:e.themeState.cardBackground,foreground:e.themeState.foreground,icon:i.k}),Object(j.jsx)(w,{className:"recovered",cardTitle:"Total Recovered",value:l.data.recovered,cardSubtitle:"Recoveries from COVID-19.",lastUpdate:l.data.updated,cardBackground:e.themeState.cardBackground,foreground:e.themeState.foreground,icon:i.e}),Object(j.jsx)(w,{className:"deaths",cardTitle:"Total Deaths",value:l.data.deaths,cardSubtitle:"Deaths caused by COVID-19.",lastUpdate:l.data.updated,cardBackground:e.themeState.cardBackground,foreground:e.themeState.foreground,icon:i.h})]})})]}),Object(j.jsx)("div",{children:Object(j.jsxs)(S.a,{container:!0,spacing:3,justifyContent:"center",children:[Object(j.jsx)(S.a,{item:!0,xs:12,md:6,className:"chart-container",style:{backgroundColor:e.themeState.cardBackground,color:e.themeState.foreground},children:I?Object(j.jsx)(g.a,{children:"Country not found or doesn't have any historical data"}):Object(j.jsx)(C,{deaths:D.deaths})}),Object(j.jsxs)(S.a,{item:!0,xs:12,md:3,className:"pie-chart-container",style:{backgroundColor:e.themeState.cardBackground,color:e.themeState.foreground},children:[Object(j.jsx)(y.b,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"Covid-19 Reports",data:[l.data.cases,l.data.recovered,l.data.deaths],backgroundColor:["rgba(0,0,255,0.5)","rgba(0, 255, 0,0.5)","rgba(255,0, 0,0.5)"],hoverOffset:4}]}}),Object(j.jsx)("br",{}),Object(j.jsx)(g.a,{children:"Total Infected,Recovered & Deaths"})]})]})})]}):Object(j.jsx)("div",{children:Object(j.jsxs)(g.a,{children:[Object(j.jsx)(u.a,{icon:i.a})," No Country Selected"]})})]})},D=function(e){var t=Object(r.useState)([]),a=Object(s.a)(t,2),n=a[0],c=a[1];if(Object(r.useEffect)((function(){(function(){var e=Object(p.a)(O.a.mark((function e(){var t,a,r,n,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.d)();case 2:t=e.sent,a=t.data,r=a.cases,n=a.deaths,o=a.recovered,c([r,n,o]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(e){return e}))}),[]),!n[0])return Object(j.jsx)(h.a,{});var o=[],d=[],l=[],b=[];Object.keys(n[0]).forEach((function(e){o.push(e),d.push(n[0][e])})),Object.keys(n[1]).forEach((function(e){l.push(n[1][e])})),Object.keys(n[2]).forEach((function(e){b.push(n[2][e])}));var f=n[0]?Object(j.jsx)(y.a,{data:{labels:o.map((function(e){return new Date(e).toDateString()})),datasets:[{data:d.map((function(e){return e})),label:"Infected",borderColor:"#3333ff",fill:!1,tension:.1},{data:b.map((function(e){return e})),label:"Recovered",borderColor:"green",backgroundColor:"rgba(0, 255, 0, 0.5)",fill:!1,tension:.1}]}}):null,v=n[0]?Object(j.jsx)(y.a,{data:{labels:o.map((function(e){return new Date(e).toDateString()})),datasets:[{data:l.map((function(e){return e})),label:"Deaths",borderColor:"red",borderWidth:.1,backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return Object(j.jsxs)(x.a,{maxWidth:"md",children:[Object(j.jsxs)("div",{className:"card-container",style:{backgroundColor:e.themeState.cardBackground,color:e.themeState.foreground},children:[Object(j.jsx)("br",{}),Object(j.jsxs)(g.a,{gutterBottom:!0,variant:"h5",component:"h3",children:[Object(j.jsx)(u.a,{icon:i.k})," Total Infected & Recovered ",Object(j.jsx)(u.a,{icon:i.e})]}),f]}),Object(j.jsxs)("div",{className:"card-container",style:{backgroundColor:e.themeState.cardBackground,color:e.themeState.foreground},children:[Object(j.jsx)("br",{}),Object(j.jsxs)(g.a,{gutterBottom:!0,variant:"h5",component:"h3",children:[Object(j.jsx)(u.a,{icon:i.i})," Total Deaths"]}),v]})]})},N={light:{foreground:"#242424",background:"#FAFAFA",cardBackground:"#FAFAFA"},dark:{foreground:"#FAFAFA",background:"#242424",cardBackground:"#323232"}},T=n.a.createContext(N),R=Object(r.lazy)((function(){return a.e(5).then(a.bind(null,282))})),I=function(){var e=Object(r.useContext)(T),t=Object(r.useState)(e.light),a=Object(s.a)(t,2),n=a[0],c=a[1];return Object(j.jsxs)("section",{style:{backgroundColor:n.background,color:n.foreground},children:[Object(j.jsx)(b,{theme:e,themeState:n,setThemeState:c}),Object(j.jsxs)("div",{className:"app-container",children:[Object(j.jsx)(B,{themeState:n}),Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)(h.a,{}),children:Object(j.jsx)(R,{themeState:n})}),Object(j.jsx)(D,{themeState:n})]})]})},F=function(e){e&&e instanceof Function&&a.e(6).then(a.bind(null,284)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),c(e),o(e)}))};o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(T.Provider,{value:N,children:Object(j.jsx)(I,{})})}),document.getElementById("root")),F()},36:function(e,t,a){"use strict";a.d(t,"e",(function(){return d})),a.d(t,"d",(function(){return u})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return j}));var r=a(10),n=a.n(r),c=a(19),o=a(37),s=a.n(o),d=function(){var e=Object(c.a)(n.a.mark((function e(){var t,a,r,c,o,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("https://disease.sh/v3/covid-19/all");case 3:return t=e.sent,a=t.data,r=a.cases,c=a.recovered,o=a.deaths,d=a.updated,e.abrupt("return",{cases:r,recovered:c,deaths:o,updated:d});case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all");case 3:return t=e.sent,a=t.data,e.abrupt("return",{data:a});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("https://disease.sh/v3/covid-19/countries/");case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){return e.country})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("https://disease.sh/v3/covid-19/countries/".concat(t));case 3:return a=e.sent,r=a.data,e.abrupt("return",{data:r});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("https://disease.sh/v3/covid-19/historical/".concat(t,"?lastdays=all"));case 3:return a=e.sent,r=a.data,e.abrupt("return",{data:r});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}},[[248,3,4]]]);
//# sourceMappingURL=main.87e28c8b.chunk.js.map