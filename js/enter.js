// 一些函数

function isEmpty(str) {
	if (str == null) {
		return true;
	}
	if (str.length == 0) {
		return true;
	}
	var re = new RegExp("^[ ]+$");
	return re.test(str);
}
