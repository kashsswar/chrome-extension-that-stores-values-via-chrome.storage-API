chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ key: 'Hello, World!' }, () => {
      console.log('Value is set to Hello, World!');
    });
  });
  