import { Unit } from './unit';

export interface Ingredient {
    name: string;
    description: string;
    code: string;
    pricePerUnit: string;
    unit: Unit;
    quantity: number;
}

export const ingredientFactory: (name: string, description: string, code: string, pricePerUnit: string, quantity: number, unit: Unit) => Ingredient =
    (name, description, code, pricePerUnit, quantity, unit) => ({
        name,
        description,
        code,
        pricePerUnit,
        quantity,
        unit
    });