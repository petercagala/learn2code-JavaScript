"use strict";

get("https://jsonplaceholder.typicode.com/comments")
    .then(res => {
       let resultParse = JSON.parse(res);
       return resultParse;
    })
    .then(res => {
        let url = "https://jsonplaceholder.typicode.com/posts/" + res[0].postId;
        return get(url);
    })
    .then(res => {
        let resultParse = JSON.parse(res);
        return resultParse;
    })
    .then(res => {
        let url= "https://jsonplaceholder.typicode.com/users/" + res.userId;
        return get(url);
    })
    .then(res => {
        let resultParse = JSON.parse(res);
        return resultParse;
    })
    .then(res => console.log(res));


// alebo kratsie po opraveni chyb a debagu. Ale je to na hovno, lebo vobec nevidis dovnutra a zle sa to debuguhe
// get("https://jsonplaceholder.typicode.com/comments")
//     .then(res => JSON.parse)
//     .then(res => get("https://jsonplaceholder.typicode.com/posts/" + res[0].postId))
//     .then(res => JSON.parse)
//     .then(res => get("https://jsonplaceholder.typicode.com/users/" + res.userId))
//     .then(res => JSON.parse)
//     .then(res => console.log(res));

/**
 * get funkciu ti vytvori z pravidla nejaka AJAXOVa kniznica. teda aj promise objekt na jej pozadi.
 * @param url
 * @returns {Promise<unknown>}
 */
function get(url) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function () {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };

        req.onerror = function () {
            reject(Error("Network Error"));
        };

        req.send();
    });
}