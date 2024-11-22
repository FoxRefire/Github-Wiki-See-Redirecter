// ==UserScript==
// @name        Github Wiki See Redirecter
// @namespace   Violentmonkey Scripts
// @match       https://github-wiki-see.page/m/*
// @grant       none
// @version     1.0
// @author      FoxRefire
// @description Redirect to original Github wiki page from github-wiki-see.page
// ==/UserScript==

location.replace(
    location.href.replace("github-wiki-see.page/m/", "github.com/")
)
