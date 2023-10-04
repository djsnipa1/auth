<script>
	export let data;
	const { products } = data;
	console.log(products);

	let imgUrls = products.map((product) => product.image);
	let prettyJson = JSON.stringify(imgUrls, null, 2);
</script>

<pre>{prettyJson}</pre>

{#each products as product}
	<img src={product.image} alt="" />
{/each}

<style>
	pre {
		height: 25vh;
		overflow: scroll;
	}
</style>
