import { Dialog } from "@mui/material";
import { Box } from "@mui/system";
import Menu from "./menu/Menu";
import styled from "@emotion/styled";
import EmptyChat from "./chat-app/EmptyChat";
import Search from "./menu/Search";

const modifiedDialog = {
  height: "96%",
  margin: "20px",
  width: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  borderRadius: 0,
};

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  min-width: 550px;
`;

const RightComponent = styled(Box)`
  width: "73%";
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const ChatDialog = () => {
  return (
    <Dialog
      open={true}
      PaperProps={{ sx: modifiedDialog }}
      hideBackdrop={true}
      maxWidth={"md"}
    >
      <Component>
        <LeftComponent>
          <Menu />
        </LeftComponent>

        <RightComponent>
          <EmptyChat />
        </RightComponent>
      </Component>
    </Dialog>
  );
};

export default ChatDialog;
