import { BLUE_1, GREY_6, RED_1 } from "../../consts/colors";
import Button from "../form/Button";
import TableIndicator from "./commons/TableIndicator";

export default function BlogDetailsTableIndicator() {
  return (
    <TableIndicator
      label="Blog details"
      columns={[
        {
          accessor: "postNumber",
          maxWidth: "50px",
          Cell: (props) => <b style={{ fontSize: "16px", color: "#000", fontFamily: "GothamMedium" }}>{props.value}</b>,
        },
        {
          minWidth: "120px",
          maxWidth: "300px",
          accessor: "postTitle",
        },
        {
          accessor: "actions",
          maxWidth: "100px",
          Cell: (props) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button icon="remove" fontColor={RED_1} iconSize="md" isIconButton={true} />
              <Button icon="edit" fontColor={GREY_6} iconSize="md" isIconButton={true} />
              <Button icon="favorite" fontColor={BLUE_1} iconSize="md" isIconButton={true} />
            </div>
          ),
        },
        {
          maxWidth: "70px",
          accessor: "favorites",
          Cell: (props) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button icon="heart" fontColor={RED_1} iconSize="md" isIconButton={true} />
              <span style={{ fontSize: "16px" }}>{props.value}</span>
            </div>
          ),
        },
      ]}
      data={[
        {
          postNumber: "#1",
          postTitle: "Never Gonna Done Again",
          favorites: "789",
        },
        {
          postNumber: "#2",
          postTitle: "Never Gonna Done Again",
          favorites: "789",
        },
        {
          postNumber: "#3",
          postTitle: "Never Gonna Done Again",
          favorites: "789",
        },
        {
          postNumber: "#4",
          postTitle: "Never Gonna Done Again",
          favorites: "789",
        },
      ]}
    />
  );
}
