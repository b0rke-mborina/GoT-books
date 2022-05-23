<template>
	<div class="home">
		<h1 class="pageTitle">
			<strong column v-if="knjiga">{{ knjiga.naziv }}</strong>
		</h1>
		<v-container column v-if="knjiga" class="mainDiv">
			<v-card class="commitCard gridDiv">
				<strong class="gridItem">Authors: </strong>
				<span class="gridItem">{{ autoriKnjige }}</span>
				<strong class="gridItem">ISBN:</strong>
				<span class="gridItem">{{ knjiga.ISBN }}</span>
				<strong class="gridItem">Number of pages:</strong>
				<span class="gridItem">{{ knjiga.brojStranica }}</span>
				<strong class="gridItem">Publisher:</strong>
				<span class="gridItem">{{ knjiga.izdavac }}</span>
				<strong class="gridItem">Country of origin:</strong>
				<span class="gridItem">{{ knjiga.zemljaPodrijetla }}</span>
				<strong class="gridItem">Number of characters:</strong>
				<span class="gridItem">{{ brojLikova }}</span>
			</v-card>
			<v-card-actions class="btnDiv">
				<button @click="returnHome" class="backBtn">Back</button>
			</v-card-actions>
		</v-container>
	</div>
</template>

<script>
export default {
	name: 'detaljiKnjige',
	data() {
		return {
			knjiga: null,
			bookId: this.$route.params.bookId,
			autoriKnjige: "",
			brojLikova: 0
		}
	},
	async mounted() {
		let response = await fetch("http://localhost:3000/knjige/" + this.bookId);
		let result = await response.json();
		this.knjiga = result[0];
		console.log(this.knjiga);
		console.log(this.knjiga.autori);
		this.autoriKnjige = this.knjiga.autori.join(", ");
		this.brojLikova = this.knjiga.likovi.length;
	},
	methods: {
		returnHome() {
			this.$router.replace({ name: "knjige" });
		},
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
.commitCard {
	background-color: azure;
}
.gridDiv {
	display: grid;
	grid-template-columns: auto auto;
	padding: 25px 30px;
}
.gridItem {
	margin: 5px 10px;
}
.btnDiv {
	justify-content: center;
}
.backBtn {
	background-color: lightgray;
	color: dimgray;
	font-size: 20px;
	padding: 5px;
	border-radius: 3px;
}
</style>