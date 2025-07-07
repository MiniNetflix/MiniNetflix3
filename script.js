
let stoppedHistory = [];

function filterCategory(category) {
  document.getElementById("history-list").style.display = "none";
  const videos = document.querySelectorAll(".video-item");
  videos.forEach(video => {
    const cat = video.getAttribute("data-category");
    video.style.display = (cat === category) ? "block" : "none";
  });
}

function showHistory() {
  const historyContainer = document.getElementById("history-list");
  historyContainer.innerHTML = "";

  if (stoppedHistory.length === 0) {
    historyContainer.innerHTML = "<p>Nessun video interrotto recentemente.</p>";
  } else {
    stoppedHistory.forEach(item => {
      const entry = document.createElement("div");
      entry.textContent = item.title;
      historyContainer.appendChild(entry);
    });
  }

  historyContainer.style.display = "block";

  const videos = document.querySelectorAll(".video-item");
  videos.forEach(video => {
    const title = video.querySelector("h3").textContent;
    video.style.display = stoppedHistory.find(v => v.title === title) ? "block" : "none";
  });
}

function searchVideos() {
  const searchTerm = document.getElementById("search-bar").value.toLowerCase();
  const videos = document.querySelectorAll(".video-item");

  videos.forEach(video => {
    const title = video.querySelector("h3").textContent.toLowerCase();
    video.style.display = title.includes(searchTerm) ? "block" : "none";
  });
}

// Simula interruzione video (usando visibilitychange per gli iframe)
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach(iframe => {
      const title = iframe.closest(".video-item").querySelector("h3").textContent;
      if (!stoppedHistory.find(item => item.title === title)) {
        stoppedHistory.push({ title });
      }
    });
  }
});
