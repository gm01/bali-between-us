import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the west-coast itinerary", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Bali,<br\/>at our pace\./);
  assert.match(html, /GILI → SEMINYAK/);
  assert.match(html, /CANGGU · SEMINYAK/);
  assert.match(html, /23:05 7C5304/);
  assert.doesNotMatch(html, /SIDEMEN|시드멘/i);
});

test("keeps route, stays, and metadata aligned", async () => {
  const [css, page, layout, staticHtml] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../pages-src/index.html", import.meta.url), "utf8"),
  ]);

  assert.match(page, /area: "Seminyak · Canggu"/);
  assert.match(page, /Kanvaz Village Resort/);
  assert.match(page, /id: "seminyak"/);
  assert.match(layout, /스미냑, 짱구, 울루와뚜/);
  assert.match(staticHtml, /스미냑, 짱구, 울루와뚜/);
  assert.match(css, /--paper: #f5f4f0/);
  assert.doesNotMatch(`${page}${layout}${staticHtml}`, /SIDEMEN|시드멘/i);
});
