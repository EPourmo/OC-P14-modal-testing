import { useState } from "react";
import Modal from "@epourmo/react-modal-oc-p14-npm-package";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="App">
        <h1>Test Modal</h1>
        <div className="card">
          <button
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Open Modal Here
          </button>
        </div>
      </div>
      {modalOpen && (
        <Modal setOpenModal={setModalOpen} message={"Employee Created!"} />
      )}
    </>
  );
}

export default App;
