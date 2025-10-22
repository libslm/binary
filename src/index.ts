/// <reference path="types/generated/index.d.ts" />
import type { Bit, Nibble, Byte, Word, Dword } from "./types/generated";

export type bit = Bit;
export type nibble = Nibble;
export type byte = Byte;
export type word = Word;
export type dword = Dword;

/**
 * A value that can be interpreted as a bit.
 * Either a boolean or a `bit` type.
 */
export type bitLike = boolean | bit;

//##################################################################################################################
//#
//#         Array Types
//#
//##################################################################################################################

/** A 1-bit array. */
export type bitArray = [bitLike];
/** A 4-bit array. */
export type nibbleArray = [bitLike, bitLike, bitLike, bitLike];
/** An 8-bit array. */
export type byteArray = [bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike];
/** A 16-bit array. */
export type wordArray = [bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike];
/** A 32-bit array. */
export type dwordArray = [bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike, bitLike];

//##################################################################################################################
//#
//#         Index Types
//#
//##################################################################################################################

/** Index for 1-bit array. */
export type bitIndex = 0;
/** Index for 4-bit array. */
export type nibbleIndex = 0 | 1 | 2 | 3;
/** Index for 8-bit array. */
export type byteIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
/** Index for 16-bit array. */
export type wordIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
/** Index for 32-bit array. */
export type dwordIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31;

//##################################################################################################################
//#
//#         Bit
//#
//##################################################################################################################

/**
 * Represents a 1-bit binary value.
 */
export const bit = (value: number): bit => (value & bit.mask) as bit;

/** Number of bits. */
bit.size = 1 as const;

/** Bitmask for extraction. */
bit.mask = 0x1 as const;

/** Mask for unsigned representation. */
bit.decimalMask = 0x0 as const;

/** Sign mask for determining negativity in signed values. */
bit.signMask = 0x1 as const;

/** Converts a `bit` to a 1-bit array. */
bit.toArray = (binary: bit): bitArray => { return toArray(binary, bit.size) as bitArray }

/** Converts to a binary string. */
bit.toBinary = (binary: bit): string => { return padding(binary.toString(2), 1).toLocaleUpperCase() }

/** Converts to hexadecimal string. */
bit.toHexadecimal = (binary: bit): string => { return padding(binary.toString(16), 1).toLocaleUpperCase() }

/** Converts to string. */
bit.toString = (binary: bit): string => { return binary.toString(2).toLocaleUpperCase() }

/** Converts to signed number. */
bit.toSigned = (binary: bit): number => { return toSigned(binary, bit.signMask, bit.decimalMask) }

/** Returns numeric value. */
bit.valueOf = (binary: bit): number => { return binary.valueOf() }

/** Gets the bit value at index. */
bit.get = (binary: bit, at: bitIndex): boolean => { return get(binary, at) }

/** Sets the bit at index with a `bitLike` value. */
bit.set = (binary: bit, at: bitIndex, value: bitLike): bit => { return bit(set(binary, at, value)) }

/** Creates a `bit` from a `bitLike` array. */
bit.fromArray = (array: bitLike[]): bit => { return bit(fromArray(array)) }

//##################################################################################################################
//#
//#         Nibble
//#
//##################################################################################################################

/**
 * Represents a 4-bit binary value.
 */
export const nibble = (value: number): nibble => (value & nibble.mask) as nibble;

/** Number of bits. */
nibble.size = 4 as const;

/** Bitmask for extraction. */
nibble.mask = 0xF as const;

/** Mask for unsigned representation. */
nibble.decimalMask = 0x7 as const;

/** Sign mask for determining negativity in signed values. */
nibble.signMask = 0x8 as const;

/** Converts a `nibble` to a 4-bit array. */
nibble.toArray = (binary: nibble): nibbleArray => { return toArray(binary, nibble.size) as nibbleArray }

/** Converts to a binary string. */
nibble.toBinary = (binary: nibble): string => { return padding(binary.toString(2), 4).toLocaleUpperCase() }

/** Converts to hexadecimal string. */
nibble.toHexadecimal = (binary: nibble): string => { return padding(binary.toString(16), 1).toLocaleUpperCase() }

/** Converts to string. */
nibble.toString = (binary: nibble): string => { return binary.toString(2).toLocaleUpperCase() }

