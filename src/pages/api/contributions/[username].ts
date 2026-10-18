import type { APIRoute } from 'astro';

export const prerender = false;

const REQUEST_TIMEOUT_MS = 10_000;
const SUCCESS_CACHE_CONTROL = 'public, max-age=0, s-maxage=300, stale-while-revalidate=60';

function jsonResponse(
	body: unknown,
	status: number,
	cacheControl = 'no-store'
): Response {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': cacheControl
		}
	});
}

export const GET: APIRoute = async ({ params }) => {
	const username = params.username;
	if (
		!username ||
		username.length > 39 ||
		!/^(?!.*--)[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/.test(username)
	) {
		return jsonResponse({ error: 'Invalid GitHub username' }, 400);
	}

	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

	try {
		let upstream: Response;
		try {
			upstream = await fetch(`https://github.com/${encodeURIComponent(username)}.contribs`, {
				headers: { Accept: 'application/json' },
				signal: controller.signal
			});
		} catch {
			if (controller.signal.aborted) {
				return jsonResponse({ error: 'GitHub contribution service timed out' }, 504);
			}
			return jsonResponse({ error: 'Unable to reach GitHub contribution service' }, 502);
		}

		if (upstream.status === 404) {
			return jsonResponse({ error: 'GitHub user not found' }, 404);
		}
		if (!upstream.ok) {
			return jsonResponse({ error: 'GitHub contribution service returned an error' }, 502);
		}

		let responseBody: string;
		try {
			responseBody = await upstream.text();
		} catch {
			if (controller.signal.aborted) {
				return jsonResponse({ error: 'GitHub contribution service timed out' }, 504);
			}
			return jsonResponse({ error: 'Unable to read GitHub contribution data' }, 502);
		}

		let contributions: unknown;
		try {
			contributions = JSON.parse(responseBody);
		} catch {
			return jsonResponse({ error: 'GitHub contribution service returned invalid JSON' }, 502);
		}

		return jsonResponse(contributions, 200, SUCCESS_CACHE_CONTROL);
	} finally {
		clearTimeout(timeout);
	}
};
