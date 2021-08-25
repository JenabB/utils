import moment from "moment";

const createdAt = "2021-04-25T13:08:55.932Z";
const dateFormat = "dddd, MMMM Do YYYY, h:mm:ss a";

// Format date
const formattedDate = moment(createdAt).format(dateFormat);

console.log(formattedDate);
