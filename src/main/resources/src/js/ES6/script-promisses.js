var promise = get("https://itunes.apple.com/search?term=kolowrat");

promise.then(
    result => console.log(JSON.parse(result))
);

promise.catch(
    // error => console.error(error, "Oh no, it is my false")
);

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