const targetDate = new Date('2025-05-30T00:00:00');
const publicHolidays = [
    "2025-04-18",  // Lielā piektdiena
    "2025-04-21",  // Otrās Lieldienas
    "2025-05-01",  // Darba svētki
    "2025-05-02",  // Pārceltā darba diena uz 10.05.2025
    "2025-05-04",  // Latvijas Republikas Neatkarības deklerācijas pasludināšanas diena
    "2025-05-05",  // Brīvdiena
];

 function calculateDaysUntil(targetDate) {
     const today = new Date();
     const totalDifference = targetDate - today;
     const totalDays = Math.ceil(totalDifference / (1000 * 60 * 60 * 24));
     let workDays = 0;
     let workSecondsLeftToday = 0;

     for (let i = 0; i <= totalDays; i++) {
         const currentDay = new Date(today);
         currentDay.setDate(today.getDate() + i);
         // Check if the current day is a weekday and not a public holiday
         if (currentDay.getDay() < 5 && !publicHolidays.includes(currentDay.toISOString().split('T')[0])) {
             if (i === 0) {
                 // Calculate remaining work time for today if it's a workday
                 const endOfWorkDay = new Date(currentDay);
                 endOfWorkDay.setHours(23, 0, 0, 0);
                 if (today < endOfWorkDay) {
                     workSecondsLeftToday = Math.floor((endOfWorkDay - today) / 1000);
                 }
             } else {
                 workDays++;
             }
         }
     }

     return { totalDifference, workDays, workSecondsLeftToday };
 }

 function updateCountdown() {
     const { totalDifference, workDays, workSecondsLeftToday } = calculateDaysUntil(targetDate);

     // Calculate total time left
     const totalSeconds = Math.floor(totalDifference / 1000);
     const totalMinutes = Math.floor(totalSeconds / 60);
     const totalHours = Math.floor(totalMinutes / 60);
     const totalDays = Math.floor(totalHours / 24);

     const totalHoursLeft = totalHours % 24;
     const totalMinutesLeft = totalMinutes % 60;
     const totalSecondsLeft = totalSeconds % 60;

     console.log(totalHours, totalHoursLeft)

     // Calculate work time left
     const workSeconds = workDays * 24 * 60 * 60 + workSecondsLeftToday;
     const workMinutes = Math.floor(workSeconds / 60);
     const workHours = Math.floor(workMinutes / 60);
     const workDaysLeft = Math.floor(workHours / 24);

     const workHoursLeft = workHours % 24;
     const workMinutesLeft = workMinutes % 60;
     const workSecondsLeft = workSeconds % 60;

     document.getElementById('total-time').textContent =
         `${totalDays}d ${totalHoursLeft}h ${totalMinutesLeft}m ${totalSecondsLeft}s`;
     document.getElementById('work-time').textContent =
         `${workDaysLeft}d ${workHoursLeft}h ${workMinutesLeft}m ${workSecondsLeft}s`;
 }

 // Update the countdown immediately and then every second
 updateCountdown();
 setInterval(updateCountdown, 1000);

 