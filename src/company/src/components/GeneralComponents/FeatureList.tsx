import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  TextField,
  Text as JSSText,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { Feature, FeatureFields, FeatureProps } from 'src/atoms/GeneralComponents/Feature';

interface FeatureListFields {
  Title: TextField;
  IntroText: TextField;
  Features: Array<Feature>;
}

interface Feature {
  fields: FeatureFields;
}

interface FeatureListProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: FeatureListFields;
}

export const Default = (props: FeatureListProps): JSX.Element => {
  return (
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>
            <JSSText field={props.fields.Title} />
          </h2>
          <p>
            <JSSText field={props.fields.IntroText} />
          </p>
        </div>
        <div className="row">
          {props.fields.Features.slice(0, 12).map((feature, idx) => {
            const featureProps: FeatureProps = {
              params: props.params,
              fields: feature.fields,
              id: idx,
            };
            return <Feature key={idx} {...featureProps}></Feature>;
          })}
        </div>
      </div>
    </section>
  );
};
