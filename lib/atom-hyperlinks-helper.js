'use babel';
import https from 'https';
const helper = {};

// clearLink Method ////////////////////////////////////
export const clearLink = helper.clearLink = url => {
	if (!url) {
		return false;
	}
	const pattern = /^(http|https)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;
	if (url.match(pattern)) {
		let domain;
		// find & remove protocol (http, ftp, etc.) and get domain
		if (url.indexOf('://') > -1) {
			domain = url.split('/')[2];
		} else {
			domain = url.split('/')[0];
		}
		// find & remove port number
		domain = domain.split(':')[0];
		return domain;
	}
	return false;
};

// getFavicon Method ////////////////////////////////////
// Test /favicon.ico or default
export const getFavicon = helper.getFavicon = (url, callback) => {
	const clearUrl = clearLink(url);
	if (clearUrl !== false) {
		// test favicon
		const options = {
			host: clearUrl,
			path: '/favicon.ico',
			method: 'GET'
		};
		const req = https.request(options, res => {
			// console.log(res.statusCode);
			if (res.statusCode === 200 || res.statusCode === 301) {
				return callback(`${clearUrl}/favicon.ico`);
			}
		});
		req.end();
	}
	return callback(false);
};

export default helper;
