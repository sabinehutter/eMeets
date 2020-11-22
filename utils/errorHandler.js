module.exports = function(err, res) {
   // potential switch based on error code or msg

   // log error to monitor
   // for development
   console.error(err.stack);
   return res.redirect("/");
};
