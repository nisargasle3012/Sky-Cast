const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  console.log(req.body.cityName);
  const query = req.body.cityName;
  const fletter = query[0].toUpperCase();
  var rname = "";
  for( var i = 1 ; i<query.length ; i++) {
      var nletter = query[i].toLowerCase();
      rname = rname + nletter;
  }
  const cName = fletter + rname;
  const apikey = "ebf19c6061c770f4ce62c1d10f6fa4f6";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+unit+"&appid="+apikey

  https.get(url, function(response){
    console.log(response.statusCode);



      if (response.statusCode === 200) {

        response.on("data", function(data){
          const weatherData = JSON.parse(data)
          console.log(weatherData);
          const temp = weatherData.main.temp
          const wD = weatherData.weather[0].description
          const icon = weatherData.weather[0].icon
          const humid = weatherData.main.humidity
          const imgurl = "https://openweathermap.org/img/wn/"+icon+"@2x.png"
          const country = weatherData.sys.country
          const wind = weatherData.wind.speed
          const pressure = weatherData.main.pressure
          const temp_max = weatherData.main.temp_max
          const temp_min = weatherData.main.temp_min


          var today = new Date();

          var options = {
            weekday : "long",
            day : "numeric",
            month : "long"
          };

          var day = today.toLocaleDateString("en-US", options);
          var hours = today.getHours();
          var minutes = today.getMinutes();
          var seconds = today.getSeconds();
          var time = hours  +":"+ minutes +":"+ seconds;

        res.render("weather", {
          cityName: cName,
          country: country,
          temperature: temp,
          weatherDescription: wD,
          humidity: humid,
          imageUrl: imgurl,
          today: day,
          istime: time,
          wind: wind,
          pressure: pressure,
          temp_max : temp_max,
          temp_min : temp_min
        });
      });
    }
      else {
        res.sendFile(__dirname+"/failure.html");
      }
    });
  });

app.post("/weather", function(req,res){
    res.redirect("/");
  })


app.post("/failure", function(req,res){
  res.redirect("/");
})

app.listen(process.env.PORT || 3000, function(){
  console.log("your server is running !");
});
