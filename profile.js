function updateTime() {
    const utcTimeElement = document.getElementById('utcTime');
    const now = new Date().toUTCString();
    utcTimeElement.innerText = `Current Time (UTC): ${now}`;
  }
  updateTime();
  