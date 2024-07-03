import React from 'react';
import { ComponentParams, ImageField, TextField, Image as JssImage, Text as JSSText } from '@sitecore-jss/sitecore-jss-nextjs';

export interface EmployeeFields {
  Name: TextField;
  Role: TextField;
  Image: ImageField
}

export interface EmployeeProps {
  params: ComponentParams;
  fields: EmployeeFields;
  id: number;
}

export const Employee = (props: EmployeeProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" data-aos="fade-up">
            <div className="member-img">
              <JssImage field={props.fields.Image} className="img-fluid"/>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4><JSSText field={props.fields.Name}/></h4>
              <span><JSSText field={props.fields.Role}/></span>
            </div>
          </div>
        </div>
  );
};
