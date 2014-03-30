'use strict';

var WebAPIDemo = {

  init: function() {
    // DOM elements.
    this.level = document.getElementById('battery-level');
    this.charging = document.getElementById('battery-charging');

    // Subscribe to battery events.
    navigator.battery.addEventListener('chargingchange',
                                       this.onChargingChange.bind(this));
    navigator.battery.addEventListener('levelchange',
                                       this.onLevelChange.bind(this));

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
  }

};

window.addEventListener('DOMContentLoaded', function onload() {
  window.removeEventListener('DOMContentLoaded', onload);
  WebAPIDemo.init();
});
