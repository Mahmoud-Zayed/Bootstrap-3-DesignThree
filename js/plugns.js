/*global $, alert, console*/
$(document).ready(function () {

    'use strict';

    // wow.js
    new WOW().init();

    // Nice Scroll
    $("body").niceScroll({
        cursorcolor:"#8e44ad",
        cursorwidth:"12px",
        zindex: "99999",
        cursorborder: "0",
        cursorborderradius: "0px"
        });

});
