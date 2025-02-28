document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

let fileToDownload = '';

function confirmDownload(fileName) {
    fileToDownload = fileName;
    document.getElementById('confirmation-modal').style.display = 'flex';
}

document.getElementById('confirm-btn').addEventListener('click', () => {
    downloadFile(fileToDownload);
    document.getElementById('confirmation-modal').style.display = 'none';
});

document.getElementById('cancel-btn').addEventListener('click', () => {
    document.getElementById('confirmation-modal').style.display = 'none';
});

function downloadFile(fileName) {
    const baseURL = "https://raw.githubusercontent.com/manojkumar460/BrowserLevelBlocker/refs/heads/main/Blockers/";
    const link = document.createElement('a');
    link.href = baseURL + fileName;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
      }
