(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(30),r=a.n(s),o=a(8),i=(a(38),a(39),a(52),a(53),a(2)),l=a.n(i),j=a(4),b=a(5),d=(a(55),a(3)),u=a.n(d),h=a(33),m=(a(56),a(0));function p(e){var t=new Date,a=[t.getMonth(),t.getDate(),t.getFullYear()],n=a[0],c=a[1],s=a[2];function r(t){e.setFilter(t.target.innerHTML)}function i(){return(i=Object(j.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":u.a.get("csrftoken")},body:JSON.stringify({})},t.next=3,fetch("/rest-auth/logout/",a);case 3:if(n=t.sent){t.next=8;break}console.log(n),t.next=14;break;case 8:return console.log(n),t.next=11,n.json();case 11:t.sent,u.a.remove("Authorization"),e.setIsAuth(!1);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var b,d,p,g,x,O=new Set;switch(e.currentBlogs.map((function(e){O.add(e.category)})),n+1){case 1:b="January";break;case 2:b="February";break;case 3:b="March";break;case 4:b="April";break;case 5:b="May";break;case 6:b="June";break;case 7:b="July";break;case 8:b="August";break;case 9:b="September";break;case 10:b="October";break;case 11:b="November";break;case 12:b="December"}return!0===e.isAuth?(p=Object(m.jsx)("li",{className:"nav-item",onClick:function(){return i.apply(this,arguments)},children:Object(m.jsx)(o.b,{className:"nav-link",to:"/logout",children:"Logout"})}),!0===e.isAdmin?x=Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(o.b,{className:"nav-link",to:"/admin/portal",children:"Admin Portal"})})}):g=Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(o.b,{className:"nav-link",to:"/profile",children:"Profile"})})):d=Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(o.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(o.b,{className:"nav-link",to:"/registration",children:"Registration"})})]}),Object(m.jsxs)("div",{className:"header-container",children:[Object(m.jsx)("h1",{className:"newspaper-name",children:"The Gartholomew Gazette"}),Object(m.jsxs)("h2",{className:"header-date",children:[b,", ",c," ",s," "]}),Object(m.jsx)("div",{className:"collpase navbar-collapse ",id:"navbarResponsive",children:Object(m.jsxs)("ul",{className:"navbar-nav nav-container",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(o.b,{className:"nav-link",style:"",to:"/",children:"Home"})}),g,d,x,p]})}),Object(m.jsxs)("div",{className:"header-category-container",children:[Object(m.jsx)("a",{className:"header-category",value:null,onClick:r,children:"All"}),Object(h.a)(O).map((function(e){return Object(m.jsx)("a",{className:"header-category",value:e,onClick:r,children:e})}))]})]})}function g(){return Object(m.jsx)("div",{})}var x=a(6),O=(a(66),a(7));var f=Object(O.h)((function(e){function t(){return(t=Object(j.a)(l.a.mark((function t(){var a,n,c,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={title:e.title,body:e.body,category:e.category,status:"SBMT"},n={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":u.a.get("csrftoken")},body:JSON.stringify(a)},t.next=4,fetch("/api/articles/mydrafts/".concat(e.id),n);case 4:if(!1!==(c=t.sent).ok){t.next=9;break}console.log("SUBMIT FOR REVIEW FAILED",c),t.next=13;break;case 9:return t.next=11,c.json();case 11:s=t.sent,console.log("Success for submit for review",s);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"ownblog-card-container",children:[Object(m.jsx)("div",{className:"blog-card-img-container",children:Object(m.jsx)("img",{className:"blog-card-img",src:e.image,alt:""})}),Object(m.jsxs)("div",{className:"blog-card-text-container",children:[Object(m.jsx)("p",{className:"blog-card-category",children:e.category}),Object(m.jsx)("h2",{className:"blog-card-title",children:e.title}),Object(m.jsx)("p",{className:"blog-card-author",children:e.author})]}),Object(m.jsxs)("div",{className:"ownblog-edit-btn-container",children:[Object(m.jsx)("button",{className:"btn btn-warning ownblog-btn",onClick:function(){console.log("hey"),e.history.push("/account/blogs/detail/".concat(e.id))},children:"Edit"}),Object(m.jsx)("button",{className:"btn btn-success ownblog-btn",onClick:function(){!function(){t.apply(this,arguments)}(),e.history.push("/account/blogs/drafts/")},children:"Final Submit"})]})]})})})}));a(67);function y(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1];function s(){return(s=Object(j.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"Content-Type":"application/json","X-CSRFToken":u.a.get("csrftoken")}},e.next=3,fetch("/api/articles/mydrafts/",t);case 3:if(!1!==(a=e.sent).ok){e.next=8;break}console.log("FAILED",a),e.next=12;break;case 8:return e.next=10,a.json();case 10:n=e.sent,c(n);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),Object(m.jsx)("div",{className:"ownblogs-list-container",children:a.map((function(e){return Object(m.jsx)(f,Object(x.a)({},e))}))})}a(68);var v=Object(O.h)((function(e){var t=Object(n.useState)({id:null,author:"",title:"",body:"",category:"",image:"",status:""}),a=Object(b.a)(t,2),c=a[0],s=a[1],r=Object(O.g)(),o=e.match.params.id;function i(){return(i=Object(j.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"Content-Type":"application/json","X-CSRFToken":u.a.get("csrftoken")}},e.next=3,fetch("/api/articles/mydrafts/".concat(o),t);case 3:if(!1!==(a=e.sent).ok){e.next=8;break}console.log("Detail Failed",a),e.next=13;break;case 8:return e.next=10,a.json();case 10:n=e.sent,console.log("success",n),s({id:n.id,author:n.author,title:n.title,body:n.body,image:"",category:n.category,status:n.status});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){var t=Object(x.a)({},c);t[e.target.id]=e.target.value,s(t),console.log(c.image)}function h(){return(h=Object(j.a)(l.a.mark((function e(t){var a,n,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("id",c.id),a.append("author",c.author),a.append("title",c.title),a.append("body",c.body),a.append("category",c.category),a.append("status",c.status),""!==c.image&&a.append("image",c.image),n={method:"PUT",headers:{"X-CSRFToken":u.a.get("csrftoken")},body:a},e.next=12,fetch("/api/articles/mydrafts/".concat(o,"/"),n);case 12:if(!1!==(s=e.sent).ok){e.next=17;break}console.log("EDIT POST FAILED",s),e.next=22;break;case 17:return e.next=19,s.json();case 19:i=e.sent,console.log("EDIT SUCCESS",i),r.push("/account/blogs/drafts");case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),Object(m.jsx)("div",{className:"edit-post-form-container",children:Object(m.jsxs)("form",{className:"form-control",onSubmit:function(e){return h.apply(this,arguments)},children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"title",children:"Title"}),Object(m.jsx)("input",{className:"form-control",type:"text",id:"title",placeholder:"Enter Title..",onChange:d,value:c.title,name:"title"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"body",children:"Body"}),Object(m.jsx)("textarea",{className:"form-control",id:"body",placeholder:"Enter Body..",onChange:d,value:c.body,name:"body"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"image",children:"Image"}),Object(m.jsx)("input",{className:"form-control",type:"file",id:"image",onChange:function(e){var t=e.target.files[0];Object(x.a)({},c)[e.target.id]=t,(new FileReader).readAsDataURL(t)},name:"image"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"category",children:"Category"}),Object(m.jsxs)("select",{className:"form-control",id:"category",onChange:d,value:c.category,name:"category",children:[Object(m.jsx)("option",{value:"General Science",children:"General Science"}),Object(m.jsx)("option",{value:"Geology",children:"Geology"}),Object(m.jsx)("option",{value:"Soil Science",children:"Soil Science"}),Object(m.jsx)("option",{value:"Hydrology",children:"Hydrology"}),Object(m.jsx)("option",{value:"Mineralogy",children:"Mineralology"}),Object(m.jsx)("option",{value:"Petrology",children:"Petrology"}),Object(m.jsx)("option",{value:"Sedimentology",children:"Sedimentology"}),Object(m.jsx)("option",{value:"Volcanology",children:"Volcanology"}),Object(m.jsx)("option",{value:"General Tectonics",children:"General Tectonics"})]})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit New Draft"})]})})}));a(69);function N(e){return Object(m.jsx)("div",{children:Object(m.jsx)(o.b,{to:"/blogs/detail/".concat(e.id),className:"nav-link-container",children:Object(m.jsxs)("div",{className:"blog-card-container",children:[Object(m.jsx)("div",{className:"blog-card-img-container",children:Object(m.jsx)("img",{className:"blog-card-img",src:e.image,alt:""})}),Object(m.jsxs)("div",{className:"blog-card-text-container",children:[Object(m.jsx)("p",{className:"blog-card-category",children:e.category}),Object(m.jsx)("h2",{className:"blog-card-title",children:e.title}),Object(m.jsx)("p",{className:"blog-card-author",children:e.author})]})]})})})}a(70);function k(e){var t=e.filteredBlogs();return console.log(t),Object(m.jsx)("div",{className:"blog-post-list-container",children:t.map((function(e){return Object(m.jsx)(N,Object(x.a)({},e))}))})}a(71),a(72);function S(e){return Object(m.jsxs)("div",{className:"aside-item-container",children:[Object(m.jsx)("div",{className:"aside-item-img-container",children:Object(m.jsx)("img",{className:"aside-item-img",src:e.image,alt:""})}),Object(m.jsxs)("div",{className:"aside-item-text-container",children:[Object(m.jsx)("p",{className:"aside-item-category",children:e.category}),Object(m.jsx)("h2",{className:"aside-item-title",children:e.title}),Object(m.jsx)("p",{className:"aside-item-author",children:e.author})]})]})}function w(e){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"aside-container",children:[Object(m.jsx)("h2",{className:"aside-heading"}),e.currentBlogs.map((function(e){return Object(m.jsx)(S,Object(x.a)({},e))}))]})})}function T(){var e=Object(n.useState)({title:"",body:"",image:null,category:"General Science"}),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(),r=Object(b.a)(s,2),o=(r[0],r[1]);function i(e){var t=Object(x.a)({},a);t[e.target.id]=e.target.value,c(t),console.log(a)}function d(){return(d=Object(j.a)(l.a.mark((function e(t){var n,s,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),alert("hey"),(n=new FormData).append("title",a.title),n.append("body",a.body),n.append("image",a.image),n.append("category",a.category),s={method:"POST",headers:{"X-CSRFToken":u.a.get("csrftoken")},body:n},e.next=10,fetch("/api/articles/",s);case 10:return r=e.sent,e.next=13,r.json();case 13:o=e.sent,!1===r.ok?(console.log("r",r),console.log("d",o)):(console.log("SUCCESS",o),c((function(){return{title:"",body:"",image:null,category:"General Science"}})));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{className:"form-control",onSubmit:function(e){return d.apply(this,arguments)},children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"title",children:"Title"}),Object(m.jsx)("input",{className:"form-control",type:"text",id:"title",placeholder:"Enter Title..",onChange:i,value:a.title,name:"title"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"body",children:"Body"}),Object(m.jsx)("textarea",{className:"form-control",id:"body",placeholder:"Enter Body..",onChange:i,value:a.body,name:"body"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"image",children:"Image"}),Object(m.jsx)("input",{className:"form-control",type:"file",id:"image",onChange:function(e){var t=Object(x.a)({},a),n=e.target.files[0];t.image=n,c(t);var s=new FileReader;s.onloadend=function(){o(s.result)},s.readAsDataURL(n)},name:"image"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"category",children:"Category"}),Object(m.jsxs)("select",{className:"form-control",id:"category",onChange:i,value:a.category,name:"category",children:[Object(m.jsx)("option",{value:"General Science",children:"General Science"}),Object(m.jsx)("option",{value:"Geology",children:"Geology"}),Object(m.jsx)("option",{value:"Soil Science",children:"Soil Science"}),Object(m.jsx)("option",{value:"Hydrology",children:"Hydrology"}),Object(m.jsx)("option",{value:"Mineralogy",children:"Mineralology"}),Object(m.jsx)("option",{value:"Petrology",children:"Petrology"}),Object(m.jsx)("option",{value:"Sedimentology",children:"Sedimentology"}),Object(m.jsx)("option",{value:"Volcanology",children:"Volcanology"}),Object(m.jsx)("option",{value:"General Tectonics",children:"General Tectonics"})]})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit New Draft"})]})})}a(73);function C(e){return Object(m.jsxs)("div",{className:"main-container",children:[Object(m.jsx)(k,{currentBlogs:e.currentBlogs,filteredBlogs:e.filteredBlogs}),Object(m.jsx)(w,{currentBlogs:e.currentBlogs})]})}a(74);var E=function(e){var t=Object(n.useState)({alias:"",avatar:null}),a=Object(b.a)(t,2),c=(a[0],a[1],Object(n.useState)("")),s=Object(b.a)(c,2);return s[0],s[1],Object(m.jsxs)("div",{className:"profile-container text-center row",children:[Object(m.jsxs)("div",{className:"profile-details-container",children:[Object(m.jsx)("h2",{className:"profile-details-heading",children:"PROFILE"}),Object(m.jsx)("h3",{className:"profile-details-subheading",children:"Username: "}),Object(m.jsx)("p",{children:e.userDetails.username}),Object(m.jsx)("h3",{className:"profile-details-subheading",children:"Email: "}),Object(m.jsx)("p",{children:e.userDetails.email})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(o.b,{to:"/account/blogs/create",children:Object(m.jsx)("button",{className:"btn btn-primary profile-btn",children:"Blog Submit Form"})}),Object(m.jsx)(o.b,{to:"/account/blogs/drafts",children:Object(m.jsx)("button",{className:"btn btn-primary profile-btn",children:"See My Drafts"})})]})]})};function F(e){var t=Object(n.useState)({username:"",email:"",password1:"",password2:""}),a=Object(b.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(null),o=Object(b.a)(r,2),i=o[0],d=o[1];function h(e){var t=Object(x.a)({},c);t[e.target.id]=e.target.value,s(t)}function p(){return(p=Object(j.a)(l.a.mark((function t(a){var n,s,r,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),c.password1===c.password2){t.next=5;break}d(!0),t.next=23;break;case 5:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":u.a.get("csrftoken")},body:JSON.stringify(c)},t.next=8,fetch("/rest-auth/registration/",n);case 8:if(!1!==(s=t.sent).ok){t.next=18;break}return t.next=12,s.json();case 12:(r=t.sent).username&&r.username.map((function(e){return console.log(e)})),r.email&&r.email.map((function(e){return console.log(e)})),r.password1&&r.password1.map((function(e){return console.log(e)})),t.next=23;break;case 18:return t.next=20,s.json();case 20:o=t.sent,u.a.set("Authorization","Token: ".concat(o.key)),e.setIsAuth(!0);case 23:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return e.isAuth?Object(m.jsx)(O.a,{to:"/profile"}):Object(m.jsx)("div",{className:"registration-container",children:Object(m.jsxs)("form",{onSubmit:function(e){return p.apply(this,arguments)},children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(m.jsx)("input",{id:"username",className:"form-control",type:"text",placeholder:"Enter Username..",onChange:h,value:c.username})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(m.jsx)("input",{id:"email",className:"form-control",type:"email",placeholder:"Enter Email...",onChange:h,value:c.email})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"password1",children:"Password:"}),Object(m.jsx)("input",{id:"password1",className:"form-control",type:"password",placeholder:"Enter Password...",onChange:h,value:c.password1})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"password2",children:"Confirm Password:"}),Object(m.jsx)("input",{id:"password2",className:"form-control",type:"password",placeholder:"Enter Password...",onChange:h,value:c.password2}),i&&Object(m.jsx)("span",{className:"text-danger",children:"Passwords do not match"})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-success",children:"Register"})]})})}var A=function(e){var t=Object(n.useState)({username:"",password:""}),a=Object(b.a)(t,2),c=a[0],s=a[1];function r(e){var t=Object(x.a)({},c);t[e.target.id]=e.target.value,s(t)}function o(){return(o=Object(j.a)(l.a.mark((function t(a){var n,s,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":u.a.get("csrftoken")},body:JSON.stringify(c)},t.next=4,fetch("/rest-auth/login/",n);case 4:if(!1!==(s=t.sent).ok){t.next=11;break}return t.next=8,s.json();case 8:t.sent,t.next=16;break;case 11:return t.next=13,s.json();case 13:r=t.sent,u.a.set("Authorization","Token ".concat(r.key)),e.setIsAuth(!0);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return e.isAuth?Object(m.jsx)(O.a,{to:"/"}):Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:function(e){return o.apply(this,arguments)},children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(m.jsx)("input",{value:c.username,className:"form-control",type:"text",id:"username",onChange:r,placeholder:"Enter Username.."})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(m.jsx)("input",{value:c.password,className:"form-control",type:"password",id:"password",onChange:r,placeholder:"Enter Password.."})]}),Object(m.jsx)("button",{type:"submit",children:"Login"})]})})};a(75);var D=Object(O.h)((function(e){var t=Object(n.useState)({id:null,author:"",title:"",body:"",category:"",image:"",status:""}),a=Object(b.a)(t,2),c=a[0],s=a[1],r=e.match.params.id;function o(){return(o=Object(j.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"Content-Type":"application/json","X-CSRFToken":u.a.get("csrftoken")}},e.next=3,fetch("/api/articles/".concat(r,"/"),t);case 3:if(!1!==(a=e.sent).ok){e.next=8;break}console.log("Detail Failed",a),e.next=13;break;case 8:return e.next=10,a.json();case 10:n=e.sent,console.log("success",n),s({id:n.id,author:n.author,title:n.title,body:n.body,category:n.category,image:n.image,status:n.status});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]),Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"blog-detail-card-container",children:[Object(m.jsx)("div",{className:"blog-card-img-container",children:Object(m.jsx)("img",{className:"blog-card-img",src:c.image,alt:""})}),Object(m.jsxs)("div",{className:"blog-card-text-container",children:[Object(m.jsx)("p",{className:"blog-card-category",children:c.category}),Object(m.jsx)("h2",{className:"blog-card-title",children:c.title}),Object(m.jsx)("p",{children:c.body}),Object(m.jsxs)("p",{className:"blog-card-author",children:["Author:",c.author]})]})]})})})}));var R=Object(O.h)((function(e){function t(){return(t=Object(j.a)(l.a.mark((function t(){var a,n,c,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={title:e.title,body:e.body,category:e.category,status:"RJT"},n={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":u.a.get("csrftoken")},body:JSON.stringify(a)},t.next=4,fetch("/api/articles/admin/ALL/".concat(e.id,"/"),n);case 4:if(!1!==(c=t.sent).ok){t.next=9;break}console.log("REJECTED FAILED",c),t.next=13;break;case 9:return t.next=11,c.json();case 11:s=t.sent,console.log("SUCCESS REJECTED",s);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function a(){return(a=Object(j.a)(l.a.mark((function t(){var a,n,c,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={title:e.title,body:e.body,category:e.category,status:"PBLH"},n={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":u.a.get("csrftoken")},body:JSON.stringify(a)},t.next=4,fetch("/api/articles/admin/ALL/".concat(e.id,"/"),n);case 4:if(!1!==(c=t.sent).ok){t.next=9;break}console.log("PUBLISHED FAILED",c),t.next=13;break;case 9:return t.next=11,c.json();case 11:s=t.sent,console.log("SUCCESS PUBLISHED",s);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"ownblog-card-container",children:[Object(m.jsx)("div",{className:"blog-card-img-container",children:Object(m.jsx)("img",{className:"blog-card-img",src:e.image,alt:""})}),Object(m.jsxs)("div",{className:"blog-card-text-container",children:[Object(m.jsx)("p",{className:"blog-card-category",children:e.category}),Object(m.jsx)("h2",{className:"blog-card-title",children:e.title}),Object(m.jsx)("p",{className:"blog-card-author",children:e.author})]}),Object(m.jsxs)("div",{className:"ownblog-edit-btn-container",children:[Object(m.jsx)("button",{className:"btn btn-danger ownblog-btn",onClick:function(){return t.apply(this,arguments)},children:"Reject"}),Object(m.jsx)("button",{className:"btn btn-success ownblog-btn",onClick:function(){return a.apply(this,arguments)},children:"Publish"})]})]})})})}));var L=Object(O.h)((function(e){function t(){return(t=Object(j.a)(l.a.mark((function t(){var a,n,c,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={title:e.title,body:e.body,category:e.category,status:"SBMT"},n={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":u.a.get("csrftoken")},body:JSON.stringify(a)},t.next=4,fetch("/api/articles/admin/ALL/".concat(e.id,"/"),n);case 4:if(!1!==(c=t.sent).ok){t.next=9;break}console.log("REJECTED FAILED",c),t.next=13;break;case 9:return t.next=11,c.json();case 11:s=t.sent,console.log("SUCCESS REJECTED",s);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"ownblog-card-container",children:[Object(m.jsx)("div",{className:"blog-card-img-container",children:Object(m.jsx)("img",{className:"blog-card-img",src:e.image,alt:""})}),Object(m.jsxs)("div",{className:"blog-card-text-container",children:[Object(m.jsx)("p",{className:"blog-card-category",children:e.category}),Object(m.jsx)("h2",{className:"blog-card-title",children:e.title}),Object(m.jsx)("p",{className:"blog-card-author",children:e.author})]}),Object(m.jsx)("div",{className:"ownblog-edit-btn-container",children:Object(m.jsx)("button",{className:"btn btn-danger ownblog-btn",onClick:function(){return t.apply(this,arguments)},children:"Reverse Rejection"})})]})})})}));var P=Object(O.h)((function(e){function t(){return(t=Object(j.a)(l.a.mark((function t(){var a,n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={title:e.title,body:e.body,category:e.category,status:"SBMT"},n={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":u.a.get("csrftoken")},body:JSON.stringify(a)},t.next=4,fetch("/api/articles/admin/ALL/".concat(e.id,"/"),n);case 4:if(!1!==(c=t.sent).ok){t.next=8;break}t.next=11;break;case 8:return t.next=10,c.json();case 10:t.sent;case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"ownblog-card-container",children:[Object(m.jsx)("div",{className:"blog-card-img-container",children:Object(m.jsx)("img",{className:"blog-card-img",src:e.image,alt:""})}),Object(m.jsxs)("div",{className:"blog-card-text-container",children:[Object(m.jsx)("p",{className:"blog-card-category",children:e.category}),Object(m.jsx)("h2",{className:"blog-card-title",children:e.title}),Object(m.jsx)("p",{className:"blog-card-author",children:e.author})]}),Object(m.jsx)("div",{className:"ownblog-edit-btn-container",children:Object(m.jsx)("button",{className:"btn btn-danger ownblog-btn",onClick:function(){return t.apply(this,arguments)},children:"Reverse Publication"})})]})})})}));a(76);function B(){var e,t=Object(n.useState)([]),a=Object(b.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)("ALL"),o=Object(b.a)(r,2),i=o[0],d=o[1];function h(){return h=Object(j.a)(l.a.mark((function e(){var t,a,n,c,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"ALL",a={method:"GET",headers:{"Content-Type":"application/json","X-CSRFToken":u.a.get("csrftoken")}},e.next=4,fetch("/api/articles/admin/".concat(t),a);case 4:if(!1!==(n=e.sent).ok){e.next=9;break}console.log("FAILED",n),e.next=13;break;case 9:return e.next=11,n.json();case 11:c=e.sent,s(c);case 13:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}return Object(n.useEffect)((function(){!function(){h.apply(this,arguments)}(i)}),[i]),"SBMT"==i?e=c.map((function(e){return Object(m.jsx)(R,Object(x.a)({},e))})):"ALL"==i||"DFT"==i?e=c.map((function(e){return Object(m.jsx)(N,Object(x.a)({},e))})):"RJT"==i?e=c.map((function(e){return Object(m.jsx)(L,Object(x.a)({},e))})):"PBLH"==i&&(e=c.map((function(e){return Object(m.jsx)(P,Object(x.a)({},e))}))),Object(m.jsxs)("div",{className:"admin-blog-list-container",children:[Object(m.jsx)("form",{className:"form-control",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{HTMLfor:"status",children:"Filter Articles by Status:"}),Object(m.jsxs)("select",{id:"status",className:"form-select",onChange:function(e){d(e.target.value)},value:i,children:[Object(m.jsx)("option",{value:"ALL",selected:!0,children:"All"}),Object(m.jsx)("option",{value:"DFT",children:"Draft"}),Object(m.jsx)("option",{value:"SBMT",children:"Submitted"}),Object(m.jsx)("option",{value:"PBLH",children:"Published"}),Object(m.jsx)("option",{value:"RJT",children:"Rejected"})]})]})}),Object(m.jsx)("div",{className:"ownblogs-list-container",children:e})]})}var I=function(){var e=Object(n.useState)(),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(b.a)(s,2),o=r[0],i=r[1],d=(Object(O.g)(),Object(n.useState)(!1)),h=Object(b.a)(d,2),x=h[0],f=h[1],N=Object(n.useState)(null),k=Object(b.a)(N,2),S=k[0],w=k[1],R=Object(n.useState)({username:"",email:""}),L=Object(b.a)(R,2),P=L[0],I=L[1];function G(){return(G=Object(j.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"Content-Type":"application/json","X-CSRFToken":u.a.get("csrftoken")}},e.next=3,fetch("/api/articles/",t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,!1===a.ok||i(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return(U=Object(j.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",header:{"Content-Type":"application/json","X-CSRFToken":"csrftoken"}},e.next=3,fetch("/rest-auth/user/",t);case 3:if(!1!==(a=e.sent).ok){e.next=8;break}console.log("FAILED",a),e.next=14;break;case 8:return e.next=10,a.json();case 10:n=e.sent,console.log("success grabbing details",n),I({username:n.username,email:n.email}),!0!==n.is_staff&&!0!==n.is_superuser||f(!0);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/rest-auth/user/");case 2:!1===e.sent.ok?c(!1):c(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(n.useEffect)((function(){!function(){G.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){!function(){U.apply(this,arguments)}()}),[a]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{currentBlogs:o,isAuth:a,isAdmin:x,setFilter:w,setIsAuth:c}),Object(m.jsxs)(O.d,{children:[Object(m.jsx)(O.b,{path:"/registration",children:Object(m.jsx)(F,{isAuth:a,setIsAuth:c})}),Object(m.jsx)(O.b,{path:"/profile",children:Object(m.jsx)(E,{userDetails:P})}),Object(m.jsx)(O.b,{path:"/admin/portal",children:Object(m.jsx)(B,{})}),Object(m.jsx)(O.b,{path:"/account/blogs/create",children:Object(m.jsx)(T,{})}),Object(m.jsx)(O.b,{path:"/account/blogs/drafts",children:Object(m.jsx)(y,{})}),Object(m.jsx)(O.b,{path:"/login",children:Object(m.jsx)(A,{isAuth:a,setIsAuth:c})}),Object(m.jsx)(O.b,{path:"/logout",children:Object(m.jsx)(A,{isAuth:a,setIsAuth:c})}),Object(m.jsx)(O.b,{path:"/blogs/detail/:id",children:Object(m.jsx)(D,{})}),Object(m.jsx)(O.b,{path:"/account/blogs/detail/:id",children:Object(m.jsx)(v,{})}),Object(m.jsx)(O.b,{path:"/",children:Object(m.jsx)(C,{filteredBlogs:function(){return S&&"All"!==S?o.filter((function(e){return e.category===S})):o},currentBlogs:o})})]}),Object(m.jsx)(g,{})]})};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(o.a,{children:Object(m.jsx)(I,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.eecbb90c.chunk.js.map