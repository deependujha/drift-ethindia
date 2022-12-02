import ProgressBar from "react-bootstrap/ProgressBar";

function Yes({yes}) {
  const now = yes;
  return <ProgressBar variant="success" animated now={now} label={`${now}%`} />;
}

export default Yes;
