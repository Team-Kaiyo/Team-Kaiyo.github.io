class Life_Page extends PageHandlerTemplate {
	constructor() {
		super();
		this.type = "life"

		this.href = tools.full_path("/Life-on-planet.html")

		this.my_part = document.getElementById("life-page")
	}

	async initialize() {
		page.hide_actions_button(); // Hide actions button, not needed here
	}

	hide() {
		this.my_part.classList.remove("active");
	}

	
	clear() {
	}

	on_action_button() {
		page.move_to_top();
	}

}

var life_page = new Life_Page();

page.handlers["life"] = life_page;