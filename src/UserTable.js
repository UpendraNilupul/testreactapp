import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"; 

const UserTable = ({ rows })  => {
    return (
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows && rows.length > 0 ? rows.map(row => (
                        <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': {border:0}}}>
                            <TableCell component='th' scope="row">{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell >
                                <Button sx={{margin: '0px 10px'}}
                                    onClick={()=>{}}
                                >
                                    Delete   
                                </Button>
                                <Button sx={{margin: '0px 10px'}}
                                    onClick={()=>{}}
                                >
                                    Update   
                                </Button>
                            </TableCell>
                        </TableRow>
                        

                    )) : (
                        <TableRow sx={{'&:last-child td, &:last-child th': {border:0}}}>
                            <TableCell component='th' scope="row" colSpan={3}>No Data</TableCell>
                        </TableRow>
                    )
                
                }
            </TableBody>
        </Table>

    </TableContainer>
    );

}

export default UserTable;