$(document).ready(function() {

  thermostat = new Thermostat();
  $('#temp').text(thermostat.temp);

  $('#temp-up').on('click', function(){
    thermostat.up();
    $('#temp').text(thermostat.temp);
  });

});