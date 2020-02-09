import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel} from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
  }
  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id });
  }

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    newUser.status = 'Active';
    return await newUser.save();
  }



  async update(id: string, user: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, user, { new: true });
  }
  async changeStatus(id: string, user: User): Promise<User> {
    return this.userModel.findOne({_id: id}).exec()
      .then(userId => {
        if (user.hasOwnProperty('status')) {
          userId.status = 'Inactive';
        }

        return userId.save();
      })
      .catch(err => {
        throw (err);
      });
  }

}
