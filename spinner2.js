let timer =100;
const array=['|','/','-','|','\\','-','|']
for(let item of array){
  setTimeout(() => {
    process.stdout.write(`\r${item}  `);
  },timer);
  timer+=200
}
setTimeout(() => {
  process.stdout.write('\r\\'); 
}, 1300);