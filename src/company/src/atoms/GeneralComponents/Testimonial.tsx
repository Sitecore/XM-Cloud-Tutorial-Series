import React from 'react';
import { ComponentParams, ImageField, TextField, Image as JssImage, Text as JSSText } from '@sitecore-jss/sitecore-jss-nextjs';

export interface TestimonialFields {
  Name: TextField;
  Role: TextField;
  Image: ImageField;
  Quote: TextField;
}

export interface TestimonialProps {
  params: ComponentParams;
  fields: TestimonialFields;
  id: number;
}

export const Testimonial = (props: TestimonialProps): JSX.Element => {

  return (
    <div className="col-lg-6" data-aos="fade-up">
      <div className="testimonial-item">
        <JssImage field={props.fields.Image} className="testimonial-img"/>
        <h3><JSSText field={props.fields.Name}/></h3>
        <h4><JSSText field={props.fields.Role}/></h4>
        <p>
          <i className="bx bxs-quote-alt-left quote-icon-left"></i>
          <JSSText field={props.fields.Quote}/>
          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
        </p>
      </div>
    </div>
  );
};
