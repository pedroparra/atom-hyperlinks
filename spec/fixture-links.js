'use babel';
import config from '../lib/config';
export const Fixturelinks = {
	badLinks: [
		{
			test: '???????',
			result: config.defaultFavicon
		},
		{
			test: 'www.facebook.com/Google/',
			result: config.defaultFavicon
		}
	],
	goodLinks: [
		{
			test: 'https://www.facebook.com/Google/',
			result: 'www.facebook.com'
		},
		{
			test: 'https://www.facebook.com',
			result: 'www.facebook.com'
		}
	]
};
