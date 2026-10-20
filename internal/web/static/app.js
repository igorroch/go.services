const statusPanel = document.querySelector(".service-status");
const statusText = document.querySelector("#status-text");

async function checkBackend() {
  try {
    const response = await fetch("http://localhost:8081/api/health");
    if (!response.ok) {
      throw new Error(`Health check returned ${response.status}`);
    }

    const health = await response.json();
    if (health.status !== "ok") {
      throw new Error("Unexpected health check response");
    }

    statusPanel.dataset.state = "ok";
    statusText.textContent = "Бэкенд работает";
  } catch (error) {
    console.error("Backend health check failed:", error);
    statusPanel.dataset.state = "error";
    statusText.textContent = "Нет соединения с бэкендом";
  }
}

checkBackend();
