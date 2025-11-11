// ----------------------------------------------------------------------
// Default locale Indonesia
// ----------------------------------------------------------------------

const DEFAULT_LOCALE = {
  code: "id-ID",
  currency: "IDR",
};

// ----------------------------------------------------------------------

function processInput(inputValue: unknown): number | null {
  if (inputValue == null) return null;

  const number = Number(inputValue);
  return Number.isNaN(number) ? null : number;
}

// ----------------------------------------------------------------------

export function fNumber(
  inputValue: unknown,
  options?: Intl.NumberFormatOptions
): string {
  const number = processInput(inputValue);
  if (number === null) return "";

  return new Intl.NumberFormat(DEFAULT_LOCALE.code, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options,
  }).format(number);
}

// ----------------------------------------------------------------------

export function fCurrency(
  inputValue: unknown,
  options?: Intl.NumberFormatOptions
): string {
  const number = processInput(inputValue);
  if (number === null) return "";

  return new Intl.NumberFormat(DEFAULT_LOCALE.code, {
    style: "currency",
    currency: DEFAULT_LOCALE.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options,
  }).format(number);
}

// ----------------------------------------------------------------------

export function fPercent(
  inputValue: unknown,
  options?: Intl.NumberFormatOptions
): string {
  const number = processInput(inputValue);
  if (number === null) return "";

  return new Intl.NumberFormat(DEFAULT_LOCALE.code, {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
    ...options,
  }).format(number / 100);
}

// ----------------------------------------------------------------------

export function fShortenNumber(
  inputValue: unknown,
  options?: Intl.NumberFormatOptions
): string {
  const number = processInput(inputValue);
  if (number === null) return "";

  const fm = new Intl.NumberFormat(DEFAULT_LOCALE.code, {
    notation: "compact",
    maximumFractionDigits: 2,
    ...options,
  }).format(number);

  // Lowercase suffix: "RB", "JT", "M", "T" → "rb", "jt", "m", "t"
  return fm.replace(/[A-Z]/g, (char) => char.toLowerCase());
}

// ----------------------------------------------------------------------

export function fData(inputValue: unknown): string {
  const number = processInput(inputValue);
  if (number === null || number === 0) return "0 bytes";

  const units = ["bytes", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"];
  const decimalPlaces = 2;
  const base = 1024;

  const exponent = Math.floor(Math.log(number) / Math.log(base));
  const value = parseFloat((number / base ** exponent).toFixed(decimalPlaces));

  return `${value} ${units[exponent]}`;
}
