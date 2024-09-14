class Planet_Page extends PageHandlerTemplate {
	constructor() {
		super();
		this.type = "planet"

		this.href = tools.full_path("/Planet-Gaia-Derinkuyu.html")

		this.my_part = document.getElementById("planet-page")
	}

	async initialize() {
		page.hide_actions_button(); // Hide actions button, not needed here
	}

	clear() {
	}

}

var planet_page = new Planet_Page();

page.handlers["planet"] = planet_page;