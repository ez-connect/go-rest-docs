// eslint-disable-next-line
const fs = require('fs');
const { exec } = require('child_process');

const kDomain = 'https://xxx.freemind.vn';

function execAsync(cmd, verbose = true) {
  return new Promise((resolve, reject) => {
    const p = exec(cmd, (err, stdout) => {
      if (err) {
        reject(err);
      }

      resolve(stdout);
    });

    if (verbose) {
      p.stdout.on('data', (data) => {
        process.stdout.write(data);
      });
    }
  });
}

async function deploy() {
  await execAsync('yarn openapi');
  process.env['GENERATE_SOURCEMAP'] = false;
  // await execAsync('yarn build');
  fs.renameSync('./build/index.html', './build/200.html');
  await execAsync(`surge ./build --domain ${kDomain}`);
}

deploy();
