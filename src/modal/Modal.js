import React from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';

const defaultProps = {
    show : false,
    overlayStyle : {},
    contentStyle : {},
    dialogStyle : {},
    closeIconStyle : {
        src : 'https://d30y9cdsu7xlg0.cloudfront.net/png/53504-200.png',
        cursor:'pointer', 
        float:'right', 
        marginTop: '-13px', 
        marginRight: '-13px', 
        width: '20px',
        alternativeText : 'CROSS'
    },
};

const Modal = (props) => {

    
    //State and Ref of the Component
    const firstRender = React.useRef(true);

    React.useEffect(()=> {
        
        const listenKeyboard = (event) => {
            console.log(event);
            if (event.key === 'Escape' || event.keyCode === 27) {
                props.onClose();    
            }
        }

        if (firstRender.current && props.onClose) {
            firstRender.current = false;
            window.addEventListener('keydown', listenKeyboard, true);
            return
        }
        
        return () => {
            if (props.onClose) {
                window.removeEventListener('keydown', listenKeyboard, true);
            }
        }
    });

    //Click Handlers
    const onOverlayClick = () => {
        props.onClose();
    }

    const onDialogClick = (event) => {
        event.stopPropagation();
    }

    

    if(!props.show){
        return null;
    }

    return (
        <>
            <div className={classes.Overlay} 
                style={props.overlayStyle} />
            
            <div className={classes.Content} 
                style={props.contentStyle} 
                onClick={() => onOverlayClick()} >
                
                <div className={classes.Dialog} 
                    style={props.dialogStyle} 
                    onClick={(event) => onDialogClick(event)}>

                    <img style={props.closeIconStyle} 
                        src= {props.closeIconStyle.src} 
                        alt= {props.closeIconStyle.alternativeText} 
                        onClick={onOverlayClick}/>
                    
                    {props.children}

                </div>
            </div>
        </>
    );
}

Modal.propTypes = {
    onClose : PropTypes.func.isRequired
}

Modal.defaultProps = defaultProps;
export default Modal;