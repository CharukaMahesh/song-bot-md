const { cmd } = require('../command');

cmd({
    pattern: "g10sci3",
    desc: "Send Grade 10 Science Paper 3 PDF",
    category: "tools",
    filename: __filename
},
async (conn, m, { from }) => {
    const pdfUrl = "https://github.com/CharukaMahesh/song-bot-md/blob/main/Main/Grade06/3%20Papers%E2%9D%A4%EF%B8%8F%E2%80%8D%F0%9F%A9%B9/sol_Sci_3tp_nwp_I_II_2016.pdf";

    try {
        // Send the PDF file directly
        await conn.sendMessage(from, {
            document: { url: pdfUrl },
            mimetype: 'application/pdf',
            fileName: 'Grade10_Science_Paper3.pdf'
        });
    } catch (error) {
        console.error('Error sending the PDF file:', error);
        await conn.sendMessage(from, { text: "*Failed to send the PDF file. Please try again later.*" });
    }
});
