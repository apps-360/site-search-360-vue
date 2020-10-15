
[![site search 360 logo](sitesearch360.svg)](https://sitesearch360.com/)

# Site Search 360 Vue Component
The Site Search 360 Vue component provides a simple way of adding [Site Search 360](https://sitesearch360.com) to your Vue app.

## Installation
If you are using NPM:
```
npm install site-search-360-vue
```

If you are using Yarn:
```
yarn add site-search-360-vue
```

## Usage
To add Site Search 360 (search box and a search button) to your site, use the `SiteSearch360` component.

```js
import SiteSearch360 from 'site-search-360-vue';

<SiteSearch360 siteId="yoursite.com" />

// OR in vanilla JS

createElement(SiteSearch360, {
	props: {
		siteId: 'yoursite.com'
	}
})

```

Make sure to use your `siteId` to connect the search to your account. The value of the `siteId` prop can be found under **Account > Profile** after [signing up to Site Search 360](https://control.sitesearch360.com/signup).

## Props

#### `siteId` (String)
The Site ID of your Site Search 360 account. This setting can also be set in the `ss360Config` prop.

#### `ss360Config` (Object)
Site Search 360 configuration object. See the [Site Search 360 installation docs](https://docs.sitesearch360.com/installation?ss360SearchTerm=Configuration%20Options) for more details.

#### `showButton` (Boolean)
Whether to display a search button. Default: `true`

#### `applyStyling` (Boolean)
Whether to apply default styling to the search input. Default: `true`