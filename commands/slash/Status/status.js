const { UptimeClient } = require("@infinitylist/uptime");

module.exports.startMonitor = async ({ client }) => {

  const uptime = new UptimeClient("https://beta.topiclist.xyz", {
    interval: 20000,
    retries: 3,
  });

  uptime._start();

  uptime.on("up", async (up) => {
    console.log(up);
  });

  uptime.on("outage", async (outage) => {
    console.log(`${outage.statusCode} | ${outage.statusText}`)
  });

  uptime.on("error", async (error) => {
    await console.error(error);
    await uptime._setInterval(0);
    return uptime._stop();
  });
};