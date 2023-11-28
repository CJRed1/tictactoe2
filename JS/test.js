/*let hi1 = 0
let hi2 = 1
let hi3 = 4

function checkHi() {
    if (hi1 != 0) {
        window.alert('Line 1 = False')
    } else if (hi1 == 0) {
        window.alert('Line 1 = True')
    }
    
    else if (hi2 == 1) {
        window.alert('Line 2 = True')
    }
}

checkHi()*/

/** Does a 2 value ecuation
 *  @param {number} var1 Float (Def: 0)
 *  @param {number} var2 Float (Def: 0)
 *  @param {string} type String (sum|res|mul|div|pot|mod|hip) (Def: sum)
 *  @returns {string} An alert with the result
 */
function ecu(var1=0, var2=0, type='sum') {
    if (type=='sum'){
        if (var1 + var2 == 0.3){
            window.alert('true')
        }
        else
        {
            window.alert('false')
        }
        window.alert(var1 + var2)
    }else if (type=='res'){
        window.alert(var1 - var2)
    }else if (type=='mul'){
        window.alert(var1 * var2)
    }else if (type=='div'){
        window.alert(var1 / var2)
    }else if (type=='pot'){
        window.alert(var1 ** var2)
    }else if (type=='mod'){
        window.alert(var1 % var2)
    }else if (type=='hip'){
        window.alert(Math.sqrt((var1**2) + (var2**2)))
    }
}