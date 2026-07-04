/* ==========================================
   AI Business Expansion Intelligence
   app.js
========================================== */

const APP = {
    version: "1.0",
    property: "23.5 Cent Commercial Corner Plot",
    location: "Alagarkovil Highway, Madurai"
};

document.addEventListener("DOMContentLoaded", () => {

    console.log("AI Business Expansion Intelligence Started");

    updateDate();

    loadDashboard();

});

function updateDate() {

    const today = new Date();

    const el = document.getElementById("today");

    if(el){
        el.innerHTML = today.toDateString();
    }

}

function loadDashboard(){

    console.log("Dashboard Ready");

}

function openResearch(){

    window.location.href="research.html";

}

function openCompanies(){

    window.location.href="companies.html";

}

function openProspects(){

    window.location.href="prospects.html";

}

function openDashboard(){

    window.location.href="dashboard.html";

}

function openSettings(){

    window.location.href="settings.html";

}

function openComplete(){

    window.location.href="indexcomplete.html";

}

/* ---------- Statistics ---------- */

let stats={

    research:0,

    companies:0,

    prospects:0,

    followups:0

};

function increase(item){

    if(stats[item]!==undefined){

        stats[item]++;

        console.log(stats);

    }

}

/* ---------- Daily Checklist ---------- */

const dailyTasks=[

"Research 5 companies",

"Add 5 companies",

"Contact 5 decision makers",

"Follow up 5 prospects",

"Review today's progress"

];

function showTasks(){

    console.table(dailyTasks);

}

/* ---------- Target Industries ---------- */

const industries=[

"Hotels",

"Petrol & EV",

"Restaurants",

"Retail Chains",

"Builders",

"Warehouses",

"Hospitals",

"Schools",

"Tourism",

"Logistics"

];

console.log(APP);

console.log(industries);
