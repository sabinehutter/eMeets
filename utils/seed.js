module.exports = function(table) {
   if (process.env !== "production") {
      console.log("\n🚀 init table seed");
      return table.create({ group_name : "🚀 init" });
   }
   return Promise.resolve();
};
