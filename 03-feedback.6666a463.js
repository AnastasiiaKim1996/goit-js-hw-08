function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var r,i,a,o,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n)}function S(e){return l=e,f=setTimeout(h,t),c?y(e):o}function x(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=a}function h(){var e=g();if(x(e))return j(e);f=setTimeout(h,function(e){var n=t-(e-u);return s?d(n,a-(e-l)):n}(e))}function j(e){return f=void 0,v&&r?y(e):(r=i=void 0,o)}function O(){var e=g(),n=x(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),o}return t=b(t)||0,p(n)&&(c=!!n.leading,a=(s="maxWait"in n)?m(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=i=f=void 0},O.flush=function(){return void 0===f?o:j(g())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||o.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})};const y={form:document.querySelector(".feedback-form"),email:document.querySelector("input"),textarea:document.querySelector("textarea")},S={email:"",message:""};y.form.addEventListener("submit",(e=>{if(e.preventDefault(),""===S.email||""===S.message)return alert("Please fill out the form and send it by clicking on submit form");localStorage.getItem("feedback-form-state")&&console.log(localStorage.getItem("feedback-form-state")),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),y.email.addEventListener("input",e(t)((e=>{S.email=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500)),y.textarea.addEventListener("input",e(t)((e=>{S.message=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500)),(()=>{let e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(S.email=e.email,S.message=e.message,y.email.value=S.email,y.textarea.value=S.message)})();
//# sourceMappingURL=03-feedback.6666a463.js.map