// Llamar a la API de randomuser.me usando fetch
fetch("https://randomuser.me/api/?results=1")
  .then(response => response.json())
  .then(data => {
    const user = data.results[0];

    // Uso de template literals para mostrar datos
    document.getElementById("user-photo").src = user.picture.large;
    document.getElementById("user-name").textContent = `${user.name.first} ${user.name.last}`;
    document.getElementById("user-fullname").textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
    document.getElementById("user-phone").textContent = user.phone;
    document.getElementById("user-email").textContent = user.email;
    document.getElementById("user-location").textContent = `${user.location.city}, ${user.location.country}`;
  })
  .catch(error => console.error("Error al obtener usuario:", error));
