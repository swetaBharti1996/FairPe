export const trackPageView = url => {
  try {
    window.gtag("config", "UA-123415504-7", {
      page_location: url
    });
  } catch (error) {
    // silences the error in dev mode
    // and/or if gtag fails to load
  }
};
