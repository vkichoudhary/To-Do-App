document.addEventListener("DOMContentLoaded", () => {
    const categories = {
      today: ["Finish project", "Call mom", "Prepare for meeting"],
      planned: ["Book tickets", "Plan vacation", "Review goals"],
      personal: ["Meet friends", "Change your picture", "Buy theatre ticket", "Go to gym", "kkk", "kkkdk"],
      work: ["Send project files", "Prepare presentation", "Update resume"],
      shopping: ["Buy groceries", "Order online", "Pick up package"],
    };
  
    const categoryTitle = document.getElementById("category-title");
    const taskItems = document.getElementById("task-items");
    const categoryList = document.getElementById("categories");
    const addTaskButton = document.getElementById("add-task");
  
    // Load tasks for the selected category
    const loadTasks = (category) => {
      taskItems.innerHTML = "";
      categories[category].forEach((task) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<input type="checkbox"> ${task}`;
        taskItems.appendChild(listItem);
      });
      categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    };
  
    // Handle category click
    categoryList.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        const selectedCategory = e.target.getAttribute("data-category");
  
        // Update active category
        document.querySelectorAll(".sidebar li").forEach((li) => li.classList.remove("active"));
        e.target.classList.add("active");
  
        // Load tasks for the selected category
        loadTasks(selectedCategory);
      }
    });
  
    // Add a new task
    addTaskButton.addEventListener("click", () => {
      const currentCategory = document.querySelector(".sidebar li.active").getAttribute("data-category");
      const newTask = prompt("Enter a new task:");
      if (newTask) {
        categories[currentCategory].push(newTask);
        loadTasks(currentCategory);
      }
    });
  
    // Load default category (Personal)
    loadTasks("personal");
  });
  