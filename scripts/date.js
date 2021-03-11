const timestampContainer = document.querySelector(".js-timestamp"),
    dateContainer = timestampContainer.querySelector("span");



function dayToStr(dayNum) {
    let result = ``;
    const strDay = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
    result = strDay[dayNum]
    return result;
}

function monthToStr(monthNum) {
    let result = ``;
    const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`]
    result = months[monthNum];
    return result;
}

function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const day = today.getDay();
    dayInStr = dayToStr(day);
    monthStr = monthToStr(month);
    dateContainer.innerText = `${dayInStr}, ${date} ${monthStr}, ${year}`
}

function init() {
    getDate();
}

init();