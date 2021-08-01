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
          width: 50,
          Cell: (props) => <b style={{ fontSize: "16px", color: "#000", fontFamily: "GothamMedium" }}>{props.value}</b>,
        },
        {
          width: "100%",
          accessor: "postTitle",
        },
        {
          accessor: "actions",
          width: 200,
          Cell: (props) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button icon="remove" fontColor={RED_1} iconSize="md" isIconButton={true} />
              <Button icon="edit" fontColor={GREY_6} iconSize="md" isIconButton={true} />
              <Button icon="favorite" fontColor={BLUE_1} iconSize="md" isIconButton={true} />
            </div>
          ),
        },
        {
          width: 100,
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
