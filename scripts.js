let takeoff = null;
let land = null;
let abortMission = null;
let shuttleReady = null;
let flightStatus = null;
let shuttleBackground = null;
let spaceShuttleHeight = null;
let abortQuestion = null;

let up = null;
let down = null;
let left = null;
let right = null;

let rocket = null;

let realSpaceShuttleHeight = 0;



function init() {

    takeoff = document.getElementById("takeoff");
    land = document.getElementById("landing");
    abortMission = document.getElementById("missionAbort");
    flightStatus = document.getElementById("flightStatus");
    shuttleBackground = document.querySelector("#shuttleBackground");
    spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    up = document.getElementById("up");
    down = document.getElementById("down");
    left = document.getElementById("left");
    right = document.getElementById("right");

    rocket = document.getElementById("rocket");



    takeoff.addEventListener("click", function() {
        shuttleReady = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (shuttleReady) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            realSpaceShuttleHeight = 10000;
            spaceShuttleHeight.innerHTML = realSpaceShuttleHeight;
        }
    });

    land.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        realSpaceShuttleHeight = 0;
        spaceShuttleHeight.innerHTML = realSpaceShuttleHeight;
    });

    abortMission.addEventListener("click", function() {
        abortQuestion = window.confirm("Confirm that you want to abort the mission.");
        if (abortQuestion) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            realSpaceShuttleHeight = 0;
            spaceShuttleHeight.innerHTML = realSpaceShuttleHeight;
        }
    });

    up.addEventListener("click", function() {
        rocket.style.left = "10px";



        realSpaceShuttleHeight = realSpaceShuttleHeight + 10000;
        spaceShuttleHeight.innerHTML += realSpaceShuttleHeight;
    });












}




window.onload = init;
