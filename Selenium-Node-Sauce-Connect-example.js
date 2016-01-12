var client = require('webdriverio').remote({
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    host: 'localhost',
    port: 4445,
    desiredCapabilities: {
        browserName: 'chrome'
    }
});
 
client
    .init()
    .url('http://localhost')
    .getTitle().then(console.log)
    .end();