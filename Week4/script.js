let students = JSON.parse(localStorage.getItem("students")) || [];

const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");
const search = document.getElementById("search");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const student = {
    name: document.getElementById("name").value,
    roll: document.getElementById("roll").value,
    dept: document.getElementById("dept").value
  };

  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));

  form.reset();
  renderStudents(students);
});

function renderStudents(data) {
  table.innerHTML = "";

  data.forEach((s, index) => {
    table.innerHTML += `
      <tr>
        <td>${s.name}</td>
        <td>${s.roll}</td>
        <td>${s.dept}</td>
        <td>
          <button class="delete" onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function deleteStudent(index) {
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  renderStudents(students);
}

search.addEventListener("input", () => {
  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.value.toLowerCase())
  );
  renderStudents(filtered);
});

renderStudents(students);
