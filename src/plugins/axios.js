import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/aplicacao#!/'

Vue.use({
	install(Vue){
		Vue.prototype.$http = axios;
	}
});
