function getTime(givenTime) {
    const date = new Date(givenTime);
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

export default getTime;