import React from "react";
import Layout from "../components/Layout";
import { Breadcrumbs, Typography, Link } from "@mui/material";
import FilterProduct from "../components/projects/FilterProduct";

const Projects = () => {
  const hoverColor = {
    "&:hover": {
      color: "#D04713",
    },
  };
  return (
    <Layout>
      <div className="relative w-full">
        <img
          src="assets/project/page-banner.png"
          alt="projects banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <h2 className="text-[#B8B9B8] text-[60px] font-bold leading-tight mb-6 tracking-tight">
            Latest Projects
          </h2>
          <div>
            <Breadcrumbs sx={{ color: "#B8B9B8" , fontSize: "18px" }} aria-label="breadcrumb">
              <Link underline="hover" sx={hoverColor}  color="inherit" href="/">
                Home
              </Link>
              <Typography>
                Projects
              </Typography>
            </Breadcrumbs>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <FilterProduct />
      </div>
    </Layout>
  );
};

export default Projects;
