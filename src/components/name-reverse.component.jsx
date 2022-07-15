import { reverse } from '../helpers';

export const NameReverse = ({ name }) => (
  <p className="name-reversed">
    Also, {name} backwards is {reverse(name)}
  </p>
);
