import React from 'react';

export default function PopupWithForm(props) {
    return (
        <div
            className={`popup page__popup popup_type_${props.name}`}>
            <div
                className="popup__container">
                <button
                    className="popup__close-button"
                    type="button"
                    aria-label="Закрыть"
                />
                <h2 className="popup__title">{props.title}</h2>
                <form
                    className="popup__form"
                    name={props.name}
                    noValidate>
                    {props.children}
                    <button
                        className="popup__save-button"
                        type="submit">{props.buttonText}
                    </button>
                </form>

            </div>
        </div>
    );
}