(this.webpackJsonpmathsdegree=this.webpackJsonpmathsdegree||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),s=t(7),a=t.n(s),o=(t(13),t(8)),i=t(2),u=(t(14),t(4)),b=t(0);var j=function(e){var n=["#F7B724","#6239DF","#4BA6FF","#CD4794"];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"question-container",children:Object(b.jsx)("h1",{className:"no-margin",children:e.prompt})}),Object(b.jsx)("div",{className:"answer-container",children:e.answers.map((function(t,r){return Object(b.jsx)("button",{className:"clickable-btn answer-btn",onClick:function(){return e.onAnswer(r)},style:{backgroundColor:n[r]},children:t},r)}))})]})};var l=function(e){var n=function(n){return n===e.correctI?"clickable-btn answer-btn correct":n===e.inputI?"clickable-btn answer-btn incorrect":"clickable-btn answer-btn other-answer"};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"question-container",children:[Object(b.jsx)("h1",{className:"no-margin",children:e.prompt}),Object(b.jsx)("p",{className:"no-margin",children:e.correctI===e.inputI?"Correct!! \u2705\u2705\u2705 Great job!":"Unlucky! \ud83d\udc80\ud83d\ude14"}),Object(b.jsx)("p",{className:"no-margin",children:"Press any button to continue"})]}),Object(b.jsx)("div",{className:"answer-container",children:e.answers.map((function(t,r){return Object(b.jsx)("button",{className:n(r),onClick:e.onContinue,children:t},r)}))})]})};var h=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Maths Degree - The Game That Counts"}),Object(b.jsx)("button",{onClick:e.onContinue,className:"start-btn clickable-btn",children:"Pick a question"})]})};var m=function(){var e=Object(r.useState)(0),n=Object(i.a)(e,2),t=n[0],c=n[1],s=Object(r.useState)(0),a=Object(i.a)(s,2),m=a[0],p=a[1],d=Object(r.useState)(0),O=Object(i.a)(d,2),w=O[0],f=O[1],x=Object(r.useState)([]),v=Object(i.a)(x,2),g=v[0],C=v[1],k=Object(r.useState)(0),N=Object(i.a)(k,2),F=N[0],T=N[1];return Object(b.jsx)("div",{className:"App",children:0===m?Object(b.jsx)(h,{onContinue:function(){p(1);var e=function(e,n){var t=Math.floor(Math.random()*(e-1));return t>=n?t+1:t}(u.length,t);c(e);var n=u[e].answers,r=n[0],s=function(e){var n,t=Object(o.a)(e),r=t.length;for(;0!==r;){n=Math.floor(Math.random()*r),r--;var c=[t[n],t[r]];t[r]=c[0],t[n]=c[1]}return t}(n);C(s),f(s.indexOf(r))}}):1===m?Object(b.jsx)(j,{prompt:u[t].prompt,answers:g,onAnswer:function(e){T(e),p(2)}}):Object(b.jsx)(l,{prompt:u[t].prompt,answers:g,correctI:w,inputI:F,onContinue:function(){p(0)}})})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,s=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),p()},4:function(e){e.exports=JSON.parse('[{"prompt":"The answer is 31 and this is a very long question so what is the","answers":[31,33,35,37]},{"prompt":"The answer is 55","answers":[55,10,26,40]},{"prompt":"The answer is 1","answers":[1,2,3,4]},{"prompt":"The answer is 5","answers":[5,6,7,9]},{"prompt":"The answer is 10","answers":[10,9,4,20]}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.a134f50b.chunk.js.map