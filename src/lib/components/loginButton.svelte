<script>
	import 'open-props/buttons';
	import { goto } from '$app/navigation';

	function handleClick() {
		goto('/api/auth/login');
	}
</script>

<button on:click={handleClick}>Login</button>
