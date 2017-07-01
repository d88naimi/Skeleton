
// function debounce(cb, wait) {
// 	var timeout;
// 	return function(...args) {
// 		var self = this;
// 		if(timeout) {
// 			clearTimeout(timeout);
// 		}
// 		timeout = setTimeout(function() {
// 			cb.apply(self, args);
// 			timeout = null;
// 		}, wait);
// 	};
// };


export function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};