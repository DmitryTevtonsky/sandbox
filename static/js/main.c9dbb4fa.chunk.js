(this.webpackJsonpsandbox=this.webpackJsonpsandbox||[]).push([[0],{1197:function(e,t,a){},1198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),c=(a(89),a(60),a(31)),i=(a(91),a(42)),s=(a(93),a(82)),u=a(32),h=a(75),f=a.n(h),m=(a(95),a(76)),d=a.n(m);function g(e,t){var a=t-e;return Math.random()*a+e+1}var v=function(){var e=Object(n.useRef)(),t=Object(n.useState)(100),a=Object(u.a)(t,2),o=a[0],l=a[1],h=Object(n.useState)(3),m=Object(u.a)(h,2),v=m[0],b=m[1],p=Object(n.useState)(3),w=Object(u.a)(p,2),k=w[0],E=w[1],j=Object(n.useState)(!1),C=Object(u.a)(j,2),O=C[0],y=C[1],S=function(e){for(var t=[],a=0;a<e;a++)t.push(d.a.internet.color());return t}(k);console.log("clusterColors",S);var x=function(e){for(var t=[],a=0;a<e;a++)t.push([g(0,10),g(0,10)]);return t}(o),P=function(t){y(!0),t.clearRect(0,0,e.width,e.height);var a=f()({data:x,k:v});a.on("iteration",(function(e){!function(e,t,a,n,r,o,l){var c,i,s=e.canvas;for(e.fillStyle="rgba(255,255,255, 1)",e.fillRect(0,0,s.width,s.height),i=0;i<r.length;i++){var u=r[i];c=a[i];var h=n[u];e.globalAlpha=.1,e.save(),e.beginPath(),e.moveTo((c[0]-o[0].min+1)*(s.width/(l[0]+2)),(c[1]-o[1].min+1)*(s.height/(l[1]+2))),e.lineTo((h[0]-o[0].min+1)*(s.width/(l[0]+2)),(h[1]-o[1].min+1)*(s.height/(l[1]+2))),e.strokeStyle="black",e.stroke(),e.restore()}for(i=0;i<a.length;i++)e.save(),c=a[i],e.globalAlpha=1,e.translate((c[0]-o[0].min+1)*(s.width/(l[0]+2)),(c[1]-o[1].min+1)*(s.width/(l[1]+2))),e.beginPath(),e.arc(0,0,5,0,2*Math.PI,!0),e.strokeStyle=t[r[i]],e.stroke(),e.closePath(),e.restore();for(i=0;i<n.length;i++)e.save(),c=n[i],e.globalAlpha=.5,e.fillStyle=t[i],e.translate((c[0]-o[0].min+1)*(s.width/(l[0]+2)),(c[1]-o[1].min+1)*(s.width/(l[1]+2))),e.beginPath(),e.arc(0,0,5,0,2*Math.PI,!0),e.fill(),e.closePath(),e.restore()}(t,S,e.data,e.means,e.assignments,e.extents,e.ranges)})),a.on("end",(function(e){y(!1),console.log("Iterations took for completion: ".concat(e.iterations)),s.a.success("\u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0437\u0430\u043d\u044f\u043b\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0439: ".concat(e.iterations))})),a.run({delay:50})};Object(n.useLayoutEffect)((function(){var t=e.current.getContext("2d");P(t)}),[]);return r.a.createElement("div",{className:"k-means-box"},"k-means implementation",r.a.createElement("canvas",{ref:e,id:"canvas",width:"600",height:"600"}),r.a.createElement("div",{className:"controls"},r.a.createElement(i.a,{placeholder:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u043e\u0447\u0435\u043a (100)",onChange:function(e){return l(e.target.value)},allowClear:!0}),r.a.createElement(i.a,{placeholder:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0446\u0435\u043d\u0442\u0440\u043e\u0432 (3)",onChange:function(e){return b(e.target.value)},allowClear:!0}),r.a.createElement(i.a,{placeholder:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u043e\u0432 (3)",onChange:function(e){return E(e.target.value)},allowClear:!0}),r.a.createElement(c.a,{disabled:O,onClick:function(){var t=e.current.getContext("2d");P(t)},type:"default"},"\u041f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a")))},b=(a(1197),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))});l.a.render(r.a.createElement(b,null),document.getElementById("root"))},84:function(e,t,a){e.exports=a(1198)},89:function(e,t,a){},95:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.c9dbb4fa.chunk.js.map