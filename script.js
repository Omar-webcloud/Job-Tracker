let jobsData = [
  {
    id: 1,
    company: "Pathao",
    position: "React Native Developer",
    location: "Dhaka, BD",
    type: "Full-time",
    salary: "৳130,000 - ৳175,000",
    status: "none",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users nationwide.",
  },
  {
    id: 2,
    company: "10 Minute School",
    position: "Web Designer & Developer",
    location: "Mohakhali, Dhaka",
    type: "Part-time",
    salary: "৳80,000 - ৳120,000",
    status: "none",
    description:
      "Create stunning web experiences for educational platforms. Must have portfolio and experience with modern ed-tech design trends.",
  },
  {
    id: 3,
    company: "Brain Station 23",
    position: "Data Visualization Specialist",
    location: "Banani, Dhaka",
    type: "Full-time",
    salary: "৳135,000 - ৳165,000",
    status: "none",
    description:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
  },
  {
    id: 4,
    company: "bKash Limited",
    position: "Backend Developer",
    location: "Gulshan, Dhaka",
    type: "Full-time",
    salary: "৳140,000 - ৳190,000",
    status: "none",
    description:
      "Design and maintain scalable backend fintech systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
  },
  {
    id: 5,
    company: "TigerIT Bangladesh",
    position: "UI/UX Engineer",
    location: "Banani, Dhaka",
    type: "Full-time",
    salary: "৳110,000 - ৳150,000",
    status: "none",
    description:
      "Create beautiful and functional user interfaces for our suite of enterprise products. Strong design skills and frontend development expertise required.",
  },
  {
    id: 6,
    company: "Enosis Solutions",
    position: "JavaScript Developer",
    location: "Baridhara, Dhaka",
    type: "Full-time",
    salary: "৳130,000 - ৳170,000",
    status: "none",
    description:
      "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
  },
  {
    id: 7,
    company: "ShopUp",
    position: "Full Stack Engineer",
    location: "Mohakhali, Dhaka",
    type: "Full-time",
    salary: "৳120,000 - ৳160,000",
    status: "none",
    description:
      "Join our fast-growing startup and work on our core ecommerce platform. Experience with Node.js and React required. Great benefits and equity package included.",
  },
  {
    id: 8,
    company: "Therap (BD) Ltd.",
    position: "Senior Frontend Developer",
    location: "Banani, Dhaka",
    type: "Full-time",
    salary: "৳130,000 - ৳175,000",
    status: "none",
    description:
      "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
  },
];

let currentTab = "all";

const jobsContainer = document.getElementById("jobs-container");
const emptyState = document.getElementById("empty-state");
const tabButtons = document.querySelectorAll(".tab-btn");
const statTotal = document.getElementById("stat-total");
const statInterview = document.getElementById("stat-interview");
const statRejected = document.getElementById("stat-rejected");
const tabJobsCount = document.getElementById("tab-jobs-count");

function init() {
  renderJobs();
  updateStats();
  setupEventListeners();
}

