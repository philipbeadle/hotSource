# Angular Material-Start (ES6 Tutorials)

This branch contains the same tutorial application created in master and the es5 branch... but this branch implements the application using JSPM and ES6. 

![material-starter-ux2](https://cloud.githubusercontent.com/assets/210413/6448551/70864488-c0e0-11e4-8767-c4e1e4c2f343.png)

Above is a snaphot of the Starter-App with a **Master-Detail** layout: showing a list of users (left) and a user detail view (right). 

> There are no tutorial steps in this branch. <br/> Rather the finished application is published here for comparison and learning purposes. 

This sample application is purposed as both a learning tool and a skeleton application for a typical [AngularJS Material](http://angularjs.org/) ES6 web app: comprised of a Side navigation area and a content area. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.

### Wirefame 

The illustration below shows how we planned the layout and identified the primary components that will be used in the Starter ap:

<br/>
![plancomponents2](https://cloud.githubusercontent.com/assets/210413/6444676/c247c8f8-c0c4-11e4-8206-208f55cbceee.png)

> Note: that container #2 (above) is a simple `<div>` container and not an Angular Material component.

<br/>
- - -

### ES6 with JSPM

These application use jspm.io: package manager for SystemJS which is built on top of the dynamic ES6 module loader. This allows developers to load any module format (ES6, CommonJS, AMD, and globals).

After you have cloned the repository, you should execute the following commands:  This will set the permissions so Docker can write to the folder, build your docker image, install the dependencies so your code editor works nicely
and then run your Docker container with your source code mounted in the container.
* `chmod -R 777 .`
* `docker build -t hot-source .`
* `npm install`
* `npm install jspm -g`
* `jspm install`
* `docker run -it --rm -p 8080:8080 -v $(pwd):/www -w "/www" hot-source npm start`

You can now open a browser to `http://192.168.99.100:8080/app/`
If you modify the application with a text editor like VS Code, Sublime Text or Atom when you save the file the site will reload.  Now you have your site running in a Docker container and you can edit the source code and watch it
auto refresh.

Since web application uses **jspm** with Angular-Material:

* In the HTML, we only load the **System loader** and the configuration module
> Notice no stylesheets are loaded here... they are injected later upon demand
* Configure the system loader to laod the app/boot module.

```html
   <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />

    <title>Angular Material - Starter App ES6</title>
    <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto:400,700'>

    <style type="text/css">
        /**
         * Hide when Angular is not yet loaded and initialized
         */
        [ng-cloak] {
            display: none;
        }
    </style>
  </head>

  <body ng-cloak layout="column">

    <div ng-include="'src/users/view/browseUsers.html'"
         layout="column" flex tabIndex="-1" role="main" >
    </div>

    <script src="./jspm_packages/system.js" type="text/javascript"></script>
    <script src="./config.js" type="text/javascript"></script>
    <script type="text/javascript">
        System
            .import('app/boot')
            .catch( console.error.bind(console) ); // make sure any errors print to console
    </script>

  </body>
```
