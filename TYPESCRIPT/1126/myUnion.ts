let score: number | string = 33;

score = 50;
score = "40";

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let hitest: User | Admin = {
    name: "hitest", id: 334
};

hitest = { username: "hc", id: 334};

// function getDbId(id: number | string){
//     console.log(`DB id : ${id}`);
// }

function getDbId(id: number|string){
    if (typeof id === "string") {
        id.toLowerCase();
    }
}

const data: (number| string)[] = [1, 2, 3, "4"];
const data2: any[] = [];