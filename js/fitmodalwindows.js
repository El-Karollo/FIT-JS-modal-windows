class CreateWindow {
	constructor(id, options = {}) {

		let windowclass = options.windowClass || 'window';
		let headerclass = options.headerClass || 'window-header';
		let closeclass = options.closeClass || 'close-btn';
		this.animateOpen = options.openAnimation || 'animate__fadeIn';
		this.animateClose = options.closeAnimation || 'animate__fadeOut';

		this.window = document.createElement('div');
		this.window.id = id;
		this.window.classList.add('animate__animated');
		this.window.classList.add(windowclass);

		if (options.top || options.bottom || options.left || options.right) {
			if (options.top) {
				this.window.style.top = options.top;
			}
			if (options.left) {
				this.window.style.left = options.left;
			}
			if (options.right) {
				this.window.style.right = options.right;
			}
			if (options.bottom) {
				this.window.style.bottom = options.bottom;
			}
		} else {
			this.window.style.top = '50vh';
			this.window.style.left = '50vw';
			this.window.style.transform = 'translate(-50%, -50%)';
		}


		this.window.style.width = options.width;
		this.window.style.height = options.height;

		this.header = document.createElement('div');
		this.header.classList.add(headerclass);

		const headerText = document.createElement('span');
		headerText.innerHTML = options.headerText || 'Demo header!';
		this.header.appendChild(headerText);

		const closeButton = document.createElement('button');
		closeButton.innerHTML = options.closeIcon || 'X';
		closeButton.classList.add(closeclass);
		closeButton.addEventListener('click', () => this.close());
		closeButton.addEventListener('touchend', () => this.close());
		this.header.appendChild(closeButton);
		this.window.appendChild(this.header);

		this.content = document.createElement('div');
		this.content.innerHTML = options.content || '<p>All your content goes here!</p>';
		this.window.appendChild(this.content);

		document.body.appendChild(this.window);

		const closeButtonInsideContent = this.window.querySelector('.close-window-button');
		if (closeButtonInsideContent) {
			closeButtonInsideContent.addEventListener('click', () => this.close());
			closeButtonInsideContent.addEventListener('touchend', () => this.close());
		}

		if (options.draggable) {
			this.dragElement(this.window);
			this.header.classList.add('window-draggable');
		}

		if (options.showAfter) {
			setTimeout(() => this.show(), options.showAfter);
		} else {
			this.show();
		}
	}

	show() {
		this.window.style.display = 'block';
		this.window.classList.add(this.animateOpen);
	}

	close() {
		this.window.classList.remove(this.animateOpen);
		this.window.classList.add(this.animateClose);
		setTimeout(() => {
			this.window.style.display = 'none';
			this.window.classList.remove(this.animateClose);
		}, 500);
	}

	dragElement(elmnt) {
		let pos1 = 0,
			pos2 = 0,
			pos3 = 0,
			pos4 = 0;
		const header = this.header;

		header.onmousedown = (e) => {
			e = e || window.event;
			e.preventDefault();
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = closeDragElement;
			document.onmousemove = elementDrag;
		};

		header.ontouchstart = (e) => {
			e = e || window.event;
			e.preventDefault();
			pos3 = e.touches[0].clientX;
			pos4 = e.touches[0].clientY;
			document.ontouchend = closeDragElement;
			document.ontouchmove = elementDragTouch;
		};

		const elementDrag = (e) => {
			e = e || window.event;
			e.preventDefault();
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
			elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		};

		const elementDragTouch = (e) => {
			e = e || window.event;
			e.preventDefault();
			pos1 = pos3 - e.touches[0].clientX;
			pos2 = pos4 - e.touches[0].clientY;
			pos3 = e.touches[0].clientX;
			pos4 = e.touches[0].clientY;
			elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
			elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		};

		const closeDragElement = () => {
			document.onmouseup = null;
			document.onmousemove = null;
			document.ontouchend = null;
			document.ontouchmove = null;
		};
	}
}
