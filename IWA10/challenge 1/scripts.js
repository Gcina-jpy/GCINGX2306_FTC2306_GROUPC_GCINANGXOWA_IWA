const currentYear = new Date().getFullYear();

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: new Date(`${currentYear}-12-16`),
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`${currentYear}-04-01`),
    },
    // ... (other holidays)
};

const christmas = 6;
const futureId = 9;

// ... (Do not change code above this comment)

console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`);

const copied = { ...holidays[christmas], name: 'X-mas Day' };
const correctDate = new Date(copied.date);
correctDate.setHours(0, 0, 0, 0);
const isEarlier = correctDate < holidays[christmas].date;
if (isEarlier) copied.date = correctDate;

console.log('ID change:', holidays[christmas].id !== copied.id || copied.id);
console.log('Name change:', holidays[christmas].name !== copied.name || copied.name);
console.log('Date change:', holidays[christmas].date.getTime() !== copied.date.getTime() || copied.date);

const holidayTimestamps = Object.values(holidays).map(holiday => holiday.date.getTime());
const firstHolidayTimestamp = Math.min(...holidayTimestamps);
const lastHolidayTimestamp = Math.max(...holidayTimestamps);

const firstDate = new Date(firstHolidayTimestamp);
const lastDate = new Date(lastHolidayTimestamp);

console.log(`${firstDate.getDate()}/${firstDate.getMonth()}/${currentYear}`);
console.log(`${lastDate.getDate()}/${lastDate.getMonth()}/${currentYear}`);

const randomIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHoliday = holidays[randomIndex];
console.log(randomHoliday.date);
