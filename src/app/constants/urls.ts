import {environment} from "../../environments/environment";

const {API} = environment;

const cars = `${API}/cars`
const auth = `${API}/auth`
const users = `${API}/users`

const urls = {
  cars: {
    base: cars,
    byId: (id: number): string => `${cars}/${id}`
  },
  auth: {
    login: auth,
    refresh: `${auth}/refresh`,
    register: users,
    me:`${auth}/me`

  }
}

export {
  urls
}
