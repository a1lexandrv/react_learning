export function displayDate(data) {
    const date = new Date(parseInt(data));
    const dateNow = new Date();
    const yearDif = dateNow.getFullYear() - date.getFullYear();
    if (yearDif === 0) {
        const dayDif = dateNow.getDay() - date.getDay();
        if (dayDif === 0) {
            const hourDif = dateNow.getHours - date.getHours();
            if (hourDif === 0) {
                const minutesDif = dateNow.getMinutes() - date.getMinutes();

                if (minutesDif >= 0 && minutesDif < 5) return "1 минуту назад";
                if (minutesDif >= 5 && minutesDif < 5) return "5 минуту назад";
                if (minutesDif >= 10 && minutesDif < 30) {
                    return "10 минуту назад";
                }
                return "30 минуту назад";
            }
            return `${date.getHours()}:${date.getMinutes()}`;
        }

        return `${date.getDay()} ${date.toLocaleString("default", {
            mounth: "long"
        })}`;
    }
    return (
        date.getFullYear() + "." + (date.getMonth() + 1) + "_" + date.getDate()
    );
}
