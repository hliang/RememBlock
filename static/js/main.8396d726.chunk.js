(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(7),i=a.n(s),c=(a(15),a(8)),o=a(1),l=a(2),h=a(4),m=a(3),_=a(5),u=function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar"},n.a.createElement("ul",null,n.a.createElement("li",{className:"brandname"},n.a.createElement("a",{href:"/RememBlock"},"RememBlock")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",null,this.props.message)),n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",null,"Score: ",this.props.currScore," | Top Score: ",this.props.topScore))))}}]),t}(r.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(l.a)(t,[{key:"blockItem",value:function(e){var t=this;return n.a.createElement("div",{key:e,name:e,className:"click-item"+(this.props.shake?" shake":""),onClick:function(){return t.props.callbackFromParent(e)}},n.a.createElement("img",{src:"./assets/img/"+e+".jpg",alt:e}))}},{key:"render",value:function(){var e=this;return n.a.createElement("main",{className:"container"},this.props.blocksArr.map(function(t){return e.blockItem(t)}))}}]),t}(r.Component),p=function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"hintwrapper"},n.a.createElement("span",{id:"toglehint",className:"hint",onClick:this.props.toggleHint},"Hint: ",this.props.showHint?"":"OFF"),n.a.createElement("div",{className:this.props.showHint?"":"hidden"},this.props.alreadyClickedArr.map(function(e){return n.a.createElement("span",{key:e,className:"hint"},e)})))}}]),t}(r.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(l.a)(t,[{key:"githublogo",value:function(){return n.a.createElement("svg",{height:"20",className:"octicon octicon-mark-github",viewBox:"0 0 16 16",version:"1.1",width:"34","aria-hidden":"true"},n.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"bottom"},n.a.createElement("a",{href:"https://github.com/hliang/rememblock"},this.githublogo(),"source code",n.a.createElement("img",{alt:"react",src:"./assets/img/react.svg"}))))}}]),t}(r.Component);function d(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),r=[e[a],e[t]];e[t]=r[0],e[a]=r[1]}return e}var f=[{name:"Letters",imgArray:["a","b","c","d","e","f","g","h","i","j","k","l"]},{name:"Miss Korean",imgArray:["mk_0","mk_1","mk_10","mk_11","mk_12","mk_13","mk_14","mk_15","mk_16","mk_17","mk_2","mk_3","mk_4","mk_5","mk_6","mk_7","mk_8","mk_9"]},{name:"Dog Head",imgArray:["dh_0","dh_1","dh_10","dh_11","dh_12","dh_13","dh_14","dh_15","dh_2","dh_3","dh_4","dh_5","dh_6","dh_7","dh_8","dh_9"]},{name:"Fish",imgArray:["fish_0","fish_1","fish_10","fish_11","fish_12","fish_13","fish_14","fish_15","fish_16","fish_17","fish_18","fish_19","fish_2","fish_3","fish_4","fish_5","fish_6","fish_7","fish_8","fish_9"]},{name:"Lips",imgArray:["lips_1","lips_10","lips_11","lips_12","lips_13","lips_14","lips_15","lips_16","lips_17","lips_18","lips_19","lips_2","lips_20","lips_3","lips_4","lips_5","lips_6","lips_7","lips_8","lips_9"]},{name:"NBA",imgArray:["nba_76er","nba_bobc","nba_buck","nba_bull","nba_cava","nba_celt","nba_clip","nba_grizz","nba_hawk","nba_hawk2","nba_heat","nba_jazz","nba_jazz2","nba_kick","nba_king","nba_laker","nba_magi","nba_mav","nba_mav2","nba_nets","nba_nugg","nba_pace","nba_pist","nba_rapt","nba_rock","nba_rock2","nba_soni","nba_sonic","nba_spur","nba_sun","nba_timb","nba_trail","nba_warr","nba_wasp","nba_wizz"]}],g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={currScore:0,topScore:0,blocksArr:d(f[Math.floor(Math.random()*f.length)].imgArray).slice(0,12),alreadyClickedArr:[],message:"Click a block to start the game",showHint:!1,shake:!1},a.correctGuess=function(e){a.setState(function(t){return a.state.alreadyClickedArr.length===a.state.blocksArr.length-1?{currScore:0,topScore:a.state.topScore+1,blocksArr:d(a.state.blocksArr),alreadyClickedArr:[],message:"You Win!",shake:!1}:{currScore:t.currScore+1,topScore:t.currScore+1>t.topScore?t.currScore+1:t.topScore,blocksArr:d(t.blocksArr),alreadyClickedArr:[].concat(Object(c.a)(t.alreadyClickedArr),[e]),message:"Good Guess",shake:!1}})},a.wrongGuess=function(){a.setState({currScore:0,topScore:a.state.topScore,blocksArr:d(a.state.blocksArr),alreadyClickedArr:[],message:"You already clicked that. Game Over!",shake:!0,showHint:!1})},a.handleBlockClick=function(e){a.state.alreadyClickedArr.includes(e)?a.wrongGuess():a.correctGuess(e)},a.toggleHint=function(){a.setState(function(e){return{showHint:!e.showHint}})},a}return Object(_.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(u,{currScore:this.state.currScore,topScore:this.state.topScore,message:this.state.message,showHint:this.state.showHint}),n.a.createElement(b,{blocksArr:this.state.blocksArr,shake:this.state.shake,callbackFromParent:this.handleBlockClick}),n.a.createElement(p,{alreadyClickedArr:this.state.alreadyClickedArr,showHint:this.state.showHint,toggleHint:this.toggleHint}),n.a.createElement(k,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.8396d726.chunk.js.map