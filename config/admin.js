module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b77291c27ec68f5c35cbf7584a3aed8d'),
  },
});