/** Converts to signed number. */
nibble.toSigned = (binary: nibble): number => { return toSigned(binary, nibble.signMask, nibble.decimalMask) }

/** Returns numeric value. */
nibble.valueOf = (binary: nibble): number => { return binary.valueOf() }

/** Gets the bit value at index. */
nibble.get = (binary: nibble, at: nibbleIndex): boolean => { return get(binary, at) }

/** Sets the bit at index with a `bitLike` value. */
nibble.set = (binary: nibble, at: nibbleIndex, value: bitLike): nibble => { return nibble(set(binary, at, value)) }

/** Creates a `nibble` from a `bitLike` array. */
nibble.fromArray = (array: bitLike[]): nibble => { return nibble(fromArray(array)) }

//##################################################################################################################
//#
//#         Byte
//#
//##################################################################################################################

/**
 * Represents an 8-bit binary value.
 */
export const byte = (value: number): byte => (value & byte.mask) as byte;

/** Number of bits. */
byte.size = 8 as const;

/** Bitmask for extraction. */
byte.mask = 0xFF as const;

/** Mask for unsigned representation. */
byte.decimalMask = 0x7F as const;

/** Sign mask for determining negativity in signed values. */
byte.signMask = 0x80 as const;

/** Converts a `byte` to an 8-bit array. */
byte.toArray = (binary: byte): byteArray => { return toArray(binary, byte.size) as byteArray }

/** Converts to a binary string. */
byte.toBinary = (binary: byte): string => { return padding(binary.toString(2), 8).toLocaleUpperCase() }

/** Converts to hexadecimal string. */
byte.toHexadecimal = (binary: byte): string => { return padding(binary.toString(16), 2).toLocaleUpperCase() }

/** Converts to string. */
byte.toString = (binary: byte): string => { return binary.toString(2).toLocaleUpperCase() }

/** Converts to signed number. */
byte.toSigned = (binary: byte): number => { return toSigned(binary, byte.signMask, byte.decimalMask) }

/** Returns numeric value. */
byte.valueOf = (binary: byte): number => { return binary.valueOf() }

/** Gets the bit value at index. */
byte.get = (binary: byte, at: byteIndex): boolean => { return get(binary, at) }

/** Sets the bit at index with a `bitLike` value. */
byte.set = (binary: byte, at: byteIndex, value: bitLike): byte => { return byte(set(binary, at, value)) }

/** Creates a `byte` from a `bitLike` array. */
byte.fromArray = (array: bitLike[]): byte => { return byte(fromArray(array)) }

//##################################################################################################################
//#
//#         Word
//#
//##################################################################################################################

/**
 * Represents a 16-bit binary value.
 */
export const word = (value: number): word => (value & word.mask) as word;

/** Number of bits. */
word.size = 16 as const;

/** Bitmask for extraction. */
word.mask = 0xFFFF as const;

/** Mask for unsigned representation. */
word.decimalMask = 0x7FFF as const;

/** Sign mask for determining negativity in signed values. */
word.signMask = 0x8000 as const;

/** Converts a `word` to an 8-bit array. */
word.toArray = (binary: word): wordArray => { return toArray(binary, word.size) as wordArray }

/** Converts to a binary string. */
word.toBinary = (binary: word): string => { return padding(binary.toString(2), 16).toLocaleUpperCase() }

/** Converts to hexadecimal string. */
word.toHexadecimal = (binary: word): string => { return padding(binary.toString(16), 4).toLocaleUpperCase() }

/** Converts to string. */
word.toString = (binary: word): string => { return binary.toString(2).toLocaleUpperCase() }

/** Converts to signed number. */
word.toSigned = (binary: word): number => { return toSigned(binary, word.signMask, word.decimalMask) }

/** Returns numeric value. */
word.valueOf = (binary: word): number => { return binary.valueOf() }

/** Gets the bit value at index. */
word.get = (binary: word, at: wordIndex): boolean => { return get(binary, at) }

/** Sets the bit at index with a `bitLike` value. */
word.set = (binary: word, at: wordIndex, value: bitLike): word => { return word(set(binary, at, value)) }

/** Creates a `word` from a `bitLike` array. */
word.fromArray = (array: bitLike[]): word => { return word(fromArray(array)) }

