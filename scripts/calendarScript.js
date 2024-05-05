let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelectorAll(".calendar-dates");

const currdate = document
    .querySelector(".calendar-current-date");

const prenexIcons = document
    .querySelectorAll(".material-symbols-rounded");

// Array of month names
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


function emo(day) {
    console.log(day);
    let lit = ['hate', 'joy', 'happiness', 'anxiety', 'emotionless', 'angry', 'lonely'];
    for(let i = 0; i < lit.length; i++) {
        for(let y = 0; y < day.length; y++) {
            let x = day[y];
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(lit[i]));
            x.appendChild(li);
        }
    }
}


// Function to generate the calendar
// const manipulate = () => {
//     day1.innerHTML = '';
//     console.log(day1);
//     // Variable to store the generated calendar HTML
//     let lit = ['hate', 'joy', 'happiness', 'anxiety', 'emotionless', 'angry', 'lonely'];
//     for(let i = 0; i < lit.length; i++) {
//         let li = document.createElement('li');
//         li.appendChild(document.createTextNode(lit[i]));
//         day1.appendChild(li);
//     }
    
//     currdate.innerText = `${months[month]} ${year}`;
// }

// manipulate();
emo(day);

prenexIcons.forEach(icon => {

    // When an icon is clicked
    icon.addEventListener("click", () => {
        console.log('clicked')
        // Check if the icon is "calendar-prev"
        // or "calendar-next"
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;

        // Check if the month is out of range
        if (month < 0 || month > 11) {
            console.log('reg check')
            // Set the year to the new year
            year = date.getFullYear();

            // Set the month to the new month
            month = date.getMonth();
        }

        else {
            console.log('not reg')
            // Set the date to the current date
            date = new Date();
        }

        emo(day);
    });
});