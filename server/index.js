// const express = require("express");
// const app = express();
// const port = 3000;

// const multer = require("multer");
// const cors = require("cors");
// const morgan = require("morgan");

// const { transcodeVideo } = require("./transcode");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });
// const upload = multer({ dest: "./uploads", storage });

// app.use(cors());
// app.use(morgan("tiny"));

// const path = require("path");
// app.use("/videos", express.static(path.join(__dirname, "./transcoded")));

// app.post("/upload", upload.single("file1"), async (req, res) => {
//   try {
//     if (!req.file) {
//       throw new Error("no file data");
//     }
//     // await transcodeVideo(req.file.originalname, req.file.path);
//     console.log(req.file);
//     res.status(200).send;
//   } catch (err) {
//     console.error(err);
//     res.status(500).send();
//   }
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

const express = require("express");

const ffmpeg = require("fluent-ffmpeg");

const fileUpload = require("express-fileupload");

const fs = require("fs");

const app = express();

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

console.log(ffmpeg);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

app.post("/upload", (req, res) => {
  const file = req.files.file;
  console.log(file.name);
  file.mv("tmp/" + file.name, function (err) {
    if (err) return res.sendStatus(500).send(err);
    console.log("File Uploaded successfully");
  });
  ffmpeg(`/tmp/${file.name}`).screenshots({
    timestamps: ["50%"],
    folder: "./thumbnails",
    filename: `${file.name}.png`,
    size: "720x?",
  });
});

//   ffmpeg("tmp/" + file.name)
//     .withOutputFormat(to)
//     .on("end", function (stdout, stderr) {
//       console.log("Finished");
//       res.download(__dirname + fileName, function (err) {
//         if (err) throw err;

//         fs.unlink(__dirname + fileName, function (err) {
//           if (err) throw err;
//           console.log("File deleted");
//         });
//       });
//       fs.unlink("tmp/" + file.name, function (err) {
//         if (err) throw err;
//         console.log("File deleted");
//       });
//     })
//     .on("error", function (err) {
//       console.log("an error happened: " + err.message);
//       fs.unlink("tmp/" + file.name, function (err) {
//         if (err) throw err;
//         console.log("File deleted");
//       });
//     })
//     .saveToFile(__dirname + fileName);
// });

app.listen(5000);
