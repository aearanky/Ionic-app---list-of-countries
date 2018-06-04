// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = (config) => {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            // require('karma-coverage-istanbul-reporter'),
            // require('@angular/cli/plugins/karma')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true
        },
        angularCli: {
            environment: 'dev'
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        /* Avoid Angular 4 testing errors. Also used in ng-core
         https://github.com/LabShare/ng-core/blob/master/test/karma.conf.js#L35 */
        browserNoActivityTimeout: 50000,
        singleRun: false,

        files: [
            {pattern: './src/test.ts', watched: false},
            'node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css'
        ]
    });
};