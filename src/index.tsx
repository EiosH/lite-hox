import React, { useState, useEffect } from "react";
import { render } from "./renderer";

type Deps<T> = (model: T) => unknown[];
type ModelHook<T = any> = () => T;

export interface UseModel<T> {
  (depsFn?: Deps<T>): T;
  data?: T;
}

type Subscriber<T> = (data: T) => void;

type Container<T> = {
  subscribers: Set<Subscriber<T>>;
  notify: (data: T) => void;
};

const createModel = <T extends {}>(hook: ModelHook<T>) => {
  const Root: Container<T> = {
    subscribers: new Set(),
    notify(data: T) {
      this.subscribers.forEach((subscriber: Subscriber<T>) => {
        subscriber(data);
      });
    },
  };

  const useModel: UseModel<T> = () => {
    const [state, setState] = useState({});

    useEffect(() => {
      const subscriber = (data: T) => {
        setState(data);
      };

      Root.subscribers.add(subscriber);
      return () => {
        Root.subscribers.delete(subscriber);
      };
    }, [Root]);

    return state;
  };

  const Puppet = () => {
    Root.notify(hook());
    return <></>;
  };

  render(<Puppet />);
  return useModel;
};

export { createModel };
