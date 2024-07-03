import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  TextField,
  Text as JSSText,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { Employee, EmployeeFields, EmployeeProps } from 'src/atoms/GeneralComponents/Employee';

interface TeamListFields {
  Title: TextField;
  IntroText: TextField;
  Team: Array<Employees>;
}

interface Employees {
  fields: EmployeeFields;
}

interface TeamListProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: TeamListFields;
}

export const Default = (props: TeamListProps): JSX.Element => {
  return (
    <section id="team" className="team section-bg">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>
            <JSSText field={props.fields.Title} />
          </h2>
          <p>
            <JSSText field={props.fields.IntroText} />
          </p>
        </div>

        <div className="row">
          {props.fields.Team.slice(0, 4).map((employee, idx) => {
            const employeeProps: EmployeeProps = {
              params: props.params,
              fields: employee.fields,
              id: idx,
            };
            return <Employee key={idx} {...employeeProps}></Employee>;
          })}
        </div>
      </div>
    </section>
  );
};