//##################################################################################################################
//#
//#         Dword
//#
//##################################################################################################################

/**
 * Represents a 32-bit binary value.
 */
export const dword = (value: number | bigint): dword => BigInt(value) & BigInt(dword.mask) as dword;

/** Number of bits. */
dword.size = 16 as const;

/** Bitmask for extraction. */
dword.mask = 0xFFFFFFFF as const;

/** Mask for unsigned representation. */
dword.decimalMask = 0x7FFFFFFF as const;

/** Sign mask for determining negativity in signed values. */
dword.signMask = 0x80000000 as const;

/** Converts a `word` to an 8-bit array. */
dword.toArray = (binary: dword): dwordArray => { return bigintToArray(binary, dword.size) as dwordArray }

/** Converts to a binary string. */
dword.toBinary = (binary: dword): string => { return padding(binary.toString(2), 32).toLocaleUpperCase() }

/** Converts to hexadecimal string. */
dword.toHexadecimal = (binary: dword): string => { return padding(binary.toString(16), 8).toLocaleUpperCase() }

/** Converts to string. */
dword.toString = (binary: dword): string => { return binary.toString(2).toLocaleUpperCase() }

/** Converts to signed number. */
dword.toSigned = (binary: dword): bigint => { return bigintToSigned(binary, BigInt(dword.signMask), BigInt(dword.decimalMask)) }

/** Returns numeric value. */
dword.valueOf = (binary: dword): bigint => { return binary.valueOf() }

/** Gets the bit value at index. */
dword.get = (binary: dword, at: dwordIndex): boolean => { return bigintGet(binary, BigInt(at)) }

/** Sets the bit at index with a `bitLike` value. */
dword.set = (binary: dword, at: dwordIndex, value: bitLike): dword => { return dword(bigintSet(binary, BigInt(at), value)) }

/** Creates a `word` from a `bitLike` array. */
dword.fromArray = (array: bitLike[]): dword => { return dword(fromArray(array)) }

//##################################################################################################################
//#
//#         Utilities
//#
//##################################################################################################################

function get(binary: number, at: number): boolean {
    return (binary >> at) & 0x1? true : false;
}

function set(binary: number, at: number, value: bitLike): number {
    let current: boolean = get(binary, at);
    let adder: number = value? 1 << at : -1 << at;

    if (current !== (value? true : false)) return binary + adder;
    return binary;
}

function toSigned(binary: number, signMask: number, decimalMask: number): number {
    return binary & signMask? -(binary & decimalMask) : binary;
}

function toArray(binary: number, length: number): bit[] {
    let result: bit[] = [];

    for(
        let index: number = length - 1, position: number = 0;
        index >= 0;
        result[index] = binary >> position? 1 : 0, index--, position++
    );

    return result;
}

function fromArray(array: bitLike[]): number {
    let result: number = 0;

    for(
        let index: number = array.length - 1, position: number = 0;
        index >= 0;
        result += (array[index]? 1 : 0) << position, index--, position++
    );
    
    return result;
}

function padding(value: string, length: number): string {
    let result = '';

    for(
        let index: number = 0, stringIndex: number = value.length - length;
        index < length;
        result += stringIndex >= 0? value[stringIndex] : '0', index++, stringIndex++
    );

    return result;
}

//##################################################################################################################
//#
//#         Utilities for BigInt
//#
//##################################################################################################################

function bigintGet(binary: bigint, at: bigint): boolean {
    return (binary >> at) & BigInt(0x1)? true : false;
}

function bigintSet(binary: bigint, at: bigint, value: bitLike): bigint {
    let current: boolean = bigintGet(binary, at);
    let adder: bigint = value? BigInt(1) << at : -BigInt(1) << at;

    if (current !== (value? true : false)) return binary + adder;
    return binary;
}

function bigintToSigned(binary: bigint, signMask: bigint, decimalMask: bigint): bigint {
    return binary & signMask? -(binary & decimalMask) : binary;
}

function bigintToArray(binary: bigint, length: number): bit[] {
    let result: bit[] = [];

    for(
        let index: number = length - 1, position: number = 0;
        index >= 0;
        result[index] = binary >> BigInt(position)? 1 : 0, index--, position++
    );

    return result;
}