import { useRef, useEffect } from 'react';
function Modal({children, action, btnName }) {
    const exitBtn = useRef(null);
    const modal = useRef(null);

    const handleClick = () => {
        modal.current.close();
        action();
    }

    useEffect(() => {
        const newExitBtn = exitBtn.current

        exitBtn.current.addEventListener('click', handleClick);

        return () => {
            newExitBtn.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <dialog open ref={modal} type="modal" id="modal" className="modal">
            {children }
            <button className="button" ref={exitBtn}>{btnName}</button>
        </dialog>
    );
}

export default Modal;