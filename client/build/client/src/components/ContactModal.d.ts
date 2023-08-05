import React, { Dispatch, SetStateAction } from 'react';
export default function Modal({ success, setModalOpen }: {
    success: boolean;
    setModalOpen: Dispatch<SetStateAction<any>>;
}): React.JSX.Element;
