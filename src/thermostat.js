function Thermostat() {
  this.temp = 20;
  this.minimum = 10;
  this.powerSavingMode = true;
};

Thermostat.prototype.up = function() {
  if (this.powerSavingMode === true && this.temp === 25) {
    throw new Error("Maximum temp is 25 degrees");
  } else {
    this.temp ++;
  }
};

Thermostat.prototype.down = function() {
  if (this.temp === this.minimum) {
    throw new Error("Minimum temp is 10 degrees");
  } else {
    this.temp --;
  }
};




