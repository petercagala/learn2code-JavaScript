/**
 * Kedze su tam zatvorky, tak to bude samospustajuca sa funkcia
 * async funkcia bude bezet asynchronne s inymi funkciami
 * @returns {Promise<void>}
 */
(async function doStuff() {
    try {
        // Teraz chcem, aby funkcia cakala na vysledok tejto akcie pomocou klucoveho slova await
        // Program vyskoci z tejto asynchronnej funkcie naspat von a vrati sa vtedy, ked sa dokonci prikaz,
        // pred ktorym je await
        let comments = await get("https://jsonplaceholder.typicode.com/comments");
        // comments = JSON.parse(comments);

        let post = await get("https://jsonplaceholder.typicode.com/posts/" + comments[0].postId);
         // post = JSON.parse(post);

        let user = await get("https://jsonplaceholder.typicode.com/users/" + post.userId);
         // user = JSON.parse(user);

        console.log(user,  user.name);
    } catch (err) {
        console.error("Toto bude nejaky error z try catch", err);
    }
} ()
)



function get(url) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function () {
            if (req.status == 200) {
                // Vysledny JSON naparsuj do normalneho setu objektov
                resolve(JSON.parse(req.response));
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