// const remove = document.querySelector('[data-testid="reason-dialog-save-button"]');
// remove.click();

const clickRemoveInterval = setInterval(async function () {
  await delay(500);
  const textArea = document.querySelector('[data-testid="reason-textarea"]');
  if (textArea === null) {
    console.log('stopp');
    clearInterval(clickRemoveInterval);
  }
  console.log('click??');
  const remove = document.querySelector('[data-testid="remove-button"]');
  remove.click();
}, 1000);

// Cool functions, for Cool people

function getSession() {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith('fssessionid='))
    ?.split('=')[1];
}
function waitForElementToExist(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
