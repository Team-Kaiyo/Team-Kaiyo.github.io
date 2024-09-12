class Explore_Page {
	constructor() {
		this.type = "explore"
		this.href = tools.full_path("/Explore.html")

		this.my_part = document.getElementById("explore-page")
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
			"page": "explore"
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

var explore_page = new Explore_Page();

page.handlers["explore"] = explore_page;