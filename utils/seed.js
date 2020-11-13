module.exports = function() {
   if (process.env !== "production") {
      console.log("\n🚀 init table seed");
      return "init table seed";
      // table.create({});
   }
   return Promise.resolve();
};
