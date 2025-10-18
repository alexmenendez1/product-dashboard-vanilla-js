const idk = new Promise (function(resolve, reject)) {
    console.log("Checking...");
    setTimeout(() => {
        const success = true; // Simulate success or failure
        if (success) {
            resolve("Operation successful!");
        } else {
            reject("Operation failed.");
        },3000);
    };
);  