export function toQueryString(params: string | Record<string, string>): string {
  if (typeof params === "string") {
    const obj: Record<string, string> = {};
    const pairs = params.split("&");
    pairs.forEach((pair) => {
      const [key, value] = pair.split("=");
      obj[key] = decodeURIComponent(value);
    });
    params = obj;
  }

  return Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent((params as Record<string, string>)[key])}`)
    .join("&");
}
