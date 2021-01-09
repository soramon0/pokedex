import React, { createContext, useContext, useMemo, useState } from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from '../i18n/en';
import fr from '../i18n/fr';
import ar from '../i18n/ar';

type locales = 'en' | 'fr' | 'ar';

interface Context {
	t: (scope: i18n.Scope, options?: i18n.TranslateOptions) => string;
	locale: locales;
	setLocale: React.Dispatch<React.SetStateAction<locales>>;
}

i18n.translations = {
	en,
	fr,
	ar,
};
i18n.locale = Localization.locale;
i18n.fallbacks = true;

const LocalizationContext = createContext<Context | undefined>(undefined);

export function useLocalization() {
	const context = useContext(LocalizationContext);

	if (context === undefined) {
		throw new Error(
			'useLocalization must be used within a LocalizationProvider'
		);
	}

	return context;
}

const LocalizationProvider: React.FC = ({ children }) => {
	const [locale, setLocale] = useState(Localization.locale as locales);

	const value = useMemo(
		() => ({
			t: (scope: i18n.Scope, options?: i18n.TranslateOptions) =>
				i18n.t(scope, { locale, ...options }),
			locale,
			setLocale,
		}),
		[locale]
	);

	return (
		<LocalizationContext.Provider value={value}>
			{children}
		</LocalizationContext.Provider>
	);
};

export default LocalizationProvider;
