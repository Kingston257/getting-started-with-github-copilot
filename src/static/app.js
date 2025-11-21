document.addEventListener("DOMContentLoaded", () => {
  const activitiesList = document.getElementById("activities-list");
  const activitySelect = document.getElementById("activity");
  const signupForm = document.getElementById("signup-form");
  const messageDiv = document.getElementById("message");

  // Function to fetch activities from API
  async function fetchActivities() {
    try {
      const response = await fetch("/activities");
      const activities = await response.json();

      // Clear loading message
      activitiesList.innerHTML = "";
      // Reset activity select to avoid duplicate options on refresh
      activitySelect.innerHTML = '<option value="">-- Select an activity --</option>';

      // Populate activities list
      Object.entries(activities).forEach(([name, details]) => {
        const activityCard = document.createElement("div");
        activityCard.className = "activity-card";

        const spotsLeft = details.max_participants - details.participants.length;

        activityCard.innerHTML = `
          <h4>${name}</h4>
          <p>${details.description}</p>
          <p><strong>Schedule:</strong> ${details.schedule}</p>
          <p><strong>Availability:</strong> ${spotsLeft} spots left</p>
        `;

        // Add participants section (new)
        const participantsDiv = document.createElement("div");
        participantsDiv.className = "participants";
        const participantsTitle = document.createElement("strong");
        participantsTitle.textContent = "Participants:";
        participantsDiv.appendChild(participantsTitle);

        if (details.participants && details.participants.length > 0) {
          const ul = document.createElement("ul");
          ul.className = "participants-list";
          details.participants.forEach((p) => {
            const li = document.createElement("li");
            li.className = "participant-item";

            const avatar = document.createElement("span");
            avatar.className = "participant-avatar";
            avatar.textContent = p.charAt(0).toUpperCase();

            const span = document.createElement("span");
            span.className = "participant-email";
            span.textContent = p;

            // Delete button
            const delBtn = document.createElement("button");
            delBtn.type = "button";
            delBtn.className = "participant-delete";
            delBtn.title = `Remove ${p}`;
            delBtn.setAttribute("aria-label", `Remove ${p}`);
            delBtn.textContent = "✖";

            delBtn.addEventListener("click", (evt) => {
              evt.stopPropagation();
              if (!confirm(`Remove ${p} from ${name}?`)) return;
              unregisterParticipant(name, p, messageDiv, fetchActivities);
            });

            li.appendChild(avatar);
            li.appendChild(span);
            li.appendChild(delBtn);
            ul.appendChild(li);
          });
          participantsDiv.appendChild(ul);
        } else {
          const empty = document.createElement("p");
          empty.className = "participants-empty info";
          empty.textContent = "No participants yet.";
          participantsDiv.appendChild(empty);
        }

        activityCard.appendChild(participantsDiv);

        activitiesList.appendChild(activityCard);

        // Add option to select dropdown
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        activitySelect.appendChild(option);
      });
    } catch (error) {
      activitiesList.innerHTML = "<p>Failed to load activities. Please try again later.</p>";
      console.error("Error fetching activities:", error);
    }
  }

  // Handle form submission
  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const activity = document.getElementById("activity").value;

    try {
      const response = await fetch(
        `/activities/${encodeURIComponent(activity)}/signup?email=${encodeURIComponent(email)}`,
        {
          method: "POST",
        }
      );

      const result = await response.json();

      if (response.ok) {
        messageDiv.textContent = result.message;
        messageDiv.className = "success";
        signupForm.reset();
        // Refresh activities so the new participant appears immediately
        fetchActivities();
      } else {
        messageDiv.textContent = result.detail || "An error occurred";
        messageDiv.className = "error";
      }

      messageDiv.classList.remove("hidden");

      // Hide message after 5 seconds
      setTimeout(() => {
        messageDiv.classList.add("hidden");
      }, 5000);
    } catch (error) {
      messageDiv.textContent = "Failed to sign up. Please try again.";
      messageDiv.className = "error";
      messageDiv.classList.remove("hidden");
      console.error("Error signing up:", error);
    }
  });

  // Initialize app
  fetchActivities();
});

// Helper to unregister a participant (used by delete buttons)
async function unregisterParticipant(activityName, email, messageDiv, refreshFn) {
  try {
    const response = await fetch(
      `/activities/${encodeURIComponent(activityName)}/signup?email=${encodeURIComponent(email)}`,
      { method: "DELETE" }
    );

    const result = await response.json();

    if (response.ok) {
      messageDiv.textContent = result.message;
      messageDiv.className = "success";
      // Refresh the activities list to reflect the change
      if (typeof refreshFn === "function") refreshFn();
    } else {
      messageDiv.textContent = result.detail || "An error occurred";
      messageDiv.className = "error";
    }

    messageDiv.classList.remove("hidden");

    setTimeout(() => {
      messageDiv.classList.add("hidden");
    }, 4000);
  } catch (error) {
    messageDiv.textContent = "Failed to unregister. Please try again.";
    messageDiv.className = "error";
    messageDiv.classList.remove("hidden");
    console.error("Error unregistering participant:", error);
  }
}
