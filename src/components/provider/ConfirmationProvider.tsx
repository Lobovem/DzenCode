import { Context, FC, HTMLAttributes, createContext, useContext, useState } from 'react';
import { PopUp } from '../PopUp/PopUp';

type ConfirmationContext = {
  getConfirmation: () => Promise<boolean>;
};

type ConfirmModalParams = {
  onClose: () => void;
  onConfirm: () => void;
};

const confirmationParamsDefault: ConfirmModalParams = {
  onClose: () => {},
  onConfirm: () => {},
};

const confirmationContext = createStrictContext<ConfirmationContext>();

export const useGetConfirmation = () => {
  const { getConfirmation } = useStrictContext(confirmationContext);

  return getConfirmation;
};

export const ConfirmationProvider: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children } = props;
  const [modalParams, setModalParams] = useState<ConfirmModalParams>();

  const getConfirmation = () => {
    return new Promise<boolean>((resolve) => {
      setModalParams({
        ...confirmationParamsDefault,

        onConfirm: () => {
          setModalParams(undefined);
          resolve(true);
        },
        onClose: () => {
          setModalParams(undefined);
          resolve(false);
        },
      });
    });
  };

  return (
    <confirmationContext.Provider
      value={{
        getConfirmation,
      }}
    >
      {children}

      {modalParams && <PopUp params={modalParams} />}
    </confirmationContext.Provider>
  );
};

export function useStrictContext<T>(context: Context<T | null>) {
  // console.log("output_log: passed context =>>>", context);
  const value = useContext(context);
  // console.log("output_log: value =>>>", value);
  if (value === null) throw new Error('Strict context not passed');
  return value as T;
}

export function createStrictContext<T>() {
  return createContext<T | null>(null);
}
