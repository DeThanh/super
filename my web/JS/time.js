//clock   
   function updateClock(){
        var now=new Date();
        var dname= now.getDay();
            mo = now.getMonth();
            dnum= now.getDate();
            yr= now.getFullYear();
            hou=now.getHours();
            min=now.getMinutes();
            sec=now.getSeconds();
            pe= "AM";

            if(hou == 0){
                hou = 12;
            }
            if(hou>12){
                hou=hou-12;
                pe="PM";
            }

            Number.prototype.pad = function(digits){
                for(var n=this.toString();n.length <digits;n=0+n);
                return n;
            }
        
        var months =["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
        var week = ["SUNDAY", "MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
        var ids = ["dayname","month","daynum","year","hour","minutes","seconds","period"];
        var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
        for(var i =0;i<ids.length;i++) {
            document.getElementById(ids[i]).firstChild.nodeValue = values[i];
        }
    }
        function initClock(){
            updateClock();
            window.setInterval("updateClock()",1);
        }

// //turn off right click
//       document.addEventListener("contextmenu", function(e){
//     e.preventDefault();
// }, false);    

// //disble inspect element
// document.onkeydown = function(e) {
//         if (e.ctrlKey && 
//             (e.keyCode === 67 || 
//              e.keyCode === 86 || 
//              e.keyCode === 85 || 
//              e.keyCode === 117)) {
//             return false;
//         } else {
//             return true;
//         }
// };
// $(document).keypress("u",function(e) {
//   if(e.ctrlKey)  {
//     return false;
// }else{
//     return true;
// }
// });
// //disable f12
// $(document).keydown(function (event) {
//     if (event.keyCode == 123) { // Prevent F12
//         return false;
//     } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
//         return false;
//     }
// });