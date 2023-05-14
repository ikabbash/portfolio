import React from "react";
import SurveyNomad from "../../assets/SurveyNomad.png";
import { RiFileDownloadFill } from "react-icons/ri";

function PersonalProjects() {
  return (
    <>
      <div className="bg-card p-5 rounded-md shadow-md">
        <div className="relative">
          <img
            className="object-cover rounded-lg"
            src={SurveyNomad}
            alt="image"
            style={{ width: 580, height: 360 }}
          />
          <h1 className="text-2xl font-semibold top-1/4 right-0 md:absolute text-text1">
            SurveyNomad
          </h1>
          <div className="p-4 text-white rounded-sm bg-background px-5 md:absolute top-1/3 left-1/2 max-w-2xl mt-2">
            <p className="mb-2 text-right text-text2">
              A web app for creating surveys, forums, or timed quizzess with
              more settings compared to Google Forms and results displayed in
              tables or charts.
            </p>
          </div>
          <div className="md:absolute md:mt-12 right-0 z-20 bottom-24 text-text3">
            MERN Stack • Redux • Azure • Terraform
          </div>
          <a className="md:absolute md:mt-12 right-0 z-20 bottom-16">
            <RiFileDownloadFill className="text-3xl transition duration-300 ease hover:text-secondary text-text2" />
          </a>
        </div>
      </div>
    </>
  );
}

export default PersonalProjects;
