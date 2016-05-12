'use strict';

$(document).ready(function() {
  var thermostat = new Thermostat();

  function updateTemperature() {
    $('#temperature').text(thermostat.currentTemperature());
    // $('#temperature').attr('class', thermostat.energyUsage());
  }

  $("h1").attr("style", "color: " + thermostat.currentColor() + ";");

  updateTemperature();

  $("#temperature-up").click(function () {
    thermostat.up()
    updateTemperature();
    $("h1").attr("style", "color: " + thermostat.currentColor() + ";");
  });

  $("#temperature-down").click(function () {
    thermostat.down()
    updateTemperature();
    $("h1").attr("style", "color: " + thermostat.currentColor() + ";");
  });

  $("#temperature-reset").click(function () {
    thermostat.resetTemp()
    updateTemperature();
  });

  $("#powersaving-on").click(function () {
    thermostat.powerSaveOn()
    $('#power-saving-status').text("On");
  });

  $("#powersaving-off").click(function () {
    thermostat.powerSaveOff()
    $('#power-saving-status').text("Off");
  });

});
