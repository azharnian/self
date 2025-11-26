// console.log("Hello, from typescript");
// console.log("Hello, again...")

// class User {
//     public email: string;
//     private name: string;
//     private readonly city: string = "Jaipur";

//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }

class User {

    protected _courseCount = 1;

    readonly city: string = "Jaipur";
    constructor(
        public email: string,
        public name: string,
        // private userId: string
    ){}

    get getAppleEmail(): string{
        return `apple${this.email}`;
    }

    get getCourseCount(): number{
        return this._courseCount;
    }

    set setCourseCount(courseNum: number){
        if (courseNum <= 1){
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }

    private deleteToken(){
        console.log("Token deleted");
    }
}

class SubUser extends User {
    isFamily: boolean = true;
    changeCourseCount(){
        this._courseCount = 4;
    }
}

// interface TakePhoto {
//     cameraMode: string;
//     filter: string;
//     burst: number;
// }

// interface Story {
//     createStory(): void;
// }

// class Instagram implements TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ){};
// }

// class Youtube implements TakePhoto, Story{
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number,
//         public short: string
//     ){};

//     createStory(): void {
//         console.log("Story was created");
//     }
// }

abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){};

    abstract getSepia(): void;
    getReelTime(): number{
        return 8;
    }
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter);
    };

    getSepia(): void {
        console.log("Sepia");
    }
}



const hitesh = new User("h@h,com", "hitesh");
const hc = new Instagram("test", "Test", 3);