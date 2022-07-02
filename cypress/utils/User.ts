import * as userJsonData from "../../users.json"

type UserData = {
    name: string,
    username: string,
    password: string,
}

export class User {
    userDataJSON = (JSON.parse(JSON.stringify(userJsonData)))['users'] as UserData[]

    getUserByName(name: string) {
        return this.userDataJSON.find((user: any) => user.name === name)
    }
}
