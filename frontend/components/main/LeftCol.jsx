import DAOChannel from './DAOChannel';

function BasicExample({ currLeft, setCurrLeft }) {
	// const currentItem = () => {
	//   console.log("hello world");
	// };

	return (
    <div
      style={{
        height: "100vh",
        overflow: "scroll",
      }}
      className="sticky-top pt-3"
    >
      <div
        onClick={() => {
          setCurrLeft("DAO1");
        }}
        style={{ cursor: "pointer" }}
      >
        <DAOChannel
          img="/polygon.png"
          name="DAO-1"
          active={currLeft === "DAO1"}
        />
      </div>

      <hr className="text-white" />

      <div
        onClick={() => {
          setCurrLeft("DAO2");
        }}
        style={{ cursor: "pointer" }}
      >
        <DAOChannel img="/ens.png" name="DAO-2" active={currLeft === "DAO2"} />
      </div>

      <hr className="text-white" />

      <div
        onClick={() => {
          setCurrLeft("DAO3");
        }}
        style={{ cursor: "pointer" }}
      >
        <DAOChannel img="/bico.png" name="DAO-3" active={currLeft === "DAO3"} />
      </div>
    </div>
  );
}

export default BasicExample;
