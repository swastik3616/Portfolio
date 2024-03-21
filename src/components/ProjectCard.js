import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href="https://github.com/"><img src={projImg1} alt="" /></a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
