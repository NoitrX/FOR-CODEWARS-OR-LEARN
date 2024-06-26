const totalSeconds = 3720; // 62 seconds is used as an example, change this to your desired value

const hours = Math.floor(totalSeconds / 3600);
const minutes = Math.floor((totalSeconds % 3600) / 60);
const seconds = totalSeconds % 60;

console.log(`${totalSeconds} seconds is equal to ${hours} hour(s), ${minutes} minute(s), and ${seconds} second(s)`);
