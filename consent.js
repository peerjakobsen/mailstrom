// GDPR consent banner — applies stored choice or shows banner on first visit
(function() {
  var stored = localStorage.getItem('consent_choice');

  if (stored === 'granted') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
    return;
  }

  if (stored === 'denied') {
    return;
  }

  // No stored choice — show banner
  var banner = document.createElement('div');
  banner.id = 'consent-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Cookie consent');
  banner.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:9999;padding:16px;background:rgba(15,23,42,0.95);backdrop-filter:blur(8px);border-top:1px solid rgba(30,41,59,0.5)';

  banner.innerHTML = '<div style="max-width:640px;margin:0 auto;display:flex;align-items:center;gap:16px;flex-wrap:wrap">'
    + '<p style="flex:1;min-width:240px;margin:0;font-size:14px;line-height:1.5;color:#94A3B8;font-family:IBM Plex Sans,system-ui,sans-serif">'
    + 'This site uses cookies to measure visitor traffic via Google Analytics. No personal data is shared with advertisers.'
    + '</p>'
    + '<div style="display:flex;gap:8px;flex-shrink:0">'
    + '<button id="consent-decline" style="padding:8px 16px;font-size:13px;font-weight:500;font-family:IBM Plex Sans,system-ui,sans-serif;color:#94A3B8;background:transparent;border:1px solid rgba(30,41,59,0.8);border-radius:6px;cursor:pointer">Decline</button>'
    + '<button id="consent-accept" style="padding:8px 16px;font-size:13px;font-weight:500;font-family:IBM Plex Sans,system-ui,sans-serif;color:#0F172A;background:#F8FAFC;border:1px solid #F8FAFC;border-radius:6px;cursor:pointer">Accept</button>'
    + '</div></div>';

  document.body.appendChild(banner);

  document.getElementById('consent-accept').addEventListener('click', function() {
    localStorage.setItem('consent_choice', 'granted');
    gtag('consent', 'update', { analytics_storage: 'granted' });
    banner.remove();
  });

  document.getElementById('consent-decline').addEventListener('click', function() {
    localStorage.setItem('consent_choice', 'denied');
    banner.remove();
  });
})();
