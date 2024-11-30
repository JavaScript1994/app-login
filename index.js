// script.js

// Usuarios predefinidos (en duro)
const users = [
    {
        name: "John Doe",
        email: "johndoe@example.com",
        password: "123456"
    },
    {
        name: "Jane Smith",
        email: "janesmith@example.com",
        password: "password123"
    }
];

// Referencias a las secciones
const loginSection = document.getElementById('login-section');
const registerSection = document.getElementById('register-section');
const dashboardSection = document.getElementById('dashboard-section');

// Referencias a los formularios
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Elementos dinámicos del dashboard
const dashboardName = document.getElementById('dashboard-name');
const dashboardEmail = document.getElementById('dashboard-email');

// Cambiar entre login y registro
document.getElementById('to-register').addEventListener('click', () => {
    loginSection.classList.add('hidden');
    registerSection.classList.remove('hidden');
});

document.getElementById('to-login').addEventListener('click', () => {
    registerSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
});

// Registro de usuario
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Verificar si el usuario ya existe
    if (users.some(user => user.email === email)) {
        alert('This email is already registered.');
        return;
    }

    // Guardar el nuevo usuario
    users.push({ name, email, password });
    alert('Account created successfully!');

    // Cambiar a la pantalla de login
    registerSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
});

// Login de usuario
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Validar credenciales
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        alert('Invalid email or password.');
        return;
    }

    // Mostrar dashboard
    dashboardName.textContent = user.name;
    dashboardEmail.textContent = user.email;

    loginSection.classList.add('hidden');
    dashboardSection.classList.remove('hidden');
});
