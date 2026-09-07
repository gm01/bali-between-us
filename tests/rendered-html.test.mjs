import assert from "node:assert/strict";
import test from "node:test";
import { stops, itinerary, stays, booking } from "../app/trip-data.ts";

async function render() {
  const { default: worker } = await import("../dist/server/index.js");
  return worker.fetch(new Request("http://localhost/", {headers:{accept:"text/html"}}),
    {ASSETS:{fetch:async()=>new Response("Not found",{status:404})}},
    {waitUntil(){},passThroughOnException(){}});
}
test("13 nights are contiguous and match each booked date range", () => {
  assert.deepEqual(stops.map(s=>s.nights),[4,4,3,2]);
  assert.equal(stops.reduce((sum,s)=>sum+s.nights,0),13);
  stops.forEach((s,i)=>{
    assert.equal((Date.parse(s.checkout)-Date.parse(s.checkin))/86400000,s.nights);
    if(i) assert.equal(stops[i-1].checkout,s.checkin);
  });
  assert.equal(stops[0].checkin,"2026-10-21");
  assert.equal(stops.at(-1).checkout,"2026-11-03");
});
test("14 consecutive local days and nine full non-transfer days",()=>{
  assert.equal(itinerary.length,14);
  itinerary.forEach((day,i)=>{
    const date=new Date(Date.UTC(2026,9,21+i));
    assert.equal(day.date,date.toISOString().slice(5,10).replace("-","."));
    assert.ok(stops.some(s=>s.id===day.region));
  });
  assert.equal(itinerary.filter(d=>d.kind==="FULL").length,9);
  assert.match(itinerary.at(-1).night,/23:05 7C5304/);
});
test("hotel searches use the correct regional dates and party size",()=>{
  for(const stay of stays){
    const stop=stops.find(s=>s.id===stay.region);
    assert.ok(stop);
    const u=new URL(stay.query?booking(stay.query,stop.checkin,stop.checkout):stay.official);
    assert.equal(u.searchParams.get(stay.query?"checkin":"check_in"),stop.checkin);
    assert.equal(u.searchParams.get(stay.query?"checkout":"check_out"),stop.checkout);
    assert.equal(u.searchParams.get(stay.query?"group_adults":"adults"),"2");
  }
});
test("renders the complete new notebook with honest booking and sync status",async()=>{
  const response=await render();
  assert.equal(response.status,200);
  assert.match(response.headers.get("content-type")??"",/^text\/html/);
  const html=await response.text();
  assert.match(html,/Bali, at our pace\./);
  assert.match(html,/GILI TRAWANGAN/);
  assert.equal((html.match(/class="day"/g)??[]).length,14);
  assert.match(html,/객실 재고와 최종 견적은 확인되지/);
  assert.match(html,/자동으로 바뀌지는 않습니다/);
  assert.doesNotMatch(html,/길리 에어|GILI AIR|SIDEMEN|시드멘|PNR|전자항공권/i);
  for(const id of ["route","stays","spots","checklist"]) assert.ok(html.includes('id="'+id+'"'));
});
