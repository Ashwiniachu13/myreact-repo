
import ShowDate from "./dates/date"




function fun(){
const date=new Date()

function getDay(day){
    switch(day){
        case 0:
            return "Sunday"
            case 1:
                return "Monday"
                case 2:
                return "Tuesday"
                case 3:
                return "Wednesday"
                case 4:
                return "Thursday"
                case 5:
                return "Friday"
                case 6:
                return "Saturday"

                default:
                    return "none"
    }

}

function getGreeting(hour){
    let Greeting
    if(hour>0&&hour<=11){
        Greeting="Good morning"
    }
    else if(hour>11&&hour<16){
        Greeting="Good afternoon"
    }
    else if(hour>=16&&hour<20){
    Greeting="good evening"
    }
    else{
        Greeting="good night"
    }
    return Greeting;
}


function getseason(season){
    const month=new Date()
    let c=console.log(month.getMonth());
    if(c>1&&c<6){
       season="summer"
    }
    else if(c>5&&c<10){
        season="rainy"
    }
    else{
        season="winter"
    }

    return season;
}

function getyear(year){
    let c=new Date()
console.log(c.getFullYear());
return year;

}


function getMonth(month){
    switch(month){
        case 0:
            return "January"
            case 1:
                return "February"
                case 2:
                    return "March"
                    case 3:
                    return "April"
                    case 4:
                    return "May"
                    case 5:
                    return "June"
                    case 6:
                    return "July"
                    case 7:
                    return "August"
                    case 8:
                    return "September"
                    case 9:
                    return "October"
                    case 10:
                    return "November"
                    case 11:
                    return "December"

                    default:
                        return "none"
                    
    }
   

}











    return(
        <>
       <ShowDate day={getDay(new Date().getDay())} Greeting={getGreeting(new Date().getHours())} month={getMonth(new Date().getMonth())} />
         {getyear(new Date().getFullYear())}  {getseason(new Date().getMonth())}
         </>
    )
}

export default fun

