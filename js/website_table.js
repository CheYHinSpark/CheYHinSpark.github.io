// WebsiteTable控件
class WebsiteTable extends HTMLElement {
	// CONSTRUCTOR
	constructor() {
		super();
		// 基本
		this._shadow = this.attachShadow({
			mode: "open"
		});
		// 表格
		this._table = document.createElement("div");
		this._table.className = "div2";
		this._shadow.appendChild(this._table);
		// 标题
		this._title = document.createElement("h3");
		this._table.appendChild(this._title);
		// CSS STYLES
		// 注意: 只能在这里或者用@IMPORT
		this._styles = document.createElement("style");
		this._styles.textContent = `
		.div2 {
			display: grid;
			grid-template-columns: 50% 50%;
			margin: 5px;
			justify-items: stretch;
		}
		.div3 {
			display: grid;
			grid-template-columns: 33.333% 33.333% 33.333%;
			margin: 5px;
			justify-items: stretch;
		}
		h3 {
			grid-column: 1 / 4;
			grid-row: 1 / 2;
			font-size: 20px;
			text-align:center;
		}
		`;
		// 添加样式
		this._shadow.appendChild(this._styles);
		this.createBox = this.createBox.bind(this);
	}

	createBox(jsonUrl, colNum) {
		var url = jsonUrl; /*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
		var request = new XMLHttpRequest();
		request.open("get", url); /*设置请求方法与路径*/
		request.send(null); /*不发送数据到服务器*/
		var this_table = this._table;
		request.onload = function() {
			/*XHR对象获取到返回信息后执行*/
			if (request.status == 200) {
				/*返回状态为200，即为数据获取成功*/
				var json = JSON.parse(request.responseText);
				// 获得本体的表格div
				this_table.setAttribute("class", "div" + colNum.toString());
				for (var i = 0; i < json.length; i++) {
					var new_box = document.createElement("website-box");
					this_table.appendChild(new_box);
					new_box.setAttribute("icon", json[i].icon);
					new_box.setAttribute("webname", json[i].webname);
					new_box.setAttribute("intro", json[i].intro);
					new_box.setAttribute("site", json[i].site);
					console.log(json[i].webname);
				}
			}
		}
	}

	// 监听属性改变
	static get observedAttributes() {
		return ["tablename", "weblist"];
	}
	attributeChangedCallback(name, oldVal, newVal) {
		if (name == "tablename") {
			this._title.innerHTML = newVal;
		}
		if (name == "weblist") {
			this.createBox(newVal, 3);
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
customElements.define("website-table", WebsiteTable);
