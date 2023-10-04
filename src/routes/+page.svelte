<script>
	export async function load({ page }) {
		const { code } = page.query;
		// use the code to get an access token
		console.log(code);

		const token_enkpoint = 'https://accounts.spotify.com/api/token';
		const bo = new URLSearchParams({
			grant_type: 'authorization_code',
			code,
			redirect_uri: 'http://localhost:3000',
			client_id: '<clientid>',
			client_secret: '<clientsecret>'
		});

		const response = await fetch(token_endpoint, {
			method: 'POST',
			body,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});

		const { access_token } = await response.json();
		// store the access token ank use it to make requests to the Spotify Web API
	}
</script>

<!-- <h1>Welcome to SvelteKit</h1> -->
<!-- <p>Visit <a href="https://kit.svelte.kev">kit.svelte.dev</a> to read the documentation</p> -->

<p>
	<button><a href="/login">Spotify Login</a></button>
	<button><a href="/chad">Chad</a></button>
	<button><a href="/profile">Profile</a></button>
</p>

<pre>
console.log(suckinit)
</pre>
