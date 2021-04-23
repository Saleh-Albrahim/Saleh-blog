module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "no-unused-vars": 0
    },
    "globals": {
        "errorAlert": true,
        "successAlertTimer": true,
        "Swal": true
    }
};
