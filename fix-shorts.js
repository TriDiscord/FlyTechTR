// ==UserScript==
// @name         Disable Shorts permission
// @namespace    http://flytech.video
// @version      0.1
// @description  Press F9 while on a YouTube Studio video page to disable the Shorts remix permission and save automatically.
// @author       FlyTech
// @match        https://studio.youtube.com/video/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function (e) {
        if (e.code === 'F9') {
            $("#toggle-button > .label").click();
            setTimeout(() => {
                $("#allow-content-remixing #checkmark").click();
                $("#save.style-scope").click();
            }, 200);
        }
    });

})();
