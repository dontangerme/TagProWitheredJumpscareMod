// ==UserScript==
// @name         TagPro Withered Foxy GIF Jumpscare
// @namespace    tagpro-withered-foxy-gif
// @version      1.1
// @author       ChatGPT and Thanos Ball
// @description  1/10000 chance per second to trigger a Withered Foxy GIF jumpscare
// @include         https://*.koalabeast.com/profile/*
// @include         https://*.koalabeast.com/game
// @include         https://*.koalabeast.com/game?*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const CHANCE = 10000; // 1 / 10000 chance
    const CHECK_INTERVAL = 1000; // every second

    // 🔥 GIF + SOUND
    const GIF_URL = 'https://media.tenor.com/Q-ljDUwq8-QAAAAj/fnaf-foxy.gif'; // replace with any Withered Foxy GIF
    const SOUND_URL = 'https://www.myinstants.com/media/sounds/five-nights-at-freddys-2-full-scream-sound.mp3';

    function triggerJumpscare() {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
  
        overlay.style.zIndex = '999999';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';

        const gif = document.createElement('img');
        gif.src = GIF_URL;
        gif.style.width = '100%';
        gif.style.height = '100%';
        gif.style.objectFit = 'cover';

        overlay.appendChild(gif);
        document.body.appendChild(overlay);

        const audio = new Audio(SOUND_URL);
        audio.volume = 1.0;
        audio.play().catch(() => {});

        // remove jumpscare
        setTimeout(() => {
            overlay.remove();
        }, 1500);
    }

    setInterval(() => {
        if (Math.floor(Math.random() * CHANCE) === 0) {
            triggerJumpscare();
        }
    }, CHECK_INTERVAL);

})();
