import { getUser } from './services/user.js';
import { screen } from './objects/screen.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');

btnSearch.addEventListener('click', () => {
    const userName = inputSearch.value;
    if (validateInput(userName)) return;
    getUserData(userName);
});

inputSearch.addEventListener('keyup', (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isEnterKeyPressed = key === 13;

    if (isEnterKeyPressed) {
        if (validateInput(userName)) return;
        getUserData(userName);
    }
});

function validateInput(userName) {
    if (userName.length === 0) {
        alert('Preencha o campo com o nome do usuário do GitHub');
        return true;
    }
}

async function getUserData(userName) {
    try {
        const userData = await getUser(userName);

        if (userData.message === "Not Found") {
            screen.renderNotFound();
            return;
        }

        screen.renderUser(userData);

    } catch (error) {
        console.error('Erro ao buscar o perfil do usuário:', error);
        alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');
    }
}
