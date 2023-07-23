export async function loadLanguage(userLang: string) {
    try {
      const module = await import(`./translations/${userLang}`);
      return module[userLang];
    } catch (err) {
      console.error(`Error loading language file: ${userLang}`, err);
      // Load default language if user's language file is not found
        try {
            const defaultModule = await import(`./translations/en`);
            return defaultModule['en'];
        } catch (err) {
            console.error("Error loading default language file: en", err);
            throw err;  // Re-throw the error to be handled in the calling code
        }
    }
}