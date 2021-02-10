function getDateTime() {
    let ora = new Date();

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    let year = ora.getUTCFullYear();
    let month = ora.getUTCMonth() + 1;
    let day = ora.getUTCDate();
    let hour = ora.getUTCHours();
    let minute = ora.getUTCMinutes();
    let second = ora.getUTCSeconds();
    let sec = second;
    let min = minute;
    Date.prototype.getDayName = function () {
        return days[this.getUTCDay()];
    };
    let dayname = ora.getDayName();
    if (month.toString().length === 1) {
        month = "0" + month;
    }
    if (day.toString().length === 1) {
        day = "0" + day;
    }
    if (hour.toString().length === 1) {
        hour = "0" + hour;
    }
    if (minute.toString().length === 1) {
        minute = "0" + minute;
    }
    if (second.toString().length === 1) {
        second = "0" + second;
    }
    let sse = day + "/" + month;
    let dateTime =
        dayname +
        " " +
        day +
        "/" +
        month +
        "/" +
        year +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second;
    let timeshort = hour + ":" + minute + ":" + second;
    document.getElementById("digital-clock").innerText = dateTime;
    return [dateTime, sec, timeshort, min, sse];
}
