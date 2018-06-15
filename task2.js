function check_params(param) {
    if (param < -10000 || param > 10000) {
        process.stderr.write('Input param is incorrect');
    }
}

function read_params() {
    result = Number(process.argv[2]);
    check_params(result);
    return result;
}

function fib(n) {
    if (n < 0) {
        return NaN;
    } else if (n == 0) {
        return 0;
    }
    var a = 1, b = 1;
    for (i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

function main() {
    process.stdout.write(String(fib(read_params())));
}

main();