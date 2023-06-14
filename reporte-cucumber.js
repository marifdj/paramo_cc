const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: 'cypress/reportes',
	metadata:{
        browser: {
            name: 'chrome',
            version: '88'
        },
        device: 'Local test machine',
        platform: {
            name: 'Linux',
            version: '16.04'
        }
    },
    customData: {
        title: 'Proyecto de automatización sobre casino site',
        data: [
            {label: 'Project', value: 'paramo'},
            {label: 'Release', value: '1.0.0'}
        ]
    }
});
