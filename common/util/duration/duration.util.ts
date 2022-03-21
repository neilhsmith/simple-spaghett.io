export type Duration = {
  negative: boolean;
  years?: number;
  months?: number;
  weeks?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
};

/**
 * Attempts to parse the given string as an ISO 8601 duration. See https://en.wikipedia.org/wiki/ISO_8601#Durations.
 * @param d The string to parse.
 * @returns A Duration object or undefined if `d` is not a valid ISO 8601 duration.
 */
export const parseISO8601Duration = (d: string): Duration | undefined => {
  const match = iso8601DurationRegex.exec(d);
  if (!match || !match.groups) {
    return undefined;
  }

  const durationValues = {
    years: parsePart(match.groups.years),
    months: parsePart(match.groups.months),
    weeks: parsePart(match.groups.weeks),
    days: parsePart(match.groups.days),
    hours: parsePart(match.groups.hours),
    minutes: parsePart(match.groups.minutes),
    seconds: parsePart(match.groups.seconds),
  };

  // the duration is only valid if it includes at least one part
  const validDuration = Object.values(durationValues).find(
    (d) => d !== undefined && d !== 0
  );
  if (!validDuration) {
    return undefined;
  }

  return {
    negative: !!match.groups.negative,
    ...durationValues,
  };
};

const iso8601DurationRegex =
  // eslint-disable-next-line no-useless-escape
  /(?<negative>-)?P((?<years>-?\d*[\.,]?\d+)Y)?((?<months>-?\d*[\.,]?\d+)M)?((?<weeks>-?\d*[\.,]?\d+)W)?((?<days>-?\d*[\.,]?\d+)D)?(T((?<hours>-?\d*[\.,]?\d+)H)?((?<minutes>-?\d*[\.,]?\d+)M)?((?<seconds>-?\d*[\.,]?\d+)S)?)?/;

const parsePart = (s: string): number | undefined => {
  if (s === "" || s === undefined || s === null || s === "0") {
    return undefined;
  }

  return parseFloat(s.replace(",", "."));
};
