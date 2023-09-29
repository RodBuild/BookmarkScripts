javascript: (async () => {
  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  const personDetailsPage = 'https://beta.familysearch.org/tree/person/details/';
  if (window.location.href.includes('beta.familysearch.org') === false) {
    window.location.href = personDetailsPage;
    alert('You are being re-directed to the person/details page');
  } else if (window.location.href.includes('identbeta.familysearch.org') === true) {
    alert('You need to be signed in into beta.familysearch.org!! 😤');
  } else if (window.location.href.includes('/tree/person/details') === false) {
    window.location.href = personDetailsPage;
    alert('You are being re-directed to the person/details page');
  } else {
    const userName = document.querySelector('[data-testid="fullName"] > span')
      ? document.querySelector('[data-testid="fullName"] > span').textContent
      : null;

    if (userName !== null) {
      const targetButton = document.querySelector(`[aria-label*="Edit Parents of ${userName}"]`);
      if (targetButton !== null) {
        targetButton.click();
        await delay(1500);
        const removeRelationshipButton = document.querySelector('[data-testid="child-remove-replace-button"]');
        if (removeRelationshipButton !== null) {
          removeRelationshipButton.click();
          await delay(2000);
          const confirmButton = document.querySelector('[data-testid="signed"]');
          if (confirmButton !== null) {
            confirmButton.click();
            const clickRemoveRelationshipInterval = setInterval(function () {
              const remove = document.querySelector('[data-testid="reason-dialog-save-button"]');
              if (remove !== null) {
                remove.click();
                clearInterval(clickRemoveRelationshipInterval);
              }
              const removeRelationship = document.querySelector('[data-testid="remove-button"]');
              removeRelationship.click();
            }, 1000);
          }
        } else {
          alert('Parent-child relationship remove-or-replace button took a bit long to load. Try again 🔄');
        }
      } else {
        alert('Do you even have a family-relationship???');
      }
    } else {
      alert('Not too fast mate! 🏇🏽 Allow the page to load first!!');
    }
  }
})();
