// This file is a copy of the eponymous file in iTwons obtain with the command
// wget https://raw.githubusercontent.com/iTowns/itowns/master/.eslintrc.js
module.exports = {
 'extends': [
   'eslint-config-airbnb-base',
   'eslint-config-airbnb-base/rules/strict',
 ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true
    }
  },
 settings: {
     'import/resolver': {
         'webpack': {}
     }
 },
  env: {
    browser: true,
    es6: true,
    amd: true,
    commonjs: true
  },
  rules: {
    'no-plusplus': 'off',
    // this option sets a specific tab width for your code
    // http://eslint.org/docs/rules/indent
    indent: ['error', 4, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      }
    }],
    'one-var': ['error', 'never'],
    'valid-jsdoc': ['error', {
      requireReturn: false,
      requireParamDescription: false,
      requireReturnDescription: false,
    }],
    // TODO reactivate this rule once a proper npm package is made
    // a good configuration might be:
    /*'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['test/**', 'tests/**', 'examples/**'],
    }],*/
    'import/no-extraneous-dependencies': 'off',

    // TODO reactivate all the following rules

    // maybe 'no-mixed-operators': ['error', { allowSamePrecedence: true }],
    'no-mixed-operators': 'off',
    'no-use-before-define': 'off',
    // should probably be
    // 'no-underscore-dangle': ['error', { allowAfterThis: true, allowAfterSuper: true }],
    'no-underscore-dangle': 'off',
    'eqeqeq': 'off',
    // what len ? Airbnb does 100. github wraps line above 80
    'max-len': 'off',
    'no-param-reassign': 'off',
    'no-else-return': 'off',
    'no-var': 'off',
    'vars-on-top': 'off',
    'no-shadow': 'off',
    'no-restricted-properties': 'off',
    'prefer-spread': 'off',
    'camelcase': 'off',
    'no-bitwise': 'off',
    'no-restricted-syntax': 'off',
    'consistent-return': 'off',
    'brace-style': 'off',
    'new-cap': 'off',
    'no-continue': 'off',
    'no-multi-spaces': 'off'
  },
  "globals": {
    "__DEBUG__": false
  }
}
