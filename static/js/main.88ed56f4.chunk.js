(this.webpackJsonpiphone=this.webpackJsonpiphone||[]).push([[0],[,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(0),i=t(1),s=t.n(i),o=t(4),l=t.n(o),r=(t(10),t(2));t(11),t(12);function a(e){console.log("nav");var n=["nav",["nav_white","nav_red","nav_green","nav_blue","nav_black"][e.num],window.scrollY>0?"sticky":null].filter((function(e){return e})).join(" "),t=function(n){console.log(n),console.log("scroll"),window.scrollTo({top:e.heights[n],left:0,behavior:"smooth"}),e.setPage(n)};return Object(c.jsx)("div",{className:n,children:Object(c.jsxs)("ul",{className:"navigation",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#home",onClick:function(){return t(0)},children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#about",onClick:function(){return t(1)},children:"iPhone12"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#pro",onClick:function(){return t(2)},children:"Pro"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#contact",onClick:function(){return t(3)},children:"Contact"})})]})})}t(13);var u=t.p+"static/media/white.08ecb974.png",j=t.p+"static/media/red.22a416bc.png",d=t.p+"static/media/green.3adbca9c.png",b=t.p+"static/media/blue.b91ea565.png",h=t.p+"static/media/black.4ca1a666.png";function m(e){var n=[u,j,d,b,h];return Object(c.jsxs)("section",{className:"main "+["main_white","main_red","main_green","main_blue","main_black"][e.num],children:[Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h1",{children:"iPhone 12"}),Object(c.jsx)("div",{className:"bg",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{onClick:function(){return e.setNum(0)}}),Object(c.jsx)("li",{onClick:function(){return e.setNum(1)}}),Object(c.jsx)("li",{onClick:function(){return e.setNum(2)}}),Object(c.jsx)("li",{onClick:function(){return e.setNum(3)}}),Object(c.jsx)("li",{onClick:function(){return e.setNum(4)}})]})})]}),Object(c.jsx)("div",{className:"imgBx",children:Object(c.jsx)("img",{src:n[e.num],alt:"#"})})]})}t(14);var p=t.p+"static/media/iphone1.bf7f95cf.png",g=t.p+"static/media/iphone3.2290c06e.png",x=t.p+"static/media/iphone4.18927741.png",f=t.p+"static/media/iphone5.69e09843.png",O=t.p+"static/media/iphone2.6de741a1.png";function v(e){console.log("about");var n=[p,g,x,f,O],t=function(e){var t=[];return t.push(n[(e+3)%5]),t.push(n[(e+1)%5]),t.push(n[e%5]),t.push(n[(e+2)%5]),t.push(n[(e+4)%5]),t}(e.num).map((function(e,n){return Object(c.jsx)("div",{className:"imgBx",children:Object(c.jsx)("img",{src:e,alt:"#"})},n)}));return Object(c.jsx)("section",{className:"about "+["about_white","about_red","about_green","about_blue","about_black"][e.num],children:Object(c.jsxs)("div",{className:"container",children:[t,Object(c.jsx)("div",{className:"bg",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{onClick:function(){return e.setNum(0)}}),Object(c.jsx)("li",{onClick:function(){return e.setNum(1)}}),Object(c.jsx)("li",{onClick:function(){return e.setNum(2)}}),Object(c.jsx)("li",{onClick:function(){return e.setNum(3)}}),Object(c.jsx)("li",{onClick:function(){return e.setNum(4)}})]})})]})})}t(15);var N=t.p+"static/media/bluePro.09f7906f.png",k=t.p+"static/media/goldPro.0f633389.png",C=t.p+"static/media/silverPro.e5aef0d0.png",w=t.p+"static/media/graphitePro.3cdaa4f2.png";function _(){var e=[N,k,C,w],n=Object(i.useState)(0),t=Object(r.a)(n,2),s=t[0],o=t[1];return console.log("pro"),Object(c.jsxs)("section",{className:"pro "+["pro_blue","pro_gold","pro_silver","pro_graphite"][s],children:[Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h1",{children:"Pro\uc5d0\uc11c \uc815\uad50\ud55c \uc0ac\uc9c4\ucd2c\uc601\uc744 \uc811\ud574\ubcf4\uc138\uc694."}),Object(c.jsxs)("div",{className:"bg",children:[Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{onClick:function(){return o(0)}}),Object(c.jsx)("li",{onClick:function(){return o(1)}}),Object(c.jsx)("li",{onClick:function(){return o(2)}}),Object(c.jsx)("li",{onClick:function(){return o(3)}})]}),Object(c.jsx)("h4",{children:["\ud37c\uc2dc\ud53d \ube14\ub8e8","\uace8\ub4dc","\uc2e4\ubc84","\uadf8\ub798\ud30c\uc774\ud2b8"][s]})]})]}),Object(c.jsx)("div",{className:"imgBx",children:Object(c.jsx)("img",{src:e[s],alt:"#"})})]})}t(16);var P=t.p+"static/media/box.53432038.png",A=t.p+"static/media/apple.121d473c.png";function E(){console.log("contact");var e=function(e){window.open(["https://shop.tworld.co.kr/exhibition/view?exhibitionId=P00000157&utm_medium=cpc&utm_source=google&utm_campaign=iPhone12_2_teasing_PC&utm_term=A179&gclid=EAIaIQobChMIvNvQs6717AIVxK6WCh1phwBvEAAYASAAEgIXS_D_BwE","https://shop.kt.com:444/display/olhsPlan.do?plnDispNo=1510","https://shop.uplus.co.kr/pc/event/eventView?ushpPmtnNo=6695&eventOrder=lately&ushpBzdpCd=01&pageNo=&fromId=pgrs&ushpPmtnDivsCd=03&gclid=EAIaIQobChMI5N_H36717AIVhrmWCh27tgMXEAAYAiAAEgKkk_D_BwE"][e])};return Object(c.jsxs)("section",{className:"contact",children:[Object(c.jsx)("div",{className:"content",children:Object(c.jsx)("div",{className:"imgBx",children:Object(c.jsx)("img",{src:P,alt:"#"})})}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("img",{src:A,alt:"#"})}),Object(c.jsx)("div",{className:"url",onClick:function(){return e(0)},children:"SKT \ubc14\ub85c\uac00\uae30"}),Object(c.jsx)("div",{className:"url",onClick:function(){return e(1)},children:"KT \ubc14\ub85c\uac00\uae30"}),Object(c.jsx)("div",{className:"url",onClick:function(){return e(2)},children:"LG \ubc14\ub85c\uac00\uae30"})]})]})}var I=function(){var e=Object(i.useState)(0),n=Object(r.a)(e,2),t=n[0],s=n[1],o=[],l=0;return Object(i.useEffect)((function(){console.log("render"),window.addEventListener("scroll",(function(){document.querySelector(".nav").classList.toggle("sticky",window.scrollY>0)})),document.querySelectorAll("section").forEach((function(e){o.push(e.offsetTop)})),window.addEventListener("mousewheel",(function(e){e.wheelDelta<0&&l<3&&(console.log("page: "+l),window.scrollTo({top:o[++l],left:0,behavior:"smooth"})),e.wheelDelta>0&&l>0&&(console.log("page: "+l),window.scrollTo({top:o[--l],left:0,behavior:"smooth"}))}))})),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(a,{num:t,setNum:s,heights:o,setPage:function(e){l=e}}),Object(c.jsx)(m,{num:t,setNum:s}),Object(c.jsx)(v,{num:t,setNum:s}),Object(c.jsx)(_,{}),Object(c.jsx)(E,{})]})},B=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,s=n.getLCP,o=n.getTTFB;t(e),c(e),i(e),s(e),o(e)}))};l.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root")),B()}],[[17,1,2]]]);
//# sourceMappingURL=main.88ed56f4.chunk.js.map