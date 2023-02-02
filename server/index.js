const express = require("express");

const ffmpeg = require("fluent-ffmpeg");

const fileUpload = require("express-fileupload");

const fs = require("fs");

const app = express();

const bodyParser = require("body-parser");

ffmpeg.setFfmpegPath("C:/ffmpeg/bin/ffmpeg.exe");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.post("/upload", (req, res) => {
  const file = req.files.file;
  const resolution = req.body.resolution;
  const fps = req.body.fps;
  const vbitrate = req.body.vbitrate;
  file.mv("tmp/" + file.name, function (err) {
    if (err) return res.sendStatus(500).send(err);
    console.log("File Uploaded successfully" + file.name);
  });
  ffmpeg(`tmp/${file.name}`)
    .size(resolution ? resolution : "1280x720")
    .audioBitrate(100)
    .FPSOutput(fps ? fps : 30)
    .videoBitrate(vbitrate ? vbitrate : 8000)
    .save(`compressed/${file.name}`)
    .on("error", function (err) {
      console.error("An error occurred: " + err.message);
    })
    .on("end", function () {
      console.log("Processing finished !");
      res.send(`Resolution: ${resolution}
      Video Bitrate: ${vbitrate}
      FPS: ${fps}
      Audio Bitrate: 100
      Saved to: "compressed/${file.name}"`);
      fs.unlink(`tmp/${file.name}`, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("TMP file deleted");
        }
      });
    });
});

app.listen(5000);
