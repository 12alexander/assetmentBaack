const mongoose = require("mongoose");

const FavShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
    },
    favs: [
      {
        title: {
          type: String,
          required: true,
          minLength: 4,
        },
        description: { type: String, required: true },
        link: { type: String, required: true },
      },
    ],
    userId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FavShema", FavShema);
