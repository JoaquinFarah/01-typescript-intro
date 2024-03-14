
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Joaquin',
}

const passenger2: Passenger = {
    name: 'Maria',
    children: ['Juan', 'Pedro'],
}


const returnChildrenNumber = ( passenger: Passenger ): number => {
    // const howManyChildren = passenger.children?.length || 0;
    
    const howManyChildren = passenger.children!.length;

    console.log(passenger.name, howManyChildren)
}

returnChildrenNumber(passenger1);

