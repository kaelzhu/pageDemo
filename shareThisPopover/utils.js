function throttle(func, wait) {
	let _lastTime = null
	return function () {
		let args = arguments,
			context = this
		let _nowTime = Date.now()
		if (_nowTime - _nowTime > wait || !_lastTime) {
			func.apply(context, args)
			_lastTime = Date.now()
		}
	}

}

function debounce(fn, wait, immediate = true) {
	let timer
	return function () {
		let context = this,
			args = arguments
		let later = function () {
			timer = null
			if (!immediate) fn.apply(context, args)
		}
		if (immediate && !timer) fn.apply(context, args)
		clearTimeout(timer)
		timer = setTimeout(later, wait)
	}
}
