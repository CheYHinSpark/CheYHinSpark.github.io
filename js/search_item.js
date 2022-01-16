// SearchItem控件
class SearchItem extends HTMLElement {
	// CONSTRUCTOR
	constructor() {
		super();
		// 属性
		this.sitepre = "";
		// 基本
		this._shadow = this.attachShadow({
			mode: "open"
		});
		// 外围div
		this._wrap = document.createElement("div");
		this._wrap.className = "si_wrap";
		this._shadow.appendChild(this._wrap);
		// 图标
		this._icon = document.createElement("img");
		this._icon.className = "si_icon_on";
		this._wrap.appendChild(this._icon);
		// 是否开启
		this._checkbox = document.createElement("input");
		this._checkbox.setAttribute("type", "checkbox");
		this._checkbox.className = "si_cb_off";
		this._wrap.appendChild(this._checkbox);
		// CSS STYLES
		// 注意: 只能在这里或者用@IMPORT
		this._styles = document.createElement("style");
		this._styles.textContent = `
		@keyframes box_in
		{
			from {opacity: 0;}
			to {opacity: 1;}
		}
		.si_wrap {
			animation: box_in 1s;
			display: grid;
			grid-template-columns: auto 12px;
			grid-template-rows: auto 12px;
			grid-gap: 0px 0px;
			width: 36px;
		}
		img {
			grid-column: 1 / 3;
			grid-row: 1 / 3;
			border-radius: 5px;
			width: 100%;
		}
		input {
			grid-column: 2 / 3;
			grid-row: 2 / 3;
			margin: -2px;
			z-index: 10;
		}
		.si_cb_on {
			opacity: 1;
		}
		.si_cb_off {
			opacity: 0.4;
		}
		.si_icon_on {
			opacity: 1;
		}
		.si_icon_off {
			opacity: 0.6;
		}
	`;
		// 添加样式
		this._shadow.appendChild(this._styles);

		// 鼠标悬浮
		this.onmouseenter = function() {
			this._checkbox.className = "si_cb_on";
		};
		this.onmouseleave = function() {
			this._checkbox.className = "si_cb_off";
		};

		// 勾选框函数
		this.checkedChange = this.checkedChange.bind(this);
		this._checkbox.onclick = this.checkedChange;

		// 点击出击
		this.iconClick = this.iconClick.bind(this);
		this._icon.onclick = this.iconClick;
	}

	// 监听属性改变
	static get observedAttributes() {
		return ["icon", "intro", "sitepre", "checked"];
	}
	attributeChangedCallback(name, oldVal, newVal) {
		if (name == "icon") {
			this._icon.src = newVal;
		}
		if (name == "intro") {
			this.title = newVal;
		}
		if (name == "sitepre") {
			this.sitepre = newVal;
		}
		if (name == "checked") {
			if (newVal == "0" || newVal == "false" || newVal == false) {
				this._checkbox.checked = false;
			} else {
				this._checkbox.checked = true;
			}
			this.checkedChange();
		}
	}

	isChecked() {
		return this._checkbox.checked;
	}

	checkedChange() {
		if (this._checkbox.checked == true) {
			this._icon.className = "si_icon_on";
		} else {
			this._icon.className = "si_icon_off";
		}
	}

	iconClick() {
		var s_target = document.getElementById("ssb").search_input.value;
		if (isEmpty(s_target)) {
			return;
		}
		window.open(this.sitepre + s_target, "_blank");
	}

	// 默认
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
customElements.define("search-item", SearchItem);

// SearchItemContainer控件
class SearchItemContainer extends HTMLElement {
	// CONSTRUCTOR
	constructor() {
		super();
		// 基本
		this._shadow = this.attachShadow({
			mode: "open"
		});
		// 外围div
		this._wrap = document.createElement("div");
		this._shadow.appendChild(this._wrap);
		// 容器
		this._table = document.createElement("div");
		this._table.className = "sic_table";
		this._wrap.appendChild(this._table);
		// CSS STYLES
		// 注意: 只能在这里或者用@IMPORT
		this._styles = document.createElement("style");
		this._styles.textContent = `
		.sic_table {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(36px, 1fr));
			grid-gap: 3px 3px;
			margin: 3px;
			justify-items: center;
		}
	`;
		// 添加样式
		this._shadow.appendChild(this._styles);
	}

	// 监听属性改变
	static get observedAttributes() {
		return ["weblist"];
	}
	attributeChangedCallback(name, oldVal, newVal) {
		if (name == "weblist") {
			this.createItem(newVal);
		}
	}

	createItem(jsonUrl) {
		/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
		var request = new XMLHttpRequest();
		request.open("get", jsonUrl); /*设置请求方法与路径*/
		request.send(null); /*不发送数据到服务器*/
		var this_table = this._table;
		request.onload = function() {
			/*XHR对象获取到返回信息后执行*/
			if (request.status == 200) {
				/*返回状态为200，即为数据获取成功*/
				var json = JSON.parse(request.responseText);
				for (var i = 0; i < json.length; i++) {
					var new_item = document.createElement("search-item");
					new_item.setAttribute("icon", json[i].icon);
					new_item.setAttribute("intro", json[i].intro);
					new_item.setAttribute("sitepre", json[i].sitepre);
					new_item.setAttribute("checked", json[i].checked);
					this_table.appendChild(new_item);
				}
			}
		}
	}

	getSitePreList() {
		var childlist = this._table.childNodes;
		var sitepre_list = [];
		for (var i = 0; i < childlist.length; i++) {
			if (childlist[i].isChecked()) {
				sitepre_list.push(childlist[i].sitepre);
			}
		}
		return sitepre_list;
	}

	// 默认
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
customElements.define("search-item-container", SearchItemContainer);
