// API key:  a5c4a740b3e27e96c42f731fb1f35a5b
//http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={a5c4a740b3e27e96c42f731fb1f35a5b}


// EXAMPLE OF API CALL:
// {
// "cod": 401,
// "message": "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
// }


'use strict';

function Thermostat(){

  this._temperature = 20;
  this._min = 10;
  this.powerSaveMode = true;
  this.tempColor = "orange";

}

Thermostat.prototype.currentColor = function (){
  return this.tempColor;
}

Thermostat.prototype.powerSaveOff = function (){
  this.powerSaveMode = false;
};

Thermostat.prototype.resetTemp = function (){
  this._temperature = 20;
};

Thermostat.prototype.powerSaveOn = function (){
  this.powerSaveMode = true;
};

Thermostat.prototype.isOnPowerSaveMode = function () {
  return this.powerSaveMode;
};

Thermostat.prototype.currentTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.up = function (){
  if (this.atMax()){
    return;
  };
  this._temperature += 1;
  this.changeTempColor();
};

Thermostat.prototype.down = function (){
  if (this.atMin()){
    return;
  };
  this._temperature -= 1;
  this.changeTempColor();
};

Thermostat.prototype.atMin = function (){
  return this._temperature === this._min;
};

Thermostat.prototype.atMax = function (){
  if (this.isOnPowerSaveMode()){
    return this._temperature === 25;
  };
  return this._temperature === 32;
};

Thermostat.prototype.changeTempColor = function (){
  if (this._temperature < 18) {
    return  this.tempColor = "green";
  };
  if (this._temperature <= 25 && this._temperature >= 18) {
    return this.tempColor = "orange";
  };
  return this.tempColor = "red";
};
