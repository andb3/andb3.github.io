import{_ as n,a,i as e,s as t,b as r,S as i,e as s,c as o,t as c,d as p,f as u,g as d,h as l,j as h,k as f,l as g,m,n as b,o as v,u as S,v as y,F as k,q as j,r as w}from"./client.f5a6df07.js";import{s as A,a as I}from"./mjukna-transition.bd7e1d32.js";function x(n){return function(){var a,e=j(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}()){var t=j(this).constructor;a=Reflect.construct(e,arguments,t)}else a=e.apply(this,arguments);return w(this,a)}}function D(n){var a,e,t,r,i,j,w,x,D,_,C,R,T,E,M,P=n[0].name+"";return{c:function(){a=s("div"),e=s("img"),x=o(),D=s("p"),_=c(P),this.h()},l:function(n){a=p(n,"DIV",{class:!0,id:!0});var t=u(a);e=p(t,"IMG",{"transition-key":!0,class:!0,src:!0,alt:!0}),x=d(t),D=p(t,"P",{"transition-key":!0,class:!0});var r=u(D);_=l(r,P),r.forEach(h),t.forEach(h),this.h()},h:function(){f(e,"transition-key",t="icon-".concat(n[0].name)),f(e,"class","app-item-icon svelte-1o0pwdu"),e.src!==(r="/app_icons/"+n[0].iconSrc)&&f(e,"src",r),f(e,"alt",i=n[0].name+" icon"),f(D,"transition-key",C="name-".concat(n[0].name)),f(D,"class","app-item-name svelte-1o0pwdu"),f(a,"class","app-item svelte-1o0pwdu"),f(a,"id",E="app-item-"+n[0].name)},m:function(n,t){g(n,a,t),m(a,e),m(a,x),m(a,D),m(D,_),M=!0},p:function(n,s){var o=b(s,1)[0];(!M||1&o&&t!==(t="icon-".concat(n[0].name)))&&f(e,"transition-key",t),(!M||1&o&&e.src!==(r="/app_icons/"+n[0].iconSrc))&&f(e,"src",r),(!M||1&o&&i!==(i=n[0].name+" icon"))&&f(e,"alt",i),(!M||1&o)&&P!==(P=n[0].name+"")&&v(_,P),(!M||1&o&&C!==(C="name-".concat(n[0].name)))&&f(D,"transition-key",C),(!M||1&o&&E!==(E="app-item-"+n[0].name))&&f(a,"id",E)},i:function(n){M||(S(function(){w&&w.end(1),j||(j=y(e,A,{})),j.start()}),S(function(){T&&T.end(1),R||(R=y(D,A,{})),R.start()}),M=!0)},o:function(n){j&&j.invalidate(),w=k(e,I,{}),R&&R.invalidate(),T=k(D,I,{}),M=!1},d:function(n){n&&h(a),n&&w&&w.end(),n&&T&&T.end()}}}function _(n,a,e){var t=a.app,r=a.uppercase;return n.$set=function(n){"app"in n&&e(0,t=n.app),"uppercase"in n&&e(1,r=n.uppercase)},[t,r]}var C=function(s){n(c,i);var o=x(c);function c(n){var i;return a(this,c),i=o.call(this),e(r(i),n,_,D,t,{app:0,uppercase:1}),i}return c}(),R=[{name:"Trails",iconSrc:"trails_icon.png",screenshotSrcs:["Favorites.png","Explore.png","Search.png","Area.png"],info:"An Android app to view ski maps, both modern and historical.",notes:"",github:"https://github.com/andb3/Trails"},{name:"Corners",iconSrc:"corners_icon.png",screenshotSrcs:["Main.jpg","MoreSettings.jpg","IndividualCorner.jpg"],info:"A simple app to round the corners of the screen",notes:"This was the first app I released to the Play Store, and I learned a ton about dealing with a published app, including bugfixes, translations, and responding to user feedback. Additionally, the app itself required learning about Services and system APIs to keep the overlay running through Android's app-killing processes.",github:"https://github.com/andb3/Corners"},{name:"Weather",iconSrc:"weather_icon.png",screenshotSrcs:["Home.jpg","MainGraph.jpg","Temperature.jpg","Rain.jpg"],info:"A weather app featuring glanceable bar graphs - powered by Dark Sky",notes:"",github:"https://github.com/andb3/Weather"},{name:"Cards",iconSrc:"cards_icon.png",screenshotSrcs:["Home.jpg","BottomDrawer.jpg","AddExpense.jpg","AddCard.jpg"],info:"An app to keep track of balance on gift cards, etc.",notes:"Though it's a simple app, I learned a lot from creating it, including creating two libraries, Swiper and DragDropper, which I've used at least one of on almost all of my other apps.",github:"https://github.com/andb3/Cards"},{name:"Index",iconSrc:"index_icon.png",screenshotSrcs:["Inbox.jpg","Drawer.jpg"],info:"A todo list with a unique, folder-like structure",notes:"This is the first app I created, and making it was how I learned to program in Java.",github:"https://github.com/andb3/Index"}];export{C as A,R as a};
