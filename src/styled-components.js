import styled from "styled-components";
import {
  Grid as GridRoot,
  Row as RowRoot,
  Col as ColRoot,
} from "react-flexbox-grid";

export const Grid = styled(GridRoot)`
  padding: revert;
  margin-top: 4rem;
  height: 93vh;
`;

export const Row = styled(RowRoot)`
  margin-left: unset;
  margin-right: unset;
`;

export const Col = styled(ColRoot)``;
