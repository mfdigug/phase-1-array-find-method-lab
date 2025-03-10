
function superbowlWin(array) {
    
    const recordWin = array.find(function(element) {
       return element.result === "W";
    })
    
    return recordWin ? recordWin.year : recordWin;

} 
