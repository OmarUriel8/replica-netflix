const inputs = document.querySelectorAll('form .campo input');

inputs.forEach((input) => {
	input.addEventListener('blur', validarInput);
});

inputs.forEach((input) => {
	input.addEventListener('input', validarInput);
});

function validarInput(e) {
	console.log(e.target.value);
	const estados = [ 'valido', 'no-valido' ];
	let clase;
	if (e.target.value.length === 0) {
		clase = estados[1];
	} else {
		clase = estados[0];
	}

	e.target.classList.remove(...estados);
	e.target.nextElementSibling.classList.remove(...estados);
	e.target.classList.add(clase);
	e.target.nextElementSibling.classList.add(clase);
	// Mostrar error
	if (clase === 'no-valido') {
		if (e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
			console.log(e.target.parentElement.nextElementSibling);
			const errorDiv = document.createElement('div');
			errorDiv.textContent = 'Este campo es obligatorio';
			errorDiv.classList.add('alerta');

			e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextSibling);
		}
	} else {
		if (e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
			e.target.parentElement.nextElementSibling.remove();
		}
	}
}

// mostrar y ocultar password
const mostrarPass = document.querySelector('form .campo span');
mostrarPass.addEventListener('click', (e) => {
	const passwordInput = document.querySelector('#password');
	if (e.target.classList.contains('mostrar')) {
		e.target.classList.remove('mostrar');
		e.target.textContent = 'Ocultar';
		passwordInput.type = 'text';
	} else {
		e.target.classList.add('mostrar');
		// cambiar el texto
		e.target.textContent = 'Mostrar';
		passwordInput.type = 'password';
	}
});
