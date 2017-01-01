'use strict';

import webdriver from 'selenium-webdriver';
import SauceLabs from 'saucelabs';

async function main() {
    const username = "YOUR_SAUCE_USERNAME",
        accessKey = "YOUR_SAUCE_ACCESS_KEY",
        By = webdriver.By,
        saucelabs = new SauceLabs({
            username: username,
            password: accessKey
        });

    let driver = new webdriver.Builder()
        .usingServer("https://" + username + ":" + accessKey +
            "@ondemand.saucelabs.com:443/wd/hub")
        .withCapabilities({
            'browserName': 'chrome',
            'platform': 'Windows 7',
            'version': '43.0',
            'username': username,
            'accessKey': accessKey
        }).build(),
        testPassed = false;

    const sessionId = (await driver.getSession()).id_;

    driver.get('http://saucelabs.github.io/training-test-page/');
    driver.findElement(By.id('i am a link')).click();

    const title = await driver.getTitle();

    if (title === 'I am another page title - Sauce Labs') {
        testPassed = true;
    }

    await driver.quit();

    saucelabs.updateJob(sessionId, {
        name: 'Sample test',
        passed: testPassed
    });
}

main();