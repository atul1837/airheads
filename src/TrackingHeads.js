import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import {Tabs,Tab,AppBar} from '@mui/material';

const rows = [
  ["NET WORTH", "CLAIMABLE", "TOTAL ASSETS", "TOTAL DEBDS"],
  ["$578,742,962.61", "$0", "$578,742,962.61", "$0"],
];

export default function ColorTabs() {
    const [value, setValue] = React.useState('one');
  
    const handleTabs = (e,val ) => {
      setValue(val);
    }
};

export default function TrackingHeads() {
  return (
    <div>
      {/* steps
      
      
      3 tabs 
      4 portofolio tab coding
       */}

      <h1>TRACKING HEADS</h1>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {row.map((cell) => (
                  <TableCell component="th" scope="row">
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleTabs}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </Box>
    </div>
  );
}
