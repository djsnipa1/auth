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
	<div>
		<ul>
			<li>
				<buttom>Set Theme 💡</buttom>
				<ul>
					<li><button>Dark</button></li>
					<li><button>Light</button></li>
				</ul>
			</li>
		</ul>
	</div>
</div>
<DarkModeToggle>Toggle</DarkModeToggle>

<slot />

<style>
	:global(body) {
		background-color: #f2eee2;
		color: #0084f6;
		transition: background-color 0.3s;
		padding: var(--size-4);
	}
	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}
</style>
