limitation of CDN vue in HTML files... hard to predict how the view will be like.
-> Single File Components system : .vue file
1 file of .vue is equivalent to 1 component composing vue applications.

.vue file structure:

    <template>
    //HTML here
    </template>

    <script>
      //javascript here
    </script>

    <style>
      //CSS here
    </style>

----------------------
- for single file component system:
tools like Webpack or Browserify - to convert .vue file for browsers to recognize.

<important> Webpack?
a module bundler
that binds web app resources(HTML,CSS,images,etc.)
by converting it in one Javascript module
to increase web performance

vue CLI(Command Line Interface) is needed(NodeJS required).
install vue CLI
- terminal: $npm install vue-cli -global
- type 'vue' in terminal to check if it is installed

----------------------
vue CLI commands
to initiate new projects

- vue init
- vue init Webpack            <- full webpack functions. testing, grammar check, etc.
- vue init webpack-simple     <- for fast prototypes
- vue init browserify          
- vue init browserify-simple
- vue init simple             <- create 1 HTML file with minimum functions.
- vue init pwa                <- webpack-based PWA(progressive web pack) project.


meaning that to develop in .vue file application,
you need:

- vue loader (a library supported by webpack)
- supporting module bundler (webpack, browserify,etc.)

if you don't care other shit and just focus on vue framework:
- webpack-simple

----------------------
create a project with vue cli:
- create an empty folder
- terminal: $vue init webpack-simple
- answer questions: Sass(extended ver. of CSS): up to you (I don't event know how to use it, so No for me)
- $npm install
- $npm run dev


now you are ready to jump in for vue projects...(probably :P )
