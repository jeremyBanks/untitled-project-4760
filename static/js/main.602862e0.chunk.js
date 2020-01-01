(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[1],{233:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(37),l=a.n(o),i=a(3),c=a(60);let s=()=>r.a.createElement(c.a,{styles:c.b({"input, textarea, button, select":{fontSize:"inherit"},"code, pre, kbd":{fontSize:"inherit",whiteSpace:"pre-wrap"},html:{boxSizing:"border-box"},body:{padding:"0",margin:"0",fontSize:"16px"},"*":{boxSizing:"inherit",fontFamily:"inherit",transitionDuration:"inherit"},a:{color:"blue",":hover":{color:"red"}},"body > section":{display:"contents"},"body > section > *":{transitionDuration:"0.5s"},img:{verticalAlign:"middle"}})}),m=({name:e})=>r.a.createElement("div",{className:Object(i.a)({transition:"none",animationName:Object(i.b)({"0%":{background:"lime"},"10%":{background:"magenta"},"50%":{background:"magenta"},"60%":{background:"lime"},"100%":{background:"lime"}}),animationDuration:"6s",animationIterationCount:"4",background:"lime",color:"black",fontWeight:900,fontSize:"32px",padding:"32px"})},r.a.createElement("p",null,"Welcome, ",e,"!")),d=e=>new Promise(t=>setTimeout(t,1e3*e)),u=new Promise((e,t)=>{}),p=({children:e,onSubmit:t})=>{let[a,o]=Object(n.useState)(!1);return r.a.createElement("form",{onSubmit:e=>{e.preventDefault();let a=e.nativeEvent,n=new FormData(a.target),r=a.submitter||a.target.querySelector("fieldset :enabled"),l=(null===r||void 0===r?void 0:r.name)||"value";if(r&&!n.has(l)){let e=r.value||r.placeholder||r.textContent||"";n.append(l,e)}o(!0),r&&r.blur(),t(n)}},r.a.createElement("fieldset",{disabled:a,className:Object(i.a)({display:"contents"})},e))},g=({values:e,inline:t})=>r.a.createElement("div",{className:Object(i.a)(b,t?{display:"inline",margin:2}:{})},e.map((e,t)=>{if(r.a.isValidElement(e)||"string"==typeof e||"number"==typeof e)return r.a.createElement("span",{key:t},e);e instanceof FormData&&(e=Object.fromEntries([...e.keys()].map(t=>[t,e.getAll(t)])));try{let a=JSON.stringify(e,null,2);return a&&a.length>512&&(a=a.slice(0,512)+"\u2026 (truncated)"),r.a.createElement("code",{key:t},a)}catch(a){return console.error(a),r.a.createElement("pre",{key:t,className:Object(i.a)({color:"maroon",padding:"8px",border:"3px double red",background:"white"})},a.toString(),"\n",a.stack)}})),b=Object(i.a)({transition:"none",margin:16,textShadow:"0 0 0 rgba(0, 0, 0, 0)",color:"rgba(0, 0, 0, 1.0)",animationName:""+Object(i.b)({"0%":{textShadow:"0 0 16px rgba(0, 0, 0, 0)",color:"rgba(0, 0, 0, 0)",opacity:0},"40%":{textShadow:"0 0 4px black",color:"rgba(0, 0, 0, 0)",opacity:1},"60%":{textShadow:"0 0 4px rgba(0, 0, 0, 0.25)",color:"rgba(0, 0, 0, 0.5)",opacity:1},"100%":{textShadow:"0 0 32px rgba(0, 0, 0, 0)",color:"rgba(0, 0, 0, 1.0)",opacity:1}}),animationDuration:"0.25s",animationTimingFunction:"ease-in-out",animationIterationCount:1,animationFillMode:"forwards"}),h=(...e)=>E(E.inline,...e),E=Object.assign((...e)=>{let t=!1;e[0]===E.inline&&(t=!0,e.shift()),console.debug(...e);let a=document.documentElement.scrollHeight-window.innerHeight,n=document.documentElement.scrollTop>=a-4,o=document.createElement("article");o.style.display="contents",document.getElementById("prints").appendChild(o),l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,{inline:t,values:e.flatMap(e=>{for(;"function"===typeof(null===(t=e)||void 0===t?void 0:t[E.as]);){var t;e=e[E.as]()}return e})})),o);let i=document.documentElement.scrollHeight-window.innerHeight;n&&(document.documentElement.scrollTop=i)},{as:Symbol("print.as"),inline:Symbol("print.inline")}),f=async e=>new Promise(t=>{E(r.a.createElement(p,{onSubmit:t},e))}),y=async e=>Object.fromEntries([...(await f(e)).entries()].flatMap(([e,t])=>t instanceof File?[]:[[e,t]])),w=async e=>("string"===typeof e?e=r.a.createElement("input",{autoFocus:!0,placeholder:e}):"undefined"===typeof e&&(e=r.a.createElement("input",{autoFocus:!0})),(await y(e)).value||""),x=Symbol("Missing"),v=(e,t=x)=>{let a=[...e];if(0===a.length){if(t===x)throw new Error("attempted to take randomChoice() from an empty iterable");return t}return a[((e,t)=>{let a,n=t-e,r=n+1,o=4294967295-4294967296%r;if(!Number.isInteger(e)||!Number.isInteger(t)||t>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)throw new Error("Arguments must be safe integers, but were out of bounds.");if(n>4294967295)throw new Error(`Range of ${n} (from ${e} to ${t}) > 4294967295.`);if(t<e)throw new Error(`max (${t}) must be >= min (${e}).`);if(e===t)return e;do{a=crypto.getRandomValues(new Uint32Array(1))[0]}while(a>o);return e+a%r})(0,a.length-1)]};var S=a(40),j=a.n(S);let k=j.a.exec,F=j.a.tag("nsx"),O=j.a.tag("nsxg");class N{async main(){return document.getElementById("icon").href="/icon.png",document.title="Your Project",await I(),await M(),await A(),await P(),await G(),await C(),u}render(){let e=performance.now()/1e3,t="none";return e>2&&e<8&&(t="4px 6px 4px rgb(200, 200, 200)"),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:Object(i.a)({position:"sticky",top:"0px",padding:"16px",fontWeight:"bold",color:"rgb(0, 25, 100)",borderBottom:"3px solid black",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.5)",background:"#FFFFF8",zIndex:100,textShadow:t})},r.a.createElement("a",{href:"/"},r.a.createElement("img",{alt:"",src:"/icon.png",className:Object(i.a)({transition:"none",height:32,width:32,objectFit:"contain",backgroundSize:"contain",backgroundImage:"url(/icon-shiny.png)",":hover":{objectPosition:"-65536px 65536px"}})})),"It has been ",r.a.createElement("code",null,e.toFixed(0).padStart(3,"0"))," ","seconds."),r.a.createElement(s,null))}}let I=async()=>{E(r.a.createElement("section",{className:Object(i.a)({border:"3px dashed navy",padding:"16px",maxWidth:"720px",lineHeight:"1.75",h1:{fontSize:"32px",margin:0},ol:{margin:0,paddingLeft:0,li:{margin:"8px 32px"}},"code, pre":{background:"rgba(0, 0, 0, 0.03)",border:"1px solid rgba(0, 0, 0, 0.03)",borderRadius:"4px",padding:"0 4px"},code:{userSelect:"all",cursor:"pointer"}})},r.a.createElement("h1",null,"Getting Started"),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/otter-academy/template/generate"},"Create a repository from this template on GitHub"),", clone it to your computer (or run ",r.a.createElement("code",null,"yarn create in"),"), and"," ",r.a.createElement("code",null,"cd")," into it in a Linux shell."),r.a.createElement("li",null,"Run ",r.a.createElement("code",null,"source ./yarn install")," to install everything required for this project, including"," ",r.a.createElement("a",{href:"https://github.com/nvm-sh/nvm"},"Node Version Manager")," and all dependencies."),r.a.createElement("li",null,"Open this project folder in"," ",r.a.createElement("a",{href:"https://code.visualstudio.com/"},"Visual Studio Code"),". Install the recommended extensions if prompted."),r.a.createElement("li",null,"Run ",r.a.createElement("code",null,"./yarn start")," in your shell to launch the local development server."),r.a.createElement("li",null,"You will probably want to do most of your work inside the"," ",r.a.createElement("code",null,"core/"),", ",r.a.createElement("code",null,"components/"),", and"," ",r.a.createElement("code",null,"utilities/")," subdirectories of ",r.a.createElement("code",null,"src/"),". A good starting point would be to delete the introductory text you're reading right now from ",r.a.createElement("code",null,"src/core/main.tsx"),"."),r.a.createElement("li",null,"You can run ",r.a.createElement("code",null,"./yarn pretty")," to auto-format the code."),r.a.createElement("li",null,"Run ",r.a.createElement("code",null,"./yarn deploy")," to install, build, and publish to the web using GitHub Pages.")),r.a.createElement("p",null,"Some example code continues below.")))},M=async()=>{E("What is your name?");let e=await w("John Smith");E("Great! Just a moment..."),await d(2),E(r.a.createElement(m,{name:e}));for(let t=0;t<20;t++)await d(.1),E(t)},P=async()=>{do{E("Please accept our terms of service.")}while("accept"!==await w(r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{autoFocus:!0},"accept"),r.a.createElement("button",null,"reject"))));await d(.5)},G=async()=>{E(await y(r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{name:"thinking",placeholder:"what are you thinking?",required:!0,minLength:1}),r.a.createElement("button",{autoFocus:!0},"A"),r.a.createElement("button",null,"B"),r.a.createElement("button",null,"C"))))},A=async()=>{let e=(await a.e(0).then(a.t.bind(null,234,3))).default;E(`Loaded ${e.length} cards. Here's one!`);let t=v(e);E(t),E(r.a.createElement("img",{src:t.image_uri,alt:t.name,className:Object(i.a)({height:128,width:128,objectFit:"contain"})}))},C=async()=>{let e=Object.fromEntries((await a.e(0).then(a.t.bind(null,234,3))).default.map(e=>[e.arena_id,e]));E(r.a.createElement("p",{className:Object(i.a)({"code, pre":{background:"rgba(0, 0, 0, 0.03)",border:"1px solid rgba(0, 0, 0, 0.03)",borderRadius:"4px",padding:"0 4px"},code:{userSelect:"all",cursor:"pointer"}})},"Give us some files in"," ",r.a.createElement("code",null,"%ProgramFiles(x86)%\\Wizards of the Coast\\MTGA\\MTGA_Data\\Logs\\Logs\\*.log")));let t=(await f(r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({name:"value",type:"file"},{multiple:!0,accept:".log"},{className:Object(i.a)({"&:enabled":{cursor:"pointer"}}),onChange:e=>{let t=Object.assign(document.createElement("button"),{hidden:!0});e.target.form.appendChild(t),t.click(),e.target.form.removeChild(t)}}))))).getAll("value"),n=(await Promise.all(t.map(async e=>({name:e.name,lastModified:e.lastModified,text:(new TextDecoder).decode(await e.arrayBuffer())})))).sort((e,t)=>e.lastModified-t.lastModified),o=O`\n\[\d+\]\s+`,l=F`
    ^\s*(
      \[ (?<logger> [^\]]+ ) \]
    )?\s*(
      (?<text> [^\{]* )
    )\s*(
      (?<json> \{ .* \})
    )?\s*$
  `,c=n.flatMap(e=>e.text.split(o).flatMap(e=>{var t,a;let n=k(e,l);return n?[{logger:null===(t=n.logger)||void 0===t?void 0:t.trim(),text:null===(a=n.text)||void 0===a?void 0:a.trim(),json:n.json?JSON.parse(n.json):void 0}]:[]})),s={};for(let a of c){var m;if((null===(m=a.text)||void 0===m?void 0:m.startsWith("<== "))&&a.json){s[a.text.slice("<== ".length)]=a.json.payload}}s["Deck.GetDeckListsV3"];let u=s["PlayerInventory.GetPlayerCardsV3"];s["PlayerInventory.GetPlayerInventory"],s["PlayerInventory.GetFormats"],s["Event.GetCombinedRankInfo"],s["Event.GetSeasonAndRankDetail"];for(let[a,p]of Object.entries(u)){let t=e[a];t?(h(r.a.createElement("img",{src:t.image_uri,alt:t.name,className:Object(i.a)({height:128,width:92,objectFit:"contain"})}),1!==p?"x"+p:""),await d(.05)):console.warn("unknown card id",a)}};(async()=>{let e=new N,t=document.getElementById("main"),a=e.main(),n=!1;for(;!n;)l.a.render(r.a.createElement(r.a.StrictMode,null,e.render()),t),n=await Promise.race([a.then(()=>!0),new Promise(e=>requestAnimationFrame(()=>e(!1)))]);console.debug("main() has exited.")})()},87:function(e,t,a){e.exports=a(233)}},[[87,2,3]]]);
//# sourceMappingURL=main.602862e0.chunk.js.map