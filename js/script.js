`use strict`

function showDifference() {
    console.log("Starting...");

    for (let i = 0; i < 2; i++) {
        var a = i;
        let b = i;
        const c = i;

        console.log("Всередині циклу:");
        console.log("var:", a);
        console.log("let:", b);
        console.log("const:", c);
    }

    console.log("Finishing...");

    console.log("var:", a);

    try {
        console.log("let:", b);
    } catch (e) {
        console.log("let unavailable outside the loop");
    }

    try {
        console.log("const:", c);
    } catch (e) {
        console.log("const unavailable outside the loop");
    }
}

showDifference();
