// HubSpot tracking or form submission helpers
export const hubspot = {
  trackEvent: (eventName, data) => {
    console.log(`Tracking HubSpot event: ${eventName}`, data);
  },
  submitForm: async (formData) => {
    // Implement HubSpot API call here
    return { success: true };
  }
};
