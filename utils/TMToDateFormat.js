

export default function TMToDateFormat(timestamp)  {
    if(typeof timestamp ){
        let jsDate = timestamp?.toDate();
        let day = jsDate?.getDate();
        let month = jsDate?.getMonth() + 1;
        let year = jsDate?.getFullYear();

        return `${month}/${day}/${year}`
    }
    return "00/00/00"
}