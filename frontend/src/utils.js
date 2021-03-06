// The place to put all helper methods that do not necessarily belong to a specific component
// Once this file gets too crowded, create an utils folder and start seperating the exported helper methods

// import {useEffect, useRef, useState} from "react";
import ipRegex from 'ip-regex';

/**
 * Transforms a javascript object into a query string.
 * @param object The source object. Example: {a: 5, b: 10}
 * @returns {string} The resulting query string. Example 'a=5&b=10'
 */
export const serializeQueryString = object => {
  return Object.entries(object).map(([key, value]) => `${key}=${value}`).join('&');
};

/**
 * Set the src of a html5 <video> element and start playing
 * @param videoRef The reference to the video element
 * @param stream The stream that should be played by the referenced video element
 * @param muted Whether or not the audio of the stream should be muted
 */
export const setVideoSrc = (videoRef, stream, muted = true) => {
  if (videoRef.current && stream) {
    videoRef.current.srcObject = stream;
    videoRef.current.oncanplay = () => { // FIXME rarely does not get fired for all peers, so remote stream can appear white
      if (videoRef.current) {
        videoRef.current.play();
        videoRef.current.muted = muted;
      }
    };
  }
};

export const clearStreamTracks = stream => {
  if (stream) {
    if (!stream.getTracks) {
      console.error('something wrong with the stream:', stream);
      return;
    }

    stream.getTracks().forEach(track => track.stop());
  }
};

export const getPersistedData = (key) => {
  const dataJson = localStorage.getItem(key);
  return dataJson ? JSON.parse(dataJson) : {};
};

export const persistData = (key, data) => {
  const dataStringified = JSON.stringify(data);
  localStorage.setItem(key, dataStringified);
};

export const isIpAddress = (testedString) => {
  return ipRegex().test(testedString);
};
