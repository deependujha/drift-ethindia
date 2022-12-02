import ProgressBar from "react-bootstrap/ProgressBar";

function No({no}) {
  const now = no;
  return <ProgressBar variant="danger" animated now={now} label={`${now}%`} />;
}

export default No;
