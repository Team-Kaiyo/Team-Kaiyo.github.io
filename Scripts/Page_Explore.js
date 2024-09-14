class Explore_Page extends PageHandlerTemplate {
	constructor() {
		super();
		this.type = "explore"
		this.href = tools.full_path("/Explore.html")

		this.my_part = document.getElementById("explore-page")
	}

	async initialize() {
		page.hide_actions_button(); // Hide actions button, not needed here

	}

	clear() {
	}

}

var explore_page = new Explore_Page();

page.handlers["explore"] = explore_page;