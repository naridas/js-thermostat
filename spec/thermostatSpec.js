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

});