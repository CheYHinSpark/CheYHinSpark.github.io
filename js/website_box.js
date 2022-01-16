// WebsiteBox控件
class WebsiteBox extends HTMLElement {
	// CONSTRUCTOR
	constructor() {
		super();
		// 基本
		this._shadow = this.attachShadow({
			mode: "open"
		});
		// 外围超链接
		this._wrap = document.createElement("a");
		this._wrap.className = "wb_wrap";
		this._wrap.target = "_blank";
		this._shadow.appendChild(this._wrap);
		// 图标
		this._icon = document.createElement("img");
		this._icon.className = "wb_ldiv";
		this._wrap.appendChild(this._icon);
		// 名称
		this._name = document.createElement("span");
		this._name.className = "wb_rdiv1";
		this._wrap.appendChild(this._name);
		// 介绍
		this._intro = document.createElement("span");
		this._intro.className = "wb_rdiv2";
		this._wrap.appendChild(this._intro);
		// CSS STYLES
		// 注意: 只能在这里或者用@IMPORT
		this._styles = document.createElement("style");
		this._styles.textContent = `
		@keyframes box_in
		{
			from {opacity: 0;}
			to {opacity: 1;}
		}
		.wb_wrap {
			animation: box_in 1s;
			display: grid;
			grid-template-columns: 50px auto;
			grid-template-rows: 64% 36%;
			grid-gap: 0px 10px;
			justify-items: left;
			text-decoration:none;
			color: black;
			padding: 5px;
			margin: 5px;
			background: #eee;
			border: 1.5px solid #ddd;
			border-radius:10px;
		}
		.wb_ldiv {
			grid-column: 1 / 2;
			grid-row: 1 / 3;
		}
		.wb_rdiv1 {
			grid-column: 2 / 3;
			grid-row: 1 / 2;
			font-size: 18px;
		}
		.wb_rdiv2 {
			grid-column: 2 / 3;
			grid-row: 2 / 3;
			font-size: 12px;
		}
		img {
			float: left;
			width: 50px;
			border-radius: 5px;
		}
		a {
			font-size: 10px;
		}
	`;
		// 添加样式
		this._shadow.appendChild(this._styles);

		this.onmouseenter = function() {
			//this._wrap.className = "div_enter";
		};
		this.onmouseleave = function() {
			//this._wrap.className = "div_leave";
		};
	}

	// 监听属性改变
	static get observedAttributes() {
		return ["icon", "webname", "intro", "site"];
	}
	attributeChangedCallback(name, oldVal, newVal) {
		if (name == "icon") {
			this._icon.src = newVal;
		}
		if (name == "webname") {
			this._name.innerHTML = newVal;
		}
		if (name == "intro") {
			this._intro.innerHTML = newVal;
		}
		if (name == "site") {
			this._wrap.href = newVal;
			this.title = newVal;
		}
	}

	connectedCallback() {
		console.log("Connected: " + this._name.innerHTML);
	}
	disconnectedCallback() {
		console.log("Disconnected: " + this._name.innerHTML);
	}
	adoptedCallback() {
		console.log("Adopted: " + this._name.innerHTML);
	}
}

// 注册，名称里必须有-
customElements.define("website-box", WebsiteBox);
