import{S as a,i as e,s as n,e as s,a as t,t as i,c as r,b as o,d as p,f as c,g as d,h,j as l,k as g,l as m,m as u,o as b,y as f}from"./client.98be6cee.js";import{s as S,a as k}from"./mjukna-transition.ca6ac6fb.js";function j(a){let e,n,j,w,v,y,A,I,x,_,C,D,T,$,E,M=a[0].name+"";return{c(){e=s("div"),n=s("img"),I=t(),x=s("p"),_=i(M),this.h()},l(a){e=r(a,"DIV",{class:!0,id:!0});var s=o(e);n=r(s,"IMG",{"transition-key":!0,class:!0,src:!0,alt:!0}),I=p(s),x=r(s,"P",{"transition-key":!0,class:!0});var t=o(x);_=c(t,M),t.forEach(d),s.forEach(d),this.h()},h(){h(n,"transition-key",j=`icon-${a[0].name}`),h(n,"class","app-item-icon svelte-1o0pwdu"),n.src!==(w="/app_icons/"+a[0].iconSrc)&&h(n,"src",w),h(n,"alt",v=a[0].name+" icon"),h(x,"transition-key",C=`name-${a[0].name}`),h(x,"class","app-item-name svelte-1o0pwdu"),h(e,"class","app-item svelte-1o0pwdu"),h(e,"id",$="app-item-"+a[0].name)},m(a,s){l(a,e,s),g(e,n),g(e,I),g(e,x),g(x,_),E=!0},p(a,[s]){(!E||1&s&&j!==(j=`icon-${a[0].name}`))&&h(n,"transition-key",j),(!E||1&s&&n.src!==(w="/app_icons/"+a[0].iconSrc))&&h(n,"src",w),(!E||1&s&&v!==(v=a[0].name+" icon"))&&h(n,"alt",v),(!E||1&s)&&M!==(M=a[0].name+"")&&m(_,M),(!E||1&s&&C!==(C=`name-${a[0].name}`))&&h(x,"transition-key",C),(!E||1&s&&$!==($="app-item-"+a[0].name))&&h(e,"id",$)},i(a){E||(u(()=>{A&&A.end(1),y||(y=b(n,S,{})),y.start()}),u(()=>{T&&T.end(1),D||(D=b(x,S,{})),D.start()}),E=!0)},o(a){y&&y.invalidate(),A=f(n,k,{}),D&&D.invalidate(),T=f(x,k,{}),E=!1},d(a){a&&d(e),a&&A&&A.end(),a&&T&&T.end()}}}function w(a,e,n){let{app:s}=e,{uppercase:t}=e;return a.$set=(a=>{"app"in a&&n(0,s=a.app),"uppercase"in a&&n(1,t=a.uppercase)}),[s,t]}class v extends a{constructor(a){super(),e(this,a,w,j,n,{app:0,uppercase:1})}}const y=[{name:"Trails",iconSrc:"trails_icon.png",screenshotSrcs:["Favorites.png","Explore.png","Search.png","Area.png"],info:"An Android app to view ski maps, both modern and historical.",notes:"",github:"https://github.com/andb3/Trails"},{name:"Corners",iconSrc:"corners_icon.png",screenshotSrcs:["Main.jpg","MoreSettings.jpg","IndividualCorner.jpg"],info:"A simple app to round the corners of the screen",notes:"This was the first app I released to the Play Store, and I learned a ton about dealing with a published app, including bugfixes, translations, and responding to user feedback. Additionally, the app itself required learning about Services and system APIs to keep the overlay running through Android's app-killing processes.",github:"https://github.com/andb3/Corners"},{name:"Weather",iconSrc:"weather_icon.png",screenshotSrcs:["Home.jpg","MainGraph.jpg","Temperature.jpg","Rain.jpg"],info:"A weather app featuring glanceable bar graphs - powered by Dark Sky",notes:"",github:"https://github.com/andb3/Weather"},{name:"Cards",iconSrc:"cards_icon.png",screenshotSrcs:["Home.jpg","BottomDrawer.jpg","AddExpense.jpg","AddCard.jpg"],info:"An app to keep track of balance on gift cards, etc.",notes:"Though it's a simple app, I learned a lot from creating it, including creating two libraries, Swiper and DragDropper, which I've used at least one of on almost all of my other apps.",github:"https://github.com/andb3/Cards"},{name:"Index",iconSrc:"index_icon.png",screenshotSrcs:["Inbox.jpg","Drawer.jpg"],info:"A todo list with a unique, folder-like structure",notes:"This is the first app I created, and making it was how I learned to program in Java.",github:"https://github.com/andb3/Index"}];export{v as A,y as a};
