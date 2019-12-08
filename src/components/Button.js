import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

//static adds property to class itself
//contextType cannot have any other name
class Button extends React.Component {
    static contextType = LanguageContext;

    /*
    using this.context
    render() {
        console.log(this.context);
        const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        return <button className="ui button primary">{text}</button>
    }*/
    
    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
                </LanguageContext.Consumer>
            </button>
        );
    }

    //using consumer
    render() {
        return (
            <ColorContext.Consumer>
            {(color) => this.renderButton(color)}
                
            </ColorContext.Consumer>
        ); 
    }
}

export default Button; 