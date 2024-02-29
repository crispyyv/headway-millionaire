const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [0, "always", 140],
  },
};

export default config;
