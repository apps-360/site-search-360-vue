<template>
  <section :data-ss360="applyStyling" class="ss360-search">
    <input type="search" :class="searchBoxClassName" />
    <button v-if="showButton" :class="searchButtonClassName"></button>
    <slot></slot>
  </section>
</template>

<script>
const SEARCH_BOX_CLASS_NAME = 'ss360-searchbox';
const SEARCH_BUTTON_CLASS_NAME = 'ss360-searchbutton';

export default {
	name: 'SiteSearch360',
	props: {
		ss360Config: {
			type: Object
		},
		siteId: {
			type: String
		},
		showButton: {
			type: Boolean,
			default: true
		},
		applyStyling: {
			type: Boolean,
			default: true
		},
		alias: {
			type: String
		}
	},
	computed: {
		searchBoxClassName() {
			return this.alias === undefined || this.alias.length === 0 ? SEARCH_BOX_CLASS_NAME : `${SEARCH_BOX_CLASS_NAME}--${this.alias}`;
		},
		searchButtonClassName() {
			return this.alias === undefined || this.alias.length === 0 ? SEARCH_BUTTON_CLASS_NAME : `${SEARCH_BUTTON_CLASS_NAME}--${this.alias}`;
		}
	},
	methods: {
		ensureConfig() {
			// ensure config exists and set selectors
			let ss360Config = window.ss360Config;

			if (ss360Config === undefined || (this.alias !== undefined && this.ss360Config !== undefined)) {
				ss360Config = this.ss360Config;
			}

			if (ss360Config === undefined || !(ss360Config instanceof Object)) {
				ss360Config = {};
			}

			if (ss360Config.searchBox === undefined) {
				ss360Config.searchBox = {};
			}

			const { searchBox } = ss360Config;

			if (searchBox.selector === undefined) {
				searchBox.selector = '';
			}

			if (searchBox.searchButton === undefined) {
				searchBox.searchButton = '';
			}

			let { selector, searchButton } = searchBox;

			if (selector.indexOf(`.${this.searchBoxClassName}`) === -1) {
				if (selector.length > 0) {
					selector = `${selector},`;
				}
				searchBox.selector = `${selector}.${this.searchBoxClassName}`;
			}

			if (searchButton.indexOf(`.${this.searchButtonClassName}`) === -1) {
				if (searchButton.length > 0) {
					searchButton = `${searchButton},`;
				}
				searchBox.searchButton = `${searchButton}.${this.searchButtonClassName}`;
			}

			if (this.siteId !== undefined) {
				ss360Config.siteId = this.siteId;
			}

			if (this.alias === undefined) {
				window.ss360Config = ss360Config;
			} else {
				if (!('ss360Configs' in window)) {
					window.ss360Configs = {};
				}
				window.ss360Configs[this.alias] = ss360Config;
			}
		}
	},
	mounted() {
		this.ensureConfig();
		// TODO: load script lib?
		if (document.getElementById('ss360-script') === null) { // append Site Search 360 script
			const script = document.createElement('script');
			script.setAttribute('defer', 'defer');
			script.setAttribute('id', 'ss360-script');
			script.src = 'https://cdn.sitesearch360.com/v13/sitesearch360-v13.min.js';
			document.getElementsByTagName('body')[0].appendChild(script);
		} else if ('initializeSs360' in window) { // reinitialize script
			window.initializeSs360();
		}
	}
};
</script>