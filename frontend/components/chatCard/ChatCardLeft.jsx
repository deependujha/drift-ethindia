import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';

function ChatCard({ sender, msg }) {
	return (
		<div className="d-flex">
			<Image
				src="/user.png"
				height="30"
				width="30"
				className="mx-2"
				alt="icon"
			/>
			<Card style={{ width: '35rem' }}>
				<Card.Body>
					<Row>
						<Col sm={9}>
							<Card.Subtitle className="mb-2 text-muted">
								{sender}
							</Card.Subtitle>
							<Card.Text>{msg}</Card.Text>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</div>
	);
}

export default ChatCard;
