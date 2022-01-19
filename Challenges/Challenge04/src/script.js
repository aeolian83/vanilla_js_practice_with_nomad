const clock = document.querySelector("#dDay");

function dDay() {
    const christmasEve = new Date(2022, 11, 25);
    const date = new Date();
    const untilToChrismasEve = christmasEve.getTime() - date.getTime();
    const untilDay = Math.floor(untilToChrismasEve / 86400000);
    const untilHour = Math.floor((untilToChrismasEve - (untilDay * 86400000)) / 3600000);
    const untilMinute = Math.floor((untilToChrismasEve - (untilDay * 86400000) - (untilHour * 3600000)) / 60000);
    const untilSecond = Math.floor((untilToChrismasEve - (untilDay * 86400000) - (untilHour * 3600000) - (untilMinute * 60000)) / 1000);
    clock.innerText = `${String(untilDay).padStart(3, "0")}d ${String(untilHour).padStart(2, "0")}h ${String(untilMinute).padStart(2, "0")}m ${String(untilSecond).padStart(2, "0")}s`;
    
}

dDay();
setInterval(dDay, 1000);