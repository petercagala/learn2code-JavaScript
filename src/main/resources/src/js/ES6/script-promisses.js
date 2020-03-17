// REQ https://itunes.apple.com/search?term=kolowrat je nejaky dodzubany
// var promise = get("https://itunes.apple.com/search?term=kolowrat");
get("https://jsonplaceholder.typicode.com/comments")
    .then(
    result => console.log(JSON.parse(result)),
    error => console.error(error, "Oh no, it is my false")
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