function getTime(givenTime) {
    const date = new Date(givenTime);
    // console.log(date, Date(Date.now()));
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

export default getTime;