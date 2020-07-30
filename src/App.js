import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PhotoViewer } from './PhotoViewer/PhotoViewer';
import { ThumbnailList } from './PhotoViewer/Thumbnails';
import * as styles from './PhotoViewer/PhotoViewer.module.scss';

export default function App() {
  return (
    <div>
       <div className={styles.intro}>

          <h1>React Photo Viewer</h1>
          <PhotoViewer imageUrl={"https://picsum.photos/id/237/200/300"}/>

          <ThumbnailList />

        </div>
    </div>
   
  );
}
