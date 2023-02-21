const wdioParallel = require('wdio-cucumber-parallel-execution');
module.exports = function SplitFeatureFiles(config){
    wdioParallel.performSetup({
        sourceSpecDirectory: './tests/features',
        tmpSpecDirectory: './tests/tmp/features',
        cleanTmpSpecDirectory: true
    });
}