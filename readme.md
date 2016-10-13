#Weather API Challenge

###Main tech used
`Django`, `React`, `React-router`, `chart.js`, `Webpack`, `Bootstrap`.

###Front-end compilation with Webpack
Run `webpack` from the top level dreact folder to compile.

Run `webpack --watch` to compile styles and js on the fly during develop

Stylesheets and javascript are compiled using webpack. Styles are imported on a component bases and called using the syntax className={style.class} where style is the name of the imported stylesheet and class is the referenced class name.

###Weather API
Uses OpenWeatherMap.
Our app receives `GET` requests at the endpoint `/weather`

###Graph
Using chartjs (via react-chartjs)

###Test
Run tests from the top level dreact folder:
`./manage.py test`

###Server
Run the server from the top level dreact folder:
`./manage.py runserver`

###Setup
This project was set up using `virtualenv`. To install:
`pip install virtualenv`

Create a virtual environment at top directory:
`virtualenv venv`

Activate the virtual environment:
`source venv/bin/activate`

Install python modules from requirements file:
`pip install -r requirements.txt`

Install npm modules from dreact directory:
`cd dreact`
`npm install`

Compile javascript and styles (from same directory):
`webpack`

Start server (from same directory):
`./manage.py runserver`

Visit `localhost:8000` to view app
