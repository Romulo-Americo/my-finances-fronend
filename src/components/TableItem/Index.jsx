import { TableCell, TableRow } from "@mui/material"

export const TableItem = ({data, categoria_id, titulo, valor }) => {
    let dataFormatada = data.split('-').reverse().join('-')
    return (
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell sx={{ color: '#fff' }} align="center">{dataFormatada}</TableCell>
                <TableCell
                    sx={{ color: categoria_id === 'Ganho' ? 'green' : 'red'}} align="center">
                    {categoria_id}
                </TableCell>
                <TableCell sx={{ color: '#fff' }} align="center">{titulo}</TableCell>
                <TableCell sx={{ color: '#fff' }} align="center">R$ {valor}</TableCell>

            </TableRow>
    )
}