module.exports = {
	root: true,
	parserOptions: {
	  parser: 'babel-eslint',
	  sourceType: 'module'
	},
	env: {
	  browser: true
	},
	extends: [
	  'plugin:vue/essential',
	  'airbnb-base'
	],
  
	plugins: [
	  'vue'
	],
	rules: {
	  'no-param-reassign': 'off',
  
	  'import/first': 'off',
	  'import/named': 'error',
	  'import/namespace': 'error',
	  'import/default': 'error',
	  'import/export': 'error',
	  'import/extensions': 'off',
	  'import/no-unresolved': 'off',
	  'import/no-extraneous-dependencies': 'off',
	  'import/prefer-default-export': 'off',
	  'prefer-promise-reject-errors': 'off',
	  'no-debugger': 'error',
	  'linebreak-style': ['error', 'windows'],
	  'no-console': 'off',
	  'indent': ['error', 'tab', {'SwitchCase': 1}],
	  'comma-dangle': ['error', 'never'],
	  'no-tabs': 0,
	  'max-len': ['error', { 'ignoreComments': true, 'tabWidth': 0, 'code': 200 }],
	  'no-shadow': ['error'],
	  'strict': 0,
	  'func-names': ['error', 'never'],
	  'no-param-reassign': 0,
	  'no-plusplus': 0,
	  'prefer-destructuring': ['error', {
		  'array': false
	  }],
	  'eol-last': ['error', 'never'],
	  'no-underscore-dangle': 0,
	  'no-new': 0,
	  'no-unused-vars': ['warn'],
	  'wrap-iife': [2, 'inside'],
	  "vue/html-indent": "warn"
	}
  }
  