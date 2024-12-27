export default function isLeapYear(year : number){
    if((isYearDivisibleBy(year,4) && !isYearDivisibleBy(year,100)) || isYearDivisibleBy(year,400)){
        return true
    } else {
        return false
    }
}

function isYearDivisibleBy(year : number,number : number){
    return year % number === 0;
}