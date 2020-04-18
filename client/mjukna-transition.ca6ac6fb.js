import{C as t}from"./client.98be6cee.js";function e(t){const e=t-1;return e*e*e+1}function n(t,e,n,o){t.forEach((t,i)=>{n[i]=t+(e[i]-t)*o})}function o(t){const e={stopped:!1},o=t=>{e.stopped||window.requestAnimationFrame(t)};return o.isStopped=(()=>e.stopped),function(t,e){const o=t.stiffness||10,i=t.damping||.5,r=!!t.noOvershoot;let s=t.velocity||0;const{from:c,to:l}=t,a=[...t.from];let u=0;const p=()=>{if(!e.isStopped())return u+=s+=o/100*(1-u)-s*i,r&&u>1&&(s*=-1,u=1-(u-1)),Math.abs(u-1)<.001&&Math.abs(s)<.001?(n(c,l,a,1),t.update(l),void(t.done&&t.done())):(n(c,l,a,u),t.update(a),void e(p))};e(p)}(t,o),()=>{e.stopped=!0}}function i(t,e,n){n[0]=t[0]*e[0]+t[1]*e[3]+t[2]*e[6],n[1]=t[0]*e[1]+t[1]*e[4]+t[2]*e[7],n[2]=t[0]*e[2]+t[1]*e[5]+t[2]*e[8],n[3]=t[3]*e[0]+t[4]*e[3]+t[5]*e[6],n[4]=t[3]*e[1]+t[4]*e[4]+t[5]*e[7],n[5]=t[3]*e[2]+t[4]*e[5]+t[5]*e[8],n[6]=t[6]*e[0]+t[7]*e[3]+t[8]*e[6],n[7]=t[6]*e[1]+t[7]*e[4]+t[8]*e[7],n[8]=t[6]*e[2]+t[7]*e[5]+t[8]*e[8]}function r(t){t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}function s(t,e){e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8]}const c=new Float32Array(9),l=new Float32Array(9);function a(){const t=new Float32Array(9);return r(t),{t(e,n){return s(t,c),function(t,e,n){t[0]=1,t[1]=0,t[2]=e,t[3]=0,t[4]=1,t[5]=n,t[6]=0,t[7]=0,t[8]=1}(l,e,n),i(c,l,t),this},s(e,n){return s(t,c),function(t,e,n){t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=n,t[5]=0,t[6]=0,t[7]=0,t[8]=1}(l,e,n),i(c,l,t),this},css:()=>`matrix(${t[0].toFixed(5)}, ${t[1].toFixed(5)}, ${t[3].toFixed(5)}, ${t[4].toFixed(5)}, ${t[2].toFixed(5)}, ${t[5].toFixed(5)})`,clear(){return r(t),this}}}const u=a();function p(t){return u.clear().s(t,t).css()}function f(t,e,n,i,r){t.style.opacity=e[0],t.style.transform=p(e[1]),o(Object.assign({from:e,to:n,update([e,n]){t.style.opacity=e,t.style.transform=p(n)},done(){t.style.opacity=n[0],t.style.transform=p(n[1]),r()}},i))}function d(t,e){return{left:e.left-t.left,top:e.top-t.top,width:e.width,height:e.height}}const m=a(),h={childList:!0,subtree:!0,attributes:!0},g=(t,e)=>0===e?t():setTimeout(t,e);let y,w=[],x={},b=[],A=()=>{};function v(){y||(y=new MutationObserver(t=>{y.disconnect();let e=0;const n=()=>{const t=e;return e+=x.staggerBy,t},i=t.filter(({type:t})=>"childList"===t),r=i.map(t=>Array.from(t.addedNodes)).reduce((t,e)=>t.concat(e),[]).filter(({nodeType:t})=>1===t),s=[];for(const t of i)for(const e of t.removedNodes){const n=w.find(t=>t.getElement()===e),o=r.includes(e);n&&!o&&s.push([n,t.target])}const c=r.filter(t=>x.enterFilter(t)).filter(t=>!w.find(e=>t===e.getElement())),l=w.filter(t=>t.getElement().parentNode);Promise.all([].concat(s.map(([t,e])=>(function(t,e,n){const{previousPosition:o}=t,i=t.getElement();e.appendChild(i),i.style.position="absolute",i.style.width=`${o.width}px`,i.style.height=`${o.height}px`,i.style.top=0,i.style.left=0;const r=i.getBoundingClientRect(),s=r.left-o.left,c=r.top-o.top;return i.style.willChange="transform, opacity",i.style.top=`${-c}px`,i.style.left=`${-s}px`,new Promise(t=>{g(()=>{const e=()=>{i.remove(),t()};if(x.exitAnimation)return x.exitAnimation(i,e);!function(t,e,n){f(t,[1,1],[0,.8],e,n)}(i,x.spring,e)},n())})})(t,e,n))).concat(function(t,e){const n=function t(e,n=[]){return e.forEach(e=>{n.push(e),t(e.children,n)}),n}(function t(e){return e.map(e=>{const{previousPosition:n}=e,o=e.element.getBoundingClientRect(),i={x:n.width/o.width,y:n.height/o.height};return e.newPosition=e.parent?d(e.parent.newPosition,o):o,e.parentScale=e.parent?function(t,e){return{x:e.x*t.x,y:e.y*t.y}}(e.parent.scale,e.parent.parentScale):{x:1,y:1},e.scale=i,e.previousPosition=e.parent?d(e.parent.previousPosition,n):n,e.children=t(e.children),e})}(t.map(t=>Object.assign(t,{mjuk:t,element:t.getElement()})).reduce((t,e)=>(function t(e,n,o){n.element.style.transform="";const i=e.find(t=>t.element.contains(n.element));if(i)return e.map(e=>e===i?Object.assign(e,{parent:o,children:t(i.children,n,i)}):e);{const t=e.filter(t=>n.element.contains(t.element)),i=e.filter(t=>!n.element.contains(t.element)),r=Object.assign(n,{parent:o,children:t});return function(t,e){t.forEach(t=>{t.parent=e})}(r.children,r),[...i,r]}})(t,e),[]))).map(t=>(function(t,e){const{parentScale:n,element:i,scale:r,previousPosition:s,newPosition:c}=t,l=s.left+s.width/2-(c.left+c.width/2),a=s.top+s.height/2-(c.top+c.height/2),u=r.x,p=r.y,f=c.left+c.width/2,d=c.top+c.height/2;i.style.willChange="transform",i.style.transform=m.clear().t(-f,-d).s(1/n.x,1/n.y).t(f,d).t(l,a).s(u,p).css();const h=[i,void 0,()=>{}];return b.push(h),new Promise(t=>{h[1]=g(()=>{h[2]=o(Object.assign({from:[l,a,u,p,n.x,n.y],to:[0,0,1,1,1,1],update([t,e,n,o,r,s]){i.style.transform=m.clear().t(-f,-d).s(1/r,1/s).t(f,d).t(t,e).s(n,o).css()},done(){i.style.transform="",t()}},x.spring))},e())})})(t,e));return w=[],Promise.all(n)}(l,n)).concat(c.map(t=>(function(t,e){return t.style.willChange="transform, opacity",new Promise(n=>{g(()=>{if(x.enterAnimation)return x.enterAnimation(t,n);!function(t,e,n){f(t,[0,.8],[1,1],e,n)}(t,x.spring,n)},e())})})(t,n)))).then(A)})),y.observe(document,h)}const P=()=>!1;function F(t,e={}){return v(),new Promise(n=>{A=n,x={spring:e.spring,staggerBy:e.staggerBy||0,enterFilter:e.enterFilter||P,enterAnimation:e.enterAnimation};const o=Number.isInteger(t.length)?t:[].concat(t);for(let t of o){const e=t.anchor?t.element:()=>t;b=b.filter(([t,n,o])=>(t===e()&&(clearInterval(n),o()),t!==e()));const n={getElement:e,previousPosition:t.anchor?t.anchor.getBoundingClientRect():e().getBoundingClientRect(),stop:()=>{}};w.push(n)}})}const $=(t,e)=>{console.log("running mjuknaTransition for "+e.test),console.log(t),console.log(`transition - node key = ${t.getAttribute("transition-key")}`);const n=`[transition-key="${t.getAttribute("transition-key")}"]`;console.log(n);const o=[...document.querySelectorAll(n)].filter(e=>e!=t)[0];console.log("elements = ",document.querySelectorAll(n)),console.log("anchor = ",o),t.setAttribute("style","opacity: 0;"),F({anchor:o,element:()=>t}),t.setAttribute("style","opacity: 1;"),console.log("breakpt")},C=function(e){const n=+getComputedStyle(e).opacity;return{delay:0,duration:0,easing:t,css:t=>`opacity: ${t*n}`}};export{C as a,e as c,F as m,$ as s};
