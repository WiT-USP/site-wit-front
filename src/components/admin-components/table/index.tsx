import React, { useState } from 'react';
import { Container } from "./style";

interface Person {
  id: number;
  nome: string;
  email: string;
}

interface TableProps {
  data: Person[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const itemsPerPage = 10; // Quantidade de pessoas por página
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const peopleToShow = data.slice(startIndex, startIndex + itemsPerPage);

  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    if (selectedRows.includes(id)) {
      // Se o ID já estiver selecionado, remova-o
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      // Caso contrário, adicione-o aos IDs selecionados
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.length === peopleToShow.length) {
      // Se todos já estiverem selecionados, desmarque todos
      setSelectedRows([]);
    } else {
      // Caso contrário, selecione todos
      setSelectedRows(peopleToShow.map(person => person.id));
    }
  };

  return (
    <Container>
      <table className='custom-table'>
        <thead>
          <tr>
            <th>
              <div className='custom-checkbox'>
                <input
                  type='checkbox'
                  checked={selectedRows.length === peopleToShow.length}
                  onChange={handleSelectAll}
                />
              </div>
            </th>
            <th>ID</th>
            <th>NOME</th>
            <th>E-MAIL</th>
          </tr>
        </thead>
        <tbody>
          {peopleToShow.map(person => (
            <tr key={person.id}>
              <td>
                <div className='custom-checkbox'>
                  <input
                    type='checkbox'
                    checked={selectedRows.includes(person.id)}
                    onChange={() => handleCheckboxChange(person.id)}
                  />
                </div>
              </td>
              <td>{person.id}</td>
              <td>{person.nome}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Renderize a paginação */}
      <div className='page-area'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className='btn-page'
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </Container>
  );
};

export default Table;