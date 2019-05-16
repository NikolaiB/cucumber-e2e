var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: 'test/report/cucumber_report.json',
    output: 'test/report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version":"0.0.1",
        "Test Environment": "TEST",
        "Browser": "Chrome 73",
        "Platform": "Mac OS",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);
