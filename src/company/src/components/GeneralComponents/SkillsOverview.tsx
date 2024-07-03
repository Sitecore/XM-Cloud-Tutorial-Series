import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  TextField,
  Text as JSSText,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { Skill, SkillFields, SkillProps } from 'src/atoms/GeneralComponents/Skill';

interface SkillOverviewFields {
  Title: TextField;
  IntroText: TextField;
  Skills: Array<Skills>;
}

interface Skills {
  fields: SkillFields;
}

interface SkillsOverviewProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: SkillOverviewFields;
}

export const Default = (props: SkillsOverviewProps): JSX.Element => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>
            <JSSText field={props.fields.Title} />
          </h2>
          <p>
            <JSSText field={props.fields.IntroText} />
          </p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            {props.fields.Skills.slice(0, 3).map((skill, idx) => {
              const skillProps: SkillProps = {
                params: props.params,
                fields: skill.fields,
                id: idx,
              };
              return <Skill key={idx} {...skillProps}></Skill>;
            })}
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            {props.fields.Skills.slice(3, 6).map((skill, idx) => {
              const skillProps: SkillProps = {
                params: props.params,
                fields: skill.fields,
                id: idx,
              };
              return <Skill key={idx} {...skillProps}></Skill>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
