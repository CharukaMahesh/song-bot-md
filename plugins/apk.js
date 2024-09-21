const ApkDownloader = require('apk-downloader');

cmd({
    pattern: "downloadapk",
    desc: "Download APK file",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, reply, q }) => {
    if (!q) return reply("Please provide the app name or package!");

    try {
        const downloader = new ApkDownloader();
        const apkLink = await downloader.getApk(q);
        
        if (apkLink) {
            reply(`🔗 *Download APK here:* ${apkLink}`);
        } else {
            reply("APK not found for the given app/package.");
        }
    } catch (error) {
        reply("An error occurred while fetching the APK. Please try again later.");
    }
});
