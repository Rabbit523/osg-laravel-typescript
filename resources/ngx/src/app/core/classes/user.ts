
export enum ApplicationUserRole{
    PersonalTrainer = 'PersonalTrainer',
    ProgramDesigner = 'ProgramDesigner',
    StrengthAthlete = 'StrengthAthlete'
}

export interface IApplicationUser{
    role?: ApplicationUserRole,
    name?: string;
    imageUrl?: string;
}

export class ApplicationUser implements IApplicationUser{
    role: ApplicationUserRole;
    constructor(data?: IApplicationUser){
        if(data){
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}