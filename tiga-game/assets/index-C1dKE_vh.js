(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}function t(e){let t=e.getContext(`2d`);return t.imageSmoothingEnabled=!1,t}function n(e,t,n,r,i,a){e.fillStyle=a,e.fillRect(t|0,n|0,r,i)}function r(e,t,r,i=0,a=0){for(let o=0;o<t.length;o++){let s=t[o];for(let t=0;t<s.length;t++){let c=r[s[t]];c&&n(e,i+t,a+o,1,1,c)}}}var i={outline:`#14141c`,silver:`#d0d5de`,silverDk:`#959cab`,red:`#d42a3c`,redDk:`#8c1a28`,violet:`#7a3cc8`,violetDk:`#4e2688`,gold:`#ffd94a`,goldDk:`#c8961e`,lamp:`#7de6ff`,lampCore:`#eafcff`,white:`#f4f4f4`};function a(r){let a=e(32,48),s=t(a),c=i.outline,{legs:l,armF:u,armB:d,lean:f=0,flash:p=!1}=r,m=p?`#e88a8a`:i.silver,h=p?`#c86a6a`:i.silverDk,g=i.red,_=i.redDk,v=i.violet,y=i.violetDk;o(s,13+l[0][0],29+l[0][1],!0,h,_,y,c),d===`back`?(n(s,6,15,3,8,h),n(s,6,15,3,1,c),n(s,6,22,3,1,c),n(s,5,16,1,6,c)):d===`beamH`?(n(s,20,21,9,3,h),n(s,20,20,9,1,c),n(s,20,24,9,1,c),n(s,29,21,1,3,c)):d===`flail`?(n(s,5,12,3,7,h),n(s,5,12,3,1,c),n(s,4,13,1,5,c)):(n(s,8,15,3,9,h),n(s,8,15,3,1,c),n(s,8,23,3,1,c),n(s,7,16,1,7,c));let b=10+f;n(s,b-1,13,16,1,c),n(s,b-2,14,18,15,c),n(s,b-1,14,16,14,m),n(s,b-1,14,16,3,g),n(s,b-1,14,16,1,_),n(s,b+1,17,3,6,g),n(s,b+11,17,3,6,g),n(s,b+2,23,2,3,_),n(s,b+11,23,2,3,_),n(s,b-1,26,16,2,v),n(s,b-1,27,16,1,y),p?n(s,b+6,18,3,3,`#ffd0d0`):(n(s,b+7,17,1,1,i.lamp),n(s,b+6,18,3,1,i.lamp),n(s,b+5,19,5,1,i.lamp),n(s,b+6,20,3,1,i.lamp),n(s,b+7,21,1,1,i.lamp),n(s,b+6,19,3,1,i.lampCore));let x=13+f;return n(s,x,2,11,1,c),n(s,x-1,3,13,9,c),n(s,x,12,11,1,c),n(s,x,3,11,9,m),n(s,x+4,1,3,1,c),n(s,x+5,0,1,3,c),n(s,x+5,1,1,1,i.lamp),n(s,x+3,2,2,3,h),n(s,x+3,2,2,1,c),p?(n(s,x+7,5,4,2,`#fff0f0`),n(s,x+2,5,3,2,`#fff0f0`)):(n(s,x+7,5,4,2,i.gold),n(s,x+8,7,3,1,i.gold),n(s,x+7,5,4,1,i.goldDk),n(s,x+2,5,3,2,i.gold),n(s,x+2,5,3,1,i.goldDk)),n(s,x-1,6,1,3,h),n(s,x+12,6,1,3,h),o(s,17+l[1][0],29+l[1][1],!1,m,g,v,c),u===`punch`?(n(s,22,15,9,4,c),n(s,23,16,8,2,m),n(s,29,15,4,4,c),n(s,30,16,2,2,m),n(s,24,16,4,2,g)):u===`beamV`?(n(s,20,8,4,9,c),n(s,21,9,2,7,m),n(s,21,9,2,2,i.lamp),n(s,20,6,4,3,c),n(s,21,7,2,1,m)):u===`flail`?(n(s,22,11,4,3,c),n(s,23,12,2,1,m),n(s,25,9,3,3,c),n(s,26,10,1,1,m)):(n(s,22,15,4,10,c),n(s,23,16,2,8,m),n(s,23,21,2,2,g),n(s,22,24,4,2,c),n(s,23,25,2,1,m)),a}function o(e,t,r,a,o,s,c,l){n(e,t,r,5,9,l),n(e,t+1,r+1,3,7,o),n(e,t+1,r+4,3,2,c),n(e,t,r+9,5,8,l),n(e,t+1,r+10,3,6,s),n(e,t,r+16,7,3,l),n(e,t+1,r+17,5,1,a?`#6a1220`:i.red)}function s(){return{idle:[a({legs:[[0,0],[1,0]],armF:`down`,armB:`down`})],walk:[{legs:[[-3,0],[3,-1]]},{legs:[[-1,-1],[1,0]]},{legs:[[3,0],[-3,-1]]},{legs:[[1,-1],[-1,0]]}].map((e,t)=>a({legs:e.legs,armF:t%2==0?`down`:`back`,armB:t%2==0?`back`:`down`,lean:+(t%2==0)})),punch:[a({legs:[[-2,0],[3,0]],armF:`down`,armB:`back`,lean:0}),a({legs:[[-3,0],[4,0]],armF:`punch`,armB:`back`,lean:2})],kick:[a({legs:[[0,0],[2,-2]],armF:`down`,armB:`back`,lean:-1}),c()],beam:[a({legs:[[-2,0],[2,0]],armF:`down`,armB:`down`,lean:0}),a({legs:[[-2,0],[3,0]],armF:`beamV`,armB:`beamH`,lean:1})],hurt:[a({legs:[[2,0],[3,0]],armF:`flail`,armB:`flail`,lean:-3,flash:!0})]}}function c(){let r=e(32,48),a=t(r),s=i.outline;return o(a,11,29,!0,i.silverDk,i.redDk,i.violetDk,s),n(a,8,13,16,1,s),n(a,7,14,18,15,s),n(a,8,14,16,14,i.silver),n(a,8,14,16,3,i.red),n(a,8,14,16,1,i.redDk),n(a,10,17,3,6,i.red),n(a,20,17,3,6,i.red),n(a,8,26,16,2,i.violet),n(a,8,27,16,1,i.violetDk),n(a,16,17,1,1,i.lamp),n(a,15,18,3,1,i.lamp),n(a,14,19,5,1,i.lamp),n(a,15,20,3,1,i.lamp),n(a,16,21,1,1,i.lamp),n(a,15,19,3,1,i.lampCore),n(a,12,2,11,1,s),n(a,11,3,13,9,s),n(a,12,12,11,1,s),n(a,12,3,11,9,i.silver),n(a,16,1,3,1,s),n(a,17,0,1,3,s),n(a,17,1,1,1,i.lamp),n(a,15,2,2,3,i.silverDk),n(a,15,2,2,1,s),n(a,19,5,4,2,i.gold),n(a,20,7,3,1,i.gold),n(a,19,5,4,1,i.goldDk),n(a,14,5,3,2,i.gold),n(a,14,5,3,1,i.goldDk),n(a,4,14,4,8,s),n(a,5,15,2,6,i.silverDk),n(a,14,27,14,5,s),n(a,15,28,12,3,i.silver),n(a,15,29,12,1,i.violet),n(a,26,26,6,7,s),n(a,27,27,4,5,i.red),n(a,27,27,4,1,i.redDk),r}var l={"#":i.outline,g:`#3f9048`,G:`#2e6e38`,b:`#c8d47a`,e:`#ff4040`,w:`#f4f4f4`,s:`#7ab868`},u=[`............######..............`,`...........#ggggg##............`,`..........#gggggggg#...........`,`..........#geegggggg#..........`,`..........#ggggggggg##.........`,`..........#Gggwwwggggg#........`,`...........#Ggggggwww#.........`,`...........##GGGGGGG##..........`,`.....##...#ggggggggg#...........`,`....#gg#.#ggggggggggg#..........`,`...#gggg##gggggggggggg##........`,`..#ggggggggggbbbbbbggggg#.......`,`..#gggggggggbbbbbbbbgggg#.......`,`.#ggggggggggbbbbbbbbbggg#.......`,`.#gssgggggggbbbbbbbbggg#........`,`.#gggggggggggbbbbbbggg#.........`,`..#gggggggggggbbbbggg#..........`,`..#gggggggggggggggggg#..........`,`...#gggggggggggggggg#...........`,`....#gggggggggggggg#............`],d=[`....................`,`....................`,`....................`,`....................`,`....................`,`....................`,`....................`,`....................`,`....................`,`....................`,`....................`,`....................`,`....................`,`##..................`,`#gg##...............`,`#gggg##.............`,`#gggggg##...........`,`.#ggggggg##.........`,`..#gggggggg#........`,`...########.........`],f=[[-3,3],[-1,1],[3,-3],[1,-1],[-2,2],[-4,4]];function p(a){let o=e(48,48),s=t(o);r(s,d,l,0,14),r(s,u,l,12,2);let[c,p]=f[a];return m(s,22+c,34,`#2e6e38`),m(s,32+p,34,`#3f9048`),a===5&&(n(s,40,8,6,3,i.outline),n(s,41,9,4,1,`#8c1a28`),n(s,42,8,2,1,`#f4f4f4`),n(s,36,18,6,3,i.outline),n(s,37,19,4,1,`#3f9048`)),o}function m(e,t,r,a){n(e,t,r,6,8,i.outline),n(e,t+1,r+1,4,6,a),n(e,t,r+8,9,4,i.outline),n(e,t+1,r+9,6,2,a),n(e,t+7,r+9,2,2,`#f4f4f4`)}var h={"#":i.outline,p:`#5a3a6e`,P:`#432a54`,h:`#8a6aa8`,e:`#ff5040`,n:`#c8b88a`},g=[`...........####................`,`..........#nnnn##..............`,`.........#nnnnnnn#.............`,`........#nn#nn#nnn#............`,`........#nnnnnnnnn#............`,`.......##p##pp###pp##..........`,`......#pppppppppppppp#.........`,`.....#pPhpppppppphhppP#........`,`.....#pphpppppppphhppp#........`,`....#pppppppppppppppppp#.......`,`....#pPpppp####pppppPpp#.......`,`....#ppppp#pppp#ppppppp#.......`,`....#ppppp#pppp#ppppppp#.......`,`....#pPppp#pppp#pppPppp#.......`,`.....#pppp#pppp#pppppp#........`,`.....#pppp#pppp#pppppp#........`,`......#ppp####pp#pppp#.........`,`.......#pppppppppppp#..........`,`........############...........`];function _(a){let o=e(48,40),s=t(o);r(s,g,h,8,8),n(s,38,14,6,7,i.outline),n(s,39,15,4,5,`#432a54`),n(s,40,16,2,2,`#ff5040`),a===4?(n(s,42,10,3,6,i.outline),n(s,43,11,1,4,`#c8b88a`)):a===5?(n(s,42,6,3,10,i.outline),n(s,43,7,1,8,`#c8b88a`),n(s,44,4,2,4,i.outline),n(s,45,5,1,2,`#c8b88a`)):(n(s,42,8,3,8,i.outline),n(s,43,9,1,6,`#c8b88a`));let c=a%2==0?0:1;for(let e=0;e<3;e++){let t=14+e*8+(e%2===c?-1:1);n(s,t,27,3,6,i.outline),n(s,t+(e%2===c?-1:2),32,3,3,i.outline)}return o}var v={"#":i.outline,o:`#a8683c`,O:`#7e4c2a`,w:`#c89058`,e:`#ffe040`,c:`#e85038`},y=[`...................#####.................`,`..................#ooooo##...............`,`..................#oeooocc#..............`,`..................#ooooooc#..............`,`..................##oooo##...............`,`...................#oooo##...............`,`..................#oooooo#...............`,`.................#oooooooo#..............`,`................#oooOOOOooo#.............`,`................#ooOOOOOOoo#.............`,`.................#oOOOOOOo#..............`,`..................#OOOOOO#...............`,`...................#O##O#.................`];function b(a){let o=e(56,44),s=t(o),c=i.outline,l=`#c89058`,u=`#a8683c`;a===0||a===4?(x(s,6,2,-1,l,u,c,a===4),x(s,24,2,1,l,u,c,a===4)):a===2?(C(s,4,22,-1,l,u,c),C(s,26,22,1,l,u,c)):(S(s,4,10,-1,l,u,c),S(s,26,10,1,l,u,c)),r(s,y,v,8,4),a===5?(n(s,44,8,8,2,c),n(s,44,8,7,1,`#c8b88a`),n(s,44,12,8,2,c),n(s,44,13,7,1,`#c8b88a`),n(s,44,10,6,2,`#8c1a28`)):(n(s,44,9,8,3,c),n(s,45,10,6,1,`#c8b88a`));let d=a%2==0?0:1;return n(s,22+(d?-1:1),30,3,7,c),n(s,30+(d?1:-1),30,3,7,c),n(s,21+(d?-1:1),37,4,2,c),n(s,29+(d?1:-1),37,4,2,c),o}function x(e,t,r,i,a,o,s,c){let l=[[0,8,10,4],[2,4,8,4],[5,0,6,4]];c&&l.push([10,0,4,3]);for(let[c,u,d,f]of l){let l=i<0?t+(16-c-d):t+c;n(e,l-1,r+u-1,d+2,f+2,s),n(e,l,r+u,d,f,a),n(e,l,r+u+f-1,d,1,o)}}function S(e,t,r,i,a,o,s){for(let[c,l,u,d]of[[0,2,12,5],[4,0,8,2]]){let f=i<0?t+(16-c-u):t+c;n(e,f-1,r+l-1,u+2,d+2,s),n(e,f,r+l,u,d,a),n(e,f,r+l+d-1,u,1,o)}}function C(e,t,r,i,a,o,s){for(let[c,l,u,d]of[[0,0,10,4],[2,4,8,4],[5,8,6,3]]){let f=i<0?t+(16-c-u):t+c;n(e,f-1,r+l-1,u+2,d+2,s),n(e,f,r+l,u,d,a),n(e,f,r+l,u,1,o)}}function w(){return{dino:{walk:[p(0),p(1),p(2),p(3)],attack:[p(4),p(5)]},beetle:{walk:[_(0),_(1),_(2),_(3)],attack:[_(4),_(5)]},ptero:{walk:[b(0),b(1),b(2),b(3)],attack:[b(4),b(5)]}}}function ee(){let r=e(64,64),i=t(r);n(i,0,0,64,64,`#26262e`);let a=1234567,o=()=>(a=a*1103515245+12345&2147483647)/2147483647;for(let e=0;e<90;e++){let e=o()*64|0,t=o()*64|0,r=o();n(i,e,t,1,1,r<.5?`#2e2e38`:r<.8?`#22222a`:`#343440`)}return n(i,10,20,3,2,`#20202a`),n(i,44,50,4,2,`#20202a`),n(i,30,8,2,2,`#20202a`),n(i,0,31,10,2,`#8a8a5a`),n(i,22,31,10,2,`#8a8a5a`),n(i,44,31,10,2,`#8a8a5a`),n(i,50,12,1,4,`#1c1c24`),n(i,51,15,1,2,`#1c1c24`),n(i,16,44,3,1,`#1c1c24`),n(i,18,45,1,2,`#1c1c24`),r}function te(e){let t=e>>>0;return()=>(t=t*1103515245+12345&2147483647)/2147483647}i.outline;var ne=[`down`,`left`,`right`,`up`];function T(n,r,i,a,o,s){let c=e(s,s);return t(c).drawImage(n,r*a,i*o,a,o,0,0,s,s),c}function E(e,t,n,r,i){let a={};return ne.forEach((o,s)=>{a[o]=[];for(let c=0;c<t;c++)a[o].push(T(e,c,s,n,r,i))}),a}function re(e,t,n,r,i){let a=[];for(let o=0;o<t;o++)a.push(T(e,o,0,n,r,i));return a}function ie(e){return new Promise(t=>{let n=new Image;n.onload=()=>t(n),n.onerror=()=>t(null),n.src=e})}function D(n,r,i){let a=e(r,i);return t(a).drawImage(n,0,0,n.width,n.height,0,0,r,i),a}function O(n){let r=e(n.width,n.height),i=t(r);return i.translate(n.width,0),i.scale(-1,1),i.drawImage(n,0,0),r}function ae(){let e=s(),t=e.walk.slice(0,3).map(e=>D(e,64,64)),n=e.punch.map(e=>D(e,64,64));return{down:t,up:t,right:t,left:t.map(O),attack:{down:n,up:n,right:n,left:n.map(O)}}}function oe(){let e=w(),t=e=>{let t=e.slice(0,3).map(e=>D(e,64,64));return{down:t,up:t,right:t,left:t.map(O)}};return{slime:t(e.dino.walk),spider:t(e.beetle.walk),bat:t(e.ptero.walk),ghost:t(e.ptero.walk),skeleton:t(e.dino.walk)}}function se(){let e=w(),t=e=>D(e,192,192);return{move:[0,1,2,3,0,1,2,3].map(n=>t(e.dino.walk[n%4])),attack:[...e.dino.attack,...e.dino.walk.slice(0,3)].map(t)}}function k(){let r=(r,i,a)=>{let o=e(48,48),s=t(o);n(s,0,0,48,48,r);let c=te(a);for(let e=0;e<70;e++)n(s,c()*48|0,c()*48|0,1,1,i[c()*i.length|0]);return{c:o,g:s}},a=r(`#3a7a3e`,[`#35703a`,`#418646`,`#2e6234`],101),o=r(`#3a7a3e`,[`#35703a`,`#418646`],102);n(o.g,10,12,2,2,`#ffd94a`),n(o.g,30,28,2,2,`#e88ad0`),n(o.g,22,40,2,2,`#f4f4f4`);let s=r(`#7a5a3c`,[`#6e5034`,`#86644a`,`#654a30`],103),c=r(`#a8895c`,[`#9a7a50`,`#b8986a`],104),l=r(`#2f6ac8`,[`#2a5eb4`,`#3a78d8`],105),u=r(`#2f6ac8`,[`#2a5eb4`],106);n(u.g,8,14,10,1,`#7ab8ff`),n(u.g,26,30,10,1,`#7ab8ff`);let d=r(`#c84a1e`,[`#b43e16`,`#e86a2a`],107);n(d.g,12,12,6,3,`#ffd94a`),n(d.g,30,32,5,2,`#ffd94a`);let f=r(`#7a7d84`,[`#6e7178`,`#888b92`],108);for(let e=0;e<48;e+=12)n(f.g,0,e,48,1,`#4a4d54`);for(let e=0;e<48;e+=16)n(f.g,e,0,1,12,`#4a4d54`),n(f.g,e+8,12,1,12,`#4a4d54`),n(f.g,e,24,1,12,`#4a4d54`),n(f.g,e+8,36,1,12,`#4a4d54`);let p=(e,t)=>{let a=r(`#3a7a3e`,[`#35703a`,`#418646`],t);return n(a.g,14,6,20,20,i.outline),n(a.g,15,7,18,18,e),n(a.g,21,26,6,10,i.outline),n(a.g,22,27,4,8,`#6a4a2c`),a.c},m=r(`#3a7a3e`,[`#35703a`],111);for(let e=4;e<48;e+=12)n(m.g,e,10,4,28,i.outline),n(m.g,e+1,11,2,26,`#8a6a4a`);n(m.g,0,16,48,3,i.outline),n(m.g,0,17,48,1,`#9a7a56`),n(m.g,0,28,48,3,i.outline),n(m.g,0,29,48,1,`#9a7a56`);let h=e=>{let t=r(`#3a7a3e`,[`#35703a`],e);return n(t.g,18,26,12,10,i.outline),n(t.g,20,28,8,8,`#e8e0c8`),n(t.g,12,12,24,16,i.outline),n(t.g,14,14,20,12,`#d42a3c`),n(t.g,18,16,3,3,`#f4f4f4`),n(t.g,26,20,3,3,`#f4f4f4`),t.c};return{grass:[a.c,o.c],dirt:[s.c],path:[c.c],water:[l.c,u.c],lava:[d.c],tree:[p(`#2e6e38`,109),p(`#3f9048`,110)],wall:[f.c],fence:[m.c],mushroom:[h(112),h(113)]}}function ce(r){let a=e(32,32),o=t(a),s=i.outline;if(n(o,6,22,6,6,s),n(o,7,23,4,4,`#6a4a2c`),r===`sword`||r===`broadsword`||r===`swordSmall`||r===`knife`){let e=r===`knife`||r===`swordSmall`?10:16,t=r===`broadsword`?4:2;for(let r=0;r<e;r++)n(o,10+r,20-r,t,t,`#c0c5d0`);n(o,10,20,6,2,s)}else if(r===`axe`||r===`doubleAxe`){for(let e=0;e<14;e++)n(o,11+e,21-e,2,2,`#8a6a4a`);n(o,22,4,6,10,s),n(o,23,5,4,8,`#c0c5d0`),r===`doubleAxe`&&(n(o,16,4,6,10,s),n(o,17,5,4,8,`#c0c5d0`))}else if(r===`hammer`){for(let e=0;e<14;e++)n(o,11+e,21-e,2,2,`#8a6a4a`);n(o,20,2,10,8,s),n(o,21,3,8,6,`#8a8f9c`)}else if(r===`staff`||r===`wand`){for(let e=0;e<16;e++)n(o,10+e,22-e,2,2,`#6a4a2c`);n(o,24,2,6,6,s),n(o,25,3,4,4,r===`staff`?`#7de6ff`:`#ffd94a`)}else if(r===`torch`){for(let e=0;e<12;e++)n(o,11+e,21-e,2,2,`#6a4a2c`);n(o,22,2,6,8,`#e8702a`),n(o,24,4,3,4,`#ffd94a`)}return a}function le(){let e={};for(let t of Object.keys(A))e[t]=ce(t);return e}var A={sword:`weapon_sword`,axe:`weapon_axe`,hammer:`weapon_hammer`,staff:`weapon_staff`,wand:`weapon_wand`,knife:`weapon_knife`,broadsword:`weapon_broadsword`,doubleAxe:`weapon_double_axe`,swordSmall:`weapon_sword_small`,torch:`weapon_torch`},j={slime:`enemy_slime`,spider:`enemy_spider`,bat:`enemy_bat`,ghost:`enemy_ghost`,skeleton:`enemy_skeleton`};async function ue(){let e=[`tiga_hero`,`tiga_hero_attack`,`hero_main`,`hero_main_attack`,...Object.values(j),`boss_gargant_move`,`boss_gargant_attack`,`tile_grass`,`tile_grass_flower`,`tile_dirt`,`tile_path`,`tile_water`,`tile_water_wave`,`tile_lava`,`tile_wall_stone`,`deco_tree_yellow`,`deco_tree_green`,`deco_bush`,`deco_pine`,`deco_mushroom`,`deco_mushroom_small`,`deco_fence_h`,...Object.values(A)],t={};await Promise.all(e.map(async e=>{t[e]=await ie(`./assets/sprites/${e}.png`)}));let n={hero:ae(),monsters:oe(),boss:se(),tiles:k(),weapons:le()},r=t.tiga_hero||t.hero_main,i=t.tiga_hero_attack||t.hero_main_attack,a=n.hero;r&&(a=E(r,3,16,16,64),a.attack=i?E(i,2,16,16,64):n.hero.attack);let o={};for(let e of Object.keys(j)){let r=t[j[e]];o[e]=r?E(r,3,16,16,64):n.monsters[e]}let s={move:t.boss_gargant_move?re(t.boss_gargant_move,8,64,64,192):n.boss.move,attack:t.boss_gargant_attack?re(t.boss_gargant_attack,5,64,64,192):n.boss.attack},c=e=>t[e]?T(t[e],0,0,16,16,48):null,l={grass:[c(`tile_grass`),c(`tile_grass_flower`)].filter(Boolean),dirt:[c(`tile_dirt`)].filter(Boolean),path:[c(`tile_path`)].filter(Boolean),water:[c(`tile_water`),c(`tile_water_wave`)].filter(Boolean),lava:[c(`tile_lava`)].filter(Boolean),tree:[c(`deco_tree_yellow`),c(`deco_tree_green`),c(`deco_pine`),c(`deco_bush`)].filter(Boolean),wall:[c(`tile_wall_stone`)].filter(Boolean),fence:[c(`deco_fence_h`)].filter(Boolean),mushroom:[c(`deco_mushroom`),c(`deco_mushroom_small`)].filter(Boolean)};for(let e of Object.keys(l))l[e].length===0&&(l[e]=n.tiles[e]);let u={};for(let e of Object.keys(A)){let r=t[A[e]];u[e]=r?T(r,0,0,16,16,32):n.weapons[e]}return{hero:a,monsters:o,boss:s,tiles:l,weapons:u,ground:ee()}}var M=2e3,N=48,P=Math.ceil(M/N),de=200,fe=48,pe=14,me=0,he=1,ge=2,_e=3,ve=4,ye=0,be=1,xe=2,Se=3,Ce=4,we=5,Te=[`#3a7a3e`,`#7a5c3a`,`#9a7b4f`,`#2a5f9e`,`#c1441c`],Ee=[`#2a5f9e`,`#c1441c`,`#2e5d2a`,`#b03a3a`,`#8a6b45`,`#6f7278`];function De(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Oe(e){let t=e&&e.tiles||{},n={cells:new Uint8Array(P*P),buildings:[],staticObjects:[]},r=(e,t)=>t*P+e,i=(e,t)=>e>=0&&t>=0&&e<P&&t<P;function a(e){let t=De(e>>>0),a=new Uint8Array(P*P),o=[],s=M/2-de-fe,c=1248;function l(e,t){let n=e*N,r=t*N;return n<c&&n+N>s&&r<c&&r+N>s}let u=Array(9).fill(`meadow`),d=[0,1,2,3,5,6,7,8];for(let e=d.length-1;e>0;e--){let n=Math.floor(t()*(e+1)),r=d[e];d[e]=d[n],d[n]=r}u[d[0]]=`forest`,u[d[1]]=`forest`,u[d[2]]=`waste`,u[d[3]]=`waste`;function f(e,t){let n=Math.min(2,Math.floor(e/pe)),r=Math.min(2,Math.floor(t/pe));return u[r*3+n]}for(let e=0;e<P;e++)for(let n=0;n<P;n++)f(n,e)===`waste`&&(a[r(n,e)]=t()<.85?he:me);let p=3+Math.floor(t()*3);for(let e=0;e<p;e++){let e=2+Math.floor(t()*(P-4)),n=2+Math.floor(t()*(P-4));if(l(e,n))continue;let i=(f(e,n)===`waste`?t()<.6:t()<.2)?ve:_e,o=2+t()*2.5,s=2+t()*2.5,c=Math.max(0,Math.floor(e-o-1)),u=Math.min(P-1,Math.ceil(e+o+1)),d=Math.max(0,Math.floor(n-s-1)),p=Math.min(P-1,Math.ceil(n+s+1));for(let f=d;f<=p;f++)for(let d=c;d<=u;d++){let c=(d-e)/o,u=(f-n)/s;c*c+u*u<.7+t()*.4&&!l(d,f)&&(a[r(d,f)]=i)}}let m=Math.floor(P/2),h=4+Math.floor(t()*3);for(let e=0;e<h;e++){let e=m,n=m,o=t()*Math.PI*2,s=30+Math.floor(t()*40);for(let c=0;c<s&&i(e,n);c++){let s=a[r(e,n)];if(s===_e||s===ve)break;if(a[r(e,n)]=ge,t()<.3){let o=e+(t()<.5?1:-1),s=n+(t()<.5?1:-1);i(o,s)&&a[r(o,s)]!==_e&&a[r(o,s)]!==ve&&(a[r(o,s)]=ge)}if(o+=(t()-.5)*.9,e+=Math.round(Math.cos(o)),n+=Math.round(Math.sin(o)),e<1||n<1||e>=P-1||n>=P-1)break}}function g(e,t,n,r){o.push({x:e*N,y:t*N,w:N,h:N,spriteIndex:n*10+(r|0)})}for(let e=0;e<P;e++)for(let t=0;t<P;t++){let n=a[r(t,e)];n===_e?g(t,e,ye,(t*7+e*13)%2):n===ve&&g(t,e,be,0)}for(let e=0;e<P;e++)for(let n=0;n<P;n++){let i=a[r(n,e)];if(i!==me&&i!==he||l(n,e))continue;let o=f(n,e),s=t();o===`forest`?s<.32?g(n,e,xe,Math.floor(t()*3)):s<.36&&g(n,e,Se,Math.floor(t()*2)):o===`waste`?s<.03?g(n,e,xe,Math.floor(t()*3)):s<.09&&g(n,e,Se,Math.floor(t()*2)):s<.05?g(n,e,xe,Math.floor(t()*3)):s<.065&&g(n,e,Se,Math.floor(t()*2))}let _=1+Math.floor(t()*3);for(let e=0;e<_;e++){let e=4+Math.floor(t()*5),n=4+Math.floor(t()*5),i=1+Math.floor(t()*(P-e-2)),o=1+Math.floor(t()*(P-n-2));if(f(i+(e>>1),o+(n>>1))!==`meadow`)continue;let s=!1;for(let t=o;t<o+n&&!s;t++)for(let n=i;n<i+e&&!s;n++)l(n,t)&&(s=!0);if(s)continue;let c=Math.floor(t()*4),u=1+Math.floor(t()*((c<2?e:n)-2)),d=1+Math.floor(t()*2);for(let t=o;t<o+n;t++)for(let s=i;s<i+e;s++){let l=t===o||t===o+n-1,f=s===i||s===i+e-1;if(!l&&!f||c===0&&t===o&&s-i>=u&&s-i<u+d||c===1&&t===o+n-1&&s-i>=u&&s-i<u+d||c===2&&s===i&&t-o>=u&&t-o<u+d||c===3&&s===i+e-1&&t-o>=u&&t-o<u+d)continue;let p=a[r(s,t)];p!==me&&p!==he||g(s,t,Ce,+!l)}}let v=1+Math.floor(t()*2);for(let e=0;e<v;e++){let e=2+Math.floor(t()*(P-10)),n=2+Math.floor(t()*(P-10));if(f(e,n)!==`waste`)continue;let o=t()<.5,s=3+Math.floor(t()*4);for(let c=0;c<s;c++){let s=e+(o?c:0),u=n+(o?0:c);if(!i(s,u)||l(s,u))break;let d=a[r(s,u)];if(d!==he&&d!==me)break;g(s,u,we,Math.floor(t()*2))}}n.cells=a,n.buildings.length=0;for(let e of o)n.buildings.push(e);n.staticObjects.length=0;for(let e of n.buildings)n.staticObjects.push({x:e.x+e.w/2,z:e.y+e.h/2,r:Math.max(e.w,e.h)/2})}a(Math.random()*2147483647|0);function o(){a(Math.random()*2147483647|0)}let s=()=>[t.grass,t.dirt,t.path,t.water,t.lava];function c(e,t,n){let r=s()[e];return!r||!r.length?null:r[(t*7+n*13)%r.length]}let l=()=>[t.water,t.lava,t.tree,t.mushroom,t.fence,t.wall];function u(e){let t=Math.floor(e/10),n=e%10,r=l()[t];return!r||!r.length?null:r[n%r.length]}function d(e,t){e.save(),e.translate(-t.x,-t.y);let i=e.canvas.width,a=e.canvas.height,o=t.x,s=t.y,l=o+i,d=s+a,f=Math.max(0,Math.floor(o/N)),p=Math.max(0,Math.floor(s/N)),m=Math.min(P-1,Math.floor(l/N)),h=Math.min(P-1,Math.floor(d/N));for(let t=p;t<=h;t++)for(let i=f;i<=m;i++){let a=n.cells[r(i,t)],o=i*N,s=t*N,l=c(a,i,t);l?e.drawImage(l,o,s,N,N):(e.fillStyle=Te[a],e.fillRect(o,s,N,N))}for(let t of n.buildings){if(t.x+t.w<o||t.x>l||t.y+t.h<s||t.y>d)continue;let n=Math.floor(t.spriteIndex/10);if(n===ye||n===be)continue;e.fillStyle=`rgba(0, 0, 0, 0.25)`,e.fillRect(t.x+4,t.y+t.h-8,t.w-8,6);let r=u(t.spriteIndex);r?e.drawImage(r,t.x,t.y,t.w,t.h):(e.fillStyle=Ee[n]||`#4a4f5a`,e.fillRect(t.x,t.y,t.w,t.h),e.strokeStyle=`#23262e`,e.lineWidth=3,e.strokeRect(t.x+1.5,t.y+1.5,t.w-3,t.h-3))}e.restore()}function f(e,t,r){e<r?e=r:e>M-r&&(e=M-r),t<r?t=r:t>M-r&&(t=M-r);for(let i of n.buildings){if(e+r<i.x||e-r>i.x+i.w||t+r<i.y||t-r>i.y+i.h)continue;let n=Math.max(i.x,Math.min(e,i.x+i.w)),a=Math.max(i.y,Math.min(t,i.y+i.h)),o=e-n,s=t-a,c=o*o+s*s;if(!(c>=r*r)){if(c>1e-6){let n=Math.sqrt(c),i=(r-n)/n;e+=o*i,t+=s*i}else{let n=e-i.x+r,a=i.x+i.w-e+r,o=t-i.y+r,s=i.y+i.h-t+r,c=Math.min(n,a,o,s);c===n?e=i.x-r:c===a?e=i.x+i.w+r:t=c===o?i.y-r:i.y+i.h+r}e<r?e=r:e>M-r&&(e=M-r),t<r?t=r:t>M-r&&(t=M-r)}}return{x:e,y:t}}return{size:M,buildings:n.buildings,draw:d,collide:f,staticObjects:n.staticObjects,regenerate:o}}var ke={slime:{hp:50,speed:55,radius:20,damage:12,cd:1.5},spider:{hp:45,speed:95,radius:18,damage:12,cd:1.3},bat:{hp:35,speed:110,radius:16,damage:10,cd:1.2},ghost:{hp:55,speed:70,radius:18,damage:14,cd:1.6},skeleton:{hp:80,speed:60,radius:20,damage:16,cd:1.7}},Ae=[`slime`,`spider`,`bat`,`ghost`,`skeleton`],je=26,Me=.5,Ne=.4,Pe=.3,Fe=.15,Ie=.8,Le=1.2,Re=8,ze=2e3,Be=500,Ve=900,He=64,Ue=192,We=600,Ge=80,Ke=40,qe=70,Je=25,Ye=70,Xe=.8,Ze=250,Qe=.3,$e=1,et=120,tt=18,nt=1.5,rt=.4,it={slime:`#4a4`,spider:`#a4a`,bat:`#44a`,ghost:`#dde`,skeleton:`#ccb`,gargant:`#a52`};function at(e,t,n){return Math.abs(e)<2&&Math.abs(t)<2?n:Math.abs(e)>=Math.abs(t)?e>0?`right`:`left`:t>0?`down`:`up`}function ot(e,t,n,r=null){let i=r||ke[e],a=!!r;return{x:t,y:n,hp:i.hp,maxHp:i.hp,alive:!0,radius:i.radius,type:e,isBoss:a,pendingHit:0,shockwave:!1,speed:i.speed,damage:i.damage,state:`chase`,windup:0,windupTotal:Me,recover:0,cooldown:0,hitCommitted:!1,flash:0,deathTimer:0,animTime:Math.random(),facing:`down`,takeDamage(e){return this.alive?(this.hp-=e,this.flash=Fe,this.hp<=0?(this.hp=0,this.alive=!1,this.state=`dying`,this.deathTimer=this.isBoss?Le:Ie,this.pendingHit=0,!0):(!this.isBoss&&(this.state===`windup`||this.state===`shockwindup`)&&(this.state=`recover`,this.recover=Ne*.5,this.cooldown=i.cd+Math.random()*Pe,this.hitCommitted=!1),!1)):!1},update(e,t,n,r){if(this.flash>0&&(this.flash-=e),this.cooldown>0&&(this.cooldown-=e),this.state===`dying`){this.deathTimer-=e;return}let a=t.x-this.x,o=t.y-this.y,s=Math.hypot(a,o)||1;if(this.isBoss||(this.facing=at(a,o,this.facing)),this.state===`windup`){if(this.windup-=e,this.windup<=0){let e=this.isBoss?Ye:this.radius+je;!this.hitCommitted&&s<=e+8&&(this.pendingHit=this.damage,this.hitCommitted=!0),this.cooldown=(this.isBoss?nt:i.cd)+Math.random()*Pe,this.state=`recover`,this.recover=Ne}return}if(this.state===`shockwindup`){this.windup-=e,this.windup<=0&&(this.shockwave=!0,s<=et&&(this.pendingHit=tt),this.cooldown=nt+Math.random()*Pe,this.state=`recover`,this.recover=Ne);return}if(this.state===`recover`){this.recover-=e,this.recover<=0&&(this.state=`chase`);return}if(this.isBoss){if(s<Ye){if(this.cooldown>0)return;this.state=`windup`,this.windup=Xe,this.windupTotal=Xe,this.hitCommitted=!1;return}if(s<=Ze&&this.cooldown<=0){if(Math.random()<Qe){this.state=`shockwindup`,this.windup=$e,this.windupTotal=$e,this.hitCommitted=!1;return}this.cooldown=rt}}else if(s<=this.radius+je){if(this.cooldown>0)return;this.state=`windup`,this.windup=Me,this.windupTotal=Me,this.hitCommitted=!1;return}let c=a/s*this.speed*e,l=o/s*this.speed*e;if(this.animTime+=e,r)for(let e of r){if(e===this||!e.alive)continue;let t=this.x-e.x,n=this.y-e.y,r=Math.hypot(t,n),i=this.radius+e.radius;if(r>0&&r<i){let a=this.isBoss?.15:e.isBoss?1:.5,o=(i-r)*a;c+=t/r*o,l+=n/r*o}}let u=n.collide(this.x+c,this.y+l,this.radius);this.x=u.x,this.y=u.y}}}function st(e,t){if(t.isBoss){let n=e.boss;if(n){if((t.state===`windup`||t.state===`shockwindup`)&&n.attack&&n.attack.length){let e=1-Math.max(0,t.windup)/t.windupTotal,r=Math.min(n.attack.length-1,Math.floor(e*n.attack.length));return n.attack[r]}if(n.move&&n.move.length)return n.move[Math.floor(t.animTime*Re)%n.move.length]}return null}let n=e.monsters&&e.monsters[t.type];if(n){let e=n[t.facing]||n.down;if(e&&e.length)return t.state===`windup`?e[Math.min(1,e.length-1)]:e[Math.floor(t.animTime*Re)%e.length];if(n.walk&&n.walk.length)return t.state===`windup`&&n.attack&&n.attack.length?t.windup>t.windupTotal/2?n.attack[0]:n.attack[n.attack.length-1]:n.walk[Math.floor(t.animTime*Re)%n.walk.length]}return null}var ct=class{constructor(e){this.sprites=e,this.monsters=[]}spawnWave(e,t){let n=Math.min(1+e,8);for(let r=0;r<n;r++){let n=Ae[(e+r)%Ae.length];this.monsters.push(this._spawnAt(n,t))}}spawnBoss(e,t){let n=We+e*Ge,r=this._spawnAt(`gargant`,t,{hp:n,speed:qe,radius:Ke,damage:Je,cd:nt});this.monsters.push(r);for(let e=0;e<2;e++){let e=Ae[Math.floor(Math.random()*Ae.length)];this.monsters.push(this._spawnAt(e,t))}return r}_spawnAt(e,t,n=null){let r=t?t.x:ze/2,i=t?t.y:ze/2,a=Math.random()*Math.PI*2,o=Be+Math.random()*(Ve-Be),s=ot(e,r+Math.cos(a)*o,i+Math.sin(a)*o,n);return s.x=Math.max(s.radius,Math.min(ze-s.radius,s.x)),s.y=Math.max(s.radius,Math.min(ze-s.radius,s.y)),s}update(e,t,n){for(let r of this.monsters)r.update(e,t,n,this.monsters);this.monsters=this.monsters.filter(e=>e.state!==`dying`||e.deathTimer>0)}aliveCount(){let e=0;for(let t of this.monsters)t.alive&&e++;return e}clear(){this.monsters=[]}draw(e,t){e.save(),e.translate(-t.x,-t.y);for(let t of this.monsters){let n=t.state===`dying`,r=t.isBoss?Ue:He;if(e.save(),n){let n=t.isBoss?Le:Ie;e.globalAlpha=Math.max(0,t.deathTimer/n)}e.fillStyle=`rgba(0, 0, 0, 0.35)`,e.beginPath(),e.ellipse(t.x,t.y+2,t.radius*.9,t.radius*.35,0,0,Math.PI*2),e.fill();let i=st(this.sprites,t);e.translate(t.x,t.y),t.flash>0&&(e.filter=`brightness(400%) saturate(0%)`);let a=r;if(i){let t=r,n=r*(i.height/i.width);a=n,e.drawImage(i,-t/2,-n,t,n)}else e.fillStyle=it[t.type]||`#888`,e.fillRect(-r/2,-r,r,r),e.fillStyle=`#000`,e.fillRect(-r/4,-r*.75,r/8,r/8),e.fillRect(r/8,-r*.75,r/8,r/8);if(e.filter=`none`,e.restore(),t.alive&&t.hp<t.maxHp){let n=t.isBoss?t.radius*2.4:t.radius*2,r=t.isBoss?7:5,i=t.x-n/2,o=t.y-a-8,s=t.hp/t.maxHp;e.fillStyle=`#111`,e.fillRect(i-1,o-1,n+2,r+2),e.fillStyle=`#400`,e.fillRect(i,o,n,r),e.fillStyle=t.isBoss?`#c4e`:s>.5?`#4c4`:s>.25?`#ec4`:`#e44`,e.fillRect(i,o,Math.max(1,n*s),r)}}e.restore()}},lt=Math.PI/3,ut=500,dt=18,ft=.7,pt=64,mt=24,ht=1,gt=.25,_t=400,vt=20,yt=.5,bt=.6,xt=[{color:`#2266ff`,width:dt,alpha:.55},{color:`#55aaff`,width:dt*.66,alpha:.85},{color:`#eeffff`,width:dt*.36,alpha:1}],St=class{constructor(){this.effects=[]}meleeHit(e,t,n,r,i,a){let o=[],s=Math.hypot(n,r),c=s>1e-6?n/s:1,l=s>1e-6?r/s:0,u=Math.cos(lt);for(let n of a){if(!n||!n.alive)continue;let r=n.x-e,a=n.y-t,s=Math.hypot(r,a);if(!(s>i+n.radius)){if(s<1e-4){o.push(n);continue}(r*c+a*l)/s>=u&&o.push(n)}}return o}fireBeam(e,t,n,r,i,a){let o=Math.hypot(n,r),s=o>1e-6?n/o:1,c=o>1e-6?r/o:0;this.effects.push({kind:`beam`,x:e,y:t,dirX:s,dirY:c,age:0,duration:ft});let l=0;for(let n of i){if(!n||!n.alive)continue;let r=n.x-e,i=n.y-pt-t,o=Math.max(0,Math.min(ut,r*s+i*c)),u=r-s*o,d=i-c*o;if(Math.hypot(u,d)<=dt/2+n.radius+mt){l++;let e=n.takeDamage(a);this.explode(n.x,n.y-pt,e?`#ff5522`:`#88ccff`,e?1.5:1)}}return l}explode(e,t,n=`#ffaa33`,r=1){let i=24+Math.floor(Math.random()*21),a=[];for(let n=0;n<i;n++){let n=Math.random()*Math.PI*2,i=(90+Math.random()*140)*r;a.push({x:e,y:t,vx:Math.cos(n)*i,vy:Math.sin(n)*i-60*r,s:Math.max(2,Math.round((3+Math.random()*5)*r))})}this.effects.push({kind:`explosion`,color:n,age:0,duration:ht,particles:a})}slash(e,t,n,r,i){let a=Math.hypot(n,r),o=a>1e-6?n/a:1,s=a>1e-6?r/a:0;this.effects.push({kind:`slash`,x:e,y:t,dirX:o,dirY:s,range:i,age:0,duration:gt})}fireDisc(e,t,n,r,i,a){let o=Math.hypot(n,r),s=o>1e-6?n/o:1,c=o>1e-6?r/o:0;this.effects.push({kind:`disc`,x:e,y:t,dirX:s,dirY:c,age:0,duration:yt});let l=0;for(let n of i){if(!n||!n.alive)continue;let r=n.x-e,i=n.y-pt-t,o=Math.max(0,Math.min(_t,r*s+i*c)),u=r-s*o,d=i-c*o;if(Math.hypot(u,d)<=vt+n.radius){l++;let e=n.takeDamage(a);this.explode(n.x,n.y-pt,e?`#ff5522`:`#66ffee`,e?1.5:.8)}}return l}shockwave(e,t,n){this.effects.push({kind:`shockwave`,x:e,y:t,maxR:n,age:0,duration:bt})}update(e){for(let t=this.effects.length-1;t>=0;t--){let n=this.effects[t];if(n.age+=e,n.kind===`explosion`){let t=Math.max(0,1-2.2*e);for(let r of n.particles)r.x+=r.vx*e,r.y+=r.vy*e,r.vx*=t,r.vy*=t,r.vy+=30*e}n.age>=n.duration&&this.effects.splice(t,1)}}draw(e,t){if(this.effects.length!==0){e.save(),e.translate(-t.x,-t.y),e.imageSmoothingEnabled=!1;for(let t of this.effects){let n=t.age/t.duration;t.kind===`beam`?this._drawBeam(e,t,n):t.kind===`explosion`?this._drawExplosion(e,t,n):t.kind===`slash`?this._drawSlash(e,t,n):t.kind===`disc`?this._drawDisc(e,t,n):t.kind===`shockwave`&&this._drawShockwave(e,t,n)}e.restore()}}_drawBeam(e,t,n){let r=Math.max(0,1-n),i=.7+.3*Math.sin(t.age*60),a=Math.round(1+Math.sin(t.age*40));e.save(),e.translate(t.x,t.y),e.rotate(Math.atan2(t.dirY,t.dirX));for(let t of xt){let n=Math.max(2,Math.round(t.width)+a);e.globalAlpha=t.alpha*r*i,e.fillStyle=t.color,e.fillRect(0,-Math.floor(n/2),ut,n)}e.globalAlpha=r*i,e.fillStyle=`#eeffff`,e.fillRect(ut-6,-18/2,6,dt),e.fillStyle=`#55aaff`,e.fillRect(-12,-12,24,24),e.fillStyle=`#eeffff`,e.fillRect(-6,-6,12,12),e.globalAlpha=1,e.restore()}_drawExplosion(e,t,n){e.globalAlpha=Math.max(0,1-n),e.fillStyle=t.color;for(let r of t.particles){let t=Math.max(1,Math.round(r.s*(1-.6*n)));e.fillRect(Math.round(r.x-t/2),Math.round(r.y-t/2),t,t)}e.globalAlpha=1}_drawSlash(e,t,n){let r=Math.max(0,1-n),i=Math.PI/3,a=-i+2*i*n,o=t.range*(.75+.25*n);e.save(),e.translate(t.x,t.y),e.rotate(Math.atan2(t.dirY,t.dirX)),e.globalAlpha=.45*r,e.strokeStyle=`#33ddcc`,e.lineWidth=14,e.beginPath(),e.arc(0,0,o,-i,a),e.stroke(),e.globalAlpha=.9*r,e.strokeStyle=`#ccffff`,e.lineWidth=6,e.beginPath(),e.arc(0,0,o,-i,a),e.stroke(),e.fillStyle=`#aaffee`;for(let t=0;t<6;t++){let n=-i+(a+i)*(t/6),s=o+(t%2?10:-10),c=3+t%3;e.globalAlpha=r*(.4+t/6*.6),e.fillRect(Math.round(Math.cos(n)*s-c/2),Math.round(Math.sin(n)*s-c/2),c,c)}e.globalAlpha=1,e.restore()}_drawDisc(e,t,n){let r=Math.max(0,1-n*n),i=Math.min(_t,_t*(t.age/yt)),a=t.x+t.dirX*i,o=t.y+t.dirY*i,s=t.age*20;e.save(),e.translate(a,o),e.globalAlpha=.5*r,e.strokeStyle=`#33ddcc`,e.lineWidth=8,e.beginPath(),e.arc(0,0,vt,0,Math.PI*2),e.stroke(),e.globalAlpha=.95*r,e.fillStyle=`#eeffff`,e.beginPath(),e.arc(0,0,7,0,Math.PI*2),e.fill(),e.fillStyle=`#88ffee`;for(let t=0;t<4;t++){let n=s+Math.PI/2*t;e.save(),e.rotate(n),e.fillRect(4,-2,24,4),e.restore()}e.fillStyle=`#66ffee`;for(let n=1;n<=3;n++){e.globalAlpha=r*.3*(1-n/4);let i=-t.dirX*n*10,a=-t.dirY*n*10,o=6-n;e.fillRect(Math.round(i-o/2),Math.round(a-o/2),o,o)}e.globalAlpha=1,e.restore()}_drawShockwave(e,t,n){let r=Math.max(0,1-n),i=Math.max(1,t.maxR*n);e.save(),e.translate(t.x,t.y),e.scale(1,.45),e.globalAlpha=.55*r,e.strokeStyle=`#ffcc66`,e.lineWidth=10,e.beginPath(),e.arc(0,0,i,0,Math.PI*2),e.stroke();let a=Math.max(1,i*.7);e.globalAlpha=.8*r,e.strokeStyle=`#fff2cc`,e.lineWidth=4,e.beginPath(),e.arc(0,0,a,0,Math.PI*2),e.stroke(),e.fillStyle=`#ffdd88`;for(let a=0;a<8;a++){let o=Math.PI*2*a/8+t.age*2,s=Math.max(2,Math.round(5*(1-n)));e.globalAlpha=r*.8,e.fillRect(Math.round(Math.cos(o)*i-s/2),Math.round(Math.sin(o)*i-s/2),s,s)}e.globalAlpha=1,e.restore()}};function Ct(){let e=document.getElementById(`hud`);if(!e)throw Error(`hud.js: 找不到 #hud 容器，请检查 index.html`);let t=document.createElement(`style`);t.textContent=`
    /* ===== 像素风通用面板 ===== */
    .hud-panel {
      position: absolute;
      background: rgba(10, 10, 18, 0.82);
      border: 2px solid #c8c8d8;            /* 浅色硬边外框 */
      box-shadow: 0 0 0 2px #181828, 4px 4px 0 0 rgba(0,0,0,0.6); /* 内描边+硬投影 */
      border-radius: 0;                     /* 无圆角，硬边像素感 */
      color: #e8e8f0;
      font-family: "Courier New", ui-monospace, monospace;
      box-sizing: border-box;
      image-rendering: pixelated;
    }

    /* ===== 左上：血条 + 能量条 ===== */
    #hud-status { left: 16px; top: 16px; width: 264px; padding: 10px 12px; }
    .hud-bar-row { margin-bottom: 8px; }
    .hud-bar-row:last-child { margin-bottom: 0; }
    .hud-bar-label {
      font-size: 12px; letter-spacing: 2px; margin-bottom: 3px;
      display: flex; justify-content: space-between;
      font-weight: bold; text-shadow: 2px 2px 0 #000;
    }
    .hud-bar-outer {
      height: 16px;
      border: 2px solid #000;
      box-shadow: inset 0 0 0 1px #555;
      background: #181818;
      position: relative;
    }
    .hud-bar-fill {
      height: 100%;
      /* 硬边分格：线性渐变制造每 8% 一格的黑色分缝线 */
      background-repeat: no-repeat;
      background-image: linear-gradient(90deg, rgba(0,0,0,0.85) 1px, transparent 1px);
      background-size: 12.5% 100%;
      transition: width 0.1s steps(8);     /* 阶梯式变化，更像老式游戏 */
    }
    #hud-hp-fill {
      background-color: #e02038;           /* 红色血条 */
      border-right: 2px solid #ff8899;
    }
    #hud-energy-fill {
      background-color: #2868e0;           /* 蓝色能量条 */
      border-right: 2px solid #88bbff;
    }
    /* v3 新增：黄色 XP 条（血条下方）+ 等级数字 */
    #hud-xp-fill {
      background-color: #ffd840;           /* 黄色 XP 条 */
      border-right: 2px solid #fff0a8;
    }
    #hud-xp-outer { height: 10px; }        /* XP 条比血/能量条略矮 */
    #hud-level-num { color: #ffd840; }     /* 等级数字（标签右侧） */
    /* 低血量闪烁动画（阶梯闪烁，复古感） */
    @keyframes hudHpBlink {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0.4; }
    }
    .hud-low-hp { animation: hudHpBlink 0.5s steps(2) infinite; }
    .hud-low-hp .hud-bar-label span { color: #ff5566; }

    /* ===== 右上：分数与波次 ===== */
    #hud-score { right: 16px; top: 16px; padding: 10px 14px; text-align: right; min-width: 150px; }
    #hud-score-num {
      font-size: 20px; font-weight: bold; letter-spacing: 1px;
      color: #ffd840; text-shadow: 2px 2px 0 #000;
    }
    #hud-wave-num {
      font-size: 13px; margin-top: 3px; color: #9fd4ff;
      letter-spacing: 2px; text-shadow: 2px 2px 0 #000;
    }

    /* ===== 中央大字提示 ===== */
    #hud-message {
      position: absolute; left: 50%; top: 30%;
      transform: translate(-50%, -50%);
      font-family: "Courier New", ui-monospace, monospace;
      font-size: 42px; font-weight: bold; letter-spacing: 8px;
      color: #fff;
      text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
                   0 0 12px rgba(255, 216, 64, 0.8);
      opacity: 0; pointer-events: none; white-space: nowrap;
      transition: opacity 0.15s steps(4), transform 0.15s steps(4);
    }
    #hud-message.hud-msg-show { opacity: 1; transform: translate(-50%, -50%) scale(1.03); }

    /* ===== 左下：操作说明 ===== */
    #hud-help {
      left: 16px; bottom: 16px; padding: 7px 12px;
      font-size: 12px; letter-spacing: 1px; color: #c8c8d8;
      text-shadow: 1px 1px 0 #000; line-height: 1.5;
    }

    /* ===== v3 新增：左下武器图标栏（位于操作说明上方） ===== */
    #hud-weapons {
      left: 16px; bottom: 64px; padding: 5px 8px;
      display: none;                       /* 无武器时隐藏 */
      gap: 6px; align-items: center;
    }
    #hud-weapons.hud-weapons-show { display: flex; }
    .hud-weapon-slot {
      width: 40px; height: 40px;
      border: 2px solid #000;
      box-shadow: inset 0 0 0 1px #555;
      background: #181818;
      display: flex; align-items: center; justify-content: center;
    }
    .hud-weapon-slot canvas {
      width: 32px; height: 32px;
      image-rendering: pixelated;          /* 硬边像素放大 */
    }

    /* ===== v3 新增：屏幕顶部中央 Boss 血条（紫色，带 BOSS 字样） ===== */
    #hud-boss {
      left: 50%; top: 14px; transform: translateX(-50%);
      width: min(520px, 60vw); padding: 8px 12px;
      display: none; text-align: center;
      z-index: 6;
    }
    #hud-boss.hud-boss-show { display: block; }
    #hud-boss-label {
      font-size: 13px; font-weight: bold; letter-spacing: 6px;
      color: #d8a0ff; text-shadow: 2px 2px 0 #000;
      margin-bottom: 4px;
    }
    #hud-boss-fill {
      background-color: #9a30e0;           /* 紫色 Boss 血条 */
      border-right: 2px solid #d8a0ff;
    }
    /* Boss 血条呼吸微光 */
    @keyframes hudBossGlow {
      0%, 100% { box-shadow: 0 0 0 2px #181828, 4px 4px 0 0 rgba(0,0,0,0.6), 0 0 8px rgba(154,48,224,0.4); }
      50%      { box-shadow: 0 0 0 2px #181828, 4px 4px 0 0 rgba(0,0,0,0.6), 0 0 16px rgba(154,48,224,0.8); }
    }
    #hud-boss.hud-boss-show { animation: hudBossGlow 1.2s steps(4) infinite; }

    /* ===== v3 新增：升级选择面板（全屏暂停，3 张可点击卡片） ===== */
    #hud-levelup {
      position: absolute; inset: 0;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      background: rgba(4, 4, 10, 0.82);
      opacity: 0; pointer-events: none;
      transition: opacity 0.15s steps(3);
      z-index: 9;                          /* 低于结算(10)，高于暂停(8) */
    }
    #hud-levelup.hud-lu-show { opacity: 1; pointer-events: auto; } /* 卡片可点击 */
    #hud-lu-title {
      font-size: 30px; font-weight: bold; letter-spacing: 10px;
      color: #ffd840; margin-bottom: 26px;
      text-shadow: 3px 3px 0 #000, 0 0 14px rgba(255, 216, 64, 0.8);
    }
    #hud-lu-cards { display: flex; gap: 22px; }
    .hud-lu-card {
      pointer-events: auto;                /* 关键：卡片可点击 */
      cursor: pointer;
      width: 180px; padding: 18px 14px 16px;
      text-align: center;
      position: relative;
      background: rgba(10, 10, 18, 0.95);
      border: 2px solid #c8c8d8;
      box-shadow: 0 0 0 2px #181828, 4px 4px 0 0 rgba(0,0,0,0.6);
      border-radius: 0;
      overflow: hidden;
      transition: background 0.1s steps(2), transform 0.05s;
    }
    /* 卡片扫描线点缀 */
    .hud-lu-card::after {
      content: ''; position: absolute; inset: 0; pointer-events: none;
      background: repeating-linear-gradient(0deg,
        rgba(0,0,0,0.2) 0 1px, transparent 1px 3px);
    }
    .hud-lu-card:hover {
      background: #2a2a44;
      border-color: #ffd840;
      transform: translateY(-4px);
    }
    .hud-lu-card:active { transform: translate(2px, 0); }
    .hud-lu-key {
      position: absolute; left: 8px; top: 6px;
      font-size: 13px; font-weight: bold; color: #9fd4ff;
      text-shadow: 1px 1px 0 #000; z-index: 1;
    }
    .hud-lu-icon {
      display: block; margin: 0 auto 10px;
      width: 48px; height: 48px;
      image-rendering: pixelated;
      background: #181818;
      border: 2px solid #000;
      box-shadow: inset 0 0 0 1px #555;
    }
    .hud-lu-name {
      font-size: 15px; font-weight: bold; letter-spacing: 2px;
      color: #ffd840; text-shadow: 2px 2px 0 #000;
      margin-bottom: 8px;
    }
    .hud-lu-desc {
      font-size: 12px; line-height: 1.6; letter-spacing: 1px;
      color: #c8c8d8; text-shadow: 1px 1px 0 #000;
    }
    #hud-lu-tip {
      margin-top: 22px; font-size: 13px; letter-spacing: 3px;
      color: #9fd4ff; text-shadow: 2px 2px 0 #000;
    }

    /* ===== v3 新增：右下角素材署名小字（小地图上方右对齐） ===== */
    #hud-credit {
      position: absolute; right: 16px; bottom: 186px;
      font-family: "Courier New", ui-monospace, monospace;
      font-size: 10px; letter-spacing: 1px;
      color: rgba(200, 200, 216, 0.55);
      text-shadow: 1px 1px 0 #000;
      pointer-events: none; white-space: nowrap;
    }

    /* ===== 武器背包面板（B 键开关，z-index 与升级面板同级） ===== */
    #hud-inventory {
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center;
      background: rgba(4, 4, 10, 0.82);
      opacity: 0; pointer-events: none;
      transition: opacity 0.15s steps(3);
      z-index: 9;                          /* 与升级面板同级 */
    }
    #hud-inventory.hud-inv-show { opacity: 1; pointer-events: auto; } /* 打开时面板可交互（与升级面板一致，触屏可点） */
    #hud-inv-panel {
      padding: 20px 24px 16px;
      background: rgba(10, 10, 18, 0.95);
      position: relative; overflow: hidden;
      min-width: 470px; max-width: 90vw;
    }
    /* 扫描线点缀（与其他面板统一） */
    #hud-inv-panel::after {
      content: ''; position: absolute; inset: 0; pointer-events: none;
      background: repeating-linear-gradient(0deg,
        rgba(0,0,0,0.25) 0 1px, transparent 1px 3px);
    }
    #hud-inv-title {
      font-size: 22px; font-weight: bold; letter-spacing: 8px;
      color: #ffd840; text-align: center; margin-bottom: 16px;
      text-shadow: 3px 3px 0 #000, 0 0 12px rgba(255, 216, 64, 0.7);
    }
    #hud-inv-body { display: flex; gap: 18px; align-items: stretch; }
    /* 左侧：武器图标网格（64×64 硬边放大 + 名称 + 说明） */
    #hud-inv-grid { display: grid; grid-template-columns: repeat(2, 118px); gap: 12px; }
    .hud-inv-slot {
      text-align: center; padding: 8px 6px;
      background: #14141e;
      border: 2px solid #000;
      box-shadow: inset 0 0 0 1px #555;
    }
    .hud-inv-slot canvas {
      width: 64px; height: 64px;             /* 图标硬边放大到 64×64 */
      image-rendering: pixelated;
      background: #181818;
      border: 2px solid #000;
      margin-bottom: 5px;
    }
    .hud-inv-name {
      font-size: 13px; font-weight: bold; letter-spacing: 2px;
      color: #ffd840; text-shadow: 1px 1px 0 #000; margin-bottom: 4px;
    }
    .hud-inv-desc {
      font-size: 11px; line-height: 1.5; letter-spacing: 1px;
      color: #c8c8d8; text-shadow: 1px 1px 0 #000;
    }
    #hud-inv-empty {
      display: none;
      align-items: center; justify-content: center;
      min-width: 248px; padding: 30px 12px;
      font-size: 13px; letter-spacing: 2px; line-height: 1.8;
      color: #9a9ab0; text-shadow: 1px 1px 0 #000; text-align: center;
    }
    /* 右侧：属性摘要面板 */
    #hud-inv-stats {
      min-width: 168px; padding: 4px 0 4px 16px;
      border-left: 2px solid #2a2a44;
    }
    #hud-inv-stats-title {
      font-size: 13px; font-weight: bold; letter-spacing: 4px;
      color: #9fd4ff; text-shadow: 1px 1px 0 #000; margin-bottom: 8px;
    }
    .hud-inv-stat {
      font-size: 12px; letter-spacing: 1px; line-height: 2;
      color: #e8e8f0; text-shadow: 1px 1px 0 #000; white-space: nowrap;
    }
    #hud-inv-tip {
      margin-top: 14px; text-align: center;
      font-size: 12px; letter-spacing: 3px;
      color: #9fd4ff; text-shadow: 2px 2px 0 #000;
    }

    /* ===== 右下：小地图（160×160 Canvas） ===== */
    #hud-minimap-panel { right: 16px; bottom: 16px; padding: 6px; }
    #hud-minimap {
      display: block; width: 160px; height: 160px;
      image-rendering: pixelated;
      background: #0a0a12;
      border: 2px solid #000;
    }

    /* ===== 全屏大地图 ===== */
    #hud-largemap {
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center;
      background: rgba(4, 4, 10, 0.85);
      opacity: 0; pointer-events: none;
      transition: opacity 0.15s steps(3);
      z-index: 5;
    }
    #hud-largemap.hud-lm-show { opacity: 1; pointer-events: auto; }
    #hud-largemap-panel {
      padding: 10px; text-align: center;
      background: rgba(10, 10, 18, 0.95);
    }
    #hud-largemap-canvas {
      display: block;
      width: 70vmin; height: 70vmin;      /* 居中 70% 显示全城 */
      image-rendering: pixelated;
      background: #0a0a12;
      border: 2px solid #000;
    }
    #hud-largemap-tip {
      margin-top: 8px; font-size: 13px; letter-spacing: 2px;
      color: #9fd4ff; text-shadow: 1px 1px 0 #000;
    }

    /* ===== 暂停遮罩层 ===== */
    #hud-pause {
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center;
      background: rgba(4, 4, 10, 0.6);      /* 居中半透明遮罩 */
      opacity: 0; pointer-events: none;
      transition: opacity 0.15s steps(3);
      z-index: 8;                            /* 低于结算面板(10)，高于大地图(5) */
    }
    #hud-pause.hud-pause-show { opacity: 1; }
    #hud-pause-panel {
      text-align: center; padding: 28px 56px;
      background: rgba(10, 10, 18, 0.95);
      position: relative; overflow: hidden;
    }
    /* 扫描线点缀（与结算面板统一） */
    #hud-pause-panel::after {
      content: ''; position: absolute; inset: 0; pointer-events: none;
      background: repeating-linear-gradient(0deg,
        rgba(0,0,0,0.25) 0 1px, transparent 1px 3px);
    }
    #hud-pause-title {
      font-size: 34px; font-weight: bold; letter-spacing: 10px;
      color: #ffd840;
      text-shadow: 3px 3px 0 #000, 0 0 14px rgba(255, 216, 64, 0.8);
      margin-bottom: 14px;
    }
    #hud-pause-tip {
      font-size: 14px; letter-spacing: 3px;
      color: #9fd4ff; text-shadow: 2px 2px 0 #000;
    }

    /* ===== 游戏结束结算面板 ===== */
    #hud-gameover {
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center;
      background: rgba(4, 4, 10, 0.8);
      opacity: 0; pointer-events: none;
      transition: opacity 0.3s steps(6);
      z-index: 10;
    }
    #hud-gameover.hud-go-show { opacity: 1; pointer-events: auto; }
    #hud-go-panel {
      text-align: center; padding: 36px 64px;
      background: rgba(10, 10, 18, 0.95);
      position: relative; overflow: hidden;
    }
    /* 扫描线点缀 */
    #hud-go-panel::after {
      content: ''; position: absolute; inset: 0; pointer-events: none;
      background: repeating-linear-gradient(0deg,
        rgba(0,0,0,0.25) 0 1px, transparent 1px 3px);
    }
    #hud-go-title {
      font-size: 38px; font-weight: bold; letter-spacing: 10px;
      color: #ff5566;
      text-shadow: 3px 3px 0 #000, 0 0 14px rgba(255, 80, 100, 0.9);
      margin-bottom: 16px;
    }
    #hud-go-score {
      font-size: 20px; letter-spacing: 3px; margin-bottom: 26px;
      color: #ffd840; text-shadow: 2px 2px 0 #000;
    }
    #hud-go-btn {
      pointer-events: auto;  /* 关键：容器 pointer-events:none，按钮单独开启 */
      cursor: pointer;
      font-family: "Courier New", ui-monospace, monospace;
      font-size: 17px; font-weight: bold; letter-spacing: 4px;
      padding: 11px 38px;
      color: #e8e8f0;
      background: #2a2a3a;
      border: 2px solid #c8c8d8;
      box-shadow: 0 0 0 2px #181828, 4px 4px 0 0 rgba(0,0,0,0.6);
      border-radius: 0;
      text-shadow: 2px 2px 0 #000;
      position: relative; z-index: 1;
      transition: background 0.1s steps(2), transform 0.05s;
    }
    #hud-go-btn:hover { background: #3a4a6a; }
    #hud-go-btn:active { transform: translate(2px, 2px); box-shadow: 0 0 0 2px #181828, 2px 2px 0 0 rgba(0,0,0,0.6); }
  `,e.appendChild(t);function n(e,t,n,r,i){let a=document.createElement(e);return t&&(a.id=t),n&&(a.className=n),i!==void 0&&(a.textContent=i),r.appendChild(a),a}let r=n(`div`,`hud-status`,`hud-panel`,e),i=n(`div`,``,`hud-bar-row`,r);n(`div`,``,`hud-bar-label`,i).innerHTML=`<span>生命 HP</span>`;let a=n(`div`,`hud-hp-fill`,`hud-bar-fill`,n(`div`,``,`hud-bar-outer`,i)),o=n(`div`,``,`hud-bar-row`,r),s=n(`div`,``,`hud-bar-label`,o);s.innerHTML=`<span>经验 XP</span>`;let c=n(`span`,`hud-level-num`,``,s,`Lv.1`),l=n(`div`,`hud-xp-fill`,`hud-bar-fill`,n(`div`,`hud-xp-outer`,`hud-bar-outer`,o)),u=n(`div`,``,`hud-bar-row`,r);n(`div`,``,`hud-bar-label`,u).innerHTML=`<span>能量 EN</span>`;let d=n(`div`,`hud-energy-fill`,`hud-bar-fill`,n(`div`,``,`hud-bar-outer`,u)),f=n(`div`,`hud-score`,`hud-panel`,e),p=n(`div`,`hud-score-num`,``,f,`得分 0`),m=n(`div`,`hud-wave-num`,``,f,`第 1 波`),h=n(`div`,`hud-message`,``,e,``);n(`div`,`hud-help`,`hud-panel`,e,`ontouchstart`in window?`左下摇杆移动 · 右下按键出招`:`WASD 移动 · Shift 跑 · J 攻击 · K 技能 · L 光线 · M 地图 · N 声音 · P 暂停 · R 重开 · 1/2/3 选择升级 · B 背包`);let g=n(`div`,`hud-weapons`,`hud-panel`,e),_=n(`div`,`hud-boss`,`hud-panel`,e);n(`div`,`hud-boss-label`,``,_,`BOSS`);let v=n(`div`,`hud-boss-fill`,`hud-bar-fill`,n(`div`,``,`hud-bar-outer`,_));n(`div`,`hud-credit`,``,e,`Sprites © Sharm · Liosan · Kenney`);let y=n(`div`,`hud-minimap-panel`,`hud-panel`,e),b=document.createElement(`canvas`);b.id=`hud-minimap`,b.width=160,b.height=160,y.appendChild(b);let x=b.getContext(`2d`);x.imageSmoothingEnabled=!1;let S=n(`div`,`hud-largemap`,``,e),C=n(`div`,`hud-largemap-panel`,`hud-panel`,S),w=document.createElement(`canvas`);w.id=`hud-largemap-canvas`,w.width=400,w.height=400,C.appendChild(w),n(`div`,`hud-largemap-tip`,``,C,`城市地图 · 按 M 关闭`);let ee=w.getContext(`2d`);ee.imageSmoothingEnabled=!1,S.addEventListener(`click`,()=>je());let te=n(`div`,`hud-pause`,``,e),ne=n(`div`,`hud-pause-panel`,`hud-panel`,te);n(`div`,`hud-pause-title`,``,ne,`已暂停`),n(`div`,`hud-pause-tip`,``,ne,`按 P 或 Esc 继续`);let T=n(`div`,`hud-gameover`,``,e),E=n(`div`,`hud-go-panel`,`hud-panel`,T);n(`div`,`hud-go-title`,``,E,`战斗失败`);let re=n(`div`,`hud-go-score`,``,E,`最终得分 0`),ie=n(`button`,`hud-go-btn`,``,E,`重新开始`),D=n(`div`,`hud-levelup`,``,e);n(`div`,`hud-lu-title`,``,D,`升级！`);let O=n(`div`,`hud-lu-cards`,``,D);n(`div`,`hud-lu-tip`,``,D,`按 1 / 2 / 3 或点击卡片选择强化`);let ae=n(`div`,`hud-inventory`,``,e),oe=n(`div`,`hud-inv-panel`,`hud-panel`,ae);n(`div`,`hud-inv-title`,``,oe,`武器背包`);let se=n(`div`,`hud-inv-body`,``,oe),k=n(`div`,`hud-inv-grid`,``,se),ce=n(`div`,`hud-inv-empty`,``,se,`背包空空如也，升级可获得武器`),le=n(`div`,`hud-inv-stats`,``,se);n(`div`,`hud-inv-tip`,``,oe,`按 B 关闭`);let A=null,j=!1,ue=null,M=!1,N=2e3;function P(e,t,n,r){let i=t.width/N,a=t.width,o=t.height;e.fillStyle=`#0a0a12`,e.fillRect(0,0,a,o),e.fillStyle=`rgba(60, 60, 80, 0.25)`;for(let t=0;t<40;t++){let n=t*73%a,r=t*149%o;e.fillRect(n,r,2,2)}if(n){if(n.buildings){e.fillStyle=`#888888`;for(let t of n.buildings){let n=t.x*i,r=(t.z===void 0?t.y:t.z)*i,a=Math.max(2,(t.r||8)*i);e.fillRect(n-a/2,r-a/2,a,a)}}if(n.monsters){e.fillStyle=`#ff3344`;for(let t of n.monsters){if(!t.alive)continue;let n=t.x*i,r=t.y*i;e.fillRect(n-2,r-2,4,4)}}if(n.player){let t=n.player.x*i,r=n.player.y*i;e.fillStyle=`#ffffff`,e.beginPath(),e.moveTo(t,r-5),e.lineTo(t+4,r+4),e.lineTo(t,r+2),e.lineTo(t-4,r+4),e.closePath(),e.fill(),e.fillStyle=`#ffd840`,e.fillRect(t-1,r-1,2,2)}if(r&&n.player&&n.camW&&n.camH){let t=Math.max(0,Math.min(N-n.camW,n.player.x-n.camW/2)),r=Math.max(0,Math.min(N-n.camH,n.player.y-n.camH/2));e.strokeStyle=`rgba(255, 255, 255, 0.7)`,e.lineWidth=1,e.strokeRect(t*i,r*i,n.camW*i,n.camH*i)}}}function de(e){let t=Math.max(0,Math.min(1,e));a.style.width=(t*100).toFixed(1)+`%`,i.classList.toggle(`hud-low-hp`,t<=.3&&t>0)}function fe(e){let t=Math.max(0,Math.min(1,e));d.style.width=(t*100).toFixed(1)+`%`}function pe(e){p.textContent=`得分 `+e}function me(e){m.textContent=`第 `+e+` 波`}function he(e,t){A&&=(clearTimeout(A),null),h.textContent=e,h.offsetWidth,h.classList.add(`hud-msg-show`),A=setTimeout(()=>{h.classList.remove(`hud-msg-show`),A=null},t||2e3)}function ge(e,t){re.textContent=`最终得分 `+e,ie.onclick=null,ie.onclick=()=>{typeof t==`function`&&t()},T.classList.add(`hud-go-show`)}function _e(){T.classList.remove(`hud-go-show`)}function ve(){te.classList.add(`hud-pause-show`)}function ye(){te.classList.remove(`hud-pause-show`)}function be(e,t){let n=e.getContext(`2d`);n.imageSmoothingEnabled=!1,n.clearRect(0,0,e.width,e.height),t&&t.width&&t.height&&n.drawImage(t,0,0,e.width,e.height)}function xe(e,t){let n=Math.max(0,Math.min(1,e));l.style.width=(n*100).toFixed(1)+`%`,t!=null&&(c.textContent=`Lv.`+t)}function Se(e,t){for(;O.firstChild;)O.removeChild(O.firstChild);(e||[]).slice(0,3).forEach((e,r)=>{let i=n(`div`,``,`hud-lu-card`,O);n(`div`,``,`hud-lu-key`,i,String(r+1));let a=document.createElement(`canvas`);a.className=`hud-lu-icon`,a.width=48,a.height=48,be(a,e.icon),i.appendChild(a),n(`div`,``,`hud-lu-name`,i,e.name||``),n(`div`,``,`hud-lu-desc`,i,e.desc||``),i.onclick=()=>{typeof t==`function`&&t(r)}}),D.classList.add(`hud-lu-show`)}function Ce(){D.classList.remove(`hud-lu-show`)}function we(e,t){for(;g.firstChild;)g.removeChild(g.firstChild);let r=t&&t.weapons||{},i=(e||[]).filter(e=>r[e]);for(let e of i){let t=n(`div`,``,`hud-weapon-slot`,g);t.title=e;let i=document.createElement(`canvas`);i.width=32,i.height=32,be(i,r[e]),t.appendChild(i)}g.classList.toggle(`hud-weapons-show`,i.length>0)}function Te(e){let t=Math.max(0,Math.min(1,e));v.style.width=(t*100).toFixed(1)+`%`,_.classList.add(`hud-boss-show`)}function Ee(){_.classList.remove(`hud-boss-show`)}function De(e,t){for(;k.firstChild;)k.removeChild(k.firstChild);let r=e||[];for(let e of r){let t=n(`div`,``,`hud-inv-slot`,k),r=document.createElement(`canvas`);r.width=64,r.height=64,be(r,e.icon),t.appendChild(r),n(`div`,``,`hud-inv-name`,t,e.name||``),n(`div`,``,`hud-inv-desc`,t,e.desc||``)}for(k.style.display=r.length>0?`grid`:`none`,ce.style.display=r.length>0?`none`:`flex`;le.firstChild;)le.removeChild(le.firstChild);n(`div`,`hud-inv-stats-title`,``,le,`— 属性 —`);for(let e of t||[])n(`div`,``,`hud-inv-stat`,le,e);M=!0,ae.classList.add(`hud-inv-show`)}function Oe(){M=!1,ae.classList.remove(`hud-inv-show`)}function ke(){return M}function Ae(e){ue=e,P(x,b,e,!0),j&&P(ee,w,e,!1)}function je(){return j=!j,S.classList.toggle(`hud-lm-show`,j),j&&P(ee,w,ue,!1),j}function Me(){for(A&&=(clearTimeout(A),null),ie.onclick=null;e.firstChild;)e.removeChild(e.firstChild)}return{setHealth:de,setEnergy:fe,setScore:pe,setWave:me,showMessage:he,showGameOver:ge,hideGameOver:_e,showPause:ve,hidePause:ye,updateMinimap:Ae,toggleLargeMap:je,dispose:Me,setXP:xe,showLevelUp:Se,hideLevelUp:Ce,setWeapons:we,showBossHP:Te,hideBossHP:Ee,showInventory:De,hideInventory:Oe,isInventoryOpen:ke}}function wt(){let e=new Set,t=null,n=!1,r=!1,i=!1,a=!1,o=null,s=!1,c={x:0,z:0};function l(e){e===`punch`||e===`kick`||e===`beam`?t=e:e===`map`?n=!0:e===`pause`?i=!0:e===`inventory`&&(s=!0)}let u={Digit1:1,Digit2:2,Digit3:3},d={KeyJ:`punch`,KeyK:`kick`,KeyL:`beam`};function f(c){c.repeat||(e.add(c.code),d[c.code]&&(t=d[c.code]),c.code===`KeyM`&&(n=!0),c.code===`KeyR`&&(r=!0),(c.code===`KeyP`||c.code===`Escape`)&&(i=!0),c.code===`KeyN`&&(a=!0),u[c.code]&&(o=u[c.code]),c.code===`KeyB`&&(s=!0))}function p(t){e.delete(t.code)}function m(){e.clear()}return window.addEventListener(`keydown`,f),window.addEventListener(`keyup`,p),window.addEventListener(`blur`,m),{axis(){let t=0,n=0;if(e.has(`KeyA`)&&--t,e.has(`KeyD`)&&(t+=1),e.has(`KeyW`)&&--n,e.has(`KeyS`)&&(n+=1),t+=c.x,n+=c.z,t!==0&&n!==0){let e=Math.hypot(t,n);e>1&&(t/=e,n/=e)}return{x:t,z:n}},setVirtualAxis(e,t){c.x=Math.max(-1,Math.min(1,e||0)),c.z=Math.max(-1,Math.min(1,t||0))},pressVirtual(e){l(e)},running(){return e.has(`ShiftLeft`)||e.has(`ShiftRight`)},consumeAttack(){let e=t;return t=null,e},consumeMapToggle(){let e=n;return n=!1,e},consumeRestart(){let e=r;return r=!1,e},consumePause(){let e=i;return i=!1,e},consumeMute(){let e=a;return a=!1,e},consumeChoice(){let e=o;return o=null,e},consumeInventory(){let e=s;return s=!1,e},dispose(){window.removeEventListener(`keydown`,f),window.removeEventListener(`keyup`,p),window.removeEventListener(`blur`,m),e.clear(),t=null,n=!1,r=!1,i=!1,a=!1,o=null,s=!1,c={x:0,z:0}}}}function Tt(e){if(!(`ontouchstart`in window||window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches))return{dispose(){}};let t=e&&typeof e.setVirtualAxis==`function`?(t,n)=>e.setVirtualAxis(t,n):()=>{},n=e&&typeof e.pressVirtual==`function`?t=>e.pressVirtual(t):()=>{},r=document.createElement(`style`);r.textContent=`
    .tiga-touch-root, .tiga-touch-root * {
      touch-action: none;             /* 阻止浏览器默认手势（滚动/缩放/双击放大） */
      user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      box-sizing: border-box;
      font-family: monospace;         /* 与游戏 HUD 统一的像素风字体感 */
    }
    .tiga-touch-root {
      position: fixed;
      inset: 0;
      z-index: 30;                    /* 高于画布，低于升级/背包面板 */
      pointer-events: none;           /* 根容器不拦截，子元素自行开启 */
    }
    /* 左半屏摇杆激活层（浮动摇杆：按下点即底座中心） */
    .tiga-joy-layer {
      position: absolute;
      left: 0; top: 0;
      width: 55%; height: 100%;
      pointer-events: auto;
    }
    /* 摇杆底座：120px 半透明圆环 */
    .tiga-joy-base {
      position: fixed;
      width: 120px; height: 120px;
      border-radius: 50%;
      border: 3px solid rgba(140, 200, 255, 0.55);
      background: rgba(10, 14, 26, 0.35);
      display: none;
      pointer-events: none;
    }
    /* 摇杆头 */
    .tiga-joy-knob {
      position: fixed;
      width: 52px; height: 52px;
      border-radius: 50%;
      border: 3px solid rgba(200, 235, 255, 0.9);
      background: rgba(90, 150, 220, 0.65);
      display: none;
      pointer-events: none;
    }
    /* 通用按钮基类：半透明深色底 + 亮色硬边框 */
    .tiga-btn {
      position: absolute;
      pointer-events: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #eef4ff;
      background: rgba(10, 14, 26, 0.55);
      text-shadow: 2px 2px 0 #000;
      transition: transform 0.05s;
    }
    .tiga-btn.active {
      transform: scale(0.88);         /* 按下缩放反馈 */
      background: rgba(40, 60, 100, 0.75);
    }
    /* 右下三个大圆按钮 */
    .tiga-btn-big {
      width: 68px; height: 68px;
      border-radius: 50%;
      font-size: 20px;
      border: 3px solid;
    }
    .tiga-btn-punch { border-color: #ff5555; right: 148px; bottom: 96px; }
    .tiga-btn-kick  { border-color: #ffaa33; right: 78px;  bottom: 158px; }
    .tiga-btn-beam  { border-color: #66ccff; right: 18px;  bottom: 66px; }
    /* 右上竖排小方按钮 */
    .tiga-btn-small {
      width: 44px; height: 44px;
      border-radius: 4px;             /* 像素风硬边，仅 4px 圆角 */
      font-size: 13px;
      border: 2px solid #8cc8ff;
      right: 10px;
    }
    .tiga-btn-map  { top: 10px; }
    .tiga-btn-inv  { top: 62px; }
    .tiga-btn-pause{ top: 114px; }
  `,document.head.appendChild(r);let i=document.createElement(`div`);i.className=`tiga-touch-root`;let a=document.createElement(`div`);a.className=`tiga-joy-layer`;let o=document.createElement(`div`);o.className=`tiga-joy-base`;let s=document.createElement(`div`);s.className=`tiga-joy-knob`,i.appendChild(a),i.appendChild(o),i.appendChild(s);function c(e,t){let n=document.createElement(`div`);return n.className=`tiga-btn ${e}`,n.textContent=t,i.appendChild(n),n}let l=c(`tiga-btn-big tiga-btn-punch`,`拳`),u=c(`tiga-btn-big tiga-btn-kick`,`踢`),d=c(`tiga-btn-big tiga-btn-beam`,`光线`),f=c(`tiga-btn-small tiga-btn-map`,`地图`),p=c(`tiga-btn-small tiga-btn-inv`,`背包`),m=c(`tiga-btn-small tiga-btn-pause`,`暂停`);document.body.appendChild(i);let h=null,g=0,_=0;function v(e,n){let r=e-g,i=n-_,a=Math.hypot(r,i);a>60&&(r=r/a*60,i=i/a*60),s.style.left=`${g+r-26}px`,s.style.top=`${_+i-26}px`;let o=Math.max(-1,Math.min(1,r/60)),c=Math.max(-1,Math.min(1,i/60));t(o,c)}function y(){h=null,o.style.display=`none`,s.style.display=`none`,t(0,0)}function b(e){if(e.preventDefault(),h!==null)return;let t=e.changedTouches[0];h=t.identifier,g=t.clientX,_=t.clientY,o.style.left=`${g-60}px`,o.style.top=`${_-60}px`,o.style.display=`block`,s.style.display=`block`,v(t.clientX,t.clientY)}function x(e){if(e.preventDefault(),h!==null){for(let t of e.changedTouches)if(t.identifier===h){v(t.clientX,t.clientY);break}}}function S(e){if(e.preventDefault(),h!==null){for(let t of e.changedTouches)if(t.identifier===h){y();break}}}a.addEventListener(`touchstart`,b,{passive:!1}),a.addEventListener(`touchmove`,x,{passive:!1}),a.addEventListener(`touchend`,S,{passive:!1}),a.addEventListener(`touchcancel`,S,{passive:!1});function C(e,t){let r=new Set;function i(i){i.preventDefault();for(let e of i.changedTouches)r.has(e.identifier)||(r.add(e.identifier),n(t));e.classList.add(`active`)}function a(t){t.preventDefault();for(let e of t.changedTouches)r.delete(e.identifier);r.size===0&&e.classList.remove(`active`)}e.addEventListener(`touchstart`,i,{passive:!1}),e.addEventListener(`touchmove`,e=>e.preventDefault(),{passive:!1}),e.addEventListener(`touchend`,a,{passive:!1}),e.addEventListener(`touchcancel`,a,{passive:!1})}C(l,`punch`),C(u,`kick`),C(d,`beam`),C(f,`map`),C(p,`inventory`),C(m,`pause`);function w(e){e.preventDefault()}i.addEventListener(`contextmenu`,w);function ee(){y(),i.removeEventListener(`contextmenu`,w),i.remove(),r.remove()}return{dispose:ee}}function Et(){let e=null,t=null,n=null,r=null,i=null,a=!1,o=null,s=0,c=0,l=[],u=60/132/4;function d(){if(!e){e=new(window.AudioContext||window.webkitAudioContext),t=e.createGain(),t.gain.value=+!a,t.connect(e.destination),n=e.createGain(),n.gain.value=.9,n.connect(t),r=e.createGain(),r.gain.value=.32,r.connect(t);let o=e.sampleRate;i=e.createBuffer(1,o,e.sampleRate);let s=i.getChannelData(0);for(let e=0;e<o;e++)s[e]=Math.random()*2-1}return e}function f(t){let n=e.createBufferSource();return n.buffer=i,n.loop=!0,n.start(),n.stop(e.currentTime+t+.05),n.onended=()=>{try{n.disconnect()}catch{}},n}function p(t,n,r){let i=e.createOscillator();return i.type=t,i.frequency.setValueAtTime(n,e.currentTime),i.start(),i.stop(e.currentTime+r+.05),i.onended=()=>{try{i.disconnect()}catch{}},i}function m(t,r,i,a=n){let o=e.createGain(),s=e.currentTime;return o.gain.setValueAtTime(1e-4,s),o.gain.linearRampToValueAtTime(t,s+r),o.gain.exponentialRampToValueAtTime(1e-4,s+r+i),o.connect(a),setTimeout(()=>{try{o.disconnect()}catch{}},(r+i+.2)*1e3),o}function h(){let t=.12,n=f(t),r=e.createBiquadFilter();r.type=`bandpass`,r.Q.value=2;let i=e.currentTime;r.frequency.setValueAtTime(400,i),r.frequency.exponentialRampToValueAtTime(2400,i+t);let a=m(.5,.005,t);n.connect(r),r.connect(a),r.onended=()=>{try{r.disconnect()}catch{}}}function g(){let t=.2,n=f(t),r=e.createBiquadFilter();r.type=`lowpass`;let i=e.currentTime;r.frequency.setValueAtTime(900,i),r.frequency.exponentialRampToValueAtTime(200,i+t);let a=m(.7,.005,t);n.connect(r),r.connect(a);let o=p(`square`,140,t);o.frequency.exponentialRampToValueAtTime(60,i+t);let s=m(.4,.005,t);o.connect(s)}function _(){let t=.15,n=e.currentTime,r=p(`square`,220,t);r.frequency.exponentialRampToValueAtTime(70,n+t);let i=m(.6,.002,t);r.connect(i);let a=f(.08),o=e.createBiquadFilter();o.type=`highpass`,o.frequency.value=1500;let s=m(.35,.001,.08);a.connect(o),o.connect(s)}function v(){let t=.7,n=e.currentTime,r=p(`sawtooth`,180,t);r.frequency.setValueAtTime(180,n),r.frequency.exponentialRampToValueAtTime(1200,n+t);let i=e.createOscillator();i.type=`square`,i.frequency.value=30;let a=e.createGain();a.gain.value=40,i.connect(a),a.connect(r.frequency),i.start(),i.stop(n+t),i.onended=()=>{try{i.disconnect(),a.disconnect()}catch{}};let o=m(.32,.05,t-.05);r.connect(o)}function y(){let t=.6,n=e.currentTime,r=f(t),i=e.createBiquadFilter();i.type=`lowpass`,i.frequency.setValueAtTime(3e3,n),i.frequency.exponentialRampToValueAtTime(120,n+t);let a=m(.8,.005,t);r.connect(i),i.connect(a);let o=p(`triangle`,90,t);o.frequency.exponentialRampToValueAtTime(35,n+t);let s=m(.5,.005,t);o.connect(s)}function b(){let t=.5,n=e.currentTime,r=p(`square`,500,t);r.frequency.setValueAtTime(500,n),r.frequency.exponentialRampToValueAtTime(60,n+t);let i=m(.45,.01,t);r.connect(i)}function x(){let e=.25,t=p(`square`,880,e),n=p(`square`,932,e),r=m(.35,.002,e);t.connect(r),n.connect(r)}function S(){[523.25,659.25,783.99].forEach((t,r)=>{let i=e.currentTime+r*.12,a=e.createOscillator();a.type=`square`,a.frequency.setValueAtTime(t,i);let o=e.createGain();o.gain.setValueAtTime(1e-4,i),o.gain.linearRampToValueAtTime(.35,i+.01),o.gain.exponentialRampToValueAtTime(1e-4,i+.16),a.connect(o),o.connect(n),a.start(i),a.stop(i+.2),a.onended=()=>{try{a.disconnect(),o.disconnect()}catch{}}})}function C(){[392,329.63,261.63,196].forEach((t,r)=>{let i=e.currentTime+r*.2,a=e.createOscillator();a.type=`triangle`,a.frequency.setValueAtTime(t,i),a.frequency.exponentialRampToValueAtTime(t*.94,i+.22);let o=e.createGain();o.gain.setValueAtTime(1e-4,i),o.gain.linearRampToValueAtTime(.4,i+.02),o.gain.exponentialRampToValueAtTime(1e-4,i+.24),a.connect(o),o.connect(n),a.start(i),a.stop(i+.28),a.onended=()=>{try{a.disconnect(),o.disconnect()}catch{}}})}function w(){let e=.1,t=p(`square`,660,e),n=m(.3,.002,e);t.connect(n)}let ee={punch:h,kick:g,hit:_,beam:v,explode:y,kill:b,hurt:x,wave:S,gameover:C,pause:w};function te(e){let t={C:0,"C#":1,D:2,"D#":3,E:4,F:5,"F#":6,G:7,"G#":8,A:9,"A#":10,B:11},n=/^([A-G]#?)(\d)$/.exec(e);return 440*2**((t[n[1]]+(parseInt(n[2],10)+1)*12-69)/12)}let ne=[`C5`,0,`E5`,0,`G5`,0,`E5`,0,`C5`,0,`E5`,`G5`,`A5`,0,0,0,`A5`,0,`G5`,0,`E5`,0,`G5`,0,`A5`,0,`G5`,`E5`,`D5`,0,0,0,`C5`,0,`E5`,0,`G5`,0,`E5`,0,`F5`,0,`A5`,`F5`,`D5`,0,0,0,`E5`,0,`D5`,0,`E5`,0,`G5`,0,`E5`,0,`D5`,`C5`,`D5`,0,0,0,`C6`,0,`A5`,0,`G5`,0,`A5`,0,`C6`,0,`A5`,`G5`,`E5`,0,0,0,`D5`,0,`E5`,0,`G5`,0,`A5`,0,`G5`,0,`E5`,`D5`,`E5`,0,0,0,`C5`,0,`D5`,0,`E5`,0,`D5`,0,`C5`,0,`D5`,`E5`,`G5`,0,0,0,`A5`,0,`G5`,0,`E5`,0,`D5`,0,`C5`,0,0,0,0,0,0,0],T=[`C3`,0,`C3`,0,`G2`,0,`C3`,0,`C3`,0,`C3`,0,`G2`,0,`G2`,0,`C3`,0,`C3`,0,`G2`,0,`C3`,0,`C3`,0,`E3`,0,`G3`,0,`E3`,0,`F2`,0,`F2`,0,`C3`,0,`F2`,0,`F2`,0,`F2`,0,`C3`,0,`C3`,0,`C3`,0,`C3`,0,`G2`,0,`C3`,0,`G2`,0,`G2`,0,`B2`,0,`G2`,0,`A2`,0,`A2`,0,`E3`,0,`A2`,0,`A2`,0,`A2`,0,`E3`,0,`E3`,0,`F2`,0,`F2`,0,`C3`,0,`F2`,0,`G2`,0,`G2`,0,`D3`,0,`G2`,0,`C3`,0,`C3`,0,`G2`,0,`C3`,0,`E3`,0,`E3`,0,`G2`,0,`G2`,0,`G2`,0,`G2`,0,`D3`,0,`G2`,0,`C3`,0,`G2`,0,`C3`,0,0,0],E=`K...S...K...S...K...S...K...S..SK...S...K...S...K...S...K.K.S...K...S...K...S...K...S...K.K.S.S.K...S...K...S...K...S..SK...S...`.split(``);function re(t,n,i,a,o){let s=e.createOscillator();s.type=t,s.frequency.setValueAtTime(n,i);let c=e.createGain();c.gain.setValueAtTime(1e-4,i),c.gain.linearRampToValueAtTime(o,i+.01),c.gain.exponentialRampToValueAtTime(1e-4,i+a),s.connect(c),c.connect(r),s.start(i),s.stop(i+a+.05),l.push(s,c),s.onended=()=>{try{s.disconnect(),c.disconnect()}catch{}l=l.filter(e=>e!==s&&e!==c)}}function ie(t,n){let a=e.createBufferSource();a.buffer=i,a.loop=!0;let o=e.createBiquadFilter(),s=e.createGain();t===`K`?(o.type=`lowpass`,o.frequency.value=300,s.gain.setValueAtTime(.6,n),s.gain.exponentialRampToValueAtTime(1e-4,n+.12),a.start(n),a.stop(n+.15)):(o.type=`bandpass`,o.frequency.value=1800,o.Q.value=1,s.gain.setValueAtTime(.35,n),s.gain.exponentialRampToValueAtTime(1e-4,n+.09),a.start(n),a.stop(n+.12)),a.connect(o),o.connect(s),s.connect(r),l.push(a,o,s),a.onended=()=>{try{a.disconnect(),o.disconnect(),s.disconnect()}catch{}l=l.filter(e=>e!==a&&e!==o&&e!==s)}}function D(){if(e)for(;s<e.currentTime+.12;){let e=c%128,t=ne[e];t!==0&&re(`square`,te(t),s,u*1.6,.16);let n=T[e];n!==0&&re(`triangle`,te(n),s,u*1.8,.3);let r=E[e];r!==`.`&&ie(r,s),s+=u,c++}}function O(){d(),e.state===`suspended`&&e.resume()}function ae(t){d(),e.state===`suspended`&&e.resume();let n=ee[t];n&&n()}function oe(){d(),e.state===`suspended`&&e.resume(),!o&&(c=0,s=e.currentTime+.1,o=setInterval(D,25))}function se(){o&&=(clearInterval(o),null);for(let e of l){try{e.stop&&e.stop()}catch{}try{e.disconnect()}catch{}}l=[]}function k(){return a=!a,t&&(t.gain.value=+!a),a}function ce(){return a}return{unlock:O,play:ae,startBGM:oe,stopBGM:se,toggleMute:k,isMuted:ce}}var Dt=[{id:`power`,name:`奥特之力`,desc:`攻击伤害 +30%`,icon:`axe`},{id:`vitality`,name:`生命之光`,desc:`血上限 +30 并回满`,icon:`heart`},{id:`speed`,name:`疾风之躯`,desc:`移动速度 +15%`,icon:`boots`},{id:`energy`,name:`能量核心`,desc:`能量回复 +60%`,icon:`orb`},{id:`beamup`,name:`哉佩利敖强化`,desc:`光线伤害 +50%`,icon:`staff`},{id:`defense`,name:`光之盾`,desc:`受到伤害 -35%（被动）`,icon:`shield`,weapon:!0},{id:`sword`,name:`奥特光剑`,desc:`J 变为 90° 大斩击`,icon:`sword`,weapon:!0},{id:`fist`,name:`能量拳套`,desc:`拳伤 ×2，命中大爆花`,icon:`gauntlet`,weapon:!0},{id:`disc`,name:`光轮投掷`,desc:`K 变为投掷光轮远程穿透`,icon:`disc`,weapon:!0}];function Ot(){let e=new Set,t={xp:0,level:1,xpNext:60,addXP(e){return t.xp+=e,t.xp>=t.xpNext?(t.xp-=t.xpNext,t.level+=1,t.xpNext=60+(t.level-1)*40,!0):!1},rollChoices(){let t=Dt.filter(t=>!(t.weapon&&e.has(t.id))).slice();for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t.slice(0,3).map(e=>({id:e.id,name:e.name,desc:e.desc,icon:e.icon}))},apply(t,n){if(!Dt.find(e=>e.id===t))return!1;switch(t){case`power`:n.damageMul*=1.3;break;case`vitality`:n.maxHp+=30,n.healToFull=!0;break;case`speed`:n.speedMul*=1.15;break;case`energy`:n.energyRegenMul*=1.6;break;case`beamup`:n.beamMul*=1.5;break;case`defense`:n.defenseMul*=.65,n.weapons.includes(`shield`)||n.weapons.push(`shield`),e.add(t);break;case`sword`:n.weapons.includes(`sword`)||n.weapons.push(`sword`),e.add(t);break;case`fist`:n.weapons.includes(`fist`)||n.weapons.push(`fist`),e.add(t);break;case`disc`:n.weapons.includes(`disc`)||n.weapons.push(`disc`),e.add(t);break}return!0}};return t}var kt=1,At=160,jt=1.6,Mt=14,Nt=.35,Pt=.35,Ft=.06,It=3,Lt=100,Rt=25,zt=250,Bt=.2,Vt=1,Ht=40,Ut=64,Wt=5,Gt={punch:{duration:.4,hitTime:.18,range:60,damage:20},kick:{duration:.5,hitTime:.25,range:75,damage:30},beam:{duration:.7,hitTime:.3,range:500,damage:60}},Kt={down:{x:0,y:1},up:{x:0,y:-1},left:{x:-1,y:0},right:{x:1,y:0}},qt=document.getElementById(`app`),F=document.createElement(`canvas`),I=F.getContext(`2d`);qt.appendChild(F);function Jt(){F.width=window.innerWidth,F.height=window.innerHeight,I.imageSmoothingEnabled=!1}Jt(),window.addEventListener(`resize`,Jt);function Yt(){I.fillStyle=`#101018`,I.fillRect(0,0,F.width,F.height),I.fillStyle=`#ffe066`,I.font=`bold 24px monospace`,I.textAlign=`center`,I.textBaseline=`middle`,I.fillText(`光之素材加载中…`,F.width/2,F.height/2),I.fillStyle=`#8888aa`,I.font=`14px monospace`,I.fillText(`Sprites: Sharm (Tiny 16) · Liosan (Gargant) · Kenney (CC0)`,F.width/2,F.height/2+36)}var L,R,z,B,V,H,U;function Xt(){return{damageMul:1,maxHp:100,speedMul:1,energyRegenMul:1,beamMul:1,defenseMul:1,weapons:[]}}var W=Xt(),G,K={x:1e3,y:1e3,hp:100,energy:1,facing:`down`,state:`idle`,stateTime:0,hitDone:!1,running:!1,invincible:0,beamDir:{x:0,y:1}},Zt=0,Qt=0,q=-1,J=!1,$t=!1,Y=!1,X=!1,en=0,Z=null,tn=!1,nn=!1,Q={x:0,y:0};function rn(e,t,n){return e<t?t:e>n?n:e}function $(e){K.state=e,K.stateTime=0,(e===`punch`||e===`kick`||e===`beam`)&&(K.hitDone=!1)}function an(){return Kt[K.facing]||Kt.down}function on(e){let t=Gt[e],n=t.range,r=t.damage*W.damageMul;return e===`punch`&&(W.weapons.includes(`sword`)?(n=100,r=t.damage*2.2*W.damageMul):W.weapons.includes(`fist`)&&(r=t.damage*2*W.damageMul)),e===`beam`&&(r*=W.beamMul),{...t,range:n,damage:r}}function sn(e){Qt=e,V.setWave(e),e%Wt===0?(V.showMessage(`第 ${e} 波 —— BOSS 来袭！`,2500),z.spawnBoss(e,{x:K.x,y:K.y})):(V.showMessage(`第 ${e} 波来袭！`,2e3),z.spawnWave(e,{x:K.x,y:K.y})),U.play(`wave`)}function cn(){Y=!0,Z=G.rollChoices(),V.showLevelUp(Z,ln),U.play(`pause`)}function ln(e){if(!Y||!Z||!Z[e])return;let t=Z[e];G.apply(t.id,W),t.id===`vitality`&&(K.hp=W.maxHp),K.hp=Math.min(K.hp,W.maxHp),V.hideLevelUp(),V.setWeapons(W.weapons,L),Z=null,en--,en>0?cn():Y=!1}var un={sword:{name:`奥特光剑`,desc:`J 变为 90° 大斩击，范围 100，伤害 ×2.2`,icon:`sword`},fist:{name:`能量拳套`,desc:`拳伤 ×2，命中爆出大爆花`,icon:`gauntlet`},disc:{name:`光轮投掷`,desc:`K 变为投掷光轮，远程穿透攻击，伤害 45`,icon:`disc`},shield:{name:`光之盾`,desc:`被动减伤，受到伤害 ×0.65`,icon:`shield`}};function dn(){let e=L&&L.weapons||{};return W.weapons.map(t=>{let n=un[t]||{name:t,desc:``,icon:t};return{icon:e[n.icon]||null,name:n.name,desc:n.desc}})}function fn(){return[`等级 Lv.${G.level}`,`攻击倍率 ×${W.damageMul.toFixed(2)}`,`血量上限 ${W.maxHp}`,`移速 ×${W.speedMul.toFixed(2)}`,`能量回复 ×${W.energyRegenMul.toFixed(2)}`,`防御 ×${W.defenseMul.toFixed(2)}`]}function pn(){X=!0,V.showInventory(dn(),fn()),U.play(`pause`)}function mn(){X=!1,V.hideInventory()}function hn(){J||(J=!0,$(`hurt`),U.play(`gameover`),U.stopBGM(),V.showGameOver(Zt,gn))}function gn(){G=Ot(),W=Xt(),R.regenerate(),en=0,Y=!1,Z=null,tn=!1,K.x=R.size/2,K.y=R.size/2,K.hp=W.maxHp,K.energy=1,K.facing=`down`,K.running=!1,K.invincible=0,K.beamDir={x:0,y:1},$(`idle`),Zt=0,Qt=0,q=-1,J=!1,$t=!1,X=!1,V.hidePause(),V.hideInventory(),V.hideLevelUp(),V.hideBossHP(),z.clear(),V.hideGameOver(),V.setScore(0),V.setHealth(1),V.setEnergy(1),V.setXP(0,1),V.setWeapons(W.weapons,L),Dn(),nn&&U.startBGM(),sn(1)}function _n(e){let t=K.state===`punch`||K.state===`kick`||K.state===`beam`;if(J||t)return;K.state===`hurt`&&K.stateTime>=Bt&&$(`idle`);let n=H.axis();if(K.running=H.running(),n.x!==0||n.z!==0){let t=At*W.speedMul*(K.running?jt:1),r=K.x+n.x*t*e,i=K.y+n.z*t*e,a=R.collide(r,i,Mt);K.x=a.x,K.y=a.y,n.x>0?K.facing=`right`:n.x<0?K.facing=`left`:n.z>0?K.facing=`down`:n.z<0&&(K.facing=`up`),K.state===`idle`&&$(`walk`)}else K.state===`walk`&&$(`idle`)}function vn(){let e=null,t=1/0;for(let n of z.monsters){if(!n.alive)continue;let r=n.x-K.x,i=n.y-Ut-K.y,a=r*r+i*i;a<t&&(t=a,e={dx:r,dy:i})}let n=an();if(!e)return{x:n.x,y:n.y};let r=Math.hypot(e.dx,e.dy);return r<1e-4?{x:n.x,y:n.y}:{x:e.dx/r,y:e.dy/r}}function yn(e){let t=J?null:H.consumeAttack();t&&(K.state===`idle`||K.state===`walk`)&&(t===`beam`?K.energy>=Pt?(K.energy-=Nt,K.beamDir=vn(),$(`beam`)):V.showMessage(`能量不足！`,800):($(t),U.play(t)));let n=Gt[K.state];if(n){if(!K.hitDone&&K.stateTime>=n.hitTime){let e=on(K.state),t=an();if(K.state===`beam`){let t=K.beamDir.x,n=K.beamDir.y,r=B.fireBeam(K.x+t*24,K.y+n*24,t,n,z.monsters,e.damage);U.play(`beam`),r>0&&U.play(`explode`)}else if(K.state===`kick`&&W.weapons.includes(`disc`))B.fireDisc(K.x+t.x*24,K.y+t.y*24,t.x,t.y,z.monsters,45*W.damageMul)>0&&U.play(`hit`);else{K.state===`punch`&&W.weapons.includes(`sword`)&&B.slash(K.x,K.y,t.x,t.y,e.range);let n=B.meleeHit(K.x,K.y,t.x,t.y,e.range,z.monsters),r=!1;for(let t of n){t.takeDamage(e.damage)&&(r=!0);let n=K.state===`punch`&&W.weapons.includes(`fist`);B.explode(t.x,t.y,n?`#ff8833`:`#ffcc66`,n?1.6:.8)}n.length>0&&!r&&U.play(`hit`)}K.hitDone=!0}K.stateTime>=n.duration&&$(`idle`)}K.energy=Math.min(1,K.energy+Ft*W.energyRegenMul*e)}function bn(){for(let e of z.monsters){if(!e.alive)continue;let t=K.x-e.x,n=K.y-e.y,r=Mt+e.radius,i=Math.hypot(t,n);if(i>=r)continue;if(i<1e-4){let e=Math.random()*Math.PI*2;t=Math.cos(e),n=Math.sin(e),i=1}let a=t/i,o=n/i,s=r-i;K.x+=a*s*.5,K.y+=o*s*.5,e.x-=a*s*.5,e.y-=o*s*.5;let c=R.collide(K.x,K.y,Mt);K.x=c.x,K.y=c.y;let l=R.collide(e.x,e.y,e.radius);e.x=l.x,e.y=l.y}}function xn(e){K.invincible>0&&(K.invincible=Math.max(0,K.invincible-e));for(let e of z.monsters)if(e.pendingHit>0){if(!J&&K.invincible<=0){let t=e.pendingHit*W.defenseMul;K.hp=Math.max(0,K.hp-t),K.invincible=Vt,Sn(e),$(`hurt`),K.hp<=0?hn():U.play(`hurt`)}e.pendingHit=0}}function Sn(e){let t=K.x-e.x,n=K.y-e.y,r=Math.hypot(t,n);if(r<1e-4){let e=an();t=-e.x,n=-e.y}else t/=r,n/=r;let i=R.collide(K.x+t*Ht,K.y+n*Ht,Mt);K.x=i.x,K.y=i.y}function Cn(){for(let e of z.monsters)!e.alive&&!e.__scored&&(e.__scored=!0,Zt+=Lt,V.setScore(Zt),U.play(`kill`),G.addXP(e.isBoss?zt:Rt)&&en++)}function wn(){let e=!1;for(let t of z.monsters)t.isBoss&&(t.shockwave&&=(B.shockwave(t.x,t.y,120),!1),t.alive&&!e&&(V.showBossHP(t.hp/t.maxHp),e=!0));!e&&tn&&V.hideBossHP(),tn=e}function Tn(e){J||(z.aliveCount()===0&&q<0&&(q=It),q>=0&&(q-=e,q<=0&&(q=-1,sn(Qt+1))))}function En(){let e=Math.max(0,R.size-F.width),t=Math.max(0,R.size-F.height);return{x:rn(K.x-F.width/2,0,e),y:rn(K.y-F.height/2,0,t)}}function Dn(){let e=En();Q.x=e.x,Q.y=e.y}function On(e){let t=En(),n=1-Math.exp(-6*e);Q.x+=(t.x-Q.x)*n,Q.y+=(t.y-Q.y)*n;let r=Math.max(0,R.size-F.width),i=Math.max(0,R.size-F.height);Q.x=rn(Q.x,0,r),Q.y=rn(Q.y,0,i)}function kn(){let e=K.stateTime,t=L.hero,n=t[K.facing]||t.down;switch(K.state){case`walk`:{let t=K.running?.09:.13;return n[Math.floor(e/t)%n.length]}case`punch`:case`kick`:case`beam`:{let r=t.attack&&t.attack[K.facing]||n;return r[Math.min(r.length-1,Math.floor(e/Gt[K.state].duration*r.length))]}case`hurt`:return n[Math.min(1,n.length-1)];default:return n[Math.min(1,n.length-1)]}}function An(){let e=kn(),t=e.width*kt,n=e.height*kt;I.save(),I.translate(-Q.x,-Q.y),I.fillStyle=`rgba(0, 0, 0, 0.35)`,I.beginPath(),I.ellipse(K.x,K.y+n/2-6,t*.28,8,0,0,Math.PI*2),I.fill(),I.translate(K.x,K.y),K.invincible>0&&(I.globalAlpha=Math.floor(K.invincible*12)%2==0?.35:.8),I.drawImage(e,-t/2,-n/2,t,n),I.restore()}function jn(){V.setHealth(K.hp/W.maxHp),V.setEnergy(K.energy),V.setXP(G.xp/G.xpNext,G.level),H.consumeMapToggle()&&V.toggleLargeMap(),V.updateMinimap({player:{x:K.x,y:K.y},monsters:z.monsters.map(e=>({x:e.x,y:e.y,alive:e.alive})),buildings:R.staticObjects,camW:F.width,camH:F.height})}var Mn=performance.now();function Nn(e){requestAnimationFrame(Nn);let t=Math.min((e-Mn)/1e3,.05);if(Mn=e,H.consumeRestart()&&gn(),X?H.consumePause()&&mn():!J&&!Y&&H.consumePause()&&($t=!$t,U.play(`pause`),$t?V.showPause():V.hidePause()),!J&&!Y&&!$t&&H.consumeInventory()&&(X?mn():pn()),H.consumeMute()&&(U.toggleMute(),V.showMessage(U.isMuted()?`声音：关`:`声音：开`,1e3)),!J&&!$t&&!Y&&!X&&en>0&&cn(),Y){let e=H.consumeChoice();e!==null&&ln(e-1)}!$t&&!Y&&!X&&(K.stateTime+=t,_n(t),yn(t),z.update(t,{x:K.x,y:K.y},R),bn(),xn(t),Cn(),wn(),Tn(t),B.update(t),On(t)),I.fillStyle=`#101018`,I.fillRect(0,0,F.width,F.height),R.draw(I,Q),z.draw(I,Q),An(),B.draw(I,Q),jn()}async function Pn(){Yt(),L=await ue(),R=Oe(L),z=new ct(L),B=new St,V=Ct(),H=wt(),Tt(H),U=Et(),G=Ot(),W=Xt(),K.x=R.size/2,K.y=R.size/2,window.addEventListener(`keydown`,Fn),window.addEventListener(`touchstart`,Fn),Dn(),sn(1),requestAnimationFrame(Nn)}function Fn(){nn||(nn=!0,U.unlock(),J||U.startBGM())}Pn();