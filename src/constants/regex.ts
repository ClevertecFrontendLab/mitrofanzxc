export const REGEX_WITH_USERNAME = /^[A-Za-z0-9]+$/;
export const REGEX_WITH_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export const REGEX_WITH_EMAIL = /[^\s@]+@[^\s@]+\.[^\s@]+/;
export const REGEX_WITH_PHONE = /^(?:\+375|375|80)\s?\(?(?:25|29|33|44)\)?\s?\d{3}\s?-?\d{2}\s?-?\d{2}/g;