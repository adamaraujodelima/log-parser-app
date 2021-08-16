const [,, args] = process.argv;

const runner = (args) => {
    console.log(args);
}

runner(args);

export { runner };