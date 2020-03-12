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