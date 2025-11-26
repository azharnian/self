interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    startTrail: () => string,
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}


const hitest: User = {
    dbId: 22,
    email: "h@h.com",
    userId: 2211,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name:"hitest10", off:10 ) => {
        return 10;
    },
    githubToken: "12345"
}

