const args = process.argv;
const data = args.slice(2);


for (let time of data) {
  if (Number(time) >= 1 && !isNaN(time)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(time) * 1000);
  } 
}


