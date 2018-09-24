const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday", "Sunday"];
const SHORT_DAYS_OF_WEEK = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
const MONTHS_OF_YEAR = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class DateFormatterService {
    constructor(date){
        this._date = new Date(date);
    }

    getWeekDay(){
        return DAYS_OF_WEEK[this._date.getDay()];
    }

    getShortWeekDay(){
        return SHORT_DAYS_OF_WEEK[this._date.getDay()];
    }

    getMonthDay(){
        const day = this._date.getDate();

        switch (day % 10) {
            case 1:
                return `${day}st`;
            case 2:
                return `${day}nd`;
            case 3:
                return `${day}rd`;
            default:
                return `${day}th`;
                break;
        }
    }

    getMonth(){
        return MONTHS_OF_YEAR[this._date.getMonth()];
    }

    getYear(){
        return this._date.getFullYear();
    }
}

export default DateFormatterService;