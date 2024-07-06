let isEnabled = true;

chrome.storage.sync.get('isEnabled', (data) => {
  isEnabled = data.isEnabled !== undefined ? data.isEnabled : true;
  updateRule();
});

function updateRule() {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: isEnabled ? [{
      id: 1,
      priority: 1,
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: "https://new.reddit.com\\1"
        }
      },
      condition: {
        regexFilter: "^https?://www\\.reddit\\.com(/.*)",
        resourceTypes: ["main_frame"]
      }
    }] : []
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggle") {
    isEnabled = request.isEnabled;
    chrome.storage.sync.set({ isEnabled: isEnabled });
    updateRule();
  } else if (request.action === "getState") {
    sendResponse({ isEnabled: isEnabled });
  }
});