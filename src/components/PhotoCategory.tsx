// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// interface PhotoCategoryProps {
//   title: string;
//   photos: { id: number; src: string; alt: string }[];
// }

// const PhotoCategory: React.FC<PhotoCategoryProps> = ({ title, photos }) => {
//   return (
//     <div className="my-5">
//       <h2 className="text-center mb-5">{title}</h2>
//       <Container>
//         <Row xs={1} sm={2} md={3} lg={4} className="g-4">
//           {photos.map((photo) => (
//             <Col key={photo.id}>
//               <Card>
//                 <Card.Img variant="top" src={photo.src} alt={photo.alt} />
//                 <Card.Body>
//                   <Button variant="primary">View</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default PhotoCategory;
export {};
