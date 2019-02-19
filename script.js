// todo - throttle listener;
window.addEventListener('DOMContentLoaded', () =>
  document.getElementById('main').style.marginTop = newMargin());

window.addEventListener('resize', () =>
  document.getElementById('main').style.marginTop = newMargin());

/** keep the text in the  .~* ✨ stars 💫 *~.  */
const newMargin = () => {
  const height = document.documentElement.clientWidth * 0.2;
  return (height < 200) ? `${height}px` : `200px`;
};

/** wrapper for amplitude event logging */
const logEvent = (name, properties) => {
  amplitude.getInstance().logEvent(name, properties);
};

// attach amplitude event listeners
const addAmplitudeListeners = () => {
  window.addEventListener('DOMContentLoaded', () => {
    const linkedin = document.getElementById('linkedin');
    const github = document.getElementById('github');
    const angelist = document.getElementById('angelist');
    const email = document.getElementById('angelist');

    // linkedin
    linkedin.href = 'https://www.linkedin.com/in/vuongvincent';
    linkedin.addEventListener('mouseover', () => {
      logEvent('ButtonMouseover', { button: 'linkedin' });
    });
    linkedin.addEventListener('click', () => {
      logEvent('ButtonClick', { button: 'linkedin' });
      window.open('https://www.linkedin.com/in/vuongvincent/', '_self');
    });

    // github
    github.href = 'https://github.com/vincevuong';
    github.addEventListener('mouseover', () => {
      logEvent('ButtonMouseover', { button: 'github' });
    });
    github.addEventListener('click', () => {
      logEvent('ButtonClick', { button: 'github' });
      window.open('https://github.com/vincevuong', '_self');
    });

    // angelist
    angelist.href = 'https://angel.co/vincevuong';
    angelist.addEventListener('mouseover', () => {
      logEvent('ButtonMouseover', { button: 'angelist' });
    });
    angelist.addEventListener('click', () => {
      logEvent('ButtonClick', { button: 'angelist' });
      window.open('https://angel.co/vincevuong', '_self');
    });

     // email
     email.href = 'mailto:hello@vincevuong.com';
     email.addEventListener('mouseover', () => {
       logEvent('ButtonMouseover', { button: 'email' });
     });
     email.addEventListener('click', () => {
       logEvent('ButtonClick', { button: 'email' });
       window.open('mailto:hello@vincevuong.com', '_self');
     });

  });
};


