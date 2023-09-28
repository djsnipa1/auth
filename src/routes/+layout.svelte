<script>
	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
	import DarkModeToggle from '$lib/components/darkModeToggle.svelte';
</script>

<div>
	<div>
		<div>
			<a href="/">
				<h1>Home</h1>
			</a>
		</div>
	</div>
</div>
<DarkModeToggle>Toggle 💡</DarkModeToggle>

<slot />

<style>
	:global(body) {
		background-color: #1d3040;
		color: #bfc2c7;
		transition: background-color 0.3s;
		padding: var(--size-4);
	}
	:global(body.dark-mode) {
		background-color: #f2eee2;
		color: #0084f6;
	}
</style>
