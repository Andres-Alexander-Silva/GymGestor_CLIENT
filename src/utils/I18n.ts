interface LabelDisplayedRowsParams {
  from: number;
  to: number;
  count: number;
}

export const labelRowsPerPage = "Filas por página";

export const labelDisplayedRows = ({
  from,
  to,
  count,
}: LabelDisplayedRowsParams) =>
  `${from}–${to} de ${count !== -1 ? count : `más de ${to}`}`;
