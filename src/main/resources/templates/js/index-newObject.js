// var myObject = function getMyObject() {
//     var peter = "peter";
//     var katka = "katka";
//     var milan = "milan";
//
//     return {
//         peter,
//         katka,
//         milan
//     };
// };

var myObject = getMyObject();

var myAllObject = getMyAllObject();

var mySumNames = myObject.getSumNames();

    function getMyObject() {
        var peter = "peter";
        var katka = "katka";
        var milan = "milan";
        return {
            peter,
            katka,
            milan,
            getSumNames: function() {
                return peter + katka + milan;
            }
        };
    };

    function getMyAllObject() {
        var peter = myObject.peter;
        var katka = getMyObject().katka;
        var milan = getMyObject().milan;
        var sumNames = getMyObject().getSumNames();
        return {
            peter,
            katka,
            milan,
            sumNames
        }
    }