const getAMPM = () => {
    const time = new Date();
    const getHours = time.getHours();
    const getMinutes = time.getMinutes();
    const timeString12hr = `${getHours > 12 ? getHours - 12 : getHours}:${getMinutes} ${getHours > 12 ? 'PM' : 'AM'}`;
    return timeString12hr;
}

export default getAMPM;