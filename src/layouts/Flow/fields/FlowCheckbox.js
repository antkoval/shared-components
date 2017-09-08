import field from './flowField';
import Checkbox from '../../../components/Checkbox';
import sharedComponent from '../../../sharedComponent';

const FlowCheckbox = field(Checkbox);

export default sharedComponent(`
A prebuilt \`Flow.Item\` with a \`Checkbox\` component inside, designed for use with Redux Form.

\`\`\`
<Flow.Row>
  <Field
    component={Flow.fields.Checkbox}
    name="foo"
    description="Is foo?"
  />
</Flow.Row>
\`\`\`
`)(FlowCheckbox);
