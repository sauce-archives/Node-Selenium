var wd = require('wd'),
    desiredCaps = {
        browserName: '',
        appiumVersion: '1.4.16',
        deviceName: 'Samsung Galaxy S4 Emulator',
        platformVersion: '4.4',
        platformName: 'Android',
        name: 'Sample Test',
        app: 'http://appium.s3.amazonaws.com/ContactManager.apk'
    },
    browser = wd.remote("https://" + "YOUR_SAUCE_USERNAME" + ":" + "YOUR_SAUCE_ACCESS_KEY" + "@" + "ondemand.saucelabs.com:443/wd/hub");

browser.init(desiredCaps, function() {
    browser.quit();
});
