class PageHandlerTemplate{
	constructor(){
		this.type = null;
		this.href = window.location.href;
		this.my_part = document.createElement("div");
	}

	initialize(){
	}

	clear(){
	}

	hide(){
	}

	async make_push() {
		await tools.sleep(100);
		tools.fake_push({
			"page": this.type
		}, this.href);
	}

	show() {
		this.my_part.classList.add("active");
		page.show_actions_button();

		this.make_push();

	}


	on_action_button(){
	}

}






class Page{
	constructor(){
		this.container = byId('content_container')
		this.type = null;
		this.handler = new PageHandlerTemplate();
		// default handler

		this.actions_button = byId("actions-btn")
		this.actions_button_text = byId("actions-btn-text")


		this.handlers = {
			// "home": home_page,
		}
	}

	get actions_loading_icon(){
		return byId("actions-loading-icon")
	}

	get actions_button_icon(){
		return byId("actions-btn-icon")
	}

	get_type(){
		return PAGE_TYPE;
	}

	hide_all(){
		for (let handler of Object.values(this.handlers)){
			handler.hide();
		}
	}

	clear(){
		this.handler.clear()
	}

	async initialize(){
		/*for(let t=3; t>0; t--){
			console.log("Loading page in " + t)
			await tools.sleep (1000)
		}*/

		this.show_loading();

		this.container.style.display = "none";
		this.hide_all();

		this.type = await this.get_type();
		var type = this.type;

		var old_handler = this.handler;

		this.handler = null;

		console.log("Page type: " + type)

		this.handler = this.handlers[type];

		console.log("Handlers: ")
		for (let key of Object.keys(this.handlers)){
			console.log(key)
			console.log(this.handlers[key])
		}

		if (this.handler){
			this.handler.initialize();
			this.handler.show();
		} else {
			// popup_msg.createPopup("This type of page is not ready yet");
			// popup_msg.show();

			this.handler = old_handler;
		}

		this.hide_loading();
		this.container.style.display = "block";

	}

	show_loading(){
		this.actions_loading_icon.classList.remove("hidden");
		this.actions_button_icon.classList.add("hidden");
		this.actions_button_text.classList.add("hidden");
	}

	hide_loading(){
		this.actions_loading_icon.classList.add("hidden");
		this.actions_button_icon.classList.remove("hidden");
		this.actions_button_text.classList.remove("hidden");
	}


	show_actions_button(){
		this.actions_button.style.display = "flex";
	}

	hide_actions_button(){
		this.actions_button.style.display = "none";
	}

	on_action_button() {
		this.handler.on_action_button();
	}

	set_actions_button_text(text) {
		this.actions_button_text.innerHTML = text;
	}

	set_title(title) {
		window.document.title = title;
	}

	move_to_top(){
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	handle_nav_click(new_page_type='home'){
		let that = this;
		let _last_page_type = PAGE_TYPE;
		function on_back_button(ev){
			let last_page_type = last_page_type;

			if (last_page_type == new_page_type){
				return;
			} else {
				that.handle_nav_click(last_page_type);
			}
		}

		if (new_page_type == _last_page_type){
			return;
		}

		HISTORY_ACTION.push(on_back_button);



			

		let nav_bar = document.getElementById('nav-bar');

		let right_bar_items = sidebar_control.right_bar_items;
		
		for (let j = 0; j < nav_bar.children.length; j++) {
			if(nav_bar.children[j].getAttribute("data-page-type") != PAGE_TYPE){
				nav_bar.children[j].classList.remove("disabled");
				nav_bar.children[j].classList.remove("highlight");
			} else {
				nav_bar.children[j].classList.add("disabled");
				nav_bar.children[j].classList.add("highlight");
			}
		}
		for (let j = 0; j < right_bar_items.children.length; j++) {
			if (right_bar_items.children[j].getAttribute("data-page-type") != PAGE_TYPE) {
				right_bar_items.children[j].classList.remove("disabled");
				right_bar_items.children[j].classList.remove("highlight");
			} else {
				right_bar_items.children[j].classList.add("disabled");
				right_bar_items.children[j].classList.add("highlight");
			}
		}

		
		sidebar_control.closeNav();
				
		page.initialize();

		HISTORY_ACTION

	}
}

const page = new Page();
