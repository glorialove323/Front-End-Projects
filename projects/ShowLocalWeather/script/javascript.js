	var temp = 0;
	$(document).ready(function() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(function(position) {
	            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=bf219d74ec28cbbcaaccca89b0498b6b", function(data) {
	                $('#city-name').html(data.name);
	                $('#weather-detail-main').html(data.weather[0].main);
	                setIcon(data.weather[0].icon);
	                $('#weather-icon').attr('src', "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
	                temp = data.main.temp;
	                setTempAsC();
	            });
	        });
	    }
	});

	function setTempAsC() {
	    $('#temperature').html('<a href="#" onclick="setTempAsF();">' + (temp - 273.15).toFixed(1) + '°C</a>');
	}

	function setTempAsF() {
	    $('#temperature').html('<a href="#" onclick="setTempAsC();">' + (temp * 1.8 - 459.67).toFixed(1) + '°F</a>');
	}

	function setIcon(iconURL) {
	    icons = [];
	    icons['01'] = 'sunny';
	    icons['02'] = 'cloudy';
	    icons['03'] = 'cloudy';
	    icons['04'] = 'cloudy-gusts';
	    icons['09'] = 'rain-mix';
	    icons['10'] = 'rain';
	    icons['11'] = 'thunderstorm';
	    icons['13'] = 'snow';
	    icons['50'] = 'fog';

	    var iconClass = "";
	    if (iconURL.substr(-1) == 'n') {
	        $('body').toggleClass("night");
	        iconClass = "wi-night-";
	    } else {
	        $('body').toggleClass('day');
	        iconClass = "wi-day-";
	    }

	    iconClass = iconClass + icons[iconURL.substr(0, iconURL.length - 1)];
	    if (iconClass == "wi-night-sunny")
	        iconClass = 'wi-night-clear';
	    $('#weather-icon').toggleClass(iconClass);
	}
