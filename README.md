DukeTextbookMarketplace
=======================
Web-application designed to make process of buying and selling textbooks more efficient for Duke students.

Developed with AngularJS/JavaScript, HTML5, CSS3, Python, PHP, and MySQL.

Contributors:

Wei Chen (wc82@duke.edu)

Stephen Hughes (sdh31@duke.edu)

Cody Lieu (cody.lieu@duke.edu)

Dennis Park (dennis.park@duke.edu)

Completed as part of the "open-course project" for Compsci 316 (Introduction to Database Systems) at Duke University.

=======================
o A brief overview of how your code is structured.

Yeoman is an open-source client-side development stack, consisting of tools and frameworks to help developers quickly build high quality web applications. For this project, Yeoman was used to scaffold out the web application and folder hierarchy based off of best design practices. AngularJS is an open-source web application framework made for developing single-page applications using the model-view-controller architecture.

For Angular applications, the bulk of the code written is located in the app directory. Specifically, the model and controller in the MVC paradigm is held in the app/scripts folder. Here, you will find an app.js file which controls the dependencies of the application and controls the “routing” of the application. Inside the app directory is the index.html file. This is the file that, along with the app.js file, controls what is displayed. In Angular, there is a useful ng-view directive (contained inside the index.html file) which decides what html partial to “insert” and what controller to use based off the configuration in app.js and the current url. Within the controllers directory, there exist controller files for each page or modal of the application that maintains the state of the page as well as contains user written functions to be used by the view or model. Within the app/views directory are html files for each page of the application. Each HTML file has a corresponding controller file that it uses to decide what actions to perform and what information to display based off of user interaction with the application.


o How to compile, set up, deploy, and use your system.

For convenience, the web application has been deployed to http://duketextbookmarketplace.herokuapp.com/ and the associated code can be found at https://github.com/codylieu/DukeTextbookMarketplace.

Grunt is a JavaScript Task Runner that is included in Yeoman to assist with automation of an application. The application can be run by installing Yeoman (which requires installing Grunt along the way) and then running the “grunt serve” command from the root directory of the project through terminal. This command starts a local server instance and then runs the code on this server instance, abstracting/simplifying the process greatly.

o Any limitations in your current implementation.

While users can sign in and register based off of their netid, there is no integration with Duke’s OAuth service, that allows us to user their API to sync up with a user’s password.

The API that we use to access the textbook data is very messy and unorganized, which can be a minor annoyance to read for users, but is otherwise negligible.

By pulling so much data on courses and their associated textbooks, there can be a slight latency when the textbooks are first loaded in. This latency, however, is usually < 1 second on most computers and can therefore be considered negligible.

Another limitation is that none of us are graphic designers and we don’t have extensive experience with UI/UX design. Our interface can be lacking in terms of aesthetic appeal, but in terms of functionality, our application is solid.
