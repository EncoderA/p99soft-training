function saveSession(token, username) {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('auth_username', username);
}

function clearSession() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_username');
}

function getSession() {
    return {
        token: localStorage.getItem('auth_token'),
        username: localStorage.getItem('auth_username'),
    };
}

function showLoggedIn(username, token) {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('loggedIn').style.display = 'block';
    document.getElementById('displayName').textContent = username;
    document.getElementById('tokenBox').textContent = 'Token:\n' + token;
}

window.addEventListener('DOMContentLoaded', () => {
    const { token, username } = getSession();
    if (token && username) {
        showLoggedIn(username, token);
    }
});

async function doLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const msg = document.getElementById('msg');
    const result = document.getElementById('result');

    msg.textContent = '';
    msg.className = '';
    result.style.display = 'none';

    if (!username || !password) {
        msg.textContent = 'Please enter username and password.';
        msg.className = 'error';
        return;
    }

    try {
        const res = await fetch('http://127.0.0.1:8000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (!res.ok) {
            msg.textContent = data.detail || 'Login failed.';
            msg.className = 'error';
            return;
        }

        saveSession(data.token, data.username);
        showLoggedIn(data.username, data.token);

    } catch (err) {
        msg.textContent = 'Cannot reach server.';
        msg.className = 'error';
    }
}

function doLogout() {
    clearSession();
    document.getElementById('loggedIn').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('msg').textContent = '';
}