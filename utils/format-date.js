function formatDate(date) {
    let dateArray = date.toString().split(' ');
    let moDayYear = `${dateArray[1]} ${dateArray[2]} ${dateArray[3]}`;
    let time = dateArray[4];
    return time + ' on ' + moDayYear;
}

module.exports = formatDate;