class PERSON{
    constructor(id, name, active){
        this.id = id;
        this.name = name;
        this.active = active;
    }
}


class PROVIDER extends PERSON{
    constructor(id, name, active, areasOfExpertise){
        super(id, name, active);
        this.areasOfExpertise = areasOfExpertise;
    }
}

class CLIENT extends PERSON{
    constructor(id, name, active, address, contactNo, email){
        super(id, name, active);
        this.address = address;
        this.contactNo = contactNo;
        this.email = email;
    }

    // makeAppointment(appointmentId, date, time, duration, provider, cost, description){
    //     return APPOINTMENT(appointmentId, date, time, duration, provider, this.name, cost, description)
    //}
}

let prov1 = new PROVIDER(2, "JC", false, "Dentist")
let prov2 = new PROVIDER(4, "Bob", true, "OT")

let providers = [prov1, prov2]

let c1 = new CLIENT(5, "Jacey", true, "M31NN", "12345", "jc@hotmail.com")
let c2 = new CLIENT(6, "Agatha", false, "BL09UG", "364592", "ag@gmail.com")

let clients = [c1, c2]

let p1 = new PERSON(1, "Ag", true)
let p2 = new PERSON(2, "Tilly", true)

let people = [p1, p2, providers, clients]

console.log(people)

class APPOINTMENT{
    constructor(appointmentId, date, time, duration, provider, client, cost, description){
        this.appointmentId = appointmentId;
        this.date = date;
        this.time = time;
        this.duration = duration;
        this.provider = provider;
        this.client = client;
        this.cost = cost;
        this.description = description; 
    }
}

let appointment1 = new APPOINTMENT('appointmentId', 'date', 'time', 'duration', prov1, c1, 'cost', 'description')
console.log(appointment1)