Vue.component("enrad", {
	props: ["tur"],
	template:
	`
	<div>
		 <div > 
			{{ tur.starttid }} </div>
		<div> 
			{{ tur.startmpl }} </div>
		<div> 
			{{ tur.sluttid }} </div>
		<div> 
			{{ tur.slutmpl }} </div>
	</div>
	`
})
Vue.component("ruta", {
	props: ["tur"],
	template:
	`
		<div v-for="tur in turen" class = "pr_ruta" :key= "tur.id"> 
		{{ tur.text }} 
		</div>
	`
		
})
Vue.component("rutorna", {
	props: ["tur"],
	template:
		`
			<div > 
			{{ tur.starttid }}
			</div>
		` 
})
Vue.component("meny", {
	props: ['sida'],

	template: `
		<div>
			<div @click = "toggle = ! toggle"> {{ sida.text }} </div>
			<div v-if="toggle"> {{ sida.id }} </div>
		</div> 
	`,

	data: function() {
		return {
			toggle: false,
		}
	}
	

})
Vue.component("el-input", {

	template: `
		 <input type="text" @keyup.enter.native="inputter" v-model="inputt">
	`,

	data: function() {
		return {
			toggle: false,
		}
	}
	

})
new Vue({
	el: '#app',
	component: ["meny" ,'enrad', 'rutorna', "ruta"],
	data: {
		sidor: [
			{"id": 11, "text": "Statestik", "link":"abs"},
			{"id": 22, "text": "Flexkarta", "link":"karta"},
			{"id": 33, "text": "Automater", "link":"karta"},
			],
		pass: "",
		buss: "",
		turen: [{
			"id": 1,
			"starttid": 200,
			"sluttid": 300,
			"startmpl": 600,
			"slutmpl": 700},
			{
			"id":2,
			"starttid": 250,
			"sluttid": 400,
			"startmpl": 120,
			"slutmpl": 70}
			,{
			"id":3,
			"starttid": 1250,
			"sluttid": 400,
			"startmpl": 120,
			"slutmpl": 70}
			],
		fields:[],
		inputt: "",
		a: -1,
		styleRad: {
			
			display: "inline-block",

			fontSize: "24px",
			color:" #aaa",	
	        background: "#222222",
	        width: "120px",
	        padding:"0px",
	        margin:"0px"

		},
		styleRuta:{
			display: "inline-block",
			width: "120px",
			margin:"0px"
		}

		},
		methods:{
			adderaPassLista: function(){
			},
			inputter: function(){
				array = ["flexlinje", "pass", "buss", "starttid", "sluttid", "startmpl", "slutmpl", "riktning"]
				console.log(this.inputt);
				this.a++;
				if (array < 3) this.field[array[this.a]] = this.inputt;
				
				if (this.a == 3) this.a = -1;
			}
			


		}
	
})