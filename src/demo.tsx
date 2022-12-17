import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { Trash } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const onClickTest = (e: any) => {
  console.log(e);
};

export default function BasicTable() {
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Icon&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">
                <button>
                  <DeleteIcon onClick={() => onClickTest(row)} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <br />
    <div className="mdc-data-table" style={{width: "100%", marginRight:"0"}}>
  <div className="mdc-data-table__table-container">
    <table className="mdc-data-table__table" aria-label="Dessert calories">
      <thead>
        <tr className="mdc-data-table__header-row">
          <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Dessert</th>
          <th className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Carbs (g)</th>
          <th className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Protein (g)</th>
          <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Comments</th>
          <th className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Supprimer</th>
        </tr>
      </thead>
      <tbody className="mdc-data-table__content">
        <tr className="mdc-data-table__row">
          <th className="mdc-data-table__cell" scope="row">Frozen yogurt</th>
          <td className="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
          <td className="mdc-data-table__cell mdc-data-table__cell--numeric">4.0</td>
          <td className="mdc-data-table__cell">Super tasty</td>
          <td className='mdc-data-table__cell mdc-data-table__cell--numeric'>
            <Button variant="danger"><Trash size={25} color="white" onClick={() => onClickTest("TestButton")}/></Button>
          </td>
        </tr>
        <tr className="mdc-data-table__row">
          <th className="mdc-data-table__cell" scope="row">Ice cream sandwich</th>
          <td className="mdc-data-table__cell mdc-data-table__cell--numeric">37</td>
          <td className="mdc-data-table__cell mdc-data-table__cell--numeric">4.33333333333</td>
          <td className="mdc-data-table__cell">I like ice cream more</td>
        </tr>
        <tr className="mdc-data-table__row">
          <th className="mdc-data-table__cell" scope="row">Eclair</th>
          <td className="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
          <td className="mdc-data-table__cell mdc-data-table__cell--numeric">6.0</td>
          <td className="mdc-data-table__cell">New filing flavor</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    </>
  );
}
