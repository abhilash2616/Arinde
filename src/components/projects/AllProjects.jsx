import React from "react";
import ArchitectureProjects from "./ArchitectureProjects";
import InteriorProjects from "./InteriorProjects";
import LandscapeProjects from "./LandscapeProjects";
import RemodelingProjects from "./RemodelingProjects";

const AllProjects = () => {
  return (
    <div>
      <ArchitectureProjects />
      <InteriorProjects />
      <LandscapeProjects />
      <RemodelingProjects />
    </div>
  );
};

export default AllProjects;
