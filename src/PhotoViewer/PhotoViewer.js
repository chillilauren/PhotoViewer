// import React
import React from "react";
import * as styles from "./PhotoViewer.module.scss";


// declare new function
export function PhotoViewer(props) {
    return (
        // return JSX
        <div className={styles.selectedPhotoContainer}>
            <img src={props.imageUrl}/>
        </div>
    );
}