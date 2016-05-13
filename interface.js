'use strict';

$(document).ready(function() {
  var thermostat;

  function updateTemperature() {
    $('#temperature').text(thermostat.currentTemperature());
    // $('#temperature').attr('class', thermostat.energyUsage());
  }

  $("#temperature-up").click(function () {
    thermostat.up()
    updateTemperature();
    $("h1").attr("style", "color: " + thermostat.currentColor() + ";");
    $.post('http://localhost:4567/temperature?temperature=' + thermostat.currentTemperature() );
  });

  $("#temperature-down").click(function () {
    thermostat.down()
    updateTemperature();
    $("h1").attr("style", "color: " + thermostat.currentColor() + ";");
    $.post('http://localhost:4567/temperature?temperature=' + thermostat.currentTemperature() );
  });

  $("#temperature-reset").click(function () {
    thermostat.resetTemp()
    updateTemperature();
    $("h1").attr("style", "color: " + thermostat.currentColor() + ";");
    $.post('http://localhost:4567/temperature?temperature=' + thermostat.currentTemperature() );
  });

  $("#powersaving-on").click(function () {
    thermostat.powerSaveOn()
    $('#power-saving-status').text("On");
  });

  $("#powersaving-off").click(function () {
    thermostat.powerSaveOff()
    $('#power-saving-status').text("Off");
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a5c4a740b3e27e96c42f731fb1f35a5b&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })

  // $('#current-city').change(function() {
  //   var city = $('#current-city').val();
  //   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  //     $('#current-temperature').text(data.main.temp)
  //   })
  // })

  // function weatherCity() {
  //   $('#select-city').submit(function(event) {
  //     event.preventDefault();
  //     var customCity = $('#custom-city').val();
  //     var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + customCity;
  //     var token = '&appid=a5c4a740b3e27e96c42f731fb1f35a5b';
  //     var units = '&units=metric';
  //     $.get(url + token + units, function(data) {
  //       $('#current-temperature').text(data.main.temp);
  //     })
  //     $.post('http://localhost:4567/city?city=' + customCity );
  //   })
  // }

  function displayWeather(customCity) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + customCity;
    var token = '&appid=a5c4a740b3e27e96c42f731fb1f35a5b';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var customCity = $('#custom-city').val();
    displayWeather(customCity);
    $.post('http://localhost:4567/city?city=' + customCity );
  })

  function getTemperatureFromServer() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:4567/temperature',
        dataType: 'html',
        success: function(data){
          console.log(data);
          thermostat = new Thermostat(data);
          updateTemperature();
          $("h1").attr("style", "color: " + thermostat.currentColor() + ";");
        },
        error: function(data){
          console.log(data);
          thermostat = new Thermostat(20);
          updateTemperature();
          $("h1").attr("style", "color: " + thermostat.currentColor() + ";");
        }
      });
    }
  getTemperatureFromServer()

  function getCityFromServer() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:4567/city',
        dataType: 'html',
        success: function(data){
          console.log(data);
          displayWeather(data);
        },
        error: function(data){
          console.log(data);
        }
      });
    }
  getCityFromServer()

});
