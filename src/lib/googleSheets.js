// src/lib/googleSheets.js

// REPLACE THIS WITH YOUR DEPLOYED GOOGLE SCRIPT URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx.../exec';

export const api = {
    registerUser: async (userData) => {
        // userData: { name, email, role, phone }
        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // 'cors' if script handles OPTIONS, but 'no-cors' is safer for simple opaque requests
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ type: 'REGISTER_USER', ...userData }),
            });
            // Note: no-cors mode returns opaque response, so we can't read JSON. 
            // We assume success if no network error.
            // For real apps, we'd use a proxy or proper CORS setup in GAS.
            return { success: true };
        } catch (e) {
            console.error(e);
            return { success: false, error: e };
        }
    },

    submitProject: async (projectData) => {
        // projectData: { userId, program, section, title, description, techReqs, link }
        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'SUBMIT_PROJECT', ...projectData }),
            });
            return { success: true };
        } catch (e) {
            return { success: false, error: e };
        }
    },

    checkStatus: async (email) => {
        try {
            const response = await fetch(`${SCRIPT_URL}?email=${email}`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.error(e);
            return null;
        }
    }
};
