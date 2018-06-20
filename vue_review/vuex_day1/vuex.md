[vuex]

- What is it? 
- -> state management library of vue (react: redux, flux..)

- Why need state management?  
- -> In component-based frameworks, one view is composed by many tiny components. (header, button, list, etc..)
- -> Organic management of inter-component comm. and data flow is needed.  

- State management: structuring components' relations for easier management, especially in bigger projects with so many components.  

- Central-management system  

- 3 elements: state, view, actions
- state : data that will be shared among components  
- view: templates that will visualize data  
- actions : methods that will run upon user inputs  


    ` new Vue({
        //state
        data(){
            return {
                count :0
            }
        },
        
        //view
        template: `
            <div>{{count}}</div>
        `

        //actions
        methods:{
            increment(){
                this.count++
            }
        }
    })
    `  
    - install  
    `npm install vuex --save`

