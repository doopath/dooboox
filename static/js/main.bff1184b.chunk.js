(this.webpackJsonpdooboox=this.webpackJsonpdooboox||[]).push([[0],{14:function(e,t,a){e.exports={header:"Header_header__eXJA_","header-container":"Header_header-container__fIbfl","header-title":"Header_header-title__P4OI4","header-searcher":"Header_header-searcher__MgpOA",search:"Header_search__1ZzwP","search-icon_box":"Header_search-icon_box__1bdj5","search-icon":"Header_search-icon__318VD"}},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var i=a(10),s=a(0),c=a(1),n=a.n(c),r=a(25),l=a.n(r),o=(a(32),a(33),a(3)),u=a(4),m=a(6),j=a(5),d=(a(34),a(16)),b=a(17),h=a(14),O=a.n(h),p=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){return Object(o.a)(this,a),t.call(this)}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsx)("header",{className:O.a.header,children:Object(s.jsxs)("div",{className:O.a["header-container"],children:[Object(s.jsx)("p",{className:O.a["header-title"],children:Object(s.jsx)("a",{href:"#",children:"Dooboox"})}),Object(s.jsxs)("div",{className:O.a["header-searcher"],children:[Object(s.jsx)("input",{type:"text",name:"searcher",id:O.a.search}),Object(s.jsx)("div",{className:O.a["search-icon_box"],children:Object(s.jsx)(d.a,{icon:b.b,className:O.a["search-icon"]})})]})]})})}}]),a}(c.Component),x=a(9),f=a(7),v=(a(40),a(41),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this))._menu=e.menu,i}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"menu",children:Object(s.jsxs)("menu",{className:"menu-list",children:[Object(s.jsx)("li",{className:"menu-item",children:Object(s.jsx)(x.b,{to:"/".concat(this._menu.home),className:"menu-link",children:"\u0413\u041b\u0410\u0412\u041d\u0410\u042f"})}),Object(s.jsx)("li",{className:"menu-item",children:Object(s.jsx)(x.b,{to:"/".concat(this._menu.content),className:"menu-link",children:"\u0421\u041e\u0414\u0415\u0420\u0416\u0410\u041d\u0418\u0415"})}),Object(s.jsx)("li",{className:"menu-item",children:Object(s.jsx)(x.b,{to:"/".concat(this._menu.authors),className:"menu-link",children:"\u0410\u0412\u0422\u041e\u0420\u042b"})}),Object(s.jsx)("li",{className:"menu-item",children:Object(s.jsx)(x.b,{to:"/".concat(this._menu.about),className:"menu-link",children:"\u041e \u041f\u0420\u041e\u0415\u041a\u0422\u0415"})})]})})}}]),a}(c.Component)),N=(a(44),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this)).toggle=function(){return i.curtain.current.classList.toggle("curtain_active"),document.body.classList.toggle("scroll-lock"),!0},i.menu=e.menu,i.curtain=n.a.createRef(),i.cross=n.a.createRef(),i}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)("menu",{children:Object(s.jsxs)("div",{className:"compact-menu",onClick:function(){return e.toggle()},children:[Object(s.jsx)("p",{className:"compact-menu_title",children:"\u041c\u0415\u041d\u042e"}),Object(s.jsxs)("div",{className:"compact-menu_curtain",ref:this.curtain,children:[Object(s.jsx)("div",{className:"compact-menu_cross",title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(s.jsxs)("menu",{className:"compact-menu_list",children:[Object(s.jsx)("li",{className:"compact-menu_item",children:Object(s.jsx)(x.b,{to:"/".concat(this.menu.home),className:"fas fa-home compact-menu_link",children:"\u0413\u041b\u0410\u0412\u041d\u0410\u042f"})}),Object(s.jsx)("li",{className:"compact-menu_item",children:Object(s.jsx)(x.b,{to:"/".concat(this.menu.content),className:"fas fa-align-left compact-menu_link",children:"\u0421\u041e\u0414\u0415\u0420\u0416\u0410\u041d\u0418\u0415"})}),Object(s.jsx)("li",{className:"compact-menu_item",children:Object(s.jsx)(x.b,{to:"/".concat(this.menu.authors),className:"fas fa-user-astronaut compact-menu_link",children:"\u0410\u0412\u0422\u041e\u0420\u042b"})}),Object(s.jsx)("li",{className:"compact-menu_item",children:Object(s.jsx)(x.b,{to:"/".concat(this.menu.about),className:"fas fa-project-diagram compact-menu_link",children:"\u041e \u041f\u0420\u041e\u0415\u041a\u0422\u0415"})})]})]})]})})})}}]),a}(c.Component)),_=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this)).menu=e.menu,i.state={},i.state.props=e,i.state.screenWidth=document.body.clientWidth,i}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsx)(n.a.StrictMode,{children:this.state.props.width>=this.state.screenWidth?Object(s.jsx)(N,{menu:this.menu}):Object(s.jsx)(v,{menu:this.menu})})}}]),a}(c.Component),k=function(e){return e.refresh?Object(s.jsxs)("a",{href:e.link,className:"tp-link",children:[Object(s.jsx)(d.a,{icon:b.a}),e.value]}):Object(s.jsxs)(x.b,{to:e.link,className:"tp-link",children:[Object(s.jsx)(d.a,{icon:b.a}),e.value]})},g=function(e){var t=e.links.map((function(e){return Object(s.jsx)(k,{value:e.value,link:e.link,refresh:e.refresh},e.id)}));return Object(s.jsx)("div",{className:"tp-links_block",children:t})},q=function(e){return Object(s.jsx)("a",{href:e.link,className:"tp-sublink",children:e.value})},y=function(e){var t=e.sublinks.map((function(e){return Object(s.jsx)(q,{value:e.value,link:e.link},e.id)}));return Object(s.jsx)("div",{className:"tp-sublinks_block",children:t})},C=function(e){e.id||(e.id="");var t="";return e.value.forEach((function(e){t+="".concat(e,"\n")})),Object(s.jsxs)("p",{className:"tp-text",id:e.id,children:[t,Object(s.jsx)("br",{})]})},M=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this))._images=e.images,i}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)("div",{className:"main-container",children:Object(s.jsxs)("div",{className:"main-item",children:[Object(s.jsx)("h2",{className:"tp-title",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(s.jsx)(g,{links:[{value:"image",link:"#image1",id:0,refresh:!0},{value:"themes",link:"#themes",id:1,refresh:!1},{value:"text",link:"#text1",id:2,refresh:!0}]}),Object(s.jsxs)("div",{className:"tp-image_block",children:[Object(s.jsx)("img",{src:this._images.fish,id:"image1",alt:"no image",className:"tp-image"}),Object(s.jsx)(y,{sublinks:[{value:"sublink 1",link:"#text1",id:1},{value:"sublink 2",link:"#text2",id:2},{value:"sublink 3",link:"#text3",id:3}]})]}),Object(s.jsx)(C,{value:["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod cupiditate, pariatur quaerat perspiciatis eum optio similique alias sequi nemo iste impedit expedita fuga quia sint minima, hic officia dignissimos autem velit! Distinctio vero, praesentium quam nobis illum mollitia magnam veniam officiis natus maxime, non architecto repudiandae perferendis possimus accusamus, doloremque nam impedit dolores eius alias? Veritatis eaque at nisi ex numquam assumenda illo praesentium, fugiat voluptate accusantium perferendis quos odio doloribus rem, libero aspernatur ullam sed culpa, repudiandae et harum provident. Amet dignissimos ex earum praesentium, assumenda sed, nesciunt reprehenderit maxime ducimus eius pariatur nobis corrupti recusandae vitae eum quam error fuga quas impedit mollitia. \n              ","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod cupiditate, pariatur quaerat perspiciatis eum optio similique alias sequi nemo iste impedit expedita fuga quia sint minima, hic officia dignissimos autem velit! Distinctio vero, praesentium quam nobis illum mollitia magnam veniam officiis natus maxime, non architecto repudiandae perferendis possimus accusamus, doloremque nam impedit dolores eius alias?\n              "],id:"text1"}),Object(s.jsx)("div",{className:"tp-code_block",id:"tp-code_1",children:Object(s.jsx)("div",{className:"tp-code_container",children:Object(s.jsxs)("div",{className:"tp-code_box",children:[Object(s.jsxs)("div",{className:"dots",children:[Object(s.jsx)("div",{className:"dot-red"}),Object(s.jsx)("div",{className:"dot-yellow"}),Object(s.jsx)("div",{className:"dot-purple"})]}),Object(s.jsxs)("ul",{className:"tp-code_list",children:[Object(s.jsx)("li",{className:"tp-code",children:"// Example comment"}),Object(s.jsxs)("li",{className:"tp-code",children:["async function func(url) ","{"," "]}),Object(s.jsx)("li",{className:"tp-code",children:Object(s.jsxs)("pre",{className:"tab",children:["await fetch(url)",Object(s.jsxs)("pre",{className:"double-tab",children:[".then(res =",">"," res.json())"]}),Object(s.jsxs)("pre",{className:"double-tab",children:[".then(json =",">"," console.log(json))"]})]})}),Object(s.jsx)("li",{className:"tp-code",children:"}"}),Object(s.jsx)("li",{className:"tp-code",children:Object(s.jsx)("br",{})}),Object(s.jsx)("li",{className:"tp-code",children:"func('https://vk.com')"})]}),Object(s.jsxs)("ul",{className:"tp-code_list result_list",children:[Object(s.jsx)("p",{className:"result-title",children:"Result: "}),Object(s.jsx)("li",{className:"tp-code result",children:"// Result"})]})]})})})]})})})}}]),a}(c.Component),S=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this))._images=e.images,i}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)("div",{className:"main-container",children:Object(s.jsxs)("div",{className:"main-item",children:[Object(s.jsx)("h2",{className:"tp-title",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(s.jsxs)("div",{className:"tp-links_block",children:[Object(s.jsx)("a",{href:"#",className:"fas fa-link tp-link",children:"themes"}),Object(s.jsx)("a",{href:"#",className:"fas fa-link tp-link",children:"image"}),Object(s.jsx)("a",{href:"#",className:"fas fa-link tp-link",children:"main"})]}),Object(s.jsxs)("div",{className:"tp-image_block",children:[Object(s.jsx)("img",{src:this._images.fish,alt:"no image",className:"tp-image"}),Object(s.jsxs)("div",{className:"tp-sublinks_block",children:[Object(s.jsx)("a",{href:"#",className:"tp-sublink",children:"sublink"}),Object(s.jsx)("a",{href:"#",className:"tp-sublink",children:"sublink"}),Object(s.jsx)("a",{href:"#",className:"tp-sublink",children:"sublink"})]})]}),Object(s.jsxs)("p",{className:"tp-text",children:["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod cupiditate, pariatur quaerat perspiciatis eum optio similique alias sequi nemo iste impedit expedita fuga quia sint minima, hic officia dignissimos autem velit! Distinctio vero, praesentium quam nobis illum mollitia magnam veniam officiis natus maxime, non architecto repudiandae perferendis possimus accusamus, doloremque nam impedit dolores eius alias? Veritatis eaque at nisi ex numquam assumenda illo praesentium, fugiat voluptate accusantium perferendis quos odio doloribus rem, libero aspernatur ullam sed culpa, repudiandae et harum provident. Amet dignissimos ex earum praesentium, assumenda sed, nesciunt reprehenderit maxime ducimus eius pariatur nobis corrupti recusandae vitae eum quam error fuga quas impedit mollitia.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Est corporis, nesciunt odit repellat veniam debitis. Adipisci ut quia iusto voluptatem, modi, nemo illo iste itaque debitis voluptas nulla pariatur? Optio ut rerum, sunt vero, hic quos natus nobis nam temporibus quis laudantium quaerat iusto tempora eum modi voluptas repellat perferendis ab quae error minus nostrum consequatur repellendus. Laborum quasi veniam nobis ut provident non, tenetur magnam sunt! Similique animi consequatur possimus doloribus consectetur adipisci, magni voluptate accusantium voluptatum consequuntur reiciendis eveniet sunt, impedit amet placeat obcaecati at labore deserunt dolore vero molestiae eos reprehenderit. Quasi officiis repellat placeat dicta facilis, enim soluta itaque?",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ab eius sapiente incidunt neque velit quae, provident aperiam iure distinctio recusandae, repellendus id expedita reiciendis totam? Illum, totam veniam ullam sequi enim ad, quas fugit odio hic provident nostrum voluptatum illo eligendi porro suscipit assumenda ea. Facilis omnis suscipit est? Quae molestias expedita minus esse non. Deserunt delectus quaerat, dolores architecto optio est rem ab laborum cumque beatae natus molestias error commodi culpa atque quod, consectetur distinctio nihil eius, doloremque temporibus quae. Id laborum, repellat maxime non debitis accusamus perferendis consequatur, nam voluptatum, natus ut aperiam illum quisquam vel! Repudiandae."]}),Object(s.jsx)("div",{className:"tp-code_block",id:"tp-code_1",children:Object(s.jsx)("div",{className:"tp-code_container",children:Object(s.jsxs)("div",{className:"tp-code_box",children:[Object(s.jsxs)("div",{className:"dots",children:[Object(s.jsx)("div",{className:"dot-red"}),Object(s.jsx)("div",{className:"dot-yellow"}),Object(s.jsx)("div",{className:"dot-purple"})]}),Object(s.jsxs)("ul",{className:"tp-code_list",children:[Object(s.jsx)("li",{className:"tp-code",children:"// Example comment"}),Object(s.jsxs)("li",{className:"tp-code",children:["async function func(url) ","{"," "]}),Object(s.jsx)("li",{className:"tp-code",children:Object(s.jsxs)("pre",{className:"tab",children:["await fetch(url)",Object(s.jsxs)("pre",{className:"double-tab",children:[".then(res =",">"," res.json())"]}),Object(s.jsxs)("pre",{className:"double-tab",children:[".then(json =",">"," console.log(json))"]})]})}),Object(s.jsx)("li",{className:"tp-code",children:"}"}),Object(s.jsx)("li",{className:"tp-code",children:Object(s.jsx)("br",{})}),Object(s.jsx)("li",{className:"tp-code",children:"func('https://vk.com')"})]}),Object(s.jsxs)("ul",{className:"tp-code_list result_list",children:[Object(s.jsx)("p",{className:"result-title",children:"Result: "}),Object(s.jsx)("li",{className:"tp-code result",children:"// Result"})]})]})})})]})})})}}]),a}(c.Component),D=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){return Object(o.a)(this,a),t.call(this)}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)("div",{children:"Developer page"})})}}]),a}(c.Component),L=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){return Object(o.a)(this,a),t.call(this)}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)("div",{children:Object(s.jsx)("p",{children:"Redactor page"})})})}}]),a}(c.Component),R=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){return Object(o.a)(this,a),t.call(this)}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)("div",{children:"Writer page"})})}}]),a}(c.Component),w=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){return Object(o.a)(this,a),t.call(this)}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)("div",{children:Object(s.jsx)("p",{children:"Default page"})})})}}]),a}(c.Component),I=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this))._menu=e.menu,i._state=e.state,i}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsxs)(n.a.StrictMode,{children:[Object(s.jsx)(f.a,{exact:!0,path:"/".concat(this._menu.authors,"/id=1"),component:D}),Object(s.jsx)(f.a,{exact:!0,path:"/".concat(this._menu.authors,"/id=2"),component:L}),Object(s.jsx)(f.a,{exact:!0,path:"/".concat(this._menu.authors,"/id=3"),component:R}),Object(s.jsx)(f.a,{exact:!0,path:"/".concat(this._menu.authors),component:w})]})}}]),a}(c.Component),H=(c.Component,function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this))._props=e,i._menu=e.menu,i._images=e.images,i}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsx)(x.a,{children:Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsxs)("main",{children:[Object(s.jsx)(_,Object(i.a)({},this._props)),Object(s.jsx)(f.a,{exact:!0,path:"/".concat(this._menu.home),render:function(t){return Object(s.jsx)(M,Object(i.a)(Object(i.a)({},t),{},{menu:e._menu,images:e._images}))}}),Object(s.jsx)(f.a,{exact:!0,path:"/".concat(this._menu.content),render:function(t){return Object(s.jsx)(S,Object(i.a)(Object(i.a)({},t),{},{images:e._images}))}}),Object(s.jsx)(f.a,{exact:!0,path:"/".concat(this._menu.authors,"*"),render:function(t){return Object(s.jsx)(I,Object(i.a)(Object(i.a)({},t),{},{menu:e._menu}))}}),Object(s.jsx)(f.a,{exact:!0,path:"/".concat(this._menu.about),render:function(t){return Object(s.jsx)(I,Object(i.a)(Object(i.a)({},t),{},{menu:e._menu}))}})]})})})}}]),a}(c.Component)),P=(a(45),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){return Object(o.a)(this,a),t.call(this)}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)("footer",{children:Object(s.jsxs)("div",{className:"footer_container",children:[Object(s.jsx)("div",{className:"footer-item",children:Object(s.jsxs)("ul",{className:"footer-menu-list",children:[Object(s.jsx)("p",{className:"footer-menu-title",children:"\u041c\u0415\u041d\u042e"}),Object(s.jsx)("li",{className:"footer-menu-item",children:Object(s.jsx)("a",{href:"#",className:"footer-menu-link",children:"\u0413\u041b\u0410\u0412\u041d\u0410\u042f"})}),Object(s.jsx)("li",{className:"footer-menu-item",children:Object(s.jsx)("a",{href:"#",className:"footer-menu-link",children:"\u0421\u041e\u0414\u0415\u0420\u0416\u0410\u041d\u0418\u0415"})}),Object(s.jsx)("li",{className:"footer-menu-item",children:Object(s.jsx)("a",{href:"#",className:"footer-menu-link",children:"\u0410\u0412\u0422\u041e\u0420\u042b"})}),Object(s.jsx)("li",{className:"footer-menu-item",children:Object(s.jsx)("a",{href:"#",className:"footer-menu-link",children:"\u041e \u041f\u0420\u041e\u0415\u041a\u0422\u0415"})})]})}),Object(s.jsx)("div",{className:"footer-item",children:Object(s.jsxs)("ul",{className:"footer-menu-list",children:[Object(s.jsx)("p",{className:"footer-menu-title",children:"\u0422\u0415\u041c\u042b"}),Object(s.jsx)("li",{className:"footer-menu-item",children:Object(s.jsx)("a",{href:"#",className:"footer-menu-link",children:"\u041e\u041f\u0420\u0415\u0414\u0415\u041b\u0415\u041d\u0418\u0415"})}),Object(s.jsx)("li",{className:"footer-menu-item",children:Object(s.jsx)("a",{href:"#",className:"footer-menu-link",children:"\u0410\u041b\u0413\u041e\u0420\u0418\u0422\u041c\u042b"})}),Object(s.jsx)("li",{className:"footer-menu-item",children:Object(s.jsx)("a",{href:"#",className:"footer-menu-link",children:"\u0418\u0421\u0422\u041e\u0420\u0418\u042f"})}),Object(s.jsx)("li",{className:"footer-menu-item",children:Object(s.jsx)("a",{href:"#",className:"footer-menu-link",children:"\u041f\u0420\u0418\u041c\u0415\u0420\u042b"})})]})}),Object(s.jsx)("div",{className:"footer-item",children:Object(s.jsxs)("ul",{className:"footer-menu-list",children:[Object(s.jsx)("p",{className:"footer-menu-title",children:"\u0410\u0412\u0422\u041e\u0420\u042b"}),Object(s.jsx)("li",{className:"footer-menu-item",children:Object(s.jsx)("a",{href:"#",className:"footer-menu-link",children:"NICCOLO"})}),Object(s.jsx)("li",{className:"footer-menu-item",children:Object(s.jsx)("a",{href:"#",className:"footer-menu-link",children:"MEDICI"})}),Object(s.jsx)("li",{className:"footer-menu-item",children:Object(s.jsx)("a",{href:"#",className:"footer-menu-link",children:"HAYDN"})}),Object(s.jsx)("li",{className:"footer-menu-item",children:Object(s.jsx)("a",{href:"#",className:"footer-menu-link",children:"TOREADOR"})})]})})]})})})}}]),a}(c.Component)),A=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this))._mainPage=e.mainPage,i}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsxs)(n.a.StrictMode,{children:[Object(s.jsx)(p,{}),Object(s.jsx)(H,Object(i.a)({},this._mainPage)),Object(s.jsx)(P,{})]})}}]),a}(c.Component),E={mainPage:{menu:{home:"dooboox/",content:"dooboox/content",authors:"dooboox/authors",about:"dooboox/about"},images:{fish:a.p+"static/media/fish.1323459a.jpeg"},width:590}},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),i(e),s(e),c(e),n(e)}))};l.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(A,Object(i.a)({},E))}),document.getElementById("root")),F()}},[[46,1,2]]]);
//# sourceMappingURL=main.bff1184b.chunk.js.map