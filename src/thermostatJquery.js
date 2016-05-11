$(document).ready(function() {

  thermostat = new Thermostat();
  $('#temp').text(thermostat.temp);

  $('#temp-up').on('click', function(){
    thermostat.up();
    $('#temp').text(thermostat.temp);
  });

  $('#temp-down').on('click', function(){
    thermostat.down();
    $('#temp').text(thermostat.temp);
  });

  $('#temp-reset').on('click', function(){
    thermostat.reset();
    $('#temp').text(thermostat.temp);
  });

  $('#power-saving-on').click(function(){
    thermostat.powerSavingModeOn();
    $('#power-saving-status').text('on');
    thermostat.getCurrentTemperature();
  });

  $('#power-saving-off').click(function(){
    thermostat.powerSavingModeOff();
    $('#power-saving-status').text('off');
    thermostat.getCurrentTemperature();
  });

  $("h1").attr("style", function(){
    "color: " + thermostat.display + ";"
  });


   // var colorClass = thermostat.display;


  // if (thermostat.display < 18) {
  //   $('#temp').addClass('green').removeClass('red').removeClass('yellow');
  // } else if (thermostat.display >= 25) {
  //   $('#temp').addClass('red').removeClass('yellow').removeClass('green');
  // } else {
  //   $('#temp').addClass('yellow').removeClass('red').removeClass('green');
  // }
});

