
Sky-Cast

Sky-Cast is a weather forecasting website that utilizes the OpenWeather API to provide weather data. Users can enter the name of a city to receive up-to-date weather information. The website is user-friendly, with an intuitive interface that includes a mandatory input field for the city name.

Access the Website

Visit the Sky-Cast website, deployed on Cyclic, at: https://good-jade-pig-vest.cyclic.app/.

Features

City-Based Weather Forecast: Simply enter the city name for which you wish to know the weather information and click 'proceed'. The city name input is mandatory.

Success Page: If the entered city is recognized and data is available in the API, users are directed to a success page. This page displays the date, time, city name, country code, and detailed weather information.

Home Button: A convenient 'HOME' button on the success page allows users to easily navigate back to the homepage.

Failure Page: In cases where the entered city name is incorrect or data for the city is not available in the API, users are led to a failure page.

Redirection to Home Page: Similar to the success page, the failure page also includes a 'HOME' button for easy navigation back to the homepage.

Technical Aspects

Frontend: The website's frontend is designed using HTML, CSS, and the Bootstrap framework, ensuring a responsive and aesthetically pleasing interface.

Backend: The backend is powered by Express and Node.js, facilitating efficient handling of requests and integration with the OpenWeather API.

Sky-Cast offers a straightforward and effective solution for users seeking timely and accurate weather information based on their city of choice.
