(function () {
  let target = document.getElementById("app");

  function user({ picture, name }) {
    return `
    <tr>
      <td><img src=${picture.thumbnail}></img></td>
      <td>${name.first}</td>
    </tr>`;
  }

  var footer = `
  <div>Vanilla JS only...</div>
`;

  function List(users) {
    return `
    <table border="1">
      <tr>
        <th>Photo</th>
        <th>Name</th>
      </tr>
      ${users} 
      <tr class="footer">
        <td colspan="2">${footer}</td>
      </tr>
    </table>
  `;
  }

  function displayUsers(data) {
    const users = data.map(user).join("");
    target.innerHTML = `
    ${List(users)}
  `;
  }

  async function getListUsers(numusers) {
    //target.innerHTML = "searching...";
    let resp = await fetch(`https://randomuser.me/api/?results=${numusers}`);
    let users = await resp.json();
    displayUsers(users.results);
  }

  getListUsers(6);
})();
