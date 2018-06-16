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
    // work correctly only upto fib(78)!!!
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

function sum_for_two_nearest (x, y) {

    var max_length = Math.max(x.length, y.length) - 1;
    var result = [], buf = 0;

    // alignment of arrays
    for (var i=0; i <= max_length - y.length; i++) { y.push(0) }
    for (var i=0; i <= max_length - x.length; i++) { x.push(0) }

    for (var i=0; i <= max_length; i++) {
        tmp = x[i] + y[i] + buf
        result[i] = tmp % 10
        buf = Math.floor(tmp / 10)
    }

    if (buf > 0) {
        result.push(buf)
    }

    return result
}

function fib_for_biggest(n) {
    if (n < 0) {
        return NaN;
    } else if (n == 0) {
        return 0;
    }

    var a = [1], b = [1];
    for (i = 3; i <= n; i++) {
        c = sum_for_two_nearest(a, b);
        a = b;
        b = c;
    }

    result = b.reverse().join('')
    return result;
}

function main() {
    process.stdout.write(String(fib_for_biggest(read_params())));
}

main();