import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const GalleryListItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
