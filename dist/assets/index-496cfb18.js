(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const d={makeCardInDOM(e){console.log(e);const r=document.querySelector("#templateCard"),o=document.importNode(r.content,!0),s=o.querySelector("[data-card-id]"),t=e.id;s.dataset.cardId=t;const n=o.querySelector(".card_title");n.textContent=e.title;const c=o.querySelector(".card_compagny-name");c.textContent=e.compagny_name;const i=o.querySelector(".card_compagny-type span");i.textContent=e.type_compagny.name;const a=o.querySelector(".card_status span");a.textContent=e.status.name,document.querySelector(".list_cards").appendChild(o)}},l={makeListInDOM(e){const r=document.querySelector("#templateList"),o=document.importNode(r.content,!0),s=o.querySelector("[data-list-id]"),t=e.id;s.dataset.listId=t;const n=o.querySelector(".list_title");n.textContent=e.list_type.name,document.querySelector(".lists-container").appendChild(o)},async getListsFromAPI(){try{const e=await fetch("http://localhost:3000/lists");if(!e.ok)throw new Error("Erreur de chargement des données");const r=await e.json();for(const o of r){l.makeListInDOM(o);for(const s of o.cards)d.makeCardInDOM(s)}}catch(e){console.trace(e)}}},m={init:function(){console.log("app.init !"),l.getListsFromAPI()}};document.addEventListener("DOMContentLoaded",m.init);
