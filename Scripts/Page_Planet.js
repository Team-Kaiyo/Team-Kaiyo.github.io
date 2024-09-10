class Planet_Page {
	constructor() {
		this.type = "planet"

		this.href = tools.full_path("/Planet-Gaia-Derinkuyu.html")

		this.my_part = document.getElementById("planet-page")
	}

	async initialize() {
		page.hide_actions_button(); // Hide actions button, not needed here
	}

	hide() {
		this.my_part.classList.remove("active");
	}

	async make_push() {
		await tools.sleep(100);
		tools.fake_push({
			"page": "solar_system"
		}, this.href);
	}

	show() {
		this.my_part.classList.add("active");
		page.show_actions_button();

		
		this.make_push();

	}

	clear() {
	}

	on_action_button() {
		page.move_to_top();
	}

}

var planet_page = new Planet_Page();

page.handlers["planet"] = planet_page;