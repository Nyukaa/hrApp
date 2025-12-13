import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const EmpDataGrid = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch data from API
  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3001/employees");
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (error) return <div>Error loading data</div>;

  // Функция для сохранения строки на сервере
  const handleSave = async (updatedRow) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/employees/${updatedRow.id}`,
        updatedRow
      );
      console.log("Row saved:", response.data);
      return response.data; // возвращаем обновлённую строку для DataGrid
    } catch (err) {
      console.error("Error saving row:", err);
      throw err; // важно для onProcessRowUpdateError
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "title", headerName: "Title", width: 180, editable: true },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        const statusColors = {
          active: "yellowgreen",
          inactive: "red",
          onleave: "yellow",
        };
        const color = statusColors[params.value?.toLowerCase()] || "gray";

        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "capitalize",
              backgroundColor: color,
              color: "white",
              padding: "4px 8px",
              borderRadius: "4px",
            }}
          >
            {params.value || ""}
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={data ?? []}
        columns={columns}
        loading={loading}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        getRowId={(row) => row.id}
        processRowUpdate={async (newRow, oldRow) => {
          // обновляем локально стейт сразу
          setData((prev) =>
            prev.map((row) => (row.id === newRow.id ? newRow : row))
          );
          // отправляем на сервер
          return await handleSave(newRow);
        }}
        onProcessRowUpdateError={(err) => console.error(err)}
      />
    </div>
  );
};

export default EmpDataGrid;

// import { DataGrid } from "@mui/x-data-grid";
// import useAxios from "../hooks/useAxios";

// const EmpDataGrid = () => {
//   const columns = [
//     {
//       field: "status",
//       headerName: "Status",
//       width: 150,
//       renderCell: (params) => {
//         const statusColors = {
//           Active: "green",
//           Inactive: "red",
//           OnLeave: "orange",
//         };
//         const color = statusColors[params.value] || "gray";

//         return (
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               textTransform: "capitalize",
//               backgroundColor: color,
//               color: "white",
//               padding: "4px 8px",
//               borderRadius: "4px",
//             }}
//           >
//             {params.value || ""}
//           </div>
//         );
//       },
//     },
//     // можно добавить другие колонки
//   ];

//   const url = "http://localhost:3001/employees";
//   const { data, loading, error } = useAxios(url);

//   if (error) return <div>Error loading data</div>;

//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <DataGrid
//         rows={data || []}
//         columns={columns}
//         loading={loading}
//         pageSize={5}
//       />
//     </div>
//   );
// };

// export default EmpDataGrid;
