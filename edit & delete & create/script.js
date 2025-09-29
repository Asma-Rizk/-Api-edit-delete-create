let users = [];
let editIndex = null;

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const addBtn = document.getElementById("addBtn");
const tbody = document.querySelector("#userTable tbody");

// render users in table
function renderUsers() {
  tbody.innerHTML = "";
  users.forEach((user, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>
          <span class="edit" onclick="editUser(${index})">Edit</span> | 
          <span class="delete" onclick="deleteUser(${index})">Delete</span>
        </td>
      </tr>
    `;
  });
}

// create new user
function addUser() {
  const name = nameInput.value;
  const email = emailInput.value;

  if (!name || !email) {
    alert("Please fill all fields");
    return;
  }

  if (editIndex === null) {
    users.push({ name, email }); // create
  } else {
    users[editIndex] = { name, email }; // update
    editIndex = null;
    addBtn.innerText = "Add User";
  }

  nameInput.value = "";
  emailInput.value = "";
  renderUsers();
}

// edit user
function editUser(index) {
  nameInput.value = users[index].name;
  emailInput.value = users[index].email;
  editIndex = index;
  addBtn.innerText = "Update User";
}

// delete user
function deleteUser(index) {
  if (confirm("Are you sure?")) {
    users.splice(index, 1);
    renderUsers();
  }
}

addBtn.addEventListener("click", addUser);
