[vue Review Day 1]

vue - a progressive framework

Data binding of Angular + Virtual DOM of React    

Light & Fast & easy 


MVVM pattern 

 Model - View - ViewModel


  view : what you see on the screen
  DOM - Document Object Model : A data tree that contains HTML-elements(tag, class, attr, etc.)
  DOM Listener : A 'device' that runs certain logic upon changes in DOM  
  Model : A container holding data. Data is normally brought from server, saved in JS object form
  Data Binding : Sync what's on view & data in model
  View Model : Between V and M - provides DOM listener and Data Binding



Component-based framework (same in Angular, react)
 like Lego!
 codes become highly re-usable  
 

Vue: Two-way data binding of Angular + One-way data flow of React

Virtual DOM - faster rendering(no need of re-render the entire page)



vue Instance : minimum measurement to develop in vue 
	instance -> el -> data

selector follows same rule as CSS ('#', '.')



!! Instance Life Cycle !!  
 8 steps, 4 large stages
	(new Vue instance created) 
	-> beforeCreate / created / beforeMount / mounted 
		-> (instance sticks to view)
	-> beforeUpdate -> updated 
		-> (if any, instance data updated) 
	-> beforeDestroy -> destroyed 
		-> (instance destroyed)

Component
	just like tree data structure : parent-child
	two ways of adding new Components : local & global
	
global :    Vue.component('componentName', {  blahblah  });



