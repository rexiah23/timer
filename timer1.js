const times = process.argv.slice(2);

const timer1 = times => {
  // No numbers provided
  if (times.length === 0) {
    throw new Error('No times were entered');
  }
  
  for (const time of times) {
    const changed = parseInt(time);
  
    if (isNaN(changed)) {
      console.log(time);
      continue; 
    } 

    if (changed < 0) {
      console.log("0 if:",changed);
      continue;
    }

    setTimeout(() => {
      process.stdout.write('\x07');
    }, changed * 1000);
  }
  }


timer1(times);