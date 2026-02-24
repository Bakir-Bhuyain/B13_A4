// 1. Selecting the elements need to update
const totalCountEl = document.getElementById("totalCount");
const interviewCountEl = document.getElementById("interview-count");
const rejectedCountEl = document.getElementById("rejectedCount");
const jobQuantityEl = document.getElementById("job-quantity");
const jobList = document.getElementById("job-list");
const noJobsContainer = document.getElementById("no-jobs-container");
const tabButtons = document.querySelectorAll(".tab-btn");


let total = 8;
let interview = 0;
let rejected = 0;


function updateDashboard() {
  totalCountEl.innerText = total;
  interviewCountEl.innerText = interview;
  rejectedCountEl.innerText = rejected;


  if (total === 0) {
    jobList.classList.add("hidden");
    noJobsContainer.classList.remove("hidden");
  }
}


jobList.addEventListener("click", function (event) {
  const clickedElement = event.target;


  const card = clickedElement.closest(".job-card");
  if (!card) return;

  const badge = card.querySelector(".status-badge");
  const currentStatus = card.getAttribute("data-status");


  if (
    clickedElement.classList.contains("interview-btn") ||
    clickedElement.parentElement.classList.contains("interview-btn")
  ) {
    if (currentStatus === "interview") return; 

    if (currentStatus === "rejected") {
      rejected = rejected - 1; 
    }

    interview = interview + 1; 
    card.setAttribute("data-status", "interview");
    badge.innerText = "Interview";
    badge.className =
      "status-badge badge badge-soft badge-success py-3 px-4 rounded text-xs font-bold uppercase";

    updateDashboard();
  }

  //  Clicking the Rejected Button ---
  else if (
    clickedElement.classList.contains("rejected-btn") ||
    clickedElement.parentElement.classList.contains("rejected-btn")
  ) {
    if (currentStatus === "rejected") return;

    if (currentStatus === "interview") {
      interview = interview - 1; 
    }

    rejected = rejected + 1;
    card.setAttribute("data-status", "rejected");
    badge.innerText = "Rejected";
    badge.className =
      "status-badge badge badge-soft badge-error py-3 px-4 rounded text-xs font-bold uppercase";

    updateDashboard();
  }

  //3: Clicking the Delete Button ---

});

// 5. Filtering the cards when clicking Tabs (All, Interview, Rejected)
for (let i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener("click", function () {
    const filterName = this.innerText.toLowerCase();
    const allCards = document.querySelectorAll(".job-card");
    let visibleCount = 0;

    // Change button colors Blue for active, Outline for others
    for (let j = 0; j < tabButtons.length; j++) {
      tabButtons[j].classList.remove("btn-primary");
      tabButtons[j].classList.add("btn-outline");
    }
    this.classList.add("btn-primary");
    this.classList.remove("btn-outline");

    // Show or Hide cards based on the filter
    for (let k = 0; k < allCards.length; k++) {
      const status = allCards[k].getAttribute("data-status");

      if (filterName === "all" || status === filterName) {
        allCards[k].style.display = "flex";
        visibleCount = visibleCount + 1;
      } else {
        allCards[k].style.display = "none";
      }
    }

    // Update the "Jobs Found" count based on the tab
    jobQuantityEl.innerText = visibleCount;
  });
}
