(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{24:function(e,t,a){e.exports=a(44)},29:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),s=(a(29),a(4)),l=a(5),o=a(7),u=a(6),m=a(8),d=a(13),p=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg-dark container pt-5 pb-2 text-white"},r.a.createElement("h3",{className:"mb-5"},"Todo List Project"),r.a.createElement("div",{className:"nav d-flex justify-content-center"},r.a.createElement(d.b,{to:"/"},r.a.createElement("span",{className:"text-white nav-link active"},"Home")),r.a.createElement(d.b,{to:"/about"},r.a.createElement("span",{className:"text-white nav-link"},"About"))))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={taskTitle:"",id:"",isComplete:!1},a.changeHandler=function(e){a.setState({taskTitle:e.target.value})},a.onSubmit=function(e){e.preventDefault(),a.props.addTask(a.state),a.setState({taskTitle:"",id:"",isComplete:!1})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-2"},r.a.createElement("form",{className:"form form-inline",onSubmit:this.onSubmit},r.a.createElement("input",{className:"form-element col",type:"text",value:this.state.taskTitle,onChange:this.changeHandler,placeholder:"Add Task ..."}),r.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-dark text-white col-3 p-1 ml-2"})))}}]),t}(n.Component),h=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.props.taskTitles.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",{className:""},r.a.createElement("input",{type:"checkbox",name:"complete",id:t.id,onChange:function(t){e.props.taskDone(t.target.id)}})),r.a.createElement("td",{className:"d-flex justify-content-start"},r.a.createElement("label",{style:t.isComplete?{textDecoration:"line-through"}:{textDecoration:"none"}},t.taskTitle)),r.a.createElement("td",{className:""},r.a.createElement("button",{type:"button",id:t.id,className:"btn btn-danger",onClick:function(t){return e.props.taskDelete(t.target.id)}},"x")))}))}}]),t}(n.Component),f=a(23),k=a.n(f),E=(a(43),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container bg-light text-dark p-5 d-flex justify-content-center"},r.a.createElement("h3",null,"This is About Page"))}}]),t}(n.Component)),v=a(10),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={taskTitles:[]},a.addTask=function(e){e.id=k.a.generate(),a.state.taskTitles.push(e),a.forceUpdate()},a.taskDone=function(e){var t=a.state.taskTitles.filter((function(t){return e===t.id}));t[0].isComplete=!t[0].isComplete,a.forceUpdate()},a.taskDelete=function(e){var t=a.state.taskTitles.filter((function(t){return e!==t.id}));a.setState({taskTitles:t})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(v.a,{path:"/",exact:!0,render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{addTask:e.addTask}),r.a.createElement("table",{className:"table mt-5 container"},r.a.createElement("tbody",null,r.a.createElement(h,{taskTitles:e.state.taskTitles,taskDone:e.taskDone,taskDelete:e.taskDelete}))))}})),r.a.createElement(v.a,{path:"/about",exact:!0,component:E}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.3cb4dbf4.chunk.js.map