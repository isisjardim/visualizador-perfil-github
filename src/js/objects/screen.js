const screen = {
    profileResults: document.querySelector('.profile-results'),
    renderUser(user) {
        this.profileResults.innerHTML = `
            <div class="profile-card">
                <img src="${user.avatar_url}" alt="Avatar de ${user.name}" class="profile-avatar">
                <div class="profile-info">
                    <h2>${user.name}</h2>
                    <p>${user.bio || 'Não possui bio cadastrada 😢.'}</p>
                </div>
            </div>
            <div class ="profile-counters">
                <div class ="followers">
                    <h4>👥 Seguidores</h4>
                    <span>${user.followers}</span>
                </div>
                <div class="following">
                    <h4>👥 Seguindo</h4>
                    <span>${user.following}</span>
                </div>
            </div>    
        `;
    },
    renderNotFound() {
        this.profileResults.innerHTML = "<h3>Usuário não encontrado</h3>";
    }
}

export { screen };
