document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if (username === 'admin' && password === 'admin') {
    alert('¡Inicio de sesión exitoso!');
    window.location.href = '../carga zapas/cargaZapas.html';
  } else {
    alert('Credenciales incorrectas. Inténtalo de nuevo con usuario y contraseña correctos.');
  }
});
