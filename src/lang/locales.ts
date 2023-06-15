import English from './en.json'
import German from './de.json'
import Ukrainian from './ua.json'
import Russian from './ru.json'

export const DEFAULT_LANG = 'en-US'

export const LOCALES = {
	ENGLISH: "en-US",
	RUSSIAN: "ru-RU",
	UKRAINIAN: "ua-UA",
	GERMAN: "de-DE",
  };

  export const messages = {
	[LOCALES.ENGLISH]: English,
	[LOCALES.GERMAN]: German,
	[LOCALES.RUSSIAN]: Russian,
	[LOCALES.UKRAINIAN]: Ukrainian,
  }

  export const languages = [
	{ value: LOCALES.ENGLISH, label: 'EN'},
	{ value: LOCALES.RUSSIAN, label: 'RU'},
	{ value: LOCALES.GERMAN, label: 'DE'},
	{ value: LOCALES.UKRAINIAN, label: 'UA'},
]