// CODE FOR GOOGLE APPS SCRIPT
// 1. Create a Google Sheet
// 2. Extensions > Apps Script
// 3. Paste this code
// 4. Deploy > New Deployment > Web App > Who has access: Anyone

const SHEET_ID = ""; // Optional: Leave empty if script is bound to sheet, or paste ID

function doPost(e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        const doc = SpreadsheetApp.getActiveSpreadsheet();
        const data = JSON.parse(e.postData.contents);
        const type = data.type;

        if (type === 'REGISTER_USER') {
            const sheet = doc.getSheetByName('Users') || doc.insertSheet('Users');
            // Headers if new
            if (sheet.getLastRow() === 0) {
                sheet.appendRow(['ID', 'Date', 'Name', 'Email', 'Role', 'Phone', 'Status']);
            }

            const id = 'U-' + Math.floor(Math.random() * 100000);
            sheet.appendRow([
                id,
                new Date(),
                data.name,
                data.email,
                data.role,
                data.phone || '',
                'Registered'
            ]);

            return ContentService.createTextOutput(JSON.stringify({ result: 'success', id: id }))
                .setMimeType(ContentService.MimeType.JSON);
        }

        if (type === 'SUBMIT_PROJECT') {
            const sheet = doc.getSheetByName('Projects') || doc.insertSheet('Projects');
            if (sheet.getLastRow() === 0) {
                sheet.appendRow(['ID', 'Date', 'UserID', 'Program', 'Section', 'Title', 'Description', 'TechReqs', 'Link', 'Status']);
            }

            const id = 'P-' + Math.floor(Math.random() * 100000);
            sheet.appendRow([
                id,
                new Date(),
                data.userId,
                data.program,
                data.section,
                data.title,
                data.description,
                data.techReqs || '',
                data.link || '',
                'Under Review'
            ]);

            return ContentService.createTextOutput(JSON.stringify({ result: 'success', id: id }))
                .setMimeType(ContentService.MimeType.JSON);
        }

        if (type === 'REGISTER_VOLUNTEER') {
            const sheet = doc.getSheetByName('Volunteers') || doc.insertSheet('Volunteers');
            if (sheet.getLastRow() === 0) {
                sheet.appendRow(['ID', 'Date', 'UserID', 'Role', 'Experience', 'Status']);
            }
            sheet.appendRow([
                'V-' + Math.floor(Math.random() * 100000),
                new Date(),
                data.userId,
                data.role,
                data.experience || '',
                'Pending'
            ]);
            return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
                .setMimeType(ContentService.MimeType.JSON);
        }

    } catch (e) {
        return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: e.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    } finally {
        lock.releaseLock();
    }
}

function doGet(e) {
    // Simple status check by email
    const email = e.parameter.email;
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName('Users');

    if (!sheet || !email) return ContentService.createTextOutput(JSON.stringify({ result: 'not_found' })).setMimeType(ContentService.MimeType.JSON);

    const data = sheet.getDataRange().getValues();
    // Find user
    for (let i = 1; i < data.length; i++) {
        if (data[i][3] === email) { // Email is 4th column
            return ContentService.createTextOutput(JSON.stringify({
                result: 'success',
                user: {
                    id: data[i][0],
                    name: data[i][2],
                    role: data[i][4],
                    status: data[i][6]
                }
            })).setMimeType(ContentService.MimeType.JSON);
        }
    }

    return ContentService.createTextOutput(JSON.stringify({ result: 'not_found' })).setMimeType(ContentService.MimeType.JSON);
}
