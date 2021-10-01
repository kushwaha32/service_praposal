import ActionGrade from "material-ui/svg-icons/action/grade";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import { Link } from "react-router-dom";

const { ListItem, List } = require("material-ui");

const NavLinkCu = ({ show }) => {
  if (show) {
    return (
      <List className={"navStyle"}>
        <Link to="/">
          <ListItem primaryText="simple" leftIcon={<ContentInbox />} />
        </Link>
        <Link to="/step-form">
          <ListItem primaryText="Step Form" leftIcon={<ActionGrade />} />
        </Link>
        
      </List>
    );
  }else{
    return(<></>)
  }
};

export default NavLinkCu;
