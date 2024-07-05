document.getElementById('submit-btn').addEventListener('click', () => {
    const particular = document.getElementById('particular-input').value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { particular: particular });
    });
  });
  