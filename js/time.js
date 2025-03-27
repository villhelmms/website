/* const targetDate1 = new Date('2025-05-09T00:00:00');
const targetDate2 = new Date('2025-05-30T00:00:00');
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
 setInterval(updateCountdown, 1000); */

 const targetDate1 = new Date('2025-05-09T00:00:00');
 const targetDate2 = new Date('2025-05-30T00:00:00');
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
     const { totalDifference: totalDifference1, workDays: workDays1, workSecondsLeftToday: workSecondsLeftToday1 } = calculateDaysUntil(targetDate1);
     const { totalDifference: totalDifference2, workDays: workDays2, workSecondsLeftToday: workSecondsLeftToday2 } = calculateDaysUntil(targetDate2);
 
     // Calculate total time left for targetDate1
     const totalSeconds1 = Math.floor(totalDifference1 / 1000);
     const totalMinutes1 = Math.floor(totalSeconds1 / 60);
     const totalHours1 = Math.floor(totalMinutes1 / 60);
     const totalDays1 = Math.floor(totalHours1 / 24);
 
     const totalHoursLeft1 = totalHours1 % 24;
     const totalMinutesLeft1 = totalMinutes1 % 60;
     const totalSecondsLeft1 = totalSeconds1 % 60;
 
     // Calculate work time left for targetDate1
     const workSeconds1 = workDays1 * 24 * 60 * 60 + workSecondsLeftToday1;
     const workMinutes1 = Math.floor(workSeconds1 / 60);
     const workHours1 = Math.floor(workMinutes1 / 60);
     const workDaysLeft1 = Math.floor(workHours1 / 24);
 
     const workHoursLeft1 = workHours1 % 24;
     const workMinutesLeft1 = workMinutes1 % 60;
     const workSecondsLeft1 = workSeconds1 % 60;
 
     // Calculate total time left for targetDate2
     const totalSeconds2 = Math.floor(totalDifference2 / 1000);
     const totalMinutes2 = Math.floor(totalSeconds2 / 60);
     const totalHours2 = Math.floor(totalMinutes2 / 60);
     const totalDays2 = Math.floor(totalHours2 / 24);
 
     const totalHoursLeft2 = totalHours2 % 24;
     const totalMinutesLeft2 = totalMinutes2 % 60;
     const totalSecondsLeft2 = totalSeconds2 % 60;
 
     // Calculate work time left for targetDate2
     const workSeconds2 = workDays2 * 24 * 60 * 60 + workSecondsLeftToday2;
     const workMinutes2 = Math.floor(workSeconds2 / 60);
     const workHours2 = Math.floor(workMinutes2 / 60);
     const workDaysLeft2 = Math.floor(workHours2 / 24);
 
     const workHoursLeft2 = workHours2 % 24;
     const workMinutesLeft2 = workMinutes2 % 60;
     const workSecondsLeft2 = workSeconds2 % 60;
 
     document.getElementById('total-time1').textContent =
         `${totalDays1}d ${totalHoursLeft1}h ${totalMinutesLeft1}m ${totalSecondsLeft1}s`;
     document.getElementById('work-time1').textContent =
         `${workDaysLeft1}d ${workHoursLeft1}h ${workMinutesLeft1}m ${workSecondsLeft1}s`;
 
     document.getElementById('total-time2').textContent =
         `${totalDays2}d ${totalHoursLeft2}h ${totalMinutesLeft2}m ${totalSecondsLeft2}s`;
     document.getElementById('work-time2').textContent =
         `${workDaysLeft2}d ${workHoursLeft2}h ${workMinutesLeft2}m ${workSecondsLeft2}s`;
 }
 
 // Update the countdown immediately and then every second
 updateCountdown();
 setInterval(updateCountdown, 1000);
 

 