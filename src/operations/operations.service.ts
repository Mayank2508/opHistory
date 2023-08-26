import { Injectable} from "@nestjs/common/decorators/core/injectable.decorator";
import { Operation } from "./operations.model";
import { InjectModel } from "@nestjs/mongoose/dist/common";
import { Model } from "mongoose";
import { mapHistory } from "src/helpers";
@Injectable()

export class OperationsServices{

    constructor(@InjectModel('Operation') private readonly OperationModel:Model<Operation>){}

    async getLastTwenty() 
    {
      const res = await this.OperationModel.find({}, { operation:true })
        .sort({ createdAt: -1 })
        .limit(20)
        .exec();
      return mapHistory(res);
    }

    async insertOperation(operation):Promise<string>
    {
        const newOperation = new this.OperationModel({operation});
        const result = await newOperation.save();
        return result.id;
    }
    
    async calculate(sequence)
    {
        sequence = sequence.replaceAll('/','')
        .replaceAll('plus','+')
        .replaceAll('into','*')
        .replaceAll('by','/')
        .replaceAll('minus','-');
        const res = {question: sequence, ans: eval(sequence)};
        await this.insertOperation(res);
        return res;
    }
}