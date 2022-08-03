// minimum 1000ms duration
const spinner = function() {
  const spinners = [ `|`, `/`, `-`, `\\` ];
  const delay = Math.round(1000 / 8);
  let spinning = true;
  let pos = 0;
  const revs = 8;

  while (spinning) {
    const p = pos % 4;
    const d = delay * pos;
    setTimeout(() => {
      process.stdout.write(`\r${spinners[p]}            `);
    }, d);
    if (pos === revs) {
      setTimeout(() => {
        console.log();
      }, d);
      spinning = false;
    }
    pos++;
  }
};

spinner();