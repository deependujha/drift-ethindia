import Image from 'next/image'
import ChatRoom from '../components/chatroom/DashBoard'
import styles from '../styles/Home.module.css'
import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    <Container style={{height: "100vh"}}>
      <ChatRoom/>
    </Container>
  )
}
