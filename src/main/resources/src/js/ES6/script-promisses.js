// REQ https://itunes.apple.com/search?term=kolowrat je nejaky dodzubany
// var promise = get("https://itunes.apple.com/search?term=kolowrat");

// var promise = get("https://itunes.apple.com/search?term=kolowrat");

get("https://jsonplaceholder.typicode.com/posts")
    .then(JSON.parse) // posleme to do dalsieho then
    .then(result => {
        get("https://jsonplaceholder.typicode.com/users/" + result[0].userId);
    })
    .then(JSON.parse)
    .then(
        results => console.log(results)
    )
    .catch(reason => console.log("Je to v prdeli", reason))
;

// let timer1 = start(1, 5000).then(res => console.log(res));
// let timer2 = start(2, 1000).then(res => console.log(res));
// let timer3 = start(3, 2500).then(res => console.log(res));
//
//
//
// console.log("Vsetko je krasne spustne");
//
// timer1.then(
//     res => {
//         console.log("Opat vysledky timer1:" + res);
//         console.log("Hello again timer1!!!");
//     }
// );

// !!! Pozor v Prosmise.all musi byt ako argument pole prosisov
// Promise.all([timer1, timer2,  timer3])
//     .then(res => console.log("all done", res))
//     .catch(error => console.error("somethimes happen", error))
// ;

// Vykona sa, ked je promise hotovy ako prvy
// Promise.race([timer1, timer2,  timer3])
//     .then(res => console.log("all done", res))
//     .catch(error => console.error("somethimes happen", error))
// ;

/**
 * Skusme spravit casovac, ktory bude vracat promise
 */
function start(id, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`timer ${id} done`),time);
    });
}

/**
 * get funkciu ti vytvori z pravidla nejaka AJAXOVa kniznica. teda aj promise objekt na jej pozadi.
 * @param url
 * @returns {Promise<unknown>}
 */
function get(url) {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response);
            }
            else {
                reject(Error(req.statusText));
            }
        };

        req.onerror = function() {
            reject(Error("Network Error"));
        };

        req.send();
    });
}