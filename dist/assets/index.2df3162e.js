var D=Object.defineProperty,j=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var w=(e,t,o)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,y=(e,t)=>{for(var o in t||(t={}))E.call(t,o)&&w(e,o,t[o]);if(x)for(var o of x(t))M.call(t,o)&&w(e,o,t[o]);return e},k=(e,t)=>j(e,A(t));import{r as m,s as i,j as u,R as P,a as R}from"./vendor.1458af76.js";const q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};q();const v="http://localhost:8080/api/v1/",S="https://demo-api.now.sh/users",G=async(e="",t="",o=!0)=>await(await fetch(`${o?S:v}${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:t&&JSON.stringify(t)})).json(),I=async(e="",t=!0)=>await(await fetch(`${t?S:v}${e}`,{method:"GET",headers:{"Content-Type":"application/json"}})).json(),T=e=>{const[t,o]=m.exports.useState(e);return[t,s=>{o(k(y({},t),{[s.target.name]:s.target.value}))}]},$=i.div`
	position: absolute;
	top: 5rem;
	left: 50%;
	padding: 1.5rem 0;
	display: block;
	transform: translate(-50%, -50%);
	width: 60rem;
	max-width: 80rem;
	text-align: center;
	z-index: 2;
	background-color: ${e=>e.backGroundColor?e.backGroundColor:"#ff4800"};
	border-radius: 5px;

	&:focus {
		display: none;
	}

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`,B=i.h2`
	display: flex;
	font-weight: 700;
	font-size: 2rem;
	text-transform: capitalize;
	align-items: center;
	justify-content: center;
	margin-bottom: 1rem;
	color: #fff;
`,_=i.p`
	font-size: 1.8rem;
	max-width: 50rem;
	margin: 0 auto;
	color: #fff;
`,n=u.exports.jsx,l=u.exports.jsxs,N=u.exports.Fragment;function z({title:e,message_1:t,color:o}){return l($,{backGroundColor:o,children:[n(B,{children:e}),n(_,{children:t})]})}const H=e=>e.password.length<8||!/[a-z]/.test(e.password)||!/[A-Z]/.test(e.password)?!1:!(e.password.includes(e.firstName)||e.password.includes(e.lastName)),V=i.main`
	margin: 0 auto;
	background-color: #141240;
	position: relative;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	align-items: center;
	display: flex;
	flex-direction: column;
`;i.div`
	width: 10rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;const J=i.div`
	margin: 10rem 0;
	max-width: 75rem;
	width: 70rem;
	background-color: #fff;
	// background-color: #ff4800;
	box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
	padding: 5rem 7rem;
	border-radius: 5px;
`;i.span`
	padding-top: 2rem;
	font-weight: 400;
`;const O=i.h2`
	font-size: 3rem;
	text-transform: capitalize;
	font-weight: 500;
	background-image: -webkit-gradient(
		linear,
		left top,
		right top,
		from(#141240),
		to(#141240)
	);
	background-image: linear-gradient(to right, #1e2749, #1e2749);
	-webkit-background-clip: text;
	color: transparent;
	letter-spacing: 0.1rem;
	line-height: 1.3;
	display: inline-block;

	margin-bottom: 3.5rem !important;

	& span {
		color: #141240;
		font-style: oblique;
		font-weight: 700;
	}
`,Y=i.form`
	margin: 0 auto;
	max-width: 55rem;
	background-color: #fff;
	-webkit-box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
	box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
	padding: 5rem 7rem;
	border-radius: 5px;
`,c=i.div`
	margin-bottom: 2.5rem;
`,f=i.input`
	display: block;
	font-family: inherit;
	font-size: 1.5rem;
	color: inherit;
	padding: 1.25rem 1.75rem;
	border: none;
	width: 100%;
	background-color: #fff;
	background-color: #f2f2f2;
	border-top: 3px solid transparent;
	border-bottom: 3px solid transparent;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
	border-radius: 4px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;

	&:focus {
		outline: none;
		border-bottom: 3px solid rgba(30, 39, 73, 1);
	}

	&:focus:invalid {
		border-bottom: 3px solid #ff4800;
	}

	&::-webkit-input-placeholder {
		color: #bbb;
		font-size: 1.3rem;
	}
`,p=i.label`
	display: block;
	font-size: 1.6rem;
	font-weight: 350;
	margin-bottom: 0.75rem;
	text-align: left;
	padding-left: 5px;
`,K=i.button`
	width: 100%;
	font-size: 1.6rem;
	padding: 1.4rem 3rem;
	border-radius: 5px;
	text-transform: uppercase;
	display: inline-block;
	text-decoration: none;
	position: relative;
	-webkit-transition: all 0.4s;
	transition: all 0.4s;
	font-weight: 600;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	border: none;
	cursor: pointer;
	background-color: rgb(20, 18, 64, 0.9);
	color: #fff;

	&:hover {
		background-color: rgb(20, 18, 64, 1);
		-webkit-transform: translateY(-3px);
		transform: translateY(-3px);
		-webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
		box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
	}
`,Z=i.p`
	margin-top: 1rem;
	color: #1e2749;
	font-size: 13px;
`,Q=i.span`
	font-weight: 600;
`;function W({onSignUp:e,onButtonClick:t}){const o={},[s,r]=T(o),[a,d]=m.exports.useState(),[h,F]=m.exports.useState(),[C,L]=m.exports.useState("Something went worng");return l(N,{children:[a?n(z,{message_1:C,color:"red"}):h?n(z,{message_1:h,color:"green"}):n(N,{}),n(V,{children:l(J,{children:[l(O,{children:[" ","join ",n("span",{children:"rabobank"})," "]}),l(Y,{onSubmit:async U=>{U.preventDefault();const g={firstName:s.firstName,lastName:s.lastName,email:s.email,password:s.password};if(H(g)){const b=await e(g);console.log(b),b._id&&F("User created successfully")}else d(!0),L("Password Incorrect: Please check and try again!")},children:[l(c,{children:[n(p,{htmlFor:"firstName",children:"First Name"}),n(f,{placeholder:"John",type:"text",required:!0,name:"firstName",onChange:r})]}),l(c,{children:[n(p,{htmlFor:"lastName",children:"Last Name"}),n(f,{placeholder:"Doe",type:"text",required:!0,name:"lastName",onChange:r})]}),l(c,{children:[n(p,{htmlFor:"email",children:"Email Address"}),n(f,{placeholder:"rabobank@example.nl",type:"text",required:!0,name:"email",onChange:r})]}),l(c,{children:[n(p,{htmlFor:"password",children:"Password"}),n(f,{placeholder:"************",required:!0,type:"password",minLength:8,name:"password",onChange:r})]}),n(c,{children:n(K,{onClick:t,type:"submit",children:"Sign up"})}),n(c,{children:l(Z,{children:[" ","\xA9Gideon 2021: ",n(Q,{children:" Rabobank"})]})})]})]})})]})}function X(){const[e,t]=m.exports.useState([]),o=async r=>await G("",r),s=async()=>{await new Promise(a=>setTimeout(a,4e3));const r=await I();t(r)};return console.log(e),n("div",{className:"App",children:n(W,{onSignUp:o,onButtonClick:s})})}P.render(n(R.StrictMode,{children:n(X,{})}),document.getElementById("root"));
