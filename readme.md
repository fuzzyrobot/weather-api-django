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
Create a virtual environment at top directory:
`virtualenv venv`

Install python modules from requirements:
`pip install requirements.txt`

Install npm modules from dreact directory:
`cd dreact`
`npm install`

Compile javascript:
`webpack`

Start server:
`./manage.py runserver`

Visit `localhost:8000` to view app
