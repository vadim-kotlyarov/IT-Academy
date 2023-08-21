const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonDir: './test_report/',
    output: './test_report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Version": "0.1.2",
        "Browser": "Chrome 115.0.5790.173",
        "Platform": "Windows 10 Pro",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    },
    failedSummaryReport: true,
};

reporter.generate(options);