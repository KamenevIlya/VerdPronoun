const verbPronoun = (verb, pronoun) => {
    let output;
    const verbRoot = verb.slice(0, verb.length - 2);
    const upperPronoun = pronoun.toUpperCase();
    const vowels = ['а', 'о', 'у', 'ы', 'э', 'я', 'ю', 'ё', 'и', 'е'];
    const conjugation = getConjugation(verb);
    switch (upperPronoun) {
        case 'ОН':
            if (conjugation === 1)
                output = pronoun + ' ' + verbRoot + 'ет';
            else
                output = pronoun + ' ' +verbRoot+'ит';
            break;
        case 'ОНА':
            if (conjugation === 1){
                output = pronoun + ' ' + verbRoot + 'ет';
            }
            else
                output = pronoun + ' ' +verbRoot+'ит';
            break;
        case 'ОНО':
            if (conjugation === 1)
                output = pronoun + ' ' + verbRoot + 'ет';
            else
                output = pronoun + ' ' +verbRoot+'ит';
            break;
        case 'Я':
            if (vowels.indexOf(verbRoot[verbRoot.length-1]) ===-1)
                output = pronoun + ' ' + verbRoot + 'у';
            else
                output = pronoun + ' ' +verbRoot+'ю';
            break;
        case 'МЫ':
            if (conjugation === 1)
                output = pronoun + ' ' + verbRoot + 'ем';
            else
                output = pronoun + ' ' +verbRoot+'им';
            break;
        case 'ОНИ':
            if (conjugation === 1)
                output = pronoun + ' ' + verbRoot + 'ут';
            else
                output = pronoun + ' ' +verbRoot+'ют';
            break;
        case 'ОНО':
            if (conjugation === 1)
                output = pronoun + ' ' + verbRoot + 'ете';
            else
                output = pronoun + ' ' +verbRoot+'ите';
            break;
        case 'ТЫ':
            if (conjugation === 1)
                output = pronoun + ' ' + verbRoot + 'ешь';
            else
                output = pronoun + ' ' +verbRoot+'ишь';
            break;
    }
    return output
}

const getConjugation = (verb) => {
    const exceptionsWordsSecond = ['гнать', 'держать', 'смотреть', 'видеть', 'дышать', 'слышать', 'ненавить', 'обидеть', 'терпеть', 'зависеть', 'вертеть']
    const exceptionWordsFirst=['брить', 'стелить']
    if ((verb[verb.length - 3] === 'и' || exceptionsWordsSecond.indexOf(verb) !== -1)&&exceptionWordsFirst.indexOf(verb)===-1) {
        return 2;
    }
    return 1;
}