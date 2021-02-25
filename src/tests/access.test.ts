import { codes } from '../index';

test('access raw data', () => {
    expect(Object.keys(codes)).toHaveLength(3038);
});
