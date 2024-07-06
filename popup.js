document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('toggleSwitch');
  
    chrome.runtime.sendMessage({ action: "getState" }, (response) => {
      toggleSwitch.checked = response.isEnabled;
    });
  
    toggleSwitch.addEventListener('change', () => {
      chrome.runtime.sendMessage({ action: "toggle", isEnabled: toggleSwitch.checked });
    });
  });