'use babel';
import {CompositeDisposable} from 'event-kit';
import AtomHyperlinksView from './atom-hyperlinks-view';

const plugin = {};
const myStatusBar = new AtomHyperlinksView();
let subscriptionMain = null;

// Configs
export const config = plugin.config = {
	linksArray: {
		title: 'List of links',
		type: 'string',
		default: 'https://facebook.com;https://twitter.com',
		description: 'Separar los links con ";"',
		order: 1
	}
};

const showConfig = () => {
	atom.workspace.open('atom://config/packages/atom-hyperlinks');
};

export const consumeStatusBar = plugin.consumeStatusBar = statusBar => {
	myStatusBar.initialize(statusBar);
};

export const activate = plugin.activate = () => {
	subscriptionMain = new CompositeDisposable();
	subscriptionMain.add(atom.commands.add('atom-workspace', 'atom-hyperlinks:showConfig', showConfig));
};

export const deactivate = plugin.deactivate = () => {
	subscriptionMain.dispose();
};

export default plugin;
