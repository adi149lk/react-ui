import "./App.css";
import Section from "./components/section/section";
import Section2 from "./components/section2/section2";

function App() {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "satisfied",
    },

    {
      img: "https://media.istockphoto.com/id/1390330373/photo/young-business-woman-with-crossed-arms-outdoor-portrait.jpg?s=1024x1024&w=is&k=20&c=mJSpR1KoHJkrq0rSlPcikYFwYK82CBaKqZF1mPqoZ7s=",
      intro: "",
      tag: "underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1628125660717-5190c3fdfb86?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "underbanked",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661590867485-c67026a70bc7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "hyper",
    },
  ];
  return (
    <>
      <Section users={users} />
      <Section2 />
    </>
  );
}

export default App;
