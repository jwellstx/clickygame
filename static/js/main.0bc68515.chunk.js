(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Moira","image":"http://vignette.wikia.nocookie.net/overwatch/images/a/a2/Moira_portrait0.png/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/747/window-height/747?cb=20181108054744"},{"id":2,"name":"Genji","image":"http://vignette.wikia.nocookie.net/overwatch/images/4/45/256px-Genji-ow2-portrait.png/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/256/window-height/256?cb=20191115221708"},{"id":3,"name":"Brigitte","image":"http://vignette.wikia.nocookie.net/overwatch/images/7/7b/Brigitte_portrait.png/revision/latest/window-crop/width/200/x-offset/152/y-offset/0/window-width/450/window-height/449?cb=20190114232133"},{"id":4,"name":"Mercy","image":"http://vignette.wikia.nocookie.net/overwatch/images/0/0f/Mercy-ow2-portrait.png/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/641/window-height/641?cb=20191120133428"},{"id":5,"name":"Sombra","image":"http://vignette.wikia.nocookie.net/overwatch/images/f/fc/Sombra_portrait.png/revision/latest/window-crop/width/200/x-offset/45/y-offset/0/window-width/432/window-height/431?cb=20170105140023"},{"id":6,"name":"Zarya","image":"http://vignette.wikia.nocookie.net/overwatch/images/d/d1/Zarya_portrait.png/revision/latest/window-crop/width/200/x-offset/38/y-offset/0/window-width/653/window-height/652?cb=20160429041121"},{"id":7,"name":"Reinhardt","image":"http://vignette.wikia.nocookie.net/overwatch/images/3/3b/Reinhardt-ow2-portrait.png/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/1081/window-height/1081?cb=20191120134635"},{"id":8,"name":"Doomfist","image":"http://vignette.wikia.nocookie.net/overwatch/images/0/0e/Doomfist_portrait.png/revision/latest/window-crop/width/200/x-offset/130/y-offset/0/window-width/442/window-height/441?cb=20170807035611"},{"id":9,"name":"Lucio","image":"http://vignette.wikia.nocookie.net/overwatch/images/e/e0/Lucioplate.png/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/809/window-height/809?cb=20161106124823"},{"id":10,"name":"Mei","image":"http://vignette.wikia.nocookie.net/overwatch/images/d/da/Mei-ow2-portrait.png/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/710/window-height/710?cb=20191120134408"},{"id":11,"name":"Pharah","image":"http://vignette.wikia.nocookie.net/overwatch/images/f/fe/Pharah_portrait.png/revision/latest/window-crop/width/200/x-offset/29/y-offset/0/window-width/671/window-height/670?cb=20160429041650"},{"id":12,"name":"Hammond","image":"http://vignette.wikia.nocookie.net/overwatch/images/8/83/WreckingBall_portrait.png/revision/latest/window-crop/width/200/x-offset/221/y-offset/0/window-width/450/window-height/449?cb=20190114232714"}]')},,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(6),r=a.n(o),c=(a(14),a(8)),s=a(1),l=a(2),h=a(4),w=a(3),d=(a(15),a(16),function(e){Object(h.a)(a,e);var t=Object(w.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-light bg-dark fixed-top"},i.a.createElement("a",{className:"text refresh",href:"."},"Clicky Game"),i.a.createElement("span",{className:"text"},this.props.message),i.a.createElement("span",{className:"text"},"Score: ",this.props.score," | Top Score: ",this.props.topscore," "))}}]),a}(n.Component)),m=(a(17),function(e){Object(h.a)(a,e);var t=Object(w.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"jumbotron jumbotron-fluid"},i.a.createElement("div",{className:"container"},i.a.createElement("br",null),i.a.createElement("h1",{className:"display-4"},"Overwatch!"),i.a.createElement("p",{className:"lead"},"A memory based game, click on each character only ",i.a.createElement("strong",null,"once"),"! Click all 12 to win!")))}}]),a}(n.Component)),p=(a(18),function(e){Object(h.a)(a,e);var t=Object(w.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col-lg-12"},this.props.children))}}]),a}(n.Component)),f=(a(19),function(e){Object(h.a)(a,e);var t=Object(w.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"textAlign"},this.props.children))}}]),a}(n.Component)),u=(a(20),function(e){Object(h.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).checkState=function(){e.props.clicked(e.props.char.name)},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{onClick:this.checkState,className:"m-4 charStyle",src:this.props.char.image,alt:this.props.char.name}))}}]),a}(n.Component)),g=(a(21),function(e){Object(h.a)(a,e);var t=Object(w.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("footer",{className:"page-footer font-small blue"},i.a.createElement("div",{className:"footer-copyright text-center py-3"},i.a.createElement("strong",null,"\xa9 2020 Copyright: jwellstx")))}}]),a}(n.Component)),v=a(7),b=function(e){Object(h.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={characters:[],message:"Click an image to begin!",score:0,topscore:0,clickedStatus:[]},e.clicked=function(t){if(-1!==e.state.clickedStatus.indexOf(t))e.setState({clickedStatus:[],message:"Incorrect, "+t+" has already been clicked!",score:0});else{var a=e.state.score+1===12,n=a?"Congrats, you won!":"You guessed correctly!",i=a?0:e.state.score+1,o=a?[]:[].concat(Object(c.a)(e.state.clickedStatus),[t]);e.setState({clickedStatus:o,message:n,score:i,topscore:e.state.topscore<=e.state.score?e.state.score+1:e.state.topscore})}e.setState({characters:e.state.characters.sort((function(){return.5-Math.random()}))})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({characters:v.map((function(t){return i.a.createElement(u,{key:t.id,char:t,clicked:e.clicked})}))})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{message:this.state.message,score:this.state.score,topscore:this.state.topscore}),i.a.createElement(m,null),i.a.createElement(p,null,i.a.createElement(f,null,this.state.characters)),i.a.createElement("br",null),i.a.createElement(g,null))}}]),a}(n.Component);r.a.render(i.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.0bc68515.chunk.js.map