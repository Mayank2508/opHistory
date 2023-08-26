export function mapHistory(res):string
{
  const operation = res.map(res=>res.operation);
  return `<!DOCTYPE html>
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
              ${operation.map((item, index )=> `
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
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    
      table.beautiful-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px;
        font-family: Arial, sans-serif;
        background-color: #f8f8f8;
        border: 1px solid #ddd;
      }
    
      table.beautiful-table th {
        background-color: #f2f2f2;
        color: #333;
        padding: 10px;
        border: 1px solid #ddd;
        text-align: left;
      }
    
      table.beautiful-table td {
        padding: 10px;
        border: 1px solid #ddd;
      }
    
      table.beautiful-table tbody tr:nth-child(even) {
        background-color: #f2f2f2;
      }
    </style>`
}

export function getDescription(): string 
{
  return `
  <!DOCTYPE html>
  <html>
  <head>
      <title>API Description</title>
  </head>
  <body>
      <h1>API Description</h1>
      <table class="beautiful-table">
      <tr>
          <th> GET Request </th>
          <th> Response </th>
      </tr>
      <tr>
          <td>
              HTML
          </td>
          <td>
              Lists all the get endpoint samples you can demo (like below)
          </td>
      </tr>
      <tr>
          <td>
              /history
          </td>
          <td>
              HTML Lists the last 20 operations performed on the server, and the answers.
          </td>
      </tr>
      <tr>
          <td>
              /5/plus/3
          </td>
          <td>
              JSON {question:”5+3”,answer: 8}
          </td>
      </tr>
      <tr>
          <td>
              /3/minus/5
          </td>
          <td>
              JSON {question:”3-5”, answer: -2}
          </td>
      </tr>
      <tr>
          <td>
              /3/minus/5/plus/8
          </td>
          <td>
              JSON {question:”3-5+8”, answer: 6}
          </td>
      </tr>
      <tr>
          <td>
              /3/into/5/plus/8/into/6
          </td>
          <td>
              JSON {question:”3*5+8*6”, answer: 63}
          </td>
      </tr>
      <table>
  </body>
  </html>
  <style>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  table.beautiful-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px;
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  }
  table.beautiful-table th {
  background-color: #f2f2f2;
  color: #333;
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
  }
  table.beautiful-table td {
  padding: 10px;
  border: 1px solid #ddd;
  }
  table.beautiful-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
  }
  </style>
  `;
}
