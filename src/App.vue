<template>
  <v-app>
  <h1 class="animate__animated animate__bounce display-2">Cotação Vue</h1>
  
  <div class="container">
	<v-card class="card animate__animated animate__jello">
	<v-card-title>
			<v-card-actions>
				<Conversor moeda-a="USD" moeda-b="BRL" />
	</v-card-actions>
		</v-card-title>

	</v-card>
	<v-card class="card animate__animated animate__jello">
		<v-card-title>
			<v-card-actions>
				<Conversor moeda-a="BRL" moeda-b="USD" />
			</v-card-actions>
		</v-card-title>
		
	</v-card>
	<v-card class="card animate__animated animate__jello">
		<v-card-title>
			<v-card-actions>
				<Conversor moeda-a="EUR" moeda-b="BRL" />
	</v-card-actions>
		</v-card-title>

	</v-card>
	<v-card class="card animate__animated animate__jello">
		<v-card-title>
		<v-card-actions>
		<Conversor moeda-a="BRL" moeda-b="EUR" />
		</v-card-actions>
		</v-card-title>

	</v-card>
	</div>
  </v-app>
</template>

<script>

import Conversor from './components/Conversor';

export default {
  name: 'App',

  components: {
   Conversor
  },

  data: () => ({
    //
  }),
};
</script>

<style>
	*, body, html {
		box-sizing: border-box;
		color: brown;
		text-align: center;
		background: #1f4037;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #99f2c8, #1f4037);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #99f2c8, #1f4037); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	}
	h1 {
		text-align: center;
		padding: 2rem;
	}

	.container {
		display: flex;
		justify-content: space-around;
		margin: 1rem;
		padding: 1rem;
	}

	.card {
		color: brown;
		align-items: center;
		text-align: center;
		margin: 0 auto;
	}
</style>
