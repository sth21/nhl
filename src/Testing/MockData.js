/* Props:
    initState (pre, in, post)
    initPeriod (0 (delayed), 1, 2, 3, 4 (OT), 5 (SO))
    initEnding (Final, Final/OT, Final/SO)
    initIsPlayoff (true, false)
*/

export default function MockData(
  initState,
  initPeriod,
  initEnding,
  initIsPlayoff
) {
  return {
    competitions: [
      {
        competitors: [
          {
            team: { abbreviation: "TOR" },
            records: [{ summary: "33-14-4" }],
            score: "3",
            id: 14,
          },
          {
            team: { abbreviation: "MIN" },
            records: [{ summary: "31-15-3" }],
            score: "1",
            id: 10,
          },
        ],
        broadcasts: [{ names: ["ESPN+"] }],
        series: initIsPlayoff,
        notes: [{ headline: "Stanley Cup Final - Game 3" }],
      },
    ],
    date: "2022-02-25T00:00Z",
    status: {
      displayClock: "00:00",
      period: initPeriod,
      type: {
        detail: initEnding,
        state: initState,
      },
    },
  };
}
