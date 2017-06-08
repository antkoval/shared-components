import styled from 'styled-components';

const ListItem = styled.ul.withConfig({ displayName: 'ListItem' })`
  margin: 0 0 0.5em 2em;
  padding: 0;

  & p {
    margin: 0 0 0.5em;
  }
`;

ListItem.usage = `
# ListItem

A basic list item.

\`\`\`
<ListItem>Foo</ListItem>
\`\`\`
`;

export default ListItem;