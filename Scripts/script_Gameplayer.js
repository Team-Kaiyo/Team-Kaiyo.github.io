class GameEngine {
	constructor() {
	}

	/**
	 * Element is expected to have the screen size specified in the style attribute as it will be used to set the size of the game iframe.
	 */
	async init_game(elem, src, pc_only = false, size = "") {
		let that = this;
		let msg_container = document.createElement("div");
		
		// click to load (replace the message_container with the game iframe)
		msg_container.innerHTML = "Click to load game";
		if (pc_only) {
			msg_container.innerHTML += " (PC only)";
		}
		if (size) {
			msg_container.innerHTML += " (" + size + ")";
		}

		
		// Set styles
		msg_container.style.cursor = "pointer";
		msg_container.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
		// msg_container.style.position = "absolute";
		msg_container.style.width = "100%";
		msg_container.style.height = "100%";
		msg_container.style.display = "flex";
		msg_container.style.justifyContent = "center";
		msg_container.style.alignItems = "center";
		msg_container.style.color = "white";
		msg_container.style.fontSize = "2em";
		msg_container.style.border = "1px solid white";
		msg_container.style.padding = "1em";
		// box-sizing: border-box;
		msg_container.style.boxSizing = "border-box";


		elem.appendChild(msg_container);
		msg_container.onclick = () => {
			that.show_game(elem, src);
			elem.removeChild(msg_container);
		};
	}

	async show_game(elem, iframe_url) {
		`
			<iframe src="https://team-kaiyo-games.onrender.com/Games/Underwater-Exploration/"
				style="border: none;" frameborder="0" width="100%" height="100%">
			</iframe>
		`
		var iframe = document.createElement("iframe");
		iframe.src = iframe_url;
		iframe.style = "border: none;";
		iframe.frameborder = "0";
		iframe.width = "100%";
		iframe.height = "100%";
		elem.appendChild(iframe);
	}

}

var game_engine = new GameEngine();