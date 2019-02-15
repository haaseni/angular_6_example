export class NotFoundError {    
    public code:    number = 404;
    public message: string = "Not found";
}

export class BadInputError {   
    constructor(public message: Promise<any>){ }
    public code: number = 400;    
}

export class AppError {        
    constructor(public message: Promise<any>){ }
    public code: number = 500;    
}