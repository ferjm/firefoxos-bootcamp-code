'use strict';

var WebAPIDemo = {

  init: function() {
    // DOM elements.
    this.level = document.getElementById('battery-level');
    this.charging = document.getElementById('battery-charging');
    this.content = document.getElementById('content');

    // Subscribe to battery events.
    navigator.battery.addEventListener('chargingchange',
                                       this.onChargingChange.bind(this));
    navigator.battery.addEventListener('levelchange',
                                       this.onLevelChange.bind(this));

    // Subscribe to device light event.
    window.addEventListener('devicelight',
                            this.onDeviceLightChange.bind(this));

    // Set initial values.
    this.onChargingChange();
    this.onLevelChange();
  },

  onChargingChange: function onChargingChange() {
    var isCharging = navigator.battery.charging;
    this.charging.textContent = isCharging ? 'charging' : 'discharging';
    this.charging.style.color = isCharging ? 'lime' : 'red';
  },

  onLevelChange: function onLevelChange() {
    var percent = parseInt(navigator.battery.level * 100);
    this.level.textContent = percent + '%';
  },

  onDeviceLightChange: function onDeviceLightChange(event) {
    var value = event.value * 2;
    this.content.style.color = value < 150 ? 'white' : 'black';
    document.body.style.background =
      'rgb(' + value + ',' + value + ',' + value + ')';
  }

};

window.addEventListener('DOMContentLoaded', function onload() {
  window.removeEventListener('DOMContentLoaded', onload);
  WebAPIDemo.init();
});
