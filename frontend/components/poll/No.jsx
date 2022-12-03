import ProgressBar from "react-bootstrap/ProgressBar";

function No({no}) {
  const now = no*25;
  return <ProgressBar variant="danger" animated now={now} label={`${now}%`} />;
}

export default No;
