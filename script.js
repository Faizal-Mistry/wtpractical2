document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const addressInput = document.getElementById('address');
    const address = addressInput ? addressInput.value : '';
    const college = document.getElementById('college').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    const user = {
        name: name,
        contact: contact,
        address: address,
        college: college,
        username: username,
        email: email,
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    document.getElementById('message').textContent = 'Registration successful!';

    window.location.href = 'list.html';
});