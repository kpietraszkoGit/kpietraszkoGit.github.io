(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(n,t,e){"use strict";e.r(t);e(11);var r=Math.floor(50*Math.random()+1);var o=()=>parseInt(prompt("Enter a number: "),10);var i=(n,t)=>{n>t?alert("Your number is too high!"):alert("Your number is too low!")};let a=0;var s={init(){a=1},increment:()=>{a+=1},get result(){return a}};class l{constructor({setup:n,punchline:t}){this.setup=n,this.punchline=t}toString(){return this.setup?`\n      - ${this.setup} \n      - ${this.punchline}\n      `:this.punchline}}class c{constructor({name:n,stars:t,license:e,url:r}){this.name=n,this.stars=t,this.license=e,this.url=r}get starsInfo(){return this.stars>0?`(${this.stars} 🌟)`:"✨"}toString(){return`${this.name} ${this.starsInfo}`}toTableRow(){return`\n        <tr onclick="location.assign('${this.url}')">\n            <td>\n                ${this.name}\n            </td>\n            <td>\n                ${this.starsInfo}\n            </td>\n        </tr>\n        `}}const d=["ux"],h=/(\d+)\.md/,m=({name:n,stargazers_count:t,license:e,html_url:r})=>{return o=new c({name:n,stars:t,license:e?e.spdx_id:"",url:r}),new Proxy(o,{get:(n,t)=>(console.log(`Property ${t} was got`),n[t])});var o};async function u(n){try{const t=await fetch("https://raw.githubusercontent.com/kpietraszkoGit/kpietraszkoGit.github.io/main/blog/en/"+n);if(t.ok)return await t.text();throw Error("Response not 200")}catch(n){return console.warn(n),""}}function p(n){n.prototype.renderMarkdown=n=>`\n    <mark-down>\n        ${n}\n    </mark-down>\n    `}function f(n=!1){return function(t){const e=t.prototype;n&&(e.attributeChangedCallback=function(n,t,e){t!==e&&this.render()}),e.init=function(){this.attachShadow({mode:"open"}),n||this.render()}}}var g=function(n,t,e,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,r);else for(var s=n.length-1;s>=0;s--)(o=n[s])&&(a=(i<3?o(a):i>3?o(t,e,a):o(t,e))||a);return i>3&&a&&Object.defineProperty(t,e,a),a};let b=class extends HTMLElement{constructor(){super(),this.init()}async render(){const n=await async function(){return u("about-me.md")}();this.shadowRoot.innerHTML=this.renderMarkdown(n)}};b=g([f(),p],b);var w=e(0),y=e(7);async function k(){return(await async function(){console.trace();try{const n=await fetch("https://api.github.com/repos/kpietraszkoGit/kpietraszkoGit.github.io/contents/blog/en/posts");if(n.ok)return(await n.json()).filter(n=>h.test(n.name)).map(({name:n})=>n.split(".")[0]);throw Error("Response not 200")}catch(n){return console.warn(n),[]}}()).reverse()}var x=e(8),v=e.n(x),_=e(4),R={insert:"head",singleton:!1},O=(v()(_.a,R),_.a.locals||{}),C=function(n,t,e,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,r);else for(var s=n.length-1;s>=0;s--)(o=n[s])&&(a=(i<3?o(a):i>3?o(t,e,a):o(t,e))||a);return i>3&&a&&Object.defineProperty(t,e,a),a};class M extends HTMLElement{constructor(n,t,e){super();const r=document.createElement(n);r.className=t,r.innerHTML=`\n        <div class="${O.container}">\n            ${e}\n        </div>\n        `,this.appendChild(r)}}class E extends M{constructor(){super("header",O.header,`\n\t\t\t<h1 class="${O["header-heading"]}">Programmer's blog</h1>\n        `)}}class j extends M{constructor(){super("nav",O["nav-bar"],`\n            <ul class="${O.nav}">\n                <li><a href="#">Blog</a></li>\n                <li><a href="#">Contact</a></li>\n                <li><a href="../index.html">About me</a></li>\n            </ul>\n        `)}}class L extends M{constructor(){super("footer",O.footer,"&copy; Copyright Kail 2021")}}let $=class extends HTMLElement{constructor(){super(),this.init()}async render(n=null){this.posts=async function*(){const n=await k();let t=0;for(;t<n.length;){const e=n.slice(t,t+5);if(t+=5,e.length<5)return e;yield e}}();const t=!!n,e=t?[n]:(await this.posts.next()).value;this.shadowRoot.innerHTML=`\n        ${this.renderStyles()}\n        <section>\n        <div class="${O.container}">\n            <main>\n                ${this.renderPostComponents(e,t)}\n            </main>\n            <aside>\n                <slot name="side-menu"></slot>\n            </aside>\n        </div>\n        </section>\n        `,this.attachClickCallbacks(e,t)}async uprender(){const n=await this.posts.next(),t=n.value;if(t.length){const n=this.shadowRoot.querySelector("main"),e=document.createElement("div");e.className="next-posts",e.innerHTML="<hr>"+this.renderPostComponents(t),n.appendChild(e),this.attachClickCallbacks(t)}n.done&&this.shadowRoot.getElementById("load-more").remove()}renderPostComponents(n,t=!1){return n.map((n,e)=>`\n            <blog-post post-name="${n}" full-post="${t}"></blog-post>\n            <button id="${e}-${n}">${t?"Back":"Read more..."}</button>\n            `).join("<hr>")+`<button id="load-more">${t?"Next >>":"Load more..."}</button>`}attachClickCallbacks(n,t=!1){n.forEach((n,e)=>{this.shadowRoot.getElementById(`${e}-${n}`).onclick=()=>{t?this.render():(this.fullPosts=async function*(n="0"){const t=await k();let e=t.indexOf(n)+1;for(;e<t.length-1;)yield t[e],e+=1;return t[e]}(n),this.render(n))}});const e=this.shadowRoot.getElementById("load-more");e.onclick=async()=>{e.remove(),t?this.render((await this.fullPosts.next()).value):this.uprender()}}renderStyles(){return`\n            <style>\n            #load-more {\n                display: block;\n                padding: 1em;\n                margin: 0 auto;\n            }\n            .${O.container} {\n                max-width: 70em;\n                margin: 0 auto;\n            }\n            section {\n                overflow: hidden;\n                padding: 1em 1.25em;\n                background-color: #fff;\n            }\n            main, aside {\n                margin-bottom: 1em;\n            }\n            @media (min-width: 55em) {\n                section { padding: 2em 3em; }\n                main {\n                    float: left;\n                    width: 65%;\n                    margin-right: 5%;\n                    margin-bottom: 1em;\n                }\n                aside {\n                    float: left;\n                    width: 30%;\n                    margin-bottom: 1em;\n                    text-align: center;\n                }\n            }\n            </style>\n        `}};$=C([f()],$);let P=class extends HTMLElement{static get observedAttributes(){return["post-name","full-post"]}constructor(){super(),this.init()}async render(){this.loading();const n=this.getAttribute("post-name"),t="true"===this.getAttribute("full-post"),e=await async function(n="0.md"){return u("posts/"+n)}(n+".md");this.shadowRoot.innerHTML=`\n            <article>\n                ${this.renderMarkdown(t?e:e.substr(0,300)+" ...")}\n            </article>\n            <style>\n                pre {\n                    width: 100%;\n                    overflow: scroll;\n                }\n                img { width: 100%; }\n            </style>\n        `}loading(){this.shadowRoot.innerHTML="",this.shadowRoot.appendChild(document.getElementById("blog-loading").content.cloneNode(!0)),w.a.i2svg({node:this.shadowRoot})}};P=C([f(!0),p],P);var z=e(10),B=function(n,t,e,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,r);else for(var s=n.length-1;s>=0;s--)(o=n[s])&&(a=(i<3?o(a):i>3?o(t,e,a):o(t,e))||a);return i>3&&a&&Object.defineProperty(t,e,a),a};let T=class extends HTMLElement{constructor(){super(),this.init()}async render(){const n=await async function(){try{const n=await fetch("https://api.github.com/users/kpietraszkoGit/repos");if(n.ok)return(await n.json()).filter(n=>!d.includes(n.name)).map(m);throw Error("Response not 200")}catch(n){return console.warn(n),[]}}();this.shadowRoot.innerHTML=`\n        ${this.renderStyles()}\n        ${this.renderHeader()}\n        <table>\n            <tbody>\n                ${n.map(n=>n.toTableRow()).join("\n")}\n            </tbody>\n        </table>\n        `,w.a.i2svg({node:this.shadowRoot})}renderStyles(){return"\n            <style>\n            img {\n                height: 1em;\n            }\n            h2 {\n                width: 20%;\n                margin: 1em auto 0;\n                text-align: left;\n            }\n            table {\n                background-color: transparent;\n                border-spacing: 0;\n                border-collapse: collapse;\n                border-top: 1px solid #ddd;\n                width: 20%;\n                margin: 0 auto 20px;\n            }\n            th, td {\n                padding: .5em 1em;\n                vertical-align: top;\n                text-align: left;\n                border-bottom: 1px solid #ddd;\n            }\n            tr {\n                color: #333;\n            }\n            tr:hover {\n                color: #999;\n                cursor: pointer;\n            }\n            </style>\n        "}renderHeader(){const n=document.getElementById("gh-logo").content.cloneNode(!0),t=document.createElement("h2");return t.appendChild(n),t.outerHTML}};T=B([f()],T);customElements.define("about-me",b),w.b.add(y.a),customElements.define("blog-header",E),customElements.define("blog-nav",j),customElements.define("blog-body",$),customElements.define("blog-footer",L),customElements.define("blog-post",P),w.b.add(z.a),customElements.define("gh-repos",T),window.controls={startGame:()=>{alert("A number between 1-50 was drawn. Guess!");let n=o();for(s.init();n!==r;)i(n,r),n=o(),s.increment();(n=>{alert("YOU WON!"),alert(`You guessed it ${n} times.`)})(s.result)},startJoke:async function(){alert(await async function(){try{const n=await fetch("https://official-joke-api.appspot.com/random_joke"),t=await n.json();if("programming"===t.type)return new l(t);const{value:{joke:e}}=await(await fetch("http://api.icndb.com/jokes/random?limitTo=[nerdy]")).json();return new l({punchline:e})}catch(n){return console.warn(n),new l({setup:"How many programmers does it take to change a lightbulb?",punchline:"None that's a hardware problem"})}}())}}},4:function(n,t,e){"use strict";var r=e(9),o=e.n(r)()((function(n){return n[1]}));o.push([n.i,'/* -----------------------\r\nBase styles\r\n------------------------*/\r\n\r\nbody\r\n{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tcolor: #333;\r\n\tbackground-color: #eee;\r\n\tfont: 1em/1.2 "Helvetica Neue", Helvetica, Arial, Geneva, sans-serif;\r\n}\r\n\r\nh1,h2,h3,h4,h5,h6\r\n{\r\n\tmargin: 0 0 .5em;\r\n\tfont-weight: 500;\r\n\tline-height: 1.1;\r\n}\r\n\r\nh1 { font-size: 2.25em; } /* 36px */\r\nh2 { font-size: 1.75em; } /* 28px */\r\nh3 { font-size: 1.375em; } /* 22px */\r\nh4 { font-size: 1.125em; } /* 18px */\r\nh5 { font-size: 1em; } /* 16px */\r\nh6 { font-size: .875em; } /* 14px */\r\n\r\np\r\n{\r\n\tmargin: 0 0 1.5em;\r\n\tline-height: 1.5;\r\n}\r\n\r\nblockquote\r\n{\r\n\tpadding: 1em 2em;\r\n\tmargin: 0 0 2em;\r\n\tborder-left: 5px solid #eee;\r\n}\r\n\r\nhr\r\n{\r\n\theight: 0;\r\n\tmargin-top: 1em;\r\n\tmargin-bottom: 2em;\r\n\tborder: 0;\r\n\tborder-top: 1px solid #ddd;\r\n}\r\n\r\na:link { color: royalblue; }\r\na:visited { color: purple; }\r\na:focus { color: black; }\r\na:hover { color: green; }\r\na:active { color: red; }\r\n\r\n/* -----------------------\r\nLayout styles\r\n------------------------*/\r\n\r\n\r\n._3_MYusWM3CWkgqvZO9mvwE\r\n{\r\n\tcolor: #fff;\r\n\tbackground: #999;\r\n\tpadding: 1em 1.25em;\r\n}\r\n\r\n._3styFiWEeQp0QaLNxUW2g8 { margin: 0; }\r\n\r\n._20f8NVe-jFet0c7eG7qQzR\r\n{\r\n\tbackground: #000;\r\n\tpadding: 0;\r\n}\r\n\r\n\r\n._2KmjuGSbZH3PIuMMtdEBA0\r\n{\r\n\tcolor: #fff;\r\n\tbackground: #000;\r\n\tpadding: 1em 1.25em;\r\n}\r\n\r\n/* -----------------------\r\nNav\r\n------------------------*/\r\n\r\n._2iLqoPf-aBxdOlzD_yRd89\r\n{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n}\r\n\r\n._2iLqoPf-aBxdOlzD_yRd89 li\r\n{\r\n\tdisplay: inline;\r\n\tmargin: 0;\r\n}\r\n\r\n._2iLqoPf-aBxdOlzD_yRd89 a\r\n{\r\n\tdisplay: block;\r\n\tpadding: .7em 1.25em;\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n\tborder-bottom: 1px solid gray;\r\n}\r\n\r\n._2iLqoPf-aBxdOlzD_yRd89 a:link { color: white; }\r\n._2iLqoPf-aBxdOlzD_yRd89 a:visited { color: white; }\r\n\r\n._2iLqoPf-aBxdOlzD_yRd89 a:focus\r\n{\r\n\tcolor: black;\r\n\tbackground-color: white;\r\n}\r\n\r\n._2iLqoPf-aBxdOlzD_yRd89 a:hover\r\n{\r\n\tcolor: white;\r\n\tbackground-color: rgb(138, 138, 138);\r\n\tborder-radius: 2px;\r\n\tpadding: 4px, 0;\r\n}\r\n\r\n._2iLqoPf-aBxdOlzD_yRd89 a:active\r\n{\r\n\tcolor: white;\r\n\tbackground-color: rgb(197, 176, 176);\r\n}\r\n\r\n/* -----------------------\r\nSingle styles\r\n------------------------*/\r\n\r\n._297nfTZQ_6_miILqfCO7Sa { max-width: 100%; }\r\n\r\n.hO3TJZCcic3MWOx2fwC9f\r\n{\r\n\tcolor: #fff !important;\r\n\tbackground-color: royalblue;\r\n\tborder-color: #222;\r\n\tdisplay: inline-block;\r\n\tpadding: .5em 1em;\r\n\tmargin-bottom: 0;\r\n\tfont-weight: 400;\r\n\tline-height: 1.2;\r\n\ttext-align: center;\r\n\twhite-space: nowrap;\r\n\tvertical-align: middle;\r\n\tcursor: pointer;\r\n\tborder: 1px solid transparent;\r\n\tborder-radius: .2em;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.hO3TJZCcic3MWOx2fwC9f:hover\r\n{\r\n\tcolor: #fff !important;\r\n\tbackground-color: green;\r\n}\r\n\r\n.hO3TJZCcic3MWOx2fwC9f:focus\r\n{\r\n\tcolor: #fff !important;\r\n\tbackground-color: black;\r\n}\r\n\r\n.hO3TJZCcic3MWOx2fwC9f:active\r\n{\r\n\tcolor: #fff !important;\r\n\tbackground-color: red;\r\n}\r\n\r\n.JsL6g1KQtjP920jBOC96X\r\n{\r\n\tpadding-left: 0;\r\n\tlist-style: none;\r\n}\r\n\r\n.l_z2QmsOj1nZltadCR59Z\r\n{\r\n\tpadding-left: 0;\r\n\tmargin-left: -5px;\r\n\tlist-style: none;\r\n}\r\n\r\n.l_z2QmsOj1nZltadCR59Z > li\r\n{\r\n\tdisplay: inline-block;\r\n\tpadding-right: 5px;\r\n\tpadding-left: 5px;\r\n}\r\n\r\n/* -----------------------\r\nWide styles\r\n------------------------*/\r\n\r\n@media (min-width: 55em)\r\n{\r\n\t._3_MYusWM3CWkgqvZO9mvwE { padding: 1.5em 3em; }\r\n\t._20f8NVe-jFet0c7eG7qQzR { padding: 1em 3em; }\r\n\r\n\t._2KmjuGSbZH3PIuMMtdEBA0 { padding: 2em 3em; }\r\n\t\r\n\t._2iLqoPf-aBxdOlzD_yRd89 li\r\n\t{\r\n\t\tdisplay: inline;\r\n\t\tmargin: 0 1em 0 0;\r\n\t}\r\n\t\r\n\t._2iLqoPf-aBxdOlzD_yRd89 a\r\n\t{\r\n\t\tdisplay: inline;\r\n\t\tpadding: 0;\r\n\t\tborder-bottom: 0;\r\n\t}\r\n}',""]),o.locals={header:"_3_MYusWM3CWkgqvZO9mvwE","header-heading":"_3styFiWEeQp0QaLNxUW2g8","nav-bar":"_20f8NVe-jFet0c7eG7qQzR",footer:"_2KmjuGSbZH3PIuMMtdEBA0",nav:"_2iLqoPf-aBxdOlzD_yRd89","img-responsive":"_297nfTZQ_6_miILqfCO7Sa",btn:"hO3TJZCcic3MWOx2fwC9f","list-unstyled":"JsL6g1KQtjP920jBOC96X","list-inline":"l_z2QmsOj1nZltadCR59Z"},t.a=o}},[[19,1,2]]]);