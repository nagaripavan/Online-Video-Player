export const API_KEY='AIzaSyAd6RR-m0Ij_iPgPC-wSAvfdTgX1O3B62Q';

export const Value_coneverter =(number)=>{
    if (number>=1000000){
        return Math.floor(number/1000000)+"M";
    }else if(number>=1000){
        return Math.floor(number/1000)+"K";
    }else{
        return number;
    }
}