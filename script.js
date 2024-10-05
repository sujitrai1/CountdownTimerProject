let x;
function countdownFunction(){

    clearInterval(x);
       // Get the input value
       const userInput = document.getElementById("dateInput").value;

       if (!userInput) {
           alert("Please enter a valid date and time!");
           return;
       }



const endDate = new Date(userInput).getTime();
const startDate = new Date().getTime();


 x  = setInterval(function updateTimer() {
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    //caculate days, min, hrs, secs
    //1 day = 24 * 60 * 60 * 1000 ms
    const oneDayInMillis = (24 * 60 * 60 * 1000);
    const oneHourInMillis  = (60 * 60 * 1000);
    const oneMinInMIllis = (60*1000);
    const oneSecondInMillis = (1000);

    const days = Math.floor(distancePending / (oneDayInMillis));

    const hrs = Math.floor((distancePending%(oneDayInMillis) / (oneHourInMillis)));

    const mins = Math.floor((distancePending%(oneHourInMillis))/(oneMinInMIllis));

    const secs = Math.floor((distancePending%(oneMinInMIllis))/(oneSecondInMillis));

    //populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    //calculate width percentage for progress bar 
    const totalDistance = endDate - startDate;

    const percetageDistance  = (distanceCovered/totalDistance)*100;

    //set width for progress bar 
    document.getElementById("progress-bar").style.width = percetageDistance + "%";

    if(distancePending < 0 ) {
        clearInterval(x);
      let div = document.createElement('p');
      let value = div.textContent = "EXPIRED";
        document.getElementById("countdown").innerHTML = value;
        document.getElementById("progress-bar").style.width = "100%";
    }
}
, 1000); 

}