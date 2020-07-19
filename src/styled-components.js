import styled from "styled-components";
import {
  Grid as GridRoot,
  Row as RowRoot,
  Col as ColRoot,
} from "react-flexbox-grid";

export const Grid = styled(GridRoot)`
  padding: revert;
`;

export const Row = styled(RowRoot)`
  margin-left: unset;
  margin-right: unset;
`;

export const Col = styled(ColRoot)`
  padding-right: 0;
  padding-left: 0;
`;
