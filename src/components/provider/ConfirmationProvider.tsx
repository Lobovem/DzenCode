import { Context, FC, HTMLAttributes, createContext, useContext, useState } from 'react';
import { PopUp } from '../PopUp/PopUp';
interface ConfirmationProps extends HTMLAttributes<HTMLDivElement> {}

export type ConfirmationContext = {
  getConfirmation: (params: ConfirmationParams) => Promise<boolean>;
  closeConfirmation: () => void;
};

export type ConfirmModalParams = {
  title: string;
  description: string;
  closeText: string;
  confirmText: string;
  onClose: () => void;
  onConfirm: () => void;
};

export const confirmationParamsDefault: ConfirmModalParams = {
  title: 'Confirm action',
  description: 'Are you sure you want to continue?',
  closeText: 'Cancel',
  confirmText: 'Confirm',
  onClose: () => {},
  onConfirm: () => {},
};

export type ConfirmationParams = {
  title?: string;
  description?: string;
  closeText?: string;
  confirmText?: string;
};

export const confirmationContext = createStrictContext<ConfirmationContext>();

export const useGetConfirmation = () => {
  const { getConfirmation } = useStrictContext(confirmationContext);

  return getConfirmation;
};

export const ConfirmationProvider: FC<ConfirmationProps> = (props) => {
  const { children } = props;
  const [modalParams, setModalParams] = useState<ConfirmModalParams>();

  const closeConfirmation = () => {
    modalParams?.onClose();
  };

  const getConfirmation = (params: ConfirmationParams) => {
    return new Promise<boolean>((resolve) => {
      setModalParams({
        ...confirmationParamsDefault,
        ...params,

        onConfirm: () => {
          setModalParams(undefined);
          resolve(true);
        },
        onClose: () => {
          closeConfirmation();
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
        closeConfirmation,
      }}
    >
      {children}

      {/* {modalParams && <PopUp params={modalParams} />} */}
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
