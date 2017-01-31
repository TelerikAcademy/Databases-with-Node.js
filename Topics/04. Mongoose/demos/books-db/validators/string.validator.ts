export class StringValidator {
    public static getValidator(min: number, max: number): (value: string) => boolean {
        return (value: string) => {
            const isLengthValid = min <= value.length && value.length <= max;
            return isLengthValid;
        }
    }
}