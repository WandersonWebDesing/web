const Hubspot = require('@hubspot/api-client');
const hubspotClient = new Hubspot.Client({ apiKey: process.env.HUBSPOT_API_KEY });

async function updateHubspotContact(email, msg) {
    try {
        await hubspotClient.crm.contacts.basicApi.updateById('contactId', {
            properties: {
                last_message: msg
            }
        });
    } catch (err) {
        console.error('Erro HubSpot:', err);
    }
}