import _codes from './postal-codes.json';

type PostalCodeStore = {
    [key: string]: string[];
};

export const codes: PostalCodeStore = {..._codes};
export default (code: string): string[] => (_codes as PostalCodeStore)[code];
