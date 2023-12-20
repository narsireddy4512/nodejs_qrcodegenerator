const qr = require("qrcode");

let data = {
    id: 4512,
    name: "narsireddy challa",
    mail: "nchalla@trccompanies.com"
}

let strData = JSON.stringify(data);

// Using a Promise to handle the asynchronous nature of toString
const generateQRCode = async () => {
    try {
        const code = await qr.toString(strData, { type: 'terminal' });
        console.log(code);
    } catch (err) {
        console.error("Error occurred:", err);
    }
};

// Call the function
generateQRCode();
