var webdriver = require('selenium-webdriver'),
    username = YOUR_USERNAME,
    accessKey = YOUR_ACCESS_KEY,
    driver;
 
driver = new webdriver.Builder().
  withCapabilities({
    'browserName': 'chrome',
    'platform': 'Windows XP',
    'version': '43.0',
    'username': username,
    'accessKey': accessKey
  }).
  usingServer("http://" + username + ":" + accessKey +
              "@ondemand.saucelabs.com:80/wd/hub").
  build();
 
driver.get('http://saucelabs.com/test/guinea-pig');
 
driver.getTitle().then(function (title) {
    console.log("title is: " + title);
});
 
driver.quit();