(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/falls.948f7558.jpg"},101:function(e,t,a){e.exports=a.p+"static/media/tiger.d91d7bf1.jpg"},105:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(26),l=a.n(i),r=(a(72),a(4)),o=a(2),s=a(5),m=a(6),d=a(8),u=a(15),p=(a(73),a(28)),h=a.n(p),v=a(12),f=a.n(v),b=(a(35),a(14)),E=a(30),g=a.n(E),y=a(49),w=a(50),k=a.n(w),N=a(51),j=a.n(N),I=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onToken=a.onToken.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"onToken",value:function(){var e=Object(y.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()("https://80msfvew1f.execute-api.us-east-1.amazonaws.com/dev/charges",{method:"POST",body:JSON.stringify({token:t,charge:{amount:100*this.props.amount,currency:"USD"}})});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,console.log("onToken"),"Charge processed succesfully!"===n.message&&(console.log("Got it"),this.props.paymentSuccess());case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement(j.a,{name:"Serverless Stripe Store Inc.",token:this.onToken,amount:100*this.props.amount,currency:"USD",stripeKey:"pk_test_tFXD1lUINMsiraTxuqGR6EsQ",allowRememberMe:!0})}}]),t}(c.a.Component),O=Object(b.b)((function(e){return{items:e.addedItems,total:e.total,count:e.count}}),(function(e){return{paymentSuccess:function(){e({type:"PAYMENT_SUCCESS"})}}}))(I),M=(a(79),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleChecked=function(e){e.target.checked?a.props.addInstall():a.props.substractInstall()},a.state={title:e.addedItems.map((function(e){return e.title}))},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillUnmount",value:function(){this.refs.Install.checked&&this.props.substractInstall()}}]),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"collection"},c.a.createElement("li",{className:"collection-item"},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",ref:"Install",onChange:this.handleChecked}),c.a.createElement("span",null,"Install(+200$)"))),c.a.createElement("li",{className:"collection-item"},c.a.createElement("b",null,"Total: ",this.props.total," $"))),c.a.createElement("div",{className:"checkout"},c.a.createElement(O,{amount:this.props.total})))}}]),t}(n.Component)),S=Object(b.b)((function(e){return{addedItems:e.addedItems,total:e.total}}),(function(e){return{addInstall:function(){e({type:"ADD_Install"})},substractInstall:function(){e({type:"SUB_Install"})}}}))(M),A=a(115),x=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleRemove=function(e){a.props.removeItem(e),1===a.state.count&&a.setState({count:0})},a.handleAddQuantity=function(e){a.props.addQuantity(e);var t=0;"object"==typeof a.props.items&&a.props.items.forEach((function(e){t+=parseFloat(e.quantity),a.setState({count:t})}))},a.handleSubtractQuantity=function(e){1===a.state.count?a.handleRemove(e):a.props.subtractQuantity(e);var t=0;"object"==typeof a.props.items&&a.props.items.forEach((function(e){t+=parseFloat(e.quantity),a.setState({count:t})}))},a.RemovingItem=function(e){a.setState({count:a.state.count-e})},a.state={showMobile:!1,count:a.props.count,showCart:!1,count3:e.addedItems},a.showDropdownMenu=a.showDropdownMenu.bind(Object(u.a)(a)),a.hideDropdownMenu=a.hideDropdownMenu.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.updateMobileMenu(),window.addEventListener("resize",this.updateMobileMenu.bind(this)),f()("#cart").on("click",(function(){f()(".shopping-cart").fadeToggle("fast")}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateMobileMenu.bind(this))}}]),Object(o.a)(t,[{key:"updateMobileMenu",value:function(){window.innerWidth<960?this.setState({showMobile:!0}):this.setState({showMobile:!1}),console.log(this.state.showMobile),console.log(f()(window).width())}},{key:"showCart",value:function(){this.setState({showCart:!this.state.showCart})}},{key:"showDropdownMenu",value:function(e){var t=this;e.preventDefault(),this.setState({displayMenu:!0},(function(){document.addEventListener("click",t.hideDropdownMenu)}))}},{key:"hideDropdownMenu",value:function(){var e=this;this.setState({displayMenu:!1},(function(){document.removeEventListener("click",e.hideDropdownMenu)}))}},{key:"render",value:function(){var e=this,t=this.props.items.length?this.props.items.map((function(t){return c.a.createElement("li",{className:"collection-item avatar",key:t.id},c.a.createElement("div",{className:"item-img"},c.a.createElement("img",{src:t.img,alt:t.img,className:""})),c.a.createElement("div",{className:"item-desc"},c.a.createElement("span",{className:"title"},t.title),c.a.createElement("p",null,t.desc),c.a.createElement("p",null,c.a.createElement("b",null,"Price: ",t.price,"$")),c.a.createElement("button",{className:"waves-effect waves-light btn pink remove",onClick:function(){e.handleRemove(t.id),e.RemovingItem(t.quantity)}},"Remove")))})):c.a.createElement("p",null,"Nothing."),a=this.state.showCart?c.a.createElement("div",{className:"shopping-cart"},c.a.createElement("div",{className:"cart"},c.a.createElement("h5",null,"You have ordered:"),c.a.createElement("ul",{className:"collection"},t)),c.a.createElement(S,null)):"",n=this.props.links.map((function(e,t){if(window.innerWidth>960){var a=e.active?c.a.createElement("a",{className:"menu__link menu__link--active",href:e.link},e.label):c.a.createElement("a",{className:"menu__link",href:e.link},e.label);return c.a.createElement("li",{key:t,className:"menu__list-item"},a)}var n=(e.active,c.a.createElement("a",{className:"dropa",href:e.link},e.label));return c.a.createElement("li",{className:"dropli",key:t},n)}));return c.a.createElement("nav",{className:"menu"},c.a.createElement("div",{id:"wrapper"},c.a.createElement("svg",{id:"signature",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"-20px",y:"0px",viewBox:"0 0 500 200",xmlSpace:"preserve"},c.a.createElement("path",{className:"line1",d:"M118,78 115.08,80.43 110,85 106,90 102,95 97,102 91,111 88,118 86,122 84,129 85,132 87,133"}),c.a.createElement("path",{className:"line2",d:"M87.35,101.33 85.45,98.39 84.75,94.92 84.75,92.15 86.05,89.38 88.74,86.08 92.9,82.62 97.58,79.67  103.3,77.07 108.49,75.51 114.21,74.13 117.51,73.78 121.66,73.78 126.17,74.3 129.29,75.17 131.71,76.9 132.58,79.32 131.89,81.75  129.98,84 127.04,86.78 123.74,88.68 120.28,90.59 116.12,92.49 111.79,94.23 105.03,95.79 110.05,95.79 113.87,95.79 117.85,96.48  122.18,97.87 125.48,100.12 127.38,102.89 128.08,106.36 127.9,109.3 127.38,111.9 126,115.02 124.09,118.49 121.14,121.95  117.68,125.42 113,129.06 107.97,132.18 103.12,134.6 97.4,136.51 91.51,137.55 86.31,137.38 82.5,136.68 79.04,134.78 77.3,131.66  77.65,127.5 80.08,123.34 83.19,119.7 86.83,117.27 92.03,114.85 96.36,113.81 99.83,113.64 103.99,113.81 106.94,114.5  109.36,115.19"}),c.a.createElement("path",{className:"line3",d:"M136.57,105.32 139.17,103.24 140.9,101.33 141.94,98.56 139.86,96.83 137.26,97.52 136.22,99.95  136.39,102.2 139.17,105.32 140.03,106.7 139.86,108.44 139.17,111.04 137.78,113.46 136.05,116.23 135.18,118.49 136.05,119.87  138.13,117.97 140.9,116.06 144.36,113.29 147.66,110.52 150.34,108.22 152.81,106.01 155.54,104.06 156.68,103.72 158.14,103.28  160.09,103.8 161.52,104.84 159.14,103.15 156.19,103.58 154.07,104.62 152.73,105.58 151.47,106.7 149.09,109.78 148.44,111.34  148.31,112.55 148.52,113.98 149.69,114.5 151.21,114.07 152.9,113.29 154.33,112.42 155.71,111.43 157.4,110.21 158.79,108.83  160.26,107.48 161.17,106.31 162.13,104.93 162.56,104.88 162.26,105.62 161.39,106.7 160.26,108.26 159.53,109.22 158.53,110.73  157.88,112.12 157.58,113.29 157.49,114.37 157.84,114.89 158.49,115.11 159.48,114.81 160.83,114.16 162.73,113.07 164.42,112.12  166.2,111.08 167.54,110.26 169.14,109.17 170.66,108.13 172.22,106.96 173.61,105.79 174.91,104.62 176.29,103.32 177.59,102.11  178.59,101.16 179.93,100.73 181.66,100.64 182.92,101.55 183.35,102.76 183.57,104.32 184,103.37 183.48,101.94 182.31,100.6  180.67,100.16 179.41,100.51 177.9,101.38 176.81,102.24 175.64,103.45 174.17,105.01 173.39,106.75 172.74,108.22 172.57,109.87  173,110.99 174,111.86 176.08,111.25 178.03,109.95 180.1,108.74 181.45,107.79 189.81,101.2 196.18,95.31 203.5,87.86  205.92,84.52 206.66,82.88 206.7,81.58 205.84,81.23 204.75,81.75 203.15,82.44 201.16,84 198.86,85.91 195.57,89.46 193.4,91.93  191.02,95.05 188.73,98.13 186.82,101.03 185.61,103.11 181.97,108.96 180.71,111.3 179.84,113.46 179.32,115.28 179.45,116.54  180.1,117.19 181.27,117.14 183.27,116.45 186.47,114.68 190.37,112.21 193.1,110.08 195.92,107.96 198.43,105.79 201.03,103.45 "}),c.a.createElement("path",{className:"line4",d:"M231.87,71.01 230.66,73.39 229.58,75.04 228.93,77.2 228.88,79.24 229.49,81.1 230.7,82.7  232.78,84.09 235.21,85.17 239.41,86.34 243.83,86.86 247.69,87.12 252.49,87.08 255.57,86.78 259.69,86.13 262.68,85.09  265.1,83.48 267.31,81.45 268.61,79.11 268.91,76.81 267.96,75.04 266.23,74.04 263.19,73.61 260.12,73.95 256.61,74.86  252.28,76.51 247.95,78.46 244.57,80.49 241.06,83.14 238.63,85.13 233.82,89.46 230.49,93.27 227.32,97.13 223.38,102.98  220.39,108.18 218.18,113.03 216.54,117.66 215.54,120.91 214.76,124.47 214.63,127.15 214.72,129.79 215.54,132.52 216.36,134.17  217.53,135.64 219.44,136.77 221.91,137.29 224.34,137.33 227.24,136.94 229.53,136.25 233.17,134.73 236.21,133 240.19,130.1  244.52,126.76 250.07,121.87 254.01,117.92 259.17,112.81 260.81,110.99 262.72,108.78 265.01,106.01 266.4,104.45 263.89,107.96  262.5,110.21 261.16,112.47 260.55,114.07 260.47,115.19 261.12,115.76 262.03,115.71 264.36,114.81 267.27,113.2 271.04,110.73  273.2,109.26 274.24,109.17 275.45,109.39 277.23,109.3 279.48,108.61 281.48,107.4 283.08,106.23 284.16,104.45 284.47,102.63  283.08,102.37 281.13,103.15 278.7,104.67 277.1,106.18 275.24,108 274.16,110.47 274.03,110.82 273.77,111.99 273.64,113.55  274.24,115.06 275.54,115.97 277.92,115.89 280.26,115.15 283.99,113.33 286.81,111.6 288.54,110.47 290.75,109.09 292.65,107.57  294.39,106.31 296.42,104.49 298.5,102.68 300.49,102.07 301.79,102.11 302.57,102.98 302.66,103.67 302.14,103.02 301.36,102.46  299.93,101.77 298.85,102.24 297.07,103.54 295.38,105.01 295.04,106.1 293.78,107.74 292.91,109.3 292.26,111.73 293.13,113.46  294.39,113.59 296.68,113.38 299.11,112.42 302.49,110.69 305.48,108.83 308.12,107.01 315.66,101.46 325.06,93.58 330.21,88.55  332.6,85.65 333.77,83.57 334.07,82.18 333.51,81.4 332.29,81.36 330.65,82.05 328.48,83.48 325.92,85.65 323.15,88.68 319.9,92.32  316.87,96.31 313.84,100.68 312.41,102.85 309.25,108 307.43,111.38 306.52,113.64 306.26,115.41 306.26,116.67 309.33,113.33  311.97,110.6 314.92,107.61 317.52,105.58 320.21,104.15 321.33,104.62 321.38,105.97 320.81,107.92 319.9,109.95 318.47,112.99  316.91,115.67 315.4,118.23 313.49,121.17 312.02,123.69 311.41,125.59 311.54,126.59 312.8,126.33 314.83,124.86 317,123.08  318.95,121.26 321.55,119.05 324.28,116.32 326.57,114.16 328.48,112.16 330.6,109.91 332.68,107.14 334.85,105.27 336.8,103.97  338.92,103.45 340.96,103.5 342,104.1 342.82,104.67 341.39,103.37 339.74,103.19 337.92,103.5 335.41,104.58 333.46,106.18  332.42,108.26 331.43,109.39 329.91,111.12 329.52,112.25 329.65,113.25 330.21,114.16 330.99,114.46 332.12,114.29 333.72,113.64  335.58,112.6 337.62,111.17 339.74,109.56 341.35,107.92 342.73,106.4 343.86,104.84 340.26,109.82 339.31,112.51 338.92,113.38  338.96,114.33 339.53,115.11 340.61,114.94 342.52,114.11 346.2,112.16 350.75,109.04 354.39,106.4 356.08,104.88 357.38,103.93  358.72,102.94 359.37,101.9 359.5,101.07 358.89,101.03 358.29,101.46 357.72,102.16 353.04,110.08 351.96,112.86 351.7,113.72  355.04,110.6 357.77,108.05 360.19,105.84 362.62,103.97 363.74,103.28 364.48,103.54 364.74,104.06 364.48,105.14 363.83,107.22  363.09,109.26 362.96,110.47 363.09,111.3 363.79,111.56 364.87,111.12 367.04,110.04 369.64,108.57 372.45,106.79 374.92,105.01  377.13,103.37 379.47,102.29 380.94,102.37 381.9,103.02 382.33,104.15 382.5,105.1 382.68,105.62 382.76,104.58 382.42,103.37  381.38,102.24 380.25,102.11 377.95,102.68 373.53,106.53 372.75,108.44 372.15,110 371.84,111.21 371.84,112.03 372.36,112.73  373.1,113.33 374.18,113.51 375.74,113.2 377.39,112.42 378.95,110.99 380.38,109.22 381.03,107.57 380.99,106.49 380.12,105.92  379.3,106.4 378.73,106.92 378.86,107.79 379.47,108.26 381.25,108.91 382.42,109.09 384.49,108.78 386.23,108.26 388.35,107.4  390.13,106.36 391.64,104.88 393.2,103.37 394.63,101.85 395.41,100.81 395.76,99.9 395.71,99.12 395.11,99.38 394.33,100.34  393.64,101.29 393.16,102.11 389.26,108.78 387.74,112.47 387.09,114.03 386.49,116.1 386.27,118.05 386.62,118.62 387.27,118.83  388.09,118.44 389.3,117.66 391.08,116.49 393.81,114.24 395.84,112.12 397.49,110.26 399.14,108.05 400.7,106.1 401.74,104.54  402,103.28 401.35,102.68 400.57,103.45 399.48,104.88 399.09,106.18 398.14,110.86 397.97,112.55 398.1,113.9 398.31,115.06  398.96,115.41 399.96,115.02 401.3,114.11 402.82,112.73 404.38,110.95 405.72,109.26 407.32,106.96 408.49,105.19 409.1,103.89  408.62,105.92 408.71,106.83 409.32,107.22 410.4,107.35 411.96,107.01 413.69,106.36 415.51,105.27 417.72,103.63 420.15,101.77  421.1,100.77 421.19,99.77 420.84,98.82 420.06,98.34 418.94,98.6 417.94,99.3 417.25,100.42 416.81,101.72 416.6,102.81  416.73,105.14 417.03,106.75 417.46,108.18 418.42,110.47 419.19,112.64 419.41,114.59 419.32,115.93 418.72,117.53 417.81,119.18  416.68,120.74 414.73,122.3 411.79,123.64 409.58,124.16 407.58,124.25 405.94,123.9 404.94,122.73 405.03,121.35 405.68,119.96  407.84,118.1 411.66,115.24 416.51,112.25 421.14,109.43 426.34,106.49 429.64,104.28 432.88,101.85 435.09,99.95 440.86,95.27  447.35,89.2 450.43,85.61 451.77,83.57 452.12,82.1 451.69,81.01 450.26,81.14 448.39,82.05 445.75,84 443.45,86.08 440.64,89.03  437.91,92.19 434.14,97 432.02,100.25 430.33,102.94 426.78,108.44 425.04,112.73 424.52,114.81 424.31,116.84 426.52,113.51  428.16,111.25 429.16,110.26 430.16,109.78 431.28,109.65 432.93,109.35 434.83,108.52 436.52,107.74 437.91,106.57 438.39,105.49  438.17,104.36 436.83,104.28 434.88,105.06 432.1,107.09 430.81,108.57 429.64,110.39 429.16,111.77 428.9,113.85 429.12,115.71  429.51,117.32 430.29,118.18 431.5,118.83 433.27,119.01 435.31,118.7 437.78,117.71 440.42,116.06 445.1,112.68 449.17,109.09  451.12,107.22 452.34,105.79 453.46,104.23 450.43,108.35 448.35,111.99 447.53,113.72 447.31,115.11 447.7,115.84 448.74,115.89  450.21,115.32 454.07,113.29 457.49,110.86 462.56,107.31 465.51,105.01 466.46,104.06 "}))),c.a.createElement("div",{className:"menu__right"},this.state.showMobile?c.a.createElement("div",{className:"dropdown"},c.a.createElement("div",{className:"buttondrop",onClick:this.showDropdownMenu},c.a.createElement("i",{className:"fa fa-bars"})),this.state.displayMenu?c.a.createElement("ul",{className:"dropul"},n):null):c.a.createElement("ul",{className:"menu__list"},n),c.a.createElement("button",{onClick:this.showCart.bind(this),style:{backgroundImage:"url("+h.a+")"},className:"menu__search-button",id:"cart"},c.a.createElement("div",{className:"iconcart"},c.a.createElement(A.a,{className:"Badge",color:"secondary",badgeContent:this.props.count})))),a)}}]),t}(n.Component),T=Object(b.b)((function(e){return{items:e.addedItems,total:e.total,count:e.count}}),(function(e){return{removeItem:function(t){e(function(e){return{type:"REMOVE_ITEM",id:e}}(t))},addQuantity:function(t){e(function(e){return{type:"ADD_QUANTITY",id:e}}(t))},subtractQuantity:function(t){e(function(e){return{type:"SUB_QUANTITY",id:e}}(t))}}}))(x),C=(a(97),a(19)),D=a.n(C),R=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){f()(document).ready((function(){f()("#submit").click((function(e){e.preventDefault();var t=f()("#name").val(),a=f()("#email").val(),n=f()("#message").val();f.a.ajax({type:"POST",url:"https://r8xpob2etb.execute-api.us-east-2.amazonaws.com/Contactform",contentType:"application/json",data:JSON.stringify({name:t,email:a,message:n}),success:function(e){f()("#form-response").text("Email was sent.")},error:function(){f()("#form-response").text("Error.")}})}))}))}},{key:"render",value:function(){return c.a.createElement((function(e){return e.children}),null,c.a.createElement("div",{className:"container center"},c.a.createElement(T,{links:[{label:"Home",link:"Home"},{label:"Resume",link:"Resume"},{label:"Products",link:"Products"},{label:"Contact",link:"Contact",active:!0}],logo:D.a})),c.a.createElement("div",{className:"container center"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"columncontact"},c.a.createElement("div",null,c.a.createElement("form",null,c.a.createElement("label",{htmlFor:"name"},"Name"),c.a.createElement("input",{type:"text",id:"name",placeholder:" Your last name.."}))),c.a.createElement("div",null,c.a.createElement("form",null,c.a.createElement("label",{className:"label1",htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email",placeholder:" Your email"})))),c.a.createElement("div",{className:"columncontact"},c.a.createElement("div",null,c.a.createElement("form",null,c.a.createElement("label",{htmlFor:"message"},"Message"),c.a.createElement("textarea",{id:"message",name:"Message",placeholder:"Write something.."}),c.a.createElement("input",{type:"submit",id:"submit",value:"Submit"})))),c.a.createElement("div",null,c.a.createElement("div",{id:"form-response"})))))}}]),t}(n.Component),P=a(64),G=a(20),W=(a(46),a(52)),U=a.n(W),L=a(53),F=a.n(L),Z=a(54),H=a.n(Z),z=a(55),Y=a.n(z),J=a(56),V=a.n(J),B=a(57),Q=a.n(B),X=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={experience:[{id:1,company:"Curated Trades",link:"curatedtrades.com",title:"Full-Stack Developer",desc:"Curated Trades sells profitable options trades to followers across the United States. It integrates custom JavaScript and python code on wix.com to track live trades in a trader\u2019s portfolio. We developed algorithms in different financial markets to predict movements and place trades and is compatible across three platforms",tech:"Google Cloud Services, Python, Golang, C#, ThinkScript, Html/CSS/JavaScript, Git",img:U.a,img2:Y.a},{id:2,company:"OurFreshView",link:"ourfreshview.com",title:"Full-Stack Developer",desc:"OurFreshView is a travel blog that guides travelers through unfamiliar and exotic places around the world. It features 3D design written in JavaScript and a fully functional travel app that sells some of the most budget friendly plane tickets on the internet, all custom designed and integrated into Square Space content manager.",tech:"Three.js, Node, React, Git, Square Space",img:F.a,img2:V.a},{id:3,company:"Bradciechanowki.com",link:"bradciechanowski.com",title:"Full-Stack Developer",desc:"Brad Ciechanowski is my portfolio page that uses some of the most popular tech. It is designed a scalable react resume app, which means it can be sold as a template and easily implement changes in work history and new projects.",tech:"Git, React, Redux, Node.js, AWS, Html/CSS/SCSS",img:H.a,img2:Q.a}],mobilecard:!1},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.updateMobileMenu2(),window.addEventListener("resize",this.updateMobileMenu2.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateMobileMenu2.bind(this))}},{key:"updateMobileMenu2",value:function(){window.innerWidth<960?this.setState({mobilecard:!0}):this.setState({mobilecard:!1}),console.log(this.state.mobilecard),console.log("hi")}},{key:"render",value:function(){var e=this.state.mobilecard?this.state.experience.map((function(e){return c.a.createElement("div",{className:"mobileflip-card",key:e.id},c.a.createElement("div",{className:"mobileflip-card-inner"},c.a.createElement("div",{className:"mobileflip-card-front"},c.a.createElement("img",{src:e.img2,alt:e.company,style:{width:"350px",height:"647px"}})),c.a.createElement("div",{className:"mobileflip-card-back"},c.a.createElement("h1",{className:"mobileExpercompany"},e.company),c.a.createElement("p",null,e.title),c.a.createElement("p",null,e.desc),c.a.createElement("a",{href:e.link,style:{color:"#09d3ac"}},e.link),c.a.createElement("p",null,"Tech Used:"),c.a.createElement("p",null,e.tech))))})):this.state.experience.map((function(e){return c.a.createElement("div",{className:"flip-card",key:e.id},c.a.createElement("div",{className:"flip-card-inner"},c.a.createElement("div",{className:"flip-card-front"},c.a.createElement("img",{src:e.img,alt:e.company,style:{width:"700px",height:"400px"}})),c.a.createElement("div",{className:"flip-card-back"},c.a.createElement("h1",{className:"Expercompany"},e.company),c.a.createElement("p",null,e.title),c.a.createElement("p",null,e.desc),c.a.createElement("a",{href:e.link,style:{color:"#09d3ac"}},e.link),c.a.createElement("p",null,"Tech Used:"),c.a.createElement("p",null,e.tech))))}));return c.a.createElement((function(e){return e.children}),null,c.a.createElement("div",{className:"portlist"},e))}}]),t}(n.Component),q=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement((function(e){return e.children}),null,c.a.createElement("div",{className:"container center"},c.a.createElement(T,{links:[{label:"Home",link:"Home",active:!0},{label:"Resume",link:"Resume"},{label:"Products",link:"Products"},{label:"Contact",link:"Contact"}],logo:D.a})),c.a.createElement("div",{className:"container center"},c.a.createElement(X,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=a(18),K=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={count:0},a.handleClick=function(e){a.props.addToCart(e)},a.IncrementItem=function(){a.setState({count:a.state.count+1}),localStorage.setItem("count",JSON.stringify(a.state.count+1))},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items.map((function(t){return c.a.createElement("div",{className:"card",key:t.id},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:t.img,alt:t.title}),c.a.createElement("span",{className:"card-title"},t.title),c.a.createElement("span",{to:"/",className:"btn-floating halfway-fab waves-effect waves-light #09d3ac",onClick:function(){e.handleClick(t.id),e.IncrementItem()}}," ",c.a.createElement("i",{className:"material-icons"},"add"))),c.a.createElement("div",{className:"card-content"},c.a.createElement("p",null,t.longdesc),c.a.createElement("p",null,c.a.createElement("b",null,"Price: ",t.price,"$"))))}));return c.a.createElement((function(e){return e.children}),null,c.a.createElement("div",{className:"container container2 center"},c.a.createElement(T,{links:[{label:"Home",link:"Home"},{label:"Resume",link:"Resume"},{label:"Products",link:"Products",active:!0},{label:"Contact",link:"Contact"}],logo:D.a,count2:this.state.count})),c.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css"}),c.a.createElement("div",{className:"productcontainer"},c.a.createElement("h3",{className:"productdiv ProductTitle"},"Our Products"),c.a.createElement("div",{className:"box"},t)))}}]),t}(n.Component),$=Object(b.b)((function(e){return{items:e.items}}),(function(e){return{addToCart:function(t){e(function(e){return{type:"ADD_TO_CART",id:e}}(t))}}}))(K),ee=(a(98),a(47),a(99),a(100),a(101),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).id=2,a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement((function(e){return e.children}),null,c.a.createElement("div",{className:"container center"},c.a.createElement(T,{links:[{label:"Home",link:"Home"},{label:"Resume",link:"Resume",active:!0},{label:"Products",link:"Products"},{label:"Contact",link:"Contact"}],logo:D.a})),c.a.createElement("div",{className:"wrapper1 center"},c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"center"},c.a.createElement("img",{src:a(47),alt:"bar"})),c.a.createElement("div",null,c.a.createElement("div",{className:"section-wrapper"},c.a.createElement("h3",{className:"section-title"},"Skills"),c.a.createElement("div",{className:"skill-percentage"},"HTML / HTML5"),c.a.createElement("div",{className:"skill-percentage"},"CSS / CSS3 / SASS"),c.a.createElement("div",{className:"skill-percentage"},"Javascript"),c.a.createElement("div",{className:"skill-percentage"},"Jquery"),c.a.createElement("div",{className:"skill-percentage"},"Websocket APIs"),c.a.createElement("div",{className:"skill-percentage"},"Rest APIs"),c.a.createElement("div",{className:"skill-percentage"},"C++"),c.a.createElement("div",{className:"skill-percentage"},"Photoshop"),c.a.createElement("div",{className:"skill-percentage"},"React.js"),c.a.createElement("div",{className:"skill-percentage"},"Node.js"),c.a.createElement("div",{className:"skill-percentage"},"C#"),c.a.createElement("div",{className:"skill-percentage"},"Python"),c.a.createElement("div",{className:"skill-percentage"},"Golang"),c.a.createElement("div",{className:"skill-percentage"},"Git"),c.a.createElement("div",{className:"skill-percentage"},"Angular")))),c.a.createElement("div",{className:"column expcolumn"},c.a.createElement("div",null,c.a.createElement("section",{className:"experience section-padding"},c.a.createElement("div",{className:"container"},c.a.createElement("h3",{className:"experience-title"},"Experience"),c.a.createElement("div",{className:"experience-wrapper"},c.a.createElement("div",{className:"company-wrapper"},c.a.createElement("div",{className:"experience-title"},"Curated Trades"),c.a.createElement("div",{className:"time"},"Nov 2015 - Present")),c.a.createElement("div",{className:"job-wrapper "},c.a.createElement("div",{className:"experience-title"},"Developer/Lead Trader "),c.a.createElement("div",{className:"company-description"},c.a.createElement("p",null,"Implemented a cross-platform website with React,js, Html/CSS and JavaScript to reach customers across the U.S. Developed financial algorithm to analyze markets trends in C#, Golang and Python. "))),c.a.createElement("div",{className:"company-wrapper "},c.a.createElement("div",{className:"experience-title"},"Our Fresh View"),c.a.createElement("div",{className:"time"},"Jan 2018 - Oct 2019")),c.a.createElement("div",{className:"job-wrapper "},c.a.createElement("div",{className:"experience-title"},"Front-End Developer"),c.a.createElement("div",{className:"company-description"},c.a.createElement("p",null,"Designed and coded a stunning interactive 3D website for a travel blog and made it compatible with Squarespace. Created a flight Inspiration app in python that integrated Rest and WebSocket APIs."))),c.a.createElement("div",{className:"company-wrapper"},c.a.createElement("div",{className:"experience-title"},"Rutland Tire & Wheel"),c.a.createElement("div",{className:"time"},"Jun 2006 - Sept 2016")),c.a.createElement("div",{className:"job-wrapper "},c.a.createElement("div",{className:"experience-title"},"IT Technician"),c.a.createElement("div",{className:"company-description"},c.a.createElement("p",null,"Providing a comprehensive tech support for all company computers and devices. Accurately scanned and entered car data to databases. Provided front-end development services to support and enhance company website."))))),c.a.createElement("div",{className:"container"},c.a.createElement("h3",{className:"experience-title"},"Education"),c.a.createElement("div",{className:"experience-wrapper"},c.a.createElement("div",{className:"company-wrapper "},c.a.createElement("div",{className:"experience-title"},"Purdue University"),c.a.createElement("div",{className:"time"},"Jan 2016 - Dec 2019")),c.a.createElement("div",{className:"job-wrapper"},c.a.createElement("div",{className:"experience-title"},"Bachelor of Computer Science"),c.a.createElement("div",{className:"company-description"},c.a.createElement("p",null,"Graduated with Bachelors of Computer Science in Information Technology. 3.95 GPA and President's List for 6 Semesters. Completed Research in Server Communication and completed training in Project Management."))))))))),c.a.createElement("form",{className:"spacing",method:"get",action:"BradCiechanowskiDeveloper.docx"},c.a.createElement("button",{className:"button1",type:"submit"},"Download Resume")))}}]),t}(n.Component)),te=a(33),ae=a(58),ne=a.n(ae),ce=a(59),ie=a(60),le=a.n(ie),re=a(25),oe=a(22),se=a(61),me=a.n(se),de=a(62),ue=a.n(de),pe=a(63),he=a.n(pe);function ve(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function fe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ve(a,!0).forEach((function(t){Object(oe.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ve(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var be={items:[{id:1,title:"Cryptocurrency",desc:"Cryptocurrency Trading Algorithm",longdesc:"This is a cryptocurrency trading algorithm that looks for arbitrage opportunities within different exchange. It works well in volatile environments and only trades on significant price differences. Therefore, it will only place approximately 4 trades a month. It needs to be placed on a server and run 24/7",price:110,img:me.a},{id:2,title:"Futures",desc:"Futures Trading Algorithm",longdesc:"This is a pattern recognition algorithm built on the Ninjatrader platform to trade futures. This Algorithm looks for significant pricing differences between correlated futures. It has a high, but manageable draw-down that can produce consistent returns with an average annual ROI of over 15%.",price:80,img:ue.a},{id:3,title:"Equities",desc:"Options Trading Algorithm",longdesc:"This a ThinkScript that can be placed on any TD Ameritrade account. The ThinkScript trades options and looks for pricing differences between the option price and the underlying price. It is meant to be placed on any one stock and has a built-in stop-loss. It is a high-risk, high-reward strategy with an average annual return of over 20%.",price:120,img:he.a}],addedItems:[],total:0,count:0},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;if("PAYMENT_SUCCESS"===t.type)return fe({},e,{addedItems:[],total:0,count:0});if("ADD_TO_CART"===t.type){var a=e.items.find((function(e){return e.id===t.id})),n=e.addedItems.find((function(e){return t.id===e.id}));if(n)return fe({},e,{addedItems:Object(re.a)(e.addedItems),total:e.total});a.quantity=1;var c=e.total+a.price;return fe({},e,{addedItems:[].concat(Object(re.a)(e.addedItems),[a]),total:c,count:e.addedItems.reduce((function(e,t){return e+t.quantity}),0)+1})}if("REMOVE_ITEM"===t.type){var i=e.addedItems.find((function(e){return t.id===e.id})),l=e.addedItems.filter((function(e){return t.id!==e.id})),r=e.total-i.price*i.quantity;return console.log(i),fe({},e,r<0?{addedItems:[],total:0,count:0}:{addedItems:l,total:r,count:e.addedItems.reduce((function(e,t){return e+t.quantity}),0)-1})}if("ADD_QUANTITY"===t.type){var o=e.items.find((function(e){return e.id===t.id}));o.quantity+=1;var s=e.total+o.price;return fe({},e,{addedItems:Object(re.a)(e.addedItems),total:s})}if("SUB_QUANTITY"===t.type){var m=e.items.find((function(e){return e.id===t.id}));if(1===m.quantity){var d=e.addedItems.filter((function(e){return e.id!==t.id})),u=e.total-m.price;return u<0?{addedItems:[],total:0,count:0}:fe({},e,{addedItems:d,total:u})}m.quantity-=1;var p=e.total-m.price;return fe({},e,{addedItems:Object(re.a)(e.addedItems),total:p})}return"ADD_Install"===t.type?fe({},e,{total:e.total+200}):"SUB_Install"===t.type?fe({},e,{total:e.total-200}):e},ge={key:"root",storage:ne.a,stateReconciler:le.a},ye=Object(te.a)(ge,Ee),we=Object(_.c)(ye),ke=Object(te.b)(we);window.React=c.a,l.a.render(c.a.createElement(b.a,{store:we},c.a.createElement(ce.a,{loading:c.a.createElement("p",null,"loading"),persistor:ke},c.a.createElement(P.a,null,c.a.createElement(G.c,null,c.a.createElement(G.a,null,c.a.createElement(G.a,{exact:!0,path:"/",component:q}),c.a.createElement(G.a,{exact:!0,path:"/Contact",component:R}),c.a.createElement(G.a,{exact:!0,path:"/Home",component:q}),c.a.createElement(G.a,{exact:!0,path:"/Products",component:$}),c.a.createElement(G.a,{exact:!0,path:"/Resume",component:ee})))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},19:function(e,t,a){e.exports=a.p+"static/media/signature.baf8d17e.svg"},28:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAE4gAABOIAEWfZneAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTEyLTA3VDE0OjM4LTA1OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0xMi0xMFQxMjozMDowNy0wNTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0xMi0xMFQxMjozMDowNy0wNTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3ODcxNTViZS1lMWM0LWMw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"},35:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){e.exports=a.p+"static/media/brad.8d14941b.jpg"},52:function(e,t,a){e.exports=a.p+"static/media/curated.c3783345.JPG"},53:function(e,t,a){e.exports=a.p+"static/media/ourfreshview.7d87aa84.JPG"},54:function(e,t,a){e.exports=a.p+"static/media/bradciechanowski.dcf7b318.JPG"},55:function(e,t,a){e.exports=a.p+"static/media/mobilecurated.782b4c04.JPG"},56:function(e,t,a){e.exports=a.p+"static/media/mobileourfreshview.ce3304c0.JPG"},57:function(e,t,a){e.exports=a.p+"static/media/mobilebradciechanowski.a7149983.JPG"},61:function(e,t,a){e.exports=a.p+"static/media/cryptocurrency-logo.2fa9e106.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/ninjatrader.750b452a.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/thinkorswim.8eb4a397.jpg"},67:function(e,t,a){e.exports=a(105)},72:function(e,t,a){},73:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){e.exports=a.p+"static/media/bartender.d3e1e1f4.jpg"}},[[67,1,2]]]);
//# sourceMappingURL=main.ab73cf63.chunk.js.map