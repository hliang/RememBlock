(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(7),o=r.n(c),s=(r(15),r(8)),i=r(1),l=r(2),u=r(4),h=r(3),m=r(5),k=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar"},n.a.createElement("ul",null,n.a.createElement("li",{className:"brandname"},n.a.createElement("a",{href:"/"},"RememBlock")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",null,this.props.message)),n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",null,"Score: ",this.props.currScore," | Top Score: ",this.props.topScore),n.a.createElement("span",{id:"toglehint",className:"hint",onClick:this.props.toggleHint},"Hint: ",this.props.showHint?"ON":"OFF"))))}}]),t}(a.Component),d=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"blockItem",value:function(e){var t=this;return n.a.createElement("div",{key:e,name:e,className:"click-item"+(this.props.shake?" shake":""),onClick:function(){return t.props.callbackFromParent(e)}},n.a.createElement("img",{src:"/assets/img/"+e+".jpeg",alt:e}))}},{key:"render",value:function(){var e=this;return n.a.createElement("main",{className:"container"},this.props.blocksArr.map(function(t){return e.blockItem(t)}))}}]),t}(a.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"hint"},this.props.alreadyClickedArr.map(function(e){return n.a.createElement("span",{key:e,className:"hint"},e)}))}}]),t}(a.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"githublogo",value:function(){return n.a.createElement("svg",{height:"20",className:"octicon octicon-mark-github",viewBox:"0 0 16 16",version:"1.1",width:"34","aria-hidden":"true"},n.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"bottom"},n.a.createElement("a",{href:"https://github.com/hliang/rememblock"},this.githublogo(),"source code",n.a.createElement("img",{alt:"react",src:"/assets/img/react.svg"}))))}}]),t}(a.Component);function g(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),a=[e[r],e[t]];e[t]=a[0],e[r]=a[1]}return e}var f=function(e){function t(){var e,r;Object(i.a)(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(r=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={currScore:0,topScore:0,blocksArr:["a","b","c","d","e","f","g","h","i","j","k","l"],alreadyClickedArr:[],message:"Click a block to start the game",showHint:!1,shake:!1},r.correctGuess=function(e){r.setState(function(t){return r.state.alreadyClickedArr.length===r.state.blocksArr.length-1?{currScore:0,topScore:r.state.topScore+1,blocksArr:g(r.state.blocksArr),alreadyClickedArr:[],message:"You Win!",shake:!1}:{currScore:t.currScore+1,topScore:t.currScore+1>t.topScore?t.currScore+1:t.topScore,blocksArr:g(t.blocksArr),alreadyClickedArr:[].concat(Object(s.a)(t.alreadyClickedArr),[e]),message:"Good Guess",shake:!1}})},r.wrongGuess=function(){r.setState({currScore:0,topScore:r.state.topScore,blocksArr:g(r.state.blocksArr),alreadyClickedArr:[],message:"You already clicked that. Game Over!",shake:!0})},r.handleBlockClick=function(e){r.state.alreadyClickedArr.includes(e)?r.wrongGuess():r.correctGuess(e)},r.toggleHint=function(){r.setState(function(e){return{showHint:!e.showHint}})},r}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(k,{currScore:this.state.currScore,topScore:this.state.topScore,message:this.state.message,showHint:this.state.showHint,toggleHint:this.toggleHint}),n.a.createElement(d,{blocksArr:this.state.blocksArr,shake:this.state.shake,callbackFromParent:this.handleBlockClick}),this.state.showHint&&n.a.createElement(p,{alreadyClickedArr:this.state.alreadyClickedArr}),n.a.createElement(b,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,r){e.exports=r(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.9e9ae3af.chunk.js.map