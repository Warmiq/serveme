import { Unit } from './unit';

export class Ingredient implements Ingredient {

    constructor(
        public readonly name: string,
        public readonly description: string,
        public readonly code: string,

        public readonly quantity: number,
        public readonly unit: Unit) {

    }
}