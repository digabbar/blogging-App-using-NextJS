const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongoDB_UserName: "digabbar",
        mongoDB_Password: "sohamjhasara",
      },
    };
  }
  return {
    env: {
      mongoDB_UserName: "digabbar",
      mongoDB_Password: "sohamjhasara",
    },
  };
};
