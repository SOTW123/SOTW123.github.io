const countdownText = document.getElementById("countdown")
const body = document.getElementById("body")

// Set the target date and time for the countdown
console.log(new Date());
const targetDate = new Date("2024-5-3");
targetDate.setHours(12)
targetDate.setMinutes(30)
targetDate.setSeconds(0);
console.log(targetDate);

  // Define a function to update the countdown timer
function updateCountdown() {
  // Get the current date and time
  const currentDate = new Date();
  if(currentDate >= targetDate) {
  }
  // Calculate the time difference between the target date and the current date
  const timeDifference = targetDate.getTime() - currentDate.getTime();
  if(timeDifference <= 0) {
      
    body.style.backgroundImage="url(https://i.gifer.com/ZcsJ.gif)";
  } else {
    // Convert the time difference to seconds
  
  }
  const totalSeconds = Math.floor(timeDifference / 1000);
  // Calculate the remaining hours, minutes, and seconds
  const days = Math.floor(totalSeconds / (3600*24));
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(((totalSeconds % 3600) / 60));
  const seconds = Math.floor(totalSeconds % 60);
  // Display the countdown timer
  console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds remaining`);
  let s = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds remaining`;
  countdownText.textContent = s;
  // Check if the countdown has reached zero
  if (totalSeconds > 0) {
    // Call the updateCountdown function again after 1 second
    setTimeout(updateCountdown, 1000);
  } else {
    console.log("Countdown has ended");
  }
}
// Call the updateCountdown function initially

updateCountdown();
