function set_of_symbols_from_string(upper_str) {
    var upper, lower, result;

    upper = upper_str.split('');
    lower = upper_str.toLowerCase().split('');
    result = new Set(upper.concat(lower));

    return result
}

function separator(str) {

    var a = [], b = [], c = [], vowel, consonant, numbers, result;
    vowel = set_of_symbols_from_string('AEIOUY');
    consonant = set_of_symbols_from_string('BCDFGHJKLMNPQRSTVWXZ');
    numbers = set_of_symbols_from_string('1234567890');

    for (var i=0; i <= str.length; i++) {
        if (vowel.has(str[i])) {
            a.push(str[i]);
        } else if (consonant.has(str[i])) {
            b.push(str[i]);
        } else if (numbers.has(str[i])) {
            c.push(str[i]);
        }
    }

    result = [a.join(''), b.join(''), c.join('')].join(' ');
    return result
}

function main() {
    process.stdout.write(separator(process.argv[2]));
}

main();
