

const  getCurrrentDay = () => {
    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date;
    const dayName = weekDay[today.getDay()];
    return dayName
}

const getCurrentUTCTime = () => {

    // Get the UTC time in milliseconds
    const utcMilliseconds = Date.now();
    return utcMilliseconds

}

const update = () => {

    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]')
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    currentDayOfTheWeek.textContent = `Day of the week: ${getCurrrentDay()}`
    currentUTCTimeElement.textContent = `UTCTime: ${getCurrentUTCTime()} milliseconds`
}

window.onload = update

