import { createLogger } from 'redux-logger';
import { hooks, environments, positions, register } from 'universal-redux';

register(hooks.CREATE_REDUX_MIDDLEWARE, ({ middleware, ...other }) => {
  return {
    ...other,
    middleware: [
      ...middleware,
      createLogger({ collapsed: true })
    ]
  };
}, {
  position: positions.BEFORE,
  environments: [
    environments.CLIENT,
    environments.DEVELOPMENT
  ]
});

