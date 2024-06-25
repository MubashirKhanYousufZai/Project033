// METHOD OVERLOADING:

class Cigratte{
    Brand(brand: "Capstan") : string
    Brand(brand: "Goldleaf") : string
    Brand(brand: "Milano") : string
    Brand(brand: any) : any{
        if(brand == "Capstan"){
            console.log("Cigrattes is injurious to health🚭");
        } else if (brand == "Goldleaf"){
            console.log("Cigrattes is injurious to health🚭");
        } else if (brand == "Milano"){
            console.log("Cigrattes is injurious to health🚭");
        }
    }
}

let c1 = new Cigratte
c1.Brand("Capstan");

let c2 = new Cigratte
c2.Brand("Goldleaf");

let c3 = new Cigratte
c3.Brand("Milano");

class Vape{
    Pod(pod: "OXVA") : string 
    Pod(pod: "Argus") : string 
    Pod(pod: "P1") : string 
    Pod(pod: any ) : any {
        if (pod === "OXVA"){
            console.log("Vaping is injurious to health🚭");
        } else if (pod === "Argus"){
            console.log("Vaping is injurious to health🚭");
        } else if (pod === "P1"){
            console.log("Vaping is injurious to health🚭");
        }
    }
}

let v1 = new Vape 
v1.Pod("Argus");

let v2 = new Vape
v2.Pod("OXVA")

let v3 = new Vape
v3.Pod("P1")

class Drive{
    driving(Driving: "Over speading"): string
    driving(Driving: "Drifting"): string
    driving(Driving: "Rash Driving"): string
    driving(Driving: any): any{
        if(Driving == "Over speading"){
            console.log("Drive carefully🏳");
        } else if(Driving == "Drifting"){
            console.log("Drive carefully🏳");
        } else if(Driving == "Rash Driving"){
            console.log("Drive carefully🏳");
        }
    }
}

let d1 = new Drive
d1.driving("Drifting");

let d2 = new Drive
d2.driving("Over speading");

let d3 = new Drive 
d3.driving("Rash Driving");
