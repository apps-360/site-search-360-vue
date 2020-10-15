'use strict';

import SiteSearch360 from './SiteSearch360.vue';

function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component('SiteSearch360', SiteSearch360);
}

const plugin = {
	install
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

SiteSearch360.install = install;

export default SiteSearch360;