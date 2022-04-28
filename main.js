// ==UserScript==
// @name         interview-hack
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  显示 interview2.poetries 隐藏的内容
// @author       icecred
// @include    *://interview2.poetries.top/*

// @license MIT
// @grant        none
// ==/UserScript==
(function (document) {
    if (document.getElementById('interview2-hack')) {
        return;
    }
    var css = `
    .theme-default-content.lock .content__default>:nth-child(32){
        opacity:1
    }
    .readMore-wrapper{
        display:none
    }

    .theme-default-content.lock .content__default>:nth-child(n+33){
        display:block
    }

`

    let Style = document.createElement('style');
    Style.id = 'interview2-hack'
    Style.innerHTML = css;

    document.head.appendChild(Style);
})(document)
