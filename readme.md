#Main tech used
`Django`, `React`, `React-router`, `chart.js`, `Webpack`, `Bootstrap`.

###Front-end compilation with Webpack
Run `webpack` from the top level dreact folder to compile.

Run `webpack --watch` to compile styles and js on the fly during develop

Stylesheets and javascript are compiled using webpack. Styles are imported on a component bases and called using the syntax className={style.class} where style is the name of the imported stylesheet and class is the referenced class name.

Bootstrap is also used.

###Weather API
OpenWeatherMap

http://history.openweathermap.org/data/2.5/history/city?id=2885679&type=hour

###Graph
Using chartjs (via react-chartjs)


###Test
Run tests from the top level dreact folder:
`./manage.py test`

###Server
Run the server from the top level dreact folder:
`./manage.py runserver`