class PERSON{
    constructor(id, name, active){
        this.id = id;
        this.name = name;
        this.active = active;
    }
}


class PROVIDER extends PERSON{
    constructor(id, name, active, areaOfExpertese){
        super(id, name, active);
        this.areaOfExpertese = areaOfExpertese;
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

let prov1 = new PROVIDER(2, "JC", true, "Dentist")
let prov2 = new PROVIDER(4, "Bob", true, "OT")

let providers = [prov1, prov2]

let c1 = new CLIENT(5, "Jacey", true, "M31NN", "12345", "jc@hotmail.com")
let c2 = new CLIENT(6, "Agatha", false, "BL09UG", "364592", "ag@gmail.com")

let clients = [c1, c2]

let p1 = new PERSON(1, "Ag", true)
let p2 = new PERSON(2, "Tilly", true)

let people = [p1, p2, providers, clients]

//console.log(people)

let appointmentId = 1;

class APPOINTMENT{
    constructor(date, time, duration, providerJob, client, description){
        this.appointmentId = appointmentId;
        this.date = date;
        this.time = time;
        this.duration = duration;
        this.provider = chooseProvider(providerJob);
        this.client = clientNameCheck(client);
        this.cost = costCalculator(duration);
        this.description = description; 
    }

    appointmentId = appointmentId + 1;
}

function chooseProvider(provAreaOfExpertese){
    let chooseProviderArray = []
    for(var i = 0; i < providers.length; i++){
        if(providers[i].areaOfExpertese == provAreaOfExpertese && providers[i].active == true){
            chooseProviderArray.push(providers[i]);
        }
    }
    max = chooseProviderArray.length - 1
    min = 0
    index = Math.floor(Math.random() * (max - min + 1)) + min

    return chooseProviderArray[index]
}

function clientNameCheck(clientName){
    for(var i = 0; i < clients.length; i++){
        if(clients[i].name == clientName){
            x = clients[i]
        }
    }
    return x
}

function costCalculator(duration){
    let cost = "0"
    if(duration == "5 minutes"){
        cost = "£10"
    }else if(duration == "10 minutes"){
        cost = "£12"
    }else if(duration == "15 minutes"){
        cost = "£15"
    }
    console.log(cost)
    return cost
}


let appointment1 = new APPOINTMENT('date', 'time', "5 minutes", prov1.areaOfExpertese, 'Jacey', 'description')
// console.log(appointment1)

function init(){
    var select = document.getElementById("selectProvider");

    for(var i = 0; i < providers.length; i++){

        var opt = providers[i].areaOfExpertese;
        console.log(opt);
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = providers[i];
        console.log(el);

        select.appendChild(el);
        console.log(select)
    }
}

// document.addEventListener("DOMContentLoaded", init());