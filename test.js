let date = new Date();
    today = date.getDate();
    
    yeaterday = date.setDate(today-5+1);
    pramsDate = new Date(yeaterday);
    pramsDay = pramsDate.getDate() +"";
    pramsMonth = pramsDate.getMonth()+1+"";
pramsDay = pramsDay.length===1?"0" +pramsDay:pramsDay;
pramsMonth = pramsMonth.length === 1?"0" +pramsMonth :pramsMonth;
let prams = pramsDate.getFullYear()+""+pramsMonth+pramsDay;
console.log(prams);

