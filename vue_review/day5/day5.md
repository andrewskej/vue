[vue review day 5]

vue template
2 ways:
- ES5 vue instance attribute
- Single file component <template> code

things to remember : mustache {{}} and v-bind

mustache {{}}  very famous template syntax(used in other lang., frameworks as well)
v-bind : data connection between data value and HTML attributes(id, class, style, etc.)

JS expression can be used in vue template.
  ex: <p>{{message.split('').reverse().join() }}</p>
in that case, {{message}} must be binded in vue instance
JS declaration, 'if' cannot be used.
vue template should display simple results. so ex is not a good example.(use 'computed')

vue Directive : all the v- prefix series attributes.
  ex: <a v-if:"flag">blahblah</a>    <- if flag value is true, blahblah will appear.

major vue Directives to remember:
- v-if
- v-for
- v-show    <- equivalent to css:display:none. (not deleting, just hiding)
- v-bind    <- mapping HTMl basic attributes and vue data attr.
- v-on      <- for event
- v-model   <- for 'form'. limited use on certain tags <input><select><textarea> , etc.
 
   
Directives can pass events and parameters.
  
computed vs methods:  
computed - auto run upon data change (use caching- meaning it keeps value and return when needed)  
methods - logic runs only when called (no caching)  
 -> for repeated complicated calculations, computed might have better performance.  

watch:
similar to computed, but suitable for more time-consuming async process.

<important> what is Async process?
- When wep app requests data, http request to server occurs.
- but you never know when the request can be responded, by the time JS code runs.
- so to prevent it from bothering other JS codes,
- you request data in some other area(Execution context) and wait for the response.
- This is Javascript Asynchronous process Logic.
