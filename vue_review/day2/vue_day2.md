[vue Review Day 2]  

vue component comm.  
	local component 1 & local component 2  comp1 can't refer comp2's data directly (unlike JS)  
		-> this is because of component scope.  
			-> it makes all app to have same data flow. easy to follow  

upper & lower component   upper to lower sends props  / lower to upper sends events  

props   
	`//define`  	
	`Vue.component('child-component',{ props:['props attr name'],});`  
	`//add attr`        
	`<child-component v-bind:props attrName="data attr of upper comp"></child-component>`

event & receive

- event occur:
	`this.$emit('eventName');`

- event receive:
    `<child-component v-on:eventName="methodName of upper component"></child-component>`


same-level component communications

Event bus : to avoid having unnecessary upper components just to send data to same-level component

 1. create a new instance for Event Bus
 2. create an event-sending component
 3. create an event-receiving component





