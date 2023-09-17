<script>
	export let data;
	// export let auth_url;
	// const { movies } = data;
	const { movies } = data;
	const { authorizeUrl } = data;
	// console.log(auth_url);
	// let moviez = movies.products[0];
	// console.log(moviez);
</script>

<h1>Login</h1>
<div id="test" />

<img src="https://image.dummyjson.com/150" alt="" />
<p>{authorizeUrl}</p>
{#each movies.products as movie}
	<h1>{movie.title}</h1>
	<h6>{movie.description}</h6>
	<!-- <h1>{movie[].title}</h1> -->
{/each}

<pre>{JSON.stringify(movies, null, 2)}</pre>

<style>
	body {
		background: var(gradient-19);
	}
	p {
		color: green;
		background-color: black;
		overflow: hidden;
	}
	#test {
		border: 2px solid orange;
		background-color: red;
		color: blue;
		width: 150px;
		height: 150px;
	}
	pre {
		height: 4em;
		width: 80%;
		overflow-x: auto;
		background-color: #b3b3b3;
	}
</style>
