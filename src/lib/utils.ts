import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

interface FetchOptions extends RequestInit {
	token?: string;
}

const fetchWithAuth = async (url: string, options: FetchOptions = {}) => {
	const { token, ...fetchOptions } = options;

	const headers = new Headers({
		"Content-Type": "application/json",
		...options.headers, // Preserve any custom headers passed
	});

	if (token) {
		headers.set("Authorization", `Bearer ${token}`);
	}

	try {
		const response = await fetch(url, {
			...fetchOptions,
			headers,
		});

		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`);
		}

		// Assuming the response body is JSON, you can modify this to match your API's response format
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Fetch error:", error);
		throw error;
	}
};

export { fetchWithAuth };
