<script>
	import { page } from '$app/stores';
	// import { LoginButton } from '$lib/components/loginButton.svelte';
	import LoginButton from '$lib/components/loginButton.svelte';

	$: code = $page.url.searchParams.get('code');

	export let data;

	const { movies } = data;
	const { authorizeUrl } = data;
	// console.log(auth_url);
	// let moviez = movies.products[0];
	// console.log(moviez);
	// export async function load({ page, fetch }) {
	// 	const { code } = page.query;
	// 	// use the code here
	// 	console.log(code);
	// }
	// export async function load({ params, url }) {
	// 	let code = url.searchParams.get('code');
	// 	// let q = url.searchParams.get('q');
	// 	console.log(code);
	// 	return { code };
	// }

	// const code = $page.data.code;
	if (code) {
		// If 'code' is present, exchange it for an access token
		// const accessToken = await exchangeAuthorizationCode(code);

		console.log(code);
		// Store the access token in the session or somewhere else
		// ...
	} else {
		console.log('suckj');
	}
</script>

<h1>Login</h1>
<LoginButton />
{#if code || null}
	<p>{code}</p>
{:else}
	<p>Suuuuk!</p>
{/if}
<div id="test" />

<img src="https://image.dummyjson.com/150" alt="" />
<p><a href={authorizeUrl}>authorizeUrl</a></p>
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
