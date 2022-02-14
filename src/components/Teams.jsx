import React from "react";
import { Row } from "react-bootstrap";
import { TeamList } from "./../Config";
import TeamCard from "./TeamCard";
const Teams = () => {
  return (
    <>
      <Row className="g-0 p-4 team-bg">
        <h1 className="text-center py-5 text-white">Our Team</h1>
        {TeamList.map((team, index) => (
          <TeamCard key={index} name={team.name} img={team.image} />
        ))}
      </Row>
    </>
  );
};

export default Teams;
