import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';

function ChatCard() {
	return (
		<div className="d-flex justify-content-end">
			<Card style={{ width: '35rem' }}>
				<Card.Body>
					<Row>
						<Col sm={9}>
							<Card.Subtitle className="mb-2 text-muted">
								Deependu
							</Card.Subtitle>
							<Card.Text>Drift is on the way... to Drift!</Card.Text>
						</Col>
					</Row>
				</Card.Body>
			</Card>
			<Image
				src="/user.png"
				height="30"
				width="30"
				className="mx-2"
				alt="icon"
			/>
		</div>
	);
}

export default ChatCard;
