import { type Duration, parseISO8601Duration } from "../";

describe("duration util", () => {
  const invalidTestCases = ["", "P", "T", "PT", "-P", "PWTMS", "PT0S", "FOO"];
  const validTestCases: { input: string; expected: Duration }[] = [
    {
      input: "P10M", // dates
      expected: {
        negative: false,
        months: 10,
      },
    },
    {
      input: "PT5M", // times
      expected: {
        negative: false,
        minutes: 5,
      },
    },
    {
      input: "-P10M1W6DT4H5M11S", // negative, dates & times
      expected: {
        negative: true,
        months: 10,
        weeks: 1,
        days: 6,
        hours: 4,
        minutes: 5,
        seconds: 11,
      },
    },
    {
      input: "-P10.1M1W6DT4H5M,5S", // decimals (. and ,)
      expected: {
        negative: true,
        months: 10.1,
        weeks: 1,
        days: 6,
        hours: 4,
        minutes: 5,
        seconds: 0.5,
      },
    },
    {
      input: "P0DT0H15M",
      expected: {
        negative: false,
        minutes: 15,
      },
    },
  ];

  invalidTestCases.forEach((i) =>
    it(`returns undefined for invalid input: '${i}'`, () => {
      const result = parseISO8601Duration(i);

      expect(result).toBeUndefined();
    })
  );

  validTestCases.forEach((i) =>
    it(`parses a duration: ${i.input}`, () => {
      const result = parseISO8601Duration(i.input);

      expect(result).toEqual(i.expected);
    })
  );
});
