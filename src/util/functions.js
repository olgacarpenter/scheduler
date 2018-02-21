export function convertTime(number,showUnit=false) {
    if(!Number.isInteger(number) || number > 24) {
        throw "invalid number for hour";
    };
    let unit = showUnit ? " AM" : "";
    switch(true) {
        case (number > 12):
            unit = showUnit ? " PM" : "";
            return number - 12 + unit;
        case (number === 12):
            unit = showUnit ? " PM" : "";
            return number + unit;
        default:
            return number + unit;
    }
}