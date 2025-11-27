function addTwo(num: number): number{
    return num+2;
}

function getUpper(val: string): string{
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPad: boolean){

}

const loginUser = (name: string, email: string, isPad: boolean) => {}

const getHello = (s: string): string => {return ""}

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero: string)=>{
    return `hero is ${hero}`;
})

function consoleError(errmsg: string) : void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}

addTwo(5);