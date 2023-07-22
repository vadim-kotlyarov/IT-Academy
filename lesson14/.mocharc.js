module.exports = {
    'allow-uncaught': false,
    'async-only': false,
    bail: false,
    'check-leaks': false,
    color: true,
    delay: false,
    diff: true,
    exit: false, // could be expressed as "'no-exit': true"
    extension: ['js', 'cjs', 'mjs'],
    'fail-zero': true,
    'forbid-only': false,
    'forbid-pending': false,
    'full-trace': false,
    growl: false,
    'inline-diffs': false,
    package: './package.json',
    parallel: true,
    recursive: false,
    reporter: 'mochawesome',
    'reporter-option': [{
        reporter: 'mochawesome',
        reporterOptions: {
            reportFilename: 'customReportFilename',
            quiet: true,
        },
    }], // array, not object
    retries: 1,
    slow: '75',
    sort: false,
    spec: ['test/**/*.spec.js'], // the positional arguments!
    timeout: '5000', // same as "timeout: '2s'"
    // timeout: false, // same as "timeout: 0"
    'trace-warnings': true, // node flags ok
    ui: 'bdd',
    watch: false,
    'watch-files': ['lib/**/*.js', 'test/**/*.js'],
    'watch-ignore': ['lib/vendor']
};