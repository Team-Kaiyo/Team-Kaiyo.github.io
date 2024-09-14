class Home_Page extends PageHandlerTemplate {
	constructor() {
		super();
		this.type = "home"

		this.href = tools.full_path("/")




		this.my_part = document.getElementById("home-page")
	}

	async initialize() {
		page.hide_actions_button(); // Hide actions button, not needed here
	}

	
	clear() {
	}

}

var home_page = new Home_Page();

page.handlers["home"] = home_page;