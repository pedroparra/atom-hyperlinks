'use babel';
import Helper from '../lib/atom-hyperlinks-helper';
import {Fixturelinks} from './fixture-links';

describe('Helper Methods', () => {
	beforeEach(() => {
	});

	describe('Helper Method ::clearLink()', () => {
		it('clear links', () => {
			expect(Helper.clearLink()).toBeDefined();
			// Test Bad Links
			Fixturelinks.badLinks.map(link => {
				expect(Helper.clearLink(link.test)).toBe(false);
			});
			// Test Good Llinks
			Fixturelinks.goodLinks.map(link => {
				expect(Helper.clearLink(link.test)).toBe(link.result);
			});
		});
	});

	xdescribe('Helper Method ::getFavicon(url, callback)', () => {
		it('get favicon or get default favicon ::getFavicon()', (done) => {
			// Test Bad Links
			// Fixturelinks.badLinks.map(link => {
			// 	Helper.getFavicon(link.test, finalUrl => {
			// 		expect(finalUrl).toBe(false);
			// 	});
			// });
			promise.then((dataUrl) => {
				Fixturelinks.goodLinks.map(link => {
					Helper.getFavicon(link.test, finalUrl => {

					});
				});
				done();
			}, done);
		});
	});
});
