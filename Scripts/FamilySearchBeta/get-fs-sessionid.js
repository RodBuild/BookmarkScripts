// Thanks to this post!
// https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript

javascript: (async () => {
  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      alert('Your browser is too outdated! The Clipboard API was not found!');
    }
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`FS Session copied to clipboard! ${text}`);
      })
      .catch((err) => {
        alert('Something went wrong. Try again!');
        console.error('bookscript: ', err.message);
      });
  }

  function getSession() {
    return document.cookie
      .split('; ')
      .find((row) => row.startsWith('fssessionid='))
      ?.split('=')[1];
  }

  const fsSession = getSession();
  if (!fsSession) {
    alert('No sessionid found. Are you logged in?');
  } else {
    copyTextToClipboard(fsSession);
  }
})();
