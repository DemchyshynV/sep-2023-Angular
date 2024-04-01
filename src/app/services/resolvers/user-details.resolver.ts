import {ResolveFn, Router} from '@angular/router';
import {IUser} from "../../interfaces";
import {inject} from "@angular/core";
import {UserService} from "../user.service";

export const userDetailsResolver: ResolveFn<IUser> = (route, state) => {
  const router = inject(Router);
  const user = router.getCurrentNavigation()?.extras.state as IUser;

  if (!user) {
    const {id} = route.params;
    const userService = inject(UserService);
    return userService.getById(id);
  }
  return user
};
