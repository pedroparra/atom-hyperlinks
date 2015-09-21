'use babel';

class AtomHyperlinksView extends HTMLElement {

	initialize(statusBar) {
		this.renderLinks = atom.config.get('atom-hyperlinks.linksArray').split(';');
		this.classList.add('atom-hyperlinks', 'inline-block');
		this.render();
		statusBar.addRightTile({priority: 0, item: this});
	}

	buildLink(link) {
		this.xlink = document.createElement('a');
		this.xlink.href = link;
		this.xlink.classList.add('atom-hyperlinks-item');
		this.xlink.style.backgroundImage = `url(${link}/favicon.ico)`;
		this.appendChild(this.xlink);
	}

	render() {
		for (const loadLink of this.renderLinks) {
			this.buildLink(loadLink);
		}
	}
}

export default document.registerElement('atom-hyperlinks', {prototype: AtomHyperlinksView.prototype, extends: 'div'});
