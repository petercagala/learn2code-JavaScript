// (
//     async function () {
//         try {
//             console.log("START");
//
//             // V tomto pripade su timery nastavene SEKVENCNE. Je to vlastne simulacia odozvy jednotlivych volani na servery
//             let timer1 = await start(1, 4000);
//             let timer2 = await  start(2, 1000);
//             let timer3 = await start(3, 2500);
//
//             console.log("EVERYTHING DONE");
//
//         } catch(err) {
//             console.log("Opat nejaky error z tieru", err);
//         }
//     } ()
// );

(
    async function () {
        try {
            console.log("START");

            // V tomto pripade su timery nastavene PARALELNE. Je to vlastne simulacia odozvy jednotlivych volani na servery
            let timer1 =  start(1, 4000);
            let timer2 =   start(2, 1000);
            let timer3 =  start(3, 2500);

            // dalej sa pohneme, az ked vsetky promises dobehnu
            await timer1;
            await timer2;
            await timer3;

            console.log("EVERYTHING DONE");

        } catch(err) {
            console.log("Opat nejaky error z tieru", err);
        }
    } ()
);



/**
 * Skusme spravit casovac, ktory bude vracat promise
 */
function start(id, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log(`timer ${id} done`);
        },
            time)
    });
}