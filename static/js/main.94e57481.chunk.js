(this["webpackJsonpproject-1"]=this["webpackJsonpproject-1"]||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},32:function(e,t,a){e.exports=a(59)},38:function(e,t,a){},39:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),l=(a(37),a(38),a(3)),s=a(4),i=a(5),m=a(6),u=a(15),p=a(14),d=(a(39),a(24)),h=a.n(d),f=(a(42),a(43),function(e){return r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"container"},r.a.createElement(h.a,{isOpen:e.state.menuOpen,menuClicked:e.openMenu,width:32,height:24,strokeWidth:3,rotate:0,color:"white",borderRadius:0,animationDuration:.5,className:"HamburgerMenu"}),r.a.createElement("div",{className:"logo"},r.a.createElement(u.b,{to:"./#/"},"1 A Logo here"))))}),E=(a(47),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Hello"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"message"},this.props.message)))}}]),a}(n.Component)),g=(a(48),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={newsAPI:[],api_loaded:!1},e.showMoreNews=function(e){document.getElementById(e+"_feed_content").classList.toggle("show")},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new Headers;t.append("Authorization","5828a7b4e2474b048548236b0b2854d5"),fetch("https://newsapi.org/v2/top-headlines?country=gb",{method:"GET",headers:t,redirect:"follow",pageSize:2}).then((function(e){return e.text()})).then((function(t){var a=JSON.parse(t);e.setState({newsAPI:a.articles,api_loaded:!0})})).catch((function(e){return console.log("error",e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"News"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"feeds"},this.state.api_loaded<1&&r.a.createElement("li",{key:"empty"},"No posts yet!"),this.state.newsAPI.map((function(t,a){var n=new Date(Date.parse(t.publishedAt)),c=n.getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()]+" "+n.getFullYear();return r.a.createElement("li",{key:a},r.a.createElement("article",null,r.a.createElement("header",{className:"article-title"},r.a.createElement("h2",null,r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.title))),r.a.createElement("main",null,r.a.createElement("div",{className:"publishedAt"},c),t.urlToImage&&r.a.createElement("div",{className:"urlToImage"},r.a.createElement("img",{src:t.urlToImage,alt:t.title})),t.description?r.a.createElement("div",{className:"description"},t.description.split(" ").splice(0,10).join(" ")+"..."):"",t.content?r.a.createElement("div",{className:"content",id:a+"_feed_content"},t.content):"",r.a.createElement("button",{className:"read_more",onClick:function(){return e.showMoreNews(a)}},"Read More"))))})))))}}]),a}(n.Component)),b=(a(49),function(){return r.a.createElement("div",{className:"spinnerLoading"},r.a.createElement("img",{width:"16",height:"16",alt:"star",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}))}),v=a(16),N=a(11),w=(a(50),a(27)),y=a.n(w),A=function(){return r.a.createElement("div",{className:"SplashScreen"},r.a.createElement("img",{src:y.a,alt:"SplashScreen"}))},O=(a(51),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={newsSearchAPI:[],api_loaded:!1,pageNumber:1,renderSplashscreen:!0},e.toggleSpinnerLoading=function(){document.getElementById("load_more").getElementsByClassName("spinnerLoading")[0].classList.toggle("show")},e.getNews=function(t){var a=new Headers;a.append("x-rapidapi-host","contextualwebsearch-websearch-v1.p.rapidapi.com"),a.append("x-rapidapi-key","mixRQpajIV7xgRyAnm2az9xjSEPZpcef"),a.append("Authorization","5828a7b4e2474b048548236b0b2854d5");var n={method:"GET",headers:a,redirect:"follow"};fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=false&pageNumber="+e.state.pageNumber+"&pageSize=10&q=wordpress&safeSearch=false",n).then((function(e){return e.text()})).then((function(a){var n=JSON.parse(a);e.setState({newsSearchAPI:e.state.newsSearchAPI.concat(n.value),api_loaded:!0,renderSplashscreen:!1}),console.dir(e.state),"update"===t&&e.toggleSpinnerLoading()})).catch((function(e){return console.log("error",e)}))},e.showMoreNews=function(e){document.getElementById(e+"_feed_content").classList.toggle("show")},e.loadMoreNews=function(){e.setState({pageNumber:e.state.pageNumber+1}),e.toggleSpinnerLoading()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getNews()}},{key:"componentDidUpdate",value:function(e,t){t.pageNumber!==this.state.pageNumber&&this.getNews("update")}},{key:"render",value:function(){var e=this;return this.state.renderSplashscreen?r.a.createElement(A,null):r.a.createElement("div",{className:"NewsSearchAPI"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"feeds"},this.state.newsSearchAPI.map((function(t,a){var n=new Date(Date.parse(t.datePublished)),c=n.getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()]+" "+n.getFullYear();return r.a.createElement("li",{key:a},r.a.createElement("article",null,r.a.createElement(N.a,null,r.a.createElement(N.a.Body,null,r.a.createElement(N.a.Title,null,r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",dangerouslySetInnerHTML:{__html:t.title}})),r.a.createElement(N.a.Text,null,r.a.createElement("span",{className:"publishedAt"},c),t.image.url&&r.a.createElement("span",{className:"urlToImage"},r.a.createElement("img",{src:t.image.url,alt:t.title})),t.description?r.a.createElement("span",{className:"description",dangerouslySetInnerHTML:{__html:t.description.split(" ").splice(0,10).join(" ")+"..."}}):"",t.body?r.a.createElement("span",{className:"content",id:a+"_feed_content",dangerouslySetInnerHTML:{__html:t.body}}):""),r.a.createElement(v.a,{variant:"primary",size:"sm",className:"read_more",onClick:function(){return e.showMoreNews(a)}},"Read More")))))}))),r.a.createElement("div",{id:"load_more"},r.a.createElement(v.a,{variant:"primary",size:"sm",className:"load_more",onClick:function(){return e.loadMoreNews()}},"Load More"),r.a.createElement(b,null))))}}]),a}(n.Component)),S=function(){return r.a.createElement("article",{className:"not-found container"},r.a.createElement("h1",null,"404!"),r.a.createElement("p",null,"Content not found. ",r.a.createElement(u.b,{to:"./#/"},"Return to home")))},k=a(29),j=a.n(k),M=(a(55),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"menu"},[{i:0,to:"./#/",title:"Home"},{i:1,to:"./#/newsapi",title:"News API"},{i:2,to:"./#/newssearchapi",title:"News Search API"},{i:3,to:"./#/randomuser",title:"Random User"},{i:4,to:"./#/camera",title:"Camera"}].map((function(t){return r.a.createElement("div",{className:"menu-item",key:t.i},r.a.createElement("a",{href:t.to,onClick:e.props.closeCallback,rel:"noopener noreferrer",title:t.title},t.title))})))}}]),a}(n.Component)),_=a(20),C=a(30),I=a.n(C),x=a(31),P=a.n(x),T=(a(56),a(57),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={photos:[]},e.handleTakePhoto=function(t){e.setState({photos:[].concat(Object(_.a)(e.state.photos),[t])}),console.log(e.state.photos)},e.handleCameraError=function(e){},e.deletePhoto=function(t){var a=Object(_.a)(e.state.photos);a.splice(t.target.id,1),e.setState({photos:a})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CameraApp"},r.a.createElement(P.a,{parent:this}),r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"feeds"},this.state.photos<1&&r.a.createElement("li",{className:"empty",key:"empty"},"Take a photo"),this.state.photos.map((function(t,a){return r.a.createElement("li",{className:"photo",key:a},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("br",null),r.a.createElement("button",{onClick:e.deletePhoto,id:a},"Delete"))}))),r.a.createElement(I.a,{onTakePhoto:function(t){e.handleTakePhoto(t)},onCameraError:function(t){e.handleCameraError(t)}})))}}]),a}(n.Component)),D=(a(58),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={RandomUser:[],renderSplashscreen:!0},e.mapsSelector=function(e,t){-1!==navigator.platform.indexOf("iPhone")||-1!==navigator.platform.indexOf("iPod")||-1!==navigator.platform.indexOf("iPad")||-1!==navigator.platform.indexOf("Mac")?window.open("http://maps.apple.com/?q=".concat(e,",").concat(t)):window.open("https://www.google.com/maps/search/?api=1&query=".concat(e,",").concat(t))},e.getNews=function(t){var a=new Headers;a.append("Cookie","__cfduid=da715dd02f237cec0d012a432189a23021587202059"),fetch("https://randomuser.me/api/?results=10",{method:"GET",headers:a,redirect:"follow"}).then((function(e){return e.text()})).then((function(t){var a=JSON.parse(t);e.setState({RandomUser:e.state.RandomUser.concat(a.results),renderSplashscreen:!1})})).catch((function(e){return console.log("error",e)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getNews()}},{key:"render",value:function(){var e=this;return this.state.renderSplashscreen?r.a.createElement(A,null):r.a.createElement("div",{className:"RandomUser"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"feeds"},this.state.RandomUser.map((function(t,a){var n=new Date(Date.parse(t.dob.date)),c=n.getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()]+" "+n.getFullYear();return r.a.createElement("li",{key:a},r.a.createElement("article",null,r.a.createElement(N.a,null,r.a.createElement(N.a.Body,null,r.a.createElement(N.a.Title,null,t.name.title+" "+t.name.first+" "+t.name.last),r.a.createElement(N.a.Text,null,r.a.createElement("span",{className:"gender"},t.gender),r.a.createElement("span",{className:"dob"},c),r.a.createElement("span",{className:"email"},r.a.createElement("a",{href:"mailto:".concat(t.email)},t.email)),t.picture.medium&&r.a.createElement("span",{className:"urlToImage"},r.a.createElement("img",{src:t.picture.medium,alt:t.name.first+" "+t.name.last})),r.a.createElement("span",{className:"location"},r.a.createElement("span",{className:"street"},t.location.street.number+" "+t.location.street.name),r.a.createElement("span",{className:"city"},t.location.city),r.a.createElement("span",{className:"state"},t.location.state),r.a.createElement("span",{className:"country"},t.location.country),r.a.createElement("span",{className:"postcode"},t.location.postcode),r.a.createElement("span",{className:"coordinates"},r.a.createElement(v.a,{variant:"primary",size:"sm",className:"read_more",onClick:function(){return e.mapsSelector(28.6139,77.209)}},"Maps"))))))))})))))}}]),a}(n.Component)),J=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={welcome:"Hello To You",menuOpen:!1},e}return Object(s.a)(a,[{key:"openMenu",value:function(){this.setState({menuOpen:!0})}},{key:"closeMenu",value:function(){this.setState({menuOpen:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement(u.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(j.a,{isOpen:this.state.menuOpen,closeCallback:this.closeMenu.bind(this)},r.a.createElement(M,{closeCallback:this.closeMenu.bind(this)})),r.a.createElement(f,{state:this.state,openMenu:this.openMenu.bind(this)}),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(E,{message:e.state.welcome})}}),r.a.createElement(p.a,{exact:!0,path:"/newsapi",render:function(){return r.a.createElement(g,null)}}),r.a.createElement(p.a,{exact:!0,path:"/newssearchapi",render:function(){return r.a.createElement(O,null)}}),r.a.createElement(p.a,{exact:!0,path:"/camera",render:function(){return r.a.createElement(T,null)}}),r.a.createElement(p.a,{exact:!0,path:"/randomuser",render:function(){return r.a.createElement(D,null)}}),r.a.createElement(p.a,{component:S}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.94e57481.chunk.js.map