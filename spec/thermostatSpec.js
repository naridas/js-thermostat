describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("Should have a starting temp of 20 degrees", function() {
    expect(thermostat.temp).toEqual(20);
  });

  it("Should increase the temp when up button is pushed", function() {
    thermostat.up();
    expect(thermostat.temp).toEqual(21);
  });

  it("Should decrease the temp when the down button is pushed", function() {
    thermostat.down();
    expect(thermostat.temp).toEqual(19);
  });

  it("Should have a minimum temp of 10 degrees", function() {
    thermostat.temp = 10;
    expect(function(){
      thermostat.down();
    }).toThrowError('Minimum temp is 10 degrees');
  });

  it("Should default to power saving mode", function() {
    expect(thermostat.powerSavingMode).toEqual(true);
  });

  it("Should have a maximum temp of 25 degress in Power Saving mode", function() {
    thermostat.powerSavingMode = true;
    thermostat.temp = 25;
    expect(function() {
      thermostat.up();
    }).toThrowError('Maximum temp is 25 degrees');
  });


  it("Should have a maximum temp of 32 degress when Power Saving mode is off", function() {
    thermostat.powerSavingMode = false;
    thermostat.temp = 32;
    expect(function() {
      thermostat.up();
    }).toThrowError('Maximum temp is 32 degrees');
  });

  it("resets to 20 degrees", function(){
    expect(thermostat.reset()).toEqual(20);
  });

  it("display green when temp < 18", function(){
    thermostat.temp = 15;
    expect(thermostat.monitor()).toEqual("green");
  });

  it("display yellow when temp < 25", function(){
    thermostat.temp = 20;
    expect(thermostat.monitor()).toEqual("yellow");
  });

  it("display red when temp >= 25", function(){
    thermostat.temp = 30;
    expect(thermostat.monitor()).toEqual("red");
  });

});