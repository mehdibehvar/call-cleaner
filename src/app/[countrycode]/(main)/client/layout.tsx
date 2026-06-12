import ChatBot from "@/modules/common/components/chat/chat-bot"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      {children}
        <ChatBot />
    </div>
  );
};

export default Layout;
