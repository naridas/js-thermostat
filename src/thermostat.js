function Thermostat() {
  this.temp = 20;
  this.minimum = 10;
};

Thermostat.prototype.up = function() {
  this.temp ++;
};

Thermostat.prototype.down = function() {
  if (this.temp === 10) {
    throw new Error("Minimum temp is 10 degrees");
  } else {
    this.temp --;
  }
};

