import React from "react";

export interface ISkills {
  skill: string;
  src: string;
}
export interface ISoicalLinks {
  Link: string;
  icon: React.ReactNode;
  name: string;
}

export interface IEducation_Courses {
  title: string;
  place?: string;
  desc?: string;
}

export interface IProjects {
  title: string;
  desc?: string;
  image: string;
  links: {
    demo?: string;
    github?: string;
  };
}

export interface IForm {
  name: "firstName" | "lastName" | "email";
  type: string;
  placeholder: string;
  validation: {
    required: boolean;
    pattern?: RegExp;
  };
}

export interface IContact {
  icon: React.ReactNode;
  contact: string | number;
}
