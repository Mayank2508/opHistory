import { Injectable} from "@nestjs/common/decorators/core/injectable.decorator";
import { Operation } from "./operations.model";
import { InjectModel } from "@nestjs/mongoose/dist/common";
import { Model } from "mongoose";
@Injectable()

export class OperationsServices{

    constructor(@InjectModel('Operation') private readonly OperationModel:Model<Operation>){}

    async getLastTwenty() 
    {
        const res = await this.OperationModel.find()
        .sort({ createdAt: -1 })
        .limit(20)
        .exec();
        const parsedRes = res.map(res=>JSON.parse(res.operationName));
        const htmlResponse = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>History</title>
        </head>
        <body>
          <h1>History</h1>
          <table class="beautiful-table">
          <tr>
            <th> Index </th>
            <th> Question </th>
            <th> Answer </th>
          </tr>
            ${parsedRes.map((item, index )=> `
            <tr>
            <td>${index+1}</td>
            <td> Question: ${item.question}</td> 
            <td> Answer: ${item.ans}</td>
            </tr>`
            ).join('')}
          <table>
        </body>
      </html>
      <style>
      /* Reset default margin and padding */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    
      /* Apply some general styling to the table */
      table.beautiful-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px;
        font-family: Arial, sans-serif;
        background-color: #f8f8f8;
        border: 1px solid #ddd;
      }
    
      /* Style for table header cells */
      table.beautiful-table th {
        background-color: #f2f2f2;
        color: #333;
        padding: 10px;
        border: 1px solid #ddd;
        text-align: left;
      }
    
      /* Style for table data cells */
      table.beautiful-table td {
        padding: 10px;
        border: 1px solid #ddd;
      }
    
      /* Alternating row colors */
      table.beautiful-table tbody tr:nth-child(even) {
        background-color: #f2f2f2;
      }
    </style>
    `;
    return htmlResponse;
    }

    async insertOperation(operationName:any)
    {
        const newOperation=new this.OperationModel({operationName});
        const result =await newOperation.save();
        return result.id as string;
    }
    async calculate(sequence)
    {
        sequence = sequence.replaceAll('/','')
        .replaceAll('plus','+')
        .replaceAll('into','*')
        .replaceAll('by','/')
        .replaceAll('minus','-');
        const response = {question:sequence, ans:eval(sequence)};
        await this.insertOperation(JSON.stringify(response));
        return response;
    }
}