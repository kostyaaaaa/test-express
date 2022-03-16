const childProcess = require("child_process");

process.stdout.write("Process stdout write = console.log: hello\n");
console.log("process.exit() - stop the app");

function execProcess(command) {
  childProcess.exec(command, function (err, stdout, stderr) {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);

    if (err) {
      console.log(`err: ${err}`);
    }
  });
}

function spawnProcess(command, args) {
  const s_process = childProcess.spawn(command, args);
  let fullData = "";
  let dataChunks = 0;

  s_process.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
  });

  s_process.stdout.on("data", (data) => {
    fullData += data;
    dataChunks += 1;
    console.log(`stdout: ${data}`);
  });

  s_process.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });

  s_process.stdout.on("end", () => {
    console.log(`end: ${fullData}`);
    console.log(`chunks : ${dataChunks}`);
  });
}

execProcess("node -v");
spawnProcess("curl", [
  "https://ru.wikipedia.org/wiki/%D0%98%D1%81%D1%87%D0%B5%D0%B7%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D0%B5_%D0%94%D1%83%D0%B3%D0%BB%D0%B0%D1%81_%D0%A1-54_(1950)",
]);
