import { forwardRef, type Ref } from "react";
import { Form } from "../Form";
import cn from "classnames";

import styles from "./styles.module.css";
import sectionStyles from "../Section/styles.module.css";

export const FormSection = forwardRef<HTMLDivElement>(
  (_props, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        id="form"
        className={cn(styles.formSection, sectionStyles.section)}
        ref={ref}
      >
        <div className={sectionStyles.container}>
          <Form />
        </div>
      </div>
    );
  },
);

FormSection.displayName = "FormSection";
