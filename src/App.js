import { React, useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import { FetchData } from "./services/index";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await FetchData();
    if (!response.error) setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {data.map((element) => (
          <>
          {element.lines.map((delement,i) => (
            <>
            <tr key={`${delement.hex}`}>
              <td>{element.file}</td>
              <td>{delement.text}</td>
              <td>{delement.number}</td>
              <td>{delement.hex}</td>
            </tr>
            </>
          ))}
          </>
        ))}
        
        
      </tbody>
    </Table>
  );
}

export default App;
