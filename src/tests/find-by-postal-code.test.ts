import findByPostalCode from '../index';

test('find single city', () => {
    expect(findByPostalCode('2000')).toEqual(['Szentendre']);
});

test('find multiple villages', () => {
    expect(findByPostalCode('7838')).toHaveLength(8);
});
