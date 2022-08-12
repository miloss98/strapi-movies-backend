module.exports = ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: false,
      defaultLimit: 20,
      maxLimit: 50,
      apolloServer: {
        tracing: true,
      },
    },
  },
});
