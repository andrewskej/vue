

Vue.component('todo-footer',{
    template: '<div>this is another global child component</div>'
});

var app = new Vue({
    el: '#app',
    data:{
        message: 'This is a parent component'
    },
});


var lChild = {
    template : '<p>this is another local child component</p>'
}
new Vue({
    el:'#app',
    components:{
        'todo-list':lChild
    }
});