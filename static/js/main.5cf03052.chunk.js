(this.webpackJsonpsandbox=this.webpackJsonpsandbox||[]).push([[0],{1197:function(e,t,a){},1198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),i=(a(89),a(60),a(31)),c=(a(91),a(42)),s=(a(93),a(82)),h=a(32),u=a(75),f=a.n(u),d=(a(95),a(76)),g=a.n(d);function m(e,t){var a=t-e;return Math.random()*a+e+1}var v=function(){var e=Object(n.useRef)(),t=Object(n.useState)(10),a=Object(h.a)(t,2),l=a[0],o=a[1],u=Object(n.useState)(3),d=Object(h.a)(u,2),v=d[0],b=d[1],p=Object(n.useState)(3),w=Object(h.a)(p,2),k=w[0],y=w[1],x=Object(n.useState)(!1),E=Object(h.a)(x,2),O=E[0],S=E[1],P=function(t){S(!0),t.clearRect(0,0,e.width,e.height);var a=function(e){for(var t=[],a=0;a<e;a++)t.push(g.a.internet.color());return t}(k),n=function(e){for(var t=[],a=0;a<e;a++)t.push([m(0,10),m(0,10)]);return t}(l);console.log("\u0412\u0445\u043e\u0434\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435:",n);var r=f()({data:n,k:v}),o=Array.from({length:v},(function(){return[]}));r.on("iteration",(function(e){return function(e,t,a,n,r,l,o,i){var c,s,h=t.canvas;for(t.fillStyle="rgba(255,255,255, 1)",t.fillRect(0,0,h.width,h.height),s=0;s<l.length;s++){var u=l[s];c=n[s];var f=r[u];t.globalAlpha=.7,t.save(),t.beginPath();var d=(c[0]-o[0].min+1)*(h.width/(i[0]+2)),g=(c[1]-o[1].min+1)*(h.height/(i[1]+2)),m=(f[0]-o[0].min+1)*(h.width/(i[0]+2)),v=(f[1]-o[1].min+1)*(h.height/(i[1]+2));t.moveTo(d,g),t.lineTo(m,v),t.strokeStyle="black",t.stroke(),t.restore()}for(s=0;s<n.length;s++)t.save(),c=n[s],t.globalAlpha=1,t.translate((c[0]-o[0].min+1)*(h.width/(i[0]+2)),(c[1]-o[1].min+1)*(h.width/(i[1]+2))),t.beginPath(),t.arc(0,0,5,0,2*Math.PI,!0),t.strokeStyle=a[l[s]],t.stroke(),t.closePath(),t.restore();for(s=0;s<r.length;s++)t.save(),c=r[s],t.globalAlpha=.5,t.fillStyle=a[s],t.translate((c[0]-o[0].min+1)*(h.width/(i[0]+2)),(c[1]-o[1].min+1)*(h.width/(i[1]+2))),t.beginPath(),t.arc(0,0,5,0,2*Math.PI,!0),t.fill(),t.closePath(),t.restore()}(0,t,a,e.data,e.means,e.assignments,e.extents,e.ranges)})),r.on("end",(function(e){return S(!1),console.log("\u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0437\u0430\u043d\u044f\u043b\u043e \u043a\u043e\u043b-\u0432\u043e \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0439: ".concat(e.iterations)),s.a.success("\u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0437\u0430\u043d\u044f\u043b\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0439: ".concat(e.iterations)),function(e,t,a,n,r,l,o,i){var c,s,h=t.canvas;for(s=0;s<l.length;s++){var u=l[s];c=n[s];var f=r[u];t.globalAlpha=1,t.save(),t.beginPath();var d=(c[0]-o[0].min+1)*(h.width/(i[0]+2)),g=(c[1]-o[1].min+1)*(h.height/(i[1]+2)),m=(f[0]-o[0].min+1)*(h.width/(i[0]+2)),v=(f[1]-o[1].min+1)*(h.height/(i[1]+2));t.moveTo(d,g),t.lineTo(m,v);var b=Math.round(Math.sqrt(Math.pow(m-d,2)+Math.pow(v-g,2)));console.log("\u0414\u043b\u0438\u043d\u0430 ".concat(s,"-\u0433\u043e \u043e\u0442\u0440\u0435\u0437\u043a\u0430 \u0434\u043b\u044f ").concat(l[s]," \u0446\u0435\u043d\u0442\u0440\u0430 ="),b),t.fillStyle="black",t.textAlign="center",t.textBaseline="bottom",t.font="bold  7pt Arial",t.fillText(b,d,g-5),t.strokeStyle=a[l[s]],t.stroke(),e[l[s]].push(b),t.restore()}for(s=0;s<r.length;s++){t.save(),c=r[s],t.globalAlpha=1,t.fillStyle="black";var p=(c[0]-o[0].min+1)*(h.width/(i[0]+2)),w=(c[1]-o[1].min+1)*(h.width/(i[1]+2));t.translate(p,w),t.beginPath(),t.arc(0,0,5,0,2*Math.PI,!0),t.fill(),t.closePath();var k=Math.round(e[s].reduce((function(e,t){return e+t}))/e[s].length);t.shadowColor=a[s],t.shadowOffsetX=0,t.shadowOffsetY=0,t.shadowBlur=3,t.fillStyle="black",t.font="bold 10pt Arial",t.fillText(k,10,-10),t.restore()}return e}(o,t,a,e.data,e.means,e.assignments,e.extents,e.ranges)})),r.run({delay:50})};Object(n.useLayoutEffect)((function(){var t=e.current.getContext("2d");P(t)}),[]);return r.a.createElement("div",{className:"k-means-box"},"k-means implementation",r.a.createElement("canvas",{ref:e,id:"canvas",width:"600",height:"600"}),r.a.createElement("div",{className:"controls"},r.a.createElement(c.a,{placeholder:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u043e\u0447\u0435\u043a (10)",onChange:function(e){return o(e.target.value)},allowClear:!0}),r.a.createElement(c.a,{placeholder:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0446\u0435\u043d\u0442\u0440\u043e\u0432 (3)",onChange:function(e){return b(e.target.value)},allowClear:!0}),r.a.createElement(c.a,{placeholder:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u043e\u0432 (3)",onChange:function(e){return y(e.target.value)},allowClear:!0}),r.a.createElement(i.a,{loading:O,onClick:function(){P(e.current.getContext("2d"))},type:"primary"},"\u041f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a")))},b=(a(1197),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))});o.a.render(r.a.createElement(b,null),document.getElementById("root"))},84:function(e,t,a){e.exports=a(1198)},89:function(e,t,a){},95:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.5cf03052.chunk.js.map