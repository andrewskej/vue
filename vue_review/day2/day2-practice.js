

Vue.component('child-component',{
    props:['propsdata'],
    template:'<p>{{propsdata}}</p>'
});

Vue.component('sibling-component',{
    props:['siblingdata'],
    template:'<p>{{siblingdata}}</p>'
});

var app = new Vue({
    el: '#app',
    data: {
        message:'Hello vue! this is passed from Parent Component',
        siblingMessage:'This data is for sibling'
    }
});