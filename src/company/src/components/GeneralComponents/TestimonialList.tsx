import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  ImageField,
  TextField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { Testimonial, TestimonialProps } from 'src/atoms/GeneralComponents/Testimonial';

type ResultTestimonialField = {
  fields: {
    Name: TextField;
    Role: TextField;
    Image: ImageField;
    Quote: TextField;
  };
};

interface Fields {
  items: ResultTestimonialField[];
}

interface TestimonialListProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
}

export const Default = (props: TestimonialListProps): JSX.Element => {
  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container">
        <div className="row">
          {props.fields.items.map((testimonial, idx) => {
            const testimonialProps: TestimonialProps = {
              params: props.params,
              fields: testimonial.fields,
              id: idx,
            };
            return <Testimonial key={idx} {...testimonialProps}></Testimonial>;
          })}
        </div>
      </div>
    </section>
  );
};
