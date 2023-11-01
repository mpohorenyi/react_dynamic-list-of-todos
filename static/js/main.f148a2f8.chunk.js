(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a,s=c(8),o=c.n(s),l=c(1),n=c.n(l),d=(c(14),c(15),c(4)),i=c.n(d),r=c(3),j=c(9),u=c(2);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(a||(a={}));function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var h=c(0);function O(e,t){switch(t.type){case"loadTodos":return Object(u.a)(Object(u.a)({},e),{},{todos:t.payload,filteredTodos:t.payload});case"setTodoModal":return Object(u.a)(Object(u.a)({},e),{},{todoModal:t.payload});case"toggleLoadingTodos":return Object(u.a)(Object(u.a)({},e),{},{loadingTodos:!e.loadingTodos});case"filterAndSearchTodos":var c=Object(j.a)(e.todos);return c=c.filter((function(e){switch(t.filter){case a.Active:return!e.completed;case a.Completed:return e.completed;case a.All:default:return!0}})),t.search&&(c=c.filter((function(e){return e.title.toLocaleLowerCase().includes(t.search.trim().toLowerCase())}))),Object(u.a)(Object(u.a)({},e),{},{filteredTodos:c});default:return e}}var m={todos:[],filteredTodos:[],loadingTodos:!1,todoModal:null},x=n.a.createContext(m),f=n.a.createContext((function(){})),v=function(e){var t=e.children,c=Object(l.useReducer)(O,m),a=Object(r.a)(c,2),s=a[0],o=a[1];return Object(l.useEffect)((function(){o({type:"toggleLoadingTodos"}),b("/todos").then((function(e){return o({type:"loadTodos",payload:e})})).finally((function(){return o({type:"toggleLoadingTodos"})}))}),[]),Object(h.jsx)(f.Provider,{value:o,children:Object(h.jsx)(x.Provider,{value:s,children:t})})},p=function(e){var t=e.todo,c=t.id,a=t.title,s=t.completed,o=Object(l.useContext)(f),n=Object(l.useContext)(x).todoModal;return Object(h.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(h.jsx)("td",{className:"is-vcentered",children:c}),Object(h.jsx)("td",{className:"is-vcentered",children:s&&Object(h.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("td",{className:"is-vcentered is-expanded",children:Object(h.jsx)("p",{className:i()({"has-text-danger":!s,"has-text-success":s}),children:a})}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:Object(h.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){o({type:"setTodoModal",payload:t})},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:i()("far",{"fa-eye":(null===n||void 0===n?void 0:n.id)!==c,"fa-eye-slash":(null===n||void 0===n?void 0:n.id)===c})})})})})]})},y=function(e){var t=e.todos;return Object(h.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsx)(p,{todo:e},e.id)}))})]})},N=function(){var e=Object(l.useContext)(f),t=Object(l.useState)(a.All),c=Object(r.a)(t,2),s=c[0],o=c[1],n=Object(l.useState)(""),d=Object(r.a)(n,2),i=d[0],j=d[1];return Object(h.jsxs)("form",{className:"field has-addons",children:[Object(h.jsx)("p",{className:"control",children:Object(h.jsx)("span",{className:"select",children:Object(h.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(t){o(t.target.value),e({type:"filterAndSearchTodos",filter:t.target.value,search:i})},children:[Object(h.jsx)("option",{value:"all",children:"All"}),Object(h.jsx)("option",{value:"active",children:"Active"}),Object(h.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(h.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:i,onChange:function(t){j(t.target.value),e({type:"filterAndSearchTodos",filter:s,search:t.target.value})}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-magnifying-glass"})}),i&&Object(h.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(h.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){j(""),e({type:"filterAndSearchTodos",filter:s,search:""})}})})]})]})},g=(c(17),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})}),T=function(){var e=Object(l.useContext)(x).todoModal,t=Object(l.useContext)(f),c=Object(l.useState)(),a=Object(r.a)(c,2),s=a[0],o=a[1],n=Object(l.useState)(!1),d=Object(r.a)(n,2),j=d[0],u=d[1];Object(l.useEffect)((function(){var t;e&&(u(!0),(t=e.userId,b("/users/".concat(t))).then(o).finally((function(){return u(!1)})))}),[e]);return Object(h.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(h.jsx)("div",{className:"modal-background"}),j?Object(h.jsx)(g,{}):Object(h.jsxs)("div",{className:"modal-card",children:[Object(h.jsxs)("header",{className:"modal-card-head",children:[Object(h.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===e||void 0===e?void 0:e.id)}),Object(h.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){t({type:"setTodoModal",payload:null})}})]}),Object(h.jsxs)("div",{className:"modal-card-body",children:[Object(h.jsx)("p",{className:"block","data-cy":"modal-title",children:null===e||void 0===e?void 0:e.title}),Object(h.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(h.jsx)("strong",{className:i()({"has-text-danger":!(null!==e&&void 0!==e&&e.completed),"has-text-success":null===e||void 0===e?void 0:e.completed}),children:"".concat(null!==e&&void 0!==e&&e.completed?"Done":"Planned")})," by ",Object(h.jsx)("a",{href:"mailto:".concat(null===s||void 0===s?void 0:s.email),children:null===s||void 0===s?void 0:s.name})]})]})]})]})},C=function(){var e=Object(l.useContext)(x),t=e.loadingTodos,c=e.filteredTodos,a=e.todoModal;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("h1",{className:"title",children:"Todos:"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(N,{})}),Object(h.jsx)("div",{className:"block",children:t?Object(h.jsx)(g,{}):Object(h.jsx)(y,{todos:c})})]})})}),a&&Object(h.jsx)(T,{})]})};o.a.render(Object(h.jsx)(v,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f148a2f8.chunk.js.map