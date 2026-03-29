import { NextResponse } from "next/server";

const CLOUDFLARE_UP = "https://speed.cloudflare.com/__up";

export const runtime = "nodejs";

/**
 * Proxies upload to Cloudflare (browser cannot POST to speed.cloudflare.com/__up due to CORS).
 */
export async function POST(request: Request) {
  try {
    const body = await request.arrayBuffer();
    if (body.byteLength === 0) {
      return NextResponse.json({ error: "Empty body" }, { status: 400 });
    }

    const upstream = await fetch(CLOUDFLARE_UP, {
      method: "POST",
      headers: { "Content-Type": "application/octet-stream" },
      body,
    });

    return new NextResponse(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
    });
  } catch {
    return NextResponse.json(
      { error: "Upstream upload failed" },
      { status: 502 }
    );
  }
}
