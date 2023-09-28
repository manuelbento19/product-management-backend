export class ErrorHandler extends Error{
    constructor(message: string) {
        super();
        this.message = message;
    }
}