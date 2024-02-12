
const date = moment();

const formattedDate = date.format("MMMM Do YYYY");

document.getElementById("comment-date").innerHTML = formattedDate;
