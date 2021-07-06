const mongoose = require("mongoose"),
  { Schema } = mongoose,
  beneficiariesSchema = new Schema({
    wards: [{ type: Schema.Types.ObjectId, ref: "Ward" }],
    undergraduates: [{ type: Schema.Types.ObjectId, ref: "Undergraduate" }],
    schools: [{ type: Schema.Types.ObjectId, ref: "School" }],
    ngos: [{ type: Schema.Types.ObjectId, ref: "Ngo" }],
  });
module.exports = mongoose.model("Beneficiary", beneficiariesSchema);
