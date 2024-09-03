function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function showCookies() {
  const cookiesAccepted = getCookie('cookiesAccepted');
  if (cookiesAccepted === null || cookiesAccepted === 'false') {
    clickModal('age-verification-modal');
  }
}

function acceptCookies() {
  setCookie('cookiesAccepted', 'true', 365);
  clickModal('age-verification-modal');
}

function rejectCookies() {
  setCookie('cookiesAccepted', 'false', 365);
  window.location.href = 'https://www.google.com';
}

document.addEventListener('DOMContentLoaded', function () {
  showCookies();
});
