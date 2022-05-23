let inputs = [];
process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
    if (index != 0 && index != 1) {
        inputs.push(parseInt(val));
    }
});
console.log(squares(inputs));
function squares(array) {
    const result = array.map(x => x * x);
    // console.log(result);
    return result;
}
