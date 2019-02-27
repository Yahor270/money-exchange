// PLEASE DON'T change function name

module.exports = function makeExchange(currency) {
    var ret={}
    if (currency>10000){
       ret.error="You are rich, my friend! We don't have so much coins for exchange"
       console.log(ret)
    return ret
    
    }
    if (currency<=0) return ret
    x=Math.trunc(currency/50)
    if (x>0){
        ret['H']=x 
        currency-=50*x
    }
    x=Math.trunc(currency/25)
    if (x>0) {
        ret['Q']=x
        currency-=25*x
    }  
    x=Math.trunc(currency/10)
    if (x>0) {
        ret['D']=x
        currency-=10*x
    } 
    x=Math.trunc(currency/5)
    if (x>0) {
        ret['N']=x
        currency-=5*x
    }  

    if (currency>0) {
        ret['P']=currency
       
    }  
    return ret 
}
