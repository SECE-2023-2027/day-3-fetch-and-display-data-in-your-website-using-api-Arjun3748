fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    const userList = document.getElementById("user-list");
    data.forEach(user => {
      const div = document.createElement("div");
      div.className = "user";
      div.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
      userList.appendChild(div);
    });
  })
  .catch(error => {
    console.log("Error fetching data:", error);
  });
