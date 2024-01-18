import "./App.css";
import { Tilt } from "react-tilt";
import { FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

function App() {
  const headOrTail = () => {
    let randNum = Math.floor(Math.random() * 100 + 1);
    if (randNum % 2 === 0) return true;
    return false;
  };

  const notify = () => {
    toast("🤝🏾 Paste it anywhere!");

    toast.info("🤝🏾 Paste it anywhere!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const changeCase = () => {
    let txtArea = document.querySelector("textarea");
    let txt = txtArea.value;
    if (txt === " " || txt === "") return;
    let changedCase = "";
    for (let i = 0; i < txt.length; i++) {
      if (txt[i] == " ") {
        changedCase += " ";
        continue;
      }

      if (headOrTail()) changedCase += txt[i].toLowerCase();
      else changedCase += txt[i].toUpperCase();
    }
    document.querySelector("textarea").value = changedCase;

    txtArea.select();
    txtArea.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(changedCase);

    notify();
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex justify-center md:w-4/12 bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg m-auto">
        <div className="flex flex-col gap-2 w-full">
          <Tilt options={defaultOptions}>
            <div>
              <p style={{ cursor: "default" }} className="text-center text-5xl md:text-6xl">
                JoKrCAsE
              </p>
            </div>
          </Tilt>
          <textarea
            placeholder="Type here ni66a"
            className="flex h-15 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none caret-black focus:border-black disabled:cursor-not-allowed disabled:opacity-50"
            id="text"
            rows="4"
          ></textarea>
          <button
            type="button"
            onClick={() => changeCase()}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            chipi chipi chapa chapa
          </button>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
      <div className="m-5">
        <a href="https://github.com/abdullahazharkhan">
          <FaGithub size={40} color="white" />
        </a>
      </div>
    </div>
  );
}

export default App;