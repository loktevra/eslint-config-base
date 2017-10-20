var E = 'error';
var W = 'warning';

function noRestrictedProperties(objectName, propertyName, message) {
    return {
        object: objectName,
        property: propertyName,
        message: message,
    }
}

module.exports = {
    "extends": "loopback",
    "settings": {
        "import/resolver": {
            "babel-root-import",
            [{
                "rootPathSuffix": "src/client",
                "rootPathPrefix": "@"
            },{
                "rootPathSuffix": "src/server",
                "rootPathPrefix": "$"
            }]
        }
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true,
            "experimentalObjectRestSpread": true,
            "jsx": true
        }
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "rules": {
        'for-direction': E,
        'getter-return': E,
        'no-await-in-loop': E,
        'no-compare-neg-zero': E,
        'no-cond-assign': [E, "always"],
        'no-console': E,
        'no-constant-condition': E,
        'no-control-regex': E,
        'no-debugger': E,
        'no-dupe-args': E,
        'no-dupe-keys': E,
        'no-duplicate-case': E,
        'no-empty': E,
        'no-empty-character-class': E,
        'no-ex-assign': E,
        'no-extra-boolean-cast': E,
        'no-extra-parens': E,
        'no-extra-semi': E,
        'no-func-assign': E,
        'no-inner-declarations': E,
        'no-invalid-regexp': E,
        'no-irregular-whitespace': [E, { "skipStrings": true, "skipRegExps": true, "skipTemplates": true }],
        'no-obj-calls': E,
        'no-prototype-builtins': E,
        'no-regex-spaces': E,
        'no-sparse-arrays': E,
        'no-template-curly-in-string': E,
        'no-unexpected-multiline': E,
        'no-unreachable': E,
        'no-unsafe-finally': E,
        'no-unsafe-negation': E,
        'use-isnan': E,
        'valid-jsdoc': E,
        'valid-typeof': E,
        'accessor-pairs': E,
        'array-callback-return': E,
        'block-scoped-var': E,
        'class-methods-use-this': E,
        'complexity': [E, 2],
        'consistent-return': E,
        'curly': E,
        'default-case': E,
        'dot-location': [E, 'object'],
        'dot-notation': [E, { "allowKeywords": false }],
        'eqeqeq': E,
        'guard-for-in': E,
        'no-alert': E,
        'no-caller': E,
        'no-case-declarations': E,
        'no-div-regex': E,
        'no-else-return': E,
        'no-empty-function': E,
        'no-empty-pattern': E,
        'no-eq-null': E,
        'no-eval': E,
        'no-extend-native': E,
        'no-extra-bind': E,
        'no-extra-label': E,
        'no-fallthrough': E,
        'no-floating-decimal': E,
        'no-global-assign': E,
        'no-implicit-coercion': E,
        'no-implicit-globals': E,
        'no-implied-eval': E,
        'no-invalid-this': E,
        'no-iterator': E,
        'no-labels': E,
        'no-lone-blocks': E,
        'no-loop-func': E,
        'no-magic-numbers': E,
        'no-multi-spaces': E,
        'no-multi-str': E,
        'no-new': E,
        'no-new-func': E,
        'no-new-wrappers': E,
        'no-octal': E,
        'no-octal-escape': E,
        'no-param-reassign': E,
        'no-proto': E,
        'no-redeclare': E,
        'no-restricted-properties': [
            E,
            noRestrictedProperties('_', 'map')
        ],
        'no-return-assign': E,
        'no-return-await': E,
        'no-script-url': E,
        'no-self-assign': E,
        'no-self-compare': E,
        'no-sequences': E,
        'no-throw-literal': E,
        'no-unmodified-loop-condition': E,
        'no-unused-expressions': E,
        'no-unused-labels': E,
        'no-useless-call': E,
        'no-useless-concat': E,
        'no-useless-escape': E,
        'no-useless-return': E,
        'no-void': E,
        'no-warning-comments': W,
        'no-with': E,
        'prefer-promise-reject-errors': E,
        'radix': E,
        'require-await': E,
        'vars-on-top': E,
        'wrap-iife': [E, 'inside'],
        'yoda': E,
        'strict': E,
        'init-declarations': E,
        'no-catch-shadow': E,
        'no-delete-var': E,
        'no-label-var': E,
        'no-restricted-globals': [E, 'event'],
        'no-shadow': E,
        'no-shadow-restricted-names': E,
        'no-undef': E,
        'no-undef-init': E,
        'no-undefined': E,
        'no-unused-vars': E,
        'no-use-before-define': E,
        'callback-return': E,
        'global-require': E,
        'handle-callback-err': E,
        'no-buffer-constructor': E,
        'no-mixed-requires': E,
        'no-new-require': E,
        'no-path-concat': E,
        'no-process-env': E,
        'no-process-exit': E,
        'no-sync': E,
        'array-bracket-newline': [E, { "multiline": true }]
        'array-bracket-spacing': E,
        'array-element-newline': [E, { "multiline": true }],
        'block-spacing': E,
        'brace-style': [E, "1tbs", { "allowSingleLine": true }],
        'camelcase': E,
        'capitalized-comments': E,
        'comma-dangle': [E, "always-multiline"],
        'comma-spacing': E,
        'comma-style': E,
        'omputed-property-spacing': E,
        'consistent-this': [E, '_this'],
        'eol-last': E,
        'func-call-spacing': E,
        'func-name-matching': E,
        'func-names': E,
        'func-style': E,
        'function-paren-newline': E,
        'indent': E,
        'jsx-quotes': E,
        'key-spacing': E,
        'keyword-spacing': E,
        'line-comment-position': E,
        'linebreak-style': [E, 'windows'],
        'lines-around-comment': E,
        'max-depth': E,
        'max-len': E,
        'max-lines': E,
        'max-nested-callbacks': [E, 3],
        'max-params': E,
        'max-statements': E,
        'max-statements-per-line': E,
        'multiline-ternary': [E, 'always-multiline'],
        'new-cap': E,
        'new-parens': E,
        'newline-per-chained-call': E,
        'no-array-constructor': E,
        'no-bitwise': E,
        'no-continue': E,
        'no-inline-comments': E,
        'no-lonely-if': E,
        'no-mixed-operators': E,
        'no-mixed-spaces-and-tabs': E,
        'no-multi-assign': E,
        'no-multiple-empty-lines': [E, { 'max': 2 }],
        'no-negated-condition': E,
    }
}
