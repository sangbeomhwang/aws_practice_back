const app = require("./app.js");
const { sequelize } = require("./models");
const config = require("./config");
const PORT = config.port;

app.listen(PORT, async () => {
  await sequelize.sync({ force: false });
  console.log(`backend server listening on port ${PORT}`);
});
