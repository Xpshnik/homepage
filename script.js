'use strict'
const avatarTag = document.getElementById('toggle_avatar');
const avatarSrc = "assets/avatar.jpg";
const pokemon = "assets/avatar_pokemon.jpg";

avatarTag.addEventListener('click', () => {
    avatarTag.src = pokemon;
    setTimeout(function () {
        avatarTag.src = avatarSrc;
    }, 1800);
}, { once: true });