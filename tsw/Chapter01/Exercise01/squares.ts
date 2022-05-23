
let inputs: number[] = [];
process.argv.forEach(function (val: string, index: number, array) {
    console.log(index + ': ' + val);
    if (index!=0 && index!=1) {
        inputs.push(parseInt(val));
    }
});
console.log(squares(inputs));
function squares(array: number[]) {
    const result = array.map(x => x * x);
    // console.log(result);
    return result;
}
