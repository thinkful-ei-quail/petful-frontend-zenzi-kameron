(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{22:function(t,e,n){t.exports=n(35)},23:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);n(23);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),s=n(21),u=n(4),i=n(5),l=n(7),h=n(6),d=n(12),m=n(9),p=(n(28),n(29),"http://localhost:8000/api"),f={getUsers:function(){return fetch("".concat(p,"/people")).then((function(t){if(t.ok)return t.json();t.json().then((function(t){return t.Promise.reject(t)}))}))},postUser:function(t){var e={name:t};return fetch("".concat(p,"/people"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},deleteCurrent:function(){return fetch("".concat(p,"/people"),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(t){if(!t)throw new Error("Something went wrong")}))}},g=r.a.createContext({setUser:function(){},removeUser:function(){}}),v=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={currentPets:[]},t.handleSubmit=function(e){e.preventDefault();var n=t.props.history,a=e.target.name.value;f.postUser(a),t.context.setUser(a),n.push("./adopt")},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("".concat(p,"/pets")).then((function(t){if(t.ok)return t.json();t.json().then((function(t){return Promise.reject(t)}))})).then((function(e){return t.setState({currentPets:e})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"FIFO Adoption Agency"),r.a.createElement("h3",null,"How FIFO works"),r.a.createElement("p",{className:"main-desc"},"FIFO Adoption Agency places deserving pets with adoptive families that need them. Each cat or dog is adopted in the order in which it was surrendered to our care. this assures that no pet's stay is too long!"),r.a.createElement("ol",{className:"steps"},r.a.createElement("li",null,"Join our list of adoptive pet parents"),r.a.createElement("li",null,"You'll receive confirmation of entry to our waiting list"),r.a.createElement("li",null,"Hold tight! Our waiting list updates automatically."),r.a.createElement("li",null,"You can see all of our fantastic animals until it's time to adopt!"),r.a.createElement("li",null,"When it's your turn to adopt, you may choose the dog or cat currently available.")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"name"},"Enter your name: "),r.a.createElement("input",{type:"text",name:"name",id:"name"}),r.a.createElement("button",{type:"submit"},"Adopt a Pet")),r.a.createElement("h4",null,"Users Currently Waiting:"),r.a.createElement("ol",null,this.context.users.map((function(t,e){return r.a.createElement("li",{key:"".concat(t).concat(e)},t)}))),r.a.createElement("h4",null,"Cats Currently Available:"),r.a.createElement("ul",{className:"homePets"},this.state.currentPets.cats&&this.state.currentPets.cats.map((function(t,e){return r.a.createElement("li",{key:"".concat(t.name).concat(e)},r.a.createElement("img",{src:t.imageURL,alt:t.description,className:"homePet"}))}))),r.a.createElement("h4",null,"Dogs Currently Available:"),r.a.createElement("ul",{className:"homePets"},this.state.currentPets.dogs&&this.state.currentPets.dogs.map((function(t,e){return r.a.createElement("li",{key:"".concat(t.name).concat(e)},r.a.createElement("img",{src:t.imageURL,alt:t.description,className:"homePet"}))}))))}}]),n}(a.Component);v.defaultProps={history:{push:function(){}}},v.contextType=g;var E=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={adopted:!1},t.handleClick=function(e){t.setState({adopted:!0}),t.context.adoptCatAction()},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return null===this.context.currentCat?r.a.createElement("p",null,"No more cats available"):this.state.adopted?r.a.createElement("h2",null,"You've adopted ",this.context.currentCat.name,"!"):r.a.createElement("div",{className:"cats-all"},r.a.createElement("h2",null,this.context.currentCat.name),r.a.createElement("p",null,this.context.currentCat.gender,", ",this.context.currentCat.age," years old"),r.a.createElement("img",{src:this.context.currentCat.imageURL,alt:this.context.currentCat.imageDescription}),r.a.createElement("br",null),r.a.createElement("p",null,"Breed: ",this.context.currentCat.breed),r.a.createElement("p",null,this.context.currentCat.story),this.context.currentUser===this.context.user&&!this.state.adopted&&r.a.createElement("button",{type:"button",onClick:this.handleClick},"Adopt ",this.context.currentCat.name,"!"))}}]),n}(a.Component);E.contextType=g;var x={getAllDogs:function(){return fetch("".concat(p,"/pets/dogs")).then((function(t){if(t.ok)return t.json();t.json().then((function(t){return Promise.reject(t)}))}))},getNextDog:function(){return fetch("".concat(p,"/pets/dog")).then((function(t){return t.ok?t.json():null})).catch((function(){return null}))},deleteCurrent:function(){return fetch("".concat(p,"/pets/dog"),{method:"DELETE"}).then((function(t){return t.ok?null:t.json().then((function(t){return Promise.reject(t)}))}))}},C=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={dogs:[],adopted:!1},t.handleClick=function(e){t.setState({adopted:!0}),t.context.adoptDogAction()},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;x.getAllDogs().then((function(e){t.setState({dogs:e})})).then((function(){return t.setState({loaded:!0})}))}},{key:"render",value:function(){return null===this.context.currentDog?r.a.createElement("p",null,"No dogs available"):this.state.adopted?r.a.createElement("h2",null,"You've adopted ",this.context.currentDog.name,"!"):r.a.createElement("div",{className:"dogs-all"},r.a.createElement("h2",null,this.context.currentDog.name),r.a.createElement("p",null,this.context.currentDog.gender,", ",this.context.currentDog.age," years old"),r.a.createElement("img",{src:this.context.currentDog.imageURL,alt:this.context.currentDog.imageDescription}),r.a.createElement("br",null),r.a.createElement("p",null,"Breed: ",this.context.currentDog.breed),r.a.createElement("p",null,this.context.currentDog.story),this.context.user===this.context.currentUser&&!this.state.adopted&&r.a.createElement("button",{type:"button",onClick:this.handleClick},"Adopt ",this.context.currentDog.name,"!"))}}]),n}(a.Component);C.contextType=g;var y={getAllCats:function(){return fetch("".concat(p,"/pets/cats")).then((function(t){if(t.ok)return t.json();t.json().then((function(t){return Promise.reject(t)}))}))},getNextCat:function(){return fetch("".concat(p,"/pets/cat")).then((function(t){return t.ok?t.json():null})).catch((function(){return null}))},deleteCurrent:function(){return fetch("".concat(p,"/pets/cat"),{method:"DELETE"}).then((function(t){return t.ok?null:t.json().then((function(t){return Promise.reject(t)}))}))}},b=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={currentCat:null,currentDog:null,currentAdoptedPet:null,removeStatus:!1,bothPetAdoptionStatus:!1},t.adoptCat=function(){t.setState({currentAdoptedPet:t.state.currentCat},(function(){var t=this;this.state.currentCat&&y.deleteCurrent().then((function(){setTimeout((function(){t.getNextCatPage()}),2e3)}))}))},t.adoptDog=function(){t.setState({currentAdoptedPet:t.state.currentDog},(function(){var t=this;this.state.currentDog&&x.deleteCurrent().then((function(){setTimeout((function(){t.getNextDogPage()}),2e3)}))}))},t.adoptCatAction=function(){t.setState({currentAdoptedPet:t.state.currentCat,removeStatus:!0},(function(){t.state.currentCat&&y.deleteCurrent().then((function(){setTimeout((function(){t.props.history.push("/")}),2e3)})).then((function(){f.deleteCurrent(),t.context.setUser(null),t.context.removeUser()}))}))},t.adoptDogAction=function(){t.setState({currentAdoptedPet:t.state.currentDog,removeStatus:!0},(function(){var t=this;this.state.currentDog&&x.deleteCurrent().then((function(){setTimeout((function(){console.log("redirect to the home page"),t.props.history.push("/")}),2e3)})).then((function(){f.deleteCurrent(),t.context.setUser(null),t.context.removeUser()}))}))},t.adoptBothPetAction=function(){t.setState({bothPetAdoptionStatus:!0},(function(){var t=this;this.state.currentDog&&this.state.currentCat&&x.deleteCurrent().then((function(){y.deleteCurrent().then((function(){setTimeout((function(){console.log("redirect to the home page"),t.props.history.push("/")}),2e3)}))}))}))},t.getNextDogPage=function(){x.getNextDog().then((function(e){t.context.loadUsers(),t.setState({currentDog:e,currentAdoptedPet:null})}))},t.getNextCatPage=function(){y.getNextCat().then((function(e){t.context.loadUsers(),t.setState({currentCat:e,currentAdoptedPet:null})}))},t.getRandomInt=function(t){return Math.floor(Math.random()*Math.floor(t))},t.shuffleUser=function(){t.context.users.length&&f.deleteCurrent().then((function(){t.getRandomInt(100)<50?t.adoptCat():t.adoptDog()}))},t.getCurrentUserStatus=function(){return t.state.bothPetAdoptionStatus?"You've adopted "+t.state.currentCat.name+" and "+t.state.currentDog.name:t.state.removeStatus?void 0:null==t.state.currentAdoptedPet?t.context.currentUser+" is currently adopting":t.context.currentUser+" has adopted "+t.state.currentAdoptedPet.name},t.getAdoptBothButton=function(){if(null!=t.state.currentCat&&null!=t.state.currentDog&&t.context.user===t.context.users[0]&&!t.state.bothPetAdoptionStatus)return r.a.createElement("button",{type:"button",onClick:t.adoptBothPetAction},"Adopt ",t.state.currentDog.name," and ",t.state.currentCat.name,"!")},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.context.loadUsers(),this.getNextCat(),this.getNextDog();var e=this.context.newRandomUsers.slice(),n=setInterval((function(){t.context.user===t.context.users[0]?(setInterval((function(){if(e.length){var n=e.shift();t.context.addRandom(n)}}),t.context.stopTime),clearInterval(n)):t.shuffleUser()}),this.context.stopTime)}},{key:"componentWillUnmount",value:function(){}},{key:"getNextCat",value:function(){var t=this;y.getNextCat().then((function(e){t.setState({currentCat:e})}))}},{key:"getNextDog",value:function(){var t=this;x.getNextDog().then((function(e){t.setState({currentDog:e})}))}},{key:"render",value:function(){var t={currentCat:this.state.currentCat,currentDog:this.state.currentDog,currentUser:this.context.currentUser,user:this.context.user,adoptDogAction:this.adoptDogAction,adoptCatAction:this.adoptCatAction};return this.context.isLoading?r.a.createElement("p",null,"Loading"):r.a.createElement(g.Provider,{value:t},r.a.createElement("div",null,r.a.createElement("h2",null,this.getCurrentUserStatus()),!this.state.bothPetAdoptionStatus&&r.a.createElement(E,{className:"pet"}),!this.state.bothPetAdoptionStatus&&r.a.createElement(C,{className:"pet"}),this.getAdoptBothButton()))}}]),n}(a.Component);b.contextType=g;var D=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={user:null,isWaiting:!1,users:[],count:0,isLoading:!1},t.setUser=function(e){t.setState({isLoading:!0}),t.setState({user:e,isWaiting:!0,users:[].concat(Object(s.a)(t.state.users),[e]),isLoading:!1})},t.loadUsers=function(){f.getUsers().then((function(e){t.setState({users:e})}))},t.removeUser=function(){if(t.state.users[0]!==t.state.user){var e=t.state.users.slice(1,t.state.users.length);t.setState({users:e})}},t.addRandom=function(e){f.postUser(e).then(t.loadUsers())},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.loadUsers()}},{key:"render",value:function(){var t={setUser:this.setUser,removeUser:this.removeUser,user:this.state.user,isWaiting:this.state.isWaiting,currentUser:this.state.users[0],users:this.state.users,isLoading:this.state.isLoading,loadUsers:this.loadUsers,addRandom:this.addRandom,newRandomUsers:["Random User 1","Random User 2","Random User 3","Random User 4","Random User 5"],stopTime:5e3};return r.a.createElement(g.Provider,{value:t},r.a.createElement("div",{className:"center"},r.a.createElement(d.b,{to:"/"},r.a.createElement("h1",null,"Petful")),r.a.createElement("div",{className:"petSection"},r.a.createElement(m.a,{exact:!0,path:"/",component:v}),r.a.createElement(m.a,{path:"/adopt",component:b}))))}}]),n}(a.Component);c.a.render(r.a.createElement(d.a,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a5672bc7.chunk.js.map