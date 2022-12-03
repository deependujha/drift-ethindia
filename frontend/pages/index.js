import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import { ethers } from "ethers";
import { useRouter } from "next/router";

function landing({ setMySigner, mySigner }) {
  const router = useRouter();

  const connectWithMetaMask = async () => {
    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    // to check with which network metamask is currently connected, and show required alert
    const { chainId } = await provider.getNetwork();
    // console.log(chainId);

    if (chainId !== 80001) {
      alert("Please switch to the polygon mumbai testnet");
      return;
    }

    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    let signer = provider.getSigner();
    // const addr = await signer.getAddress();
    // console.log("signer's address: ", addr);
    setMySigner(signer);
  };

  if (mySigner !== "") {
    router.push("/community");
  }

  return (
    <div>
      <Image src="/landing_bg.png" layout="fill" alt="img..." />

      <div className="metamask">
        <div className="text-white ">
          <p className="text-8xl italic">DRIFT</p>
          <p className="text-3xl">Decenteralised Drifting through DAOs </p>
        </div>
        <Button
          variant="outline-info"
          className="d-flex text-center mt-10"
          onClick={connectWithMetaMask}
        >
          <Image
            src="/metamask_landing_logo.png"
            height="35"
            width="35"
            alt="img"
            className="me-2"
          />
          Connect With MetaMask
        </Button>
      </div>
    </div>
  );
}

export default landing;
