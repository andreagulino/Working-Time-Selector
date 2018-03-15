// ==UserScript==
// @name         Working Time Selector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  automatically select working hours
// @author       Andrea Gulino
// @match        https://www13.ceda.polimi.it/progetti_ricerca/progetti_ricerca/controller/CalendarioAttivita.do*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var HOURS_PER_DAY = 8;
    var UPDATE = false;

    //////////////////////////

    var delay = 2000;

    var elemClass = ".dferialeNull";
    if(UPDATE) {
      elemClass = ".dferiale";
    }

    function setHour() {
        var iframe = document.getElementById('jaf_popupiframe');
        $(iframe.contentDocument).find(".wpRow select").first().val(HOURS_PER_DAY);
        $(iframe.contentDocument).find(".btnSalva").first().click();
    }

    var el = $(".tipoattivita").filter(function(){return $(this).text() === "PROGETTO";}).first().parent().find(elemClass).first().find("a");

    if(el.length > 0) {
        el.click();
        setTimeout(setHour, delay);
    }
})();
