<template>
  <v-container>
  <v-list>
		<v-list-item v-for="i in info" :key="i">{{ i.rates }}</v-list-item>
  </v-list>
  
  </v-container>
</template>
 
<script>
  import axios from 'axios';
  export default {
   name: 'HelloWorld',
	data: function() {
		return {
			info: null
			}	
		},
	mounted() {
		axios
			.get('http://data.fixer.io/api/latest?access_key=69a10fe24c70c8c07cfaa40041a332cb&symbols=BRL,USD')
			.then(response => (this.info = response))
		} 
	}
</script>
