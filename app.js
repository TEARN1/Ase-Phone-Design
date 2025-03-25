/* ------------------ Navigation ------------------ */
let cameraStream = null;

function navigateTo(pageId) {
  // Hide all pages.
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  // Show target page.
  document.getElementById(pageId).classList.add('active');

  // If leaving the camera screen, stop the stream.
  if (pageId !== 'cameraScreen' && cameraStream !== null) {
    stopCamera();
  }
}

/* ------------------ Lock Screen Functionality ------------------ */
document.getElementById('unlockBtn').addEventListener('click', () => {
  const pwd = document.getElementById('passwordInput').value.trim();
  if (pwd) {
    navigateTo('homeScreen');
  } else {
    showToast('Please enter a valid password.');
  }
});

/* ------------------ Camera Functionality ------------------ */
document.getElementById('openCameraBtn').addEventListener('click', () => {
  navigateTo('cameraScreen');
  startCamera();
});
document.getElementById('stopCameraBtn').addEventListener('click', stopCamera);

function startCamera() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        cameraStream = stream;
        const videoEl = document.getElementById('cameraPreview');
        videoEl.srcObject = stream;
        videoEl.play();
      })
      .catch(err => {
        console.error('Error accessing the camera:', err);
        showToast('Unable to access the camera.');
      });
  } else {
    showToast('Camera not supported on this device.');
  }
}

function stopCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach(track => track.stop());
    cameraStream = null;
  }
  const videoEl = document.getElementById('cameraPreview');
  videoEl.pause();
  videoEl.srcObject = null;
}

/* ------------------ Volume Controls ------------------ */
let volume = 50; // initial volume percentage

function updateVolumeDisplay() {
  document.getElementById('volumeDisplay').innerText = "Volume: " + volume + "%";
}

function increaseVolume() {
  if (volume < 100) {
    volume += 5;
    if (volume > 100) volume = 100;
    updateVolumeDisplay();
  }
}

function decreaseVolume() {
  if (volume > 0) {
    volume -= 5;
    if (volume < 0) volume = 0;
    updateVolumeDisplay();
  }
}

/* ------------------ Battery Level ------------------ */
function updateBatteryUI(level) {
  document.querySelectorAll('.batteryDisplay').forEach(el => {
    el.innerText = level + '%';
  });
}

if (navigator.getBattery) {
  navigator.getBattery().then(function(battery) {
    function updateAllBattery() {
      const level = Math.round(battery.level * 100);
      updateBatteryUI(level);
    }
    updateAllBattery();
    battery.addEventListener('levelchange', updateAllBattery);
  }).catch(function(err) {
    console.error("Battery API error:", err);
    updateBatteryUI("N/A");
  });
} else {
  updateBatteryUI("N/A");
}

/* ------------------ Toast Notifications ------------------ */
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}
