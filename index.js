const countTo = process.argv.slice(2)[0] ||  10;

console.log("Let's count to", countTo)

for (let i = 1; i<=countTo; i++){
    i += 1;
    console.log(i)
}

console.log("FINISHED COUNTING!!!")