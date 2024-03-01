const express = require("express");
const protobuf = require("protobufjs");
const cors = require("cors");
const fs = require("fs");
const app = express();
const port = 5000;
app.use(cors());

// Serve static files from the 'public' directory
const JSONdata = JSON.parse(fs.readFileSync("dataset.json", "utf-8")); // Specify the encoding as 'utf-8'

(async () => {
  const root = await protobuf.load("student.proto");
  const Bulk = root.lookupType("bulk");

  app.get("/api/students", (req, res) => {
    try {
      const payload = {
        students: JSONdata.map((item) => ({
          rollNumber: item.roll_number,
          // name: item.name,
          fatherName: item.father_name,
          // password: item.password,
          // IsApproved: item.IsApproved,
        })),
      };
      const errMsg = Bulk.verify(payload);
      if (errMsg) throw Error(errMsg);

      // const message = Bulk.create(payload);
      const buffer = Bulk.encode(payload).finish();
      res.send(buffer);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
    }
  });
})();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
