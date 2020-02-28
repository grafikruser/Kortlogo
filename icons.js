const path = require('path')

module.exports = {
    "paypal": {
        "name": "Paypal",
        "src": {
            "original": "assets/paypal.svg",
            "alt": `${path.resolve(__dirname, '/assets/paypal-alt.svg')}`,
            "test": "hej"
        }
    }
}