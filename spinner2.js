// minimum 1000ms duration
const spinner = function(revs) {
  const spinners = [ `|`, `/`, `-`, `\\` ];
  let spinning = true;
  let pos = 0;

  while (spinning) {
    const p = pos % 4;
    const d = Math.round(1000 / 8) * pos;
    setTimeout(() => {
      const output = pos === revs ? `\r${spinners[p]}      ` : `\r${spinners[p]}\n`;
      process.stdout.write(output);
    }, d);
    pos++;
  }
};

spinner(8);