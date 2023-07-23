import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";
// import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "3e7f1401-630b-41a9-90bb-35e5b3c40616",
    props.user.username,
    props.user.secret
  );
  return (
    <div className="background">
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100vh" }} />
      {/* <PrettyChatWindow
        projectID="3e7f1401-630b-41a9-90bb-35e5b3c40616"
        userName={props.user.username}
        secret={props.user.secret}
        style={{ height: "100vh" }}
      /> */}
    </div>
  );
};

export default ChatsPage;
