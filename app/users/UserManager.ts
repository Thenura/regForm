import { UserService } from './UserService';
import {IUser} from "../models/interfaces"
export class UserManager {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  //Add a new user
  public async createUser (user: IUser){
    
  }
  
}