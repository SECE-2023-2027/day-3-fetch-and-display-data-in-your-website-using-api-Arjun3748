let allUsers = [];

function renderTable(data) {
  const tableBody = document.getElementById("user-table-body");
  tableBody.innerHTML = ""; // Clear existing rows

  data.forEach(user => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Fetch data from API
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    allUsers = data;
    renderTable(allUsers); // Display all users initially
  })
  .catch(err => console.log("Error:", err));

// Search filter
document.getElementById("search").addEventListener("input", function() {
  const keyword = this.value.toLowerCase();
  const filtered = allUsers.filter(user =>
    user.name.toLowerCase().includes(keyword)
  );
  renderTable(filtered);
});