function renderJobs() {
  jobsContainer.innerHTML = "";

  const filteredJobs = jobsData.filter(function (job) {
    if (currentTab === "all") return true;
    return job.status === currentTab;
  });

  tabJobsCount.textContent = filteredJobs.length;

  if (filteredJobs.length === 0) {
    jobsContainer.classList.add("hidden");
    emptyState.classList.remove("hidden");
    emptyState.classList.add("flex");
  } else {
    jobsContainer.classList.remove("hidden");
    emptyState.classList.add("hidden");
    emptyState.classList.remove("flex");

    filteredJobs.forEach(function (job) {
      const card = document.createElement("div");
      card.className =
        "job-card bg-white rounded-lg p-5 md:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col gap-2 relative";

      let badgeText = "NOT APPLIED";
      let badgeClass = "bg-slate-100/70 text-slate-500";

      if (job.status === "interview") {
        badgeText = "INTERVIEWING";
        badgeClass = "bg-emerald-50 text-emerald-600 border border-emerald-100";
      } else if (job.status === "rejected") {
        badgeText = "REJECTED";
        badgeClass = "bg-red-50 text-red-600 border border-red-100";
      }

      const interviewBtnClass =
        job.status === "interview"
          ? "bg-emerald-50 text-emerald-600 border-emerald-500 font-semibold"
          : "bg-white text-emerald-500 border-emerald-300 hover:bg-emerald-50";

      const rejectedBtnClass =
        job.status === "rejected"
          ? "bg-red-50 text-red-600 border-red-500 font-semibold"
          : "bg-white text-red-400 border-red-300 hover:bg-red-50";

      card.innerHTML = `
                <div class="flex justify-between items-start">
                    <h3 class="font-bold text-[#1e293b] text-base md:text-lg">${job.company}</h3>
                    <button class="delete-btn text-slate-400 hover:text-red-500 transition-colors p-1" data-id="${job.id}" title="Delete Job">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" class="stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    </button>
                </div>
                
                <p class="text-slate-500 text-[13px] md:text-sm -mt-2">${job.position}</p>
                
                <div class="flex flex-wrap items-center gap-1.5 md:gap-2 text-[11px] md:text-xs text-slate-400 mt-1 mb-2">
                    <span>${job.location}</span>
                    <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>${job.type}</span>
                    <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>${job.salary}</span>
                </div>
                
                <div class="mt-1 mb-2 text-[10px] font-bold tracking-wider inline-flex w-fit px-2.5 py-1 rounded-[4px] uppercase ${badgeClass}">
                    ${badgeText}
                </div>
                
                <p class="text-[13px] text-slate-600 mb-2 leading-relaxed">
                    ${job.description}
                </p>
                
                <div class="flex gap-3 mt-2">
                    <button class="action-btn px-3 py-1 text-[11px] rounded-[4px] border transition-colors uppercase font-medium tracking-wide ${interviewBtnClass}" data-action="interview" data-id="${job.id}">
                        Interview
                    </button>
                    <button class="action-btn px-3 py-1 text-[11px] rounded-[4px] border transition-colors uppercase font-medium tracking-wide ${rejectedBtnClass}" data-action="rejected" data-id="${job.id}">
                        Rejected
                    </button>
                </div>
            `;
      jobsContainer.appendChild(card);
    });
  }
}

function updateStats() {
  statTotal.textContent = jobsData.length;
  statInterview.textContent = jobsData.filter(function (j) {
    return j.status === "interview";
  }).length;
  statRejected.textContent = jobsData.filter(function (j) {
    return j.status === "rejected";
  }).length;
}

function setupEventListeners() {
  tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      tabButtons.forEach(function (b) {
        b.classList.remove("bg-blue-500", "text-white", "border-blue-500");
        b.classList.add("bg-white", "text-slate-500", "border-slate-200");
      });
      e.target.classList.remove(
        "bg-white",
        "text-slate-500",
        "border-slate-200",
      );
      e.target.classList.add("bg-blue-500", "text-white", "border-blue-500");

      currentTab = e.target.dataset.tab;
      renderJobs();
    });
  });

  jobsContainer.addEventListener("click", function (e) {
    const actionBtn = e.target.closest(".action-btn");
    const deleteBtn = e.target.closest(".delete-btn");

    if (actionBtn) {
      const action = actionBtn.dataset.action;
      const id = parseInt(actionBtn.dataset.id, 10);
      let jobIndex = -1;

      for (let i = 0; i < jobsData.length; i++) {
        if (jobsData[i].id === id) {
          jobIndex = i;
          break;
        }
      }

      if (jobIndex > -1) {
        jobsData[jobIndex].status = action;
        updateStats();
        renderJobs();
      }
    }

    if (deleteBtn) {
      const id = parseInt(deleteBtn.dataset.id, 10);
      let jobIndex = -1;

      for (let i = 0; i < jobsData.length; i++) {
        if (jobsData[i].id === id) {
          jobIndex = i;
          break;
        }
      }

      if (jobIndex > -1) {
        jobsData.splice(jobIndex, 1);
        updateStats();
        renderJobs();
      }
    }
  });
}

init();
