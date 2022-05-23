<template>
	<div class="home">
		<v-container class="mainDiv">
			<h1 class="pageTitle">Game of thrones books</h1>
			<v-card v-for="knjiga in this.knjige" :key="knjiga.id" v-bind:id="knjiga.id" class="listItem">
				<span class="gridItem">Name:</span>
				<router-link :to="{ name: 'detaljiKnjige', params: {bookId: Number(knjiga.id)} }" class="gridItem">
					<span class="btn">{{ knjiga.naziv }}</span>
				</router-link>
				<span class="gridItem">First author: </span>
				<span class="gridItem">{{ knjiga.autori[0] }}</span>
				<span class="gridItem">ISBN: </span>
				<span class="gridItem">{{ knjiga.ISBN }}</span>
			</v-card>
		</v-container>
	</div>
</template>

<script>
export default {
	name: 'knjige',
	data() {
		return {
			knjige: [],
		}
	},
	async mounted() {
		let response = await fetch("http://localhost:3000/knjige");
		// console.log(this.response);
		this.knjige = await response.json();
		console.log(this.knjige);
	}
}
</script>

<style scoped>
.pageTitle {
	text-align: center;
}
.mainDiv {
	width: 80%;
}
.listItem {
	display: grid;
	grid-template-columns: 50% 50%;
	padding: 25px 30px;
}
.gridItem {
	margin: 5px 10px;
	text-decoration: none;
}
.btn {
	color: blue;
	background-color: azure;
}
</style>