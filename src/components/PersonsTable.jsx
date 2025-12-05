import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import TableSortLabel from "@mui/material/TableSortLabel";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteIcon from "@mui/icons-material/Delete";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function PersonsTable({ persons, onDelete, onToggleFavorite }) {
  const navigate = useNavigate();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("yearsWorked");

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedPersons = [...persons].sort(getComparator(order, orderBy));

  return (
    <ThemeProvider theme={theme}>
      <TableContainer
        component={Paper}
        sx={{
          marginTop: 3,
          overflowX: "auto",
          "@media (max-width: 600px)": {
            maxWidth: "100vw",
          },
          "@media (max-width: 400px)": {
            maxWidth: "100vw",
            overflowX: "scroll",
          },
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="employees table">
          <TableHead
            sx={{
              backgroundColor: "secondary.main",
              border: "1px solid primary.main",
            }}
          >
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Location</TableCell>
              <TableCell
                sortDirection={orderBy === "yearsWorked" ? order : false}
                sx={{ fontWeight: 700 }}
              >
                <TableSortLabel
                  active={orderBy === "yearsWorked"}
                  direction={orderBy === "yearsWorked" ? order : "asc"}
                  onClick={() => handleRequestSort("yearsWorked")}
                >
                  Years of work
                </TableSortLabel>
              </TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Department</TableCell>
              <TableCell align="right" sx={{ fontWeight: 700 }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedPersons.map((p) => (
              <TableRow key={p.id}>
                <TableCell
                  sx={{
                    whiteSpace: { xs: "nowrap", sm: "normal" },
                    padding: { xs: "6px", sm: "16px" },
                  }}
                >
                  {p.name}
                </TableCell>

                <TableCell
                  sx={{
                    whiteSpace: { xs: "nowrap", sm: "normal" },
                    padding: { xs: "6px", sm: "16px" },
                  }}
                >
                  {p.location}
                </TableCell>

                <TableCell
                  sx={{
                    whiteSpace: { xs: "nowrap", sm: "normal" },
                    padding: { xs: "6px", sm: "16px" },
                  }}
                >
                  {p.yearsWorked}
                </TableCell>

                <TableCell
                  sx={{
                    whiteSpace: { xs: "nowrap", sm: "normal" },
                    padding: { xs: "6px", sm: "16px" },
                  }}
                >
                  {p.department}
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    padding: { xs: "6px", sm: "16px" },
                  }}
                >
                  <IconButton onClick={() => onToggleFavorite(p.id)}>
                    {p.isFavorite ? (
                      <StarIcon sx={{ color: "secondary.main" }} />
                    ) : (
                      <StarBorderIcon sx={{ color: "secondary.main" }} />
                    )}
                  </IconButton>

                  <IconButton onClick={() => navigate(`/employee/${p.id}`)}>
                    🔍
                  </IconButton>

                  <IconButton onClick={() => onDelete(p.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}

// <TableContainer component={Paper} sx={{ marginTop: 3 }}>
//   <Table sx={{ minWidth: 650 }} aria-label="employees table">
//     <TableHead
//       sx={{
//         marginTop: 3,
//         backgroundColor: "secondary.main",
//         border: "1px solid primary.main",
//       }}
//     >
//       <TableRow>
//         <TableCell>Name</TableCell>
//         <TableCell>Location</TableCell>
//         <TableCell
//           sortDirection={orderBy === "yearsWorked" ? order : false}
//         >
//           <TableSortLabel
//             active={orderBy === "yearsWorked"}
//             direction={orderBy === "yearsWorked" ? order : "asc"}
//             onClick={() => handleRequestSort("yearsWorked")}
//           >
//             Years of work
//           </TableSortLabel>
//         </TableCell>
//         <TableCell>Department</TableCell>
//         <TableCell align="right">Actions</TableCell>
//       </TableRow>
//     </TableHead>

//     <TableBody>
//       {sortedPersons.map((p) => (
//         <TableRow key={p.id}>
//           <TableCell>{p.name}</TableCell>
//           <TableCell>{p.location}</TableCell>
//           <TableCell>{p.yearsWorked}</TableCell>
//           <TableCell>{p.department}</TableCell>
//           <TableCell align="right">

//             <IconButton onClick={() => onToggleFavorite(p.id)}>
//               {p.isFavorite ? (
//                 <StarIcon sx={{ color: "secondary.main" }} />
//               ) : (
//                 <StarBorderIcon sx={{ color: "secondary.main" }} />
//               )}
//             </IconButton>

//             <IconButton onClick={() => navigate(`/employee/${p.id}`)}>
//               🔍
//             </IconButton>

//             <IconButton onClick={() => onDelete(p.id)}>
//               <DeleteIcon color="primary.main" />
//             </IconButton>
//           </TableCell>
//         </TableRow>
//       ))}
//     </TableBody>
//   </Table>
// </TableContainer>;
