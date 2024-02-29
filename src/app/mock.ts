if (typeof window === "undefined") {
  // eslint-disable-next-line global-require
  const { default: setupServer } = require("./start-api-server-msw");
  setupServer();
}
