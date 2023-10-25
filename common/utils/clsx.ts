
export const clsx = (...args: any[]) => {
    return args
        .filter((arg) => typeof arg === "string" || typeof arg === "number")
        .join(" ");
}