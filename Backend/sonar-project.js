require('dotenv').config();

const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
    serverUrl: process.env.SONAR_SERVER_URL,
    token : process.env.SONAR_TOKEN,
    options : {
        'sonar.sources': './src',
        'sonar.inclusions': './src/**',
        'sonar.eslint.reportPaths': './reports/eslint-report.json'
    },
}, () => {});