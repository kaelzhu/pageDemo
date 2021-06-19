class Container {
	constructor(element) {
		this.element = element
		const { x, y, width, height } = element.getBoundingClientRect()
		this.x = x
		this.y = y
		this.width = width
		this.height = height
	}

	hasChild(target) {
		return this.element.innerHTML.includes(target.getInnerHTML())
	}

}


class ShareThis {
	constructor({ container, className, text }) {
		this.container = container
		this.className = className
		this.text = text
	}

	generatePopover(root, range) {
		const { x, y, width, height } = range.getBoundingClientRect()

		const ele = document.createElement('div')
		ele.innerText = this.text
		ele.classList.add(this.className)
		ele.style.left = (x - this.container.x + width / 2)+ 'px'
		ele.style.top = (y - this.container.y + height / 2 - 50) + 'px'
		setTimeout(() => {
			ele.style.top = (y - this.container.y + height / 2) + 'px'
		}, 100)
		ele.addEventListener('mousedown', () => {
			console.log('clicked')
		})
		root.appendChild(ele)
	}

	
	remove() {
		let s = document.querySelector('.' + this.className)
		if (s !== null) s.remove()
	}
}
