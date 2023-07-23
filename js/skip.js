// window.console = window.console || function(t) {};

// let wdate = "Last updated: " + document.lastModified;

// document.querySelectorAll(".w-update").innerHTML = "Last updated: " + new Date(modate).toString();

replaceDate = () => {
    let modate = document.lastModified;
    const updatedDates = document.querySelectorAll(".w-update");

    for (let i = 0; i < updatedDates.length; i++) {
        modate = document.querySelectorAll(".w-update").innerHTML = "Last update: " + new Date(modate).toString();
        updatedDates[i].innerHTML = modate;
    }
}

replaceDate();


// thankYou = () => {
//     $('#myModal').modal('show');

//     document.getElementById("myButton").onclick = function () {
//         location.href = "https://m-dorio.github.io/webportfolio/"; 
//         //https://m-dorio.github.io/webportfolio/#contact 
//     };
// }

// thankYou();
