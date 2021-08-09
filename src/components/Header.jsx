import React from "react";
import {Tooltip} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faVirus} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

export const HeaderComponent = (props) => {
    const darkMode = () => {
        props.setThemeState(props.theme.dark);
    };
    const lightMode = () => {
        props.setThemeState(props.theme.light);
    };

    return(
        <div className="header-component">
            <div className="header-text">
                <h2><FontAwesomeIcon icon={faVirus} color="red"/> Covid-19 Reports Worldwide <FontAwesomeIcon icon={faVirus} color="red"/> </h2>
            </div>
            <div className="header-icons">
                {
                    (props.themeState.background === props.theme.light.background) ? (
                        <Tooltip title="Turn Dark Mode On ">
                            <span onClick={darkMode} style={{cursor:"pointer",marginRight: '.5rem'}}>
                                <FontAwesomeIcon icon={faSun} size="2x"/>
                            </span>
                        </Tooltip>
                    ) : (
                        <Tooltip title="Turn Dark Mode Off">
                            <span onClick={lightMode} style={{cursor:"pointer",marginRight: '.5rem'}}>
                                <FontAwesomeIcon icon={faMoon} color="white" size="2x"/>
                            </span>
                        </Tooltip>
                    )
                }
                <Tooltip title="Source Code">
                    <a style={{ marginRight: '.5rem' }} href="https://github.com/SiamAnzir/covid-19-reports-worldwide">
                        <FontAwesomeIcon icon={faGithub} size="2x" color={props.themeState.foreground}/>
                    </a>
                </Tooltip>
            </div>
        </div>
    )
}