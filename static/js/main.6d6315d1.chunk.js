(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/tux.6ce63a3a.svg"},29:function(e,t,a){e.exports=a.p+"static/media/fish.98206e1c.jpeg"},32:function(e,t,a){e.exports=a(53)},38:function(e,t,a){},39:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),i=a.n(c),o=(a(37),a(38),a(1)),l=a(8),s=a(3),m=a(2),u=a(4),p=(a(39),a(13)),h=a(14),d=(a(45),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).toggleMode=function(e){if(a.props.root.mobileScreenWidth>=document.body.clientWidth)switch(a.props.root.actionCreator("CHANGE_SEARCHER_VALUE",""),e){case"COMPACT":return a.props.root.actionCreator("SWITCH_SEARCHER_MODE","FULLSIZE"),!0;case"FULLSIZE":return a.props.root.actionCreator("SWITCH_SEARCHER_MODE","COMPACT"),a.search({search:a.props.searcher.search,expression:"",items:a.props.searcher.searchItems,fast:!0}),!0}else a.props.root.actionCreator("SWITCH_SEARCHER_MODE","DEFAULT")},a.setSeacher=function(e){switch(e){case"FULLSIZE":return"header-searcher searcher_active";case"COMPACT":case"DEFAULT":return"header-searcher"}},a.searchAPI=function(e){a.props.root.actionCreator("CHANGE_SEARCHER_VALUE",e),a.search({search:a.props.searcher.search,expression:a.props.searcher.searcherValue,items:a.props.searcher.searchItems})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"search",value:function(e){this.props.root.actionCreator("SEARCH_EXPRESSION",{search:e.search,expression:e.expression,items:e.items,fast:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header-container"},r.a.createElement("p",{className:"header-title"},r.a.createElement("a",{href:"/"},"Dooboox")),r.a.createElement("div",{className:this.setSeacher(this.props.searcher.searcherMode)},r.a.createElement("input",{type:"text",name:"searcher",id:"search",value:this.props.searcher.searcherValue,onChange:function(t){return e.searchAPI(t.target.value)}}),r.a.createElement("div",{className:"search-icon_box",onClick:function(){e.toggleMode(e.props.searcher.searcherMode)}},r.a.createElement(p.a,{icon:h.d,className:"search-icon"})))))}}]),t}(n.Component)),f=a(9),E=a(6),b=(a(46),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this))).createLink=function(e){return e.refresh?r.a.createElement("a",{href:e.link,key:e.key,className:"tp-link"},r.a.createElement(p.a,{icon:h.a}),e.value):r.a.createElement(f.b,{to:e.link,key:e.key,className:"tp-link"},r.a.createElement(p.a,{icon:h.a}),e.value)},a.createLinksBlock=function(e){var t=e.links.map(function(e){return a.createLink({key:e.id,value:e.value,link:e.link,refresh:e.refresh})});return r.a.createElement("div",{className:"tp-links_block"},t)},a.render=function(){return a.createLinksBlock(a.props)},a.links=e.links,a}return Object(u.a)(t,e),t}(n.Component)),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this))).createText=function(e){return e.id||(e.id=""),r.a.createElement("p",{className:"tp-text",id:e.id},e.value,r.a.createElement("br",null))},a.render=function(){return a.createText({id:a.id,value:a.value})},a.id=e.id,a.value=e.value,a}return Object(u.a)(t,e),t}(n.Component),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this))).createSublink=function(e){return r.a.createElement("a",{href:e.link,key:e.key,className:"tp-sublink"},e.value)},a.createSublinksBlock=function(e){var t=e.sublinks.map(function(e){return a.createSublink({key:e.id,value:e.value,link:e.link})});return r.a.createElement("div",{className:"tp-sublinks_block"},t)},a.render=function(){return a.createSublinksBlock(a.props)},a.sublinks=e.sublinks,a}return Object(u.a)(t,e),t}(n.Component),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this))).render=function(){return r.a.createElement("div",{className:"tp-image_block"},r.a.createElement("img",{src:a.image,id:a.id,alt:"no image",className:"tp-image"}),r.a.createElement(v,{sublinks:a.sublinks}))},a.image=e.image,a.id=String(e.id),a.sublinks=e.sublinks,a}return Object(u.a)(t,e),t}(n.Component),O=a(28),g=a.n(O),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this))).createCodeItems=function(e){return e.map(function(e,t){return r.a.createElement("li",{className:"tp-code",key:t},r.a.createElement("pre",null,e))})},a.createCodeResultItems=function(e){return e.map(function(e,t){return r.a.createElement("li",{className:"tp-code result",key:t},r.a.createElement("pre",null,e))})},a.render=function(){return r.a.createElement("div",{className:"tp-code_block"},r.a.createElement("div",{className:"tp-code_container"},r.a.createElement("div",{className:"tp-code_box"},r.a.createElement("div",{className:"dots"},r.a.createElement("div",{className:"dot-red"}),r.a.createElement("div",{className:"dot-green"}),r.a.createElement("div",{className:"dot-yellow"})),r.a.createElement("ul",{className:"tp-code_list"},a.createCodeItems(a.state.codeLines)),r.a.createElement("ul",{className:"tp-code_list result_list"},r.a.createElement("p",{className:"result-title"},"Result: "),a.createCodeResultItems(a.state.codeResult)),r.a.createElement("div",{className:"tp-code_state-bar"},r.a.createElement("div",{className:"tp-code_mode"},r.a.createElement("span",null,"NORMAL")),r.a.createElement("div",{className:"tp-code_bar-type"},r.a.createElement("span",null,"BAR TYPE: MOBILE"),r.a.createElement(p.a,{icon:h.c})),r.a.createElement("div",{className:"tp-code_main-info"},r.a.createElement("div",{className:"tp-code_buffer-name"},r.a.createElement("span",null,"~/coderpool/example/main.ts")),r.a.createElement("div",{className:"tp-code_extension-name"},r.a.createElement("span",null,"typescript"),r.a.createElement("svg",{fill:"#5E81AC",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"48px",height:"48px"},r.a.createElement("path",{d:"M3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5c0-1.105-0.895-2-2-2H5C3.895,3,3,3.895,3,5z M13.666,12.451h-2.118\tV19H9.841v-6.549H7.767V11h5.899V12.451z M13.998,18.626v-1.751c0,0,0.956,0.721,2.104,0.721c1.148,0,1.103-0.75,1.103-0.853\tc0-1.089-3.251-1.089-3.251-3.501c0-3.281,4.737-1.986,4.737-1.986l-0.059,1.559c0,0-0.794-0.53-1.692-0.53\tc-0.897,0-1.221,0.427-1.221,0.883c0,1.177,3.281,1.059,3.281,3.428C19,20.244,13.998,18.626,13.998,18.626z"})))),r.a.createElement("div",{className:"tp-code_system-type"},r.a.createElement("span",null,"utf-8"),r.a.createElement("img",{src:g.a,alt:"no icon"})),r.a.createElement("div",{className:"tp-code_buffer-info"},r.a.createElement("span",{className:"buffer-procents"},"100%"),r.a.createElement("span",{className:"buffer-size"},"12/50"),r.a.createElement("span",{className:"buffer-symbol-number"},"ln:26"))))))},a.state={},a.state.codeLines=e.lines,a.state.codeResult=e.result,a}return Object(u.a)(t,e),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"main-item"},r.a.createElement("h2",{className:"tp-title"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),r.a.createElement(b,{links:[{value:"image",link:"#image1",id:0,refresh:!0},{value:"themes",link:"#themes",id:1,refresh:!1},{value:"text",link:"#text1",id:2,refresh:!0}]}),r.a.createElement(N,{image:this.props.root.images.fish,id:"image1",sublinks:[{value:"sublink 1",link:"#text1",id:1},{value:"sublink 2",link:"#text2",id:2},{value:"sublink 3",link:"#text3",id:3}]}),r.a.createElement(k,{value:["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod cupiditate, pariatur quaerat perspiciatis eum optio similique alias sequi nemo iste impedit expedita fuga quia sint minima, hic officia dignissimos autem velit! Distinctio vero, praesentium quam nobis illum mollitia magnam veniam officiis natus maxime, non architecto repudiandae perferendis possimus accusamus, doloremque nam impedit dolores eius alias? Veritatis eaque at nisi ex numquam assumenda illo praesentium, fugiat voluptate accusantium perferendis quos odio doloribus rem, libero aspernatur ullam sed culpa, repudiandae et harum provident. Amet dignissimos ex earum praesentium, assumenda sed, nesciunt reprehenderit maxime ducimus eius pariatur nobis corrupti recusandae vitae eum quam error fuga quas impedit mollitia. \n            ","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod cupiditate, pariatur quaerat perspiciatis eum optio similique alias sequi nemo iste impedit expedita fuga quia sint minima, hic officia dignissimos autem velit! Distinctio vero, praesentium quam nobis illum mollitia magnam veniam officiis natus maxime, non architecto repudiandae perferendis possimus accusamus, doloremque nam impedit dolores eius alias?\n            "],id:"text1"}),r.a.createElement(C,{lines:["// Example comment","const sayHello = (name) => {","    console.log(`Hello maboy ${name}`);","}","  ","const name = 'Doopath';","sayHello(name)"],result:["Hello maboy Doopath"]}))))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).createLink=function(e){return r.a.createElement(f.b,{to:e.link,className:"tp-themes-link"},e.value)},a.createSubitem=function(e){return r.a.createElement("li",{className:"tp-themes-subitem"},r.a.createElement(f.b,{to:e.link,className:"tp-themes-sublink"},r.a.createElement(p.a,{icon:h.b,className:"tp-themes-arrow"}),e.value))},a.createSubitems=function(e){return e.map(function(e){return a.createSubitem(e)})},a.createSublist=function(e){return r.a.createElement("ul",{className:"tp-themes-sublist"},e)},a.createItem=function(e){return r.a.createElement("li",{className:"tp-themes-item"},a.createLink(e.link),a.createSublist(a.createSubitems(e.subitems)))},a.render=function(){return a.createItem(a.props)},a}return Object(u.a)(t,e),t}(n.Component),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"main-item"},r.a.createElement("div",{className:"tp-themes-block"},r.a.createElement("ul",{className:"tp-themes-list"},r.a.createElement(y,{link:{link:"#",value:"Very long name of some theme as example"},subitems:[{link:"#",value:"Another one sublink"},{link:"#",value:"Another one sublink"},{link:"#",value:"Another one sublink"},{link:"#",value:"Another one sublink"},{link:"#",value:"Another one sublink"}]}),r.a.createElement(y,{link:{link:"#",value:"Very long name of some theme as example"},subitems:[{link:"#",value:"Another one sublink"},{link:"#",value:"Another one sublink"},{link:"#",value:"Another one sublink"},{link:"#",value:"Another one sublink"},{link:"#",value:"Another one sublink"}]}),r.a.createElement(y,{link:{link:"#",value:"Very long name of some theme as example"},subitems:[{link:"#",value:"Another one sublink"},{link:"#",value:"Another one sublink"},{link:"#",value:"Another one sublink"},{link:"#",value:"Another one sublink"},{link:"#",value:"Another one sublink"}]}),r.a.createElement(y,{link:{link:"#",value:"Very long name of some theme as example"},subitems:[{link:"#",value:"Another one sublink"},{link:"#",value:"Another one sublink"},{link:"#",value:"Another one sublink"},{link:"#",value:"Another one sublink"},{link:"#",value:"Another one sublink"}]}),r.a.createElement(y,{link:{link:"#",value:"Very long name of some theme as example"},subitems:[{link:"#",value:"Another one sublink"},{link:"#",value:"Another one sublink"},{link:"#",value:"Another one sublink"},{link:"#",value:"Another one sublink"},{link:"#",value:"Another one sublink"}]}))))))},a}return Object(u.a)(t,e),t}(n.Component),_=function(e){return r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",null,"Developer page"))},x=function(e){return console.log("hello"),r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",null,r.a.createElement("p",null,"Redactor page")))},A=function(e){return r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",null,"Writer page"))},M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement("div",null)},a}return Object(u.a)(t,e),t}(n.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(E.a,{exact:!0,path:"/".concat(this.props.root.location.authors,"/id=1"),component:_}),r.a.createElement(E.a,{exact:!0,path:"/".concat(this.props.root.location.authors,"/id=2"),component:x}),r.a.createElement(E.a,{exact:!0,path:"/".concat(this.props.root.location.authors,"/id=3"),component:A}),r.a.createElement(E.a,{exact:!0,path:"/".concat(this.props.root.location.authors),render:function(e){return r.a.createElement(M,e)}}))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"main-item"},"About Page")))},a}return Object(u.a)(t,e),t}(n.Component),w=(a(49),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).toggleMenuMode=function(e){"compact-menu_curtain"===e?(a.props.root.actionCreator("SWITCH_BODY_SCROLL","LOCK"),a.props.root.actionCreator("SWITCH_MENU_MODE","compact-menu_curtain curtain_active")):(a.props.root.actionCreator("SWITCH_BODY_SCROLL","UNLOCK"),a.props.root.actionCreator("SWITCH_MENU_MODE","compact-menu_curtain"))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.StrictMode,null,r.a.createElement("menu",null,r.a.createElement("div",{className:"compact-menu"},r.a.createElement("p",{className:"compact-menu_title",onClick:function(t){return e.toggleMenuMode(e.props.menu.compactMenuCurtain)}},"\u041c\u0415\u041d\u042e"),r.a.createElement("div",{className:this.props.menu.compactMenuCurtain,onClick:function(t){return e.toggleMenuMode(e.props.menu.compactMenuCurtain)}},r.a.createElement("div",{className:"compact-menu_cross",title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),r.a.createElement("ul",{className:"compact-menu_list"},r.a.createElement("li",{className:"compact-menu_item"},r.a.createElement(f.b,{to:"/".concat(this.props.root.location.home),className:"fas fa-home compact-menu_link"},"\u0413\u041b\u0410\u0412\u041d\u0410\u042f")),r.a.createElement("li",{className:"compact-menu_item"},r.a.createElement(f.b,{to:"/".concat(this.props.root.location.content),className:"fas fa-align-left compact-menu_link"},"\u0421\u041e\u0414\u0415\u0420\u0416\u0410\u041d\u0418\u0415")),r.a.createElement("li",{className:"compact-menu_item"},r.a.createElement(f.b,{to:"/".concat(this.props.root.location.authors),className:"fas fa-user-astronaut compact-menu_link"},"\u0410\u0412\u0422\u041e\u0420\u042b")),r.a.createElement("li",{className:"compact-menu_item"},r.a.createElement(f.b,{to:"/".concat(this.props.root.location.about),className:"fas fa-project-diagram compact-menu_link"},"\u041e \u041f\u0420\u041e\u0415\u041a\u0422\u0415")))))))}}]),t}(n.Component)),H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this))).state={},a.state.location=e.location,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"menu"},r.a.createElement("menu",{className:"menu-list"},r.a.createElement("li",{className:"menu-item"},r.a.createElement(f.b,{to:"/".concat(this.state.location.home),className:"menu-link"},"\u0413\u041b\u0410\u0412\u041d\u0410\u042f")),r.a.createElement("li",{className:"menu-item"},r.a.createElement(f.b,{to:"/".concat(this.state.location.content),className:"menu-link"},"\u0421\u041e\u0414\u0415\u0420\u0416\u0410\u041d\u0418\u0415")),r.a.createElement("li",{className:"menu-item"},r.a.createElement(f.b,{to:"/".concat(this.state.location.authors),className:"menu-link"},"\u0410\u0412\u0422\u041e\u0420\u042b")),r.a.createElement("li",{className:"menu-item"},r.a.createElement(f.b,{to:"/".concat(this.state.location.about),className:"menu-link"},"\u041e \u041f\u0420\u041e\u0415\u041a\u0422\u0415"))))}}]),t}(n.Component),I=(a(50),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).toggleMenu=function(e){switch(e){case"FULLSIZE":return r.a.createElement(H,{location:a.props.root.location});case"COMPACT":return r.a.createElement(w,a.props)}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.toggleMenu(this.props.menu.menuMode())}}]),t}(n.Component)),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(f.a,null,r.a.createElement("main",null,r.a.createElement(I,this.props),r.a.createElement(E.a,{exact:!0,path:"/".concat(this.props.root.location.home),render:function(t){return r.a.createElement(j,e.props)}}),r.a.createElement(E.a,{exact:!0,path:"/".concat(this.props.root.location.content),component:S}),r.a.createElement(E.a,{exact:!0,path:"/".concat(this.props.root.location.authors,"*"),render:function(t){return r.a.createElement(L,e.props)}}),r.a.createElement(E.a,{exact:!0,path:"/".concat(this.props.root.location.about),render:function(e){return r.a.createElement(R,e)}})))}}]),t}(n.Component),D=(a(51),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"footer_container"},r.a.createElement("div",{className:"footer-item"},r.a.createElement("ul",{className:"footer-menu-list"},r.a.createElement("p",{className:"footer-menu-title"},"\u041c\u0415\u041d\u042e"),r.a.createElement("li",{className:"footer-menu-item"},r.a.createElement("a",{href:"/",className:"footer-menu-link"},"\u0413\u041b\u0410\u0412\u041d\u0410\u042f")),r.a.createElement("li",{className:"footer-menu-item"},r.a.createElement("a",{href:"/",className:"footer-menu-link"},"\u0421\u041e\u0414\u0415\u0420\u0416\u0410\u041d\u0418\u0415")),r.a.createElement("li",{className:"footer-menu-item"},r.a.createElement("a",{href:"/",className:"footer-menu-link"},"\u0410\u0412\u0422\u041e\u0420\u042b")),r.a.createElement("li",{className:"footer-menu-item"},r.a.createElement("a",{href:"/",className:"footer-menu-link"},"\u041e \u041f\u0420\u041e\u0415\u041a\u0422\u0415")))),r.a.createElement("div",{className:"footer-item"},r.a.createElement("ul",{className:"footer-menu-list"},r.a.createElement("p",{className:"footer-menu-title"},"\u0422\u0415\u041c\u042b"),r.a.createElement("li",{className:"footer-menu-item"},r.a.createElement("a",{href:"/",className:"footer-menu-link"},"\u041e\u041f\u0420\u0415\u0414\u0415\u041b\u0415\u041d\u0418\u0415")),r.a.createElement("li",{className:"footer-menu-item"},r.a.createElement("a",{href:"/",className:"footer-menu-link"},"\u0410\u041b\u0413\u041e\u0420\u0418\u0422\u041c\u042b")),r.a.createElement("li",{className:"footer-menu-item"},r.a.createElement("a",{href:"/",className:"footer-menu-link"},"\u0418\u0421\u0422\u041e\u0420\u0418\u042f")),r.a.createElement("li",{className:"footer-menu-item"},r.a.createElement("a",{href:"/",className:"footer-menu-link"},"\u041f\u0420\u0418\u041c\u0415\u0420\u042b")))),r.a.createElement("div",{className:"footer-item"},r.a.createElement("ul",{className:"footer-menu-list"},r.a.createElement("p",{className:"footer-menu-title"},"\u0410\u0412\u0422\u041e\u0420\u042b"),r.a.createElement("li",{className:"footer-menu-item"},r.a.createElement("a",{href:"/",className:"footer-menu-link"},"NICCOLO")),r.a.createElement("li",{className:"footer-menu-item"},r.a.createElement("a",{href:"/",className:"footer-menu-link"},"MEDICI")),r.a.createElement("li",{className:"footer-menu-item"},r.a.createElement("a",{href:"/",className:"footer-menu-link"},"HAYDN")),r.a.createElement("li",{className:"footer-menu-item"},r.a.createElement("a",{href:"/",className:"footer-menu-link"},"TOREADOR"))))))}}]),t}(n.Component)),q=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,this.props),r.a.createElement(T,this.props),r.a.createElement(D,null))}}]),t}(n.Component),U=a(22),V=a(29),W={location:{home:"dooboox/",content:"dooboox/content",authors:"dooboox/authors",about:"dooboox/about"},images:{fish:a.n(V).a,logo:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},bodyScrollState:"UNLOCKED",mobileScreenWidth:590,actionCreator:function(e,t){G.dispatch({type:e,payload:t})}},P={compactMenuCurtain:"compact-menu_curtain",mobileScreenWidth:590,menuMode:function(){return document.body.clientWidth<=this.mobileScreenWidth?"COMPACT":"FULLSIZE"}},B=a(21),F=a(30),K=Object(F.a)("result"),Y=function e(t,a){var n=this;Object(o.a)(this,e),Object.defineProperty(this,K,{writable:!0,value:void 0}),this._fastSearch=function(){n.elementsList.map(function(e){e.forEach(function(e){""!=n.searchString?e.innerHTML=n._markRemove(e.innerHTML).replace(new RegExp(n.searchString,"gi"),n._mark(n.searchString)):e.innerHTML=n._markRemove(e.innerHTML)})})},this.search=function(e){e?n._fastSearch():n.elementsList.map(function(e){e.forEach(function(e){""!==n.searchString?e.innerHTML=n._parse(n.searchString,e.innerText):e.innerText=e.innerText.replace("<mark>","").replace("</mark>","")})})},this._parse=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(""===a){var r=t.match(new RegExp(e,"i")),c=t;if(null===r)return c;var i=t.substring(r.index+e.length);c=c.substring(0,r.index)+n._mark(r)+i,n._parse(e,i,c)}else{var o=t.match(new RegExp(e,"i"));if(null!=o){var l=t.replace(o[0],n._mark(o[0]));a=a.replace(t,l),l=l.substring(o.index+n._mark(o[0]).length),n._parse(e,l,a)}else Object(B.a)(n,K)[K]=a}return Object(B.a)(n,K)[K]},this._mark=function(e){return"<mark>".concat(e,"</mark>")},this._markRemove=function(e){return e.replace(new RegExp("<mark>","g"),"").replace(new RegExp("</mark>","g"),"")},this._removeSpecialSymbols=function(e){return e.replace(/[?/\\!@$%&*+^\p{S}()\[\]]/g,"")},this.searchString=this._removeSpecialSymbols(t.toLowerCase().trim()),this.elementsList=a.map(function(e){return document.querySelectorAll(e)})},Z={searcherMode:"COMPACT",searcherValue:"",searchItems:[".tp-title",".tp-text",".tp-sublink",".tp-code pre",".tp-themes-link",".tp-themes-sublink"],search:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Y(e,t).search(a)}},z=Object(U.a)({root:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SWITCH_BODY_SCROLL":switch(t.payload){case"LOCK":e.bodyScrollState="LOCKED",document.getElementsByTagName("body")[0].classList.add("scroll-lock");break;case"UNLOCK":e.bodyScrollState="UNLOCKED",document.getElementsByTagName("body")[0].classList.remove("scroll-lock")}}return e},menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SWITCH_MENU_MODE":e.compactMenuCurtain=t.payload}return e},searcher:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SWITCH_SEARCHER_MODE":e.searcherMode=t.payload;break;case"CHANGE_SEARCHER_VALUE":e.searcherValue=t.payload;break;case"SEARCH_EXPRESSION":t.payload.search(t.payload.expression,t.payload.items,t.payload.fast)}return e}}),G=Object(U.b)(z),J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)})},Q=function(e){i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,e)),document.getElementById("root"))};G.subscribe(function(){Q(G.getState())}),Q(G.getState()),J()}},[[32,1,2]]]);
//# sourceMappingURL=main.6d6315d1.chunk.js.map