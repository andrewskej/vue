
[vue Review Day 3]

- router

routing : moving between web pages. one of the modern web style.
usally used in SPA(single page application) 

for smooth view transition & better UX (no blinking)

React & Angular also use routing .

- vue router : official library for it. 
tag ->    <router-link to="URL value">    // page move. appears as <a>
tag ->    <router-view>   //to display page. upon URL changes


*to remove hash(#) on URL : use history

var router = new VueRouter({
    mode: 'history',
    routes
  });


- for real projects, there will be multiple components. 

-> nested router & named view for this.

Nested Router : 
- to show more than 2 components upon router page move.
- 1 upper component including 1 lower component


limitation of nested router : for many components -> named view will do that

Named view: for multiple component at once





