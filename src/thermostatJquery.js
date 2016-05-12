$(document).ready(function() {

  var thermostat = new Thermostat();
  var displayColor = thermostat.monitor();
    
  $('#temp').text(thermostat.temp);

  $('#temp-up').on('click', function(){
    thermostat.up();
    displayColor = thermostat.monitor();
    console.log(displayColor);
    $('#temp').text(thermostat.temp);
    $("h1").attr("style", "color: " + displayColor + ";");
  });

  $('#temp-down').on('click', function(){
    thermostat.down();
    displayColor = thermostat.monitor();
    console.log(displayColor);
    $('#temp').text(thermostat.temp);
    $("h1").attr("style", "color: " + displayColor + ";");
  });

  $('#temp-reset').on('click', function(){
    thermostat.reset();
    $('#temp').text(thermostat.temp);
  });

  $('#power-saving-on').click(function(){
    thermostat.powerSavingModeOn();
    if (thermostat.temp > 25) {
      thermostat.temp = 25;
      $('#temp').text(thermostat.temp);
    };
    $('#power-saving-status').text('on');
    thermostat.getCurrentTemperature();
  });

  $('#power-saving-off').click(function(){
    thermostat.powerSavingModeOff();
    $('#power-saving-status').text('off');
    thermostat.getCurrentTemperature();
  });
    
});

