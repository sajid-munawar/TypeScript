interface Ball {
    diamerter:number
    radius?:number
}

interface Sephere {
    diamerter:number
}

let ball:Ball={
    diamerter:10,
    radius:6
}

let sephere:Sephere={diamerter:20}

ball=sephere;
sephere=ball