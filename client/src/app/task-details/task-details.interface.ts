
// personalinfo.interface.ts
export interface TaskInfo {
    fullName: {
        firstName: string;
        lastName: string;
    }
    address: {
        line1: string;
        line2: string;
    }
    cityAndPostalCode: {
        city: string;
        postalCode: string;
    }

    stateAndCountry: {
        state: string;
        country: string;
    }
    phone: {
        mobile: string;
        landline: string;
    }
    //subscribeAlerts:boolean;
}