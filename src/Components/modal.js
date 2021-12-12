import "./modal.css";

const button = {
  backgroundColor: "rgb(89,50,150)",
  fontFamily: "Architects Daughter",
  borderRadius: "6px",
  fontSize: "1em",
  display: "inline-block",
  margin: "10px 3px",
  boxShadow: "rgba(155, 75, 200) 0px 1px 5px",
};
const logo = {
  fontSize: "3em",
  padding: "10px",
  marginTop: "10px",
  fontFamily: "Rock Salt",
};
const slogan = {
  fontSize: "1.1em",
  fontFamily: "Roboto",
};
function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1 style={logo}>RugPull</h1>
        </div>
        <div className="body">
          <p style={slogan}>
            Safe place to confess. Every confession is 100% anonymous.
            Positivity is our top priority. Feel free to delete any negative
            confessions you see. Users breaking rules will get banned. &#127770;
          </p>
        </div>
        <div className="footer">
          <button
            style={button}
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
