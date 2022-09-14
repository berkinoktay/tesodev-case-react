export function dateToTimeAgo(date: Date): string {
    const now = new Date(Date.now());
    const difftime = now.getTime() - date.getTime();
    const diffDate = new Date(difftime - 5.5 * 60 * 60 * 1000);
    const [sec, min, hr, day, month, year] = [
        diffDate.getSeconds(),
        diffDate.getMinutes(),
        diffDate.getHours(),
        diffDate.getDate() - 1,
        diffDate.getMonth(),
        diffDate.getFullYear() - 1970,
    ];
    const f = (property: number, end: string) => {
        // console.log(property,end)
        return `${property}${end} ago`;
    }
    // console.log(diffDate.toLocaleString());
    return year >= 1 ? f(year, "y") : month >= 1
        ? f(month, "m")
        : day >= 1
            ? f(day, "d")
            : hr >= 1
                ? f(hr, "h")
                : min >= 1
                    ? f(min, "m")
                    : day >= 1
                        ? f(sec, "s")
                        : "";


    throw new Error("Date To time ago not implmented");
}