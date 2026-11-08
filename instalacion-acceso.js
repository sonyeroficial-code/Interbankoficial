(function () {
  'use strict';

  function detect() {
    var ua = navigator.userAgent || '';
    var platform = navigator.platform || '';
    var ios = /iPhone|iPad|iPod/i.test(ua) ||
      (/MacIntel|Macintosh/i.test(platform) && navigator.maxTouchPoints > 1);
    var android = /Android/i.test(ua);
    var standalone = navigator.standalone === true ||
      window.matchMedia('(display-mode: standalone)').matches ||
      window.matchMedia('(display-mode: fullscreen)').matches;
    return { ios: ios, android: android, mobile: ios || android, standalone: standalone };
  }

  window.IBKInstallAccess = { detect: detect };
  if ('serviceWorker' in navigator && window.isSecureContext) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('./sw.js', { scope: './', updateViaCache: 'none' })
        .catch(function () {});
    });
  }
  if (/\/instalar\.html$/i.test(location.pathname)) return;

  // En edición local se puede abrir y probar la aplicación sin instalarla.
  var host = location.hostname.toLowerCase();
  var parts = host.split('.').map(Number);
  var ip = parts.length === 4 && parts.every(function (value) {
    return Number.isInteger(value) && value >= 0 && value <= 255;
  });
  var isLocal = host === 'localhost' || host.endsWith('.localhost') ||
    host === '0.0.0.0' || host === '[::1]' || host === '::1' ||
    host === 'appassets.androidplatform.net' ||
    (ip && (parts[0] === 127 || parts[0] === 10 ||
      (parts[0] === 192 && parts[1] === 168) ||
      (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31)));

  var device = detect();
  if (isLocal || !/^https?:$/.test(location.protocol) ||
      !device.mobile || device.standalone) return;

  var source = document.currentScript && document.currentScript.src || location.href;
  var destination = new URL('instalar.html', source);
  destination.search = location.search;
  destination.hash = location.hash;
  document.documentElement.style.visibility = 'hidden';
  location.replace(destination.href);
}());
