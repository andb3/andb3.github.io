import{S as t,i as s,s as a,F as e,j as n,n as r,v as l,B as i,g as o,e as c,a as f,t as h,c as u,b as m,d as p,f as d,h as v,E as g,k as T,u as x,y,m as E,o as b,G as k}from"./client.98be6cee.js";import{a as j,m as B,s as _}from"./mjukna-transition.ca6ac6fb.js";import{f as A}from"./index.7b8d1a34.js";function H(t,s,a){const e=t.slice();return e[7]=s[a],e[9]=a,e}function I(t){let s,a=Array(3),c=[];for(let s=0;s<a.length;s+=1)c[s]=M(H(t,a,s));return{c(){for(let t=0;t<c.length;t+=1)c[t].c();s=e()},l(t){for(let s=0;s<c.length;s+=1)c[s].l(t);s=e()},m(t,a){for(let s=0;s<c.length;s+=1)c[s].m(t,a);n(t,s,a)},p:r,i(t){for(let t=0;t<a.length;t+=1)l(c[t])},o:r,d(t){i(c,t),t&&o(s)}}}function M(t){let s,a,e,l;return{c(){s=c("img"),l=f(),this.h()},l(t){s=u(t,"IMG",{class:!0,src:!0,alt:!0}),l=p(t),this.h()},h(){v(s,"class","test-img svelte-1mxlt9p"),s.src!==(a="app_icons/trails_icon.png")&&v(s,"src","app_icons/trails_icon.png"),v(s,"alt","test icon")},m(t,a){n(t,s,a),n(t,l,a)},i(a){e||E(()=>{(e=b(s,A,{y:100,duration:400,delay:100+50*t[9]})).start()})},o:r,d(t){t&&o(s),t&&o(l)}}}function N(t){let s,a,e,r,i,k,B,A,H,M,N,O,U,D,G,V,F,S,q,w,z,C,J,K,L,P=t[3]&&I(t);return{c(){s=c("div"),a=c("div"),P&&P.c(),e=f(),r=c("h1"),i=h("Test 2"),A=f(),H=c("h1"),M=h("Test 3"),U=f(),D=c("button"),G=h("Move"),V=f(),F=c("a"),S=c("button"),q=h("Transition 2"),w=f(),z=c("a"),C=c("button"),J=h("Transition 3"),this.h()},l(t){s=u(t,"DIV",{class:!0});var n=m(s);a=u(n,"DIV",{class:!0});var l=m(a);P&&P.l(l),l.forEach(o),e=p(n),r=u(n,"H1",{class:!0,"transition-key":!0,style:!0});var c=m(r);i=d(c,"Test 2"),c.forEach(o),A=p(n),H=u(n,"H1",{class:!0,"transition-key":!0,style:!0});var f=m(H);M=d(f,"Test 3"),f.forEach(o),U=p(n),D=u(n,"BUTTON",{});var h=m(D);G=d(h,"Move"),h.forEach(o),V=p(n),F=u(n,"A",{href:!0});var v=m(F);S=u(v,"BUTTON",{});var g=m(S);q=d(g,"Transition 2"),g.forEach(o),v.forEach(o),w=p(n),z=u(n,"A",{href:!0});var T=m(z);C=u(T,"BUTTON",{});var x=m(C);J=d(x,"Transition 3"),x.forEach(o),T.forEach(o),n.forEach(o),this.h()},h(){v(a,"class","test-1-holder svelte-1mxlt9p"),v(r,"class","test2 svelte-1mxlt9p"),v(r,"transition-key","t2"),g(r,"margin-left",t[2]+"px"),v(H,"class","test3 svelte-1mxlt9p"),v(H,"transition-key","t3"),g(H,"margin-left",t[2]+"px"),v(F,"href","test/test2"),v(z,"href","test/test3"),v(s,"class","test-holder svelte-1mxlt9p")},m(l,o,c){n(l,s,o),T(s,a),P&&P.m(a,null),T(s,e),T(s,r),T(r,i),t[5](r),T(s,A),T(s,H),T(H,M),t[6](H),T(s,U),T(s,D),T(D,G),T(s,V),T(s,F),T(F,S),T(S,q),T(s,w),T(s,z),T(z,C),T(C,J),K=!0,c&&L(),L=x(D,"click",t[4])},p(t,[s]){t[3]?P?(P.p(t,s),l(P,1)):((P=I(t)).c(),l(P,1),P.m(a,null)):P&&(P.d(1),P=null),(!K||4&s)&&g(r,"margin-left",t[2]+"px"),(!K||4&s)&&g(H,"margin-left",t[2]+"px")},i(t){K||(l(P),E(()=>{B&&B.end(1),k||(k=b(r,_,{test:"t in"})),k.start()}),E(()=>{O&&O.end(1),N||(N=b(H,_,{test:"t in"})),N.start()}),K=!0)},o(t){k&&k.invalidate(),B=y(r,j,{}),N&&N.invalidate(),O=y(H,j,{duration:0}),K=!1},d(a){a&&o(s),P&&P.d(),t[5](null),a&&B&&B.end(),t[6](null),a&&O&&O.end(),L()}}}function O(t,s,a){let e,n,r=0;let l=!1;return l=!0,[e,n,r,!0,function(){console.log("moveH1"),B([e,n]),a(2,r+=20)},function(t){k[t?"unshift":"push"](()=>{a(0,e=t)})},function(t){k[t?"unshift":"push"](()=>{a(1,n=t)})}]}export default class extends t{constructor(t){super(),s(this,t,O,N,a,{})}}
