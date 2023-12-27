export const currencyFormat=(number:number|undefined)=>{
    if(number){
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number)
    }
    return number
}