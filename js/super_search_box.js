// SuperSearchBox控件
class SuperSearchBox extends HTMLElement {
	// CONSTRUCTOR
	constructor() {
		super();
		// 基本
		this._shadow = this.attachShadow({
			mode: "open"
		});
		// 布局
		this._wrap = document.createElement("table");
		this._shadow.appendChild(this._wrap);
		// 标题
		var _title = document.createElement("h3");
		_title.innerHTML = "超级搜索";
		this._wrap.appendChild(_title);
		// 搜索框
		var _search_div = document.createElement("div");
		_search_div.className = "search_div";
		this._wrap.appendChild(_search_div);
		this.search_input = document.createElement("input");
		_search_div.appendChild(this.search_input);
		this._search_button = document.createElement("button");
		this._search_button.innerHTML = "搜索";
		_search_div.appendChild(this._search_button);
		// 快捷按钮
		this._ssb_sic = document.createElement("search-item-container");
		this._ssb_sic.setAttribute("weblist", "json/search.json");
		this._wrap.append(this._ssb_sic);
		// CSS STYLES
		// 注意: 只能在这里或者用@IMPORT
		this._styles = document.createElement("style");
		this._styles.textContent = `
		table {
			display: block;
		}
		.search_div {
			display: grid;
			grid-template-columns: auto 80px;
			grid-template-rows: 100%;
			grid-gap: 0px 5px;
			justify-items: stretch;
		}
		h3 {
			grid-row: 1 / 2;
			font-size: 20px;
			text-align:center;
			margin: 10px;
		}
		`;
		// 添加样式
		this._shadow.appendChild(this._styles);
	
		// 鼠标点击事件
		// JS的奇妙特性
		this.superSearch = this.superSearch.bind(this);
		this._search_button.onclick = this.superSearch;
		
		// 回车事件
		this.pressEnter = this.pressEnter.bind(this);
		this.search_input.onkeypress = this.pressEnter;
	}

	superSearch() {
		var s_target = this.search_input.value;
		if (isEmpty(s_target)) {
			return;
		}
		console.log("开始超级搜索:" + s_target);
		var sitepre_list = this._ssb_sic.getSitePreList();
		for (var i=0;i<sitepre_list.length;i++)
		{
			window.open(sitepre_list[i] + s_target, "_blank");
		}
	}

	pressEnter(e) {
		if (e.keyCode == 13) {
			// 回车
			this.superSearch();
		}
	}
	
	connectedCallback() {
		console.log("Connected");
	}
	disconnectedCallback() {
		console.log("Disconnected");
	}
	adoptedCallback() {
		console.log("Adopted");
	}
}

// 注册，名称里必须有-
customElements.define("super-search-box", SuperSearchBox);
