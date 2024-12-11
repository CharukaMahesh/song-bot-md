const { cmd } = require('../command');

cmd({
    pattern: "g6rel",
    desc: "Send Grade 6 PDF file link",
    category: "tools",
    filename: __filename
},
async (conn, m, { from }) => {
    const pdfUrl = "https://www.e-thaksalawa.moe.gov.lk/moodle/pluginfile.php/2335/mod_resource/content/7/SG6_Bud_PP_T1_2011_MahindaRajapaksha.pdf";
    const caption = `*Here is your requested Grade 6 paper:*\n\n📄 [Download PDF](https://www.e-thaksalawa.moe.gov.lk/moodle/pluginfile.php/2335/mod_resource/content/7/SG6_Bud_PP_T1_2011_MahindaRajapaksha.pdf)`;

    try {
        // Send the PDF file link
        await conn.sendMessage(from, { text: caption });
    } catch (error) {
        console.error('Error sending the PDF link:', error);
        await conn.sendMessage(from, { text: "*Failed to send the PDF file. Please try again later.*" });
    }
});
