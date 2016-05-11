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

  $('#power-saving-on').on('click', function(){
    $('#power-saving-status').text(thermostat.powerSavingModeOn);
  });

  $('#power-saving-off').on('click', function(){
    $('#power-saving-status').text(thermostat.powerSavingModeOff);
  });

  var colorClass = thermostat.display;

  $('#temp').css('color', colorClass);

});