module.exports = {
    "extends": "eslint:recommended",
    "env":{
        "browser": true,
        "node": true,
        "amd": true,
        "jquery": true,
        "es6": true
    },
    "globals": {
        "document": true,
        "navigator": true,
        "window": true,
        "angular": true,
        "fustyFlowFactory": true,
        "Analytics": true,
        "use strict": true,
        "AMap": true
    },
    "rules":{
        "vars-on-top": 0,
        "eqeqeq": 0,
        "no-param-reassign": 0,
        "strict": 0,
        "no-unused-vars": 0,
        "require-jsdoc": 0,
        "space-before-function-paren": 0,
        "no-console": 0
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    }
};